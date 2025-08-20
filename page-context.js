(() => {
  var ye = Object.defineProperty;
  var xe = (o, t, e) =>
    t in o
      ? ye(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (o[t] = e);
  var c = (o, t, e) => xe(o, typeof t != "symbol" ? t + "" : t, e);
  const Oe = (o) => {
      const t = [];
      for (const e of o) Array.isArray(e) ? t.push(...e) : t.push(e);
      return t;
    },
    Ie = "P-J-e+R-tester";
  function ie(o) {
    return {}.toString
      .call(o)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  }
  function be(o) {
    return ie(o) === "string";
  }
  function ne(o) {
    const t = ie(o);
    return t.startsWith("html") && t.endsWith("element");
  }
  function Pe(o) {
    return Array.isArray(o) && o.every((t) => ne(t));
  }
  var f;
  let D =
    ((f = class {
      static info(t) {
        f.log(t, f.estilos.azul);
      }
      static erro(t) {
        t instanceof Error
          ? (f.log(t.message, f.estilos.vermelho), console.log(t))
          : f.log(t, f.estilos.vermelho);
      }
      static aviso(t) {
        f.log(t, f.estilos.laranja);
      }
      static sucesso(t) {
        f.log(t, f.estilos.verde);
      }
      static detalhes(t) {
        f.log(t, f.estilos.cinza);
      }
      static inspecionar(t, e) {
        this.autorizarEmProducao && (f.detalhes(t), console.log(e));
      }
      static log(t, e = "") {
        this.autorizarEmProducao && console.log(`%c${t}`, e);
      }
    }),
    c(f, "estilos", {
      azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;",
      vermelho:
        "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;",
      laranja:
        "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;",
      verde:
        "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;",
      cinza:
        "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    }),
    c(f, "console", {
      assert: (...t) => {},
      count: (...t) => {},
      debug: (...t) => {},
      dir: (...t) => {},
      error: (...t) => {},
      group: (...t) => {},
      groupCollapsed: (...t) => {},
      groupEnd: (...t) => {},
      info: (...t) => {},
      log: (...t) => {},
      profile: (...t) => {},
      table: (...t) => {},
      time: (...t) => {},
      timeEnd: (...t) => {},
      trace: (...t) => {},
      warn: (...t) => {},
    }),
    c(f, "autorizarEmProducao", !1),
    f);
  const x = class x {
    constructor({ recurso: t, contexto: e, adicional: r }) {
      c(this, "recurso");
      c(this, "contexto_");
      c(this, "adicional");
      (this.recurso = t.replace(/^_/, "")),
        (this.contexto_ = e || "page-context"),
        (this.adicional = r);
    }
    get contexto() {
      return be(this.contexto_) ? this.contexto_ : this.contexto_();
    }
    get console() {
      return (x._depurador = this), x._console;
    }
    info(t) {
      this.log(t, D.estilos.azul);
    }
    erro(t, e) {
      const r = t instanceof Error ? t.message : t;
      this.log(r, D.estilos.vermelho, e),
        t instanceof Error && console.log(t, e);
    }
    aviso(t) {
      this.log(t, D.estilos.laranja);
    }
    sucesso(t, e) {
      this.log(t, D.estilos.verde, e);
    }
    detalhes(t) {
      this.log(t, D.estilos.cinza);
    }
    inspecionar(t, e) {
      this.detalhes(t), this.console.log(e);
    }
    log(t, e = "", r) {
      this.console.log(`%c${t}`, e, r);
    }
  };
  c(x, "_depurador"),
    c(x, "_baseConsoleFunc", (t, ...e) => {
      const r = `[${Ie}][${x._depurador.recurso}][${x._depurador.contexto}]${
        x._depurador.adicional ? `[${x._depurador.adicional}]` : ""
      }: `;
      typeof e[0] == "string"
        ? (e[0] = e[0].startsWith("%c")
            ? `%c${r}${e[0].slice(2)}`
            : `${r}${e[0]}`)
        : (e = [r].concat(e)),
        t(...e);
    }),
    c(x, "_console", {
      assert:
        (...t) =>
        (...e) => {},
      count:
        (...t) =>
        (...e) => {},
      debug:
        (...t) =>
        (...e) => {},
      dir:
        (...t) =>
        (...e) => {},
      error:
        (...t) =>
        (...e) => {},
      group:
        (...t) =>
        (...e) => {},
      groupCollapsed:
        (...t) =>
        (...e) => {},
      groupEnd:
        (...t) =>
        (...e) => {},
      info:
        (...t) =>
        (...e) => {},
      log:
        (...t) =>
        (...e) => {},
      profile:
        (...t) =>
        (...e) => {},
      table:
        (...t) =>
        (...e) => {},
      time:
        (...t) =>
        (...e) => {},
      timeEnd:
        (...t) =>
        (...e) => {},
      trace:
        (...t) =>
        (...e) => {},
      warn:
        (...t) =>
        (...e) => {},
    });
  let A = x;
  var ae = { exports: {} };
  const Se = (o) =>
      typeof crypto < "u" && typeof crypto.getRandomValues == "function"
        ? () => {
            const t = crypto.getRandomValues(new Uint8Array(1))[0];
            return (t >= o ? t % o : t).toString(o);
          }
        : () => Math.floor(Math.random() * o).toString(o),
    ce = (o = 7, t = !1) => Array.from({ length: o }, Se(t ? 16 : 36)).join("");
  ae.exports = ce;
  ae.exports.default = ce;
  var ue = ((o) => (
      (o[(o.QUANTIDADE_TOTAL_TAREFA = 1)] = "QUANTIDADE_TOTAL_TAREFA"),
      (o[(o.PARALIZADOS_ENTRADA_TAREFA = 2)] = "PARALIZADOS_ENTRADA_TAREFA"),
      (o[(o.PARALIZADOS_ULTIMO_MOVIMENTO = 3)] =
        "PARALIZADOS_ULTIMO_MOVIMENTO"),
      o
    ))(ue || {}),
    le = ((o) => (
      (o.PADRAO = "mc_formato_padrao"), (o.MINIMO = "mc_formato_minimo"), o
    ))(le || {}),
    de = ((o) => (
      (o[(o.NAO_ATIVADO = 0)] = "NAO_ATIVADO"),
      (o[(o.DESMONTADO = 1)] = "DESMONTADO"),
      (o[(o.COMPLETAMENTE_MONTADO = 2)] = "COMPLETAMENTE_MONTADO"),
      (o[(o.REQUISITANDO_E_PROCESSANDO_DADOS = 3)] =
        "REQUISITANDO_E_PROCESSANDO_DADOS"),
      o
    ))(de || {});
  ue.PARALIZADOS_ENTRADA_TAREFA, le.PADRAO, de.NAO_ATIVADO;
  const we = 200,
    Y = {
      PAINEL_USUARIO:
        /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
      PAINEL_USUARIO_LISTA_TAREFA_FILTRO:
        "http://localhost:4000/pje/lista-tarefa-filtro.html",
    },
    _e = {
      PAINEL_USUARIO: /.*frontend.*painel-usuario-interno(?!\/etiquetas)/,
    },
    L = {
      HREFS: {
        PAINEL_USUARIO: [
          _e.PAINEL_USUARIO,
          Y.PAINEL_USUARIO,
          Y.PAINEL_USUARIO_LISTA_TAREFA_FILTRO,
        ],
      },
    };
  class Q {
    constructor({ ouvirMensageria: t, prioridade: e, usarMensageria: r }) {
      c(this, "ouvirMensageria");
      c(this, "mensageria", null);
      c(this, "prioridadeMensageria", 100);
      c(this, "mensagem");
      (this.ouvirMensageria = t || !1),
        this.ouvirMensageria &&
          ((this.mensageria = M.getInstance()),
          (this.prioridadeMensageria = e || this.prioridadeMensageria)),
        r && !this.mensageria && (this.mensageria = M.getInstance());
    }
    ouvirMensagem(t) {
      throw new Error("Method not implemented.");
    }
    deveOuvirMensageria() {
      return !!this.ouvirMensageria;
    }
    static ordenarTransmissaoOuvidoresMensageria(t) {
      t.sort((e, r) => e.prioridadeMensageria - r.prioridadeMensageria);
    }
    emitirMensagemInterna(t) {
      window.postMessage(t, window.location.origin),
        I.aviso("emitindo mensagem interna"),
        I.console.info(t);
    }
  }
  const S = class S {
    constructor() {
      c(this, "ouvidorDeTransimissao", null);
      c(this, "gerenciadorOuvintes");
      window.addEventListener("message", (t) => this.ouvinteGeral(t), {
        capture: !0,
      }),
        (this.gerenciadorOuvintes = new Te());
    }
    ouvinteGeral(t) {
      const e = t.data;
      if (
        !(!e || !e.origem || !e.tipo || !e.mensagem || e.origem !== "PJEMaisR")
      )
        if (this.ouvidorDeTransimissao) {
          const r = {
            tipo: e.tipo,
            acao: e.mensagem.acao,
            conteudo: e.mensagem.conteudo,
            id: e.mensagem.id,
          };
          e.mensagem.respostaParaAuxiliador
            ? ((r.resposta = !0),
              this.gerenciadorOuvintes.resolverOuvinte(r),
              this.responderMensagem(r, !0))
            : this.ouvidorDeTransimissao.callback(r),
            t.stopPropagation();
        } else I.erro("Ouvidor de transmiss\u00e3o n\u00e3o definidos");
    }
    definirOuvinteDeTransmissaoUmaVez(t) {
      this.ouvidorDeTransimissao || (this.ouvidorDeTransimissao = t);
    }
    static getInstance() {
      return S.instance || (S.instance = new S()), S.instance;
    }
    enviarMensagemExtensao(t) {
      window.dispatchEvent(
        new CustomEvent("pmr-message", {
          detail: {
            tipo: t.tipo,
            mensagem: {
              acao: t.acao,
              conteudo: t.conteudo,
              id: t.id,
              resposta: t.resposta,
            },
          },
        })
      ),
        I.aviso("Mensageria contexo de p\u00e1gina: enviado mensagem"),
        I.console.info(t);
    }
    responderMensagem(t, e) {
      const r = { ...t };
      (r.resposta = !0), (r.conteudo = e), this.enviarMensagemExtensao(r);
    }
    async enviarMensagemExtensaoEAguardarResposta(t, e = 200) {
      return new Promise((r, s) => {
        this.gerenciadorOuvintes
          .novoOuvinte(e, t)
          .then((i) => r(i))
          .catch((i) => s(i)),
          window.dispatchEvent(
            new CustomEvent("pmr-message", {
              detail: {
                tipo: t.tipo,
                mensagem: { acao: t.acao, conteudo: t.conteudo, id: t.id },
              },
            })
          ),
          I.aviso("Mensageria contexo de p\u00e1gina: enviado mensagem"),
          I.console.info(t);
      });
    }
  };
  c(S, "instance");
  let M = S;
  class Te {
    constructor() {
      c(this, "listenersEspecificosMap", new Map());
    }
    async novoOuvinte(t = we, e) {
      const r = `id_${Math.random() * 1e7}_${Date.now()}`;
      return (
        (e.id = r),
        new Promise((s, i) => {
          let n = !1;
          this.adicionar(r, (a) => {
            this.remover(r), s(a), (n = !0);
          }),
            setTimeout(() => {
              n || (this.remover(r), i({ erro: "timeout" }));
            }, t);
        })
      );
    }
    resolverOuvinte(t) {
      if (!t.id)
        throw new Error(
          "Obrigat\u00f3ria a defin\u00e7\u00e3o do Id da Mensagem para executar ouvinte"
        );
      const e = this.listenersEspecificosMap.get(t.id);
      if (!e) {
        I.erro(`Listener n\u00e3o definido para o id ${t.id}`);
        return;
      }
      e(t.conteudo);
    }
    adicionar(t, e) {
      if (this.listenersEspecificosMap.has(t)) {
        I.console.warn(`O listener ${t} j\u00e1 existe!`);
        return;
      }
      this.listenersEspecificosMap.set(t, e);
    }
    remover(t) {
      if (!this.listenersEspecificosMap.has(t)) {
        I.console.warn(`O listener ${t} n\u00e3o existe!`);
        return;
      }
      this.listenersEspecificosMap.delete(t);
    }
  }
  const I = new A({ recurso: M.name, contexto: "contexto de p\u00e1gina" });
  class w extends Q {
    constructor(
      e,
      {
        alvo: r,
        checarHref: s,
        esperar: i,
        obterAssincromamente: n,
        ouvirMensageria: a,
        prioridade: u,
        usarMensageria: l,
      }
    ) {
      super({ ouvirMensageria: a, prioridade: u, usarMensageria: l });
      c(this, "nome", "Auxiliador Contexto P\u00e1gina [PAI]");
      c(this, "esperar");
      c(this, "esperarPor");
      c(this, "checarHref");
      c(this, "tipoEspera");
      c(this, "obterAssincromamente");
      c(this, "alvosEncontrados", []);
      c(this, "setAlvoPersistido", new WeakSet());
      c(this, "_isAtiva", !1);
      (this.obterAssincromamente = n || !1),
        (this.nome = e),
        (this.esperar = i === !0 || typeof i == "string"),
        (this.esperarPor = r),
        (this.checarHref = s),
        typeof i == "string" && (this.tipoEspera = i),
        (this.esperar = r
          ? Array.from(document.querySelectorAll(r || "")).length == 0
          : this.esperar);
    }
    get isAtiva() {
      return this._isAtiva;
    }
    set isAtiva(e) {
      this._isAtiva = e;
    }
    podeInjetar() {
      throw new Error("Method not implemented.");
    }
    obterNome() {
      return this.nome;
    }
    deveAguardarMudancas() {
      return !!this.esperar;
    }
    selecionar(e, r) {
      if (!e) return [document.body];
      if (ne(e) || Pe(e)) return Array.isArray(e) ? e : [e];
      const s = r ?? Array.from(document.querySelectorAll("*")),
        i = s.length,
        n = [],
        a = Array.isArray(e) ? e : [e];
      for (let u = 0; u < a.length; u++)
        for (let l = 0; l < i; l++) s[l].matches(a[u]) && n.push(s[l]);
      return n;
    }
    verificarMudancas(e) {
      !this.esperar ||
        !this.esperarPor ||
        ((this.alvosEncontrados = this.selecionar(this.esperarPor, e)),
        this.alvosEncontrados.length && this.injetar());
    }
    encontrarAncora() {
      return (
        (this.alvosEncontrados = this.selecionar(this.esperarPor)),
        this.alvosEncontrados.length
          ? (O.inspecionar(
              `${this.nome} -> alvos localizados: `,
              this.alvosEncontrados
            ),
            !0)
          : !1
      );
    }
    protocoloInjetar() {
      try {
        if (!this.precisaReinjetar()) return;
        this.obterAssincromamente
          ? (O.aviso(
              `Auxiliador "${this.nome}" ser\u00e1 ser\u00e1 injetada assincromamente e ativada no contexto de p\u00e1gina`
            ),
            this._asyncGetter(this.obtentorAssincromo).then((e) => {
              if (!e) {
                O.aviso(
                  `Auxiliador "${this.nome}": obtentor assincromo falhou.`
                );
                return;
              }
              this.executar(),
                (this.isAtiva = !0),
                O.aviso(
                  `Auxiliador "${this.nome}" injetado assincromamente e ativada no contexto de p\u00e1gina`
                );
            }))
          : (this.executar(),
            (this.isAtiva = !0),
            O.aviso(
              `Auxiliador "${this.nome}" ser\u00e1 ser\u00e1 injetado e ativada no contexto de p\u00e1gina`
            ));
      } catch (e) {
        O.erro(`Erro ao injetar e ativar Auxiliador: "${this.nome}"`),
          O.console.warn("Erro: ", e);
      }
    }
    injetar() {
      this.encontrarAncora() &&
        ((this.esperar = !1),
        this.protocoloInjetar(),
        this.tipoEspera === "reativar" && (this.esperar = !0));
    }
    obtentorAssincromo() {
      if (this.obterAssincromamente)
        throw new Error(`Auxiliadores que possuem obtentores ass\u00edncromos precisam sobrepor
        a fun\u00e7\u00e3o "obtentorAssincromo"`);
      return !1;
    }
    precisaReinjetar() {
      if (!this.verificaPersistencia() && this.tipoEspera === "reativar")
        this.registrarInjecao();
      else if (this.verificaPersistencia() && this.tipoEspera === "reativar")
        return !1;
      return !0;
    }
    verificaPersistencia() {
      return this.alvosEncontrados.every(
        (r) => !!r && this.setAlvoPersistido.has(r)
      );
    }
    registrarInjecao() {
      this.alvosEncontrados.forEach((r) => {
        r && this.setAlvoPersistido.add(r);
      });
    }
    async _asyncGetter(e, r = 1e4) {
      return new Promise((s) => {
        if (typeof e != "function") {
          s(null);
          return;
        }
        try {
          const n = e();
          if (n) {
            s(n);
            return;
          }
        } catch (n) {
          O.console.error(n);
        }
        const i = setInterval(() => {
          try {
            const n = typeof e == "function" ? e() : null;
            n && (clearInterval(i), s(n));
          } catch (n) {
            O.console.error(n);
          }
        }, 100);
        setTimeout(() => {
          try {
            clearInterval(i), s(null);
          } catch (n) {
            s(null), O.console.error(n);
          }
        }, r);
      });
    }
  }
  const O = new A({ recurso: Q.name, contexto: "contexto de p\u00e1gina" });
  function Re() {
    try {
      return window.self !== window.top;
    } catch {
      return !0;
    }
  }
  class _ {
    constructor(t, e, r) {
      c(this, "nome", "Auxiliador Contexto de P\u00e1gina [PAI]");
      c(this, "opcoesInjecao");
      c(this, "_dependencias");
      (this.nome = t), (this.opcoesInjecao = e), (this._dependencias = r);
    }
    podeInjetar() {
      const { checarHref: t, emIframe: e } = this.opcoesInjecao;
      return !(!this.verificaPresenteFrame(e) || !this.verificaPresenteHref(t));
    }
    verificaPresenteFrame(t) {
      const e = Re();
      if (t === "todos" || (t === void 0 && !e)) return !0;
      const r = t === e;
      return (
        r ||
          $.log(
            `Auxiliador "${this.nome}" n\u00e3o deve ser instalada neste iframe`
          ),
        r
      );
    }
    verificaPresenteHref(t) {
      const e = window.location.href;
      if (t === void 0) return !0;
      if (t === null)
        return (
          $.log(
            `Auxiliador "${this.nome}" n\u00e3o ser\u00e1 instalada pois checarHref === null`
          ),
          !1
        );
      let r;
      Array.isArray(t) ? (r = Oe(t)) : (r = [t]);
      let s = !1;
      return (
        r.some((i) => {
          i instanceof RegExp
            ? i.test(e) && (s = !0)
            : typeof i == "string" && e.includes(i) && (s = !0);
        }),
        s
      );
    }
    verificaPresenteElemento(t) {
      if (!t) return !0;
      const e = Array.from(document.querySelectorAll(t)).length !== 0;
      return (
        e ||
          $.log(
            `Auxiliador "${this.nome}" n\u00e3o deve ser injetado neste iframe`
          ),
        e
      );
    }
    injetar() {
      if (!this.podeInjetar())
        return (
          $.info(`Auxiliador "${this.nome}" n\u00e3o ser\u00e1 injetado`), null
        );
      $.info(`Auxiliador "${this.nome}" ser\u00e1 injetado`);
      const e = this.opcoesInjecao.auxiliador || w,
        r = new e(this.nome, this.opcoesInjecao);
      return r.injetar(), r;
    }
    dependencias() {
      return this._dependencias;
    }
  }
  const $ = new A({ recurso: _.name, contexto: "contexto de p\u00e1gina" });
  class pe {
    constructor(t) {
      c(this, "injetores", []);
      c(this, "auxiliadores", []);
      c(this, "observador");
      c(this, "OPCOES_OBSERVADOR", {
        childList: !0,
        subtree: !0,
        attributes: !1,
        characterData: !1,
      });
      c(this, "mensageria");
      (this.injetores = t), (this.mensageria = M.getInstance());
    }
    iniciar() {
      let t = [];
      const e = (s) =>
        s.every((i) => this.auxiliadores.some((n) => n instanceof i));
      this.injetores.forEach((s) => {
        const i = s.dependencias();
        if (i)
          if (e(i)) {
            const n = s.injetar();
            n !== null && this.auxiliadores.push(n);
          } else t.push(s);
        else {
          const n = s.injetar();
          n !== null && this.auxiliadores.push(n);
        }
      });
      let r;
      do {
        r = !1;
        const s = [];
        t.forEach((i) => {
          const n = i.dependencias();
          if (n && e(n)) {
            P.console.warn("Injetando com dependencias: ", i, n);
            const a = i.injetar();
            a !== null && this.auxiliadores.push(a), (r = !0);
          } else s.push(i);
        }),
          (t = s);
      } while (r && t.length > 0);
      t.length > 0 &&
        P.console.warn(
          "Alguns instaladores t\u00eam depend\u00eancias n\u00e3o satisfeitas:",
          t
        ),
        this.auxiliadores.length &&
          ((this.observador = this.ouvirMudancas() || void 0),
          this.ouvirMensageria(),
          P.inspecionar("Observador: ", this.observador));
    }
    ouvirMensageria() {
      const t = [];
      this.auxiliadores.forEach((r) => {
        r.deveOuvirMensageria() && t.push(r);
      });
      const e = (r) => {
        t.forEach((s) => {
          s.isAtiva && s.ouvirMensagem(r);
        });
      };
      this.mensageria.definirOuvinteDeTransmissaoUmaVez({
        callback: e,
        origem: this,
      }),
        Q.ordenarTransmissaoOuvidoresMensageria(t);
    }
    ouvirMudancas() {
      const t = [],
        e = [],
        r = [];
      this.auxiliadores.forEach((d) => {
        d.deveAguardarMudancas() && t.push(d), d.aoAlterarDOM && r.push(d);
      });
      const s = t.map((d) => d.obterNome()),
        i = (d) => {
          r.forEach((h) => {
            h.isAtiva && h.aoAlterarDOM && h.aoAlterarDOM(d);
          });
        };
      P.info(`MutationObserver ser\u00e1 iniciado a pedido de ${s.join(",")}`);
      let n = 0;
      const a = [];
      let u = null;
      const l = () => {
          const d = [],
            h = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
          for (; h.nextNode(); ) d.push(h.currentNode);
          if (!t.length && r.length) {
            i(a),
              P.console.warn(
                "Nenhum subscritor ativo. MutationObserver mantido apenas para os subscritores ouvindo altera\u00e7\u00f5es no DOM: ",
                r
              );
            return;
          }
          P.console.info("MutationObserver reportando: ", a),
            P.log(`Ao iniciar, ${t.length} subscritores ativos`);
          for (let v = 0; v < t.length; v++)
            t[v].verificarMudancas(d),
              t[v].deveAguardarMudancas() || (e.push(t[v]), t.splice(v, 1));
          P.log(
            `Ao finalizar, ${t.length} subscritores ativos: ${t.map((v) =>
              v.obterNome()
            )}`
          );
          for (let v = 0; v < e.length; v++)
            e[v].deveAguardarMudancas() && (t.push(e[v]), e.splice(v, 1));
          i(a), !t.length && !r.length && g.disconnect();
        },
        p = (d) => {
          a.concat(d);
          for (let h = 0; h < d.length; h++) n += d[h].addedNodes.length;
          n > 20
            ? (u && clearTimeout(u), l(), a.splice(0, -1), (n = 0))
            : (u && clearTimeout(u),
              (u = setTimeout(() => {
                l(), a.splice(0, -1), (n = 0);
              }, 500)));
        },
        g = new MutationObserver((d) => {
          p(d);
        });
      return (
        g.observe(document.body, this.OPCOES_OBSERVADOR),
        (this.observador = g),
        g
      );
    }
  }
  const P = new A({ recurso: pe.name, contexto: "contexto de p\u00e1gina" });
  var m = ((o) => (
    (o.ETIQUETA = "etiqueta"),
    (o.TAREFA = "tarefa"),
    (o.PROCESSO = "processo"),
    (o.NOTIFICACAO = "notificacao"),
    (o.INFO_GERAL = "infoGeral"),
    (o.CERTIDAO = "certidao"),
    (o.LISTA_TAREFA_FILTROS = "eTipoMensagem.LISTA_TAREFA_FILTROS"),
    o
  ))(m || {});
  const b = class b extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "refArray", []);
      c(this, "servicos", {});
      c(this, "componentes", {});
      (b.modulosRaizesProvidos.refArray = this.refArray),
        (b.modulosRaizesProvidos.servicos = this.servicos),
        (b.modulosRaizesProvidos.componentes = this.componentes);
    }
    static obterServicos() {
      return b.modulosRaizesProvidos.servicos;
    }
    static obterRefArray() {
      return b.modulosRaizesProvidos.refArray;
    }
    static obterComponentes() {
      return b.modulosRaizesProvidos.servicos;
    }
    exporPublicamente() {}
    executar() {
      window.__pmr_run_once__ ||
        (Object.defineProperty(window, "__pmr_run_once__", {
          value: Symbol("pmrOnce"),
          writable: !1,
          enumerable: !1,
        }),
        this.extractor(this.refArray),
        this.organizarRefs(this.refArray),
        setInterval(() => {
          this.organizarRefs(this.refArray);
        }, 1e3),
        this.exporPublicamente());
    }
    organizarRefs(e) {
      var r;
      Object.values(e).forEach((s) => {
        this.getObjects(s);
      }),
        (r = e == null ? void 0 : e.providers) == null ||
          r.forEach((s) => {
            this.getObjects(s);
          });
    }
    getObjects(e) {
      var r;
      (r = e == null ? void 0 : e.obj) != null &&
        r.component &&
        Object.keys(e.obj.component).forEach((s) => {
          const i = s.toLocaleLowerCase();
          i.includes("service")
            ? (this.servicos[s] = e.obj.component[s])
            : i.includes("component") &&
              ((this.componentes[s] = e.obj.component[s]),
              (this.refArray[s] = e.obj.component[s]));
        });
    }
    extractor(e) {
      const r = this;
      (e = e || {}), (e.providers = e.providers || []);
      const s = Function.prototype.apply.bind(Function.prototype.bind);
      Object.defineProperty(Function.prototype, "bind", {
        value: function (a, ...u) {
          const l = [a, ...u],
            p = s(this, l);
          return (
            !a ||
              a.__proto__.constructor.name === "u" ||
              (a.__capt__ || (!e.includes(a) && e.push(a)),
              (p.boundObject = a)),
            p
          );
        },
      }),
        Object.freeze(Function.prototype.bind),
        q.inspecionar(`"${r.nome}": override bind`, s);
      const i = Object.assign;
      (Object.assign = function (a, ...u) {
        const l = [a, ...u];
        return (
          a &&
            Object.keys(a)
              .join(", ")
              .toLocaleLowerCase()
              .includes("component") &&
            !a.__capt__ &&
            !e.includes(a) &&
            e.push(a),
          u.forEach((p) => {
            p &&
              Object.keys(p)
                .join(", ")
                .toLocaleLowerCase()
                .includes("component") &&
              !p.__capt__ &&
              !e.includes(p) &&
              e.push(p);
          }),
          i.apply(this, l)
        );
      }),
        Object.freeze(Object.assign),
        q.inspecionar(`"${r.nome}": override assign`, i);
      const n = Function.prototype.apply.bind(Array.prototype.push);
      Object.defineProperty(Array.prototype, "push", {
        value: function (a) {
          const u = [...arguments];
          if (a && a.component) {
            const l = a.component;
            (e[l.constructor.name] = e[l.constructor.name] || {
              const: l.constructor,
              obj: a,
            }),
              r.__getProviders(a),
              Object.values(a) &&
                Object.values(a).forEach((p) => {
                  if (p && p.component) {
                    const g = p.component;
                    (e[g.constructor.name] = e[g.constructor.name] || {
                      const: g.constructor,
                      obj: p,
                    }),
                      r.__getProviders(p);
                  }
                });
          }
          return n(this, u);
        },
      }),
        Object.freeze(Array.prototype.push),
        q.inspecionar(`"${this.nome}": override assign`, n),
        this.__getProviders(e);
    }
    __getProviders(e) {
      var n;
      const r = this.refArray,
        s = (n = e.root) == null ? void 0 : n.ngModule,
        i = s == null ? void 0 : s._providers;
      i &&
        Array.isArray(i) &&
        i.forEach((a) => {
          a && !r.providers.includes(a) && r.providers.push(a);
        }),
        r.providers.forEach((a) => {
          a.tick && (r.applicationRef = a),
            r.applicationRef && (r.zone = r.applicationRef._zone);
        }),
        Object.values(e).forEach((a) => {
          var u, l;
          a &&
            ((u = a.component) == null ? void 0 : u.cssClass) ==
              "selecionar-etiquetas" &&
            ((r.etiquetasComponent = a.component),
            (r.listaEtiquetas = a.component.listaEtiquetas.etiquetas)),
            a &&
              (l = a.component) != null &&
              l.tarefaSelecionada &&
              ((r._tarefasComponent = a.component),
              (r.processosTarefa = a.component.processosTarefa),
              (r.processosMarcados = a.component.processosMarcados));
        });
    }
    ouvirMensagem(e) {
      switch (e.tipo) {
        case m.ETIQUETA:
        case m.TAREFA:
        case m.NOTIFICACAO:
        case m.PROCESSO:
          this.organizarRefs(this.refArray), q.info("mensagem ouvida");
          break;
      }
    }
  };
  c(b, "modulosRaizesProvidos", {
    refArray: [],
    servicos: {},
    componentes: {},
  });
  let E = b;
  const q = new A({ recurso: E.name, contexto: "contexto de p\u00e1gina" });
  class B {
    constructor(t, e) {
      c(this, "_urlPattern");
      c(this, "subscritor");
      c(this, "cache");
      (this._urlPattern = t), (this.subscritor = e), (this.cache = new fe());
    }
    get urlPattern() {
      return this._urlPattern;
    }
  }
  const F = class F extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "cache");
      c(this, "mapAPI", [
        "cargos",
        "orgaosJulgadores",
        "orgaosJulgadoresColegiado",
        "aplicacaoSistema",
        "tiposAudiencia",
        "especialidades",
        "tiposProcessoDocumento",
        "pje:title:icone:liminar",
        "pje:label:filtro:liminar",
      ]);
      (this.cache = new fe()), (F.selfInstance = this);
    }
    executar() {
      U.aviso(`"${this.nome}" injetado!!!`),
        (window.XMLHttpRequest.prototype.send = new Proxy(
          window.XMLHttpRequest.prototype.send,
          {
            apply: async (e, r, s) => {
              const i = r.__zone_symbol__xhrURL ?? "",
                n = this.mapAPI.find((a) =>
                  a instanceof B
                    ? a.urlPattern instanceof RegExp
                      ? !!a.urlPattern.exec(i)
                      : i.endsWith(a.urlPattern)
                    : i.endsWith(a)
                );
              if (!n) return Reflect.apply(e, r, s);
              if (typeof n == "string") {
                const a = this.cache.get(i);
                if (!this.cache.has(i))
                  r.onreadystatechange = () => {
                    r.readyState === 4 &&
                      r.status === 200 &&
                      typeof n == "string" &&
                      this.cache.set(i, r.response);
                  };
                else if (a || n === "pje:title:icone:liminar") {
                  Object.defineProperties(r, {
                    response: { value: a || "" },
                    responseText: { value: a || "" },
                    status: { value: 200 },
                    statusText: { value: "OK" },
                    readyState: { value: 4 },
                  }),
                    r.dispatchEvent(new Event("readystatechange")),
                    r.dispatchEvent(new Event("load")),
                    r.dispatchEvent(new Event("loadend"));
                  return;
                }
              } else {
                n.getCache(i, ...s).then((u) => {
                  if (u)
                    Object.defineProperties(r, {
                      response: { value: u || "" },
                      responseText: {
                        value: u
                          ? () => {
                              try {
                                return typeof u == "object"
                                  ? JSON.stringify(u)
                                  : u.toString();
                              } catch {
                                return u.toString();
                              }
                            }
                          : "",
                      },
                      status: { value: 200 },
                      statusText: { value: "OK" },
                      readyState: { value: 4 },
                    }),
                      r.dispatchEvent(new Event("readystatechange")),
                      r.dispatchEvent(new Event("load")),
                      r.dispatchEvent(new Event("loadend"));
                  else return Reflect.apply(e, r, s);
                });
                return;
              }
              return Reflect.apply(e, r, s);
            },
          }
        ));
    }
    static getInstance() {
      return F.selfInstance;
    }
    subscreverMapeadorAPIExterno(e) {
      if (
        this.mapAPI.some((r) => r instanceof B && r.urlPattern === e.urlPattern)
      ) {
        U.aviso(
          "Tentativa de outra subscri\u00e7\u00e3o para o mesmo MapeadorAPIExterno."
        ),
          U.console.log("MapeadorAPIExterno: ", e);
        return;
      }
      this.mapAPI.push(e);
    }
    desinscreverMapeadorAPIExterno(e) {
      const r = this.mapAPI.findIndex(
        (s) => s instanceof B && s.urlPattern === e.urlPattern
      );
      r !== -1
        ? this.mapAPI.splice(r, 1)
        : (U.aviso("MapeadorAPIExterno n\u00e3o desincrito."),
          U.console.log("MapeadorAPIExterno: ", e));
    }
  };
  c(F, "selfInstance");
  let W = F;
  class fe {
    constructor() {
      c(this, "cacheMap", new Map());
    }
    get(t) {
      return this.cacheMap.get(t);
    }
    set(t, e) {
      this.cacheMap.set(t, e);
    }
    has(t) {
      return this.cacheMap.has(t);
    }
  }
  const U = new A({ recurso: E.name, contexto: "contexto de p\u00e1gina" }),
    Me = "Auxiliador do Cache do XmlHTTpRequest proxy",
    je = { auxiliador: W, checarHref: L.HREFS.PAINEL_USUARIO, emIframe: !0 },
    Le = new _(Me, je);
  var C = ((o) => (
      (o.OBTER_TODAS = "obterTodas"),
      (o.CRIAR = "criar"),
      (o.EDITAR = "editar"),
      (o.EXCLUIR = "excluir"),
      (o.LISTAR = "listar"),
      (o.INCLUIR = "incluir"),
      o
    ))(C || {}),
    Z = function (o, t) {
      return (
        (Z =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, r) {
              e.__proto__ = r;
            }) ||
          function (e, r) {
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
          }),
        Z(o, t)
      );
    };
  function he(o, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    Z(o, t);
    function e() {
      this.constructor = o;
    }
    o.prototype =
      t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
  }
  function G(o) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      e = t && o[t],
      r = 0;
    if (e) return e.call(o);
    if (o && typeof o.length == "number")
      return {
        next: function () {
          return (
            o && r >= o.length && (o = void 0), { value: o && o[r++], done: !o }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function V(o, t) {
    var e = typeof Symbol == "function" && o[Symbol.iterator];
    if (!e) return o;
    var r = e.call(o),
      s,
      i = [],
      n;
    try {
      for (; (t === void 0 || t-- > 0) && !(s = r.next()).done; )
        i.push(s.value);
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        s && !s.done && (e = r.return) && e.call(r);
      } finally {
        if (n) throw n.error;
      }
    }
    return i;
  }
  function K(o, t, e) {
    if (e || arguments.length === 2)
      for (var r = 0, s = t.length, i; r < s; r++)
        (i || !(r in t)) &&
          (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
    return o.concat(i || Array.prototype.slice.call(t));
  }
  function R(o) {
    return typeof o == "function";
  }
  function ve(o) {
    var t = function (r) {
        Error.call(r), (r.stack = new Error().stack);
      },
      e = o(t);
    return (
      (e.prototype = Object.create(Error.prototype)),
      (e.prototype.constructor = e),
      e
    );
  }
  var J = ve(function (o) {
    return function (e) {
      o(this),
        (this.message = e
          ? e.length +
            ` errors occurred during unsubscription:
` +
            e.map(function (r, s) {
              return s + 1 + ") " + r.toString();
            }).join(`
  `)
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = e);
    };
  });
  function ee(o, t) {
    if (o) {
      var e = o.indexOf(t);
      0 <= e && o.splice(e, 1);
    }
  }
  var X = (function () {
    function o(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (o.prototype.unsubscribe = function () {
        var t, e, r, s, i;
        if (!this.closed) {
          this.closed = !0;
          var n = this._parentage;
          if (n)
            if (((this._parentage = null), Array.isArray(n)))
              try {
                for (var a = G(n), u = a.next(); !u.done; u = a.next()) {
                  var l = u.value;
                  l.remove(this);
                }
              } catch (y) {
                t = { error: y };
              } finally {
                try {
                  u && !u.done && (e = a.return) && e.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
            else n.remove(this);
          var p = this.initialTeardown;
          if (R(p))
            try {
              p();
            } catch (y) {
              i = y instanceof J ? y.errors : [y];
            }
          var g = this._finalizers;
          if (g) {
            this._finalizers = null;
            try {
              for (var d = G(g), h = d.next(); !h.done; h = d.next()) {
                var v = h.value;
                try {
                  te(v);
                } catch (y) {
                  (i = i ?? []),
                    y instanceof J
                      ? (i = K(K([], V(i)), V(y.errors)))
                      : i.push(y);
                }
              }
            } catch (y) {
              r = { error: y };
            } finally {
              try {
                h && !h.done && (s = d.return) && s.call(d);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (i) throw new J(i);
        }
      }),
      (o.prototype.add = function (t) {
        var e;
        if (t && t !== this)
          if (this.closed) te(t);
          else {
            if (t instanceof o) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
          }
      }),
      (o.prototype._hasParent = function (t) {
        var e = this._parentage;
        return e === t || (Array.isArray(e) && e.includes(t));
      }),
      (o.prototype._addParent = function (t) {
        var e = this._parentage;
        this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
      }),
      (o.prototype._removeParent = function (t) {
        var e = this._parentage;
        e === t ? (this._parentage = null) : Array.isArray(e) && ee(e, t);
      }),
      (o.prototype.remove = function (t) {
        var e = this._finalizers;
        e && ee(e, t), t instanceof o && t._removeParent(this);
      }),
      (o.EMPTY = (function () {
        var t = new o();
        return (t.closed = !0), t;
      })()),
      o
    );
  })();
  X.EMPTY;
  function De(o) {
    return (
      o instanceof X ||
      (o && "closed" in o && R(o.remove) && R(o.add) && R(o.unsubscribe))
    );
  }
  function te(o) {
    R(o) ? o() : o.unsubscribe();
  }
  var $e = {
    setTimeout: function (o, t) {
      for (var e = [], r = 2; r < arguments.length; r++)
        e[r - 2] = arguments[r];
      return setTimeout.apply(void 0, K([o, t], V(e)));
    },
    clearTimeout: function (o) {
      return clearTimeout(o);
    },
    delegate: void 0,
  };
  function Ue(o) {
    $e.setTimeout(function () {
      throw o;
    });
  }
  function re() {}
  var Ce = (function (o) {
      he(t, o);
      function t(e) {
        var r = o.call(this) || this;
        return (
          (r.isStopped = !1),
          e ? ((r.destination = e), De(e) && e.add(r)) : (r.destination = qe),
          r
        );
      }
      return (
        (t.create = function (e, r, s) {
          return new me(e, r, s);
        }),
        (t.prototype.next = function (e) {
          this.isStopped || this._next(e);
        }),
        (t.prototype.error = function (e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }),
        (t.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (t.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0),
            o.prototype.unsubscribe.call(this),
            (this.destination = null));
        }),
        (t.prototype._next = function (e) {
          this.destination.next(e);
        }),
        (t.prototype._error = function (e) {
          try {
            this.destination.error(e);
          } finally {
            this.unsubscribe();
          }
        }),
        (t.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        t
      );
    })(X),
    Fe = (function () {
      function o(t) {
        this.partialObserver = t;
      }
      return (
        (o.prototype.next = function (t) {
          var e = this.partialObserver;
          if (e.next)
            try {
              e.next(t);
            } catch (r) {
              z(r);
            }
        }),
        (o.prototype.error = function (t) {
          var e = this.partialObserver;
          if (e.error)
            try {
              e.error(t);
            } catch (r) {
              z(r);
            }
          else z(t);
        }),
        (o.prototype.complete = function () {
          var t = this.partialObserver;
          if (t.complete)
            try {
              t.complete();
            } catch (e) {
              z(e);
            }
        }),
        o
      );
    })(),
    me = (function (o) {
      he(t, o);
      function t(e, r, s) {
        var i = o.call(this) || this,
          n;
        return (
          R(e) || !e
            ? (n = {
                next: e ?? void 0,
                error: r ?? void 0,
                complete: s ?? void 0,
              })
            : (n = e),
          (i.destination = new Fe(n)),
          i
        );
      }
      return t;
    })(Ce);
  function z(o) {
    Ue(o);
  }
  function Ne(o) {
    throw o;
  }
  var qe = { closed: !0, next: re, error: Ne, complete: re },
    ze = ve(function (o) {
      return function () {
        o(this),
          (this.name = "EmptyError"),
          (this.message = "no elements in sequence");
      };
    });
  function He(o, t) {
    return new Promise(function (e, r) {
      var s = new me({
        next: function (i) {
          e(i), s.unsubscribe();
        },
        error: r,
        complete: function () {
          r(new ze());
        },
      });
      o.subscribe(s);
    });
  }
  const N = class N extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "notificationService");
      N.selfInstance = this;
    }
    ouvirMensagem(e) {
      if (e.tipo == m.NOTIFICACAO) {
        if (!e.acao) {
          H.aviso(`"${this.nome}": Mensagem inv\u00e1lida`);
          return;
        }
        this.notificar(
          e.acao,
          typeof e.conteudo == "string" ? e.conteudo : e.conteudo.conteudo,
          typeof e.conteudo == "string" ? void 0 : e.conteudo.titulo
        );
      }
    }
    executar() {
      H.aviso(`"${this.nome}" ativado!!!!`);
    }
    static notificarExterno(e, r, s = "PJe+R") {
      N.selfInstance.notificar(e, r, s);
    }
    notificar(e, r, s = "PJe+R") {
      var n;
      this.notificationService =
        (n = E.obterServicos()) == null ? void 0 : n.notificationMessageService;
      const i = this.notificationService;
      if (!i) {
        H.aviso("servi\u00e7o do Ng n\u00e3o est\u00e1 dispon\u00edvel");
        return;
      }
      switch (e) {
        case "sucesso": {
          i == null || i.sendSuccess(s, r);
          break;
        }
        case "erro": {
          i == null || i.sendError(s, r);
          break;
        }
        case "alerta": {
          i == null || i.sendWarn(s, r);
          break;
        }
        case "info": {
          i == null || i.sendInfo(s, r);
          break;
        }
        default:
          H.aviso("a\u00e7\u00e3o desconhecida");
      }
    }
  };
  c(N, "selfInstance");
  let j = N;
  const H = new A({ recurso: j.name, contexto: "contexto de p\u00e1gina" });
  class ge extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "etiquetaService");
    }
    async ouvirMensagem(e) {
      var r;
      if (e.tipo == m.ETIQUETA) {
        if (!e.acao) {
          T.aviso("Mensagem inv\u00e1lida");
          return;
        }
        switch (
          ((this.etiquetaService =
            (r = E.obterServicos()) == null ? void 0 : r.etiquetaService),
          e.acao)
        ) {
          case C.INCLUIR: {
            const {
                nomeTagCompleto: s,
                idProcesso: i,
                notificar: n,
              } = e.conteudo,
              a = await this.incluir(i, s);
            n &&
              (a
                ? j.notificarExterno(
                    "sucesso",
                    `Etiqueta "${s}" adicionada com sucesso`
                  )
                : j.notificarExterno(
                    "alerta",
                    `N\u00e3o foi poss\u00edvel adicionar a etiqueta: ${s}`
                  ));
            break;
          }
          case C.OBTER_TODAS:
            this.obterTodas();
        }
      }
    }
    async incluir(e, r) {
      var s;
      try {
        if (!this.etiquetaService)
          return (
            T.aviso(
              "servi\u00e7o de etiqueta n\u00e3o est\u00e1 dispon\u00edvel"
            ),
            null
          );
        const i =
          (s = this.etiquetaService) == null
            ? void 0
            : s.incluirProcessoTag({ tag: r, idProcesso: e });
        if (!i)
          return (
            T.aviso(
              "EtiquetaService n\u00e3o est\u00e1 definido ou n\u00e3o retorna um Observable"
            ),
            null
          );
        const n = await He(i);
        return n
          ? (this.emitirMensagemInterna({
              origem: "PJEMaisR",
              tipo: m.TAREFA,
              mensagem: {
                acao: "incluir-tagsProcessoList",
                conteudo: { tag: n, idProcesso: e },
                tipo: m.TAREFA,
              },
            }),
            n)
          : (T.info("enteidade etiqueta n\u00e3o existe"), null);
      } catch {
        return T.erro("Erro ao incluir a tag no processo"), null;
      }
    }
    obterTodas() {
      var r, s, i;
      const e = (r = E.obterRefArray()) == null ? void 0 : r.listaEtiquetas;
      e && e.length
        ? (s = this.mensageria) == null ||
          s.enviarMensagemExtensao({
            tipo: m.ETIQUETA,
            acao: C.OBTER_TODAS,
            conteudo: e,
          })
        : ((i = E.obterServicos()) == null ? void 0 : i.etiquetaService)
            .getTodasTags()
            .subscribe((a) => {
              var u;
              (a = a),
                (u = this.mensageria) == null ||
                  u.enviarMensagemExtensao({
                    tipo: m.ETIQUETA,
                    acao: C.OBTER_TODAS,
                    resposta: !0,
                    conteudo: a,
                  });
            });
    }
    executar() {
      T.aviso(`"${this.nome}" injetado!!!`);
    }
  }
  const T = new A({ recurso: ge.name, contexto: "contexto de p\u00e1gina" }),
    ke = "Auxiliador do Servi\u00e7o de Etiquetas",
    Be = {
      auxiliador: ge,
      checarHref: L.HREFS.PAINEL_USUARIO,
      ouvirMensageria: !0,
      emIframe: !0,
    },
    Je = new _(ke, Be),
    We = "Auxiliador de Extra\u00e7\u00e3o de Pacotes do Frontend",
    Ze = {
      auxiliador: E,
      checarHref: L.HREFS.PAINEL_USUARIO,
      ouvirMensageria: !0,
      prioridade: 1,
      emIframe: !0,
    },
    Ve = new _(We, Ze);
  class Ee extends w {
    constructor(t, e) {
      super(t, e);
    }
    executar() {
      var h;
      oe.aviso(`"${this.nome}" ativado!!!!`);
      const t = E.obterServicos().utilService,
        { currentUser: e, pjeLegacyUrl: r } = sessionStorage,
        {
          TIPO_JUSTICA: s,
          WEB_ROOT: i,
          PDPJ_MARKETPLACE: n,
          VERSAO_LEGACY: a,
          INSTANCIA: u,
          ID_USUARIO_LOCALIZACAO: l,
        } = t.config.pjePayload.CONSTANTES,
        p = JSON.parse(e),
        g = JSON.parse(r),
        d = {
          tipo: m.INFO_GERAL,
          acao: "infoInit",
          conteudo: {
            currentUser: p,
            pjeLegacyUrl: g,
            constantes: {
              TIPO_JUSTICA: s,
              WEB_ROOT: i,
              PDPJ_MARKETPLACE: n,
              VERSAO_LEGACY: a,
              INSTANCIA: u,
              ID_USUARIO_LOCALIZACAO: l,
            },
          },
        };
      (h = this.mensageria) == null || h.enviarMensagemExtensao(d),
        oe.inspecionar("Mensagem enviada para a extens\u00e3o!!!!", d);
    }
    obtentorAssincromo() {
      var t, e, r, s, i, n;
      return (
        !!((t = window.sessionStorage) != null && t.currentUser) &&
        !!((e = window.sessionStorage) != null && e.pjeLegacyUrl) &&
        !!(
          (n =
            (i =
              (s = (r = E.obterServicos()) == null ? void 0 : r.utilService) ==
              null
                ? void 0
                : s.config) == null
              ? void 0
              : i.pjePayload) != null && n.CONSTANTES
        )
      );
    }
  }
  const oe = new A({ recurso: Ee.name, contexto: "contexto de p\u00e1gina" }),
    Ke = "Auxiliador do Obtentor do Payload do NgFrame",
    Qe = {
      auxiliador: Ee,
      checarHref: L.HREFS.PAINEL_USUARIO,
      obterAssincromamente: !0,
      emIframe: !0,
      usarMensageria: !0,
    },
    Xe = new _(Ke, Qe),
    Ye = "Auxiliador do Servi\u00e7o de Notifica\u00e7\u00e3o do Ng",
    Ge = {
      auxiliador: j,
      checarHref: L.HREFS.PAINEL_USUARIO,
      ouvirMensageria: !0,
      emIframe: !0,
    },
    et = new _(Ye, Ge);
  var k = ((o) => (
    (o.INCLUIR_TAG_PROCESSO_LIST = "incluir-tagsProcessoList"),
    (o.OBTER_ATUAIS = "obterAtuais"),
    o
  ))(k || {});
  class Ae extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "zone");
      c(this, "tarefasComponente");
    }
    ouvirMensagem(e) {
      var r, s;
      if (e.tipo == m.TAREFA) {
        if (!e.acao) {
          se.aviso("Mensagem inv\u00e1lida");
          return;
        }
        switch (
          ((this.zone = (r = E.obterRefArray()) == null ? void 0 : r.zone),
          (this.tarefasComponente =
            (s = E.obterRefArray()) == null ? void 0 : s._tarefasComponent),
          e.acao)
        ) {
          case k.INCLUIR_TAG_PROCESSO_LIST: {
            const { tag: i, idProcesso: n } = e.conteudo;
            this.incluirTagProcessoList(n, i);
            break;
          }
          case k.OBTER_ATUAIS: {
            this.obterAtuais(e);
            break;
          }
        }
      }
    }
    incluirTagProcessoList(e, r) {
      var s;
      (s = this.zone) == null ||
        s.run(() => {
          var i;
          (i = this.tarefasComponente) == null ||
            i.processosTarefa.processos.forEach((n) => {
              (n.idProcesso === e || e === "" + n.idProcesso) &&
                !n.tagsProcessoList.includes(r) &&
                n.tagsProcessoList.push(r);
            });
        });
    }
    obterAtuais(e) {
      var s, i, n;
      const r =
        (i =
          (s = this.tarefasComponente) == null ? void 0 : s.processosTarefa) ==
        null
          ? void 0
          : i.processos;
      r &&
        r.length &&
        ((n = this.mensageria) == null ||
          n.enviarMensagemExtensao({
            tipo: m.ETIQUETA,
            acao: k.OBTER_ATUAIS,
            conteudo: { id: e.id, tarefas: r },
          }));
    }
    executar() {
      se.aviso(`"${this.nome}" ativado!!!`);
    }
  }
  const se = new A({ recurso: Ae.name, contexto: "contexto de p\u00e1gina" }),
    tt = "Auxiliador do Servi\u00e7o de Tarefa",
    rt = {
      auxiliador: Ae,
      checarHref: L.HREFS.PAINEL_USUARIO,
      ouvirMensageria: !0,
      emIframe: !0,
    },
  
