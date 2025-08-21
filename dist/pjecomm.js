/**
 * @deprecated
 */
function pjecommLoader() {
  /* eslint-disable no-unreachable */
  /* eslint-disable no-console */
  /**
   * Checa se um elemento existe at\u00e9 que ele exista ou o timeout seja atingido
   * Recebe uma fun\u00e7\u00e3o que retorna um elemento a ser verificado
   * @param {any} getter
   * @param {number} timeout
   * @returns {Promise<any | null>}
   */
  async function asyncGetter(getter, timeout = 10000) {
    return new Promise(resolve => {
      if (!(typeof getter === 'function')) {
        resolve(null)
        return
      }
      try {
        const _res = getter()
        if (_res) {
          resolve(_res)
          return
        }
      } catch (e) {
        //
      }
      const interval = setInterval(() => {
        try {
          const res = typeof getter === 'function' ? getter() : null
          if (res) {
            clearInterval(interval)
            resolve(res)
          }
        } catch (e) {
          //
        }
      }, 100)
      setTimeout(() => {
        try {
          clearInterval(interval)
          resolve(null)
        } catch (error) {
          resolve(null)
          console.error(error)
        }
      }, timeout)
      //
    })
  }

  ;(function IIFE() {
    if (window['__pmr_run_once__']) return
    Object.defineProperty(window, '__pmr_run_once__', {
      value: Symbol('pmrOnce'),
      writable: false,
      enumerable: false
    })

    const refArray = []
    const componentes = {}
    const servicos = {}
    // window.__refArray__ = refArray
    // window.__componentes__ = componentes
    // window.__servicos__ = servicos

    asyncGetter(() => {
      return !!window.sessionStorage && !!servicos.utilService?.config?.pjePayload?.CONSTANTES
    }).then(() => {
      try {
        if (sessionStorage) {
          const { currentUser: _currentUser, pjeLegacyUrl: _pjeLegacyUrl } = sessionStorage
          const {
            TIPO_JUSTICA,
            WEB_ROOT,
            PDPJ_MARKETPLACE,
            VERSAO_LEGACY,
            INSTANCIA,
            ID_USUARIO_LOCALIZACAO
          } = servicos.utilService.config.pjePayload.CONSTANTES

          const currentUser = JSON.parse(_currentUser)
          const pjeLegacyUrl = JSON.parse(_pjeLegacyUrl)
          enviarMensagemExtensao('infoGeral', 'infoInit', {
            currentUser,
            pjeLegacyUrl,
            constantes: {
              TIPO_JUSTICA,
              WEB_ROOT,
              PDPJ_MARKETPLACE,
              VERSAO_LEGACY,
              INSTANCIA,
              ID_USUARIO_LOCALIZACAO
            }
          })
        } else {
          // console.warn('[PJE+R] sessionStorage n\u00e3o encontrado')
        }
      } catch (error) {
        // console.warn('[PJE+R] Erro ao obter informa\u00e7\u00f5es gerais', error)
      }
    })

    setSymbol(window)

    function setSymbol(obj) {
      Object.defineProperty(obj, window['__pmr_run_once__'], {
        value: true,
        writable: false,
        enumerable: false
      })
    }

    function organizarRefs(refArray) {
      Object.values(refArray).forEach(ref => {
        getObjects(ref)
      })
      refArray.providers?.forEach(provider => {
        getObjects(provider)
      })
    }

    function getObjects(ref) {
      if (ref?.obj?.component) {
        Object.keys(ref.obj.component).forEach(key => {
          const lowerCaseKey = key.toLocaleLowerCase()
          if (lowerCaseKey.includes('service')) {
            servicos[key] = ref.obj.component[key]
          } else if (lowerCaseKey.includes('component')) {
            componentes[key] = ref.obj.component[key]
            refArray[key] = ref.obj.component[key]
          }
        })
      }
    }

    // [extractor]
    function extractor(refArray) {
      refArray = refArray || {}
      refArray.providers = refArray.providers || []

      //Bind
      let bind = Function.prototype.apply.bind(Function.prototype.bind)
      Object.defineProperty(Function.prototype, 'bind', {
        value: function (obj) {
          let boundFunction = bind(this, arguments)
          if (!obj || obj.__proto__.constructor.name === 'u') return boundFunction
          if (!obj.__capt__) !refArray.includes(obj) && refArray.push(obj)
          boundFunction.boundObject = obj
          return boundFunction
        }
      })
      Object.freeze(Function.prototype.bind)

      //Assign
      let assign = Object.assign
      Object.assign = function (target, ...sources) {
        if (
          target &&
          Object.keys(target).join(', ').toLocaleLowerCase().includes('component') &&
          !target.__capt__
        ) {
          !refArray.includes(target) && refArray.push(target)
        }
        sources.forEach(source => {
          if (
            source &&
            Object.keys(source).join(', ').toLocaleLowerCase().includes('component') &&
            !source.__capt__
          ) {
            !refArray.includes(source) && refArray.push(source)
          }
        })
        return assign.apply(this, arguments)
      }
      Object.freeze(Object.assign)

      //Push
      const push = Function.prototype.apply.bind(Array.prototype.push)
      Object.defineProperty(Array.prototype, 'push', {
        value: function (obj) {
          if (obj && obj.component) {
            const comp = obj.component
            refArray[comp.constructor.name] = refArray[comp.constructor.name] || {
              const: comp.constructor,
              obj
            }
            getProviders(obj)
            if (Object.values(obj)) {
              Object.values(obj).forEach(_obj => {
                if (_obj && _obj.component) {
                  const _comp = _obj.component
                  refArray[_comp.constructor.name] = refArray[_comp.constructor.name] || {
                    const: _comp.constructor,
                    obj: _obj
                  }
                  getProviders(_obj)
                }
              })
            }
          }
          return push(this, arguments)
        }
      })
      Object.freeze(Array.prototype.push)

      // getProviders
      function getProviders(obj) {
        const providers = obj.root?.ngModule?._providers
        if (providers && Array.isArray(providers)) {
          providers.forEach(provider => {
            if (provider && !refArray.providers.includes(provider)) {
              refArray.providers.push(provider)
            }
          })
        }
        refArray.providers.forEach(provider => {
          if (provider.tick) {
            refArray.applicationRef = provider
          }
          if (refArray.applicationRef) {
            refArray.zone = refArray.applicationRef._zone
          }
        })
        Object.values(obj).forEach(objValue => {
          if (objValue && objValue.component?.cssClass == 'selecionar-etiquetas') {
            refArray.etiquetasComponent = objValue.component
            refArray.listaEtiquetas = objValue.component.listaEtiquetas.etiquetas
          }
          if (objValue && objValue.component?.tarefaSelecionada) {
            refArray._tarefasComponent = objValue.component
            refArray.processosTarefa = objValue.component.processosTarefa
            refArray.processosMarcados = objValue.component.processosMarcados
          }
        })
      }
    }
    // [/extractor]

    function criarListener() {
      const listener = e => {
        const data = e.data
        if (!data || !data.origem || !data.tipo || !data.mensagem || data.origem !== 'PJEMaisR')
          return
        organizarRefs(refArray, componentes, servicos)
        const { tipo, mensagem } = data

        if (data.logInfo) {
          console.log('Evento -> ', e)
          console.log('componentes', componentes)
          console.log('Ref Array -> ', refArray)
          console.log('Servi\u00e7os -> ', servicos)
        }

        switch (tipo) {
          case 'etiqueta': {
            etiquetaHandler(mensagem)
            break
          }
          case 'certidao': {
            certidaoHandler(mensagem)
            break
          }
          case 'tarefa': {
            tarefaHandler(mensagem)
            break
          }
          case 'processo': {
            processoHandler(mensagem)
            break
          }
          case 'notificacao': {
            notificacaoHandler(mensagem)
            break
          }
          default: {
            break
          }
        }
        e.stopPropagation()
      }
      window.addEventListener('message', listener, {
        capture: true
      })
      return listener
    }
    /**
     * {@link criarListener}
     */
    function etiquetaHandler(mensagem) {
      if (!mensagem || !mensagem.acao) {
        console.warn('[PJE+R] etiquetaHandler: Mensagem inv\u00e1lida')
        return
      }
      const etiquetaService = servicos.etiquetaService
      const { acao } = mensagem

      switch (acao) {
        case 'obterTodas': {
          const tags = refArray.listaEtiquetas
          if (tags && tags.length > 0) {
            enviarMensagemExtensao('etiquetasResposta', 'obterTodas', tags)
            break
          } else {
            isDisponivel(etiquetaService) &&
              etiquetaService.getTodasTags().subscribe(tags => {
                enviarMensagemExtensao('etiquetasResposta', 'obterTodas', tags)
              })
          }
          break
        }
        case 'criar': {
          break
        }
        case 'editar': {
          break
        }
        case 'excluir': {
          break
        }
        case 'listar': {
          break
        }
        case 'incluir': {
          const { nomeTagCompleto, idProcesso } = mensagem.conteudo
          isDisponivel(etiquetaService) &&
            etiquetaService
              .incluirProcessoTag({
                tag: nomeTagCompleto,
                idProcesso: '' + idProcesso
              })
              .subscribe(tag => {
                if (tag) {
                  const zone = refArray.zone
                  zone?.run(() => {
                    const tarefasComp = refArray._tarefasComponent
                    tarefasComp.processosTarefa.processos.forEach(processo => {
                      if (
                        (processo.idProcesso === idProcesso ||
                          idProcesso === '' + processo.idProcesso) &&
                        !processo.tagsProcessoList.includes(tag)
                      ) {
                        processo.tagsProcessoList.push(tag)
                      }
                    })
                  })

                  if (mensagem.conteudo.notificar) {
                    notificacaoHandler({
                      acao: 'sucesso',
                      conteudo: 'Etiqueta adicionada com sucesso'
                    })
                  }
                } else if (mensagem.conteudo.notificar) {
                  notificacaoHandler({
                    acao: 'alerta',
                    conteudo: `N\u00e3o foi poss\u00edvel adicionar a etiqueta: ${nomeTagCompleto}`
                  })
                }
              })
          break
        }
      }
    }

    /**
     * {@link criarListener}
     */
    function certidaoHandler(mensagem) {
      if (!mensagem || !mensagem.acao) {
        console.warn('[PJE+R] certidaoHandler: Mensagem inv\u00e1lida')
        return
      }
      const certidaoService = servicos.certidaoService
      const { acao } = mensagem

      switch (acao) {
        case 'obterTodas': {
          const certidoes = refArray.listaCertidoes
          if (certidoes && certidoes.length > 0) {
            enviarMensagemExtensao('certidoesResposta', 'obterTodas', certidoes)
            break
          } else {
            isDisponivel(certidaoService) &&
              certidaoService.getTodasCertidoes().subscribe(certidoes => {
                enviarMensagemExtensao('certidoesResposta', 'obterTodas', certidoes)
              })
          }
          break
        }
        case 'criar': {
          break
        }
        case 'editar': {
          break
        }
        case 'excluir': {
          break
        }
        case 'listar': {
          break
        }
        case 'incluir': {
          const { nomeCertidao, idProcesso } = mensagem.conteudo
          isDisponivel(certidaoService) &&
            certidaoService
              .incluirProcessoCertidao({
                certidao: nomeCertidao,
                idProcesso: '' + idProcesso
              })
              .subscribe(certidao => {
                if (certidao) {
                  const zone = refArray.zone
                  zone?.run(() => {
                    const tarefasComp = refArray._tarefasComponent
                    tarefasComp.processosTarefa.processos.forEach(processo => {
                      if (
                        (processo.idProcesso === idProcesso ||
                          idProcesso === '' + processo.idProcesso) &&
                        !processo.certidoesProcessoList.includes(certidao)
                      ) {
                        processo.certidoesProcessoList.push(certidao)
                      }
                    })
                  })

                  if (mensagem.conteudo.notificar) {
                    notificacaoHandler({
                      acao: 'sucesso',
                      conteudo: 'Certidão adicionada com sucesso'
                    })
                  }
                } else if (mensagem.conteudo.notificar) {
                  notificacaoHandler({
                    acao: 'alerta',
                    conteudo: `N\u00e3o foi poss\u00edvel adicionar a certidão: ${nomeCertidao}`
                  })
                }
              })
          break
        }
        case 'incluirEmLote': {
          const { processos, modeloCertidao, conteudoCertidao } = mensagem.conteudo
          
          if (!processos || !Array.isArray(processos) || processos.length === 0) {
            notificacaoHandler({
              acao: 'erro',
              conteudo: 'Lista de processos inválida ou vazia'
            })
            return
          }

          let sucessos = 0
          let falhas = 0
          const resultados = []

          // Processar cada processo sequencialmente para evitar sobrecarga
          async function processarProcessos() {
            for (let i = 0; i < processos.length; i++) {
              const processo = processos[i]
              try {
                await adicionarCertidaoProcesso(processo, modeloCertidao, conteudoCertidao)
                sucessos++
                resultados.push({ processo, status: 'sucesso' })
                
                // Notificar progresso
                if (mensagem.conteudo.notificar) {
                  notificacaoHandler({
                    acao: 'info',
                    conteudo: `Processo ${processo}: Certidão adicionada (${i + 1}/${processos.length})`
                  })
                }
              } catch (erro) {
                falhas++
                resultados.push({ processo, status: 'falha', erro: erro.message })
                
                if (mensagem.conteudo.notificar) {
                  notificacaoHandler({
                    acao: 'alerta',
                    conteudo: `Processo ${processo}: Erro ao adicionar certidão`
                  })
                }
              }
              
              // Aguardar um pouco entre as requisições para não sobrecarregar
              if (i < processos.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000))
              }
            }
            
            // Notificar resultado final
            if (mensagem.conteudo.notificar) {
              notificacaoHandler({
                acao: sucessos > 0 ? 'sucesso' : 'erro',
                conteudo: `Lote concluído: ${sucessos} sucessos, ${falhas} falhas`
              })
            }
            
            // Enviar resultado detalhado para a extensão
            enviarMensagemExtensao('certidoesResposta', 'incluirEmLote', {
              total: processos.length,
              sucessos,
              falhas,
              resultados
            })
          }
          
          processarProcessos()
          break
        }
      }
    }

    /**
     * Adiciona uma certidão a um processo específico usando a API do PJe
     * @param {string} numeroProcesso - Número do processo
     * @param {string} modeloCertidao - Modelo/tipo da certidão
     * @param {string} conteudoCertidao - Conteúdo HTML da certidão
     * @returns {Promise<boolean>} - True se sucesso, false se falha
     */
    async function adicionarCertidaoProcesso(numeroProcesso, modeloCertidao, conteudoCertidao) {
      try {
        // Construir URL da página de detalhes do processo
        const baseUrl = window.location.origin
        const url = `${baseUrl}/pje/Processo/ConsultaProcesso/Detalhe/listAutosDigitais.seam?idProcesso=${numeroProcesso}`
        
        // Preparar dados da requisição baseados no HAR
        const formData = new FormData()
        formData.append('AJAXREQUEST', '_viewRoot')
        formData.append('formularioUpload', 'formularioUpload')
        formData.append('cbTDDecoration:cbTD', '7') // Tipo de documento (7 = Certidão)
        formData.append('ipDescDecoration:ipDesc', modeloCertidao || 'CERTIDÃO')
        formData.append('ipNroDecoration:ipNro', '')
        formData.append('modTDDecoration:modTD', 'org.jboss.seam.ui.NoSelectionConverter.noSelectionValue')
        formData.append('j_id1054', 'true')
        formData.append('descEv', '')
        formData.append('selectedEventsTable:0:j_id1121', '1')
        formData.append('raTipoDocPrincipal', 'HTML')
        formData.append('docPrincipalEditorTextArea', conteudoCertidao || '<p>Certidão gerada automaticamente</p>')
        formData.append('javax.faces.ViewState', 'j_id4')
        formData.append('j_id1194', 'j_id1194')
        formData.append('AJAX:EVENTS_COUNT', '1')
        
        // Fazer a requisição
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': '*/*',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const responseText = await response.text()
        
        // Verificar se a resposta indica sucesso
        if (responseText.includes('error') || responseText.includes('exception')) {
          throw new Error('Resposta do servidor indica erro')
        }
        
        console.log(`[PJE+R] Certidão adicionada com sucesso ao processo ${numeroProcesso}`)
        return true
        
      } catch (erro) {
        console.error(`[PJE+R] Erro ao adicionar certidão ao processo ${numeroProcesso}:`, erro)
        throw erro
      }
    }

    /**
     * {@link criarListener}
     */
    function tarefaHandler(mensagem) {
      //
      if (!mensagem || !mensagem.acao) {
        console.warn('[PJE+R] tarefaHandler: Mensagem inv\u00e1lida')
        return
      }
      //const tarefaService = servicos.tarefaService
      const { acao } = mensagem
      switch (acao) {
        case 'obterAtuais': {
          const tarefaComponent = refArray._tarefasComponent
          if (tarefaComponent) {
            const tarefas = tarefaComponent.processosTarefa?.processos
            if (tarefas && tarefas.length > 0) {
              enviarMensagemExtensao('tarefasResposta', 'obterAtuais', {
                tarefas,
                id: mensagem.id
              })
            }
          }
          break
        }
        case 'obterTodas': {
          break
        }
        case 'removerFiltradosPJe+R': {
          break
        }
        default: {
          break
        }
      }
    }
    /**
     * {@link criarListener}
     */
    function processoHandler(mensagem) {
      //
      mensagem
    }
    /**
     * {@link criarListener}
     */
    function notificacaoHandler(e) {
      const notificationMessageService = servicos.notificationMessageService
      if (!notificationMessageService) {
        console.warn('[PJE+R] notificacaoHandler: Elemento essencial n\u00e3o encontrado')
        return
      } else if (!e || !e.acao || !e.conteudo) {
        console.warn('[PJE+R] notificacaoHandler: Mensagem inv\u00e1lida')
        return
      }

      const { acao, conteudo } = e
      switch (acao) {
        case 'sucesso': {
          notificationMessageService.sendSuccess('PJE+R', conteudo)
          break
        }
        case 'erro': {
          notificationMessageService.sendError('PJE+R', conteudo)
          break
        }
        case 'alerta': {
          notificationMessageService.sendWarn('PJE+R', conteudo)
          break
        }
        case 'info': {
          notificationMessageService.sendInfo('PJE+R', conteudo)
          break
        }
        default: {
          break
        }
      }
    }

    //
    extractor(refArray)
    organizarRefs(refArray)
    //
    setInterval(() => {
      organizarRefs(refArray)
    }, 1000)
    criarListener()
    //
    function enviarMensagemExtensao(tipo, acao, conteudo) {
      window.dispatchEvent(
        new CustomEvent('pmr-message', {
          detail: {
            tipo,
            mensagem: {
              acao,
              conteudo
            }
          }
        })
      )
    }

    /**
     * Verifica se o elemento est\u00e1 dispon\u00edvel
     * @param {*} servico
     * @returns
     */
    function isDisponivel(servico) {
      if (!servico) {
        console.warn('[PJE+R] Elemento essencial n\u00e3o encontrado')
        return false
      }
      return true
    }
  })()
}
pjecommLoader()