ot = new _(tt, rt);

  class mt extends w {
    constructor(e, r) {
      super(e, r);
    }
    executar() {
      ct.aviso(`"${this.nome}" ativado!!!!`);
      this.expandirTudo();
    }
    aoAlterarDOM() {
      this.expandirTudo();
    }
    expandirTudo() {
      try {
        const elementos = document.querySelectorAll(
          '.label-dias-corridos:not(.expandido)'
        );
        elementos.forEach((el) => el.classList.add("expandido"));
      } catch (e) {
        ct.erro(e);
      }
    }
  }
  const ct = new A({ recurso: mt.name, contexto: "contexto de p\u00e1gina" }),
    nt = "Auxiliador para Expandir Label Dias Corridos",
    at = {
      auxiliador: mt,
      checarHref: L.HREFS.PAINEL_USUARIO,
      emIframe: !0,
      esperar: "reativar",
      alvo: ".label-dias-corridos",
    },
    ut = new _(nt, at);

  // Auxiliador de Certidão em Lote
  class CertidaoAuxiliador extends w {
    constructor(e, r) {
      super(e, r);
      c(this, "certidaoService");
    }
    
    async ouvirMensagem(e) {
      if (e.tipo == m.CERTIDAO) {
        if (!e.acao) {
          certidaoLogger.aviso("Mensagem inválida");
          return;
        }
        
        switch (e.acao) {
          case 'incluirEmLote': {
            const { processos, modeloCertidao, conteudoCertidao, notificar } = e.conteudo;
            
            if (!processos || !Array.isArray(processos) || processos.length === 0) {
              certidaoLogger.erro("Lista de processos inválida ou vazia");
              return;
            }
            
            certidaoLogger.info(`Iniciando adição de certidão em lote para ${processos.length} processos`);
            
            // Enviar mensagem para o contexto de página processar
            this.emitirMensagemInterna({
              origem: "PJEMaisR",
              tipo: "certidao",
              mensagem: {
                acao: "incluirEmLote",
                conteudo: { processos, modeloCertidao, conteudoCertidao, notificar },
                id: e.id
              },
            });
            break;
          }
          case 'incluir': {
            const { numeroProcesso, modeloCertidao, conteudoCertidao, notificar } = e.conteudo;
            
            this.emitirMensagemInterna({
              origem: "PJEMaisR",
              tipo: "certidao",
              mensagem: {
                acao: "incluir",
                conteudo: { numeroProcesso, modeloCertidao, conteudoCertidao, notificar },
                id: e.id
              },
            });
            break;
          }
        }
      }
    }
    
    executar() {
      certidaoLogger.aviso(`"${this.nome}" ativado!!!`);
    }
  }
  
  const certidaoLogger = new A({ recurso: CertidaoAuxiliador.name, contexto: "contexto de página" });
  
  const certidaoAuxiliadorNome = "Auxiliador de Certidão em Lote";
  const certidaoAuxiliadorOpcoes = {
    auxiliador: CertidaoAuxiliador,
    checarHref: L.HREFS.PAINEL_USUARIO,
    ouvirMensageria: !0,
    emIframe: !0,
  };
  const certidaoAuxiliador = new _(certidaoAuxiliadorNome, certidaoAuxiliadorOpcoes);

  const st = [Ve, Xe, Je, ot, ut, Le, et, certidaoAuxiliador];


  new pe(st).iniciar();
})();
