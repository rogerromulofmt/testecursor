var ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ca(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ni = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ji, function(r) {
    if (!globalThis.chrome?.runtime?.id)
      throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const n = "The message port closed before a response was received.", o = (s) => {
        const a = {
          alarms: {
            clear: {
              minArgs: 0,
              maxArgs: 1
            },
            clearAll: {
              minArgs: 0,
              maxArgs: 0
            },
            get: {
              minArgs: 0,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          bookmarks: {
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getChildren: {
              minArgs: 1,
              maxArgs: 1
            },
            getRecent: {
              minArgs: 1,
              maxArgs: 1
            },
            getSubTree: {
              minArgs: 1,
              maxArgs: 1
            },
            getTree: {
              minArgs: 0,
              maxArgs: 0
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeTree: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          browserAction: {
            disable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            enable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            getBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1
            },
            getBadgeText: {
              minArgs: 1,
              maxArgs: 1
            },
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            openPopup: {
              minArgs: 0,
              maxArgs: 0
            },
            setBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setBadgeText: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          browsingData: {
            remove: {
              minArgs: 2,
              maxArgs: 2
            },
            removeCache: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCookies: {
              minArgs: 1,
              maxArgs: 1
            },
            removeDownloads: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFormData: {
              minArgs: 1,
              maxArgs: 1
            },
            removeHistory: {
              minArgs: 1,
              maxArgs: 1
            },
            removeLocalStorage: {
              minArgs: 1,
              maxArgs: 1
            },
            removePasswords: {
              minArgs: 1,
              maxArgs: 1
            },
            removePluginData: {
              minArgs: 1,
              maxArgs: 1
            },
            settings: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          commands: {
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          contextMenus: {
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeAll: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          cookies: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 1,
              maxArgs: 1
            },
            getAllCookieStores: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          devtools: {
            inspectedWindow: {
              eval: {
                minArgs: 1,
                maxArgs: 2,
                singleCallbackArg: !1
              }
            },
            panels: {
              create: {
                minArgs: 3,
                maxArgs: 3,
                singleCallbackArg: !0
              },
              elements: {
                createSidebarPane: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            }
          },
          downloads: {
            cancel: {
              minArgs: 1,
              maxArgs: 1
            },
            download: {
              minArgs: 1,
              maxArgs: 1
            },
            erase: {
              minArgs: 1,
              maxArgs: 1
            },
            getFileIcon: {
              minArgs: 1,
              maxArgs: 2
            },
            open: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            pause: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFile: {
              minArgs: 1,
              maxArgs: 1
            },
            resume: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          extension: {
            isAllowedFileSchemeAccess: {
              minArgs: 0,
              maxArgs: 0
            },
            isAllowedIncognitoAccess: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          history: {
            addUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteAll: {
              minArgs: 0,
              maxArgs: 0
            },
            deleteRange: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            getVisits: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          i18n: {
            detectLanguage: {
              minArgs: 1,
              maxArgs: 1
            },
            getAcceptLanguages: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          identity: {
            launchWebAuthFlow: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          idle: {
            queryState: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          management: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getSelf: {
              minArgs: 0,
              maxArgs: 0
            },
            setEnabled: {
              minArgs: 2,
              maxArgs: 2
            },
            uninstallSelf: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          notifications: {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            create: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getPermissionLevel: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          pageAction: {
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            hide: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          permissions: {
            contains: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            request: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          runtime: {
            getBackgroundPage: {
              minArgs: 0,
              maxArgs: 0
            },
            getPlatformInfo: {
              minArgs: 0,
              maxArgs: 0
            },
            openOptionsPage: {
              minArgs: 0,
              maxArgs: 0
            },
            requestUpdateCheck: {
              minArgs: 0,
              maxArgs: 0
            },
            sendMessage: {
              minArgs: 1,
              maxArgs: 3
            },
            sendNativeMessage: {
              minArgs: 2,
              maxArgs: 2
            },
            setUninstallURL: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          sessions: {
            getDevices: {
              minArgs: 0,
              maxArgs: 1
            },
            getRecentlyClosed: {
              minArgs: 0,
              maxArgs: 1
            },
            restore: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          storage: {
            local: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            managed: {
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            sync: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            }
          },
          tabs: {
            captureVisibleTab: {
              minArgs: 0,
              maxArgs: 2
            },
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            detectLanguage: {
              minArgs: 0,
              maxArgs: 1
            },
            discard: {
              minArgs: 0,
              maxArgs: 1
            },
            duplicate: {
              minArgs: 1,
              maxArgs: 1
            },
            executeScript: {
              minArgs: 1,
              maxArgs: 2
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 0
            },
            getZoom: {
              minArgs: 0,
              maxArgs: 1
            },
            getZoomSettings: {
              minArgs: 0,
              maxArgs: 1
            },
            goBack: {
              minArgs: 0,
              maxArgs: 1
            },
            goForward: {
              minArgs: 0,
              maxArgs: 1
            },
            highlight: {
              minArgs: 1,
              maxArgs: 1
            },
            insertCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            query: {
              minArgs: 1,
              maxArgs: 1
            },
            reload: {
              minArgs: 0,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            sendMessage: {
              minArgs: 2,
              maxArgs: 3
            },
            setZoom: {
              minArgs: 1,
              maxArgs: 2
            },
            setZoomSettings: {
              minArgs: 1,
              maxArgs: 2
            },
            update: {
              minArgs: 1,
              maxArgs: 2
            }
          },
          topSites: {
            get: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          webNavigation: {
            getAllFrames: {
              minArgs: 1,
              maxArgs: 1
            },
            getFrame: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          webRequest: {
            handlerBehaviorChanged: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          windows: {
            create: {
              minArgs: 0,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 1
            },
            getLastFocused: {
              minArgs: 0,
              maxArgs: 1
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          }
        };
        if (Object.keys(a).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class i extends WeakMap {
          constructor(F, h = void 0) {
            super(h), this.createItem = F;
          }
          get(F) {
            return this.has(F) || this.set(F, this.createItem(F)), super.get(F);
          }
        }
        const l = (E) => E && typeof E == "object" && typeof E.then == "function", u = (E, F) => (...h) => {
          s.runtime.lastError ? E.reject(new Error(s.runtime.lastError.message)) : F.singleCallbackArg || h.length <= 1 && F.singleCallbackArg !== !1 ? E.resolve(h[0]) : E.resolve(h);
        }, c = (E) => E == 1 ? "argument" : "arguments", d = (E, F) => function(v, ...O) {
          if (O.length < F.minArgs)
            throw new Error(`Expected at least ${F.minArgs} ${c(F.minArgs)} for ${E}(), got ${O.length}`);
          if (O.length > F.maxArgs)
            throw new Error(`Expected at most ${F.maxArgs} ${c(F.maxArgs)} for ${E}(), got ${O.length}`);
          return new Promise((L, I) => {
            if (F.fallbackToNoCallback)
              try {
                v[E](...O, u({
                  resolve: L,
                  reject: I
                }, F));
              } catch (y) {
                console.warn(`${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, y), v[E](...O), F.fallbackToNoCallback = !1, F.noCallback = !0, L();
              }
            else F.noCallback ? (v[E](...O), L()) : v[E](...O, u({
              resolve: L,
              reject: I
            }, F));
          });
        }, m = (E, F, h) => new Proxy(F, {
          apply(v, O, L) {
            return h.call(O, E, ...L);
          }
        });
        let p = Function.call.bind(Object.prototype.hasOwnProperty);
        const A = (E, F = {}, h = {}) => {
          let v = /* @__PURE__ */ Object.create(null), O = {
            has(I, y) {
              return y in E || y in v;
            },
            get(I, y, U) {
              if (y in v)
                return v[y];
              if (!(y in E))
                return;
              let D = E[y];
              if (typeof D == "function")
                if (typeof F[y] == "function")
                  D = m(E, E[y], F[y]);
                else if (p(h, y)) {
                  let q = d(y, h[y]);
                  D = m(E, E[y], q);
                } else
                  D = D.bind(E);
              else if (typeof D == "object" && D !== null && (p(F, y) || p(h, y)))
                D = A(D, F[y], h[y]);
              else if (p(h, "*"))
                D = A(D, F[y], h["*"]);
              else
                return Object.defineProperty(v, y, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return E[y];
                  },
                  set(q) {
                    E[y] = q;
                  }
                }), D;
              return v[y] = D, D;
            },
            set(I, y, U, D) {
              return y in v ? v[y] = U : E[y] = U, !0;
            },
            defineProperty(I, y, U) {
              return Reflect.defineProperty(v, y, U);
            },
            deleteProperty(I, y) {
              return Reflect.deleteProperty(v, y);
            }
          }, L = Object.create(E);
          return new Proxy(L, O);
        }, C = (E) => ({
          addListener(F, h, ...v) {
            F.addListener(E.get(h), ...v);
          },
          hasListener(F, h) {
            return F.hasListener(E.get(h));
          },
          removeListener(F, h) {
            F.removeListener(E.get(h));
          }
        }), Z = new i((E) => typeof E != "function" ? E : function(h) {
          const v = A(
            h,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          E(v);
        }), R = new i((E) => typeof E != "function" ? E : function(h, v, O) {
          let L = !1, I, y = new Promise((z) => {
            I = function(H) {
              L = !0, z(H);
            };
          }), U;
          try {
            U = E(h, v, I);
          } catch (z) {
            U = Promise.reject(z);
          }
          const D = U !== !0 && l(U);
          if (U !== !0 && !D && !L)
            return !1;
          const q = (z) => {
            z.then((H) => {
              O(H);
            }, (H) => {
              let se;
              H && (H instanceof Error || typeof H.message == "string") ? se = H.message : se = "An unexpected error occurred", O({
                __mozWebExtensionPolyfillReject__: !0,
                message: se
              });
            }).catch((H) => {
              console.error("Failed to send onMessage rejected reply", H);
            });
          };
          return q(D ? U : y), !0;
        }), V = ({
          reject: E,
          resolve: F
        }, h) => {
          s.runtime.lastError ? s.runtime.lastError.message === n ? F() : E(new Error(s.runtime.lastError.message)) : h && h.__mozWebExtensionPolyfillReject__ ? E(new Error(h.message)) : F(h);
        }, j = (E, F, h, ...v) => {
          if (v.length < F.minArgs)
            throw new Error(`Expected at least ${F.minArgs} ${c(F.minArgs)} for ${E}(), got ${v.length}`);
          if (v.length > F.maxArgs)
            throw new Error(`Expected at most ${F.maxArgs} ${c(F.maxArgs)} for ${E}(), got ${v.length}`);
          return new Promise((O, L) => {
            const I = V.bind(null, {
              resolve: O,
              reject: L
            });
            v.push(I), h.sendMessage(...v);
          });
        }, N = {
          devtools: {
            network: {
              onRequestFinished: C(Z)
            }
          },
          runtime: {
            onMessage: C(R),
            onMessageExternal: C(R),
            sendMessage: j.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: j.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        }, J = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        return a.privacy = {
          network: {
            "*": J
          },
          services: {
            "*": J
          },
          websites: {
            "*": J
          }
        }, A(s, N, a);
      };
      r.exports = o(chrome);
    } else
      r.exports = globalThis.browser;
  });
})(Ni);
var bu = Ni.exports;
const os = /* @__PURE__ */ Ca(bu);
function Iu() {
  return chrome !== void 0 ? chrome.runtime.getManifest().manifest_version === 3 ? chrome : os : w !== void 0 ? w : os;
}
const Xt = navigator.userAgent.includes("Firefox"), w = Iu(), va = () => w.runtime.getManifest();
var ba = { exports: {} };
const yu = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), Bi = (e = 7, t = !1) => Array.from({ length: e }, yu(t ? 16 : 36)).join("");
ba.exports = Bi;
ba.exports.default = Bi;
var xu = ba.exports;
const En = /* @__PURE__ */ Ca(xu);
var Ui = /* @__PURE__ */ ((e) => (e[e.QUANTIDADE_TOTAL_TAREFA = 1] = "QUANTIDADE_TOTAL_TAREFA", e[e.PARALIZADOS_ENTRADA_TAREFA = 2] = "PARALIZADOS_ENTRADA_TAREFA", e[e.PARALIZADOS_ULTIMO_MOVIMENTO = 3] = "PARALIZADOS_ULTIMO_MOVIMENTO", e))(Ui || {}), Vi = /* @__PURE__ */ ((e) => (e.PADRAO = "mc_formato_padrao", e.MINIMO = "mc_formato_minimo", e))(Vi || {}), Hi = /* @__PURE__ */ ((e) => (e[e.NAO_ATIVADO = 0] = "NAO_ATIVADO", e[e.DESMONTADO = 1] = "DESMONTADO", e[e.COMPLETAMENTE_MONTADO = 2] = "COMPLETAMENTE_MONTADO", e[e.REQUISITANDO_E_PROCESSANDO_DADOS = 3] = "REQUISITANDO_E_PROCESSANDO_DADOS", e))(Hi || {});
const wu = "P-J-e+R-tester", Tu = "2.28.104", Su = "22 de maio de 2025";
var Ye = /* @__PURE__ */ ((e) => (e.PADRAO = "padrao", e.ESCURO = "escuro", e.AJUSTES_GERAIS = "ajustesGerais", e.ALTO_CONTRASTE = "altoContraste", e.MAIS_ESPACO = "maisEspaco", e))(Ye || {}), Et = /* @__PURE__ */ ((e) => (e.NORMAL = "normal", e.ALTERNAR_LINHAS = "alternar_linhas", e.MINIMO = "minimo", e))(Et || {});
const as = {
  idVersaoOpcoes: `${Tu}:${Su}`,
  ativada: !0,
  carregadaPJE: !1,
  autosAbaMovimentos: !1,
  autosAbaFases: !1,
  autosAjustaDataHora: !1,
  copiarDadosDaPeca: "sem_descricao",
  copiaDadosPecaAtivado: !1,
  tema: "padrao",
  incluirLotacaoNoTitulo: !0,
  incluirLotacaoNoTituloOpcoes: {
    painelEsquerdo: !1,
    painelDireito: !0
  },
  ajustesGerais: !1,
  maisEspaco: !1,
  avisoDuplicacaoEtiquetas: !1,
  destacarLembretes: !0,
  selecionarLotacao: !0,
  pularquadroavisos: !0,
  pularPaginaVaziaHome: !0,
  pularpaginavazia: !1,
  pularpaginavaziaOpcaoAuxiliar: {
    criarAtaalhoPjeTokenMenuPJe: !1
  },
  infoQuadroAviso: [],
  totalTarefas: !0,
  inativaCartao: !1,
  cartaoProcesso: "normal",
  opcoesCopiarDadosPolo: "nome",
  opcoesPaletaCores: "completo",
  ajustarUsuarioMinuta: !0,
  minutaCentralizada: !1,
  removerAvisoAtencao: !0,
  ajustarUrgenciaSigilo: !0,
  ajustarPrazoIntimacao: !0,
  ajustarCaixaMovimentos: !0,
  homologadorMovimentos: !0,
  ultimalotacaoacessada: 0,
  filtros: {
    perfilAtivo: "direcao",
    perfis: {
      vara_mista: {
        nome: "Vara Mista",
        setores: {
          "[Civ]": ["[Civ]"],
          "[Crim]": ["[Crim]"],
          "[EF]": ["[EF]"],
          "[JEF]": ["[JEF]"],
          "[PInvest]": ["[PInvest]"]
        }
      },
      direcao: {
        nome: "Direção",
        setores: {
          Gab: [
            "Minutar Decisão - Gabinete",
            "Minutar Despacho - Gabinete",
            "Minutar informação",
            "Minutar Sentença - Gabinete",
            "Revisar Decisão - Gabinete",
            "Revisar Despacho - Gabinete",
            "Revisar Sentença - Gabinete",
            "Assinar Decisão - Gabinete",
            "Assinar Despacho - Gabinete",
            "Assinar Sentença - Gabinete"
          ],
          Inic: [
            "Triagem inicial",
            "Triagem inicial URGENTES",
            "Processos reclassificados",
            "Prevenção - Analisar e Minutar ato",
            "Evoluir de classe judicial",
            "Redistribuir processo",
            "Verificar impedimentos à redistribuição",
            "Selecionar órgão julgador de destino",
            "Migração - Triagem",
            "Processos incluídos",
            "Processos despachados no PLANTÃO JUDICIAL"
          ],
          Tria: [
            "Analisar petição",
            "Análise de secretaria",
            "Avaliar ato judicial proferido",
            "Avaliar ato judicial URGENTE proferido",
            "Avaliar ato ordinatório praticado",
            "Avaliar certidão expedida",
            "Avaliar informação proferida",
            "Lançar movimentação não registrada",
            "Aguardando prazo automático - Analisar petição",
            "Aguardando prazo manual - Analisar petição",
            "Arquivados - Analisar petição",
            "Sobrestados - Analisar petição",
            "Certificar decurso de prazo anterior ao arquivamento",
            "Definir prazo e tipo de sobrestamento",
            "Definir tipo de arquivamento",
            "Solucionar impedimentos ao arquivamento",
            "Recebido da instância superior",
            "Pendentes de análise - outros convênios",
            "Pendentes de análise BACENJUD",
            "Pendentes de análise INFOJUD",
            "Pendentes de análise RENAJUD",
            "Recebidos da Instância Superior",
            "Remeter à instância superior",
            "Solucionar impedimentos à remessa à instância superior",
            "Remetidos à Central de Cumprimento de Julgados",
            "Remetidos à Conciliação",
            "Remetidos à Contadoria",
            "Recebidos da Central de Cumprimento de Julgados",
            "Recebidos da Conciliação",
            "Recebidos da Contadoria",
            "Arquivo provisório",
            "Suspensão ou Sobrestamento",
            "Sobrestados - Prazo decorrido",
            "Sobrestados - prazo decorrido"
          ],
          Exp: [
            "Assinar comunicação via Sistema ou DJe",
            "Assinar comunicação via Telefone ou Balcão",
            "Escolher expediente padrão e prazo",
            "Escolher rotina de comunicações e outros expedientes",
            "Preparar comunicação por outros meios",
            "Preparar comunicação via Carta Precatória",
            "Preparar comunicação via Carta Rogatória",
            "Preparar comunicação via Ceman local",
            "Preparar comunicação via Correios",
            "Preparar comunicação via Edital",
            "Preparar comunicação via Sistema ou DJe",
            "Preparar comunicação via Telefone ou Balcão",
            "Preparar comunicações - rotina individual",
            "Preparar comunicações e outros expedientes - rotina em lote",
            "Selecionar Central de Mandado",
            "Concluir publicação de Edital no DJe",
            "Concluir publicação no DJe",
            "Encerrar prazos em aberto",
            "Aguardando devolução de AR",
            "Aguardando devolução de Carta Precatória",
            "Aguardando devolução de Carta Rogatória",
            "Aguardando devolução de mandado",
            "Aguardando publicação de Edital no DJe",
            "Aguardando remessa de Carta aos Correios",
            "Aguardando remessa de Carta Precatória",
            "Aguardando remessa de Carta Rogatória",
            "Aguardando remessa de expediente aos Correios",
            "Assinar comunicação via Correios - Magistrado",
            "Documento assinado - comunicação por outros meios",
            "Aguardando inclusão de laudo pericial"
          ],
          Req: [
            "Aguardando depósito ou negativa de precatório",
            "Aguardando depósito ou negativa de RPV",
            "Aguardando expedição e juntada de precatório",
            "Aguardando expedição e juntada de RPV",
            "Aguardando impressão de alvará",
            "Aguardando migração de precatório",
            "Aguardando migração de RPV",
            "Aguardando prazo - Avaliar manifestação - Precatório",
            "Aguardando prazo - Avaliar manifestação - RPV",
            "Aguardando prazo - Precatório",
            "Aguardando prazo - RPV",
            "Preparar alvará",
            "Preparar precatório",
            "Preparar RPV",
            "Recebidos da rotina de requisição de pagamento",
            "Escolher tipo de requisição de pagamento",
            "Sobrestados por expedição de precatório"
          ],
          Sec: [
            "Assinar Decisão - Secretaria",
            "Assinar Despacho - Secretaria",
            "Assinar Sentença - Secretaria",
            "Minutar Decisão - Secretaria",
            "Minutar Despacho - Secretaria",
            "Minutar Sentença - Secretaria",
            "Minutar ato ordinatório",
            "Informar dados da audiência - impedimento para arquivamento",
            "Minutar ata de audiência cível"
          ]
        }
      },
      minhas_tarefas: {
        nome: "Minhas Tarefas",
        setores: { Exemplo: ["Exemplo de tarefa 1"] }
      },
      turma_recursal: {
        nome: "Turma Recursal",
        setores: {
          Secretaria: [
            "[TR]  Aguardando devolução de AR",
            "[TR] Aguardando expedição de mandado",
            "[TR] Aguardando impressão de alvará",
            "[TR] Aguardando julgamento pela Turma Nacional",
            "[TR] Aguardando julgamento pela Turma Regional",
            "[TR] Aguardando prazo automático",
            "[TR] Aguardando prazo automático - Analisar petição",
            "[TR] Aguardando prazo manual",
            "[TR] Aguardando prazo manual - Analisar petição",
            "[TR] Aguardando publicação de Edital no DJe",
            "[TR] Aguardando remessa de expediente aos Correios",
            "[TR] Alterar Classe para remessa à Turma Regional",
            "[TR] Análise de secretaria",
            "[TR] Arquivados - Analisar petição",
            "[TR] Arquivo permanente",
            "[TR] Arquivo provisório",
            "[TR] Assinar alvará",
            "[TR] Assinar ato ordinatório",
            "[TR] Assinar certidão",
            "[TR] Assinar certidão de decurso de prazo",
            "[TR] Assinar certidão de trânsito em julgado",
            "[TR] Assinar comunicação por outros meios",
            "[TR] Assinar comunicação via Ceman",
            "[TR] Assinar comunicação via Ceman - Magistrado",
            "[TR] Assinar comunicação via Correios",
            "[TR] Assinar comunicação via Edital",
            "[TR] Assinar comunicação via Sistema ou DJe",
            "[TR] Assinar comunicação via Telefone ou Balcão",
            "[TR] Assinar informação",
            "[TR] Avaliar acórdão proferido",
            "[TR] Avaliar Acórdão proferido - intimações pendentes",
            "[TR] Avaliar ato judicial proferido",
            "[TR] Avaliar ato judicial URGENTE proferido",
            "[TR] Avaliar ato ordinatório praticado",
            "[TR] Avaliar certidão expedida",
            "[TR] Avaliar informação proferida",
            "[TR] Avaliar mandado devolvido",
            "[TR] Certificar decurso de prazo anterior ao arquivamento",
            "[TR] Certificar trânsito em julgado",
            "[TR] Classificar sobrestados por decisão de Instância ou Tribunal Superior",
            "[TR] Concluir publicação de Edital no DJe",
            "[TR] Concluir publicação no DJe",
            "[TR] Conferir alvará",
            "[TR] Definir prazo e tipo de sobrestamento",
            "[TR] Definir tipo de arquivamento",
            "[TR] Encerrar prazos em aberto",
            "[TR] Escolher expediente padrão e prazo",
            "[TR] Escolher rotina de comunicações e outros expedientes",
            "[TR] Migração - Triagem",
            "[TR] Minutar ato ordinatório",
            "[TR] Minutar certidão",
            "[TR] Minutar certidão de decurso de prazo",
            "[TR] Minutar certidão de trânsito em julgado",
            "[TR] Minutar informação",
            "[TR] Preparar alvará",
            "[TR] Preparar comunicação por outros meios",
            "[TR] Preparar comunicação via Ceman",
            "[TR] Preparar comunicação via Correios",
            "[TR] Preparar comunicação via Edital",
            "[TR] Preparar comunicação via Sistema ou DJe",
            "[TR] Preparar comunicação via Telefone ou Balcão",
            "[TR] Preparar comunicações - rotina individual",
            "[TR] Preparar comunicações e outros expedientes - rotina em lote",
            "[TR] Processos baixados por cancelamento da distribuição",
            "[TR] Processos baixados por remessa a outro órgão",
            "[TR] Processos com a conclusão cancelada",
            "[TR] Processos remetidos ao Juizado Especial Federal",
            "[TR] Recebidos da Conciliação",
            "[TR] Recebidos da Contadoria",
            "[TR] Recebidos da rotina de comunicações e outros expedientes",
            "[TR] Recebidos da Turma Nacional",
            "[TR] Recebidos da Turma Regional",
            "[TR] Recebidos do arquivo",
            "[TR] Recebidos do sobrestamento",
            "[TR] Reclassificar tipo de documento",
            "[TR] Redistribuir processo",
            "[TR] Redistribuir processo ao TRF1",
            "[TR] Remeter a outro órgão julgador",
            "[TR] Remeter à Turma Nacional",
            "[TR] Remeter à Turma Regional",
            "[TR] Remeter ao Juizado Especial Federal",
            "[TR] Remetidos à Conciliação",
            "[TR] Remetidos à Contadoria",
            "[TR] Selecionar Central de Mandados",
            "[TR] Sobrestados - Analisar petição",
            "[TR] Sobrestados para aguardar julgamento de outra causa ou recurso",
            "[TR] Sobrestados para cumprimento de transação penal",
            "[TR] Sobrestados por arguição de impedimento ou de suspeição",
            "[TR] Sobrestados por conflito de competência",
            "[TR] Sobrestados por convenção das partes",
            "[TR] Sobrestados por decisão do Presidente do STF - IRDR",
            "[TR] Sobrestados por incidente de insanidade mental",
            "[TR] Sobrestados por IRDR (TRF)",
            "[TR] Sobrestados por morte de parte ou procurador",
            "[TR] Sobrestados por outros motivos",
            "[TR] Sobrestados por RE com repercussão geral",
            "[TR] Sobrestados por RESP repetitivo",
            "[TR] Sobrestados por suspensão condicional do processo",
            "[TR] Solucionar impedimentos à remessa à Turma Nacional",
            "[TR] Solucionar impedimentos ao arquivamento",
            "[TR] Trasladar documentos de outro processo",
            "[TR] Triagem inicial"
          ],
          Gabinete: [
            "[TR] Aguardando a sessão - Confirmar Voto Vista",
            "[TR] Aguardando a sessão - Encaminhados para o Gabinete Vista",
            "[TR] Aguardando a sessão - Preparar Voto Vista",
            "[TR] Aguardando a sessão - adiados",
            "[TR] Aguardando a sessão - incluídos em pauta",
            "[TR] Aguardando a sessão - incluídos em pauta - Voto Vista",
            "[TR] Aguardando a sessão - iniciada",
            "[TR] Aguardando a sessão - não incluídos em pauta",
            "[TR] Aguardando a sessão - não relator",
            "[TR] Aguardando a sessão - preparar voto vista",
            "[TR] Apreciar admissibilidade do Pedido de Uniformização",
            "[TR] Apreciar admissibilidade do RE",
            "[TR] Assinar Decisão",
            "[TR] Assinar Decisão - órgão julgador diverso",
            "[TR] Assinar Despacho",
            "[TR] Assinar Despacho - órgão julgador diverso",
            "[TR] Assinar ato sobre admissibilidade do Pedido de Uniformização",
            "[TR] Assinar ato sobre admissibilidade do RE",
            "[TR] Assinar inteiro teor",
            "[TR] Confirmar Voto Vista",
            "[TR] Confirmar Voto e encaminhar para Gabinete Vista",
            "[TR] Confirmar voto - não relator",
            "[TR] Confirmar voto vencido - relator",
            "[TR] Lançar movimentações processuais do julgamento",
            "[TR] Lançar movimentação não registrada",
            "[TR] Minutar Decisão",
            "[TR] Minutar Decisão - órgão julgador diverso",
            "[TR] Minutar Despacho",
            "[TR] Minutar Despacho - órgão julgador diverso",
            "[TR] Minutar voto - não relator",
            "[TR] Preparar Voto Vista",
            "[TR] Preparar relatório e voto",
            "[TR] Prevenção - Analisar e Minutar ato",
            "[TR] Prevenção - Assinar ato",
            "[TR] Revisar Decisão",
            "[TR] Revisar Decisão - órgão julgador diverso",
            "[TR] Revisar Despacho",
            "[TR] Revisar Despacho - órgão julgador diverso",
            "[TR] Revisar ato sobre admissibilidade do Pedido de Uniformização",
            "[TR] Revisar ato sobre admissibilidade do RE",
            "[TR] Triagem - Gabinete de Turma Recursal",
            "[TR] Triagem - Gabinete do Presidente de Turma Recursal",
            "[TR] Triagem inicial - órgão julgador diverso",
            "[TR] Votar antecipadamente - não relator"
          ]
        }
      }
    }
  },
  filtrostarefas: !0,
  inverterOrdemDownload: !1,
  etiquetasMaisUsadas: {
    valores: [
      {
        nome: "",
        tarefa: ""
      }
    ]
  },
  linksUlteisMultante: {
    enderecoPje: {
      site: "",
      vezes: 0
    },
    enderecoSei: {
      site: "",
      vezes: 0
    }
  },
  painelBaixaTarefas: !1,
  etiquetasColoridas: !0,
  coresEtiquetasColoridas: {},
  integracaoAJG: !1,
  tagsAutosDigitais: !0,
  etiquetaFavoritaMinhasTarefas: !0,
  abrirLinkMenuNoAppup: !1,
  esconderBarraLateralPainelTarefas: !0,
  painelOficialJustica: !1,
  sisbajud: !1,
  gestorDeModelos: !1,
  ultimasEtiquetasUsadaTarefa: !0,
  autorizarLogEmProducao: !1,
  copiarDadosPolo: !0,
  automacaoProcessos: !0,
  telaVisivel: !1,
  gerenciadorEtiquetas: !0,
  contarSelecaoProcessos: !0,
  multivisualizador: !1,
  gerarSinopseRelatoria: !1,
  adicionarEtiquetasAutos: !0,
  linksUltimasTarefas: !1,
  melhorarCartaoTarefa: !0,
  melhorarCartaoTarefaOpcoesAuxiliares: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 20,
    flagDeLimiteVerde: 15,
    destacarNumeroProcesso: !0,
    modificarCorPadraoEtiqueta: !1,
    copiarNumeroProcesso: !0,
    melhorarDestaquePrioridade: !0,
    recolherdorCartao: !0,
    melhorarDestaqueCartaoSelecionado: !0,
    contarDiasConclusao: !0
  },
  melhorarCartaoTarefaCartoesRecolhidosPersistencia: [],
  atalhosuteis: !0,
  maisAtalhosAutosDigitais: !1,
  visualizadorLembretes: !0,
  pesquisacamposreordena: !0,
  siteAtual: "",
  seletorProcessos: !1,
  integracaoInfojud: !1,
  mapaDeCalorPainelUsuario: !1,
  mapaDeCalorPainelUsuarioLimitesFlags: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 25,
    flagDeLimiteVerde: 15,
    mapaDeCalorPainelUsuarioUsarLimitesFlagsMelhorarCartaoTarefa: !1
  },
  mapaDeCalorPainelUsuarioStorage: {},
  mapaDeCalorPainelUsuaroiAnalisesProcessadasStorage: {},
  mapaDeCalorPainelUsuarioTarefasIgnoradas: [
    "arquivo",
    "aguardando apreciação",
    "processos suspensos",
    "remetidos para tr",
    "remetidos à tr",
    "sobrestados",
    "devolvidos para instância de origem"
  ],
  mapaDeCalorPainelUsuarioOrigemDados: Ui.PARALIZADOS_ENTRADA_TAREFA,
  mapaDeCalorPainelUsuarioFormatoBarra: Vi.PADRAO,
  mapaDeCalorPainelUsuaroiHashImpressaoLimitesFlags: Math.E,
  mapaDeCalorPainelUsuarioSessionStorage: {
    status: Hi.NAO_ATIVADO,
    timestampMontagem: -1
  },
  menuHaburgueIntegracaoSistemas: !0,
  integracaoSerasajud: !1,
  mostraProcessosDigitos: !1,
  intimaZap: !1,
  abrirLembreteNoPopup: !1,
  postIt: !1,
  minutaRemoveOrientacoes: !1,
  mostrarResultadoDiligencia: !1,
  contadorTempoMandado: !1,
  tagsMandados: !1,
  listaTarefaFiltros: !0,
  downloadCsvTipo: "completo",
  listaTarefaFiltrosOpcoesAuxiliares: {
    armazenamentoGlobal: null,
    armazenamentoTarefas: {},
    armazenamentoOrdenacao: null,
    armazenamentoPadraoPJe: null,
    predefinicoesGlobal: [],
    predefinicoesTarefas: {},
    predefinicoesOrdenacao: [],
    predefinicoesPadraoPJe: []
  },
  visualizarAnexoResultadoDiligencia: !0,
  exibirIdOrigem: !1,
  estenderAcessibilidadePcdVisual: !1,
  reproduzirVideos: !0,
  painelGerencial: !0,
  menuIconePainelUsuario: !0,
  filtrarPerfisDoUsuario: !0
  // inserir novo valor default acima
}, Eu = /https?:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(pje.g)\.(.+)\.jus\.br|frontend.prd.cnj.cloud|corregedoria.pje.jus.br|localhost:8080\/pje)\//, Pu = /https?:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje\w|pje-treinamento-1g|pje.g|.g|.+grau)|(pje.g)\.(.+)\.jus\.br|corregedoria\.pje\.jus\.br)/, Ut = {
  MINUTA: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?minuta(-\w+)*\.html/,
  PAINEL_USUARIO: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LOCAL: /http:\/\/localhost:4000\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LISTA_TAREFA_FILTRO: "http://localhost:4000/pje/lista-tarefa-filtro.html",
  AUTOS_DIGITAIS: /http:\/\/localhost:(\d+)\/pje\/autos-digitais\/autos-digitais(-\w+)*(\w*\d+G)?\.html/,
  ULTIMAS_TAREFAS: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?ultimas-tarefas(-\w+)*\.html/
}, Ne = {
  MINUTA: /https:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(pje.g)\.(.+)\.jus\.br|corregedoria.pje.jus.br)\/Processo\/movimentar.seam\?(idProcesso=[0-9]+&newTaskId=|newTaskId=)[0-9]+/,
  PAINEL_CONSULTA_CLOUD: /https:\/\/.*frontend.*prd.*cnj\.cloud\/?$/,
  PAINEL_CONSULTA: /https:\/\/(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)\/Processo\/ConsultaProcesso\/listView\.seam/,
  PAINEL_ETIQUETAS: /.*frontend.*painel-usuario-interno\/etiquetas/,
  PAINEL_USUARIO: /.*frontend.*painel-usuario-interno(?!\/etiquetas)/,
  PAINEL_USUARIO_LOCAL: /https:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(pje.g)\.(.+)\.jus\.br|corregedoria.pje.jus.br|(.+)\.(.+)\.jus\.br)\/ng2\/dev\.seam#\/painel-usuario-interno/,
  AUTOS_DIGITAIS: /https:\/\/(.+)\.jus\.br\/(pje|pjecnj|pjesg|pje\w*|pje-treinamento-1g|.+grau)?\/?Processo\/ConsultaProcesso\/Detalhe\/(listAutosDigitais|detalheProcessoVisualizacao)\.seam\?(id|idProcesso)=(.+)/,
  AJG: /https:\/\/ajg1.cjf.jus.br/,
  PAINEL_OFICIAL_JUSTICA: /Painel\/painel_usuario\/Paniel_Usuario_Oficial_Justica/,
  RELACAO_JULGAMENTO: /https:\/\/(pje2g|pjetrn2g|pjehml2grt)\.(trf1|trf2|trf3|trf4|trf5|trf6)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|.+grau)\/Sessao\/RelacaoJulgamento\/sessaoPopUp\.seam\?idSessao=\d+/,
  ULTIMAS_TAREFAS: /\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)\/Painel\/painel_usuario\/include\/listTasksUsuarioPje2.seam/,
  // with params homeAnterior=br.jus.pje.nucleo.entidades.ProcessoExpedienteCentralMandado
  OFICIAL_JUSTICA_CONTROLE_MANDADOS: /Visita\/listView\.seam(\w*)\?(.*&)?homeAnterior=br\.jus\.pje\.nucleo\.entidades\.ProcessoExpedienteCentralMandado/,
  HOME: /https:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(pje.g)\.(.+)\.jus\.br|corregedoria.pje.jus.br)\/home\.seam/
}, rr = {
  CONTENT_SCRIPTS: {
    ESTILOS_URL: "content/style.css"
  },
  REGEX: { NUMERO_PROCESSO: /\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/ },
  LINKS: {
    PJE: "https://pje1g.trf1.jus.br",
    OUTLOOK: "https://outlook.office.com/mail/inbox",
    ESOSTI: "https://esosti.trf1.jus.br/itsm/webclient/login/login.jsp?appservauth=true",
    SEI: "https://sei.trf1.jus.br/",
    SISBAJUD: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=sisbajud&redirect_uri=https%3A%2F%2Fsisbajud.cnj.jus.br%2F%3F&state=f9fd5e6e-e36c-4a8d-8dc7-b22b93373787&response_mode=fragment&response_type=code&scope=openid&nonce=06af9d0f-f779-4d6b-a769-308471bbda7e",
    RENAJUD: "https://renajud.denatran.serpro.gov.br/renajud/login.jsf",
    CONTRACHEQUE: "https://portal.trf1.jus.br/Consulta/ContraCheque/ContraCheque.php",
    AJG: {
      NOMEACAO: "https://ajg1.cjf.jus.br/aj/nomeacao/nomearprofissionais/nomearprofissionais_index.jsf",
      SOLICITACAO: "https://ajg1.cjf.jus.br/aj/pagamento/mantersolicitacaopagamento/mantersolicitacaopagamento_principal.jsf"
    }
  },
  HREFS: {
    ROOT: Eu,
    LEGACY_WEB_ROOT: Pu,
    HOME: [Ne.HOME],
    MINUTA: [Ne.MINUTA, Ut.MINUTA],
    PAINEL_CONSULTA_CLOUD: Ne.PAINEL_CONSULTA_CLOUD,
    PAINEL_CONSULTA: Ne.PAINEL_CONSULTA,
    PAINEL_ETIQUETAS: Ne.PAINEL_ETIQUETAS,
    PAINEL_USUARIO: [
      Ne.PAINEL_USUARIO,
      Ut.PAINEL_USUARIO,
      Ut.PAINEL_USUARIO_LISTA_TAREFA_FILTRO
    ],
    PAINEL_USUARIO_LOCAL: [Ne.PAINEL_USUARIO_LOCAL, Ut.PAINEL_USUARIO_LOCAL],
    AUTOS_DIGITAIS: [Ne.AUTOS_DIGITAIS, Ut.AUTOS_DIGITAIS],
    AJG: Ne.AJG,
    PAINEL_OFICIAL_JUSTICA: Ne.PAINEL_OFICIAL_JUSTICA,
    RELACAO_JULGAMENTO: [Ne.RELACAO_JULGAMENTO, Ut.AUTOS_DIGITAIS],
    ULTIMAS_TAREFAS: [Ne.ULTIMAS_TAREFAS, Ut.ULTIMAS_TAREFAS],
    OFICIAL_JUSTICA_CONTROLE_MANDADOS: [Ne.OFICIAL_JUSTICA_CONTROLE_MANDADOS]
  }
};
function Ou(e) {
  return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Fu(e) {
  return Ou(e) === "string";
}
let Ce = class Fe {
  static estilos = {
    azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;"
  };
  static console = {
    assert: (...t) => {
    },
    count: (...t) => {
    },
    debug: (...t) => {
    },
    dir: (...t) => {
    },
    error: (...t) => {
    },
    group: (...t) => {
    },
    groupCollapsed: (...t) => {
    },
    groupEnd: (...t) => {
    },
    info: (...t) => {
    },
    log: (...t) => {
    },
    profile: (...t) => {
    },
    table: (...t) => {
    },
    time: (...t) => {
    },
    timeEnd: (...t) => {
    },
    trace: (...t) => {
    },
    warn: (...t) => {
    }
  };
  static autorizarEmProducao = !1;
  static info(t) {
    Fe.log(t, Fe.estilos.azul);
  }
  static erro(t) {
    t instanceof Error ? (Fe.log(t.message, Fe.estilos.vermelho), console.log(t)) : Fe.log(t, Fe.estilos.vermelho);
  }
  static aviso(t) {
    Fe.log(t, Fe.estilos.laranja);
  }
  static sucesso(t) {
    Fe.log(t, Fe.estilos.verde);
  }
  static detalhes(t) {
    Fe.log(t, Fe.estilos.cinza);
  }
  static inspecionar(t, r) {
    this.autorizarEmProducao && (Fe.detalhes(t), console.log(r));
  }
  static log(t, r = "") {
    this.autorizarEmProducao && console.log(`%c${t}`, r);
  }
};
class $e {
  recurso;
  contexto_;
  adicional;
  get contexto() {
    return Fu(this.contexto_) ? this.contexto_ : this.contexto_();
  }
  static _depurador;
  static _baseConsoleFunc = (t, ...r) => {
    const n = `[${wu}][${$e._depurador.recurso}][${$e._depurador.contexto}]${$e._depurador.adicional ? `[${$e._depurador.adicional}]` : ""}: `;
    typeof r[0] == "string" ? r[0] = r[0].startsWith("%c") ? `%c${n}${r[0].slice(2)}` : `${n}${r[0]}` : r = [n].concat(r), t(...r);
  };
  static _console = {
    assert: (...t) => (...r) => {
    },
    count: (...t) => (...r) => {
    },
    debug: (...t) => (...r) => {
    },
    dir: (...t) => (...r) => {
    },
    error: (...t) => (...r) => {
    },
    group: (...t) => (...r) => {
    },
    groupCollapsed: (...t) => (...r) => {
    },
    groupEnd: (...t) => (...r) => {
    },
    info: (...t) => (...r) => {
    },
    log: (...t) => (...r) => {
    },
    profile: (...t) => (...r) => {
    },
    table: (...t) => (...r) => {
    },
    time: (...t) => (...r) => {
    },
    timeEnd: (...t) => (...r) => {
    },
    trace: (...t) => (...r) => {
    },
    warn: (...t) => (...r) => {
    }
  };
  /**
   * Cria uma instância de Depurador2.
   * @param {string} recurso - O recurso associado à depuração.
   * @param {string | TUnknownFunction} contexto - O contexto associado à depuração.
   * @param {string} [adicional] - Informações adicionais opcionais.
   */
  constructor({
    recurso: t,
    contexto: r,
    adicional: n
  }) {
    this.recurso = t.replace(/^_/, ""), this.contexto_ = r || "background", this.adicional = n;
  }
  /**
   * Obtém o objeto console configurado para depuração.
   * @returns {Object} - Objeto console configurado.
   */
  get console() {
    return $e._depurador = this, $e._console;
  }
  /**
   * Registra uma mensagem informativa no console.
   * @param {string} mensagem - A mensagem informativa a ser registrada.
   */
  info(t) {
    this.log(t, Ce.estilos.azul);
  }
  /**
   * Registra uma mensagem de erro no console.
   * @param {string | unknown} objeto - O objeto ou mensagem de erro a ser registrado.
   */
  erro(t, r) {
    const n = t instanceof Error ? t.message : t;
    this.log(n, Ce.estilos.vermelho, r), t instanceof Error && console.log(t, r);
  }
  /**
   * Registra uma mensagem de aviso no console.
   * @param {string} mensagem - A mensagem de aviso a ser registrada.
   */
  aviso(t) {
    this.log(t, Ce.estilos.laranja);
  }
  /**
   * Registra uma mensagem de sucesso no console.
   * @param {string} mensagem - A mensagem de sucesso a ser registrada.
   */
  sucesso(t, r) {
    this.log(t, Ce.estilos.verde, r);
  }
  /**
   * Registra uma mensagem de detalhes no console.
   * @param {string} mensagem - A mensagem de detalhes a ser registrada.
   */
  detalhes(t) {
    this.log(t, Ce.estilos.cinza);
  }
  /**
   * Inspeciona um objeto e registra no console com um rótulo
   * @param {string} rotulo - O rótulo a ser exibido antes do objeto.
   * @param {unknown} objeto - O objeto a ser inspecionado e registrado.
   */
  inspecionar(t, r) {
    this.detalhes(t), this.console.log(r);
  }
  /**
   * Registra uma mensagem de log no console.
   * @param {string} mensagem - A mensagem a ser registrada.
   * @param {string} [estilo=''] - O estilo CSS a ser aplicado à mensagem.
   */
  log(t, r = "", n) {
    this.console.log(`%c${t}`, r, n);
  }
}
async function Lu() {
  return (await Ge.obter("ativada")).ativada === !0;
}
class Ge {
  static iniciar() {
    w.storage.local.set(as);
  }
  static async atualizar() {
    const t = await Ge.obter(null);
    w.storage.local.set(Object.assign(as, t));
  }
  static remover(t) {
    return w.storage.local.remove(t);
  }
  static guardar(t) {
    return w.storage.local.set(t);
  }
  static async obter(t) {
    return await w.storage.local.get(t || null);
  }
  static async guardarSessionStorage(t) {
    if (ln.console.log("Salvando dados no armazenamento de sessão."), w.runtime.getManifest().manifest_version === 2) {
      for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          const n = t[r];
          sessionStorage.setItem(r, JSON.stringify(n));
        }
    } else
      try {
        await w.storage.session.set(t), ln.console.log("Dados salvos no armazenamento de sessão.");
      } catch (r) {
        ln.console.error("Erro ao salvar dados no armazenamento de sessão:", r);
      }
  }
  static async obterSessionStorage(t = null) {
    if (w.runtime.getManifest().manifest_version === 2) {
      const r = {};
      for (let n = 0; n < sessionStorage.length; n++) {
        const o = sessionStorage.key(n);
        o && (r[o] = sessionStorage.getItem(o));
      }
      return t ? sessionStorage.getItem(t) : r;
    } else
      try {
        const r = await w.storage.session.get(t);
        return t ? r[t] : r;
      } catch (r) {
        return ln.console.error("Erro ao obter dados do armazenamento de sessão:", r), null;
      }
  }
}
const ln = new $e({
  recurso: "Armazenamento"
}), fo = "nav.main-menu,#divSideBar{max-width:40px;min-width:40px}painel-usuario-menu-esquerdo{left:unset!important}#divProcessosTarefa{width:25%!important;flex-grow:1}#divMainPanel{width:75%!important;overflow-y:hidden!important}#divPainelUsuarioContent{display:flex}#divRightPanel{flex:1}#conteudoTarefa,.assinaturas-tarefa{overflow-y:hidden}#pageBody.container-fluid.scroll-y.novoPainel{overflow-y:hidden!important}#divLiAgrupadores,#divLiAssinatura,#divLiConsultaProcessual,#divLiEtiquetas,#divLiExpedientes,#divLiMinhasTarefas,#divLiSessoes,#divLiTarefas,#divLiUltimasTarefas{left:41px!important}#pageBody{padding:0}", Ru = ":root{--background-primary: #2d2f32;--background-secondary: #1c1e1f;--text-neutral: #b0b0b0;--selection-background: #3da9fc;--selection-text: #e8e6e3;--text-light: #dcdcdc;--background-dark: #3a3a3d;--background-dark-alt: #2b2d2b;--link-hover: #3e4041;--border-light: #d1d1d1;--text-highlight: #89d9f9;--background-default: #282828;--nav-background: #003f66;--nav-alert: #8a1a00;--bar-background: #3d3d3d;--button-background: #0a6991;--border-default: #232527;--button-hover: #323232}body,html{background-color:var(--background-secondary);color:var(--text-light)}.main-menu,.sideBarDefault nav.main-menu{background:var(--background-default)}.hrDivisao{border-color:var(--border-default)!important}#barraSuperiorPrincipal,.navbar,.navtop,.navbar-static-top,.navtop .navbar-collapse,.navbar-header,.navbar-collapse,.navbar-nav,.nav-bar-brand,.navbar-right{background:var(--nav-background)!important;color:var(--text-light)!important}.navbar.nav-sigilo,.navtop.nav-sigilo,.navbar-static-top.nav-sigilo,.navtop .navbar-collapse.nav-sigilo,.nav-sigilo .navbar-header,.nav-sigilo .navbar-collapse,.navbar-header.nav-sigilo,.nav-sigilo .navbar-nav,.nav-bar-brand,.navbar-right.nav-sigilo{background:var(--nav-alert)!important}span,.btn-default,.btn,p,a{color:var(--text-light)}a:hover,.btn:hover,.btn-default:hover{color:var(--text-neutral);background-color:var(--button-hover);transition:background-color .3s ease}.login-body{background:var(--background-primary)!important}#username,#password{background:var(--background-primary);color:var(--text-light)}#divProcessosTarefa,#acoes-processos-selecionados,.header-wrapper,.box,.media-body,.panel,.modal-content{background:var(--background-default);color:var(--text-light)}.painel-usuario-interno-dashboard.row,.rightPanel.container-fluid{background:var(--background-primary);color:var(--text-light)}#pageBody{background-color:var(--background-dark)}#frameTarefas .header-wrapper,#frameTarefas .header-processo .mais-detalhes,div.vcenter.col-md-7.no-padding.header-processo{background:var(--border-default);color:var(--text-light)}.btn.btn-primary{background:var(--button-background);color:var(--text-light)}.text-info{color:var(--button-background)}#modalAssinarEmLote>div:first-child>div:first-child,#modalMovimentarEmLote>div:first-child>div:first-child>div:nth-child(2)>*{background:var(--background-default);color:var(--text-light)}.faixa-superior{background-color:var(--bar-background)!important}#loginAplicacaoButton,#btnEntrar,#kc-pje-office,#kc-login{background:var(--button-background);color:var(--text-light)}#loginAplicacaoButton:hover,#btnEntrar:hover,#kc-pje-office:hover,#kc-login:hover{background:var(--link-hover);color:var(--text-light);transition:background-color .3s ease}.dados,.pageBody{background-color:var(--background-secondary)!important;color:var(--text-light)!important}.nomeSistema,.subNomeSistema{color:var(--text-highlight)!important}.rich-stglpanel-header,.rich-stglpanel-body,.rich-panel-body,.value,input,select,textarea,.form-control,#avisosPannel_header{background-color:var(--background-secondary)!important;color:var(--text-light)!important}#quadroAvisoPapelMensagem\\:j_id137_body>div.propertyView>div.value.col-sm-12>input[type=text],#quadroAvisoPapelMensagem\\:dataPublicacaoDecoration\\:dataPublicacaoFromFormInputDate,#quadroAvisoPapelMensagem\\:dataPublicacaoDecoration\\:dataPublicacaoToFormInputDate{background-color:var(--background-primary)!important;color:var(--text-light)!important}#menu,#menu>div.nivel.nivel-aberto,ul#menu *,#menu *{background-color:var(--background-secondary)!important;color:var(--text-light)!important}ul#menu a:hover,#menu a:hover{background-color:var(--link-hover)!important}.dropdown-menu{color:var(--text-light);background-color:var(--background-secondary);border-color:var(--text-light)}html,body,input,textarea,select,button{border-color:var(--background-primary)}#processosTarefa>p-datalist>div>div>ul *{background-color:var(--background-secondary);border-color:var(--background-dark-alt)}li.ng-star-inserted>processo-datalist-card:first-child>div:first-child>div:nth-child(3)>a:first-child>span{color:var(--selection-background)}span.orgao.col-sm-12.no-padding,.tarefa-numero-processo.process,span.local.col-sm-12.no-padding,span.local.col-sm-12.no-padding.ng-star-inserted{color:var(--text-light)}.modal-header,.modal-footer,.processos-list,.col-sm-12,#dropdown-filtro-tarefas,button.btn:nth-child(3),#detalheDocumento\\:toolbarDocumento,#divTimeLine\\:divEventosTimeLine,.media-body,.box,.timeline .media.data,.timeline .media.data>.media-body,#PjeMaisRTabs,.pesquisa,.affix-top,.col-xs-12,.rich-stglpanel-header,#j_id51\\:j_id361\\:tableDestinatariosLote\\:prazoGeralInput,.rich-table-row,.rich-table-firstrow,#j_id51\\:processosElegiveis *>h6,#j_id51\\:processosElegiveis\\:transicoesColHeader,.rich-table-header,#cke_1_top{background:var(--background-primary);color:var(--text-light)}.titulo-accordion,.datalist-content,.folha,.rich-datascr,.rich-table-footercell,#taskInstanceForm\\:WEB-INF_xhtml_flx_visualizarPeticao-2601387906\\:j_id195>table>tbody>*{background:var(--background-primary)!important;color:var(--text-light)!important}#divTarefasPendentes>div.wrapper-filtro-tarefas-pendentes>div,#inputPesquisaTarefas,#filtro-tarefas,.form-control,.ng-pristine,.ng-invalid,.ng-touched,#dataDistribuicaoInicio>span>div,.ui-state-default,.ng-tns-c23-2,.ng-star-inserted,.ui-datepicker-title,.ui-datepicker-header,.ui-widget-header,.ui-helper-clearfix,.ui-corner-all,#dataDistribuicaoInicio>span>input,#divTimeLine,.media-left,.dropdown-menu,.media-body,.box,.pesquisa,.affix-top,.btn,.btn-flat,.btn-default,.hidden-sm{background:var(--background-primary)!important;color:var(--text-light)!important}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n){background-color:#3b3b39!important;color:#fff!important;font-weight:700}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n):hover{background-color:#bce4ee80!important}.tree li:last-child:before{background-color:var(--background-primary)!important}.autos-digitais i,.autos-digitais span,.autos-digitais div,.etiquetas span,.etiquetas div,.log-page div,.minuta span,.minuta div,.painel span,.painel div,.quadro-avisos span,.quadro-avisos div,.quadro-avisos h4,.quadro-avisos p,.quadro-avisos a,.quadro-avisos table,.quadro-avisos strong,.quadro-avisos h1{background:var(--background-primary)!important;color:var(--text-light)!important}.scrollbar{scrollbar-color:var(--background-primary) var(--background-secondary)}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:var(--background-secondary)}::-webkit-scrollbar-thumb{background-color:var(--background-primary);border-radius:10px;border:2px solid var(--background-secondary)}input,select,textarea{background-color:var(--background-dark-alt);color:var(--text-light);border:1px solid var(--border-default)}input::placeholder,textarea::placeholder{color:#aaa}.button,.btn-primary,.btn-info{background-color:var(--button-background);border-color:var(--button-background);color:var(--text-light)}.button:hover,.btn-primary:hover,.btn-info:hover{background-color:var(--button-hover);color:var(--text-neutral);transition:background-color .3s ease}", _u = ":root{--darkreader-escuro-fraco: #636566;--darkreader-neutral-background: rgb(48, 50, 51);--darkreader-neutral-text: #d8d4cf;--darkreader-selection-background: #004daa;--darkreader-selection-text: #e8e6e3;--letra-preto-branco: #ffff;--background-branco-preto: #f2f2f2;--background-branco-cinza: #e4e4e4;--a-hover: rgb(165, 167, 170);--bord-branco-preto: #ffff;--azl-letras: rgb(137, 217, 249);--background: rgb(204, 204, 204);--nav-azul-outros: rgb(48, 50, 51);--nav-sigiloso: #490700;--faixa-superior: #636566;--button: #636566;--border: #f2f2f2}.main-menu{background:var(--background)}.hrDivisao{border-top-color:var(--border)!important;border-right-color:var(--border)!important;border-bottom-color:var(--border)!important;border-left-color:var(--border)!important}html body app-root selector div.container-fluid.painel-usuario-interno div#divPainelUsuarioContent.row div#divSideBar.sideBarDefault side-bar nav.main-menu{background:var(--background)}#barraSuperiorPrincipal,.navbar,.navtop,.navbar-static-top,.navtop .navbar-collapse,.navbar-header,.navbar-collapse,.navbar-nav,.nav-bar-brand,.navbar-right{background:var(--nav-azul-outros)!important}.navbar.nav-sigilo,.navtop.nav-sigilo,.navbar-static-top.nav-sigilo,.navtop .navbar-collapse.nav-sigilo,.nav-sigilo .navbar-header,.nav-sigilo .navbar-collapse,.navbar-header.nav-sigilo,.nav-sigilo .navbar-nav,.nav-bar-brand,.navbar-right.nav-sigilo{background:var(--nav-sigiloso)!important}#divProcessosTarefa{background:var(--background-branco-cinza)!important}html body app-root selector div.container-fluid.painel-usuario-interno div#divPainelUsuarioContent.row div#divRightPanel.rightPanelDefault right-panel div#rightPanel.rightPanel.container-fluid div.painel-usuario-interno-dashboard.row div.col-md-4 div.dashboard-item-header{background:var(--button)}.painel-usuario-interno-dashboard.row,.rightPanel.container-fluid,.pesquisa-etiquetas,.rightPanel,#acoes-processos-selecionados{background:var(--background-branco-cinza)}.header-wrapper{background:var(--background)}#pageBody{background-color:var(--background-branco-preto)}#frameTarefas>.header-wrapper{background:var(--border)}#frameTarefas>.header-wrapper>.header-processo .mais-detalhes{background:var(--border)}div.vcenter.col-md-7.no-padding.header-processo{background:var(--border)}.detalhe-processo>.header-top{background:var(--nav-azul-outros)}.btn.btn-primary{background:var(--button)}.btn.btn-primary:hover{background:var(--azl-letras)}.btn-default{background:var(--button);color:var(--letra-preto-branco);font-weight:700}.btn-default:hover{background:var(--azl-letras)}.pesquisa{background-color:var(--background-branco-cinza)}.text-info{color:var(--button)}#modalAssinarEmLote>div:nth-child(1)>div:nth-child(1){background:var(--background)}.faixa-superior{background-color:var(--faixa-superior)!important}#loginAplicacaoButton{background:#636566 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAIAAADW7/fEAAANR3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZlJcjM5DoX3PEUfgfNwHI4RdYM+fn8gU7Yky/ZvVy16UVZIKWcyQQAPw0NKzf/+tdR/+AvGeeVDyrHEqPnzxRdb+ZL1+Sv702i/P/efS9c183heudtNllNOVp5/U73WV86H9xtuy017PK/ydcXmS5B5E3w0kJ3l+7hXkvP2nDf+ElTm+RJLTveqtktQvxZuVa63f1PrHOR/9XAi4aUR2MhZO51xen/mo4E778o77k+U4mrgu3FF7cNNGA55MO921PreQQ9OXu0y7dn7b9+enG/rdd49+TLeBMXXF0x4Ou/etrEP4XB9U5x+uDCSsR/Mud5rjbzWPNZVH/FovCJqO9vcxLAQi73bt0VeiXfge9qvwivrqjuQD91149VNMRYnL2W8GaaaZeY+dtNR0dtpE0dru3X7XHbJFtud4OTlZZZNrrjhMlh2O5VznLZvupi9b9n7dZPZeRiWWoMwwy2fvtRXF3/yUmt1cZHR+fJTE4CtOBw1BDn5ZBWAmHXhFraDb68Lfn0XP4QqCIbt5oyBVbcjogXzHltu4+xYFzieFDIqjUsALmLvgDLGgYCORL+JRidrkzH4MQNQRXPrvG0gYEKwAyWtdy5alWy2sjf3JLPX2mCjldPUJoAIZFYCm+IqYHkfiJ/kMzFUgws+hBBDClmFEmp00ccQY0xRilxNLvkUUkwp5VRSzS77HHLMKedcci22OGpgKLGkkksptVpV2agiq7K+cqbZ5ppvocWWWm6l1U74dN9Djz313Euvww43KBMjjjTyKKNOoyaVYvoZZpxp5llmXcTacsuvsOJKK6+y6htq5krb59cPUDMXanYjJevSG2qcVSndRBgpJ0EwAzHrDYgnQYCAtoKZzsZ7K8gJZrpYkiJYlAyCjRpGEANCP40Ny7xh947cH+GmQv4j3Ox3yCmB7p9ATgHdR9xeoDakz/WN2MlC8al2ZN9yOCKraktGcb5WaW6/Pqq/K+BfQf83ghb51GlzutMPjbEj1kj6aj1HWi2kUuIcevbVXOw9huKnSq51WZLSCnWRJ6YFr5c3uXqy30zp3oTkiM1AQuwswY01VuipmLgQPZbVIaqIQAKS9TbVQg81lTxMfbhJuzN9VpfKtK2NsrxfRs/qm+RiSdPnTF6EXFL2KuiRA+nDrWUOUhj1ColR2po52sH/0oRI6m2arVm72VCtTY8p2TcK1lhLSX81se7l2TSb1jLBp9WpKdPGhbsyXpH2N4rbqyrV5IMwJdJ+JUwg6TPXVZwDEUXbNy4t2EWoTThL7EWW9hDMNurJTu4/dj5Zqbb8m6GXYiy+FBPI7lXT+qac1JSt3qWcutPO7hvv1MO5R8FLva9AUJ+h8FO/qVeO+43f1JPjfI8R3caPdVNfg/qFbqnNlfUiMWqYLalKD5gFClmDDSSERLqnM9hmrS9ldBh2M7ZDH/2cjgtQxyrcMrSOSmYe3FVJ3bVUakyjttnHivSWRSLblUjIOusYUDu3UhqpjdTnmC4sXcU2g/rd8XU0xeo0Y6B1rRlTCbQlx/4t9wPsqQq1rBzDghVQXkhnZirXY4sJ9o1E32QWQR7DDF3JIMkH44MMT6+PaZRMoCTxxWxmulgqCvZmVcNFlKHMODRGCGV2b3uaUhuwBhuhP476YPpycxWUM3Ti1L0Q80ZdMTOP5KoKY3phB5AHunRDCt0Uz0aTO3SxZjNqgRlZP0xYXgyxeezauQvilVJJrQryUzjD+wotH1fkpL2AJGAJ1bcsiY2qJTZ8xHFpzV19d9K2NXbELtPqhxVrncuSh03i7LUs9WHpC0mPW72WpV4v/rle6pOlP9ZLfbX4J3qpL5f+QC+lv138Z3qpl0HxC73Umi0SipDFafVwK7hCwdKjhu7CNNnXBjUcMNFBPs9gSR9bk3bWpNKpSrvSd6tehfst2kMTUaiCVnTlvcmaDLBxkVcRqt0tbZzBLAwFMSZRqyurkOHs5IWHJApimCk7iLFkN1w8ocxyrk+ZjmdwjPXMfr1SNfmXmi0sRaeetorFjChUhmTfJbU66ysVLjC0Z2E1YZLAplP4IfRtZ2FjNpTIhn5b0vtWixgl66ZJH45udib+xuTQfI4sZUIcoFH2dZU/vfHbYx82iGRKRKyKIGjTUcV6Bj+QjXpSY4cBPOZdJ5U80S/m7l8UKCr6GjLh7EYljzW2OerYI1OxfNPPR7NixAKsmDig33FEPR6Wq9f3f3o0Mv44UUND607IbterR99v17dJH6AV04I2mBeUgHbA3FCaO3zEHvWpQZoIcfRyj1OI1aZLo+NXa8oWOuj1dZIXneigBR1+VPUKeVdoienBvt6CRzUL5x7Z/Ruurb4n422YNGksCx7rdGsuoxKZzs49Y3YqI6SqzOoMuzS8NDbzGOTF9gfdaJZKti5SAGqSIllpW3TbNleX9vdBoZ6jIswV6MuBJjjd6vgAfT6JMwsJD+04Xf1Bh2ZSwJ1iSA61U5FOJWJsJQ+9MWR3k0dj+6T3bkS3xsw7NnyypClbZuhHC1WmB02zh2KDFzQIMFfA7jqa7iWuqCblJEf6ND7RlCpjVhlwnBRp7nihGJTAbRCO5BdCRpWho/qSO8wOnsRgQ5SoypCRk8kbYgm3jHI3ymfnvCifDpvyud3ZrbkoX0qHjtriThzBTfZAxaSySSYR7fOpzG4L6LtwP12+LkqSSBzNTRaNvshiazeGbbw42G/P5nxE5DBuDFvXi2HH1i56LCxNVCWYhkXq2iaSZuz6dpHq+XCZcpSk2uV+ccjLIZc7ZHg47pAZ4N4hMjwcl8jwYPfwcDyCVhitPrXafe0zMeoIOV5Rb265nCLP1MfVq16h8wZOe9xIPe8U/sQv7fjl3i3q2S+h7Ie3Q5i2N3DgRT0hrX3KY3h5IoQgq7MbvMPcKrbebhMk1Lni2rHKpfyk27EP9Z/MLLXCWatxFcrfUpA2OeURXTWl5GZ6TE7By2lOIbz1mhHJLzumNdL0XZl66BTo0IYZnO1yick6JoxiivZGOz5D9GokMgvxp8/a5M1VwYMAwNizuYZ49OugVd9F7WwWQi+9NZGsYWYqeJS2EVdDGvUt7eqkdqkcqe5KKR2jzT3vSEXbQMgjvkCBtGF2OmaSZxtmAmI+dTKcOqled89TJzeO1z0A8n7XdQuF+dzELQpKUDN9KzGbfd0cd9MFS0Zldzyq2633WHwkzQfTMV9mHuqVJJguVZ7WxDM+PPQnaFDViZl0GqnklvmIOaUqRGLDyKvXVmJ2hH5zqFc6k2OUZzlMSa3GzaMWsRFoAkx3sQgpMzXN2gAeZzsXl2NiGp0wrqHRVZNEJB8QLMom3pK0EXSCO4nq886DuDNKCpE+Q82+fq5ybcl/P57/1fOM7fu1R7nfYgdCPLXFI2z4vjEtVlo8CdjVrtV/62GGzIW5qW+Io4bQ99UPebc2xNPQabdtR3RsYdlIzFFqpYsaTd0w8rw7tkEXRHqsBgIMWS4mBHH6/hGs718rHWKenqaoXz6G8o576N2O4iC8AEFJYJ07+4WLkQiu0dLdyi4mau3OTTFRpxOcMJlgP2Seeky9LzKvJhfrc6q+r1cPRPdnaWfcMrb5Sfq5rnSrtYeYYnF+JT2jkx+GPAyhDwgMQUOEy2MOGqrJVVYCiavBZzgrVbx0/FLhR01H2kmxqTs8QggyyeD7uJ+zetTtu+P6mM4jJ3launsN0Uh0UdVDInNV0ogOnVuKMDy5BBloNqI/zSehIqIKlxb526tkDeq2U/SYDLx8NVZJeO7INwUciV2qC3E8taUcTxNWYEX0UsHJYfqbbLUz4Zzcqc1pJecNBWZvty9cGwoAtw3JH7sT4n5PIX/vu6prWwLucYe9wRryhFiiB25MsdnDLWOB/E5VT1t37oSyoqmto2rXf+ba8Eo89ejZ/gc7X7n1tVfVvVvf7Pto3WvbLsvYaKjLsju7hGdsyyTDLsuEjn6w7d6ypV64+FcYqkcQf4+hegTx9xiqRxB/j6H6PDVeYGjlFAWcvd2TbaqlexCF+91h2OBCcKdJQaB8pVwhcdKXgT6OSa01if2Y6sZgOipjMcuhSQrMNkGo8zO8gbElyw/b8FoKlDOdqdK7kOSXRWIEGqd2fzCjyqOVTx8ktNkzHQ4CcmZvebrMagYjmzaLslotSuXuqYMZPEj1sa6P+s2gy1jXGfhsE0zdCqWoFvTC1FHxJ3PrpiMuwXdjKKE5Brg1ZSqH+eAdHBtr3mPOgG6ePICGg9qQguz23AmdkWdbwgyLtBmbNtgtnNETv3NDDZJjZV6/bb3drK67N3U498vPURtDJAiC++JN9LpEJ3wm7WSexxq6KZx322Vdu/ivRN9LkF8f2iXgpMh297qX8a0Gzwqo32rwrID6rQbPCqjfavCsgPqgwfgzDZ4VYBTt411CO/HxpoFEztcQnJuZ+6fti5FLeCKUKBHFvq7Zg7DtUaFIU35ooZpECb84C1yBVcx3K0Gl4i11VP2HfvH9V9A/JkiqL/n0P69U300EZUAiAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TtSJVh3YQcchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyoGXtEDP0IYQFRipp5IL2bgOb7u4ePrXZRneZ/7c/QreZMBPpF4jumGRbxBPLNp6Zz3icOsJCnE58TjBl2Q+JHrsstvnIsOCzwzbGRS88RhYrHYwXIHs5KhEk8TRxRVo3wh67LCeYuzWqmx1j35C4N5bSXNdZojiGMJCSQhQkYNZVRgIUqrRoqJFO3HPPzDjj9JLplcZTByLKAKFZLjB/+D392ahalJNykYA7pfbPtjFAjsAs26bX8f23bzBPA/A1da219tALOfpNfbWuQIGNwGLq7bmrwHXO4AQ0+6ZEiO5KcpFArA+xl9Uw4I3QJ9a25vrX2cPgAZ6mr5Bjg4BMaKlL3u8e7ezt7+PdPq7wdjVXKhcd841QAAECJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxMzE0OEY4QTJFMTFFNUFDRUZBRThEREI3MzUxOEQiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2FlZGU2NmItYjcxMS00ZDVjLWEzYWMtODBlNmU5NTk0NzIxIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjZjYTllYWItMDAwYy00ZjYwLTg0ZDgtMTRmZjA3NTFhOGNkIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTU5MTIxMTk1MzA4Njg0MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjE4IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNWM5MGQ1Zi00ODE2LTQ2NDktODFmMS1jMTE1YjVjNTYxZWMiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjAtMDYtMDNUMTU6MTk6MTMiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg1MTFBQUIyRUVCMTFFNThFRjNDM0U3MjA4RDBGMkIiCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NTExQUFBMkVFQjExRTU4RUYzQzNFNzIwOEQwRjJCIi8+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5y7eKeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYDExMN3cqJfAAAAwBJREFUaN7tmd9uG3UQhb8zu21AVmpLqAk33PAEtM0FSERWKtqKJ0YFYWQoNyhpn4G70j9q1UQ1pt45XOympNANXeOsqLRzZckr7/ebOTNndq3Prt/gfx/B+xAD5UA5UA6UA+VAOVC+v5Rl2xez72fj8RUJbEmAbepPGwlDQpGQFWVBPnqxuHMw7ZDL2fzeZPIGIqANIkLKFAlhlwXg2NkefTv/uUMuJ6MtkcDD54uvv5pedEHv/jDf2R5ZXB1tddOliWcnf/SACNw5mD5brAQoO3fPzemXvfXHzf3Pax10oxSru7OfeqP8bjY3mdGxx3G5My4fHP1CRn0W28ja7PAyKEk5LMLuOi8FrNxQJc0Uik3ykQgTSDKG6Erp+lu5uUxg5GpjlLUCnZAWFmqVZXvFZVAIMFYKUECxwVxaoeZGTb6CqlMuZYHrSqOsa73apCKFSKupW63Itly268xGpyUP/Uurres/Io1V46XlouskUmLcHM+1Ir3ZVUcQKeEwFSHLnXs8sBWQgFQY3OIN60XV3Key0LkJOK+IT14ub+3v9zPVZ/N7k1EhOnoP5KPjl715z8OT35G7b8GOy3GpN8otud7C1tFljw8NkbTur3Ge9fQYciWKXKN7fMb87x8diqxPVUHBCqI2XqXrPUFpVFjIWSn2buz98zfvHx1yulzIXNtrrklKJagzZYb/yvT1t91yXdMJU4niLFPhJFpLeF73KC6g7q4gpb/PxyrSZBtmay4rsTrj/Q8OD7EJQZqQ0wr51bW9LzpmsqgL7HizvCqUckv/tFIWUJyp+GsB/cdoVU5z9u66XK6WvfX4KivbanHgsr3BY2cy6Y1yd/uKUKOHd6SUDJ58uPXN7MdfHz9duSgj7CrFpjpKplLIVaBPd69ORpfM6Zr5jpRPTpYfjS6H8uPxB7vjT2hmYdsysOZCVLh6bTdmJZePj5cdJtGt6f7TFwsT1OubYZNvXwCK2gLqRwtCLn87Xtw+ePsbAA3/8A2UA+VAOVAOlAPlQHmh8ScfjzuKVYjyJQAAAABJRU5ErkJggg==) no-repeat scroll 0px center}#btnEntrar{background:#636566}#kc-pje-office{background:#636566 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAIAAADW7/fEAAANR3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZlJcjM5DoX3PEUfgfNwHI4RdYM+fn8gU7Yky/ZvVy16UVZIKWcyQQAPw0NKzf/+tdR/+AvGeeVDyrHEqPnzxRdb+ZL1+Sv702i/P/efS9c183heudtNllNOVp5/U73WV86H9xtuy017PK/ydcXmS5B5E3w0kJ3l+7hXkvP2nDf+ElTm+RJLTveqtktQvxZuVa63f1PrHOR/9XAi4aUR2MhZO51xen/mo4E778o77k+U4mrgu3FF7cNNGA55MO921PreQQ9OXu0y7dn7b9+enG/rdd49+TLeBMXXF0x4Ou/etrEP4XB9U5x+uDCSsR/Mud5rjbzWPNZVH/FovCJqO9vcxLAQi73bt0VeiXfge9qvwivrqjuQD91149VNMRYnL2W8GaaaZeY+dtNR0dtpE0dru3X7XHbJFtud4OTlZZZNrrjhMlh2O5VznLZvupi9b9n7dZPZeRiWWoMwwy2fvtRXF3/yUmt1cZHR+fJTE4CtOBw1BDn5ZBWAmHXhFraDb68Lfn0XP4QqCIbt5oyBVbcjogXzHltu4+xYFzieFDIqjUsALmLvgDLGgYCORL+JRidrkzH4MQNQRXPrvG0gYEKwAyWtdy5alWy2sjf3JLPX2mCjldPUJoAIZFYCm+IqYHkfiJ/kMzFUgws+hBBDClmFEmp00ccQY0xRilxNLvkUUkwp5VRSzS77HHLMKedcci22OGpgKLGkkksptVpV2agiq7K+cqbZ5ppvocWWWm6l1U74dN9Djz313Euvww43KBMjjjTyKKNOoyaVYvoZZpxp5llmXcTacsuvsOJKK6+y6htq5krb59cPUDMXanYjJevSG2qcVSndRBgpJ0EwAzHrDYgnQYCAtoKZzsZ7K8gJZrpYkiJYlAyCjRpGEANCP40Ny7xh947cH+GmQv4j3Ox3yCmB7p9ATgHdR9xeoDakz/WN2MlC8al2ZN9yOCKraktGcb5WaW6/Pqq/K+BfQf83ghb51GlzutMPjbEj1kj6aj1HWi2kUuIcevbVXOw9huKnSq51WZLSCnWRJ6YFr5c3uXqy30zp3oTkiM1AQuwswY01VuipmLgQPZbVIaqIQAKS9TbVQg81lTxMfbhJuzN9VpfKtK2NsrxfRs/qm+RiSdPnTF6EXFL2KuiRA+nDrWUOUhj1ColR2po52sH/0oRI6m2arVm72VCtTY8p2TcK1lhLSX81se7l2TSb1jLBp9WpKdPGhbsyXpH2N4rbqyrV5IMwJdJ+JUwg6TPXVZwDEUXbNy4t2EWoTThL7EWW9hDMNurJTu4/dj5Zqbb8m6GXYiy+FBPI7lXT+qac1JSt3qWcutPO7hvv1MO5R8FLva9AUJ+h8FO/qVeO+43f1JPjfI8R3caPdVNfg/qFbqnNlfUiMWqYLalKD5gFClmDDSSERLqnM9hmrS9ldBh2M7ZDH/2cjgtQxyrcMrSOSmYe3FVJ3bVUakyjttnHivSWRSLblUjIOusYUDu3UhqpjdTnmC4sXcU2g/rd8XU0xeo0Y6B1rRlTCbQlx/4t9wPsqQq1rBzDghVQXkhnZirXY4sJ9o1E32QWQR7DDF3JIMkH44MMT6+PaZRMoCTxxWxmulgqCvZmVcNFlKHMODRGCGV2b3uaUhuwBhuhP476YPpycxWUM3Ti1L0Q80ZdMTOP5KoKY3phB5AHunRDCt0Uz0aTO3SxZjNqgRlZP0xYXgyxeezauQvilVJJrQryUzjD+wotH1fkpL2AJGAJ1bcsiY2qJTZ8xHFpzV19d9K2NXbELtPqhxVrncuSh03i7LUs9WHpC0mPW72WpV4v/rle6pOlP9ZLfbX4J3qpL5f+QC+lv138Z3qpl0HxC73Umi0SipDFafVwK7hCwdKjhu7CNNnXBjUcMNFBPs9gSR9bk3bWpNKpSrvSd6tehfst2kMTUaiCVnTlvcmaDLBxkVcRqt0tbZzBLAwFMSZRqyurkOHs5IWHJApimCk7iLFkN1w8ocxyrk+ZjmdwjPXMfr1SNfmXmi0sRaeetorFjChUhmTfJbU66ysVLjC0Z2E1YZLAplP4IfRtZ2FjNpTIhn5b0vtWixgl66ZJH45udib+xuTQfI4sZUIcoFH2dZU/vfHbYx82iGRKRKyKIGjTUcV6Bj+QjXpSY4cBPOZdJ5U80S/m7l8UKCr6GjLh7EYljzW2OerYI1OxfNPPR7NixAKsmDig33FEPR6Wq9f3f3o0Mv44UUND607IbterR99v17dJH6AV04I2mBeUgHbA3FCaO3zEHvWpQZoIcfRyj1OI1aZLo+NXa8oWOuj1dZIXneigBR1+VPUKeVdoienBvt6CRzUL5x7Z/Ruurb4n422YNGksCx7rdGsuoxKZzs49Y3YqI6SqzOoMuzS8NDbzGOTF9gfdaJZKti5SAGqSIllpW3TbNleX9vdBoZ6jIswV6MuBJjjd6vgAfT6JMwsJD+04Xf1Bh2ZSwJ1iSA61U5FOJWJsJQ+9MWR3k0dj+6T3bkS3xsw7NnyypClbZuhHC1WmB02zh2KDFzQIMFfA7jqa7iWuqCblJEf6ND7RlCpjVhlwnBRp7nihGJTAbRCO5BdCRpWho/qSO8wOnsRgQ5SoypCRk8kbYgm3jHI3ymfnvCifDpvyud3ZrbkoX0qHjtriThzBTfZAxaSySSYR7fOpzG4L6LtwP12+LkqSSBzNTRaNvshiazeGbbw42G/P5nxE5DBuDFvXi2HH1i56LCxNVCWYhkXq2iaSZuz6dpHq+XCZcpSk2uV+ccjLIZc7ZHg47pAZ4N4hMjwcl8jwYPfwcDyCVhitPrXafe0zMeoIOV5Rb265nCLP1MfVq16h8wZOe9xIPe8U/sQv7fjl3i3q2S+h7Ie3Q5i2N3DgRT0hrX3KY3h5IoQgq7MbvMPcKrbebhMk1Lni2rHKpfyk27EP9Z/MLLXCWatxFcrfUpA2OeURXTWl5GZ6TE7By2lOIbz1mhHJLzumNdL0XZl66BTo0IYZnO1yick6JoxiivZGOz5D9GokMgvxp8/a5M1VwYMAwNizuYZ49OugVd9F7WwWQi+9NZGsYWYqeJS2EVdDGvUt7eqkdqkcqe5KKR2jzT3vSEXbQMgjvkCBtGF2OmaSZxtmAmI+dTKcOqled89TJzeO1z0A8n7XdQuF+dzELQpKUDN9KzGbfd0cd9MFS0Zldzyq2633WHwkzQfTMV9mHuqVJJguVZ7WxDM+PPQnaFDViZl0GqnklvmIOaUqRGLDyKvXVmJ2hH5zqFc6k2OUZzlMSa3GzaMWsRFoAkx3sQgpMzXN2gAeZzsXl2NiGp0wrqHRVZNEJB8QLMom3pK0EXSCO4nq886DuDNKCpE+Q82+fq5ybcl/P57/1fOM7fu1R7nfYgdCPLXFI2z4vjEtVlo8CdjVrtV/62GGzIW5qW+Io4bQ99UPebc2xNPQabdtR3RsYdlIzFFqpYsaTd0w8rw7tkEXRHqsBgIMWS4mBHH6/hGs718rHWKenqaoXz6G8o576N2O4iC8AEFJYJ07+4WLkQiu0dLdyi4mau3OTTFRpxOcMJlgP2Seeky9LzKvJhfrc6q+r1cPRPdnaWfcMrb5Sfq5rnSrtYeYYnF+JT2jkx+GPAyhDwgMQUOEy2MOGqrJVVYCiavBZzgrVbx0/FLhR01H2kmxqTs8QggyyeD7uJ+zetTtu+P6mM4jJ3launsN0Uh0UdVDInNV0ogOnVuKMDy5BBloNqI/zSehIqIKlxb526tkDeq2U/SYDLx8NVZJeO7INwUciV2qC3E8taUcTxNWYEX0UsHJYfqbbLUz4Zzcqc1pJecNBWZvty9cGwoAtw3JH7sT4n5PIX/vu6prWwLucYe9wRryhFiiB25MsdnDLWOB/E5VT1t37oSyoqmto2rXf+ba8Eo89ejZ/gc7X7n1tVfVvVvf7Pto3WvbLsvYaKjLsju7hGdsyyTDLsuEjn6w7d6ypV64+FcYqkcQf4+hegTx9xiqRxB/j6H6PDVeYGjlFAWcvd2TbaqlexCF+91h2OBCcKdJQaB8pVwhcdKXgT6OSa01if2Y6sZgOipjMcuhSQrMNkGo8zO8gbElyw/b8FoKlDOdqdK7kOSXRWIEGqd2fzCjyqOVTx8ktNkzHQ4CcmZvebrMagYjmzaLslotSuXuqYMZPEj1sa6P+s2gy1jXGfhsE0zdCqWoFvTC1FHxJ3PrpiMuwXdjKKE5Brg1ZSqH+eAdHBtr3mPOgG6ePICGg9qQguz23AmdkWdbwgyLtBmbNtgtnNETv3NDDZJjZV6/bb3drK67N3U498vPURtDJAiC++JN9LpEJ3wm7WSexxq6KZx322Vdu/ivRN9LkF8f2iXgpMh297qX8a0Gzwqo32rwrID6rQbPCqjfavCsgPqgwfgzDZ4VYBTt411CO/HxpoFEztcQnJuZ+6fti5FLeCKUKBHFvq7Zg7DtUaFIU35ooZpECb84C1yBVcx3K0Gl4i11VP2HfvH9V9A/JkiqL/n0P69U300EZUAiAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TtSJVh3YQcchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyoGXtEDP0IYQFRipp5IL2bgOb7u4ePrXZRneZ/7c/QreZMBPpF4jumGRbxBPLNp6Zz3icOsJCnE58TjBl2Q+JHrsstvnIsOCzwzbGRS88RhYrHYwXIHs5KhEk8TRxRVo3wh67LCeYuzWqmx1j35C4N5bSXNdZojiGMJCSQhQkYNZVRgIUqrRoqJFO3HPPzDjj9JLplcZTByLKAKFZLjB/+D392ahalJNykYA7pfbPtjFAjsAs26bX8f23bzBPA/A1da219tALOfpNfbWuQIGNwGLq7bmrwHXO4AQ0+6ZEiO5KcpFArA+xl9Uw4I3QJ9a25vrX2cPgAZ6mr5Bjg4BMaKlL3u8e7ezt7+PdPq7wdjVXKhcd841QAAECJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxMzE0OEY4QTJFMTFFNUFDRUZBRThEREI3MzUxOEQiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2FlZGU2NmItYjcxMS00ZDVjLWEzYWMtODBlNmU5NTk0NzIxIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjZjYTllYWItMDAwYy00ZjYwLTg0ZDgtMTRmZjA3NTFhOGNkIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTU5MTIxMTk1MzA4Njg0MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjE4IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNWM5MGQ1Zi00ODE2LTQ2NDktODFmMS1jMTE1YjVjNTYxZWMiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjAtMDYtMDNUMTU6MTk6MTMiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg1MTFBQUIyRUVCMTFFNThFRjNDM0U3MjA4RDBGMkIiCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NTExQUFBMkVFQjExRTU4RUYzQzNFNzIwOEQwRjJCIi8+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5y7eKeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYDExMN3cqJfAAAAwBJREFUaN7tmd9uG3UQhb8zu21AVmpLqAk33PAEtM0FSERWKtqKJ0YFYWQoNyhpn4G70j9q1UQ1pt45XOympNANXeOsqLRzZckr7/ebOTNndq3Prt/gfx/B+xAD5UA5UA6UA+VAOVC+v5Rl2xez72fj8RUJbEmAbepPGwlDQpGQFWVBPnqxuHMw7ZDL2fzeZPIGIqANIkLKFAlhlwXg2NkefTv/uUMuJ6MtkcDD54uvv5pedEHv/jDf2R5ZXB1tddOliWcnf/SACNw5mD5brAQoO3fPzemXvfXHzf3Pax10oxSru7OfeqP8bjY3mdGxx3G5My4fHP1CRn0W28ja7PAyKEk5LMLuOi8FrNxQJc0Uik3ykQgTSDKG6Erp+lu5uUxg5GpjlLUCnZAWFmqVZXvFZVAIMFYKUECxwVxaoeZGTb6CqlMuZYHrSqOsa73apCKFSKupW63Itly268xGpyUP/Uurres/Io1V46XlouskUmLcHM+1Ir3ZVUcQKeEwFSHLnXs8sBWQgFQY3OIN60XV3Key0LkJOK+IT14ub+3v9zPVZ/N7k1EhOnoP5KPjl715z8OT35G7b8GOy3GpN8otud7C1tFljw8NkbTur3Ge9fQYciWKXKN7fMb87x8diqxPVUHBCqI2XqXrPUFpVFjIWSn2buz98zfvHx1yulzIXNtrrklKJagzZYb/yvT1t91yXdMJU4niLFPhJFpLeF73KC6g7q4gpb/PxyrSZBtmay4rsTrj/Q8OD7EJQZqQ0wr51bW9LzpmsqgL7HizvCqUckv/tFIWUJyp+GsB/cdoVU5z9u66XK6WvfX4KivbanHgsr3BY2cy6Y1yd/uKUKOHd6SUDJ58uPXN7MdfHz9duSgj7CrFpjpKplLIVaBPd69ORpfM6Zr5jpRPTpYfjS6H8uPxB7vjT2hmYdsysOZCVLh6bTdmJZePj5cdJtGt6f7TFwsT1OubYZNvXwCK2gLqRwtCLn87Xtw+ePsbAA3/8A2UA+VAOVAOlAPlQHmh8ScfjzuKVYjyJQAAAABJRU5ErkJggg==) no-repeat scroll 0px center}#kc-login{background:#636566}", ku = ".sideBarDefault,.sideBarMin,#divSideBar{width:950px;display:inline-block;position:absolute;max-height:520px;bottom:0;height:46px;left:1px}nav.main-menu{height:unset;border-right:unset;border-radius:12px}.ui-datalist .ui-datalist-data>li{padding-left:30px}.rightPanelDefault,.rightPanelFull,#divRightPanel{width:100%!important}div#divProcessosTarefa.rightPanel{width:100%;min-width:250px;max-width:330px;position:absolute;left:-280px;transition:left 1s,border-right-width 1s,border-top-right-radius 1s;border-right-color:#a9a9a9;border-right-width:30px;border-right-style:groove;border-top-right-radius:80px}div#divProcessosTarefa.rightPanel:hover,div#divProcessosTarefa.rightPanel:focus,div#divProcessosTarefa.rightPanel:active{left:0;border-right-width:0;border-top-right-radius:0}div.rightPanelDefault #divMainPanel.mainPanel{width:100%!important;min-width:1140px!important;max-width:1250px!important}@media screen and (min-width: 1595px){div.rightPanelDefault #divProcessosTarefa.rightPanel{left:0!important;transition-duration:1s;border-right-width:0;border-top-right-radius:0}div.rightPanelDefault #divMainPanel.mainPanel{padding-left:335px!important;min-width:unset!important;max-width:unset!important}}", br = "#frameTarefas>div div.col-md-5 div.dropdown:nth-child(3) ul{left:-570px;height:500px;width:680px}div>div.col-md-5.btn-toolbar.pb-5.toolbar-processo>div.dropdown.pull-right.open>ul>li>pje-selecionar-etiquetas>div{height:500px;width:680px;box-shadow:1px 2px 2px 2px #ecab6047;border-radius:5px}#conteudoTarefa #pesquisar-etiquetas{box-sizing:border-box;width:51%;float:right;display:block}#conteudoTarefa .table-etiquetas{box-sizing:border-box;cursor:pointer;width:51%;float:right;display:block}#pje-mais-r-divEtiquetaFavorita{height:auto;width:48%;overflow:hidden;align-items:center;text-align:center;border-radius:5px;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;line-height:1.42857143;color:#333;font-family:sans-serif,Open Sans regular,Arial,Verdana!important;font-size:13px;list-style:none;box-sizing:border-box;min-height:1px;position:relative;display:table;border-collapse:separate;float:none;padding:2px}", Ir = `#pje-mais-r-tabelaEtiquetasMaisUsadas{border-right:solid;border-color:#1a7aa7;border-collapse:collapse;width:100%;height:100%;overflow:auto;flex-wrap:wrap;cursor:pointer;padding:5px;margin-left:0%;display:block}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n){background-color:#ebf0f3}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n):hover td:nth-child(2){background-color:#abdae2}#pje-mais-r-tabelaEtiquetasMaisUsadas td{padding:4px;border:1px #ccc solid}#avj-menu-tabela tr:hover td:nth-child(2),#pje-mais-r-tabelaEtiquetasMaisUsadas tr:hover td:nth-child(2){background-color:#abdae2}#pje-mais-r-b{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-icone-robo{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-icone-robo:hover{scale:125%}div.anexos a[name^=divTimeLine]:hover{background:#dfe6e6}#pje-mais-r-icone{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-youtube{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M22.75%204.9q-.6-.6-1.35-.8-1.2-.3-5.4-.45-1.3%200-2.8-.05H12q-1.85%200-4%20.05-4.2.15-5.35.45-.8.2-1.35.8-.6.55-.8%201.35Q.2%207.4.05%209.85%200%2011.05%200%2012.05v.65q.05.8.05%201.55.15%202.45.45%203.6.2.8.8%201.35.55.55%201.35.75%201.15.3%205.35.45%202.15.05%204%20.05h1.2q1.5%200%202.8-.05%204.2-.15%205.4-.45.75-.2%201.35-.75.55-.55.75-1.35.3-1.15.45-3.6.05-.75.05-1.55v-.65q0-1-.05-2.2-.15-2.45-.45-3.6-.2-.8-.75-1.35M9.55%208.5l6.25%203.55-6.25%203.55V8.5Z'/%3e%3c/svg%3e");display:flex;float:right}#pje-mais-r-menu-hanburgue-opcoes{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1.42857143;font-family:Open Sans regular,Arial,Verdana,sans-serif;color:#454545;box-sizing:border-box;position:absolute;top:100%;z-index:1000;float:left;min-width:160px;padding:5px 0;margin:0;font-size:14px;text-align:left;list-style:none;background-color:#02638d;background-clip:padding-box;border-radius:0 0 4px 4px;box-shadow:0 6px 12px #0000002d;border:0;transform-origin:top;animation-fill-mode:forwards;transition:all .2s linear;opacity:1;visibility:visible;transform:scale(1);display:table;width:100%;left:0;right:0}#pje-mais-r-menu-hanburgue-opcoes li{margin:0 10px}#pje-mais-r-menu-hanburgue-opcoes a{text-decoration:none;color:#fff;font-weight:700;padding:5px;border-radius:5px;transition:background-color .3s}#pje-mais-r-menu-hanburgue-opcoes a:hover{background-color:#c5ece1;color:#000}`, cn = `.fa-sticky-note{background:#b32006!important;color:#f57f17!important}.fa-sticky-note:hover{transform:scale(125%)}.lembrete{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;list-style-type:none;font:inherit;text-align:center;white-space:nowrap;cursor:pointer;user-select:none;text-transform:uppercase;background:#f57f17!important;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;font-size:1.33333em;line-height:.75em;vertical-align:-.0667em;font-family:"Font Awesome 5 Free";font-weight:900;box-sizing:border-box;width:18px;height:18px;top:20px;padding:5px}[title-pje-mais-r]{position:relative}[title-pje-mais-r]:hover:before{animation:aparecer .1s ease-out 0s 1 both;border-radius:10px;content:attr(title-pje-mais-r);background:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e") no-repeat right bottom;background-size:35px 25px;background-color:#ebf0f3;color:#000;border-style:groove;border-color:#09c7bd;top:70px;left:calc(50% - 15vw);display:flex;overflow:hidden;font-size:16px;font-weight:300;padding:10px;position:absolute;text-align:left;text-transform:none;white-space:pre-line;z-index:10009;width:450px;height:auto}`, yr = ".pmr-datasProcesso{display:inline-grid;vertical-align:middle}i[pmr-proc-data-mov],i[pmr-proc-data-task]{margin-right:3px;font-size:90%}.flag-decurso-tempo-tarefa-verde{background:#aff1af;color:#000;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}.flag-decurso-tempo-tarefa-amarelo{background:#fff38a;color:#000;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}.flag-decurso-tempo-tarefa-vermelho{background:#a94442;color:#fff;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}i.i-animacao{font-size:.1em;opacity:0;transition:font-size .15s ease-in-out,opacity .15s ease-in-out}i.i-animacao-in{font-size:1em;opacity:1;transition:font-size .35s ease-in-out,opacity .35s ease-in-out}i.i-animacao-out{font-size:.1em;opacity:0}div>.tarefa-numero-processo[pmr-np-destaque]{font-size:18px!important}div>.tarefa-numero-processo[pmr-np-destaque] i[pmr-np-copiar]{font-size:14px}i[pmr-np-copiar]{cursor:copy;color:#ff8b22;padding-left:5px}processo-datalist-card .label.label-info.label-etiqueta[pmr-cor-padrao-etiqueta]:not([style]){color:#000;background:#f6d290;border-radius:.25em}div[pmr-e-prioridade]{background:linear-gradient(45deg,#a9444229,#fff)}div[pmr-e-prioridade] i.fa.fa-exclamation-triangle,div[pmr-destaque-selecionado] i.fa.fa-exclamation-triangle{color:#f7c600;text-shadow:-3.3px 2px 0 black,1px 2px 0 black,-1px -2.1px 0 black,2.9px 2px 0 black,-.2px -3.5px 0 black}i[pmr-e-prioridade]{color:#a94442}i[pmr-recolhedor-cartao]{position:absolute;bottom:0;right:0;cursor:pointer;color:#ff8b22;font-size:14px;border-radius:50%;padding:2px;border:solid 1px}processo-datalist-card i.fa-chevron-up[pmr-esta-recolhido]{transform:rotate(180deg);transition:transform .5s ease-in-out}processo-datalist-card i.fa-chevron-up:not([pmr-esta-recolhido]){transform:rotate(0);transition:transform .5s ease-in-out}processo-datalist-card i.i-animacao-in{font-size:14px}div.datalist-content.selecionado[pmr-destaque-selecionado]{background:#f3ffee;border-left:3px solid #48ce35}div.datalist-content.selecionado[pmr-destaque-selecionado]:hover{background:#e3f4dc;border-left:3px solid #48ce35}div.datalist-content.selecionado .tarefa-numero-processo[pmr-destaque-selecionado]{color:#227b15}.tarefa-numero-processo.text-danger{font-size:14px!important}", xr = "[pmr-mapa-calor-montador-container]{display:block!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado]{transition:background-blend-mode .5s ease;background-size:contain;background-blend-mode:overlay}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado]:hover{background-blend-mode:screen!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado] a:hover{background:transparent!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-barra-minima]{background-repeat:no-repeat;background-position:center bottom;background-size:100% 4px}div[pmr-mapa-calor-montador-container]{position:relative;margin-top:20px;padding-bottom:80px;z-index:2000}@media (min-width: 992px){div[pmr-mapa-calor-montador-container]{position:absolute;bottom:0;padding-bottom:25px;z-index:2000}}[pmr-mapa-calor-montador-container] button{top:12px;height:35px}[pmr-mapa-calor-montador-container] button:first-child{padding-left:8px;padding-right:8px}[pmr-mapa-calor-montador-container] button.btn-primary{background-color:#ff912c!important;font-weight:700;color:#fff}[pmr-mapa-calor-montador-container] button.btn-secondary[pmr-mc-but-on]{background:#ffdfc2!important}[pmr-mapa-calor-montador-container] svg{height:100%}[pmr-mapa-calor-montador-container][pmr-mc-montado=false] button[pmr-mc-but-off],[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-on]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-off]{border-color:#ff912c;margin-left:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button:first-child,[pmr-mapa-calor-montador-container] button.pmr-outline{border-color:#ff912c}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] [pmr-mc-info-sem-suporte]{display:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] [pmr-mc-info-sem-suporte]{display:flex}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] #pmr-info-sem-suporte{display:flex!important}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] #pmr-mc-info-text [prm-info-ultimo-mov],[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-off]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando][pmr-executando] button[pmr-mc-but-off]{display:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-on],[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-atualiz]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando]:not([pmr-executando]) button[pmr-mc-but-desbloq]{display:unset!important}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-atualiz]{display:unset!important}#pmr-info-sem-suporte{margin-top:5px;background-color:#f0f0f0;border-radius:5px;padding:2px 15px}[pmr-mapa-calor-montador-container] .ui-progressbar-value-animate{background:#ff912c!important}[pmr-mapa-calor-montador-container] .pmr-icon-button{cursor:pointer;transition:all .5s}[pmr-mapa-calor-montador-container] .pmr-icon-button i{padding-right:0;transition:all .5s}[pmr-mapa-calor-montador-container] .pmr-icon-button .button-text{position:absolute;transition:left .3s}[pmr-mapa-calor-montador-container] .pmr-icon-button .button-text{opacity:0;transition:opacity .6s ease}[pmr-mapa-calor-montador-container] .pmr-icon-button:hover .button-text{opacity:1}[pmr-mapa-calor-montador-container] .pmr-icon-button:hover i{padding-right:8px}[pmr-mapa-calor-montador-container] .pmr-icon-button[pmr-mc-but-atualiz]:hover{padding-right:85px}[pmr-mapa-calor-montador-container] .pmr-icon-button[pmr-mc-but-desbloq]:hover{padding-right:118px}[pmr-mc-spinner] .loaderWrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;display:block;background:#00000080;cursor:progress}[pmr-mc-spinner] .position{position:relative;top:calc(100vh/3);bottom:0;left:0;right:0;margin:auto}[pmr-mc-spinner] .mat-progress-spinner{display:block;position:relative}[pmr-mc-spinner] .mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}[pmr-mc-spinner] .mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:pmr-mc-mat-progress-spinner-linear-rotate 2s linear infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:pmr-mc-mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner circle,[pmr-mc-spinner] .mat-spinner circle{stroke:#ff912c}@keyframes pmr-mc-mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pmr-mc-mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}to{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes pmr-mc-mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}to{transform:rotate(4680deg)}}";
function Zi(e, t, r) {
  !t || !r || r.match(rr.HREFS.ROOT) && new Be(e, t).definir();
}
class Be {
  static temas = {
    ajustesGerais: fo,
    altoContraste: Ru,
    escuro: _u,
    maisEspaco: ku,
    ultimasEtiquetasUsadaTarefa: br,
    estilo_geral: Ir,
    melhorarCartaoTarefa: yr,
    mapaDeCalorPainelUsuario: xr
  };
  v3 = va().manifest_version === 3;
  tabId;
  ativada;
  tema;
  maisEspaco;
  ajustesGerais;
  ultimasEtiquetasUsadaTarefa;
  melhorarCartaoTarefa;
  mapaDeCalorPainelUsuario;
  destacarLembretes;
  constructor(t, r) {
    this.tabId = r;
    const {
      ativada: n,
      tema: o,
      ajustesGerais: s,
      maisEspaco: a,
      ultimasEtiquetasUsadaTarefa: i,
      destacarLembretes: l,
      melhorarCartaoTarefa: u,
      mapaDeCalorPainelUsuario: c
    } = t;
    this.ativada = n, this.ajustesGerais = s, this.tema = o, this.maisEspaco = a, this.ultimasEtiquetasUsadaTarefa = i, this.melhorarCartaoTarefa = u, this.mapaDeCalorPainelUsuario = c, this.destacarLembretes = l;
  }
  injetarCSS() {
    this.tabId && (this.ajustesGerais && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: fo
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: fo,
      runAt: "document_start"
    })), (this.tema === Ye.ESCURO || this.tema === Ye.ALTO_CONTRASTE) && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[this.tema]
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[this.tema],
      runAt: "document_start"
    })), this.maisEspaco && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[Ye.MAIS_ESPACO]
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[Ye.MAIS_ESPACO],
      runAt: "document_start"
    })), this.ultimasEtiquetasUsadaTarefa && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: br
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: br,
      runAt: "document_start"
    })), this.melhorarCartaoTarefa && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: yr
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: yr,
      runAt: "document_start"
    })), this.mapaDeCalorPainelUsuario && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: xr
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: xr,
      runAt: "document_start"
    })), this.destacarLembretes && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: cn
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: cn,
      runAt: "document_start"
    })), this.ativada && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Ir
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Ir,
      runAt: "document_start"
    })));
  }
  removerCSS() {
    this.tabId && (this.v3 ? (w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[Ye.ESCURO]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[Ye.ALTO_CONTRASTE]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[Ye.MAIS_ESPACO]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[Ye.AJUSTES_GERAIS]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: br
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Ir
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: yr
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: xr
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: cn
    })) : (w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[Ye.ESCURO]
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[Ye.ALTO_CONTRASTE]
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[Ye.MAIS_ESPACO]
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: br
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Ir
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: yr
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: xr
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: cn
    })));
  }
  definir() {
    this.removerCSS(), this.ativada && this.injetarCSS();
  }
}
const Du = "li.ng-star-inserted>processo-datalist-card:nth-child(1)>div:nth-child(1)>div:nth-child(3)>a:nth-child(1)>span{text-align:right}span.orgao.col-sm-12.no-padding{display:none}span.local.col-sm-12.no-padding{display:none;text-align:right}span.local.col-sm-12.no-padding.ng-star-inserted{display:block;text-align:left}", Mu = "li.ng-star-inserted>processo-datalist-card:nth-child(1)>div:nth-child(1)>div:nth-child(3)>a:nth-child(1)>span{text-align:right}span.orgao.col-sm-12.no-padding{float:right;width:162px;font-size:10px;font-family:monospace,monospace;line-height:100%;white-space:pre;overflow:hidden;direction:rtl}span.local.col-sm-12.no-padding{text-align:right}span.local.col-sm-12.no-padding.ng-star-inserted{text-align:left}", ju = ".row.icones{display:block}span.orgao.col-sm-12.no-padding,span.local.col-sm-12.no-padding{display:none}.datalist-content{position:sticky;flex-flow:column wrap}.datalist-content.selecionado .selecionarProcesso{outline:none}.datalist-content.selecionado>.row.icones{display:block}.datalist-content.selecionado span.orgao.col-sm-12.no-padding,.datalist-content.selecionado span.local.col-sm-12.no-padding{display:block}.ui-paginator-bottom{position:static}", Nu = ".row.icones{display:block}span.orgao.col-sm-12.no-padding,span.local.col-sm-12.no-padding,span.local.col-sm-12.no-padding.ng-star-inserted{display:none}.datalist-content{position:sticky;flex-flow:column wrap}.datalist-content.selecionado .selecionarProcesso{outline:none}.datalist-content.selecionado>.row.icones{display:block}.datalist-content.selecionado span.orgao.col-sm-12.no-padding,.datalist-content.selecionado span.local.col-sm-12.no-padding{display:none}.datalist-content.selecionado span.local.col-sm-12.no-padding.ng-star-inserted{display:block}.ui-paginator-bottom{position:static}";
function zi(e, t, r) {
  !t || !r || r.match(rr.HREFS.ROOT) && new _e(e, t).definir();
}
class _e {
  static cartoes = {
    minimo: Du,
    alternar_linhas: Mu,
    cartao_inativo: ju,
    cartao_inativo_minimo: Nu
  };
  //static vCartoes: Record<string, string> = { alternar_linhas, minimo }
  v3 = va().manifest_version === 3;
  tabId;
  ativada;
  inativarCartao;
  cartaoProcesso;
  constructor(t, r) {
    this.tabId = r;
    const { ativada: n, cartaoProcesso: o, inativaCartao: s } = t;
    this.ativada = n, this.cartaoProcesso = o, this.inativarCartao = s;
  }
  injetarCSS() {
    if (this.tabId && ((this.cartaoProcesso === Et.ALTERNAR_LINHAS || this.cartaoProcesso === Et.MINIMO) && (this.v3 ? w.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: _e.cartoes[this.cartaoProcesso]
    }) : w.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: _e.cartoes[this.cartaoProcesso],
      runAt: "document_start"
    })), this.inativarCartao)) {
      const t = this.cartaoProcesso !== Et.MINIMO ? _e.cartoes.cartao_inativo : _e.cartoes.cartao_inativo_minimo;
      this.v3 ? w.scripting.insertCSS({
        target: { tabId: this.tabId, allFrames: !0 },
        css: t
      }) : w.tabs.insertCSS(this.tabId, {
        allFrames: !0,
        code: t,
        runAt: "document_start"
      });
    }
  }
  removerCSS() {
    this.tabId && (this.v3 ? (w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: _e.cartoes[Et.MINIMO]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: _e.cartoes[Et.ALTERNAR_LINHAS]
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: _e.cartoes.cartao_inativo
    }), w.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: _e.cartoes.cartao_inativo_minimo
    })) : (w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: _e.cartoes[Et.MINIMO]
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: _e.cartoes[Et.ALTERNAR_LINHAS]
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: _e.cartoes.cartao_inativo
    }), w.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: _e.cartoes.cartao_inativo_minimo
    })));
  }
  definir() {
    this.removerCSS(), this.ativada && this.injetarCSS();
  }
}
function Bu(e) {
  const { manifest_version: t } = va(), r = t === 3 ? "action" : "browserAction";
  e ? w[r].setBadgeText({ text: "" }) : (w[r].setBadgeText({ text: "X" }), w[r].setBadgeBackgroundColor({ color: "#B71C1C" }));
}
var Uu = () => `uid::${En(7)}`, Wi = (e, t = ["endpointName", "fingerprint"]) => typeof e == "object" && e !== null && t.every((r) => r in e), WA = (e) => {
  if (!Wi(e))
    throw new TypeError("Invalid connection args");
  return JSON.stringify(e);
}, Vu = (e) => {
  try {
    const t = JSON.parse(e);
    return Wi(t) ? t : null;
  } catch {
    return null;
  }
}, Hu = () => {
  let e = [];
  return {
    add: (...t) => {
      e = [...e, ...t];
    },
    remove: (t) => {
      e = typeof t == "string" ? e.filter((r) => r.message.transactionId !== t) : e.filter((r) => !t.includes(r));
    },
    entries: () => e
  };
}, wr = class {
  static toBackground(e, t) {
    return e.postMessage(t);
  }
  static toExtensionContext(e, t) {
    return e.postMessage(t);
  }
}, Zu = Object.defineProperty, zu = Object.defineProperties, Wu = Object.getOwnPropertyDescriptors, ss = Object.getOwnPropertySymbols, Ju = Object.prototype.hasOwnProperty, qu = Object.prototype.propertyIsEnumerable, is = (e, t, r) => t in e ? Zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ot = (e, t) => {
  for (var r in t || (t = {}))
    Ju.call(t, r) && is(e, r, t[r]);
  if (ss)
    for (var r of ss(t))
      qu.call(t, r) && is(e, r, t[r]);
  return e;
}, Ia = (e, t) => zu(e, Wu(t)), Yu = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/, ya = (e) => {
  const [, t, r, n] = e.match(Yu) || [];
  return {
    context: t,
    tabId: +r,
    frameId: n ? +n : void 0
  };
}, vn = ({ context: e, tabId: t, frameId: r }) => ["background", "popup", "options"].includes(e) ? e : `${e}@${t}${r ? `.${r}` : ""}`;
const $u = [
  {
    property: "name",
    enumerable: !1
  },
  {
    property: "message",
    enumerable: !1
  },
  {
    property: "stack",
    enumerable: !1
  },
  {
    property: "code",
    enumerable: !0
  }
], No = Symbol(".toJSON was called"), Gu = (e) => {
  e[No] = !0;
  const t = e.toJSON();
  return delete e[No], t;
}, Ji = ({
  from: e,
  seen: t,
  to_: r,
  forceEnumerable: n,
  maxDepth: o,
  depth: s
}) => {
  const a = r || (Array.isArray(e) ? [] : {});
  if (t.push(e), s >= o)
    return a;
  if (typeof e.toJSON == "function" && e[No] !== !0)
    return Gu(e);
  for (const [i, l] of Object.entries(e)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(l)) {
      a[i] = "[object Buffer]";
      continue;
    }
    if (l !== null && typeof l == "object" && typeof l.pipe == "function") {
      a[i] = "[object Stream]";
      continue;
    }
    if (typeof l != "function") {
      if (!l || typeof l != "object") {
        a[i] = l;
        continue;
      }
      if (!t.includes(e[i])) {
        s++, a[i] = Ji({
          from: e[i],
          seen: [...t],
          forceEnumerable: n,
          maxDepth: o,
          depth: s
        });
        continue;
      }
      a[i] = "[Circular]";
    }
  }
  for (const { property: i, enumerable: l } of $u)
    typeof e[i] == "string" && Object.defineProperty(a, i, {
      value: e[i],
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  return a;
};
function Ku(e, t = {}) {
  const { maxDepth: r = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Ji({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: r,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}
let qi = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((r) => r(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((r) => r !== t);
  }
});
var Qu = (e, t, r) => {
  const n = En(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), a = (i) => {
    if (i.destination.context === e && !i.destination.frameId && !i.destination.tabId) {
      r?.(i);
      const { transactionId: l, messageID: u, messageType: c } = i, d = () => {
        const p = o.get(l);
        if (p) {
          const { err: A, data: C } = i;
          if (A) {
            const Z = A, R = self[Z.name], V = new (typeof R == "function" ? R : Error)(Z.message);
            for (const j in Z)
              V[j] = Z[j];
            p.reject(V);
          } else
            p.resolve(C);
          o.delete(l);
        }
      }, m = async () => {
        let p, A, C = !1;
        try {
          const Z = s.get(u);
          if (typeof Z == "function")
            p = await Z({
              sender: i.origin,
              id: u,
              data: i.data,
              timestamp: i.timestamp
            });
          else
            throw C = !0, new Error(`[webext-bridge] No handler registered in '${e}' to accept messages with id '${u}'`);
        } catch (Z) {
          A = Z;
        } finally {
          if (A && (i.err = Ku(A)), a(Ia(Ot({}, i), {
            messageType: "reply",
            data: p,
            origin: { context: e, tabId: null },
            destination: i.origin,
            hops: []
          })), A && !C)
            throw p;
        }
      };
      switch (c) {
        case "reply":
          return d();
        case "message":
          return m();
      }
    }
    return i.hops.push(`${e}::${n}`), t(i);
  };
  return {
    handleMessage: a,
    endTransaction: (i) => {
      const l = o.get(i);
      l?.reject("Transaction was ended before it could complete"), o.delete(i);
    },
    sendMessage: (i, l, u = "background") => {
      const c = typeof u == "string" ? ya(u) : u, d = "Bridge#sendMessage ->";
      if (!c.context)
        throw new TypeError(`${d} Destination must be any one of known destinations`);
      return new Promise((m, p) => {
        const A = {
          messageID: i,
          data: l,
          destination: c,
          messageType: "message",
          transactionId: En(),
          origin: { context: e, tabId: null },
          hops: [],
          timestamp: Date.now()
        };
        o.set(A.transactionId, { resolve: m, reject: p });
        try {
          a(A);
        } catch (C) {
          o.delete(A.transactionId), p(C);
        }
      });
    },
    onMessage: (i, l) => (s.set(i, l), () => s.delete(i))
  };
}, cr = class {
  constructor(e, t) {
    this.endpointRuntime = e, this.streamInfo = t, this.emitter = qi(), this.isClosed = !1, this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, cr.initDone || (e.onMessage("__crx_bridge_stream_transfer__", (r) => {
      const { streamId: n, streamTransfer: o, action: s } = r.data, a = cr.openStreams.get(n);
      a && !a.isClosed && (s === "transfer" && a.emitter.emit("message", o), s === "close" && (cr.openStreams.delete(n), a.handleStreamClose()));
    }), cr.initDone = !0), cr.openStreams.set(this.streamInfo.streamId, this);
  }
  get info() {
    return this.streamInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.streamInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: null,
      action: "close"
    }, this.streamInfo.endpoint);
  }
  onMessage(e) {
    return this.getDisposable("message", e);
  }
  onClose(e) {
    return this.getDisposable("closed", e);
  }
  getDisposable(e, t) {
    const r = this.emitter.on(e, t);
    return Object.assign(r, {
      dispose: r,
      close: r
    });
  }
}, Pn = cr;
Pn.initDone = !1;
Pn.openStreams = /* @__PURE__ */ new Map();
var Xu = (e) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = qi();
  e.onMessage("__crx_bridge_stream_open__", (a) => new Promise((i) => {
    const { sender: l, data: u } = a, { channel: c } = u;
    let d = !1, m = () => {
    };
    const p = () => {
      const A = r.get(c);
      typeof A == "function" ? (A(new Pn(e, Ia(Ot({}, u), { endpoint: l }))), d && m(), i(!0)) : d || (d = !0, m = n.on("did-change-stream-callbacks", p));
    };
    p();
  }));
  async function o(a, i) {
    if (t.has(a))
      throw new Error("webext-bridge: A Stream is already open at this channel");
    const l = typeof i == "string" ? ya(i) : i, u = { streamId: En(), channel: a, endpoint: l }, c = new Pn(e, u);
    return c.onClose(() => t.delete(a)), await e.sendMessage("__crx_bridge_stream_open__", u, l), t.set(a, c), c;
  }
  function s(a, i) {
    if (r.has(a))
      throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    r.set(a, i), n.emit("did-change-stream-callbacks");
  }
  return {
    openStream: o,
    onOpenStreamChannel: s
  };
}, Yi = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ji, function(r) {
    if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
      throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const n = "The message port closed before a response was received.", o = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", s = (a) => {
        const i = {
          alarms: {
            clear: {
              minArgs: 0,
              maxArgs: 1
            },
            clearAll: {
              minArgs: 0,
              maxArgs: 0
            },
            get: {
              minArgs: 0,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          bookmarks: {
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getChildren: {
              minArgs: 1,
              maxArgs: 1
            },
            getRecent: {
              minArgs: 1,
              maxArgs: 1
            },
            getSubTree: {
              minArgs: 1,
              maxArgs: 1
            },
            getTree: {
              minArgs: 0,
              maxArgs: 0
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeTree: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          browserAction: {
            disable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            enable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            getBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1
            },
            getBadgeText: {
              minArgs: 1,
              maxArgs: 1
            },
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            openPopup: {
              minArgs: 0,
              maxArgs: 0
            },
            setBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setBadgeText: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          browsingData: {
            remove: {
              minArgs: 2,
              maxArgs: 2
            },
            removeCache: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCookies: {
              minArgs: 1,
              maxArgs: 1
            },
            removeDownloads: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFormData: {
              minArgs: 1,
              maxArgs: 1
            },
            removeHistory: {
              minArgs: 1,
              maxArgs: 1
            },
            removeLocalStorage: {
              minArgs: 1,
              maxArgs: 1
            },
            removePasswords: {
              minArgs: 1,
              maxArgs: 1
            },
            removePluginData: {
              minArgs: 1,
              maxArgs: 1
            },
            settings: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          commands: {
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          contextMenus: {
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeAll: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          cookies: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 1,
              maxArgs: 1
            },
            getAllCookieStores: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          devtools: {
            inspectedWindow: {
              eval: {
                minArgs: 1,
                maxArgs: 2,
                singleCallbackArg: !1
              }
            },
            panels: {
              create: {
                minArgs: 3,
                maxArgs: 3,
                singleCallbackArg: !0
              },
              elements: {
                createSidebarPane: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            }
          },
          downloads: {
            cancel: {
              minArgs: 1,
              maxArgs: 1
            },
            download: {
              minArgs: 1,
              maxArgs: 1
            },
            erase: {
              minArgs: 1,
              maxArgs: 1
            },
            getFileIcon: {
              minArgs: 1,
              maxArgs: 2
            },
            open: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            pause: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFile: {
              minArgs: 1,
              maxArgs: 1
            },
            resume: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          extension: {
            isAllowedFileSchemeAccess: {
              minArgs: 0,
              maxArgs: 0
            },
            isAllowedIncognitoAccess: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          history: {
            addUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteAll: {
              minArgs: 0,
              maxArgs: 0
            },
            deleteRange: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            getVisits: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          i18n: {
            detectLanguage: {
              minArgs: 1,
              maxArgs: 1
            },
            getAcceptLanguages: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          identity: {
            launchWebAuthFlow: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          idle: {
            queryState: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          management: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getSelf: {
              minArgs: 0,
              maxArgs: 0
            },
            setEnabled: {
              minArgs: 2,
              maxArgs: 2
            },
            uninstallSelf: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          notifications: {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            create: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getPermissionLevel: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          pageAction: {
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            hide: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          permissions: {
            contains: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            request: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          runtime: {
            getBackgroundPage: {
              minArgs: 0,
              maxArgs: 0
            },
            getPlatformInfo: {
              minArgs: 0,
              maxArgs: 0
            },
            openOptionsPage: {
              minArgs: 0,
              maxArgs: 0
            },
            requestUpdateCheck: {
              minArgs: 0,
              maxArgs: 0
            },
            sendMessage: {
              minArgs: 1,
              maxArgs: 3
            },
            sendNativeMessage: {
              minArgs: 2,
              maxArgs: 2
            },
            setUninstallURL: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          sessions: {
            getDevices: {
              minArgs: 0,
              maxArgs: 1
            },
            getRecentlyClosed: {
              minArgs: 0,
              maxArgs: 1
            },
            restore: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          storage: {
            local: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            managed: {
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            sync: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            }
          },
          tabs: {
            captureVisibleTab: {
              minArgs: 0,
              maxArgs: 2
            },
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            detectLanguage: {
              minArgs: 0,
              maxArgs: 1
            },
            discard: {
              minArgs: 0,
              maxArgs: 1
            },
            duplicate: {
              minArgs: 1,
              maxArgs: 1
            },
            executeScript: {
              minArgs: 1,
              maxArgs: 2
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 0
            },
            getZoom: {
              minArgs: 0,
              maxArgs: 1
            },
            getZoomSettings: {
              minArgs: 0,
              maxArgs: 1
            },
            goBack: {
              minArgs: 0,
              maxArgs: 1
            },
            goForward: {
              minArgs: 0,
              maxArgs: 1
            },
            highlight: {
              minArgs: 1,
              maxArgs: 1
            },
            insertCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            query: {
              minArgs: 1,
              maxArgs: 1
            },
            reload: {
              minArgs: 0,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            sendMessage: {
              minArgs: 2,
              maxArgs: 3
            },
            setZoom: {
              minArgs: 1,
              maxArgs: 2
            },
            setZoomSettings: {
              minArgs: 1,
              maxArgs: 2
            },
            update: {
              minArgs: 1,
              maxArgs: 2
            }
          },
          topSites: {
            get: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          webNavigation: {
            getAllFrames: {
              minArgs: 1,
              maxArgs: 1
            },
            getFrame: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          webRequest: {
            handlerBehaviorChanged: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          windows: {
            create: {
              minArgs: 0,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 1
            },
            getLastFocused: {
              minArgs: 0,
              maxArgs: 1
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          }
        };
        if (Object.keys(i).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class l extends WeakMap {
          constructor(v, O = void 0) {
            super(O), this.createItem = v;
          }
          get(v) {
            return this.has(v) || this.set(v, this.createItem(v)), super.get(v);
          }
        }
        const u = (h) => h && typeof h == "object" && typeof h.then == "function", c = (h, v) => (...O) => {
          a.runtime.lastError ? h.reject(new Error(a.runtime.lastError.message)) : v.singleCallbackArg || O.length <= 1 && v.singleCallbackArg !== !1 ? h.resolve(O[0]) : h.resolve(O);
        }, d = (h) => h == 1 ? "argument" : "arguments", m = (h, v) => function(L, ...I) {
          if (I.length < v.minArgs)
            throw new Error(`Expected at least ${v.minArgs} ${d(v.minArgs)} for ${h}(), got ${I.length}`);
          if (I.length > v.maxArgs)
            throw new Error(`Expected at most ${v.maxArgs} ${d(v.maxArgs)} for ${h}(), got ${I.length}`);
          return new Promise((y, U) => {
            if (v.fallbackToNoCallback)
              try {
                L[h](...I, c({
                  resolve: y,
                  reject: U
                }, v));
              } catch (D) {
                console.warn(`${h} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, D), L[h](...I), v.fallbackToNoCallback = !1, v.noCallback = !0, y();
              }
            else v.noCallback ? (L[h](...I), y()) : L[h](...I, c({
              resolve: y,
              reject: U
            }, v));
          });
        }, p = (h, v, O) => new Proxy(v, {
          apply(L, I, y) {
            return O.call(I, h, ...y);
          }
        });
        let A = Function.call.bind(Object.prototype.hasOwnProperty);
        const C = (h, v = {}, O = {}) => {
          let L = /* @__PURE__ */ Object.create(null), I = {
            has(U, D) {
              return D in h || D in L;
            },
            get(U, D, q) {
              if (D in L)
                return L[D];
              if (!(D in h))
                return;
              let z = h[D];
              if (typeof z == "function")
                if (typeof v[D] == "function")
                  z = p(h, h[D], v[D]);
                else if (A(O, D)) {
                  let H = m(D, O[D]);
                  z = p(h, h[D], H);
                } else
                  z = z.bind(h);
              else if (typeof z == "object" && z !== null && (A(v, D) || A(O, D)))
                z = C(z, v[D], O[D]);
              else if (A(O, "*"))
                z = C(z, v[D], O["*"]);
              else
                return Object.defineProperty(L, D, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return h[D];
                  },
                  set(H) {
                    h[D] = H;
                  }
                }), z;
              return L[D] = z, z;
            },
            set(U, D, q, z) {
              return D in L ? L[D] = q : h[D] = q, !0;
            },
            defineProperty(U, D, q) {
              return Reflect.defineProperty(L, D, q);
            },
            deleteProperty(U, D) {
              return Reflect.deleteProperty(L, D);
            }
          }, y = Object.create(h);
          return new Proxy(y, I);
        }, Z = (h) => ({
          addListener(v, O, ...L) {
            v.addListener(h.get(O), ...L);
          },
          hasListener(v, O) {
            return v.hasListener(h.get(O));
          },
          removeListener(v, O) {
            v.removeListener(h.get(O));
          }
        }), R = new l((h) => typeof h != "function" ? h : function(O) {
          const L = C(
            O,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          h(L);
        });
        let V = !1;
        const j = new l((h) => typeof h != "function" ? h : function(O, L, I) {
          let y = !1, U, D = new Promise((se) => {
            U = function(ue) {
              V || (console.warn(o, new Error().stack), V = !0), y = !0, se(ue);
            };
          }), q;
          try {
            q = h(O, L, U);
          } catch (se) {
            q = Promise.reject(se);
          }
          const z = q !== !0 && u(q);
          if (q !== !0 && !z && !y)
            return !1;
          const H = (se) => {
            se.then((ue) => {
              I(ue);
            }, (ue) => {
              let Ae;
              ue && (ue instanceof Error || typeof ue.message == "string") ? Ae = ue.message : Ae = "An unexpected error occurred", I({
                __mozWebExtensionPolyfillReject__: !0,
                message: Ae
              });
            }).catch((ue) => {
              console.error("Failed to send onMessage rejected reply", ue);
            });
          };
          return H(z ? q : D), !0;
        }), N = ({
          reject: h,
          resolve: v
        }, O) => {
          a.runtime.lastError ? a.runtime.lastError.message === n ? v() : h(new Error(a.runtime.lastError.message)) : O && O.__mozWebExtensionPolyfillReject__ ? h(new Error(O.message)) : v(O);
        }, J = (h, v, O, ...L) => {
          if (L.length < v.minArgs)
            throw new Error(`Expected at least ${v.minArgs} ${d(v.minArgs)} for ${h}(), got ${L.length}`);
          if (L.length > v.maxArgs)
            throw new Error(`Expected at most ${v.maxArgs} ${d(v.maxArgs)} for ${h}(), got ${L.length}`);
          return new Promise((I, y) => {
            const U = N.bind(null, {
              resolve: I,
              reject: y
            });
            L.push(U), O.sendMessage(...L);
          });
        }, E = {
          devtools: {
            network: {
              onRequestFinished: Z(R)
            }
          },
          runtime: {
            onMessage: Z(j),
            onMessageExternal: Z(j),
            sendMessage: J.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: J.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        }, F = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        return i.privacy = {
          network: {
            "*": F
          },
          services: {
            "*": F
          },
          websites: {
            "*": F
          }
        }, C(a, E, i);
      };
      r.exports = s(chrome);
    } else
      r.exports = globalThis.browser;
  });
})(Yi);
var ed = Yi.exports;
const td = /* @__PURE__ */ Ca(ed);
var Lr = Hu(), Ue = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), $i = (e, t) => (dr.set(e, (dr.get(e) || /* @__PURE__ */ new Set()).add(t)), () => {
  const r = dr.get(e);
  r?.delete(t) && r?.size === 0 && dr.delete(e);
}), Gi = (e, t) => {
  On.set(e, (On.get(e) || /* @__PURE__ */ new Set()).add(t));
}, qt = (e) => ({
  withFingerprint: (t) => {
    const r = (o) => ({ and: () => o }), n = {
      aboutIncomingMessage: (o) => {
        const s = Ue.get(e);
        return wr.toExtensionContext(s.port, {
          status: "incoming",
          message: o
        }), r(n);
      },
      aboutSuccessfulDelivery: (o) => {
        const s = Ue.get(e);
        return wr.toExtensionContext(s.port, {
          status: "delivered",
          receipt: o
        }), r(n);
      },
      aboutMessageUndeliverability: (o, s) => {
        const a = Ue.get(e);
        return a?.fingerprint === t && wr.toExtensionContext(a.port, {
          status: "undeliverable",
          resolvedDestination: o,
          message: s
        }), r(n);
      },
      whenDeliverableTo: (o) => {
        const s = () => {
          const a = Ue.get(e);
          if (a?.fingerprint === t && Ue.has(o))
            return wr.toExtensionContext(a.port, {
              status: "deliverable",
              deliverableTo: o
            }), !0;
        };
        if (!s()) {
          const a = $i(o, s);
          Gi(t, a);
        }
        return r(n);
      },
      aboutSessionEnded: (o) => {
        const s = Ue.get(e);
        return s?.fingerprint === t && wr.toExtensionContext(s.port, {
          status: "terminated",
          fingerprint: o
        }), r(n);
      }
    };
    return n;
  }
}), rd = Uu(), Fn = Qu("background", (e) => {
  var t;
  if (e.origin.context === "background" && ["content-script", "devtools "].includes(e.destination.context) && !e.destination.tabId)
    throw new TypeError("When sending messages from background page, use @tabId syntax to target specific tab");
  const r = vn(Ot(Ot({}, e.origin), e.origin.context === "window" && { context: "content-script" })), n = vn(Ia(Ot(Ot({}, e.destination), e.destination.context === "window" && {
    context: "content-script"
  }), {
    tabId: e.destination.tabId || e.origin.tabId
  }));
  e.destination.tabId = null, e.destination.frameId = null;
  const o = () => Ue.get(n), s = () => Ue.get(r), a = () => {
    var i;
    qt(n).withFingerprint(o().fingerprint).aboutIncomingMessage(e);
    const l = {
      message: e,
      to: o().fingerprint,
      from: {
        endpointId: r,
        fingerprint: (i = s()) == null ? void 0 : i.fingerprint
      }
    };
    e.messageType === "message" && Lr.add(l), e.messageType === "reply" && Lr.remove(e.messageID), s() && qt(r).withFingerprint(s().fingerprint).aboutSuccessfulDelivery(l);
  };
  (t = o()) != null && t.port ? a() : e.messageType === "message" && (e.origin.context === "background" ? $i(n, a) : s() && qt(r).withFingerprint(s().fingerprint).aboutMessageUndeliverability(n, e).and().whenDeliverableTo(n));
}, (e) => {
  const t = vn(Ot(Ot({}, e.origin), e.origin.context === "window" && { context: "content-script" })), r = Ue.get(t), n = {
    message: e,
    to: rd,
    from: {
      endpointId: t,
      fingerprint: r.fingerprint
    }
  };
  qt(t).withFingerprint(r.fingerprint).aboutSuccessfulDelivery(n);
});
td.runtime.onConnect.addListener((e) => {
  var t;
  const r = Vu(e.name);
  if (!r)
    return;
  r.endpointName || (r.endpointName = vn({
    context: "content-script",
    tabId: e.sender.tab.id,
    frameId: e.sender.frameId
  }));
  const { tabId: n, frameId: o } = ya(r.endpointName);
  Ue.set(r.endpointName, {
    fingerprint: r.fingerprint,
    port: e
  }), (t = dr.get(r.endpointName)) == null || t.forEach((s) => s()), dr.delete(r.endpointName), Gi(r.fingerprint, () => {
    const s = Lr.entries().filter((a) => a.to === r.fingerprint);
    Lr.remove(s), s.forEach((a) => {
      a.from.endpointId === "background" ? Fn.endTransaction(a.message.transactionId) : qt(a.from.endpointId).withFingerprint(a.from.fingerprint).aboutSessionEnded(r.fingerprint);
    });
  }), e.onDisconnect.addListener(() => {
    var s, a;
    ((s = Ue.get(r.endpointName)) == null ? void 0 : s.fingerprint) === r.fingerprint && Ue.delete(r.endpointName), (a = On.get(r.fingerprint)) == null || a.forEach((i) => i()), On.delete(r.fingerprint);
  }), e.onMessage.addListener((s) => {
    var a, i;
    if (s.type === "sync") {
      const l = [...Ue.values()].map((c) => c.fingerprint), u = s.pendingResponses.filter((c) => l.includes(c.to));
      Lr.add(...u), s.pendingResponses.filter((c) => !l.includes(c.to)).forEach((c) => qt(r.endpointName).withFingerprint(r.fingerprint).aboutSessionEnded(c.to)), s.pendingDeliveries.forEach((c) => qt(r.endpointName).withFingerprint(r.fingerprint).whenDeliverableTo(c));
      return;
    }
    s.type === "deliver" && ((i = (a = s.message) == null ? void 0 : a.origin) != null && i.context) && (s.message.origin.tabId = n, s.message.origin.frameId = o, Fn.handleMessage(s.message));
  });
});
var { sendMessage: nd, onMessage: yt } = Fn;
Xu(Fn);
const od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onMessage: yt,
  sendMessage: nd
}, Symbol.toStringTag, { value: "Module" }));
var Bo = function(e, t) {
  return Bo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Bo(e, t);
};
function en(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Bo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Uo(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Vo(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, s = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) s.push(o.value);
  } catch (i) {
    a = { error: i };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return s;
}
function Ho(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function bt(e) {
  return typeof e == "function";
}
function Ki(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var mo = Ki(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Zo(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var Yn = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, n, o, s;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var i = Uo(a), l = i.next(); !l.done; l = i.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (C) {
            t = { error: C };
          } finally {
            try {
              l && !l.done && (r = i.return) && r.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          a.remove(this);
      var c = this.initialTeardown;
      if (bt(c))
        try {
          c();
        } catch (C) {
          s = C instanceof mo ? C.errors : [C];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var m = Uo(d), p = m.next(); !p.done; p = m.next()) {
            var A = p.value;
            try {
              ls(A);
            } catch (C) {
              s = s ?? [], C instanceof mo ? s = Ho(Ho([], Vo(s)), Vo(C.errors)) : s.push(C);
            }
          }
        } catch (C) {
          n = { error: C };
        } finally {
          try {
            p && !p.done && (o = m.return) && o.call(m);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (s)
        throw new mo(s);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        ls(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && Zo(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && Zo(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), Qi = Yn.EMPTY;
function Xi(e) {
  return e instanceof Yn || e && "closed" in e && bt(e.remove) && bt(e.add) && bt(e.unsubscribe);
}
function ls(e) {
  bt(e) ? e() : e.unsubscribe();
}
var ad = {
  Promise: void 0
}, sd = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Ho([e, t], Vo(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function id(e) {
  sd.setTimeout(function() {
    throw e;
  });
}
function cs() {
}
function bn(e) {
  e();
}
var el = function(e) {
  en(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, Xi(r) && r.add(n)) : n.destination = ud, n;
  }
  return t.create = function(r, n, o) {
    return new zo(r, n, o);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Yn), ld = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        un(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        un(n);
      }
    else
      un(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        un(r);
      }
  }, e;
}(), zo = function(e) {
  en(t, e);
  function t(r, n, o) {
    var s = e.call(this) || this, a;
    return bt(r) || !r ? a = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: o ?? void 0
    } : a = r, s.destination = new ld(a), s;
  }
  return t;
}(el);
function un(e) {
  id(e);
}
function cd(e) {
  throw e;
}
var ud = {
  closed: !0,
  next: cs,
  error: cd,
  complete: cs
}, dd = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function gd(e) {
  return e;
}
function fd(e) {
  return e.length === 0 ? gd : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var us = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var o = this, s = pd(t) ? t : new zo(t, r, n);
    return bn(function() {
      var a = o, i = a.operator, l = a.source;
      s.add(i ? i.call(s, l) : l ? o._subscribe(s) : o._trySubscribe(s));
    }), s;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = ds(r), new r(function(o, s) {
      var a = new zo({
        next: function(i) {
          try {
            t(i);
          } catch (l) {
            s(l), a.unsubscribe();
          }
        },
        error: s,
        complete: o
      });
      n.subscribe(a);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[dd] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return fd(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = ds(t), new t(function(n, o) {
      var s;
      r.subscribe(function(a) {
        return s = a;
      }, function(a) {
        return o(a);
      }, function() {
        return n(s);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function ds(e) {
  var t;
  return (t = e ?? ad.Promise) !== null && t !== void 0 ? t : Promise;
}
function md(e) {
  return e && bt(e.next) && bt(e.error) && bt(e.complete);
}
function pd(e) {
  return e && e instanceof el || md(e) && Xi(e);
}
var hd = Ki(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), tl = function(e) {
  en(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new gs(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new hd();
  }, t.prototype.next = function(r) {
    var n = this;
    bn(function() {
      var o, s;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var a = Uo(n.currentObservers), i = a.next(); !i.done; i = a.next()) {
            var l = i.value;
            l.next(r);
          }
        } catch (u) {
          o = { error: u };
        } finally {
          try {
            i && !i.done && (s = a.return) && s.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    bn(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    bn(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, o = this, s = o.hasError, a = o.isStopped, i = o.observers;
    return s || a ? Qi : (this.currentObservers = null, i.push(r), new Yn(function() {
      n.currentObservers = null, Zo(i, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, s = n.thrownError, a = n.isStopped;
    o ? r.error(s) : a && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new us();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new gs(r, n);
  }, t;
}(us), gs = function(e) {
  en(t, e);
  function t(r, n) {
    var o = e.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return t.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, t.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Qi;
  }, t;
}(tl), rl = function(e) {
  en(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(r) {
    var n = e.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, t.prototype.getValue = function() {
    var r = this, n = r.hasError, o = r.thrownError, s = r._value;
    if (n)
      throw o;
    return this._throwIfClosed(), s;
  }, t.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, t;
}(tl);
class vt {
  static instance;
  pjePayloadAtual;
  async PATH() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.PATH;
  }
  async WEB_ROOT() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.WEB_ROOT;
  }
  async ID_USUARIO_LOCALIZACAO() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.ID_USUARIO_LOCALIZACAO;
  }
  constructor() {
    this.iniciarOuvinte();
  }
  async iniciarOuvinte() {
    {
      const { onMessage: t } = await Promise.resolve().then(() => od);
      t("PJePayloadServico", async () => this.obterPayload());
    }
  }
  static getInstance() {
    return vt.instance || (vt.instance = new vt()), vt.instance;
  }
  async obterPayload() {
    {
      const { PJePayloadUpdateSubject: t } = await Promise.resolve().then(() => pA);
      return this.pjePayloadAtual = t.getValue(), this.pjePayloadAtual;
    }
  }
}
new $e({
  recurso: "PJePayloadServico",
  adicional: "Serviço"
});
vt.getInstance();
async function Ad() {
  const e = await Promise.race([vt.getInstance().PATH()]);
  if (e) {
    let t = e + "/";
    return t = t.replace(/^\/+/, ""), Ce.log(t), (t == "seam/" || t == "login.seam/") && (t = ""), t;
  } else
    return Ce.log("Não foi possível encontrar a correspondência."), "";
}
function Cd(e) {
  return fetch(e, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((t) => t.json());
}
function vd(e = "pje", t) {
  const r = `${document.referrer}${e}/seam/resource/rest/pje-legacy/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${encodeURI(
    t.trim()
  )}/false`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function bd(e = "pje") {
  const t = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/etiquetas`;
  return fetch(t, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((r) => r.json());
}
function Id(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[]}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function yd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","numeroProcessoReferencia":"","etiqueta":"","etiquetas":[],"filtrado":true,"modoCompleto":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function xd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[],"ignorarCache":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function wd() {
  const t = `${window.location.origin.includes("frontend") ? document.referrer.replace(/\/+$/, "") : window.location.origin}/pje/seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(t, {
    headers: { "Content-Type": "application/json" },
    body: '{"numeroProcesso":"","competencia":"","etiquetas":[]}',
    method: "POST",
    credentials: "include"
  }).then((r) => r.json());
}
function Td(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/transicoes/${t}`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: null,
    method: "GET",
    credentials: "include"
  }).then((n) => n.json());
}
function Sd(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/processoTags/inserir`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"tag":"${t}","idProcesso":"${r}"}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Ed(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/processoTags/remover`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"idTag":${t},"idProcesso":${r}}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Pd(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${t}/false`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${r}","classe":null,"tags":[],"tagsString":null,"poloAtivo":null,"poloPassivo":null,"orgao":null,"ordem":null,"page":0,"maxResults":300,"idTaskInstance":null,"apelidoSessao":null,"idTipoSessao":null,"dataSessao":null,"somenteFavoritas":null,"objeto":null,"semEtiqueta":null,"assunto":null,"dataAutuacao":null,"nomeParte":null,"nomeFiltro":null,"numeroDocumento":null,"competencia":"","relator":null,"orgaoJulgador":null,"somenteLembrete":null,"somenteSigiloso":null,"somenteLiminar":null,"eleicao":null,"estado":null,"municipio":null,"prioridadeProcesso":null,"cpfCnpj":null,"porEtiqueta":null,"conferidos":null,"orgaoJulgadorColegiado":null,"naoLidos":null,"tipoProcessoDocumento":null}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Od(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/movimentar/${t}/${r}`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include"
  }).then((o) => o.json());
}
function Fd(e) {
  const r = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tags`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"marcado":false,"possuiFilhos":false,"id":null,"nomeTag":"${e}","nomeTagCompleto":"${e}","pai":null}`,
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then((n) => n.json());
}
async function Ld(e, t) {
  const n = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tags`;
  return await fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"marcado":false,"possuiFilhos":false,"id":${e},"nomeTag":"${t}","nomeTagCompleto":"${t}","pai":null}`,
    method: "PUT",
    credentials: "include"
  }).then((o) => o.json());
}
async function Rd(e) {
  if (e == null || typeof e == "string" && !e.length)
    return !1;
  const r = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tagEdicao/${e}`;
  return await fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include"
  }).then((n) => n.json());
}
function _d(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/etiquetas/${t}/processos`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((n) => n.json());
}
function kd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tags/${t}`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    credentials: "include",
    mode: "cors"
  }).then((n) => n.json());
}
async function nl(e, t) {
  const n = `${await tn()}/seam/resource/rest/pje-legacy/processos/numero-processo/${e}/validar`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.text()).then((o) => Number(o));
}
const $n = nl;
async function Dd(e, t) {
  const n = `${await tn()}/seam/resource/rest/pje-legacy/painelUsuario/gerarChaveAcessoProcesso/${e}`;
  return fetch(n, {
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.text());
}
async function ol(e, t) {
  const n = `${await tn()}/seam/resource/rest/pje-legacy/processos/${e}/movimentacoes`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function Md(e, t) {
  return $n(e).then(
    (r) => ol(r)
  );
}
async function al(e, t) {
  const n = `${await tn()}/seam/resource/rest/pje-legacy/processos/${e}/ultimoMovimento`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function jd(e) {
  return $n(e).then(
    (t) => al(t)
  );
}
async function sl(e, t) {
  const n = `${await tn()}/seam/resource/rest/pje-legacy/processos/${e}/tarefas`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function Nd(e) {
  return $n(e).then(
    (t) => sl(t)
  );
}
function Bd(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[]}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Ud(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","numeroProcessoReferencia":"","etiqueta":"","etiquetas":[],"filtrado":true,"modoCompleto":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Vd(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[],"ignorarCache":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Hd(e, t) {
  return fetch(e, t);
}
class xa {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fetch(t, ...r) {
    try {
      const n = Zd[t];
      if (n)
        try {
          return n(...r);
        } catch (o) {
          const s = o;
          if (r.at(-1)?.fetchingViaBackground)
            return {
              fetchingViaBackgroundWithError: !0,
              errorMessage: s.message
            };
          if (s.message.match(/CORS/i))
            return xa.fetchViaBackground(t, ...r);
          throw new Error(s.message);
        }
      else
        throw new Error(`Endpoint function "${t}" not found`);
    } catch (n) {
      return Ce.erro("Error fetching endpoint:"), Ce.erro(n), null;
    }
  }
  /**
   *
   * @param opcoes
   * @returns
   * @deprecated
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async fetchViaBackground(t, ...r) {
    const { sendMessage: n } = await import("./content-script-CUMnqWUr.mjs"), o = await n(
      "endpoints",
      {
        chamar: "backgroundFetchEndpoint",
        opcoes: {
          functionName: t,
          args: { ...r }
        }
      }
    );
    if (o && o.fetchingViaBackgroundWithError)
      throw new Error(
        o.errorMessage
      );
    return o;
  }
}
const Zd = {
  pegaEnderecoSiglaPje: Ad,
  baixarTodosProcessos: Cd,
  listaProcessosTarefa: vd,
  listaEtiquetas: bd,
  localizarTarefaNumeroProcesso: Id,
  localizarTarefaNumeroProcessoTJDFT: yd,
  localizarTarefaNumeroProcessoTJPE: xd,
  listatodosTarefas: wd,
  listaEncaminha: Td,
  inserirEtiquetas: Sd,
  removerEtiquetas: Ed,
  localizaIdProcesso: Pd,
  movimentarProcessos: Od,
  criarEtiqueta: Fd,
  editarEtiqueta: Ld,
  listarEtiqueta: Rd,
  numeroProcessoPorEtiqueta: _d,
  apagarEtiquetaLotação: kd,
  validarNumeroProcesso: nl,
  obterIdProcesso: $n,
  gerarChaveAcessoProcesso: Dd,
  obterMovimentosDoProcesso: ol,
  obterMovimentosDoProcessoPeloNumeroUnico: Md,
  obterUltimoMovimentoDoProcesso: al,
  obterUltimoMovimentoDoProcessoPeloNumeroUnico: jd,
  obterTarefasPendentesDoProcesso: sl,
  obterTarefasPendentesDoProcessoPeloNumeroUnico: Nd,
  localizarTarefaNumeroProcessoAutodigitais: Bd,
  localizarTarefaNumeroProcessoTJDFTAutodsDigitais: Ud,
  localizarTarefaNumeroProcessoTJPEAutodsDigitais: Vd,
  obterDoURL: Hd
};
async function tn(e) {
  const t = await vt.getInstance().WEB_ROOT();
  return t || (await Ge.obter("siteAtual")).siteAtual.match(rr.HREFS.LEGACY_WEB_ROOT)?.at(0);
}
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wa(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const ae = {}, Rr = [], Xe = () => {
}, zd = () => !1, Gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ta = (e) => e.startsWith("onUpdate:"), pe = Object.assign, Sa = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Wd = Object.prototype.hasOwnProperty, re = (e, t) => Wd.call(e, t), G = Array.isArray, _r = (e) => Kn(e) === "[object Map]", Jd = (e) => Kn(e) === "[object Set]", K = (e) => typeof e == "function", he = (e) => typeof e == "string", pr = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", il = (e) => (ce(e) || K(e)) && K(e.then) && K(e.catch), qd = Object.prototype.toString, Kn = (e) => qd.call(e), Yd = (e) => Kn(e).slice(8, -1), $d = (e) => Kn(e) === "[object Object]", Ea = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kr = /* @__PURE__ */ wa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Gd = /-(\w)/g, Ke = Qn(
  (e) => e.replace(Gd, (t, r) => r ? r.toUpperCase() : "")
), Kd = /\B([A-Z])/g, nr = Qn(
  (e) => e.replace(Kd, "-$1").toLowerCase()
), Xn = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), po = Qn(
  (e) => e ? `on${Xn(e)}` : ""
), Dt = (e, t) => !Object.is(e, t), ho = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ln = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Qd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xd = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fs;
const $t = () => fs || (fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pa(e) {
  if (G(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = he(n) ? ng(n) : Pa(n);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (he(e) || ce(e))
    return e;
}
const eg = /;(?![^(]*\))/g, tg = /:([^]+)/, rg = /\/\*[^]*?\*\//g;
function ng(e) {
  const t = {};
  return e.replace(rg, "").split(eg).forEach((r) => {
    if (r) {
      const n = r.split(tg);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Oa(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (G(e))
    for (let r = 0; r < e.length; r++) {
      const n = Oa(e[r]);
      n && (t += n + " ");
    }
  else if (ce(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const og = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ag = /* @__PURE__ */ wa(og);
function ll(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Te;
class cl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Te, !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Te;
      try {
        return Te = this, t();
      } finally {
        Te = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Te = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Te = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zr(e) {
  return new cl(e);
}
function sg() {
  return Te;
}
function Qe(e, t = !1) {
  Te && Te.cleanups.push(e);
}
let le;
const Ao = /* @__PURE__ */ new WeakSet();
class ul {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && Te.active && Te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ao.has(this) && (Ao.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || gl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ms(this), fl(this);
    const t = le, r = et;
    le = this, et = !0;
    try {
      return this.fn();
    } finally {
      ml(this), le = t, et = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ra(t);
      this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ao.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wo(this) && this.run();
  }
  get dirty() {
    return Wo(this);
  }
}
let dl = 0, Dr, Mr;
function gl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mr, Mr = e;
    return;
  }
  e.next = Dr, Dr = e;
}
function Fa() {
  dl++;
}
function La() {
  if (--dl > 0)
    return;
  if (Mr) {
    let t = Mr;
    for (Mr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Dr; ) {
    let t = Dr;
    for (Dr = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function fl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ml(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === r && (r = o), Ra(n), ig(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = r;
}
function Wo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (pl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function pl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zr))
    return;
  e.globalVersion = zr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Wo(e)) {
    e.flags &= -3;
    return;
  }
  const r = le, n = et;
  le = e, et = !0;
  try {
    fl(e);
    const o = e.fn(e._value);
    (t.version === 0 || Dt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    le = r, et = n, ml(e), e.flags &= -3;
  }
}
function Ra(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      Ra(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function ig(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const hl = [];
function jt() {
  hl.push(et), et = !1;
}
function Nt() {
  const e = hl.pop();
  et = e === void 0 ? !0 : e;
}
function ms(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = le;
    le = void 0;
    try {
      t();
    } finally {
      le = r;
    }
  }
}
let zr = 0;
class lg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _a {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!le || !et || le === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== le)
      r = this.activeLink = new lg(le, this), le.deps ? (r.prevDep = le.depsTail, le.depsTail.nextDep = r, le.depsTail = r) : le.deps = le.depsTail = r, Al(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = le.depsTail, r.nextDep = void 0, le.depsTail.nextDep = r, le.depsTail = r, le.deps === r && (le.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, zr++, this.notify(t);
  }
  notify(t) {
    Fa();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      La();
    }
  }
}
function Al(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Al(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Rn = /* @__PURE__ */ new WeakMap(), Gt = Symbol(
  ""
), Jo = Symbol(
  ""
), Wr = Symbol(
  ""
);
function Ie(e, t, r) {
  if (et && le) {
    let n = Rn.get(e);
    n || Rn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || (n.set(r, o = new _a()), o.map = n, o.key = r), o.track();
  }
}
function At(e, t, r, n, o, s) {
  const a = Rn.get(e);
  if (!a) {
    zr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (Fa(), t === "clear")
    a.forEach(i);
  else {
    const l = G(e), u = l && Ea(r);
    if (l && r === "length") {
      const c = Number(n);
      a.forEach((d, m) => {
        (m === "length" || m === Wr || !pr(m) && m >= c) && i(d);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && i(a.get(r)), u && i(a.get(Wr)), t) {
        case "add":
          l ? u && i(a.get("length")) : (i(a.get(Gt)), _r(e) && i(a.get(Jo)));
          break;
        case "delete":
          l || (i(a.get(Gt)), _r(e) && i(a.get(Jo)));
          break;
        case "set":
          _r(e) && i(a.get(Gt));
          break;
      }
  }
  La();
}
function cg(e, t) {
  const r = Rn.get(e);
  return r && r.get(t);
}
function sr(e) {
  const t = X(e);
  return t === e ? t : (Ie(t, "iterate", Wr), tt(e) ? t : t.map(Se));
}
function ka(e) {
  return Ie(e = X(e), "iterate", Wr), e;
}
const ug = {
  __proto__: null,
  [Symbol.iterator]() {
    return Co(this, Symbol.iterator, Se);
  },
  concat(...e) {
    return sr(this).concat(
      ...e.map((t) => G(t) ? sr(t) : t)
    );
  },
  entries() {
    return Co(this, "entries", (e) => (e[1] = Se(e[1]), e));
  },
  every(e, t) {
    return pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pt(this, "filter", e, t, (r) => r.map(Se), arguments);
  },
  find(e, t) {
    return pt(this, "find", e, t, Se, arguments);
  },
  findIndex(e, t) {
    return pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pt(this, "findLast", e, t, Se, arguments);
  },
  findLastIndex(e, t) {
    return pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vo(this, "includes", e);
  },
  indexOf(...e) {
    return vo(this, "indexOf", e);
  },
  join(e) {
    return sr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return vo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Tr(this, "pop");
  },
  push(...e) {
    return Tr(this, "push", e);
  },
  reduce(e, ...t) {
    return ps(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ps(this, "reduceRight", e, t);
  },
  shift() {
    return Tr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Tr(this, "splice", e);
  },
  toReversed() {
    return sr(this).toReversed();
  },
  toSorted(e) {
    return sr(this).toSorted(e);
  },
  toSpliced(...e) {
    return sr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Tr(this, "unshift", e);
  },
  values() {
    return Co(this, "values", Se);
  }
};
function Co(e, t, r) {
  const n = ka(e), o = n[t]();
  return n !== e && !tt(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = r(s.value)), s;
  }), o;
}
const dg = Array.prototype;
function pt(e, t, r, n, o, s) {
  const a = ka(e), i = a !== e && !tt(e), l = a[t];
  if (l !== dg[t]) {
    const d = l.apply(e, s);
    return i ? Se(d) : d;
  }
  let u = r;
  a !== e && (i ? u = function(d, m) {
    return r.call(this, Se(d), m, e);
  } : r.length > 2 && (u = function(d, m) {
    return r.call(this, d, m, e);
  }));
  const c = l.call(a, u, n);
  return i && o ? o(c) : c;
}
function ps(e, t, r, n) {
  const o = ka(e);
  let s = r;
  return o !== e && (tt(e) ? r.length > 3 && (s = function(a, i, l) {
    return r.call(this, a, i, l, e);
  }) : s = function(a, i, l) {
    return r.call(this, a, Se(i), l, e);
  }), o[t](s, ...n);
}
function vo(e, t, r) {
  const n = X(e);
  Ie(n, "iterate", Wr);
  const o = n[t](...r);
  return (o === -1 || o === !1) && Na(r[0]) ? (r[0] = X(r[0]), n[t](...r)) : o;
}
function Tr(e, t, r = []) {
  jt(), Fa();
  const n = X(e)[t].apply(e, r);
  return La(), Nt(), n;
}
const gg = /* @__PURE__ */ wa("__proto__,__v_isRef,__isVue"), Cl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pr)
);
function fg(e) {
  pr(e) || (e = String(e));
  const t = X(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class vl {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (o ? s ? xg : xl : s ? yl : Il).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = G(t);
    if (!o) {
      let l;
      if (a && (l = ug[r]))
        return l;
      if (r === "hasOwnProperty")
        return fg;
    }
    const i = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      me(t) ? t : n
    );
    return (pr(r) ? Cl.has(r) : gg(r)) || (o || Ie(t, "get", r), s) ? i : me(i) ? a && Ea(r) ? i : i.value : ce(i) ? o ? Ma(i) : xt(i) : i;
  }
}
class bl extends vl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let s = t[r];
    if (!this._isShallow) {
      const l = er(s);
      if (!tt(n) && !er(n) && (s = X(s), n = X(n)), !G(t) && me(s) && !me(n))
        return l ? !1 : (s.value = n, !0);
    }
    const a = G(t) && Ea(r) ? Number(r) < t.length : re(t, r), i = Reflect.set(
      t,
      r,
      n,
      me(t) ? t : o
    );
    return t === X(o) && (a ? Dt(n, s) && At(t, "set", r, n) : At(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = re(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && At(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!pr(r) || !Cl.has(r)) && Ie(t, "has", r), n;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      G(t) ? "length" : Gt
    ), Reflect.ownKeys(t);
  }
}
class mg extends vl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const pg = /* @__PURE__ */ new bl(), hg = /* @__PURE__ */ new mg(), Ag = /* @__PURE__ */ new bl(!0);
const qo = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function Cg(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, s = X(o), a = _r(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...n), c = r ? qo : t ? Yo : Se;
    return !t && Ie(
      s,
      "iterate",
      l ? Jo : Gt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = u.next();
        return m ? { value: d, done: m } : {
          value: i ? [c(d[0]), c(d[1])] : c(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function gn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vg(e, t) {
  const r = {
    get(o) {
      const s = this.__v_raw, a = X(s), i = X(o);
      e || (Dt(o, i) && Ie(a, "get", o), Ie(a, "get", i));
      const { has: l } = dn(a), u = t ? qo : e ? Yo : Se;
      if (l.call(a, o))
        return u(s.get(o));
      if (l.call(a, i))
        return u(s.get(i));
      s !== a && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ie(X(o), "iterate", Gt), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, a = X(s), i = X(o);
      return e || (Dt(o, i) && Ie(a, "has", o), Ie(a, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const a = this, i = a.__v_raw, l = X(i), u = t ? qo : e ? Yo : Se;
      return !e && Ie(l, "iterate", Gt), i.forEach((c, d) => o.call(s, u(c), u(d), a));
    }
  };
  return pe(
    r,
    e ? {
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear")
    } : {
      add(o) {
        !t && !tt(o) && !er(o) && (o = X(o));
        const s = X(this);
        return dn(s).has.call(s, o) || (s.add(o), At(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !tt(s) && !er(s) && (s = X(s));
        const a = X(this), { has: i, get: l } = dn(a);
        let u = i.call(a, o);
        u || (o = X(o), u = i.call(a, o));
        const c = l.call(a, o);
        return a.set(o, s), u ? Dt(s, c) && At(a, "set", o, s) : At(a, "add", o, s), this;
      },
      delete(o) {
        const s = X(this), { has: a, get: i } = dn(s);
        let l = a.call(s, o);
        l || (o = X(o), l = a.call(s, o)), i && i.call(s, o);
        const u = s.delete(o);
        return l && At(s, "delete", o, void 0), u;
      },
      clear() {
        const o = X(this), s = o.size !== 0, a = o.clear();
        return s && At(
          o,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = Cg(o, e, t);
  }), r;
}
function Da(e, t) {
  const r = vg(e, t);
  return (n, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    re(r, o) && o in n ? r : n,
    o,
    s
  );
}
const bg = {
  get: /* @__PURE__ */ Da(!1, !1)
}, Ig = {
  get: /* @__PURE__ */ Da(!1, !0)
}, yg = {
  get: /* @__PURE__ */ Da(!0, !1)
};
const Il = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), xg = /* @__PURE__ */ new WeakMap();
function wg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wg(Yd(e));
}
function xt(e) {
  return er(e) ? e : ja(
    e,
    !1,
    pg,
    bg,
    Il
  );
}
function Sg(e) {
  return ja(
    e,
    !1,
    Ag,
    Ig,
    yl
  );
}
function Ma(e) {
  return ja(
    e,
    !0,
    hg,
    yg,
    xl
  );
}
function ja(e, t, r, n, o) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const a = Tg(e);
  if (a === 0)
    return e;
  const i = new Proxy(
    e,
    a === 2 ? n : r
  );
  return o.set(e, i), i;
}
function jr(e) {
  return er(e) ? jr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function er(e) {
  return !!(e && e.__v_isReadonly);
}
function tt(e) {
  return !!(e && e.__v_isShallow);
}
function Na(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Eg(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && Ln(e, "__v_skip", !0), e;
}
const Se = (e) => ce(e) ? xt(e) : e, Yo = (e) => ce(e) ? Ma(e) : e;
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return wl(e, !1);
}
function De(e) {
  return wl(e, !0);
}
function wl(e, t) {
  return me(e) ? e : new Pg(e, t);
}
class Pg {
  constructor(t, r) {
    this.dep = new _a(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : X(t), this._value = r ? t : Se(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || tt(t) || er(t);
    t = n ? t : X(t), Dt(t, r) && (this._rawValue = t, this._value = n ? t : Se(t), this.dep.trigger());
  }
}
function Og(e) {
  return me(e) ? e.value : e;
}
const Fg = {
  get: (e, t, r) => t === "__v_raw" ? e : Og(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return me(o) && !me(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Tl(e) {
  return jr(e) ? e : new Proxy(e, Fg);
}
function Sl(e) {
  const t = G(e) ? new Array(e.length) : {};
  for (const r in e)
    t[r] = El(e, r);
  return t;
}
class Lg {
  constructor(t, r, n) {
    this._object = t, this._key = r, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return cg(X(this._object), this._key);
  }
}
class Rg {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function _g(e, t, r) {
  return me(e) ? e : K(e) ? new Rg(e) : ce(e) && arguments.length > 1 ? El(e, t, r) : Pe(e);
}
function El(e, t, r) {
  const n = e[t];
  return me(n) ? n : new Lg(e, t, r);
}
class kg {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new _a(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return gl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Dg(e, t, r = !1) {
  let n, o;
  return K(e) ? n = e : (n = e.get, o = e.set), new kg(n, o, r);
}
const fn = {}, _n = /* @__PURE__ */ new WeakMap();
let Wt;
function Mg(e, t = !1, r = Wt) {
  if (r) {
    let n = _n.get(r);
    n || _n.set(r, n = []), n.push(e);
  }
}
function jg(e, t, r = ae) {
  const { immediate: n, deep: o, once: s, scheduler: a, augmentJob: i, call: l } = r, u = (N) => o ? N : tt(N) || o === !1 || o === 0 ? Ct(N, 1) : Ct(N);
  let c, d, m, p, A = !1, C = !1;
  if (me(e) ? (d = () => e.value, A = tt(e)) : jr(e) ? (d = () => u(e), A = !0) : G(e) ? (C = !0, A = e.some((N) => jr(N) || tt(N)), d = () => e.map((N) => {
    if (me(N))
      return N.value;
    if (jr(N))
      return u(N);
    if (K(N))
      return l ? l(N, 2) : N();
  })) : K(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (m) {
      jt();
      try {
        m();
      } finally {
        Nt();
      }
    }
    const N = Wt;
    Wt = c;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Wt = N;
    }
  } : d = Xe, t && o) {
    const N = d, J = o === !0 ? 1 / 0 : o;
    d = () => Ct(N(), J);
  }
  const Z = sg(), R = () => {
    c.stop(), Z && Z.active && Sa(Z.effects, c);
  };
  if (s && t) {
    const N = t;
    t = (...J) => {
      N(...J), R();
    };
  }
  let V = C ? new Array(e.length).fill(fn) : fn;
  const j = (N) => {
    if (!(!(c.flags & 1) || !c.dirty && !N))
      if (t) {
        const J = c.run();
        if (o || A || (C ? J.some((E, F) => Dt(E, V[F])) : Dt(J, V))) {
          m && m();
          const E = Wt;
          Wt = c;
          try {
            const F = [
              J,
              // pass undefined as the old value when it's changed for the first time
              V === fn ? void 0 : C && V[0] === fn ? [] : V,
              p
            ];
            l ? l(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            ), V = J;
          } finally {
            Wt = E;
          }
        }
      } else
        c.run();
  };
  return i && i(j), c = new ul(d), c.scheduler = a ? () => a(j, !1) : j, p = (N) => Mg(N, !1, c), m = c.onStop = () => {
    const N = _n.get(c);
    if (N) {
      if (l)
        l(N, 4);
      else
        for (const J of N) J();
      _n.delete(c);
    }
  }, t ? n ? j(!0) : V = c.run() : a ? a(j.bind(null, !0), !0) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
}
function Ct(e, t = 1 / 0, r) {
  if (t <= 0 || !ce(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, me(e))
    Ct(e.value, t, r);
  else if (G(e))
    for (let n = 0; n < e.length; n++)
      Ct(e[n], t, r);
  else if (Jd(e) || _r(e))
    e.forEach((n) => {
      Ct(n, t, r);
    });
  else if ($d(e)) {
    for (const n in e)
      Ct(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ct(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function rn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    eo(o, t, r);
  }
}
function rt(e, t, r, n) {
  if (K(e)) {
    const o = rn(e, t, r, n);
    return o && il(o) && o.catch((s) => {
      eo(s, t, r);
    }), o;
  }
  if (G(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(rt(e[s], t, r, n));
    return o;
  }
}
function eo(e, t, r, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = t && t.appContext.config || ae;
  if (t) {
    let i = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, u) === !1)
            return;
      }
      i = i.parent;
    }
    if (s) {
      jt(), rn(s, null, 10, [
        e,
        l,
        u
      ]), Nt();
      return;
    }
  }
  Ng(e, r, o, n, a);
}
function Ng(e, t, r, n = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Ee = [];
let ut = -1;
const gr = [];
let Ft = null, ur = 0;
const Pl = /* @__PURE__ */ Promise.resolve();
let kn = null;
function hr(e) {
  const t = kn || Pl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bg(e) {
  let t = ut + 1, r = Ee.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = Ee[n], s = Jr(o);
    s < e || s === e && o.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ba(e) {
  if (!(e.flags & 1)) {
    const t = Jr(e), r = Ee[Ee.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jr(r) ? Ee.push(e) : Ee.splice(Bg(t), 0, e), e.flags |= 1, Ol();
  }
}
function Ol() {
  kn || (kn = Pl.then(Ll));
}
function Ug(e) {
  G(e) ? gr.push(...e) : Ft && e.id === -1 ? Ft.splice(ur + 1, 0, e) : e.flags & 1 || (gr.push(e), e.flags |= 1), Ol();
}
function hs(e, t, r = ut + 1) {
  for (; r < Ee.length; r++) {
    const n = Ee[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Ee.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Fl(e) {
  if (gr.length) {
    const t = [...new Set(gr)].sort(
      (r, n) => Jr(r) - Jr(n)
    );
    if (gr.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, ur = 0; ur < Ft.length; ur++) {
      const r = Ft[ur];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Ft = null, ur = 0;
  }
}
const Jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ll(e) {
  try {
    for (ut = 0; ut < Ee.length; ut++) {
      const t = Ee[ut];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ut < Ee.length; ut++) {
      const t = Ee[ut];
      t && (t.flags &= -2);
    }
    ut = -1, Ee.length = 0, Fl(), kn = null, (Ee.length || gr.length) && Ll();
  }
}
let gt, Or = [], $o = !1;
function to(e, ...t) {
  gt ? gt.emit(e, ...t) : $o || Or.push({ event: e, args: t });
}
function Rl(e, t) {
  var r, n;
  gt = e, gt ? (gt.enabled = !0, Or.forEach(({ event: o, args: s }) => gt.emit(o, ...s)), Or = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Rl(s, t);
  }), setTimeout(() => {
    gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $o = !0, Or = []);
  }, 3e3)) : ($o = !0, Or = []);
}
function Vg(e, t) {
  to("app:init", e, t, {
    Fragment: Ve,
    Text: nn,
    Comment: He,
    Static: yn
  });
}
function Hg(e) {
  to("app:unmount", e);
}
const Zg = /* @__PURE__ */ Ua(
  "component:added"
  /* COMPONENT_ADDED */
), _l = /* @__PURE__ */ Ua(
  "component:updated"
  /* COMPONENT_UPDATED */
), zg = /* @__PURE__ */ Ua(
  "component:removed"
  /* COMPONENT_REMOVED */
), Wg = (e) => {
  gt && typeof gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !gt.cleanupBuffer(e) && zg(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  return (t) => {
    to(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
function Jg(e, t, r) {
  to(
    "component:emit",
    e.appContext.app,
    e,
    t,
    r
  );
}
let ke = null, kl = null;
function Dn(e) {
  const t = ke;
  return ke = e, kl = e && e.type.__scopeId || null, t;
}
function qg(e, t = ke, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && Fs(-1);
    const s = Dn(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Dn(s), n._d && Fs(1);
    }
    return __VUE_PROD_DEVTOOLS__ && _l(t), a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Yg(e, t) {
  if (ke === null)
    return e;
  const r = io(ke), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, i, l = ae] = t[o];
    s && (K(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ct(a), n.push({
      dir: s,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function Vt(e, t, r, n) {
  const o = e.dirs, s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[n];
    l && (jt(), rt(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const Dl = Symbol("_vte"), Ml = (e) => e.__isTeleport, Nr = (e) => e && (e.disabled || e.disabled === ""), As = (e) => e && (e.defer || e.defer === ""), Cs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, vs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Go = (e, t) => {
  const r = e && e.to;
  return he(r) ? t ? t(r) : null : r;
}, jl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, r, n, o, s, a, i, l, u) {
    const {
      mc: c,
      pc: d,
      pbc: m,
      o: { insert: p, querySelector: A, createText: C, createComment: Z }
    } = u, R = Nr(t.props);
    let { shapeFlag: V, children: j, dynamicChildren: N } = t;
    if (e == null) {
      const J = t.el = C(""), E = t.anchor = C("");
      p(J, r, n), p(E, r, n);
      const F = (v, O) => {
        V & 16 && (o && o.isCE && (o.ce._teleportTarget = v), c(
          j,
          v,
          O,
          o,
          s,
          a,
          i,
          l
        ));
      }, h = () => {
        const v = t.target = Go(t.props, A), O = Nl(v, t, C, p);
        v && (a !== "svg" && Cs(v) ? a = "svg" : a !== "mathml" && vs(v) && (a = "mathml"), R || (F(v, O), In(t, !1)));
      };
      R && (F(r, E), In(t, !0)), As(t.props) ? we(() => {
        h(), t.el.__isMounted = !0;
      }, s) : h();
    } else {
      if (As(t.props) && !e.el.__isMounted) {
        we(() => {
          jl.process(
            e,
            t,
            r,
            n,
            o,
            s,
            a,
            i,
            l,
            u
          ), delete e.el.__isMounted;
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const J = t.anchor = e.anchor, E = t.target = e.target, F = t.targetAnchor = e.targetAnchor, h = Nr(e.props), v = h ? r : E, O = h ? J : F;
      if (a === "svg" || Cs(E) ? a = "svg" : (a === "mathml" || vs(E)) && (a = "mathml"), N ? (m(
        e.dynamicChildren,
        N,
        v,
        o,
        s,
        a,
        i
      ), Wa(e, t, !0)) : l || d(
        e,
        t,
        v,
        O,
        o,
        s,
        a,
        i,
        !1
      ), R)
        h ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : mn(
          t,
          r,
          J,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const L = t.target = Go(
          t.props,
          A
        );
        L && mn(
          t,
          L,
          null,
          u,
          0
        );
      } else h && mn(
        t,
        E,
        F,
        u,
        1
      );
      In(t, R);
    }
  },
  remove(e, t, r, { um: n, o: { remove: o } }, s) {
    const {
      shapeFlag: a,
      children: i,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: m
    } = e;
    if (d && (o(u), o(c)), s && o(l), a & 16) {
      const p = s || !Nr(m);
      for (let A = 0; A < i.length; A++) {
        const C = i[A];
        n(
          C,
          t,
          r,
          p,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: mn,
  hydrate: $g
};
function mn(e, t, r, { o: { insert: n }, m: o }, s = 2) {
  s === 0 && n(e.targetAnchor, t, r);
  const { el: a, anchor: i, shapeFlag: l, children: u, props: c } = e, d = s === 2;
  if (d && n(a, t, r), (!d || Nr(c)) && l & 16)
    for (let m = 0; m < u.length; m++)
      o(
        u[m],
        t,
        r,
        2
      );
  d && n(i, t, r);
}
function $g(e, t, r, n, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: u, createText: c }
}, d) {
  const m = t.target = Go(
    t.props,
    l
  );
  if (m) {
    const p = Nr(t.props), A = m._lpa || m.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = d(
          a(e),
          t,
          i(e),
          r,
          n,
          o,
          s
        ), t.targetStart = A, t.targetAnchor = A && a(A);
      else {
        t.anchor = a(e);
        let C = A;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, m._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          C = a(C);
        }
        t.targetAnchor || Nl(m, t, c, u), d(
          A && a(A),
          t,
          m,
          r,
          n,
          o,
          s
        );
      }
    In(t, p);
  }
  return t.anchor && a(t.anchor);
}
const Gg = jl;
function In(e, t) {
  const r = e.ctx;
  if (r && r.ut) {
    let n, o;
    for (t ? (n = e.el, o = e.anchor) : (n = e.targetStart, o = e.targetAnchor); n && n !== o; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", r.uid), n = n.nextSibling;
    r.ut();
  }
}
function Nl(e, t, r, n) {
  const o = t.targetStart = r(""), s = t.targetAnchor = r("");
  return o[Dl] = s, e && (n(o, e), n(s, e)), s;
}
const Lt = Symbol("_leaveCb"), pn = Symbol("_enterCb");
function Bl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ha(() => {
    e.isMounted = !0;
  }), Za(() => {
    e.isUnmounting = !0;
  }), e;
}
const qe = [Function, Array], Ul = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: qe,
  onEnter: qe,
  onAfterEnter: qe,
  onEnterCancelled: qe,
  // leave
  onBeforeLeave: qe,
  onLeave: qe,
  onAfterLeave: qe,
  onLeaveCancelled: qe,
  // appear
  onBeforeAppear: qe,
  onAppear: qe,
  onAfterAppear: qe,
  onAppearCancelled: qe
}, Vl = (e) => {
  const t = e.subTree;
  return t.component ? Vl(t.component) : t;
}, Kg = {
  name: "BaseTransition",
  props: Ul,
  setup(e, { slots: t }) {
    const r = so(), n = Bl();
    return () => {
      const o = t.default && Va(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = Hl(o), a = X(e), { mode: i } = a;
      if (n.isLeaving)
        return bo(s);
      const l = bs(s);
      if (!l)
        return bo(s);
      let u = qr(
        l,
        a,
        n,
        r,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      l.type !== He && tr(l, u);
      let c = r.subTree && bs(r.subTree);
      if (c && c.type !== He && !Jt(l, c) && Vl(r).type !== He) {
        let d = qr(
          c,
          a,
          n,
          r
        );
        if (tr(c, d), i === "out-in" && l.type !== He)
          return n.isLeaving = !0, d.afterLeave = () => {
            n.isLeaving = !1, r.job.flags & 8 || r.update(), delete d.afterLeave, c = void 0;
          }, bo(s);
        i === "in-out" && l.type !== He ? d.delayLeave = (m, p, A) => {
          const C = Zl(
            n,
            c
          );
          C[String(c.key)] = c, m[Lt] = () => {
            p(), m[Lt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            A(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function Hl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== He) {
        t = r;
        break;
      }
  }
  return t;
}
const Qg = Kg;
function Zl(e, t) {
  const { leavingVNodes: r } = e;
  let n = r.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(t.type, n)), n;
}
function qr(e, t, r, n, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: m,
    onLeave: p,
    onAfterLeave: A,
    onLeaveCancelled: C,
    onBeforeAppear: Z,
    onAppear: R,
    onAfterAppear: V,
    onAppearCancelled: j
  } = t, N = String(e.key), J = Zl(r, e), E = (v, O) => {
    v && rt(
      v,
      n,
      9,
      O
    );
  }, F = (v, O) => {
    const L = O[1];
    E(v, O), G(v) ? v.every((I) => I.length <= 1) && L() : v.length <= 1 && L();
  }, h = {
    mode: a,
    persisted: i,
    beforeEnter(v) {
      let O = l;
      if (!r.isMounted)
        if (s)
          O = Z || l;
        else
          return;
      v[Lt] && v[Lt](
        !0
        /* cancelled */
      );
      const L = J[N];
      L && Jt(e, L) && L.el[Lt] && L.el[Lt](), E(O, [v]);
    },
    enter(v) {
      let O = u, L = c, I = d;
      if (!r.isMounted)
        if (s)
          O = R || u, L = V || c, I = j || d;
        else
          return;
      let y = !1;
      const U = v[pn] = (D) => {
        y || (y = !0, D ? E(I, [v]) : E(L, [v]), h.delayedLeave && h.delayedLeave(), v[pn] = void 0);
      };
      O ? F(O, [v, U]) : U();
    },
    leave(v, O) {
      const L = String(e.key);
      if (v[pn] && v[pn](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return O();
      E(m, [v]);
      let I = !1;
      const y = v[Lt] = (U) => {
        I || (I = !0, O(), U ? E(C, [v]) : E(A, [v]), v[Lt] = void 0, J[L] === e && delete J[L]);
      };
      J[L] = e, p ? F(p, [v, y]) : y();
    },
    clone(v) {
      const O = qr(
        v,
        t,
        r,
        n,
        o
      );
      return o && o(O), O;
    }
  };
  return h;
}
function bo(e) {
  if (ro(e))
    return e = Mt(e), e.children = null, e;
}
function bs(e) {
  if (!ro(e))
    return Ml(e.type) && e.children ? Hl(e.children) : e;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && K(r.default))
      return r.default();
  }
}
function tr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, tr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Va(e, t = !1, r) {
  let n = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = r == null ? a.key : String(r) + String(a.key != null ? a.key : s);
    a.type === Ve ? (a.patchFlag & 128 && o++, n = n.concat(
      Va(a.children, t, i)
    )) : (t || a.type !== He) && n.push(i != null ? Mt(a, { key: i }) : a);
  }
  if (o > 1)
    for (let s = 0; s < n.length; s++)
      n[s].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xg(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function ef() {
  const e = so();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function zl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Mn(e, t, r, n, o = !1) {
  if (G(e)) {
    e.forEach(
      (A, C) => Mn(
        A,
        t && (G(t) ? t[C] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (Br(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Mn(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? io(n.component) : n.el, a = o ? null : s, { i, r: l } = e, u = t && t.r, c = i.refs === ae ? i.refs = {} : i.refs, d = i.setupState, m = X(d), p = d === ae ? () => !1 : (A) => re(m, A);
  if (u != null && u !== l && (he(u) ? (c[u] = null, p(u) && (d[u] = null)) : me(u) && (u.value = null)), K(l))
    rn(l, i, 12, [a, c]);
  else {
    const A = he(l), C = me(l);
    if (A || C) {
      const Z = () => {
        if (e.f) {
          const R = A ? p(l) ? d[l] : c[l] : l.value;
          o ? G(R) && Sa(R, s) : G(R) ? R.includes(s) || R.push(s) : A ? (c[l] = [s], p(l) && (d[l] = c[l])) : (l.value = [s], e.k && (c[e.k] = l.value));
        } else A ? (c[l] = a, p(l) && (d[l] = a)) : C && (l.value = a, e.k && (c[e.k] = a));
      };
      a ? (Z.id = -1, we(Z, r)) : Z();
    }
  }
}
$t().requestIdleCallback;
$t().cancelIdleCallback;
const Br = (e) => !!e.type.__asyncLoader, ro = (e) => e.type.__isKeepAlive;
function tf(e, t) {
  Wl(e, "a", t);
}
function rf(e, t) {
  Wl(e, "da", t);
}
function Wl(e, t, r = ve) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (no(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      ro(o.parent.vnode) && nf(n, t, r, o), o = o.parent;
  }
}
function nf(e, t, r, n) {
  const o = no(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ql(() => {
    Sa(n[t], o);
  }, r);
}
function no(e, t, r = ve, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...a) => {
      jt();
      const i = on(r), l = rt(t, r, e, a);
      return i(), Nt(), l;
    });
    return n ? o.unshift(s) : o.push(s), s;
  }
}
const wt = (e) => (t, r = ve) => {
  (!Yr || e === "sp") && no(e, (...n) => t(...n), r);
}, of = wt("bm"), Ha = wt("m"), af = wt(
  "bu"
), Jl = wt("u"), Za = wt(
  "bum"
), ql = wt("um"), sf = wt(
  "sp"
), lf = wt("rtg"), cf = wt("rtc");
function uf(e, t = ve) {
  no("ec", e, t);
}
const Yl = "components", df = "directives";
function gf(e, t) {
  return $l(Yl, e, !0, t) || e;
}
const ff = Symbol.for("v-ndc");
function mf(e) {
  return $l(df, e);
}
function $l(e, t, r = !0, n = !1) {
  const o = ke || ve;
  if (o) {
    const s = o.type;
    if (e === Yl) {
      const i = tm(
        s,
        !1
      );
      if (i && (i === t || i === Ke(t) || i === Xn(Ke(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Is(o[e] || s[e], t) || // global registration
      Is(o.appContext[e], t)
    );
    return !a && n ? s : a;
  }
}
function Is(e, t) {
  return e && (e[t] || e[Ke(t)] || e[Xn(Ke(t))]);
}
const Ko = (e) => e ? fc(e) ? io(e) : Ko(e.parent) : null, Ur = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ko(e.parent),
    $root: (e) => Ko(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => __VUE_OPTIONS_API__ ? Kl(e) : e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ba(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hr.bind(e.proxy)),
    $watch: (e) => __VUE_OPTIONS_API__ ? Mf.bind(e) : Xe
  })
), Io = (e, t) => e !== ae && !e.__isScriptSetup && re(e, t), pf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: o, props: s, accessCache: a, type: i, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const p = a[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (Io(n, t))
          return a[t] = 1, n[t];
        if (o !== ae && re(o, t))
          return a[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && re(u, t)
        )
          return a[t] = 3, s[t];
        if (r !== ae && re(r, t))
          return a[t] = 4, r[t];
        (!__VUE_OPTIONS_API__ || Qo) && (a[t] = 0);
      }
    }
    const c = Ur[t];
    let d, m;
    if (c)
      return t === "$attrs" && Ie(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = i.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== ae && re(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      m = l.config.globalProperties, re(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: s } = e;
    return Io(o, t) ? (o[t] = r, !0) : n !== ae && re(n, t) ? (n[t] = r, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: s }
  }, a) {
    let i;
    return !!r[a] || e !== ae && re(e, a) || Io(t, a) || (i = s[0]) && re(i, a) || re(n, a) || re(Ur, a) || re(o.config.globalProperties, a);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : re(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function ys(e) {
  return G(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Qo = !0;
function hf(e) {
  const t = Kl(e), r = e.proxy, n = e.ctx;
  Qo = !1, t.beforeCreate && xs(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: a,
    watch: i,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: m,
    beforeUpdate: p,
    updated: A,
    activated: C,
    deactivated: Z,
    beforeDestroy: R,
    beforeUnmount: V,
    destroyed: j,
    unmounted: N,
    render: J,
    renderTracked: E,
    renderTriggered: F,
    errorCaptured: h,
    serverPrefetch: v,
    // public API
    expose: O,
    inheritAttrs: L,
    // assets
    components: I,
    directives: y,
    filters: U
  } = t;
  if (u && Af(u, n, null), a)
    for (const z in a) {
      const H = a[z];
      K(H) && (n[z] = H.bind(r));
    }
  if (o) {
    const z = o.call(r, r);
    ce(z) && (e.data = xt(z));
  }
  if (Qo = !0, s)
    for (const z in s) {
      const H = s[z], se = K(H) ? H.bind(r, r) : K(H.get) ? H.get.bind(r, r) : Xe, ue = !K(H) && K(H.set) ? H.set.bind(r) : Xe, Ae = Q({
        get: se,
        set: ue
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (Je) => Ae.value = Je
      });
    }
  if (i)
    for (const z in i)
      Gl(i[z], n, r, z);
  if (l) {
    const z = K(l) ? l.call(r) : l;
    Reflect.ownKeys(z).forEach((H) => {
      oo(H, z[H]);
    });
  }
  c && xs(c, e, "c");
  function q(z, H) {
    G(H) ? H.forEach((se) => z(se.bind(r))) : H && z(H.bind(r));
  }
  if (q(of, d), q(Ha, m), q(af, p), q(Jl, A), q(tf, C), q(rf, Z), q(uf, h), q(cf, E), q(lf, F), q(Za, V), q(ql, N), q(sf, v), G(O))
    if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((H) => {
        Object.defineProperty(z, H, {
          get: () => r[H],
          set: (se) => r[H] = se
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Xe && (e.render = J), L != null && (e.inheritAttrs = L), I && (e.components = I), y && (e.directives = y), v && zl(e);
}
function Af(e, t, r = Xe) {
  G(e) && (e = Xo(e));
  for (const n in e) {
    const o = e[n];
    let s;
    ce(o) ? "default" in o ? s = mt(
      o.from || n,
      o.default,
      !0
    ) : s = mt(o.from || n) : s = mt(o), me(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[n] = s;
  }
}
function xs(e, t, r) {
  rt(
    G(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Gl(e, t, r, n) {
  let o = n.includes(".") ? cc(r, n) : () => r[n];
  if (he(e)) {
    const s = t[e];
    K(s) && de(o, s);
  } else if (K(e))
    de(o, e.bind(r));
  else if (ce(e))
    if (G(e))
      e.forEach((s) => Gl(s, t, r, n));
    else {
      const s = K(e.handler) ? e.handler.bind(r) : t[e.handler];
      K(s) && de(o, s, e);
    }
}
function Kl(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !r && !n ? l = t : (l = {}, o.length && o.forEach(
    (u) => jn(l, u, a, !0)
  ), jn(l, t, a)), ce(t) && s.set(t, l), l;
}
function jn(e, t, r, n = !1) {
  const { mixins: o, extends: s } = t;
  s && jn(e, s, r, !0), o && o.forEach(
    (a) => jn(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const i = Cf[a] || r && r[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const Cf = {
  data: ws,
  props: Ts,
  emits: Ts,
  // objects
  methods: Fr,
  computed: Fr,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: Fr,
  directives: Fr,
  // watch
  watch: bf,
  // provide / inject
  provide: ws,
  inject: vf
};
function ws(e, t) {
  return t ? e ? function() {
    return pe(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vf(e, t) {
  return Fr(Xo(e), Xo(t));
}
function Xo(e) {
  if (G(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fr(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ts(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    ys(e),
    ys(t ?? {})
  ) : t;
}
function bf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = pe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = xe(e[n], t[n]);
  return r;
}
function Ql() {
  return {
    app: null,
    config: {
      isNativeTag: zd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let If = 0;
function yf(e, t) {
  return function(n, o = null) {
    K(n) || (n = pe({}, n)), o != null && !ce(o) && (o = null);
    const s = Ql(), a = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const u = s.app = {
      _uid: If++,
      _component: n,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: _s,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return a.has(c) || (c && K(c.install) ? (a.add(c), c.install(u, ...d)) : K(c) && (a.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return __VUE_OPTIONS_API__ && (s.mixins.includes(c) || s.mixins.push(c)), u;
      },
      component(c, d) {
        return d ? (s.components[c] = d, u) : s.components[c];
      },
      directive(c, d) {
        return d ? (s.directives[c] = d, u) : s.directives[c];
      },
      mount(c, d, m) {
        if (!l) {
          const p = u._ceVNode || ne(n, o);
          return p.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(p, c, m), l = !0, u._container = c, c.__vue_app__ = u, __VUE_PROD_DEVTOOLS__ && (u._instance = p.component, Vg(u, _s)), io(p.component);
        }
      },
      onUnmount(c) {
        i.push(c);
      },
      unmount() {
        l && (rt(
          i,
          u._instance,
          16
        ), e(null, u._container), __VUE_PROD_DEVTOOLS__ && (u._instance = null, Hg(u)), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return s.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = fr;
        fr = u;
        try {
          return c();
        } finally {
          fr = d;
        }
      }
    };
    return u;
  };
}
let fr = null;
function oo(e, t) {
  if (ve) {
    let r = ve.provides;
    const n = ve.parent && ve.parent.provides;
    n === r && (r = ve.provides = Object.create(n)), r[e] = t;
  }
}
function mt(e, t, r = !1) {
  const n = ve || ke;
  if (n || fr) {
    const o = fr ? fr._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && K(t) ? t.call(n && n.proxy) : t;
  }
}
const Xl = {}, ec = () => Object.create(Xl), tc = (e) => Object.getPrototypeOf(e) === Xl;
function xf(e, t, r, n = !1) {
  const o = {}, s = ec();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rc(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  r ? e.props = n ? o : Sg(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function wf(e, t, r, n) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = X(o), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let m = c[d];
        if (ao(e.emitsOptions, m))
          continue;
        const p = t[m];
        if (l)
          if (re(s, m))
            p !== s[m] && (s[m] = p, u = !0);
          else {
            const A = Ke(m);
            o[A] = ea(
              l,
              i,
              A,
              p,
              e,
              !1
            );
          }
        else
          p !== s[m] && (s[m] = p, u = !0);
      }
    }
  } else {
    rc(e, t, o, s) && (u = !0);
    let c;
    for (const d in i)
      (!t || // for camelCase
      !re(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = nr(d)) === d || !re(t, c))) && (l ? r && // for camelCase
      (r[d] !== void 0 || // for kebab-case
      r[c] !== void 0) && (o[d] = ea(
        l,
        i,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (s !== i)
      for (const d in s)
        (!t || !re(t, d)) && (delete s[d], u = !0);
  }
  u && At(e.attrs, "set", "");
}
function rc(e, t, r, n) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (kr(l))
        continue;
      const u = t[l];
      let c;
      o && re(o, c = Ke(l)) ? !s || !s.includes(c) ? r[c] = u : (i || (i = {}))[c] = u : ao(e.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, a = !0);
    }
  if (s) {
    const l = X(r), u = i || ae;
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      r[d] = ea(
        o,
        l,
        d,
        u[d],
        e,
        !re(u, d)
      );
    }
  }
  return a;
}
function ea(e, t, r, n, o, s) {
  const a = e[r];
  if (a != null) {
    const i = re(a, "default");
    if (i && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && K(l)) {
        const { propsDefaults: u } = o;
        if (r in u)
          n = u[r];
        else {
          const c = on(o);
          n = u[r] = l.call(
            null,
            t
          ), c();
        }
      } else
        n = l;
      o.ce && o.ce._setProp(r, n);
    }
    a[
      0
      /* shouldCast */
    ] && (s && !i ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === nr(r)) && (n = !0));
  }
  return n;
}
const Tf = /* @__PURE__ */ new WeakMap();
function nc(e, t, r = !1) {
  const n = __VUE_OPTIONS_API__ && r ? Tf : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (__VUE_OPTIONS_API__ && !K(e)) {
    const c = (d) => {
      l = !0;
      const [m, p] = nc(d, t, !0);
      pe(a, m), p && i.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return ce(e) && n.set(e, Rr), Rr;
  if (G(s))
    for (let c = 0; c < s.length; c++) {
      const d = Ke(s[c]);
      Ss(d) && (a[d] = ae);
    }
  else if (s)
    for (const c in s) {
      const d = Ke(c);
      if (Ss(d)) {
        const m = s[c], p = a[d] = G(m) || K(m) ? { type: m } : pe({}, m), A = p.type;
        let C = !1, Z = !0;
        if (G(A))
          for (let R = 0; R < A.length; ++R) {
            const V = A[R], j = K(V) && V.name;
            if (j === "Boolean") {
              C = !0;
              break;
            } else j === "String" && (Z = !1);
          }
        else
          C = K(A) && A.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = Z, (C || re(p, "default")) && i.push(d);
      }
    }
  const u = [a, i];
  return ce(e) && n.set(e, u), u;
}
function Ss(e) {
  return e[0] !== "$" && !kr(e);
}
const oc = (e) => e[0] === "_" || e === "$stable", za = (e) => G(e) ? e.map(dt) : [dt(e)], Sf = (e, t, r) => {
  if (t._n)
    return t;
  const n = qg((...o) => za(t(...o)), r);
  return n._c = !1, n;
}, ac = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (oc(o)) continue;
    const s = e[o];
    if (K(s))
      t[o] = Sf(o, s, n);
    else if (s != null) {
      const a = za(s);
      t[o] = () => a;
    }
  }
}, sc = (e, t) => {
  const r = za(t);
  e.slots.default = () => r;
}, ic = (e, t, r) => {
  for (const n in t)
    (r || n !== "_") && (e[n] = t[n]);
}, Ef = (e, t, r) => {
  const n = e.slots = ec();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ic(n, t, r), r && Ln(n, "_", o, !0)) : ac(t, n);
  } else t && sc(e, t);
}, Pf = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let s = !0, a = ae;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? s = !1 : ic(o, t, r) : (s = !t.$stable, ac(t, o)), a = t;
  } else t && (sc(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !oc(i) && a[i] == null && delete o[i];
};
function Of() {
  typeof __VUE_OPTIONS_API__ != "boolean" && ($t().__VUE_OPTIONS_API__ = !0), typeof __VUE_PROD_DEVTOOLS__ != "boolean" && ($t().__VUE_PROD_DEVTOOLS__ = !1), typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && ($t().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const we = Zf;
function Ff(e) {
  return Lf(e);
}
function Lf(e, t) {
  Of();
  const r = $t();
  r.__VUE__ = !0, __VUE_PROD_DEVTOOLS__ && Rl(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const {
    insert: n,
    remove: o,
    patchProp: s,
    createElement: a,
    createText: i,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: m,
    setScopeId: p = Xe,
    insertStaticContent: A
  } = e, C = (g, f, b, S = null, x = null, T = null, M = void 0, k = null, _ = !!f.dynamicChildren) => {
    if (g === f)
      return;
    g && !Jt(g, f) && (S = te(g), Je(g, x, T, !0), g = null), f.patchFlag === -2 && (_ = !1, f.dynamicChildren = null);
    const { type: P, ref: Y, shapeFlag: B } = f;
    switch (P) {
      case nn:
        Z(g, f, b, S);
        break;
      case He:
        R(g, f, b, S);
        break;
      case yn:
        g == null && V(f, b, S, M);
        break;
      case Ve:
        I(
          g,
          f,
          b,
          S,
          x,
          T,
          M,
          k,
          _
        );
        break;
      default:
        B & 1 ? J(
          g,
          f,
          b,
          S,
          x,
          T,
          M,
          k,
          _
        ) : B & 6 ? y(
          g,
          f,
          b,
          S,
          x,
          T,
          M,
          k,
          _
        ) : (B & 64 || B & 128) && P.process(
          g,
          f,
          b,
          S,
          x,
          T,
          M,
          k,
          _,
          Cr
        );
    }
    Y != null && x && Mn(Y, g && g.ref, T, f || g, !f);
  }, Z = (g, f, b, S) => {
    if (g == null)
      n(
        f.el = i(f.children),
        b,
        S
      );
    else {
      const x = f.el = g.el;
      f.children !== g.children && u(x, f.children);
    }
  }, R = (g, f, b, S) => {
    g == null ? n(
      f.el = l(f.children || ""),
      b,
      S
    ) : f.el = g.el;
  }, V = (g, f, b, S) => {
    [g.el, g.anchor] = A(
      g.children,
      f,
      b,
      S,
      g.el,
      g.anchor
    );
  }, j = ({ el: g, anchor: f }, b, S) => {
    let x;
    for (; g && g !== f; )
      x = m(g), n(g, b, S), g = x;
    n(f, b, S);
  }, N = ({ el: g, anchor: f }) => {
    let b;
    for (; g && g !== f; )
      b = m(g), o(g), g = b;
    o(f);
  }, J = (g, f, b, S, x, T, M, k, _) => {
    f.type === "svg" ? M = "svg" : f.type === "math" && (M = "mathml"), g == null ? E(
      f,
      b,
      S,
      x,
      T,
      M,
      k,
      _
    ) : v(
      g,
      f,
      x,
      T,
      M,
      k,
      _
    );
  }, E = (g, f, b, S, x, T, M, k) => {
    let _, P;
    const { props: Y, shapeFlag: B, transition: W, dirs: $ } = g;
    if (_ = g.el = a(
      g.type,
      T,
      Y && Y.is,
      Y
    ), B & 8 ? c(_, g.children) : B & 16 && h(
      g.children,
      _,
      null,
      S,
      x,
      yo(g, T),
      M,
      k
    ), $ && Vt(g, null, S, "created"), F(_, g, g.scopeId, M, S), Y) {
      for (const ie in Y)
        ie !== "value" && !kr(ie) && s(_, ie, null, Y[ie], T, S);
      "value" in Y && s(_, "value", null, Y.value, T), (P = Y.onVnodeBeforeMount) && lt(P, S, g);
    }
    __VUE_PROD_DEVTOOLS__ && (Ln(_, "__vnode", g, !0), Ln(_, "__vueParentComponent", S, !0)), $ && Vt(g, null, S, "beforeMount");
    const ee = Rf(x, W);
    ee && W.beforeEnter(_), n(_, f, b), ((P = Y && Y.onVnodeMounted) || ee || $) && we(() => {
      P && lt(P, S, g), ee && W.enter(_), $ && Vt(g, null, S, "mounted");
    }, x);
  }, F = (g, f, b, S, x) => {
    if (b && p(g, b), S)
      for (let T = 0; T < S.length; T++)
        p(g, S[T]);
    if (x) {
      let T = x.subTree;
      if (f === T || dc(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const M = x.vnode;
        F(
          g,
          M,
          M.scopeId,
          M.slotScopeIds,
          x.parent
        );
      }
    }
  }, h = (g, f, b, S, x, T, M, k, _ = 0) => {
    for (let P = _; P < g.length; P++) {
      const Y = g[P] = k ? Rt(g[P]) : dt(g[P]);
      C(
        null,
        Y,
        f,
        b,
        S,
        x,
        T,
        M,
        k
      );
    }
  }, v = (g, f, b, S, x, T, M) => {
    const k = f.el = g.el;
    __VUE_PROD_DEVTOOLS__ && (k.__vnode = f);
    let { patchFlag: _, dynamicChildren: P, dirs: Y } = f;
    _ |= g.patchFlag & 16;
    const B = g.props || ae, W = f.props || ae;
    let $;
    if (b && Ht(b, !1), ($ = W.onVnodeBeforeUpdate) && lt($, b, f, g), Y && Vt(f, g, b, "beforeUpdate"), b && Ht(b, !0), (B.innerHTML && W.innerHTML == null || B.textContent && W.textContent == null) && c(k, ""), P ? O(
      g.dynamicChildren,
      P,
      k,
      b,
      S,
      yo(f, x),
      T
    ) : M || H(
      g,
      f,
      k,
      null,
      b,
      S,
      yo(f, x),
      T,
      !1
    ), _ > 0) {
      if (_ & 16)
        L(k, B, W, b, x);
      else if (_ & 2 && B.class !== W.class && s(k, "class", null, W.class, x), _ & 4 && s(k, "style", B.style, W.style, x), _ & 8) {
        const ee = f.dynamicProps;
        for (let ie = 0; ie < ee.length; ie++) {
          const oe = ee[ie], Me = B[oe], Oe = W[oe];
          (Oe !== Me || oe === "value") && s(k, oe, Me, Oe, x, b);
        }
      }
      _ & 1 && g.children !== f.children && c(k, f.children);
    } else !M && P == null && L(k, B, W, b, x);
    (($ = W.onVnodeUpdated) || Y) && we(() => {
      $ && lt($, b, f, g), Y && Vt(f, g, b, "updated");
    }, S);
  }, O = (g, f, b, S, x, T, M) => {
    for (let k = 0; k < f.length; k++) {
      const _ = g[k], P = f[k], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(_, P) || // - In the case of a component, it could contain anything.
        _.shapeFlag & 70) ? d(_.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      C(
        _,
        P,
        Y,
        null,
        S,
        x,
        T,
        M,
        !0
      );
    }
  }, L = (g, f, b, S, x) => {
    if (f !== b) {
      if (f !== ae)
        for (const T in f)
          !kr(T) && !(T in b) && s(
            g,
            T,
            f[T],
            null,
            x,
            S
          );
      for (const T in b) {
        if (kr(T)) continue;
        const M = b[T], k = f[T];
        M !== k && T !== "value" && s(g, T, k, M, x, S);
      }
      "value" in b && s(g, "value", f.value, b.value, x);
    }
  }, I = (g, f, b, S, x, T, M, k, _) => {
    const P = f.el = g ? g.el : i(""), Y = f.anchor = g ? g.anchor : i("");
    let { patchFlag: B, dynamicChildren: W, slotScopeIds: $ } = f;
    $ && (k = k ? k.concat($) : $), g == null ? (n(P, b, S), n(Y, b, S), h(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      b,
      Y,
      x,
      T,
      M,
      k,
      _
    )) : B > 0 && B & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (O(
      g.dynamicChildren,
      W,
      b,
      x,
      T,
      M,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || x && f === x.subTree) && Wa(
      g,
      f,
      !0
      /* shallow */
    )) : H(
      g,
      f,
      b,
      Y,
      x,
      T,
      M,
      k,
      _
    );
  }, y = (g, f, b, S, x, T, M, k, _) => {
    f.slotScopeIds = k, g == null ? f.shapeFlag & 512 ? x.ctx.activate(
      f,
      b,
      S,
      M,
      _
    ) : U(
      f,
      b,
      S,
      x,
      T,
      M,
      _
    ) : D(g, f, _);
  }, U = (g, f, b, S, x, T, M) => {
    const k = g.component = Gf(
      g,
      S,
      x
    );
    if (ro(g) && (k.ctx.renderer = Cr), Kf(k, !1, M), k.asyncDep) {
      if (x && x.registerDep(k, q, M), !g.el) {
        const _ = k.subTree = ne(He);
        R(null, _, f, b);
      }
    } else
      q(
        k,
        g,
        f,
        b,
        x,
        T,
        M
      );
  }, D = (g, f, b) => {
    const S = f.component = g.component;
    if (Vf(g, f, b))
      if (S.asyncDep && !S.asyncResolved) {
        z(S, f, b);
        return;
      } else
        S.next = f, S.update();
    else
      f.el = g.el, S.vnode = f;
  }, q = (g, f, b, S, x, T, M) => {
    const k = () => {
      if (g.isMounted) {
        let { next: B, bu: W, u: $, parent: ee, vnode: ie } = g;
        {
          const st = lc(g);
          if (st) {
            B && (B.el = ie.el, z(g, B, M)), st.asyncDep.then(() => {
              g.isUnmounted || k();
            });
            return;
          }
        }
        let oe = B, Me;
        Ht(g, !1), B ? (B.el = ie.el, z(g, B, M)) : B = ie, W && ho(W), (Me = B.props && B.props.onVnodeBeforeUpdate) && lt(Me, ee, B, ie), Ht(g, !0);
        const Oe = Ps(g), at = g.subTree;
        g.subTree = Oe, C(
          at,
          Oe,
          // parent may have changed if it's in a teleport
          d(at.el),
          // anchor may have changed if it's in a fragment
          te(at),
          g,
          x,
          T
        ), B.el = Oe.el, oe === null && Hf(g, Oe.el), $ && we($, x), (Me = B.props && B.props.onVnodeUpdated) && we(
          () => lt(Me, ee, B, ie),
          x
        ), __VUE_PROD_DEVTOOLS__ && _l(g);
      } else {
        let B;
        const { el: W, props: $ } = f, { bm: ee, m: ie, parent: oe, root: Me, type: Oe } = g, at = Br(f);
        Ht(g, !1), ee && ho(ee), !at && (B = $ && $.onVnodeBeforeMount) && lt(B, oe, f), Ht(g, !0);
        {
          Me.ce && Me.ce._injectChildStyle(Oe);
          const st = g.subTree = Ps(g);
          C(
            null,
            st,
            b,
            S,
            g,
            x,
            T
          ), f.el = st.el;
        }
        if (ie && we(ie, x), !at && (B = $ && $.onVnodeMounted)) {
          const st = f;
          we(
            () => lt(B, oe, st),
            x
          );
        }
        (f.shapeFlag & 256 || oe && Br(oe.vnode) && oe.vnode.shapeFlag & 256) && g.a && we(g.a, x), g.isMounted = !0, __VUE_PROD_DEVTOOLS__ && Zg(g), f = b = S = null;
      }
    };
    g.scope.on();
    const _ = g.effect = new ul(k);
    g.scope.off();
    const P = g.update = _.run.bind(_), Y = g.job = _.runIfDirty.bind(_);
    Y.i = g, Y.id = g.uid, _.scheduler = () => Ba(Y), Ht(g, !0), P();
  }, z = (g, f, b) => {
    f.component = g;
    const S = g.vnode.props;
    g.vnode = f, g.next = null, wf(g, f.props, S, b), Pf(g, f.children, b), jt(), hs(g), Nt();
  }, H = (g, f, b, S, x, T, M, k, _ = !1) => {
    const P = g && g.children, Y = g ? g.shapeFlag : 0, B = f.children, { patchFlag: W, shapeFlag: $ } = f;
    if (W > 0) {
      if (W & 128) {
        ue(
          P,
          B,
          b,
          S,
          x,
          T,
          M,
          k,
          _
        );
        return;
      } else if (W & 256) {
        se(
          P,
          B,
          b,
          S,
          x,
          T,
          M,
          k,
          _
        );
        return;
      }
    }
    $ & 8 ? (Y & 16 && Bt(P, x, T), B !== P && c(b, B)) : Y & 16 ? $ & 16 ? ue(
      P,
      B,
      b,
      S,
      x,
      T,
      M,
      k,
      _
    ) : Bt(P, x, T, !0) : (Y & 8 && c(b, ""), $ & 16 && h(
      B,
      b,
      S,
      x,
      T,
      M,
      k,
      _
    ));
  }, se = (g, f, b, S, x, T, M, k, _) => {
    g = g || Rr, f = f || Rr;
    const P = g.length, Y = f.length, B = Math.min(P, Y);
    let W;
    for (W = 0; W < B; W++) {
      const $ = f[W] = _ ? Rt(f[W]) : dt(f[W]);
      C(
        g[W],
        $,
        b,
        null,
        x,
        T,
        M,
        k,
        _
      );
    }
    P > Y ? Bt(
      g,
      x,
      T,
      !0,
      !1,
      B
    ) : h(
      f,
      b,
      S,
      x,
      T,
      M,
      k,
      _,
      B
    );
  }, ue = (g, f, b, S, x, T, M, k, _) => {
    let P = 0;
    const Y = f.length;
    let B = g.length - 1, W = Y - 1;
    for (; P <= B && P <= W; ) {
      const $ = g[P], ee = f[P] = _ ? Rt(f[P]) : dt(f[P]);
      if (Jt($, ee))
        C(
          $,
          ee,
          b,
          null,
          x,
          T,
          M,
          k,
          _
        );
      else
        break;
      P++;
    }
    for (; P <= B && P <= W; ) {
      const $ = g[B], ee = f[W] = _ ? Rt(f[W]) : dt(f[W]);
      if (Jt($, ee))
        C(
          $,
          ee,
          b,
          null,
          x,
          T,
          M,
          k,
          _
        );
      else
        break;
      B--, W--;
    }
    if (P > B) {
      if (P <= W) {
        const $ = W + 1, ee = $ < Y ? f[$].el : S;
        for (; P <= W; )
          C(
            null,
            f[P] = _ ? Rt(f[P]) : dt(f[P]),
            b,
            ee,
            x,
            T,
            M,
            k,
            _
          ), P++;
      }
    } else if (P > W)
      for (; P <= B; )
        Je(g[P], x, T, !0), P++;
    else {
      const $ = P, ee = P, ie = /* @__PURE__ */ new Map();
      for (P = ee; P <= W; P++) {
        const je = f[P] = _ ? Rt(f[P]) : dt(f[P]);
        je.key != null && ie.set(je.key, P);
      }
      let oe, Me = 0;
      const Oe = W - ee + 1;
      let at = !1, st = 0;
      const vr = new Array(Oe);
      for (P = 0; P < Oe; P++) vr[P] = 0;
      for (P = $; P <= B; P++) {
        const je = g[P];
        if (Me >= Oe) {
          Je(je, x, T, !0);
          continue;
        }
        let it;
        if (je.key != null)
          it = ie.get(je.key);
        else
          for (oe = ee; oe <= W; oe++)
            if (vr[oe - ee] === 0 && Jt(je, f[oe])) {
              it = oe;
              break;
            }
        it === void 0 ? Je(je, x, T, !0) : (vr[it - ee] = P + 1, it >= st ? st = it : at = !0, C(
          je,
          f[it],
          b,
          null,
          x,
          T,
          M,
          k,
          _
        ), Me++);
      }
      const rs = at ? _f(vr) : Rr;
      for (oe = rs.length - 1, P = Oe - 1; P >= 0; P--) {
        const je = ee + P, it = f[je], ns = je + 1 < Y ? f[je + 1].el : S;
        vr[P] === 0 ? C(
          null,
          it,
          b,
          ns,
          x,
          T,
          M,
          k,
          _
        ) : at && (oe < 0 || P !== rs[oe] ? Ae(it, b, ns, 2) : oe--);
      }
    }
  }, Ae = (g, f, b, S, x = null) => {
    const { el: T, type: M, transition: k, children: _, shapeFlag: P } = g;
    if (P & 6) {
      Ae(g.component.subTree, f, b, S);
      return;
    }
    if (P & 128) {
      g.suspense.move(f, b, S);
      return;
    }
    if (P & 64) {
      M.move(g, f, b, Cr);
      return;
    }
    if (M === Ve) {
      n(T, f, b);
      for (let B = 0; B < _.length; B++)
        Ae(_[B], f, b, S);
      n(g.anchor, f, b);
      return;
    }
    if (M === yn) {
      j(g, f, b);
      return;
    }
    if (S !== 2 && P & 1 && k)
      if (S === 0)
        k.beforeEnter(T), n(T, f, b), we(() => k.enter(T), x);
      else {
        const { leave: B, delayLeave: W, afterLeave: $ } = k, ee = () => n(T, f, b), ie = () => {
          B(T, () => {
            ee(), $ && $();
          });
        };
        W ? W(T, ee, ie) : ie();
      }
    else
      n(T, f, b);
  }, Je = (g, f, b, S = !1, x = !1) => {
    const {
      type: T,
      props: M,
      ref: k,
      children: _,
      dynamicChildren: P,
      shapeFlag: Y,
      patchFlag: B,
      dirs: W,
      cacheIndex: $
    } = g;
    if (B === -2 && (x = !1), k != null && Mn(k, null, b, g, !0), $ != null && (f.renderCache[$] = void 0), Y & 256) {
      f.ctx.deactivate(g);
      return;
    }
    const ee = Y & 1 && W, ie = !Br(g);
    let oe;
    if (ie && (oe = M && M.onVnodeBeforeUnmount) && lt(oe, f, g), Y & 6)
      go(g.component, b, S);
    else {
      if (Y & 128) {
        g.suspense.unmount(b, S);
        return;
      }
      ee && Vt(g, null, f, "beforeUnmount"), Y & 64 ? g.type.remove(
        g,
        f,
        b,
        Cr,
        S
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Ve || B > 0 && B & 64) ? Bt(
        P,
        f,
        b,
        !1,
        !0
      ) : (T === Ve && B & 384 || !x && Y & 16) && Bt(_, f, b), S && Ar(g);
    }
    (ie && (oe = M && M.onVnodeUnmounted) || ee) && we(() => {
      oe && lt(oe, f, g), ee && Vt(g, null, f, "unmounted");
    }, b);
  }, Ar = (g) => {
    const { type: f, el: b, anchor: S, transition: x } = g;
    if (f === Ve) {
      ar(b, S);
      return;
    }
    if (f === yn) {
      N(g);
      return;
    }
    const T = () => {
      o(b), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (g.shapeFlag & 1 && x && !x.persisted) {
      const { leave: M, delayLeave: k } = x, _ = () => M(b, T);
      k ? k(g.el, T, _) : _();
    } else
      T();
  }, ar = (g, f) => {
    let b;
    for (; g !== f; )
      b = m(g), o(g), g = b;
    o(f);
  }, go = (g, f, b) => {
    const { bum: S, scope: x, job: T, subTree: M, um: k, m: _, a: P } = g;
    Es(_), Es(P), S && ho(S), x.stop(), T && (T.flags |= 8, Je(M, g, f, b)), k && we(k, f), we(() => {
      g.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), __VUE_PROD_DEVTOOLS__ && Wg(g);
  }, Bt = (g, f, b, S = !1, x = !1, T = 0) => {
    for (let M = T; M < g.length; M++)
      Je(g[M], f, b, S, x);
  }, te = (g) => {
    if (g.shapeFlag & 6)
      return te(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const f = m(g.anchor || g.el), b = f && f[Dl];
    return b ? m(b) : f;
  };
  let ot = !1;
  const ts = (g, f, b) => {
    g == null ? f._vnode && Je(f._vnode, null, null, !0) : C(
      f._vnode || null,
      g,
      f,
      null,
      null,
      null,
      b
    ), f._vnode = g, ot || (ot = !0, hs(), Fl(), ot = !1);
  }, Cr = {
    p: C,
    um: Je,
    m: Ae,
    r: Ar,
    mt: U,
    mc: h,
    pc: H,
    pbc: O,
    n: te,
    o: e
  };
  return {
    render: ts,
    hydrate: void 0,
    createApp: yf(ts)
  };
}
function yo({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Ht({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wa(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (G(n) && G(o))
    for (let s = 0; s < n.length; s++) {
      const a = n[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = Rt(o[s]), i.el = a.el), !r && i.patchFlag !== -2 && Wa(a, i)), i.type === nn && (i.el = a.el);
    }
}
function _f(e) {
  const t = e.slice(), r = [0];
  let n, o, s, a, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const u = e[n];
    if (u !== 0) {
      if (o = r[r.length - 1], e[o] < u) {
        t[n] = o, r.push(n);
        continue;
      }
      for (s = 0, a = r.length - 1; s < a; )
        i = s + a >> 1, e[r[i]] < u ? s = i + 1 : a = i;
      u < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, a = r[s - 1]; s-- > 0; )
    r[s] = a, a = t[a];
  return r;
}
function lc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : lc(t);
}
function Es(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kf = Symbol.for("v-scx"), Df = () => mt(kf);
function or(e, t) {
  return Ja(e, null, t);
}
function de(e, t, r) {
  return Ja(e, t, r);
}
function Ja(e, t, r = ae) {
  const { immediate: n, deep: o, flush: s, once: a } = r, i = pe({}, r), l = t && n || !t && s !== "post";
  let u;
  if (Yr) {
    if (s === "sync") {
      const p = Df();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Xe, p.resume = Xe, p.pause = Xe, p;
    }
  }
  const c = ve;
  i.call = (p, A, C) => rt(p, c, A, C);
  let d = !1;
  s === "post" ? i.scheduler = (p) => {
    we(p, c && c.suspense);
  } : s !== "sync" && (d = !0, i.scheduler = (p, A) => {
    A ? p() : Ba(p);
  }), i.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const m = jg(e, t, i);
  return Yr && (u ? u.push(m) : l && m()), m;
}
function Mf(e, t, r) {
  const n = this.proxy, o = he(e) ? e.includes(".") ? cc(n, e) : () => n[e] : e.bind(n, n);
  let s;
  K(t) ? s = t : (s = t.handler, r = t);
  const a = on(this), i = Ja(o, s.bind(n), r);
  return a(), i;
}
function cc(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
const jf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${nr(t)}Modifiers`];
function Nf(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ae;
  let o = r;
  const s = t.startsWith("update:"), a = s && jf(n, t.slice(7));
  a && (a.trim && (o = r.map((c) => he(c) ? c.trim() : c)), a.number && (o = r.map(Qd))), __VUE_PROD_DEVTOOLS__ && Jg(e, t, o);
  let i, l = n[i = po(t)] || // also try camelCase event handler (#2249)
  n[i = po(Ke(t))];
  !l && s && (l = n[i = po(nr(t))]), l && rt(
    l,
    e,
    6,
    o
  );
  const u = n[i + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, rt(
      u,
      e,
      6,
      o
    );
  }
}
function uc(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (__VUE_OPTIONS_API__ && !K(e)) {
    const l = (u) => {
      const c = uc(u, t, !0);
      c && (i = !0, pe(a, c));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (ce(e) && n.set(e, null), null) : (G(s) ? s.forEach((l) => a[l] = null) : pe(a, s), ce(e) && n.set(e, a), a);
}
function ao(e, t) {
  return !e || !Gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, nr(t)) || re(e, t));
}
function Ps(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    propsOptions: [s],
    slots: a,
    attrs: i,
    emit: l,
    render: u,
    renderCache: c,
    props: d,
    data: m,
    setupState: p,
    ctx: A,
    inheritAttrs: C
  } = e, Z = Dn(e);
  let R, V;
  try {
    if (r.shapeFlag & 4) {
      const N = o || n, J = N;
      R = dt(
        u.call(
          J,
          N,
          c,
          d,
          p,
          m,
          A
        )
      ), V = i;
    } else {
      const N = t;
      R = dt(
        N.length > 1 ? N(
          d,
          { attrs: i, slots: a, emit: l }
        ) : N(
          d,
          null
        )
      ), V = t.props ? i : Bf(i);
    }
  } catch (N) {
    eo(N, e, 1), R = ne(He);
  }
  let j = R;
  if (V && C !== !1) {
    const N = Object.keys(V), { shapeFlag: J } = j;
    N.length && J & 7 && (s && N.some(Ta) && (V = Uf(
      V,
      s
    )), j = Mt(j, V, !1, !0));
  }
  return r.dirs && (j = Mt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(r.dirs) : r.dirs), r.transition && tr(j, r.transition), R = j, Dn(Z), R;
}
const Bf = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Gn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Uf = (e, t) => {
  const r = {};
  for (const n in e)
    (!Ta(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Vf(e, t, r) {
  const { props: n, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Os(n, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const m = c[d];
        if (a[m] !== n[m] && !ao(u, m))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : n === a ? !1 : n ? a ? Os(n, a, u) : !0 : !!a;
  return !1;
}
function Os(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const s = n[o];
    if (t[s] !== e[s] && !ao(r, s))
      return !0;
  }
  return !1;
}
function Hf({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const dc = (e) => e.__isSuspense;
function Zf(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Ug(e);
}
const Ve = Symbol.for("v-fgt"), nn = Symbol.for("v-txt"), He = Symbol.for("v-cmt"), yn = Symbol.for("v-stc");
let kt = null, qa = 1;
function Fs(e, t = !1) {
  qa += e, e < 0 && kt && t && (kt.hasOnce = !0);
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gc = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || me(e) || K(e) ? { i: ke, r: e, k: t, f: !!r } : e : null);
function zf(e, t = null, r = null, n = 0, o = null, s = e === Ve ? 0 : 1, a = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gc(t),
    ref: t && xn(t),
    scopeId: kl,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ke
  };
  return i ? (Ya(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= he(r) ? 8 : 16), qa > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && kt.push(l), l;
}
const ne = Wf;
function Wf(e, t = null, r = null, n = 0, o = null, s = !1) {
  if ((!e || e === ff) && (e = He), Nn(e)) {
    const i = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ya(i, r), qa > 0 && !s && kt && (i.shapeFlag & 6 ? kt[kt.indexOf(e)] = i : kt.push(i)), i.patchFlag = -2, i;
  }
  if (rm(e) && (e = e.__vccOpts), t) {
    t = Jf(t);
    let { class: i, style: l } = t;
    i && !he(i) && (t.class = Oa(i)), ce(l) && (Na(l) && !G(l) && (l = pe({}, l)), t.style = Pa(l));
  }
  const a = he(e) ? 1 : dc(e) ? 128 : Ml(e) ? 64 : ce(e) ? 4 : K(e) ? 2 : 0;
  return zf(
    e,
    t,
    r,
    n,
    o,
    a,
    s,
    !0
  );
}
function Jf(e) {
  return e ? Na(e) || tc(e) ? pe({}, e) : e : null;
}
function Mt(e, t, r = !1, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, u = t ? ze(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && gc(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? G(s) ? s.concat(xn(t)) : [s, xn(t)] : xn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && tr(
    c,
    l.clone(c)
  ), c;
}
function qf(e = " ", t = 0) {
  return ne(nn, null, e, t);
}
function dt(e) {
  return e == null || typeof e == "boolean" ? ne(He) : G(e) ? ne(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Nn(e) ? Rt(e) : ne(nn, null, String(e));
}
function Rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function Ya(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (G(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ya(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !tc(t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: ke }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [qf(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function ze(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = Oa([t.class, n.class]));
      else if (o === "style")
        t.style = Pa([t.style, n.style]);
      else if (Gn(o)) {
        const s = t[o], a = n[o];
        a && s !== a && !(G(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function lt(e, t, r, n = null) {
  rt(e, t, 7, [
    r,
    n
  ]);
}
const Yf = Ql();
let $f = 0;
function Gf(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Yf, s = {
    uid: $f++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new cl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: nc(n, o),
    emitsOptions: uc(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Nf.bind(null, s), e.ce && e.ce(s), s;
}
let ve = null;
const so = () => ve || ke;
let Bn, ta;
{
  const e = $t(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ve = r
  ), ta = t(
    "__VUE_SSR_SETTERS__",
    (r) => Yr = r
  );
}
const on = (e) => {
  const t = ve;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Ls = () => {
  ve && ve.scope.off(), Bn(null);
};
function fc(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = !1;
function Kf(e, t = !1, r = !1) {
  t && ta(t);
  const { props: n, children: o } = e.vnode, s = fc(e);
  xf(e, n, s, t), Ef(e, o, r);
  const a = s ? Qf(e, t) : void 0;
  return t && ta(!1), a;
}
function Qf(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pf);
  const { setup: n } = r;
  if (n) {
    jt();
    const o = e.setupContext = n.length > 1 ? em(e) : null, s = on(e), a = rn(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = il(a);
    if (Nt(), s(), (i || e.sp) && !Br(e) && zl(e), i) {
      if (a.then(Ls, Ls), t)
        return a.then((l) => {
          Rs(e, l);
        }).catch((l) => {
          eo(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Rs(e, a);
  } else
    mc(e);
}
function Rs(e, t, r) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), e.setupState = Tl(t)), mc(e);
}
function mc(e, t, r) {
  const n = e.type;
  if (e.render || (e.render = n.render || Xe), __VUE_OPTIONS_API__) {
    const o = on(e);
    jt();
    try {
      hf(e);
    } finally {
      Nt(), o();
    }
  }
}
const Xf = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function em(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function io(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tl(Eg(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Ur)
        return Ur[r](e);
    },
    has(t, r) {
      return r in t || r in Ur;
    }
  })) : e.proxy;
}
function tm(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rm(e) {
  return K(e) && "__vccOpts" in e;
}
const Q = (e, t) => Dg(e, t, Yr);
function lo(e, t, r) {
  const n = arguments.length;
  return n === 2 ? ce(t) && !G(t) ? Nn(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Nn(r) && (r = [r]), ne(e, t, r));
}
const _s = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ra;
const ks = typeof window < "u" && window.trustedTypes;
if (ks)
  try {
    ra = /* @__PURE__ */ ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pc = ra ? (e) => ra.createHTML(e) : (e) => e, nm = "http://www.w3.org/2000/svg", om = "http://www.w3.org/1998/Math/MathML", ht = typeof document < "u" ? document : null, Ds = ht && /* @__PURE__ */ ht.createElement("template"), am = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? ht.createElementNS(nm, e) : t === "mathml" ? ht.createElementNS(om, e) : r ? ht.createElement(e, { is: r }) : ht.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => ht.createTextNode(e),
  createComment: (e) => ht.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ht.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, o, s) {
    const a = r ? r.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), r), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      Ds.innerHTML = pc(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ds.content;
      if (n === "svg" || n === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, St = "transition", Sr = "animation", mr = Symbol("_vtc"), hc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ac = /* @__PURE__ */ pe(
  {},
  Ul,
  hc
), sm = (e) => (e.displayName = "Transition", e.props = Ac, e), Cc = /* @__PURE__ */ sm(
  (e, { slots: t }) => lo(Qg, vc(e), t)
), Zt = (e, t = []) => {
  G(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, Ms = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vc(e) {
  const t = {};
  for (const I in e)
    I in hc || (t[I] = e[I]);
  if (e.css === !1)
    return t;
  const {
    name: r = "v",
    type: n,
    duration: o,
    enterFromClass: s = `${r}-enter-from`,
    enterActiveClass: a = `${r}-enter-active`,
    enterToClass: i = `${r}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: c = i,
    leaveFromClass: d = `${r}-leave-from`,
    leaveActiveClass: m = `${r}-leave-active`,
    leaveToClass: p = `${r}-leave-to`
  } = e, A = im(o), C = A && A[0], Z = A && A[1], {
    onBeforeEnter: R,
    onEnter: V,
    onEnterCancelled: j,
    onLeave: N,
    onLeaveCancelled: J,
    onBeforeAppear: E = R,
    onAppear: F = V,
    onAppearCancelled: h = j
  } = t, v = (I, y, U, D) => {
    I._enterCancelled = D, Pt(I, y ? c : i), Pt(I, y ? u : a), U && U();
  }, O = (I, y) => {
    I._isLeaving = !1, Pt(I, d), Pt(I, p), Pt(I, m), y && y();
  }, L = (I) => (y, U) => {
    const D = I ? F : V, q = () => v(y, I, U);
    Zt(D, [y, q]), js(() => {
      Pt(y, I ? l : s), ct(y, I ? c : i), Ms(D) || Ns(y, n, C, q);
    });
  };
  return pe(t, {
    onBeforeEnter(I) {
      Zt(R, [I]), ct(I, s), ct(I, a);
    },
    onBeforeAppear(I) {
      Zt(E, [I]), ct(I, l), ct(I, u);
    },
    onEnter: L(!1),
    onAppear: L(!0),
    onLeave(I, y) {
      I._isLeaving = !0;
      const U = () => O(I, y);
      ct(I, d), I._enterCancelled ? (ct(I, m), na()) : (na(), ct(I, m)), js(() => {
        I._isLeaving && (Pt(I, d), ct(I, p), Ms(N) || Ns(I, n, Z, U));
      }), Zt(N, [I, U]);
    },
    onEnterCancelled(I) {
      v(I, !1, void 0, !0), Zt(j, [I]);
    },
    onAppearCancelled(I) {
      v(I, !0, void 0, !0), Zt(h, [I]);
    },
    onLeaveCancelled(I) {
      O(I), Zt(J, [I]);
    }
  });
}
function im(e) {
  if (e == null)
    return null;
  if (ce(e))
    return [xo(e.enter), xo(e.leave)];
  {
    const t = xo(e);
    return [t, t];
  }
}
function xo(e) {
  return Xd(e);
}
function ct(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[mr] || (e[mr] = /* @__PURE__ */ new Set())).add(t);
}
function Pt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[mr];
  r && (r.delete(t), r.size || (e[mr] = void 0));
}
function js(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lm = 0;
function Ns(e, t, r, n) {
  const o = e._endId = ++lm, s = () => {
    o === e._endId && n();
  };
  if (r != null)
    return setTimeout(s, r);
  const { type: a, timeout: i, propCount: l } = bc(e, t);
  if (!a)
    return n();
  const u = a + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, m), s();
  }, m = (p) => {
    p.target === e && ++c >= l && d();
  };
  setTimeout(() => {
    c < l && d();
  }, i + 1), e.addEventListener(u, m);
}
function bc(e, t) {
  const r = window.getComputedStyle(e), n = (A) => (r[A] || "").split(", "), o = n(`${St}Delay`), s = n(`${St}Duration`), a = Bs(o, s), i = n(`${Sr}Delay`), l = n(`${Sr}Duration`), u = Bs(i, l);
  let c = null, d = 0, m = 0;
  t === St ? a > 0 && (c = St, d = a, m = s.length) : t === Sr ? u > 0 && (c = Sr, d = u, m = l.length) : (d = Math.max(a, u), c = d > 0 ? a > u ? St : Sr : null, m = c ? c === St ? s.length : l.length : 0);
  const p = c === St && /\b(transform|all)(,|$)/.test(
    n(`${St}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: m,
    hasTransform: p
  };
}
function Bs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => Us(r) + Us(e[n])));
}
function Us(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function na() {
  return document.body.offsetHeight;
}
function cm(e, t, r) {
  const n = e[mr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Un = Symbol("_vod"), Ic = Symbol("_vsh"), um = {
  beforeMount(e, { value: t }, { transition: r }) {
    e[Un] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Er(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Er(e, !0), n.enter(e)) : n.leave(e, () => {
      Er(e, !1);
    }) : Er(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Er(e, t);
  }
};
function Er(e, t) {
  e.style.display = t ? e[Un] : "none", e[Ic] = !t;
}
const dm = Symbol(""), gm = /(^|;)\s*display\s*:/;
function fm(e, t, r) {
  const n = e.style, o = he(r);
  let s = !1;
  if (r && !o) {
    if (t)
      if (he(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          r[i] == null && wn(n, i, "");
        }
      else
        for (const a in t)
          r[a] == null && wn(n, a, "");
    for (const a in r)
      a === "display" && (s = !0), wn(n, a, r[a]);
  } else if (o) {
    if (t !== r) {
      const a = n[dm];
      a && (r += ";" + a), n.cssText = r, s = gm.test(r);
    }
  } else t && e.removeAttribute("style");
  Un in e && (e[Un] = s ? n.display : "", e[Ic] && (n.display = "none"));
}
const Vs = /\s*!important$/;
function wn(e, t, r) {
  if (G(r))
    r.forEach((n) => wn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = mm(e, t);
    Vs.test(r) ? e.setProperty(
      nr(n),
      r.replace(Vs, ""),
      "important"
    ) : e[n] = r;
  }
}
const Hs = ["Webkit", "Moz", "ms"], wo = {};
function mm(e, t) {
  const r = wo[t];
  if (r)
    return r;
  let n = Ke(t);
  if (n !== "filter" && n in e)
    return wo[t] = n;
  n = Xn(n);
  for (let o = 0; o < Hs.length; o++) {
    const s = Hs[o] + n;
    if (s in e)
      return wo[t] = s;
  }
  return t;
}
const Zs = "http://www.w3.org/1999/xlink";
function zs(e, t, r, n, o, s = ag(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Zs, t.slice(6, t.length)) : e.setAttributeNS(Zs, t, r) : r == null || s && !ll(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : pr(r) ? String(r) : r
  );
}
function Ws(e, t, r, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? pc(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (i !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const i = typeof e[t];
    i === "boolean" ? r = ll(r) : r == null && i === "string" ? (r = "", a = !0) : i === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function pm(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function hm(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Js = Symbol("_vei");
function Am(e, t, r, n, o = null) {
  const s = e[Js] || (e[Js] = {}), a = s[t];
  if (n && a)
    a.value = n;
  else {
    const [i, l] = Cm(t);
    if (n) {
      const u = s[t] = Im(
        n,
        o
      );
      pm(e, i, u, l);
    } else a && (hm(e, i, a, l), s[t] = void 0);
  }
}
const qs = /(?:Once|Passive|Capture)$/;
function Cm(e) {
  let t;
  if (qs.test(e)) {
    t = {};
    let n;
    for (; n = e.match(qs); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nr(e.slice(2)), t];
}
let To = 0;
const vm = /* @__PURE__ */ Promise.resolve(), bm = () => To || (vm.then(() => To = 0), To = Date.now());
function Im(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    rt(
      ym(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = bm(), r;
}
function ym(e, t) {
  if (G(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const Ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xm = (e, t, r, n, o, s) => {
  const a = o === "svg";
  t === "class" ? cm(e, n, a) : t === "style" ? fm(e, r, n) : Gn(t) ? Ta(t) || Am(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wm(e, t, n, a)) ? (Ws(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zs(e, t, n, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !he(n)) ? Ws(e, Ke(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), zs(e, t, n, a));
};
function wm(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ys(t) && K(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ys(t) && he(r) ? !1 : t in e;
}
const yc = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap(), Vn = Symbol("_moveCb"), $s = Symbol("_enterCb"), Tm = (e) => (delete e.props.mode, e), Sm = /* @__PURE__ */ Tm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pe({}, Ac, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const r = so(), n = Bl();
    let o, s;
    return Jl(() => {
      if (!o.length)
        return;
      const a = e.moveClass || `${e.name || "v"}-move`;
      if (!Lm(
        o[0].el,
        r.vnode.el,
        a
      ))
        return;
      o.forEach(Pm), o.forEach(Om);
      const i = o.filter(Fm);
      na(), i.forEach((l) => {
        const u = l.el, c = u.style;
        ct(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
        const d = u[Vn] = (m) => {
          m && m.target !== u || (!m || /transform$/.test(m.propertyName)) && (u.removeEventListener("transitionend", d), u[Vn] = null, Pt(u, a));
        };
        u.addEventListener("transitionend", d);
      });
    }), () => {
      const a = X(e), i = vc(a);
      let l = a.tag || Ve;
      if (o = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), tr(
            c,
            qr(
              c,
              i,
              n,
              r
            )
          ), yc.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      s = t.default ? Va(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null && tr(
          c,
          qr(c, i, n, r)
        );
      }
      return ne(l, null, s);
    };
  }
}), Em = Sm;
function Pm(e) {
  const t = e.el;
  t[Vn] && t[Vn](), t[$s] && t[$s]();
}
function Om(e) {
  xc.set(e, e.el.getBoundingClientRect());
}
function Fm(e) {
  const t = yc.get(e), r = xc.get(e), n = t.left - r.left, o = t.top - r.top;
  if (n || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${n}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function Lm(e, t, r) {
  const n = e.cloneNode(), o = e[mr];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && n.classList.remove(l));
  }), r.split(/\s+/).forEach((i) => i && n.classList.add(i)), n.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(n);
  const { hasTransform: a } = bc(n);
  return s.removeChild(n), a;
}
const Rm = /* @__PURE__ */ pe({ patchProp: xm }, am);
let Gs;
function _m() {
  return Gs || (Gs = Ff(Rm));
}
const wc = (...e) => {
  _m().render(...e);
};
function co(e, t) {
  let r;
  function n() {
    r = Zr(), r.run(() => t.length ? t(() => {
      r?.stop(), n();
    }) : t());
  }
  de(e, (o) => {
    o && !r ? n() : o || (r?.stop(), r = void 0);
  }, {
    immediate: !0
  }), Qe(() => {
    r?.stop();
  });
}
const ge = typeof window < "u", km = ge && "IntersectionObserver" in window, Dm = ge && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function Mm(e, t, r) {
  const n = t.length - 1;
  if (n < 0) return e === void 0 ? r : e;
  for (let o = 0; o < n; o++) {
    if (e == null)
      return r;
    e = e[t[o]];
  }
  return e == null || e[t[n]] === void 0 ? r : e[t[n]];
}
function Ks(e, t, r) {
  return e == null || !t || typeof t != "string" ? r : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Mm(e, t.split("."), r));
}
function Tc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (r, n) => t + n);
}
function ye(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const r = Number(e);
  return isNaN(r) ? String(e) : isFinite(r) ? `${r}${t}` : void 0;
}
function Sc(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Qs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function jm(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Xs = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Ec(e) {
  return Object.keys(e);
}
function So(e, t) {
  return t.every((r) => e.hasOwnProperty(r));
}
function Nm(e, t) {
  const r = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
function Bm(e, t) {
  const r = {
    ...e
  };
  return t.forEach((n) => delete r[n]), r;
}
const Um = /^on[^a-z]/, Pc = (e) => Um.test(e);
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(r, e));
}
function ei(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + r.repeat(Math.max(0, t - e.length));
}
function ti(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Vm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const r = [];
  let n = 0;
  for (; n < e.length; )
    r.push(e.substr(n, t)), n += t;
  return r;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const o in e)
    n[o] = e[o];
  for (const o in t) {
    const s = e[o], a = t[o];
    if (Qs(s) && Qs(a)) {
      n[o] = It(s, a, r);
      continue;
    }
    if (r && Array.isArray(s) && Array.isArray(a)) {
      n[o] = r(s, a);
      continue;
    }
    n[o] = a;
  }
  return n;
}
function Kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Kt.cache.has(e)) return Kt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Kt.cache.set(e, t), t;
}
Kt.cache = /* @__PURE__ */ new Map();
function Oc(e) {
  const t = xt({}), r = Q(e);
  return or(() => {
    for (const n in r.value)
      t[n] = r.value[n];
  }, {
    flush: "sync"
  }), Sl(t);
}
function aa(e, t) {
  return e.includes(t);
}
function Fc(e) {
  return e[2].toLowerCase() + e.slice(3);
}
function Hm(e, t) {
  if (!(ge && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Zm(e, t) {
  if (!ge || e === 0)
    return t(), () => {
    };
  const r = window.setTimeout(t, e);
  return () => window.clearTimeout(r);
}
function ri() {
  const e = De(), t = (r) => {
    e.value = r;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (r) => e.value = r
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => jm(e.value)
  }), t;
}
const Lc = ["top", "bottom"], zm = ["start", "end", "left", "right"];
function ni(e, t) {
  let [r, n] = e.split(" ");
  return n || (n = aa(Lc, r) ? "start" : aa(zm, r) ? "top" : "center"), {
    side: oi(r, t),
    align: oi(n, t)
  };
}
function oi(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Eo(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Po(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function ai(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function si(e) {
  return aa(Lc, e.side) ? "y" : "x";
}
class Qt {
  constructor(t) {
    let {
      x: r,
      y: n,
      width: o,
      height: s
    } = t;
    this.x = r, this.y = n, this.width = o, this.height = s;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function ii(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Wm(e) {
  return Array.isArray(e) ? new Qt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Jm(e) {
  const t = e.getBoundingClientRect(), r = getComputedStyle(e), n = r.transform;
  if (n) {
    let o, s, a, i, l;
    if (n.startsWith("matrix3d("))
      o = n.slice(9, -1).split(/, /), s = Number(o[0]), a = Number(o[5]), i = Number(o[12]), l = Number(o[13]);
    else if (n.startsWith("matrix("))
      o = n.slice(7, -1).split(/, /), s = Number(o[0]), a = Number(o[3]), i = Number(o[4]), l = Number(o[5]);
    else
      return new Qt(t);
    const u = r.transformOrigin, c = t.x - i - (1 - s) * parseFloat(u), d = t.y - l - (1 - a) * parseFloat(u.slice(u.indexOf(" ") + 1)), m = s ? t.width / s : e.offsetWidth + 1, p = a ? t.height / a : e.offsetHeight + 1;
    return new Qt({
      x: c,
      y: d,
      width: m,
      height: p
    });
  } else
    return new Qt(t);
}
function qm(e, t, r) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let n;
  try {
    n = e.animate(t, r);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof n.finished > "u" && (n.finished = new Promise((o) => {
    n.onfinish = () => {
      o(n);
    };
  })), n;
}
const Tn = /* @__PURE__ */ new WeakMap();
function Ym(e, t) {
  Object.keys(t).forEach((r) => {
    if (Pc(r)) {
      const n = Fc(r), o = Tn.get(e);
      if (t[r] == null)
        o?.forEach((s) => {
          const [a, i] = s;
          a === n && (e.removeEventListener(n, i), o.delete(s));
        });
      else if (!o || ![...o].some((s) => s[0] === n && s[1] === t[r])) {
        e.addEventListener(n, t[r]);
        const s = o || /* @__PURE__ */ new Set();
        s.add([n, t[r]]), Tn.has(e) || Tn.set(e, s);
      }
    } else
      t[r] == null ? e.removeAttribute(r) : e.setAttribute(r, t[r]);
  });
}
function $m(e, t) {
  Object.keys(t).forEach((r) => {
    if (Pc(r)) {
      const n = Fc(r), o = Tn.get(e);
      o?.forEach((s) => {
        const [a, i] = s;
        a === n && (e.removeEventListener(n, i), o.delete(s));
      });
    } else
      e.removeAttribute(r);
  });
}
const ir = 2.4, li = 0.2126729, ci = 0.7151522, ui = 0.072175, Gm = 0.55, Km = 0.58, Qm = 0.57, Xm = 0.62, hn = 0.03, di = 1.45, ep = 5e-4, tp = 1.25, rp = 1.25, np = 0.078, gi = 12.82051282051282, An = 0.06, op = 1e-3;
function fi(e, t) {
  const r = (e.r / 255) ** ir, n = (e.g / 255) ** ir, o = (e.b / 255) ** ir, s = (t.r / 255) ** ir, a = (t.g / 255) ** ir, i = (t.b / 255) ** ir;
  let l = r * li + n * ci + o * ui, u = s * li + a * ci + i * ui;
  if (l <= hn && (l += (hn - l) ** di), u <= hn && (u += (hn - u) ** di), Math.abs(u - l) < ep) return 0;
  let c;
  if (u > l) {
    const d = (u ** Gm - l ** Km) * tp;
    c = d < op ? 0 : d < np ? d - d * gi * An : d - An;
  } else {
    const d = (u ** Xm - l ** Qm) * rp;
    c = d > -1e-3 ? 0 : d > -0.078 ? d - d * gi * An : d + An;
  }
  return c * 100;
}
const Hn = 0.20689655172413793, ap = (e) => e > Hn ** 3 ? Math.cbrt(e) : e / (3 * Hn ** 2) + 4 / 29, sp = (e) => e > Hn ? e ** 3 : 3 * Hn ** 2 * (e - 4 / 29);
function Rc(e) {
  const t = ap, r = t(e[1]);
  return [116 * r - 16, 500 * (t(e[0] / 0.95047) - r), 200 * (r - t(e[2] / 1.08883))];
}
function _c(e) {
  const t = sp, r = (e[0] + 16) / 116;
  return [t(r + e[1] / 500) * 0.95047, t(r), t(r - e[2] / 200) * 1.08883];
}
const ip = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], lp = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, cp = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], up = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function kc(e) {
  const t = Array(3), r = lp, n = ip;
  for (let o = 0; o < 3; ++o)
    t[o] = Math.round(oa(r(n[o][0] * e[0] + n[o][1] * e[1] + n[o][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function $a(e) {
  let {
    r: t,
    g: r,
    b: n
  } = e;
  const o = [0, 0, 0], s = up, a = cp;
  t = s(t / 255), r = s(r / 255), n = s(n / 255);
  for (let i = 0; i < 3; ++i)
    o[i] = a[i][0] * t + a[i][1] * r + a[i][2] * n;
  return o;
}
function sa(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function dp(e) {
  return sa(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const mi = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, gp = {
  rgb: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  rgba: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  hsl: (e, t, r, n) => pi({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsla: (e, t, r, n) => pi({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsv: (e, t, r, n) => $r({
    h: e,
    s: t,
    v: r,
    a: n
  }),
  hsva: (e, t, r, n) => $r({
    h: e,
    s: t,
    v: r,
    a: n
  })
};
function ft(e) {
  if (typeof e == "number")
    return {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && mi.test(e)) {
    const {
      groups: t
    } = e.match(mi), {
      fn: r,
      values: n
    } = t, o = n.split(/,\s*|\s*\/\s*|\s+/).map((s, a) => s.endsWith("%") || // unitless slv are %
    a > 0 && a < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(r) ? parseFloat(s) / 100 : parseFloat(s));
    return gp[r](...o);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length), mp(t);
  } else if (typeof e == "object") {
    if (So(e, ["r", "g", "b"]))
      return e;
    if (So(e, ["h", "s", "l"]))
      return $r(Dc(e));
    if (So(e, ["h", "s", "v"]))
      return $r(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function $r(e) {
  const {
    h: t,
    s: r,
    v: n,
    a: o
  } = e, s = (i) => {
    const l = (i + t / 60) % 6;
    return n - n * r * Math.max(Math.min(l, 4 - l, 1), 0);
  }, a = [s(5), s(3), s(1)].map((i) => Math.round(i * 255));
  return {
    r: a[0],
    g: a[1],
    b: a[2],
    a: o
  };
}
function pi(e) {
  return $r(Dc(e));
}
function Dc(e) {
  const {
    h: t,
    s: r,
    l: n,
    a: o
  } = e, s = n + r * Math.min(n, 1 - n), a = s === 0 ? 0 : 2 - 2 * n / s;
  return {
    h: t,
    s: a,
    v: s,
    a: o
  };
}
function Cn(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function fp(e) {
  let {
    r: t,
    g: r,
    b: n,
    a: o
  } = e;
  return `#${[Cn(t), Cn(r), Cn(n), o !== void 0 ? Cn(Math.round(o * 255)) : ""].join("")}`;
}
function mp(e) {
  e = pp(e);
  let [t, r, n, o] = Vm(e, 2).map((s) => parseInt(s, 16));
  return o = o === void 0 ? o : o / 255, {
    r: t,
    g: r,
    b: n,
    a: o
  };
}
function pp(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ei(ei(e, 6), 8, "F")), e;
}
function hp(e, t) {
  const r = Rc($a(e));
  return r[0] = r[0] + t * 10, kc(_c(r));
}
function Ap(e, t) {
  const r = Rc($a(e));
  return r[0] = r[0] - t * 10, kc(_c(r));
}
function Cp(e) {
  const t = ft(e);
  return $a(t)[1];
}
function Mc(e) {
  const t = Math.abs(fi(ft(0), ft(e)));
  return Math.abs(fi(ft(16777215), ft(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function We(e, t) {
  return (r) => Object.keys(e).reduce((n, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : {
      type: e[o]
    };
    return r && o in r ? n[o] = {
      ...a,
      default: r[o]
    } : n[o] = a, t && !n[o].source && (n[o].source = t), n;
  }, {});
}
const vp = We({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function nt(e, t) {
  const r = so();
  if (!r)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return r;
}
function bp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = nt(e).type;
  return Kt(t?.aliasName || t?.name);
}
function Ip(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nt("injectSelf");
  const {
    provides: r
  } = t;
  if (r && e in r)
    return r[e];
}
const Gr = Symbol.for("vuetify:defaults");
function yp(e) {
  return Pe(e);
}
function jc() {
  const e = mt(Gr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function xp(e, t) {
  return typeof e.props?.[t] < "u" || typeof e.props?.[Kt(t)] < "u";
}
function wp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jc();
  const n = nt("useDefaults");
  if (t = t ?? n.type.name ?? n.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = Q(() => r.value?.[e._as ?? t]), s = new Proxy(e, {
    get(l, u) {
      const c = Reflect.get(l, u);
      return u === "class" || u === "style" ? [o.value?.[u], c].filter((d) => d != null) : typeof u == "string" && !xp(n.vnode, u) ? o.value?.[u] !== void 0 ? o.value?.[u] : r.value?.global?.[u] !== void 0 ? r.value?.global?.[u] : c : c;
    }
  }), a = De();
  or(() => {
    if (o.value) {
      const l = Object.entries(o.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      a.value = l.length ? Object.fromEntries(l) : void 0;
    } else
      a.value = void 0;
  });
  function i() {
    const l = Ip(Gr, n);
    oo(Gr, Q(() => a.value ? It(l?.value ?? {}, a.value) : l?.value));
  }
  return {
    props: s,
    provideSubDefaults: i
  };
}
function an(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return e;
  if (e._setup) {
    e.props = We(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((r) => r !== "class" && r !== "style");
    e.filterProps = function(n) {
      return Nm(n, t);
    }, e.props._as = String, e.setup = function(n, o) {
      const s = jc();
      if (!s.value) return e._setup(n, o);
      const {
        props: a,
        provideSubDefaults: i
      } = wp(n, n._as ?? e.name, s), l = e._setup(a, o);
      return i(), l;
    };
  }
  return e;
}
function Ga() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? an : Xg)(t);
}
function Nc(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Tp = "cubic-bezier(0.4, 0, 0.2, 1)";
function Sp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Ep(e) : Ka(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Zn(e, t) {
  const r = [];
  if (t && e && !t.contains(e)) return r;
  for (; e && (Ka(e) && r.push(e), e !== t); )
    e = e.parentElement;
  return r;
}
function Ka(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ep(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Pp(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Bc(e) {
  const t = nt("useRender");
  t.render = e;
}
function Qa(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const s = nt("useProxiedModel"), a = Pe(e[t] !== void 0 ? e[t] : r), i = Kt(t), u = Q(i !== t ? () => (e[t], !!((s.vnode.props?.hasOwnProperty(t) || s.vnode.props?.hasOwnProperty(i)) && (s.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || s.vnode.props?.hasOwnProperty(`onUpdate:${i}`)))) : () => (e[t], !!(s.vnode.props?.hasOwnProperty(t) && s.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  co(() => !u.value, () => {
    de(() => e[t], (d) => {
      a.value = d;
    });
  });
  const c = Q({
    get() {
      const d = e[t];
      return n(u.value ? d : a.value);
    },
    set(d) {
      const m = o(d), p = X(u.value ? e[t] : a.value);
      p === m || n(p) === d || (a.value = m, s?.emit(`update:${t}`, m));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : a.value
  }), c;
}
const Op = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  }
}, hi = "$vuetify.", Ai = (e, t) => e.replace(/\{(\d+)\}/g, (r, n) => String(t[Number(n)])), Uc = (e, t, r) => function(n) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
    s[a - 1] = arguments[a];
  if (!n.startsWith(hi))
    return Ai(n, s);
  const i = n.replace(hi, ""), l = e.value && r.value[e.value], u = t.value && r.value[t.value];
  let c = Ks(l, i, null);
  return c || (`${n}${e.value}`, c = Ks(u, i, null)), c || (c = n), typeof c != "string" && (c = n), Ai(c, s);
};
function Vc(e, t) {
  return (r, n) => new Intl.NumberFormat([e.value, t.value], n).format(r);
}
function Oo(e, t, r) {
  const n = Qa(e, t, e[t] ?? r.value);
  return n.value = e[t] ?? r.value, de(r, (o) => {
    e[t] == null && (n.value = r.value);
  }), n;
}
function Hc(e) {
  return (t) => {
    const r = Oo(t, "locale", e.current), n = Oo(t, "fallback", e.fallback), o = Oo(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: r,
      fallback: n,
      messages: o,
      t: Uc(r, n, o),
      n: Vc(r, n),
      provide: Hc({
        current: r,
        fallback: n,
        messages: o
      })
    };
  };
}
function Fp(e) {
  const t = De(e?.locale ?? "en"), r = De(e?.fallback ?? "en"), n = Pe({
    en: Op,
    ...e?.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: r,
    messages: n,
    t: Uc(t, r, n),
    n: Vc(t, r),
    provide: Hc({
      current: t,
      fallback: r,
      messages: n
    })
  };
}
const ia = Symbol.for("vuetify:locale");
function Lp(e) {
  return e.name != null;
}
function Rp(e) {
  const t = e?.adapter && Lp(e?.adapter) ? e?.adapter : Fp(e), r = kp(t, e);
  return {
    ...t,
    ...r
  };
}
function _p() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function kp(e, t) {
  const r = Pe(t?.rtl ?? _p()), n = Q(() => r.value[e.current.value] ?? !1);
  return {
    isRtl: n,
    rtl: r,
    rtlClasses: Q(() => `v-locale--is-${n.value ? "rtl" : "ltr"}`)
  };
}
function Dp() {
  const e = mt(ia);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function sn(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function Mp(e, t, r) {
  const n = [];
  let o = [];
  const s = Zc(e), a = zc(e), i = r ?? sn(t)?.firstDay ?? 0, l = (s.getDay() - i + 7) % 7, u = (a.getDay() - i + 7) % 7;
  for (let c = 0; c < l; c++) {
    const d = new Date(s);
    d.setDate(d.getDate() - (l - c)), o.push(d);
  }
  for (let c = 1; c <= a.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    o.push(d), o.length === 7 && (n.push(o), o = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(a);
    d.setDate(d.getDate() + c), o.push(d);
  }
  return o.length > 0 && n.push(o), n;
}
function la(e, t, r) {
  const n = r ?? sn(t)?.firstDay ?? 0, o = new Date(e);
  for (; o.getDay() !== n; )
    o.setDate(o.getDate() - 1);
  return o;
}
function jp(e, t) {
  const r = new Date(e), n = ((sn(t)?.firstDay ?? 0) + 6) % 7;
  for (; r.getDay() !== n; )
    r.setDate(r.getDate() + 1);
  return r;
}
function Zc(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function zc(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Np(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Bp = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Wc(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Bp.test(e))
      return Np(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Ci = new Date(2e3, 0, 2);
function Up(e, t) {
  const r = t ?? sn(e)?.firstDay ?? 0;
  return Tc(7).map((n) => {
    const o = new Date(Ci);
    return o.setDate(Ci.getDate() + r + n), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(o);
  });
}
function Vp(e, t, r, n) {
  const o = Wc(e) ?? /* @__PURE__ */ new Date(), s = n?.[t];
  if (typeof s == "function")
    return s(o, t, r);
  let a = {};
  switch (t) {
    case "fullDate":
      a = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      a = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const i = o.getDate(), l = new Intl.DateTimeFormat(r, {
        month: "long"
      }).format(o);
      return `${i} ${l}`;
    case "normalDateWithWeekday":
      a = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      a = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      a = {
        year: "numeric"
      };
      break;
    case "month":
      a = {
        month: "long"
      };
      break;
    case "monthShort":
      a = {
        month: "short"
      };
      break;
    case "monthAndYear":
      a = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      a = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      a = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      a = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(r).format(o.getDate());
    case "hours12h":
      a = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      a = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      a = {
        minute: "numeric"
      };
      break;
    case "seconds":
      a = {
        second: "numeric"
      };
      break;
    case "fullTime":
      a = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      a = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      a = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      a = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      a = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      a = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      a = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return a = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(r, a).format(o).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return a = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(r, a).format(o).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return a = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(r, a).format(o).replace(/, /g, " ");
    default:
      a = s ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(r, a).format(o);
}
function Hp(e, t) {
  const r = e.toJsDate(t), n = r.getFullYear(), o = ti(String(r.getMonth() + 1), 2, "0"), s = ti(String(r.getDate()), 2, "0");
  return `${n}-${o}-${s}`;
}
function Zp(e) {
  const [t, r, n] = e.split("-").map(Number);
  return new Date(t, r - 1, n);
}
function zp(e, t) {
  const r = new Date(e);
  return r.setMinutes(r.getMinutes() + t), r;
}
function Wp(e, t) {
  const r = new Date(e);
  return r.setHours(r.getHours() + t), r;
}
function Sn(e, t) {
  const r = new Date(e);
  return r.setDate(r.getDate() + t), r;
}
function Jp(e, t) {
  const r = new Date(e);
  return r.setDate(r.getDate() + t * 7), r;
}
function qp(e, t) {
  const r = new Date(e);
  return r.setDate(1), r.setMonth(r.getMonth() + t), r;
}
function ca(e) {
  return e.getFullYear();
}
function Yp(e) {
  return e.getMonth();
}
function $p(e, t, r, n) {
  const o = sn(t), s = r ?? o?.firstDay ?? 0, a = n ?? o?.firstWeekSize ?? 1;
  function i(p) {
    const A = new Date(p, 0, 1);
    return 7 - ua(A, la(A, t, s), "days");
  }
  let l = ca(e);
  const u = Sn(la(e, t, s), 6);
  l < ca(u) && i(l + 1) >= a && l++;
  const c = new Date(l, 0, 1), d = i(l), m = d >= a ? Sn(c, d - 7) : Sn(c, d);
  return 1 + ua(e, m, "weeks");
}
function Gp(e) {
  return e.getDate();
}
function Kp(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Qp(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Xp(e) {
  return e.getHours();
}
function e0(e) {
  return e.getMinutes();
}
function t0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function r0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function n0(e, t) {
  return zn(e, t[0]) && s0(e, t[1]);
}
function o0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function zn(e, t) {
  return e.getTime() > t.getTime();
}
function a0(e, t) {
  return zn(da(e), da(t));
}
function s0(e, t) {
  return e.getTime() < t.getTime();
}
function vi(e, t) {
  return e.getTime() === t.getTime();
}
function i0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function l0(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function c0(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function ua(e, t, r) {
  const n = new Date(e), o = new Date(t);
  switch (r) {
    case "years":
      return n.getFullYear() - o.getFullYear();
    case "quarters":
      return Math.floor((n.getMonth() - o.getMonth() + (n.getFullYear() - o.getFullYear()) * 12) / 4);
    case "months":
      return n.getMonth() - o.getMonth() + (n.getFullYear() - o.getFullYear()) * 12;
    case "weeks":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((n.getTime() - o.getTime()) / 1e3);
    default:
      return n.getTime() - o.getTime();
  }
}
function u0(e, t) {
  const r = new Date(e);
  return r.setHours(t), r;
}
function d0(e, t) {
  const r = new Date(e);
  return r.setMinutes(t), r;
}
function g0(e, t) {
  const r = new Date(e);
  return r.setMonth(t), r;
}
function f0(e, t) {
  const r = new Date(e);
  return r.setDate(t), r;
}
function m0(e, t) {
  const r = new Date(e);
  return r.setFullYear(t), r;
}
function da(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function p0(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class h0 {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Wc(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Hp(this, t);
  }
  parseISO(t) {
    return Zp(t);
  }
  addMinutes(t, r) {
    return zp(t, r);
  }
  addHours(t, r) {
    return Wp(t, r);
  }
  addDays(t, r) {
    return Sn(t, r);
  }
  addWeeks(t, r) {
    return Jp(t, r);
  }
  addMonths(t, r) {
    return qp(t, r);
  }
  getWeekArray(t, r) {
    const n = r !== void 0 ? Number(r) : void 0;
    return Mp(t, this.locale, n);
  }
  startOfWeek(t, r) {
    const n = r !== void 0 ? Number(r) : void 0;
    return la(t, this.locale, n);
  }
  endOfWeek(t) {
    return jp(t, this.locale);
  }
  startOfMonth(t) {
    return Zc(t);
  }
  endOfMonth(t) {
    return zc(t);
  }
  format(t, r) {
    return Vp(t, r, this.locale, this.formats);
  }
  isEqual(t, r) {
    return vi(t, r);
  }
  isValid(t) {
    return o0(t);
  }
  isWithinRange(t, r) {
    return n0(t, r);
  }
  isAfter(t, r) {
    return zn(t, r);
  }
  isAfterDay(t, r) {
    return a0(t, r);
  }
  isBefore(t, r) {
    return !zn(t, r) && !vi(t, r);
  }
  isSameDay(t, r) {
    return i0(t, r);
  }
  isSameMonth(t, r) {
    return l0(t, r);
  }
  isSameYear(t, r) {
    return c0(t, r);
  }
  setMinutes(t, r) {
    return d0(t, r);
  }
  setHours(t, r) {
    return u0(t, r);
  }
  setMonth(t, r) {
    return g0(t, r);
  }
  setDate(t, r) {
    return f0(t, r);
  }
  setYear(t, r) {
    return m0(t, r);
  }
  getDiff(t, r, n) {
    return ua(t, r, n);
  }
  getWeekdays(t) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Up(this.locale, r);
  }
  getYear(t) {
    return ca(t);
  }
  getMonth(t) {
    return Yp(t);
  }
  getWeek(t, r, n) {
    const o = r !== void 0 ? Number(r) : void 0;
    return $p(t, this.locale, o, n);
  }
  getDate(t) {
    return Gp(t);
  }
  getNextMonth(t) {
    return Kp(t);
  }
  getPreviousMonth(t) {
    return Qp(t);
  }
  getHours(t) {
    return Xp(t);
  }
  getMinutes(t) {
    return e0(t);
  }
  startOfDay(t) {
    return da(t);
  }
  endOfDay(t) {
    return p0(t);
  }
  startOfYear(t) {
    return t0(t);
  }
  endOfYear(t) {
    return r0(t);
  }
}
const A0 = Symbol.for("vuetify:date-options"), bi = Symbol.for("vuetify:date-adapter");
function C0(e, t) {
  const r = It({
    adapter: h0,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: r,
    instance: v0(r, t)
  };
}
function v0(e, t) {
  const r = xt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return de(t.current, (n) => {
    r.locale = e.locale[n] ?? n ?? r.locale;
  }), r;
}
const ga = Symbol.for("vuetify:display"), Ii = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, b0 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ii;
  return It(Ii, e);
};
function yi(e) {
  return ge && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function xi(e) {
  return ge && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function wi(e) {
  const t = ge && !e ? window.navigator.userAgent : "ssr";
  function r(A) {
    return !!t.match(A);
  }
  const n = r(/android/i), o = r(/iphone|ipad|ipod/i), s = r(/cordova/i), a = r(/electron/i), i = r(/chrome/i), l = r(/edge/i), u = r(/firefox/i), c = r(/opera/i), d = r(/win/i), m = r(/mac/i), p = r(/linux/i);
  return {
    android: n,
    ios: o,
    cordova: s,
    electron: a,
    chrome: i,
    edge: l,
    firefox: u,
    opera: c,
    win: d,
    mac: m,
    linux: p,
    touch: Dm,
    ssr: t === "ssr"
  };
}
function I0(e, t) {
  const {
    thresholds: r,
    mobileBreakpoint: n
  } = b0(e), o = De(xi(t)), s = De(wi(t)), a = xt({}), i = De(yi(t));
  function l() {
    o.value = xi(), i.value = yi();
  }
  function u() {
    l(), s.value = wi();
  }
  return or(() => {
    const c = i.value < r.sm, d = i.value < r.md && !c, m = i.value < r.lg && !(d || c), p = i.value < r.xl && !(m || d || c), A = i.value < r.xxl && !(p || m || d || c), C = i.value >= r.xxl, Z = c ? "xs" : d ? "sm" : m ? "md" : p ? "lg" : A ? "xl" : "xxl", R = typeof n == "number" ? n : r[n], V = i.value < R;
    a.xs = c, a.sm = d, a.md = m, a.lg = p, a.xl = A, a.xxl = C, a.smAndUp = !c, a.mdAndUp = !(c || d), a.lgAndUp = !(c || d || m), a.xlAndUp = !(c || d || m || p), a.smAndDown = !(m || p || A || C), a.mdAndDown = !(p || A || C), a.lgAndDown = !(A || C), a.xlAndDown = !C, a.name = Z, a.height = o.value, a.width = i.value, a.mobile = V, a.mobileBreakpoint = n, a.platform = s.value, a.thresholds = r;
  }), ge && (window.addEventListener("resize", l, {
    passive: !0
  }), Qe(() => {
    window.removeEventListener("resize", l);
  }, !0)), {
    ...Sl(a),
    update: u,
    ssr: !!t
  };
}
function y0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bp();
  const r = mt(ga);
  if (!r) throw new Error("Could not find Vuetify display injection");
  const n = Q(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? r.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? r.width.value < r.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? r.mobile.value : !1), o = Q(() => t ? {
    [`${t}--mobile`]: n.value
  } : {});
  return {
    ...r,
    displayClasses: o,
    mobile: n
  };
}
const x0 = Symbol.for("vuetify:goto");
function w0() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function T0(e, t) {
  return {
    rtl: t.isRtl,
    options: It(w0(), e)
  };
}
const S0 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload"
}, E0 = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => lo(qc, {
    ...e,
    class: "mdi"
  })
}, P0 = [String, Function, Object, Array], Ti = Symbol.for("vuetify:icons"), uo = We({
  icon: {
    type: P0
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon");
Ga()({
  name: "VComponentIcon",
  props: uo(),
  setup(e, t) {
    let {
      slots: r
    } = t;
    return () => {
      const n = e.icon;
      return ne(e.tag, null, {
        default: () => [e.icon ? ne(n, null, null) : r.default?.()]
      });
    };
  }
});
const Jc = an({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: uo(),
  setup(e, t) {
    let {
      attrs: r
    } = t;
    return () => ne(e.tag, ze(r, {
      style: null
    }), {
      default: () => [ne("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? ne("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : ne("path", {
        d: n
      }, null)) : ne("path", {
        d: e.icon
      }, null)])]
    });
  }
});
an({
  name: "VLigatureIcon",
  props: uo(),
  setup(e) {
    return () => ne(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const qc = an({
  name: "VClassIcon",
  props: uo(),
  setup(e) {
    return () => ne(e.tag, {
      class: e.icon
    }, null);
  }
});
function O0() {
  return {
    svg: {
      component: Jc
    },
    class: {
      component: qc
    }
  };
}
function F0(e) {
  const t = O0(), r = e?.defaultSet ?? "mdi";
  return r === "mdi" && !t.mdi && (t.mdi = E0), It({
    defaultSet: r,
    sets: t,
    aliases: {
      ...S0,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Wn = Symbol.for("vuetify:theme"), L0 = We({
  theme: String
}, "theme");
function Si() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet"
  };
}
function R0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Si();
  const t = Si();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const r = {};
  for (const [n, o] of Object.entries(e.themes ?? {})) {
    const s = o.dark || n === "dark" ? t.themes?.dark : t.themes?.light;
    r[n] = It(s, o);
  }
  return It(t, {
    ...e,
    themes: r
  });
}
function zt(e, t, r, n) {
  e.push(`${M0(t, n)} {
`, ...r.map((o) => `  ${o};
`), `}
`);
}
function Ei(e) {
  const t = e.dark ? 2 : 1, r = e.dark ? 1 : 2, n = [];
  for (const [o, s] of Object.entries(e.colors)) {
    const a = ft(s);
    n.push(`--v-theme-${o}: ${a.r},${a.g},${a.b}`), o.startsWith("on-") || n.push(`--v-theme-${o}-overlay-multiplier: ${Cp(s) > 0.18 ? t : r}`);
  }
  for (const [o, s] of Object.entries(e.variables)) {
    const a = typeof s == "string" && s.startsWith("#") ? ft(s) : void 0, i = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    n.push(`--v-${o}: ${i ?? s}`);
  }
  return n;
}
function _0(e, t, r) {
  const n = {};
  if (r)
    for (const o of ["lighten", "darken"]) {
      const s = o === "lighten" ? hp : Ap;
      for (const a of Tc(r[o], 1))
        n[`${e}-${o}-${a}`] = fp(s(ft(t), a));
    }
  return n;
}
function k0(e, t) {
  if (!t) return {};
  let r = {};
  for (const n of t.colors) {
    const o = e[n];
    o && (r = {
      ...r,
      ..._0(n, o, t)
    });
  }
  return r;
}
function D0(e) {
  const t = {};
  for (const r of Object.keys(e)) {
    if (r.startsWith("on-") || e[`on-${r}`]) continue;
    const n = `on-${r}`, o = ft(e[r]);
    t[n] = Mc(o);
  }
  return t;
}
function M0(e, t) {
  if (!t) return e;
  const r = `:where(${t})`;
  return e === ":root" ? r : `${r} ${e}`;
}
function j0(e, t) {
  e && (e.innerHTML = t);
}
function N0(e, t) {
  if (!ge) return null;
  let r = document.getElementById(e);
  return r || (r = document.createElement("style"), r.id = e, r.type = "text/css", t && r.setAttribute("nonce", t), document.head.appendChild(r)), r;
}
function B0(e) {
  const t = R0(e), r = De(t.defaultTheme), n = Pe(t.themes), o = Q(() => {
    const u = {};
    for (const [c, d] of Object.entries(n.value)) {
      const m = {
        ...d.colors,
        ...k0(d.colors, t.variations)
      };
      u[c] = {
        ...d,
        colors: {
          ...m,
          ...D0(m)
        }
      };
    }
    return u;
  }), s = Q(() => o.value[r.value]), a = Q(() => {
    const u = [];
    s.value?.dark && zt(u, ":root", ["color-scheme: dark"], t.scope), zt(u, ":root", Ei(s.value), t.scope);
    for (const [p, A] of Object.entries(o.value))
      zt(u, `.v-theme--${p}`, [`color-scheme: ${A.dark ? "dark" : "normal"}`, ...Ei(A)], t.scope);
    const c = [], d = [], m = new Set(Object.values(o.value).flatMap((p) => Object.keys(p.colors)));
    for (const p of m)
      p.startsWith("on-") ? zt(d, `.${p}`, [`color: rgb(var(--v-theme-${p})) !important`], t.scope) : (zt(c, `.bg-${p}`, [`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${p})) !important`, `color: rgb(var(--v-theme-on-${p})) !important`], t.scope), zt(d, `.text-${p}`, [`color: rgb(var(--v-theme-${p})) !important`], t.scope), zt(d, `.border-${p}`, [`--v-border-color: var(--v-theme-${p})`], t.scope));
    return u.push(...c, ...d), u.map((p, A) => A === 0 ? p : `    ${p}`).join("");
  });
  function i(u) {
    if (t.isDisabled) return;
    const c = u._context.provides.usehead;
    if (c) {
      let d = function() {
        return {
          style: [{
            textContent: a.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (c.push) {
        const m = c.push(d);
        ge && de(a, () => {
          m.patch(d);
        });
      } else
        ge ? (c.addHeadObjs(Q(d)), or(() => c.updateDOM())) : c.addHeadObjs(d());
    } else {
      let d = function() {
        j0(N0(t.stylesheetId, t.cspNonce), a.value);
      };
      ge ? de(a, d, {
        immediate: !0
      }) : d();
    }
  }
  const l = Q(() => t.isDisabled ? void 0 : `v-theme--${r.value}`);
  return {
    install: i,
    isDisabled: t.isDisabled,
    name: r,
    themes: n,
    current: s,
    computedThemes: o,
    themeClasses: l,
    styles: a,
    global: {
      name: r,
      current: s
    }
  };
}
function U0(e) {
  nt("provideTheme");
  const t = mt(Wn, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const r = Q(() => e.theme ?? t.name.value), n = Q(() => t.themes.value[r.value]), o = Q(() => t.isDisabled ? void 0 : `v-theme--${r.value}`), s = {
    ...t,
    name: r,
    current: n,
    themeClasses: o
  };
  return oo(Wn, s), s;
}
function Yc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...r
  } = e, n = It(t, r), {
    aliases: o = {},
    components: s = {},
    directives: a = {}
  } = n, i = Zr();
  return i.run(() => {
    const l = yp(n.defaults), u = I0(n.display, n.ssr), c = B0(n.theme), d = F0(n.icons), m = Rp(n.locale), p = C0(n.date, m), A = T0(n.goTo, m);
    function C(R) {
      for (const j in a)
        R.directive(j, a[j]);
      for (const j in s)
        R.component(j, s[j]);
      for (const j in o)
        R.component(j, an({
          ...o[j],
          name: j,
          aliasName: o[j].name
        }));
      const V = Zr();
      if (V.run(() => {
        c.install(R);
      }), R.onUnmount(() => V.stop()), R.provide(Gr, l), R.provide(ga, u), R.provide(Wn, c), R.provide(Ti, d), R.provide(ia, m), R.provide(A0, p.options), R.provide(bi, p.instance), R.provide(x0, A), ge && n.ssr)
        if (R.$nuxt)
          R.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: j
          } = R;
          R.mount = function() {
            const N = j(...arguments);
            return hr(() => u.update()), R.mount = j, N;
          };
        }
      (typeof __VUE_OPTIONS_API__ != "boolean" || __VUE_OPTIONS_API__) && R.mixin({
        computed: {
          $vuetify() {
            return xt({
              defaults: lr.call(this, Gr),
              display: lr.call(this, ga),
              theme: lr.call(this, Wn),
              icons: lr.call(this, Ti),
              locale: lr.call(this, ia),
              date: lr.call(this, bi)
            });
          }
        }
      });
    }
    function Z() {
      i.stop();
    }
    return {
      install: C,
      unmount: Z,
      defaults: l,
      display: u,
      theme: c,
      icons: d,
      locale: m,
      date: p,
      goTo: A
    };
  });
}
const V0 = "3.8.2";
Yc.version = V0;
function lr(e) {
  const t = this.$, r = t.parent?.provides ?? t.vnode.appContext?.provides;
  if (r && e in r)
    return r[e];
}
const H0 = {
  collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  // delete (e.g. v-chip close)
  clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
  info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  // for carousel
  sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
  expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "svg:M7,10L12,15L17,10H7Z",
  dropdown: "svg:M7,10L12,15L17,10H7Z",
  radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "svg:M19,13H5V11H19V13Z",
  calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
  treeviewCollapse: "svg:M7,10L12,15L17,10H7Z",
  treeviewExpand: "svg:M10,17L15,12L10,7V17Z",
  eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z"
}, Z0 = {
  component: Jc
};
function z0() {
  return !0;
}
function $c(e, t, r) {
  if (!e || Gc(e, r) === !1) return !1;
  const n = Nc(t);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target) return !1;
  const o = (typeof r.value == "object" && r.value.include || (() => []))();
  return o.push(t), !o.some((s) => s?.contains(e.target));
}
function Gc(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || z0)(e);
}
function W0(e, t, r) {
  const n = typeof r.value == "function" ? r.value : r.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && $c(e, t, r) && setTimeout(() => {
    Gc(e, r) && n && n(e);
  }, 0);
}
function Pi(e, t) {
  const r = Nc(e);
  t(document), typeof ShadowRoot < "u" && r instanceof ShadowRoot && t(r);
}
const Kc = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const r = (o) => W0(o, e, t), n = (o) => {
      e._clickOutside.lastMousedownWasOutside = $c(o, e, t);
    };
    Pi(e, (o) => {
      o.addEventListener("click", r, !0), o.addEventListener("mousedown", n, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: r,
      onMousedown: n
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Pi(e, (r) => {
      if (!r || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: n,
        onMousedown: o
      } = e._clickOutside[t.instance.$.uid];
      r.removeEventListener("click", n, !0), r.removeEventListener("mousedown", o, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function J0(e, t) {
  if (!km) return;
  const r = t.modifiers || {}, n = t.value, {
    handler: o,
    options: s
  } = typeof n == "object" ? n : {
    handler: n,
    options: {}
  }, a = new IntersectionObserver(function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = e._observe?.[t.instance.$.uid];
    if (!u) return;
    const c = i.some((d) => d.isIntersecting);
    o && (!r.quiet || u.init) && (!r.once || c || u.init) && o(c, i, l), c && r.once ? Qc(e, t) : u.init = !0;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: a
  }, a.observe(e);
}
function Qc(e, t) {
  const r = e._observe?.[t.instance.$.uid];
  r && (r.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const q0 = {
  mounted: J0,
  unmounted: Qc
};
function Y0(e, t) {
  const r = t.modifiers || {}, n = t.value, {
    once: o,
    immediate: s,
    ...a
  } = r, i = !Object.keys(a).length, {
    handler: l,
    options: u
  } = typeof n == "object" ? n : {
    handler: n,
    options: {
      attributes: a?.attr ?? i,
      characterData: a?.char ?? i,
      childList: a?.child ?? i,
      subtree: a?.sub ?? i
    }
  }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = arguments.length > 1 ? arguments[1] : void 0;
    l?.(d, m), o && Xc(e, t);
  });
  s && l?.([], c), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = {
    observer: c
  }, c.observe(e, u);
}
function Xc(e, t) {
  e._mutate?.[t.instance.$.uid] && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const $0 = {
  mounted: Y0,
  unmounted: Xc
};
function G0(e, t) {
  const r = t.value, n = {
    passive: !t.modifiers?.active
  };
  window.addEventListener("resize", r, n), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = {
    handler: r,
    options: n
  }, t.modifiers?.quiet || r();
}
function K0(e, t) {
  if (!e._onResize?.[t.instance.$.uid]) return;
  const {
    handler: r,
    options: n
  } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", r, n), delete e._onResize[t.instance.$.uid];
}
const Q0 = {
  mounted: G0,
  unmounted: K0
}, fa = Symbol("rippleStop"), X0 = 80;
function Oi(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ma(e) {
  return e.constructor.name === "TouchEvent";
}
function eu(e) {
  return e.constructor.name === "KeyboardEvent";
}
const eh = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = 0, o = 0;
  if (!eu(e)) {
    const d = t.getBoundingClientRect(), m = ma(e) ? e.touches[e.touches.length - 1] : e;
    n = m.clientX - d.left, o = m.clientY - d.top;
  }
  let s = 0, a = 0.3;
  t._ripple?.circle ? (a = 0.15, s = t.clientWidth / 2, s = r.center ? s : s + Math.sqrt((n - s) ** 2 + (o - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const i = `${(t.clientWidth - s * 2) / 2}px`, l = `${(t.clientHeight - s * 2) / 2}px`, u = r.center ? i : `${n - s}px`, c = r.center ? l : `${o - s}px`;
  return {
    radius: s,
    scale: a,
    x: u,
    y: c,
    centerX: i,
    centerY: l
  };
}, Jn = {
  /* eslint-disable max-statements */
  show(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const n = document.createElement("span"), o = document.createElement("span");
    n.appendChild(o), n.className = "v-ripple__container", r.class && (n.className += ` ${r.class}`);
    const {
      radius: s,
      scale: a,
      x: i,
      y: l,
      centerX: u,
      centerY: c
    } = eh(e, t, r), d = `${s * 2}px`;
    o.className = "v-ripple__animation", o.style.width = d, o.style.height = d, t.appendChild(n);
    const m = window.getComputedStyle(t);
    m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Oi(o, `translate(${i}, ${l}) scale3d(${a},${a},${a})`), o.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Oi(o, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const r = t[t.length - 1];
    if (r.dataset.isHiding) return;
    r.dataset.isHiding = "true";
    const n = performance.now() - Number(r.dataset.activated), o = Math.max(250 - n, 0);
    setTimeout(() => {
      r.classList.remove("v-ripple__animation--in"), r.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), r.parentNode?.parentNode === e && e.removeChild(r.parentNode);
      }, 300);
    }, o);
  }
};
function tu(e) {
  return typeof e > "u" || !!e;
}
function Kr(e) {
  const t = {}, r = e.currentTarget;
  if (!(!r?._ripple || r._ripple.touched || e[fa])) {
    if (e[fa] = !0, ma(e))
      r._ripple.touched = !0, r._ripple.isTouch = !0;
    else if (r._ripple.isTouch) return;
    if (t.center = r._ripple.centered || eu(e), r._ripple.class && (t.class = r._ripple.class), ma(e)) {
      if (r._ripple.showTimerCommit) return;
      r._ripple.showTimerCommit = () => {
        Jn.show(e, r, t);
      }, r._ripple.showTimer = window.setTimeout(() => {
        r?._ripple?.showTimerCommit && (r._ripple.showTimerCommit(), r._ripple.showTimerCommit = null);
      }, X0);
    } else
      Jn.show(e, r, t);
  }
}
function Fi(e) {
  e[fa] = !0;
}
function Ze(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Ze(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Jn.hide(t);
  }
}
function ru(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Qr = !1;
function nu(e) {
  !Qr && (e.keyCode === Xs.enter || e.keyCode === Xs.space) && (Qr = !0, Kr(e));
}
function ou(e) {
  Qr = !1, Ze(e);
}
function au(e) {
  Qr && (Qr = !1, Ze(e));
}
function su(e, t, r) {
  const {
    value: n,
    modifiers: o
  } = t, s = tu(n);
  if (s || Jn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = o.center, e._ripple.circle = o.circle, Sc(n) && n.class && (e._ripple.class = n.class), s && !r) {
    if (o.stop) {
      e.addEventListener("touchstart", Fi, {
        passive: !0
      }), e.addEventListener("mousedown", Fi);
      return;
    }
    e.addEventListener("touchstart", Kr, {
      passive: !0
    }), e.addEventListener("touchend", Ze, {
      passive: !0
    }), e.addEventListener("touchmove", ru, {
      passive: !0
    }), e.addEventListener("touchcancel", Ze), e.addEventListener("mousedown", Kr), e.addEventListener("mouseup", Ze), e.addEventListener("mouseleave", Ze), e.addEventListener("keydown", nu), e.addEventListener("keyup", ou), e.addEventListener("blur", au), e.addEventListener("dragstart", Ze, {
      passive: !0
    });
  } else !s && r && iu(e);
}
function iu(e) {
  e.removeEventListener("mousedown", Kr), e.removeEventListener("touchstart", Kr), e.removeEventListener("touchend", Ze), e.removeEventListener("touchmove", ru), e.removeEventListener("touchcancel", Ze), e.removeEventListener("mouseup", Ze), e.removeEventListener("mouseleave", Ze), e.removeEventListener("keydown", nu), e.removeEventListener("keyup", ou), e.removeEventListener("dragstart", Ze), e.removeEventListener("blur", au);
}
function th(e, t) {
  su(e, t, !1);
}
function rh(e) {
  delete e._ripple, iu(e);
}
function nh(e, t) {
  if (t.value === t.oldValue)
    return;
  const r = tu(t.oldValue);
  su(e, t, r);
}
const oh = {
  mounted: th,
  unmounted: rh,
  updated: nh
};
function lu(e, t) {
  const {
    self: r = !1
  } = t.modifiers ?? {}, n = t.value, o = typeof n == "object" && n.options || {
    passive: !0
  }, s = typeof n == "function" || "handleEvent" in n ? n : n.handler, a = r ? e : t.arg ? document.querySelector(t.arg) : window;
  a && (a.addEventListener("scroll", s, o), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = {
    handler: s,
    options: o,
    // Don't reference self
    target: r ? void 0 : a
  });
}
function cu(e, t) {
  if (!e._onScroll?.[t.instance.$.uid]) return;
  const {
    handler: r,
    options: n,
    target: o = e
  } = e._onScroll[t.instance.$.uid];
  o.removeEventListener("scroll", r, n), delete e._onScroll[t.instance.$.uid];
}
function ah(e, t) {
  t.value !== t.oldValue && (cu(e, t), lu(e, t));
}
const sh = {
  mounted: lu,
  unmounted: cu,
  updated: ah
}, ih = (e) => {
  const {
    touchstartX: t,
    touchendX: r,
    touchstartY: n,
    touchendY: o
  } = e, s = 0.5, a = 16;
  e.offsetX = r - t, e.offsetY = o - n, Math.abs(e.offsetY) < s * Math.abs(e.offsetX) && (e.left && r < t - a && e.left(e), e.right && r > t + a && e.right(e)), Math.abs(e.offsetX) < s * Math.abs(e.offsetY) && (e.up && o < n - a && e.up(e), e.down && o > n + a && e.down(e));
};
function lh(e, t) {
  const r = e.changedTouches[0];
  t.touchstartX = r.clientX, t.touchstartY = r.clientY, t.start?.({
    originalEvent: e,
    ...t
  });
}
function ch(e, t) {
  const r = e.changedTouches[0];
  t.touchendX = r.clientX, t.touchendY = r.clientY, t.end?.({
    originalEvent: e,
    ...t
  }), ih(t);
}
function uh(e, t) {
  const r = e.changedTouches[0];
  t.touchmoveX = r.clientX, t.touchmoveY = r.clientY, t.move?.({
    originalEvent: e,
    ...t
  });
}
function dh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (r) => lh(r, t),
    touchend: (r) => ch(r, t),
    touchmove: (r) => uh(r, t)
  };
}
function gh(e, t) {
  const r = t.value, n = r?.parent ? e.parentElement : e, o = r?.options ?? {
    passive: !0
  }, s = t.instance?.$.uid;
  if (!n || !s) return;
  const a = dh(t.value);
  n._touchHandlers = n._touchHandlers ?? /* @__PURE__ */ Object.create(null), n._touchHandlers[s] = a, Ec(a).forEach((i) => {
    n.addEventListener(i, a[i], o);
  });
}
function fh(e, t) {
  const r = t.value?.parent ? e.parentElement : e, n = t.instance?.$.uid;
  if (!r?._touchHandlers || !n) return;
  const o = r._touchHandlers[n];
  Ec(o).forEach((s) => {
    r.removeEventListener(s, o[s]);
  }), delete r._touchHandlers[n];
}
const mh = {
  mounted: gh,
  unmounted: fh
};
function Fo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function ph(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Li(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: r,
      align: n
    } = e, o = n === "left" ? 0 : n === "center" ? t.width / 2 : n === "right" ? t.width : n, s = r === "top" ? 0 : r === "bottom" ? t.height : r;
    return Fo({
      x: o,
      y: s
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: r,
      align: n
    } = e, o = r === "left" ? 0 : r === "right" ? t.width : r, s = n === "top" ? 0 : n === "center" ? t.height / 2 : n === "bottom" ? t.height : n;
    return Fo({
      x: o,
      y: s
    }, t);
  }
  return Fo({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const uu = {
  static: Ch,
  // specific viewport position, usually centered
  connected: bh
  // connected to a certain element
}, hh = We({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in uu
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Ah(e, t) {
  const r = Pe({}), n = Pe();
  ge && co(() => !!(t.isActive.value && e.locationStrategy), (s) => {
    de(() => e.locationStrategy, s), Qe(() => {
      window.removeEventListener("resize", o), n.value = void 0;
    }), window.addEventListener("resize", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? n.value = e.locationStrategy(t, e, r)?.updateLocation : n.value = uu[e.locationStrategy](t, e, r)?.updateLocation;
  });
  function o(s) {
    n.value?.(s);
  }
  return {
    contentStyles: r,
    updateLocation: n
  };
}
function Ch() {
}
function vh(e, t) {
  const r = Jm(e);
  return t ? r.x += parseFloat(e.style.right || 0) : r.x -= parseFloat(e.style.left || 0), r.y -= parseFloat(e.style.top || 0), r;
}
function bh(e, t, r) {
  (Array.isArray(e.target.value) || Pp(e.target.value)) && Object.assign(r.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: o,
    preferredOrigin: s
  } = Oc(() => {
    const A = ni(t.location, e.isRtl.value), C = t.origin === "overlap" ? A : t.origin === "auto" ? Eo(A) : ni(t.origin, e.isRtl.value);
    return A.side === C.side && A.align === Po(C).align ? {
      preferredAnchor: ai(A),
      preferredOrigin: ai(C)
    } : {
      preferredAnchor: A,
      preferredOrigin: C
    };
  }), [a, i, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((A) => Q(() => {
    const C = parseFloat(t[A]);
    return isNaN(C) ? 1 / 0 : C;
  })), c = Q(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const A = t.offset.split(" ").map(parseFloat);
      return A.length < 2 && A.push(0), A;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = !1;
  const m = new ResizeObserver(() => {
    d && p();
  });
  de([e.target, e.contentEl], (A, C) => {
    let [Z, R] = A, [V, j] = C;
    V && !Array.isArray(V) && m.unobserve(V), Z && !Array.isArray(Z) && m.observe(Z), j && m.unobserve(j), R && m.observe(R);
  }, {
    immediate: !0
  }), Qe(() => {
    m.disconnect();
  });
  function p() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    const A = Wm(e.target.value), C = vh(e.contentEl.value, e.isRtl.value), Z = Zn(e.contentEl.value), R = 12;
    Z.length || (Z.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (C.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), C.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = Z.reduce((L, I) => {
      const y = I.getBoundingClientRect(), U = new Qt({
        x: I === document.documentElement ? 0 : y.x,
        y: I === document.documentElement ? 0 : y.y,
        width: I.clientWidth,
        height: I.clientHeight
      });
      return L ? new Qt({
        x: Math.max(L.left, U.left),
        y: Math.max(L.top, U.top),
        width: Math.min(L.right, U.right) - Math.max(L.left, U.left),
        height: Math.min(L.bottom, U.bottom) - Math.max(L.top, U.top)
      }) : U;
    }, void 0);
    V.x += R, V.y += R, V.width -= R * 2, V.height -= R * 2;
    let j = {
      anchor: o.value,
      origin: s.value
    };
    function N(L) {
      const I = new Qt(C), y = Li(L.anchor, A), U = Li(L.origin, I);
      let {
        x: D,
        y: q
      } = ph(y, U);
      switch (L.anchor.side) {
        case "top":
          q -= c.value[0];
          break;
        case "bottom":
          q += c.value[0];
          break;
        case "left":
          D -= c.value[0];
          break;
        case "right":
          D += c.value[0];
          break;
      }
      switch (L.anchor.align) {
        case "top":
          q -= c.value[1];
          break;
        case "bottom":
          q += c.value[1];
          break;
        case "left":
          D -= c.value[1];
          break;
        case "right":
          D += c.value[1];
          break;
      }
      return I.x += D, I.y += q, I.width = Math.min(I.width, l.value), I.height = Math.min(I.height, u.value), {
        overflows: ii(I, V),
        x: D,
        y: q
      };
    }
    let J = 0, E = 0;
    const F = {
      x: 0,
      y: 0
    }, h = {
      x: !1,
      y: !1
    };
    let v = -1;
    for (; !(v++ > 10); ) {
      const {
        x: L,
        y: I,
        overflows: y
      } = N(j);
      J += L, E += I, C.x += L, C.y += I;
      {
        const U = si(j.anchor), D = y.x.before || y.x.after, q = y.y.before || y.y.after;
        let z = !1;
        if (["x", "y"].forEach((H) => {
          if (H === "x" && D && !h.x || H === "y" && q && !h.y) {
            const se = {
              anchor: {
                ...j.anchor
              },
              origin: {
                ...j.origin
              }
            }, ue = H === "x" ? U === "y" ? Po : Eo : U === "y" ? Eo : Po;
            se.anchor = ue(se.anchor), se.origin = ue(se.origin);
            const {
              overflows: Ae
            } = N(se);
            (Ae[H].before <= y[H].before && Ae[H].after <= y[H].after || Ae[H].before + Ae[H].after < (y[H].before + y[H].after) / 2) && (j = se, z = h[H] = !0);
          }
        }), z) continue;
      }
      y.x.before && (J += y.x.before, C.x += y.x.before), y.x.after && (J -= y.x.after, C.x -= y.x.after), y.y.before && (E += y.y.before, C.y += y.y.before), y.y.after && (E -= y.y.after, C.y -= y.y.after);
      {
        const U = ii(C, V);
        F.x = V.width - U.x.before - U.x.after, F.y = V.height - U.y.before - U.y.after, J += U.x.before, C.x += U.x.before, E += U.y.before, C.y += U.y.before;
      }
      break;
    }
    const O = si(j.anchor);
    return Object.assign(r.value, {
      "--v-overlay-anchor-origin": `${j.anchor.side} ${j.anchor.align}`,
      transformOrigin: `${j.origin.side} ${j.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ye(Lo(E)),
      left: e.isRtl.value ? void 0 : ye(Lo(J)),
      right: e.isRtl.value ? ye(Lo(-J)) : void 0,
      minWidth: ye(O === "y" ? Math.min(a.value, A.width) : a.value),
      maxWidth: ye(Ri(oa(F.x, a.value === 1 / 0 ? 0 : a.value, l.value))),
      maxHeight: ye(Ri(oa(F.y, i.value === 1 / 0 ? 0 : i.value, u.value)))
    }), {
      available: F,
      contentBox: C
    };
  }
  return de(() => [o.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => p()), hr(() => {
    const A = p();
    if (!A) return;
    const {
      available: C,
      contentBox: Z
    } = A;
    Z.height > C.y && requestAnimationFrame(() => {
      p(), requestAnimationFrame(() => {
        p();
      });
    });
  }), {
    updateLocation: p
  };
}
function Lo(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ri(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let pa = !0;
const qn = [];
function Ih(e) {
  !pa || qn.length ? (qn.push(e), ha()) : (pa = !1, e(), ha());
}
let _i = -1;
function ha() {
  cancelAnimationFrame(_i), _i = requestAnimationFrame(() => {
    const e = qn.shift();
    e && e(), qn.length ? ha() : pa = !0;
  });
}
const du = {
  none: null,
  close: wh,
  block: Th,
  reposition: Sh
}, yh = We({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in du
  }
}, "VOverlay-scroll-strategies");
function xh(e, t) {
  if (!ge) return;
  let r;
  or(async () => {
    r?.stop(), t.isActive.value && e.scrollStrategy && (r = Zr(), await new Promise((n) => setTimeout(n)), r.active && r.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, r) : du[e.scrollStrategy]?.(t, e, r);
    }));
  }), Qe(() => {
    r?.stop();
  });
}
function wh(e) {
  function t(r) {
    e.isActive.value = !1;
  }
  gu(e.targetEl.value ?? e.contentEl.value, t);
}
function Th(e, t) {
  const r = e.root.value?.offsetParent, n = [.../* @__PURE__ */ new Set([...Zn(e.targetEl.value, t.contained ? r : void 0), ...Zn(e.contentEl.value, t.contained ? r : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, s = ((a) => Ka(a) && a)(r || document.documentElement);
  s && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((a, i) => {
    a.style.setProperty("--v-body-scroll-x", ye(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", ye(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", ye(o)), a.classList.add("v-overlay-scroll-blocked");
  }), Qe(() => {
    n.forEach((a, i) => {
      const l = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), u = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), c = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -l, a.scrollTop = -u, a.style.scrollBehavior = c;
    }), s && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Sh(e, t, r) {
  let n = !1, o = -1, s = -1;
  function a(i) {
    Ih(() => {
      const l = performance.now();
      e.updateLocation.value?.(i), n = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (i) => i() : requestIdleCallback)(() => {
    r.run(() => {
      gu(e.targetEl.value ?? e.contentEl.value, (i) => {
        n ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            a(i);
          });
        })) : a(i);
      });
    });
  }), Qe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(o);
  });
}
function gu(e, t) {
  const r = [document, ...Zn(e)];
  r.forEach((n) => {
    n.addEventListener("scroll", t, {
      passive: !0
    });
  }), Qe(() => {
    r.forEach((n) => {
      n.removeEventListener("scroll", t);
    });
  });
}
const Eh = Symbol.for("vuetify:v-menu"), Ph = We({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Oh(e, t) {
  let r = () => {
  };
  function n(a) {
    r?.();
    const i = Number(a ? e.openDelay : e.closeDelay);
    return new Promise((l) => {
      r = Zm(i, () => {
        t?.(a), l(a);
      });
    });
  }
  function o() {
    return n(!0);
  }
  function s() {
    return n(!1);
  }
  return {
    clearDelay: r,
    runOpenDelay: o,
    runCloseDelay: s
  };
}
const Fh = We({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Ph()
}, "VOverlay-activator");
function Lh(e, t) {
  let {
    isActive: r,
    isTop: n,
    contentEl: o
  } = t;
  const s = nt("useActivator"), a = Pe();
  let i = !1, l = !1, u = !0;
  const c = Q(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = Q(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: m,
    runCloseDelay: p
  } = Oh(e, (h) => {
    h === (e.openOnHover && i || c.value && l) && !(e.openOnHover && r.value && !n.value) && (r.value !== h && (u = !0), r.value = h);
  }), A = Pe(), C = {
    onClick: (h) => {
      h.stopPropagation(), a.value = h.currentTarget || h.target, r.value || (A.value = [h.clientX, h.clientY]), r.value = !r.value;
    },
    onMouseenter: (h) => {
      h.sourceCapabilities?.firesTouchEvents || (i = !0, a.value = h.currentTarget || h.target, m());
    },
    onMouseleave: (h) => {
      i = !1, p();
    },
    onFocus: (h) => {
      Hm(h.target, ":focus-visible") !== !1 && (l = !0, h.stopPropagation(), a.value = h.currentTarget || h.target, m());
    },
    onBlur: (h) => {
      l = !1, h.stopPropagation(), p();
    }
  }, Z = Q(() => {
    const h = {};
    return d.value && (h.onClick = C.onClick), e.openOnHover && (h.onMouseenter = C.onMouseenter, h.onMouseleave = C.onMouseleave), c.value && (h.onFocus = C.onFocus, h.onBlur = C.onBlur), h;
  }), R = Q(() => {
    const h = {};
    if (e.openOnHover && (h.onMouseenter = () => {
      i = !0, m();
    }, h.onMouseleave = () => {
      i = !1, p();
    }), c.value && (h.onFocusin = () => {
      l = !0, m();
    }, h.onFocusout = () => {
      l = !1, p();
    }), e.closeOnContentClick) {
      const v = mt(Eh, null);
      h.onClick = () => {
        r.value = !1, v?.closeParents();
      };
    }
    return h;
  }), V = Q(() => {
    const h = {};
    return e.openOnHover && (h.onMouseenter = () => {
      u && (i = !0, u = !1, m());
    }, h.onMouseleave = () => {
      i = !1, p();
    }), h;
  });
  de(n, (h) => {
    h && (e.openOnHover && !i && (!c.value || !l) || c.value && !l && (!e.openOnHover || !i)) && !o.value?.contains(document.activeElement) && (r.value = !1);
  }), de(r, (h) => {
    h || setTimeout(() => {
      A.value = void 0;
    });
  }, {
    flush: "post"
  });
  const j = ri();
  or(() => {
    j.value && hr(() => {
      a.value = j.el;
    });
  });
  const N = ri(), J = Q(() => e.target === "cursor" && A.value ? A.value : N.value ? N.el : fu(e.target, s) || a.value), E = Q(() => Array.isArray(J.value) ? void 0 : J.value);
  let F;
  return de(() => !!e.activator, (h) => {
    h && ge ? (F = Zr(), F.run(() => {
      Rh(e, s, {
        activatorEl: a,
        activatorEvents: Z
      });
    })) : F && F.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Qe(() => {
    F?.stop();
  }), {
    activatorEl: a,
    activatorRef: j,
    target: J,
    targetEl: E,
    targetRef: N,
    activatorEvents: Z,
    contentEvents: R,
    scrimEvents: V
  };
}
function Rh(e, t, r) {
  let {
    activatorEl: n,
    activatorEvents: o
  } = r;
  de(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = i(u);
      c && a(c);
    }
    l && hr(() => s());
  }, {
    immediate: !0
  }), de(() => e.activatorProps, () => {
    s();
  }), Qe(() => {
    a();
  });
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && Ym(l, ze(o.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && $m(l, ze(o.value, u));
  }
  function i() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = fu(l, t);
    return n.value = u?.nodeType === Node.ELEMENT_NODE ? u : void 0, n.value;
  }
}
function fu(e, t) {
  if (!e) return;
  let r;
  if (e === "parent") {
    let n = t?.proxy?.$el?.parentNode;
    for (; n?.hasAttribute("data-no-activator"); )
      n = n.parentNode;
    r = n;
  } else typeof e == "string" ? r = document.querySelector(e) : "$el" in e ? r = e.$el : r = e;
  return r;
}
function _h(e) {
  return Oc(() => {
    const t = [], r = {};
    if (e.value.background)
      if (sa(e.value.background)) {
        if (r.backgroundColor = e.value.background, !e.value.text && dp(e.value.background)) {
          const n = ft(e.value.background);
          if (n.a == null || n.a === 1) {
            const o = Mc(n);
            r.color = o, r.caretColor = o;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (sa(e.value.text) ? (r.color = e.value.text, r.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: r
    };
  });
}
function kh(e, t) {
  const r = Q(() => ({
    background: me(e) ? e.value : null
  })), {
    colorClasses: n,
    colorStyles: o
  } = _h(r);
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: o
  };
}
const Dh = We({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Mh(e) {
  return {
    dimensionStyles: Q(() => {
      const r = {}, n = ye(e.height), o = ye(e.maxHeight), s = ye(e.maxWidth), a = ye(e.minHeight), i = ye(e.minWidth), l = ye(e.width);
      return n != null && (r.height = n), o != null && (r.maxHeight = o), s != null && (r.maxWidth = s), a != null && (r.minHeight = a), i != null && (r.minWidth = i), l != null && (r.width = l), r;
    })
  };
}
function jh() {
  if (!ge) return De(!1);
  const {
    ssr: e
  } = y0();
  if (e) {
    const t = De(!1);
    return Ha(() => {
      t.value = !0;
    }), t;
  } else
    return De(!0);
}
const Nh = We({
  eager: Boolean
}, "lazy");
function Bh(e, t) {
  const r = De(!1), n = Q(() => r.value || e.eager || t.value);
  de(t, () => r.value = !0);
  function o() {
    e.eager || (r.value = !1);
  }
  return {
    isBooted: r,
    hasContent: n,
    onAfterLeave: o
  };
}
function Uh() {
  return nt("useRouter")?.proxy?.$router;
}
let Ro = !1;
function Vh(e, t) {
  let r = !1, n, o;
  ge && e?.beforeEach && (hr(() => {
    window.addEventListener("popstate", s), n = e.beforeEach((a, i, l) => {
      Ro ? r ? t(l) : l() : setTimeout(() => r ? t(l) : l()), Ro = !0;
    }), o = e?.afterEach(() => {
      Ro = !1;
    });
  }), Qe(() => {
    window.removeEventListener("popstate", s), n?.(), o?.();
  }));
  function s(a) {
    a.state?.replaced || (r = !0, setTimeout(() => r = !1));
  }
}
function mu() {
  const t = nt("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ki = Symbol.for("vuetify:stack"), Pr = xt([]);
function Hh(e, t, r) {
  const n = nt("useStack"), o = !r, s = mt(ki, void 0), a = xt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  oo(ki, a);
  const i = De(Number(t.value));
  co(e, () => {
    const c = Pr.at(-1)?.[1];
    i.value = c ? c + 10 : Number(t.value), o && Pr.push([n.uid, i.value]), s?.activeChildren.add(n.uid), Qe(() => {
      if (o) {
        const d = X(Pr).findIndex((m) => m[0] === n.uid);
        Pr.splice(d, 1);
      }
      s?.activeChildren.delete(n.uid);
    });
  });
  const l = De(!0);
  o && or(() => {
    const c = Pr.at(-1)?.[0] === n.uid;
    setTimeout(() => l.value = c);
  });
  const u = Q(() => !a.activeChildren.size);
  return {
    globalTop: Ma(l),
    localTop: u,
    stackStyles: Q(() => ({
      zIndex: i.value
    }))
  };
}
function Zh(e) {
  return {
    teleportTarget: Q(() => {
      const r = e();
      if (r === !0 || !ge) return;
      const n = r === !1 ? document.body : typeof r == "string" ? document.querySelector(r) : r;
      if (n == null)
        return;
      let o = [...n.children].find((s) => s.matches(".v-overlay-container"));
      return o || (o = document.createElement("div"), o.className = "v-overlay-container", n.appendChild(o)), o;
    })
  };
}
const zh = We({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Wh = (e, t) => {
  let {
    slots: r
  } = t;
  const {
    transition: n,
    disabled: o,
    group: s,
    ...a
  } = e, {
    component: i = s ? Em : Cc,
    ...l
  } = typeof n == "object" ? n : {};
  return lo(i, ze(typeof n == "string" ? {
    name: o ? "" : n
  } : l, typeof n == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: o,
    group: s
  }).filter((u) => {
    let [c, d] = u;
    return d !== void 0;
  })), a), r);
};
function Jh(e) {
  const {
    modelValue: t,
    color: r,
    ...n
  } = e;
  return ne(Cc, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && ne("div", ze({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, n), null)]
  });
}
const pu = We({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Fh(),
  ...vp(),
  ...Dh(),
  ...Nh(),
  ...hh(),
  ...yh(),
  ...L0(),
  ...zh()
}, "VOverlay"), Di = Ga()({
  name: "VOverlay",
  directives: {
    ClickOutside: Kc
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...pu()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: r,
      attrs: n,
      emit: o
    } = t;
    const s = nt("VOverlay"), a = Pe(), i = Pe(), l = Pe(), u = Qa(e, "modelValue"), c = Q({
      get: () => u.value,
      set: (te) => {
        te && e.disabled || (u.value = te);
      }
    }), {
      themeClasses: d
    } = U0(e), {
      rtlClasses: m,
      isRtl: p
    } = Dp(), {
      hasContent: A,
      onAfterLeave: C
    } = Bh(e, c), Z = kh(Q(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: R,
      localTop: V,
      stackStyles: j
    } = Hh(c, _g(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: N,
      activatorRef: J,
      target: E,
      targetEl: F,
      targetRef: h,
      activatorEvents: v,
      contentEvents: O,
      scrimEvents: L
    } = Lh(e, {
      isActive: c,
      isTop: V,
      contentEl: l
    }), {
      teleportTarget: I
    } = Zh(() => {
      const te = e.attach || e.contained;
      if (te) return te;
      const ot = N?.value?.getRootNode() || s.proxy?.$el?.getRootNode();
      return ot instanceof ShadowRoot ? ot : !1;
    }), {
      dimensionStyles: y
    } = Mh(e), U = jh(), {
      scopeId: D
    } = mu();
    de(() => e.disabled, (te) => {
      te && (c.value = !1);
    });
    const {
      contentStyles: q,
      updateLocation: z
    } = Ah(e, {
      isRtl: p,
      contentEl: l,
      target: E,
      isActive: c
    });
    xh(e, {
      root: a,
      contentEl: l,
      targetEl: F,
      isActive: c,
      updateLocation: z
    });
    function H(te) {
      o("click:outside", te), e.persistent ? ar() : c.value = !1;
    }
    function se(te) {
      return c.value && R.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || te.target === i.value || te instanceof MouseEvent && te.shadowTarget === i.value);
    }
    ge && de(c, (te) => {
      te ? window.addEventListener("keydown", ue) : window.removeEventListener("keydown", ue);
    }, {
      immediate: !0
    }), Za(() => {
      ge && window.removeEventListener("keydown", ue);
    });
    function ue(te) {
      te.key === "Escape" && R.value && (l.value?.contains(document.activeElement) || o("keydown", te), e.persistent ? ar() : (c.value = !1, l.value?.contains(document.activeElement) && N.value?.focus()));
    }
    function Ae(te) {
      te.key === "Escape" && !R.value || o("keydown", te);
    }
    const Je = Uh();
    co(() => e.closeOnBack, () => {
      Vh(Je, (te) => {
        R.value && c.value ? (te(!1), e.persistent ? ar() : c.value = !1) : te();
      });
    });
    const Ar = Pe();
    de(() => c.value && (e.absolute || e.contained) && I.value == null, (te) => {
      if (te) {
        const ot = Sp(a.value);
        ot && ot !== document.scrollingElement && (Ar.value = ot.scrollTop);
      }
    });
    function ar() {
      e.noClickAnimation || l.value && qm(l.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Tp
      });
    }
    function go() {
      o("afterEnter");
    }
    function Bt() {
      C(), o("afterLeave");
    }
    return Bc(() => ne(Ve, null, [r.activator?.({
      isActive: c.value,
      targetRef: h,
      props: ze({
        ref: J
      }, v.value, e.activatorProps)
    }), U.value && A.value && ne(Gg, {
      disabled: !I.value,
      to: I.value
    }, {
      default: () => [ne("div", ze({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": c.value,
          "v-overlay--contained": e.contained
        }, d.value, m.value, e.class],
        style: [j.value, {
          "--v-overlay-opacity": e.opacity,
          top: ye(Ar.value)
        }, e.style],
        ref: a,
        onKeydown: Ae
      }, D, n), [ne(Jh, ze({
        color: Z,
        modelValue: c.value && !!e.scrim,
        ref: i
      }, L.value), null), ne(Wh, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: E.value,
        onAfterEnter: go,
        onAfterLeave: Bt
      }, {
        default: () => [Yg(ne("div", ze({
          ref: l,
          class: ["v-overlay__content", e.contentClass],
          style: [y.value, q.value]
        }, O.value, e.contentProps), [r.default?.({
          isActive: c
        })]), [[um, c.value], [mf("click-outside"), {
          handler: H,
          closeConditional: se,
          include: () => [N.value]
        }]])]
      })])]
    })])), {
      activatorEl: N,
      scrimEl: i,
      target: E,
      animateClick: ar,
      contentEl: l,
      globalTop: R,
      localTop: V,
      updateLocation: z
    };
  }
}), _o = Symbol("Forwarded refs");
function ko(e, t) {
  let r = e;
  for (; r; ) {
    const n = Reflect.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function qh(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e[_o] = r, new Proxy(e, {
    get(o, s) {
      if (Reflect.has(o, s))
        return Reflect.get(o, s);
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const a of r)
          if (a.value && Reflect.has(a.value, s)) {
            const i = Reflect.get(a.value, s);
            return typeof i == "function" ? i.bind(a.value) : i;
          }
      }
    },
    has(o, s) {
      if (Reflect.has(o, s))
        return !0;
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const a of r)
        if (a.value && Reflect.has(a.value, s))
          return !0;
      return !1;
    },
    set(o, s, a) {
      if (Reflect.has(o, s))
        return Reflect.set(o, s, a);
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const i of r)
        if (i.value && Reflect.has(i.value, s))
          return Reflect.set(i.value, s, a);
      return !1;
    },
    getOwnPropertyDescriptor(o, s) {
      const a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a) return a;
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const i of r) {
          if (!i.value) continue;
          const l = ko(i.value, s) ?? ("_" in i.value ? ko(i.value._?.setupState, s) : void 0);
          if (l) return l;
        }
        for (const i of r) {
          const l = i.value && i.value[_o];
          if (!l) continue;
          const u = l.slice();
          for (; u.length; ) {
            const c = u.shift(), d = ko(c.value, s);
            if (d) return d;
            const m = c.value && c.value[_o];
            m && u.push(...m);
          }
        }
      }
    }
  });
}
const Yh = We({
  id: String,
  interactive: Boolean,
  text: String,
  ...Bm(pu({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), $h = Ga()({
  name: "VTooltip",
  props: Yh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: r
    } = t;
    const n = Qa(e, "modelValue"), {
      scopeId: o
    } = mu(), s = ef(), a = Q(() => e.id || `v-tooltip-${s}`), i = Pe(), l = Q(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = Q(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = Q(() => e.transition ? e.transition : n.value ? "scale-transition" : "fade-transition"), d = Q(() => ze({
      "aria-describedby": a.value
    }, e.activatorProps));
    return Bc(() => {
      const m = Di.filterProps(e);
      return ne(Di, ze({
        ref: i,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: a.value
      }, m, {
        modelValue: n.value,
        "onUpdate:modelValue": (p) => n.value = p,
        transition: c.value,
        absolute: !0,
        location: l.value,
        origin: u.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: d.value,
        _disableGlobalStack: !0
      }, o), {
        activator: r.activator,
        default: function() {
          for (var p = arguments.length, A = new Array(p), C = 0; C < p; C++)
            A[C] = arguments[C];
          return r.default?.(...A) ?? e.text;
        }
      });
    }), qh({}, i);
  }
});
function Gh(e, t) {
  const r = typeof e == "string" ? gf(e) : e, n = Kh(r, t);
  return {
    mounted: n,
    updated: n,
    unmounted(o) {
      wc(null, o);
    }
  };
}
function Kh(e, t) {
  return function(r, n, o) {
    const s = typeof t == "function" ? t(n) : t, a = n.value?.text ?? n.value ?? s?.text, i = Sc(n.value) ? n.value : {}, l = () => a ?? r.textContent, u = (o.ctx === n.instance.$ ? Qh(o, n.instance.$)?.provides : o.ctx?.provides) ?? n.instance.$.provides, c = lo(e, ze(s, i), l);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), n.instance.$.appContext, {
      provides: u
    }), wc(c, r);
  };
}
function Qh(e, t) {
  const r = /* @__PURE__ */ new Set(), n = (s) => {
    for (const a of s) {
      if (!a) continue;
      if (a === e || a.el && e.el && a.el === e.el)
        return !0;
      r.add(a);
      let i;
      if (a.suspense ? i = n([a.ssContent]) : Array.isArray(a.children) ? i = n(a.children) : a.component?.vnode && (i = n([a.component?.subTree])), i)
        return i;
      r.delete(a);
    }
    return !1;
  };
  if (!n([t.subTree]))
    return t;
  const o = Array.from(r).reverse();
  for (const s of o)
    if (s.component)
      return s.component;
  return t;
}
const Xh = Gh($h, (e) => ({
  activator: "parent",
  location: e.arg?.replace("-", " "),
  text: typeof e.value == "boolean" ? void 0 : e.value
})), eA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Kc,
  Intersect: q0,
  Mutate: $0,
  Resize: Q0,
  Ripple: oh,
  Scroll: sh,
  Tooltip: Xh,
  Touch: mh
}, Symbol.toStringTag, { value: "Module" })), tA = {
  dark: !1,
  colors: {
    windowBackground: "#FAFAFA",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#D7EDF5",
    extensionActivatedBorder: "#D7EDF5",
    extensionActivatedIconBackground: "#85C3DB",
    extensionActivatedIconColor: "#428FAD",
    extensionActivatedTitle: "#3B3B3B",
    extensionActivatedSubtitle: "#838D96",
    extensionActivatedSwitch: "#ED815F",
    popUpExtensionActivatedSwitch: "#ED815F",
    radioBackground: "#FFFFFF",
    radioBorder: "#ECECEC",
    radioFont: "#858585",
    radioIcon: "#858585",
    radioItem: "#FFFFFF",
    radioItemBorder: "#858585",
    radioItemText: "#858585",
    radioItemSelected: "#F5B6A2",
    radioItemSelectedText: "#3B3B3B",
    footerFont: "#A0A0A0",
    footerFontVersion: "#D5D5D5",
    bannerBg: "#FAFAFA",
    sidebarBg: "#D7EDF5",
    sidebarTextColor: "#3B3B3B",
    sidebarHover: "#1E94C1",
    titleColor: "#123F50",
    subtitleColor: "#344054",
    actionBtnColor: "#428FAD",
    actionBtnHover: "#CBD5E0",
    modalBg: "#FFFFFF",
    whatsAppIcon: "#25D366",
    youtbeIcon: "#FF0000",
    modalTitleColor: "#123F50",
    modalSubTitleColor: "#333333",
    modalSideBarBg: "#D7EDF5",
    modalSideBarTitle: "#3B3B3B",
    modalSideBarTextColor: "#286D88",
    modalSideBarFooter: "#C4E1EB",
    modalActiveStep: "#1E94C1",
    modalActiveStepCircle: "#026489",
    modalActiveStepText: "#FFFFFF",
    modalCompletedStep: "#5393ABE8",
    modalCompletedStepText: "#5393ABE8",
    modalStepText: "#5393ABE8",
    modalStepCircleText: "#5393ABE8",
    modalUploadBtn: "#E8592B",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#E7F8FF",
    modalCardEtiquetaBorder: "#297592",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#838D96",
    modalCardEtiquetaIconBg: "#D3F1FC",
    modalCardEtiquetaIconColor: "#428FAD",
    modalEtiquetaBg: "#EEFAFF",
    modalEtiquetaBgProcessos: "#D7EDF5",
    modalEtiquetaBgAdd: "#C9DDE3",
    modalEtiquetaBgRemove: "#F5B6A2",
    modalEtiquetaText: "#026489",
    modalCheckboxBg: "#428FAD",
    modalPrimaryBtn: "#5BBD6E",
    modalPrimaryBtnText: "#FFFFFF",
    modalSecondaryBtn: "#ffffff00",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#6E6C6C",
    modalActionBtn: "#E8592B",
    autocompleteItemColor: "#026489",
    errorMessage: "#E60000",
    resultTableHeaderBackgroud: "#E8ECF2",
    resultTableHeaderFont: "#667085",
    etiquetaPadrao: "#5BC0DE"
  }
}, rA = {
  dark: !1,
  colors: {
    windowBackground: "#F1F1F2",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#525658",
    extensionActivatedBorder: "#525658",
    extensionActivatedIconBackground: "#7C7C7C",
    extensionActivatedIconColor: "#F1F1F2",
    extensionActivatedTitle: "#FFFFFF",
    extensionActivatedSubtitle: "#E2E2E2",
    extensionActivatedSwitch: "#20799B",
    popUpExtensionActivatedSwitch: "#20799B",
    radioBackground: "#E6E6E6",
    radioBorder: "#DCDCDC",
    radioFont: "#858585",
    radioIcon: "#858585",
    radioItem: "#FFFFFF",
    radioItemBorder: "#858585",
    radioItemText: "#858585",
    radioItemSelected: "#20799B",
    radioItemSelectedText: "#FFFFFF",
    footerFont: "#A0A0A0",
    footerFontVersion: "#D5D5D5",
    titleColor: "#DEDEDE",
    bannerBg: "#525658",
    sidebarBg: "#424648",
    sidebarTextColor: "#DEDEDE",
    sidebarHover: "#1E94C1",
    subtitleColor: "#DEDEDE",
    actionBtnColor: "#DEDEDE",
    actionBtnHover: "#CBD5E0",
    whatsAppIcon: "#25D366",
    youtbeIcon: "#FF0000",
    modalBg: "#424648",
    modalTitleColor: "#FFFFFF",
    modalSubTitleColor: "#FFFFFF",
    modalSideBarBg: "#525658",
    modalSideBarTitle: "#FFFFFF",
    modalSideBarTextColor: "#FFFFFF",
    modalSideBarFooter: "#424648",
    modalActiveStep: "#424648",
    modalActiveStepCircle: "#525658",
    modalActiveStepText: "#FFFFFF",
    modalCompletedStep: "#424648",
    modalCompletedStepText: "#FFFFFF",
    modalStepText: "#FFFFFF",
    modalStepCircleText: "#525658",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#F6F6F6",
    modalCardEtiquetaBorder: "#000000",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#838D96",
    modalCardEtiquetaIconBg: "#525658",
    modalCardEtiquetaIconColor: "#FFFFFF",
    modalEtiquetaBg: "#F0F0F0",
    modalEtiquetaBgProcessos: "#D7EDF5",
    modalEtiquetaBgAdd: "#C9DDE3",
    modalEtiquetaBgRemove: "#F5B6A2",
    modalEtiquetaText: "#123F50",
    modalCheckboxBg: "#525658",
    modalPrimaryBtn: "#5BBD6E",
    modalPrimaryBtnText: "#FFFFFF",
    modalSecondaryBtn: "#ffffff00",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#525658",
    modalActionBtn: "#E0E0E0",
    autocompleteItemColor: "#F0F0F0",
    errorMessage: "#FC8181",
    resultTableHeaderBackgroud: "#E8ECF2",
    resultTableHeaderFont: "#667085",
    etiquetaPadrao: "#5BC0DE"
  }
}, nA = {
  dark: !1,
  colors: {
    windowBackground: "#0000001C",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#FFFFFF",
    extensionActivatedBorder: "#20799B",
    extensionActivatedIconBackground: "#000000",
    extensionActivatedIconColor: "#FFFFFF",
    extensionActivatedTitle: "#000000",
    extensionActivatedSubtitle: "#000000",
    extensionActivatedSwitch: "#FFFFFF",
    popUpExtensionActivatedSwitch: "#000000",
    radioBackground: "#000000",
    radioBorder: "#5B5F61",
    radioFont: "#DEDEDE",
    radioIcon: "#DEDEDE",
    radioItem: "#424648",
    radioItemBorder: "#E0E0E0",
    radioItemText: "#E0E0E0",
    radioItemSelected: "#FFFFFF",
    radioItemSelectedText: "#3B3B3B",
    footerFont: "#FFFFFF",
    footerFontVersion: "#D5D5D5",
    bannerBg: "#1A1C1C",
    sidebarBg: "#FFFFFF",
    sidebarTextColor: "#000000",
    sidebarHover: "#000000",
    titleColor: "#FFFFFF",
    subtitleColor: "#000000",
    actionBtnColor: "#000000",
    actionBtnHover: "#FFFFFF",
    whatsAppIcon: "#FFFFFF",
    youtbeIcon: "#FFFFFF",
    modalBg: "#1A1C1C",
    modalTitleColor: "#FFFFFF",
    modalSubTitleColor: "#FFFFFF",
    modalSideBarBg: "#FFFFFF",
    modalSideBarTitle: "#000000",
    modalSideBarTextColor: "#000000",
    modalSideBarFooter: "#EDEDED",
    modalActiveStep: "#000000",
    modalActiveStepCircle: "#FFFFFF",
    modalActiveStepText: "#000000",
    modalCompletedStep: "#000000",
    modalCompletedStepText: "#000000",
    modalStepText: "#000000",
    modalStepCircleText: "#000000",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#FFFFFF",
    modalCardEtiquetaBorder: "#000000",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#000000",
    modalCardEtiquetaIconBg: "#000000",
    modalCardEtiquetaIconColor: "#FFFFFF",
    modalEtiquetaBg: "#F0F0F0",
    modalEtiquetaBgProcessos: "#F0F0F0",
    modalEtiquetaBgAdd: "#F0F0F0",
    modalEtiquetaBgRemove: "#F0F0F0",
    modalEtiquetaText: "#101828",
    modalCheckboxBg: "#000000",
    modalPrimaryBtn: "#FFFFFF",
    modalPrimaryBtnText: "#000000",
    modalSecondaryBtn: "#000000",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#FFFFFF",
    modalActionBtn: "#FFFFFF",
    autocompleteItemColor: "#000000",
    errorMessage: "#F56565",
    resultTableHeaderBackgroud: "#D0D0D0",
    resultTableHeaderFont: "#000000",
    etiquetaPadrao: "#2D2F32"
  }
}, oA = {
  dark: !1,
  colors: {
    primary: "#ff912c"
    // Altere essa cor para sua cor primária desejada
  },
  variables: {
    "theme-on-primary": "#FFFFFF"
    // Cor do texto para botões primários (branco)
  }
};
Yc({
  directives: eA,
  icons: {
    defaultSet: "mdi",
    aliases: H0,
    sets: {
      mdi: Z0
    }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: aA(tA, oA),
      dark: rA,
      highContrast: nA
    }
  }
});
function aA(e, t) {
  return {
    ...e,
    ...t,
    colors: {
      ...e.colors,
      ...t.colors
    },
    variables: {
      ...e.variables,
      ...t.variables
    }
  };
}
sA();
function sA() {
  try {
    return (typeof window < "u" ? window : self).navigator.userAgent;
  } catch {
    return "";
  }
}
var Xa = /* @__PURE__ */ ((e) => (e.GESTOR = "gestor", e))(Xa || {});
function iA(e, t) {
  const r = e;
  return r ? Array.isArray(r) ? r.find((o) => o.url.includes(t)) : r : void 0;
}
function lA() {
  try {
    return typeof window < "u" && window.location.href.match(rr.HREFS.ROOT)?.at(0) || "";
  } catch {
    return "";
  }
}
async function cA(e, t) {
  return await (await fetch(e, t)).text();
}
var hu = /* @__PURE__ */ ((e) => (e.atalhoModelo = "atalhoModelo", e.atalhoEntrada = "atalhoEntrada", e.entradaNegativa = "entradaNegativa", e))(hu || {});
({
  ...hu
});
lA();
function uA(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    t = (t << 5) - t + n, t &= t;
  }
  return new Uint32Array([t])[0].toString(36);
}
class Au {
  /**
   * @param filters - Filtros de URL para determinar onde o script será injetado
   * @param injectFunction - Função a ser injetada nas páginas
   * @param processResult - Função que processa o resultado obtido do script injetado
   * @param initialValue - Valor inicial para processamento
   * @param maxTries - Número máximo de tentativas de injeção
   * @param intervalTime - Intervalo entre tentativas em milissegundos
   * @param scriptArgs - Argumentos adicionais a serem passados para o script
   */
  constructor(t, r, n, o = null, s = 50, a = 250, i = []) {
    this.filters = t, this.injectFunction = r, this.processResult = n, this.initialValue = o, this.maxTries = s, this.intervalTime = a, this.scriptArgs = i, this.setupNavigationListener();
  }
  /**
   * Configura o listener de navegação para executar o script
   * quando uma página correspondente aos filtros for carregada
   */
  setupNavigationListener() {
    w.webNavigation.onCompleted.addListener(async (t) => this.handleNavigation(t), {
      url: this.filters.url
    });
  }
  /**
   * Manipula o evento de navegação completa
   */
  async handleNavigation(t) {
    if (!await Lu()) return;
    let r = 0, n;
    const o = setInterval(async () => {
      if (r++ > this.maxTries) {
        clearInterval(o);
        return;
      }
      try {
        if (n = await this.executeScript(t), n.result === null) {
          clearInterval(o);
          return;
        }
        if (n.result !== !1) {
          clearInterval(o);
          const s = n.result;
          this.processResult(s, this.initialValue);
        }
      } catch (s) {
        dA.erro(`[${this.constructor.name}] Erro ao injetar script:`, s);
      }
    }, this.intervalTime);
  }
  /**
   * Executa a função no contexto da página
   */
  async executeScript(t) {
    return (await w.scripting.executeScript({
      target: { tabId: t.tabId, frameIds: [t.frameId] },
      func: this.injectFunction,
      args: [Xt, ...this.scriptArgs],
      world: Xt ? "ISOLATED" : "MAIN"
    }))[0];
  }
}
const dA = new $e({
  recurso: "ScriptInjectHandler"
});
function gA(...e) {
  let t = class Le {
    static estilos = { azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;", vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;", laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;", verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;", cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;" };
    static console = { assert: (...a) => {
    }, count: (...a) => {
    }, debug: (...a) => {
    }, dir: (...a) => {
    }, error: (...a) => {
    }, group: (...a) => {
    }, groupCollapsed: (...a) => {
    }, groupEnd: (...a) => {
    }, info: (...a) => {
    }, log: (...a) => {
    }, profile: (...a) => {
    }, table: (...a) => {
    }, time: (...a) => {
    }, timeEnd: (...a) => {
    }, trace: (...a) => {
    }, warn: (...a) => {
    } };
    static autorizarEmProducao = !1;
    static info(a) {
      Le.log(a, Le.estilos.azul);
    }
    static erro(a) {
      a instanceof Error ? (Le.log(a.message, Le.estilos.vermelho), console.log(a)) : Le.log(a, Le.estilos.vermelho);
    }
    static aviso(a) {
      Le.log(a, Le.estilos.laranja);
    }
    static sucesso(a) {
      Le.log(a, Le.estilos.verde);
    }
    static detalhes(a) {
      Le.log(a, Le.estilos.cinza);
    }
    static inspecionar(a, i) {
      this.autorizarEmProducao && (Le.detalhes(a), console.log(i));
    }
    static log(a, i = "") {
      this.autorizarEmProducao && console.log(`%c${a}`, i);
    }
  };
  class r {
    recurso;
    contexto_;
    adicional;
    get contexto() {
      return function(a) {
        return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }(this.contexto_) === "string" ? this.contexto_ : this.contexto_();
    }
    static _depurador;
    static _baseConsoleFunc = (a, ...i) => {
      const l = `[P-J-e+R-tester][${r._depurador.recurso}][${r._depurador.contexto}]${r._depurador.adicional ? `[${r._depurador.adicional}]` : ""}: `;
      typeof i[0] == "string" ? i[0] = i[0].startsWith("%c") ? `%c${l}${i[0].slice(2)}` : `${l}${i[0]}` : i = [l].concat(i), a(...i);
    };
    static _console = { assert: (...a) => (...i) => {
    }, count: (...a) => (...i) => {
    }, debug: (...a) => (...i) => {
    }, dir: (...a) => (...i) => {
    }, error: (...a) => (...i) => {
    }, group: (...a) => (...i) => {
    }, groupCollapsed: (...a) => (...i) => {
    }, groupEnd: (...a) => (...i) => {
    }, info: (...a) => (...i) => {
    }, log: (...a) => (...i) => {
    }, profile: (...a) => (...i) => {
    }, table: (...a) => (...i) => {
    }, time: (...a) => (...i) => {
    }, timeEnd: (...a) => (...i) => {
    }, trace: (...a) => (...i) => {
    }, warn: (...a) => (...i) => {
    } };
    constructor({ recurso: a, contexto: i, adicional: l }) {
      this.recurso = a.replace(/^_/, ""), this.contexto_ = i || "isolated", this.adicional = l;
    }
    get console() {
      return r._depurador = this, r._console;
    }
    info(a) {
      this.log(a, t.estilos.azul);
    }
    erro(a, i) {
      const l = a instanceof Error ? a.message : a;
      this.log(l, t.estilos.vermelho, i), a instanceof Error && console.log(a, i);
    }
    aviso(a) {
      this.log(a, t.estilos.laranja);
    }
    sucesso(a, i) {
      this.log(a, t.estilos.verde, i);
    }
    detalhes(a) {
      this.log(a, t.estilos.cinza);
    }
    inspecionar(a, i) {
      this.detalhes(a), this.console.log(i);
    }
    log(a, i = "", l) {
      this.console.log(`%c${a}`, i, l);
    }
  }
  const n = new r({ recurso: "pje-payload", contexto: "isolated" });
  function o(s) {
    try {
      return function(a) {
        var i, l;
        if (window.top !== window) return null;
        const u = a, c = window;
        n.log("tentativa pelo painel usuário");
        const d = u ? (i = c.wrappedJSObject) == null ? void 0 : i.pjePayload : c.pjePayload;
        if (d?.CONSTANTES.WEB_ROOT) return d;
        n.log("tentativa pelo página de login");
        const m = u ? (l = c.wrappedJSObject) == null ? void 0 : l.WEB_ROOT : c.WEB_ROOT;
        if (m) try {
          const A = new URL(m);
          return { typs: "pjePayload", CONSTANTES: { WEB_ROOT: m, PATH: A.pathname.length > 1 ? A.pathname : "" } };
        } catch (A) {
          n.erro("A url para WEB_ROOT é inválida", A);
        }
        n.log("tentativa pelo meta property e origem janela");
        const p = document.querySelector("meta[property=og\\:url]");
        if (p) {
          let A;
          try {
            A = new URL(p.content).pathname;
          } catch {
            A = p.content;
          }
          return { typs: "pjePayload", CONSTANTES: { WEB_ROOT: `${window.origin}${p.content}`, PATH: A } };
        }
        return !1;
      }(s);
    } catch (a) {
      return n.erro("Erro ao executar script isolados:", a instanceof Error ? a : new Error(String(a))), !1;
    }
  }
  return o(...e);
}
const Xr = new rl(null), fA = (e, t) => {
  t && Object.assign(t.CONSTANTES, e.CONSTANTES), Xr.next(e);
}, mA = {
  url: [
    {
      urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
    }
  ]
};
new Au(
  mA,
  gA,
  fA,
  Xr.getValue()
);
const pA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PJePayloadUpdateSubject: Xr
}, Symbol.toStringTag, { value: "Module" }));
function hA(...e) {
  let t = class Re {
    static estilos = { azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;", vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;", laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;", verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;", cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;" };
    static console = { assert: (...a) => {
    }, count: (...a) => {
    }, debug: (...a) => {
    }, dir: (...a) => {
    }, error: (...a) => {
    }, group: (...a) => {
    }, groupCollapsed: (...a) => {
    }, groupEnd: (...a) => {
    }, info: (...a) => {
    }, log: (...a) => {
    }, profile: (...a) => {
    }, table: (...a) => {
    }, time: (...a) => {
    }, timeEnd: (...a) => {
    }, trace: (...a) => {
    }, warn: (...a) => {
    } };
    static autorizarEmProducao = !1;
    static info(a) {
      Re.log(a, Re.estilos.azul);
    }
    static erro(a) {
      a instanceof Error ? (Re.log(a.message, Re.estilos.vermelho), console.log(a)) : Re.log(a, Re.estilos.vermelho);
    }
    static aviso(a) {
      Re.log(a, Re.estilos.laranja);
    }
    static sucesso(a) {
      Re.log(a, Re.estilos.verde);
    }
    static detalhes(a) {
      Re.log(a, Re.estilos.cinza);
    }
    static inspecionar(a, i) {
      this.autorizarEmProducao && (Re.detalhes(a), console.log(i));
    }
    static log(a, i = "") {
      this.autorizarEmProducao && console.log(`%c${a}`, i);
    }
  };
  class r {
    recurso;
    contexto_;
    adicional;
    get contexto() {
      return function(a) {
        return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }(this.contexto_) === "string" ? this.contexto_ : this.contexto_();
    }
    static _depurador;
    static _baseConsoleFunc = (a, ...i) => {
      const l = `[P-J-e+R-tester][${r._depurador.recurso}][${r._depurador.contexto}]${r._depurador.adicional ? `[${r._depurador.adicional}]` : ""}: `;
      typeof i[0] == "string" ? i[0] = i[0].startsWith("%c") ? `%c${l}${i[0].slice(2)}` : `${l}${i[0]}` : i = [l].concat(i), a(...i);
    };
    static _console = { assert: (...a) => (...i) => {
    }, count: (...a) => (...i) => {
    }, debug: (...a) => (...i) => {
    }, dir: (...a) => (...i) => {
    }, error: (...a) => (...i) => {
    }, group: (...a) => (...i) => {
    }, groupCollapsed: (...a) => (...i) => {
    }, groupEnd: (...a) => (...i) => {
    }, info: (...a) => (...i) => {
    }, log: (...a) => (...i) => {
    }, profile: (...a) => (...i) => {
    }, table: (...a) => (...i) => {
    }, time: (...a) => (...i) => {
    }, timeEnd: (...a) => (...i) => {
    }, trace: (...a) => (...i) => {
    }, warn: (...a) => (...i) => {
    } };
    constructor({ recurso: a, contexto: i, adicional: l }) {
      this.recurso = a.replace(/^_/, ""), this.contexto_ = i || "isolated", this.adicional = l;
    }
    get console() {
      return r._depurador = this, r._console;
    }
    info(a) {
      this.log(a, t.estilos.azul);
    }
    erro(a, i) {
      const l = a instanceof Error ? a.message : a;
      this.log(l, t.estilos.vermelho, i), a instanceof Error && console.log(a, i);
    }
    aviso(a) {
      this.log(a, t.estilos.laranja);
    }
    sucesso(a, i) {
      this.log(a, t.estilos.verde, i);
    }
    detalhes(a) {
      this.log(a, t.estilos.cinza);
    }
    inspecionar(a, i) {
      this.detalhes(a), this.console.log(i);
    }
    log(a, i = "", l) {
      this.console.log(`%c${a}`, i, l);
    }
  }
  const n = new r({ recurso: "keycloak-identity", contexto: "isolated" });
  function o(s) {
    try {
      return function() {
        if (window.top !== window) return null;
        n.log("Tentando obter cookie KEYCLOAK_IDENTITY");
        try {
          const a = document.cookie.split(";").map((i) => i.trim()).find((i) => i.startsWith("KEYCLOAK_IDENTITY="));
          if (a) {
            const [i, l] = a.split("=");
            return n.log("Cookie KEYCLOAK_IDENTITY encontrado"), decodeURIComponent(l);
          }
          return n.log("Cookie KEYCLOAK_IDENTITY não encontrado"), !1;
        } catch (a) {
          return n.erro("Erro ao buscar cookie:", a instanceof Error ? a : new Error(String(a))), !1;
        }
      }();
    } catch (a) {
      return n.erro("Erro ao executar script isolados:", a instanceof Error ? a : new Error(String(a))), !1;
    }
  }
  return o(...e);
}
const Cu = new rl(null), AA = (e, t) => {
  Cu.next(e);
}, CA = {
  url: [
    {
      urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
    }
  ]
};
new Au(
  CA,
  hA,
  AA
);
let Aa = null, be = null;
setInterval(async () => {
  if (!be) {
    be = (await w.storage.local.get("pjeCache"))?.pjeCache ?? {};
    return;
  }
  const e = (/* @__PURE__ */ new Date()).getTime(), t = Object.keys(be);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    be[n].expires < e && delete be[n];
  }
  w.storage.local.set({ pjeCache: be });
}, 1e3 * 30);
Xr.subscribe((e) => {
  e && (Aa = IA(e.CONSTANTES.WEB_ROOT, e.CONSTANTES.COOKIES));
});
Cu.subscribe((e) => {
});
async function vA(e) {
  if (be || (be = (await w.storage.local.get("pjeCache"))?.pjeCache ?? {}), !Aa) return null;
  if (e.endpoint) {
    const { cache: t = "indefinido", maxAge: r = 30 } = e.opcoes ?? {};
    if (t !== "indefinido" && t !== "padrão" && t !== "não-guardar" && t !== "recarregar" && t !== "apenas-se-presente-no-cache")
      return null;
    const n = uA(JSON.stringify(e));
    if (t === "apenas-se-presente-no-cache")
      return (be ?? {})[n]?.conteudo ?? null;
    const o = /* @__PURE__ */ new Date();
    let s = !1;
    if (t === "indefinido" || t === "padrão") {
      if (be[n] && be[n].conteudo && be[n].expires > o.getTime())
        return be[n].conteudo;
      s = !0;
    }
    const a = await Aa[e.endpoint](
      ...e.args ?? []
    );
    if (t === "não-guardar")
      return a;
    if (t === "recarregar" || s) {
      const i = o.getTime() + r * 6e4, l = { conteudo: a, expires: i };
      return a && be && (be[n] = l, Ce.console.log({ chaveCache: n, atCache: be[n] })), a;
    }
    return a;
  }
  return null;
}
yt("requisicaoAPI", async (e) => vA(e.data));
function bA(e, t) {
  const r = `${e}/seam/resource/rest/pje-legacy`, n = new Headers({
    Cookie: t,
    "Content-Type": "application/json"
  });
  return {
    baseURL: e,
    headers: n,
    get(o) {
      return fetch(`${r}${o}`, {
        headers: n,
        method: "GET"
      });
    },
    post(o, s) {
      return fetch(`${r}${o}`, {
        headers: n,
        method: "POST",
        body: s ?? ""
      });
    }
  };
}
function IA(e, t) {
  const r = bA(e, t);
  return {
    "processo::numeroProcessoValidar <TParamsNumeroProcesso>": async (n) => fe(
      await r.get(`/processos/numero-processo/${n}/validar`)
    ),
    "painelUsuario::tarefas <TParamsCriteriosMinimos>": async (n) => {
      const o = await r.post("/painelUsuario/tarefas", JSON.stringify(n));
      return fe(o);
    },
    "painelUsuario::tarefasFavoritas <TParamsCriteriosMinimos>": async (n) => fe(
      await r.post("/painelUsuario/tarefasFavoritas", JSON.stringify(n))
    ),
    "painelUsuario::tarefasAssinatura <>": async () => fe(await r.get("/painelUsuario/tarefasAssinatura")),
    "painelUsuario::processosTarefa <TParamsProcessosTarefa>": async (n, o, s) => fe(
      await r.post(
        `/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${n}/${o}`,
        JSON.stringify(s)
      )
    ),
    "painelUsuario::inserirEtiquetaNoProcesso <TParamsTagIdProcesso>": async (n, o) => {
      const s = await r.post(
        "/painelUsuario/processoTags/inserir",
        JSON.stringify({
          tag: n,
          idProcesso: o
        })
      );
      return fe(s);
    },
    "painelUsuario::removerEtiquetaDoProcesso <TParamsIdTagIdProcesso>": async (n, o) => {
      const s = await r.post(
        "/painelUsuario/processoTags/remover",
        JSON.stringify({
          idTag: parseInt(n),
          idProcesso: parseInt(o)
        })
      );
      return fe(s);
    },
    "painelUsuario::etiquetasDoProcesso <TParamsIdProcesso>": async (n) => {
      const o = await r.get(`/painelUsuario/processoTags/listar/${n}`);
      return fe(o);
    },
    "painelUsuario::etiquetasProcessosTarefas <TParamsProcessosTarefas>": async (n, o, s) => {
      const a = await r.post(
        `/painelUsuario/recuperarEtiquetasQuantitativoProcessoTarefaPendente/${n}/${o}`,
        JSON.stringify(s || {})
      );
      return fe(a);
    },
    "painelUsuario::processoTarefaPorIdProcesso <TParamsTarefaIdProcesso>": async (n, o) => fe(
      await r.get(
        `/painelUsuario/recuperarProcessoPorTarefaIdentificador/${n}/${o}`
      )
    ),
    "painelUsuario::processoTarefaPorIdTarefa <TParamsTarefa>": async (n) => fe(await r.get(`/painelUsuario/recuperarProcesso/${n}/false`)),
    "painelUsuario::transicoesSaidaTarefa <TParamsTarefa>": async (n) => fe(await r.get(`/painelUsuario/transicoes/${n}`)),
    "painelUsuario::movimentarTarefa <TParamsTarefaTransicao>": async (n, o) => fe(
      await r.get(`/painelUsuario/movimentar/${n}/${o}`)
    ),
    "painelUsuario::movimentarTarefaIndividual <TParamsTarefaTransicao>": async (n, o) => fe(
      await r.get(`/painelUsuario/movimentarIndividual/${n}/${o}`)
    ),
    "painelUsuario::historicoTarefas <TParamsIdProcesso>": async (n) => fe(await r.get(`/painelUsuario/historicoTarefas/${n}`)),
    "processo::ultimoMovimento <TParamsIdProcesso>": async (n) => fe(
      await r.get(`/processos/${n}/ultimoMovimento`)
    ),
    "documento::download <TParamsDocumento>": async (n) => fe(await r.get(`documento/download/${n}`)),
    "painelUsuario::obterTodasEtiquetas <>": async () => await fe(
      await r.post("/painelUsuario/etiquetas")
    ),
    "painelUsuario::classesJudiciais <>": async () => await fe(
      await r.get("/painelUsuario/classesJudiciais")
    ),
    "usuario::dadosAtuais <>": async () => {
      const n = await r.get("/usuario/currentUser");
      return fe(n);
    }
  };
}
async function fe(e) {
  let t;
  if (e) {
    try {
      return t = await e.text(), JSON.parse(t);
    } catch (r) {
      Ce.erro(r);
    }
    if (Ce.log(t ?? ""), t) return t;
  }
  return null;
}
async function Vr(e) {
  const t = e.args;
  if (!t) return;
  const n = await w.webNavigation.getAllFrames({ tabId: e.senderTab });
  return iA(n, t.frame);
}
async function Tt(e) {
  const t = { tabId: e.senderTab }, r = await Vr({ ...e, args: { frame: "movimentar.seam" } }) || await Vr({ ...e, args: { frame: "minutarLotePainelNovoCK.seam" } }) || await Vr({ ...e, args: { frame: "listView.seam" } });
  return r ? Object.assign(t, { tabId: e.senderTab, frameIds: [r.frameId] }) : Object.assign(t, { tabId: e.senderTab, allFrames: !0 }), t;
}
async function yA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: (r) => {
      if ("CKEDITOR" in window) {
        const n = window;
        n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].insertHtml(r);
      } else if (window.wrappedJSObject) {
        const n = window;
        n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].insertHtml(r);
      }
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function xA(e) {
  const t = e.args ?? "";
  return await w.scripting.executeScript({
    target: { tabId: e.senderTab },
    func: (r) => {
      try {
        if (r) {
          if ("tinyMCE" in window) {
            const n = window;
            n.tinyMCE.activeEditor.setContent(r), n.tinyMCE.activeEditor.focus();
          } else if (window.wrappedJSObject) {
            const n = window;
            n.wrappedJSObject.tinyMCE.activeEditor.setContent(r), n.wrappedJSObject.tinyMCE.activeEditor.focus();
          }
          setTimeout(() => {
            Array.from(document.querySelectorAll("input")).find(
              (o) => o.id.includes("update")
            )?.dispatchEvent(new Event("click", {}));
          }, 250);
        }
        if ("salvar" in window && typeof window.salvar == "function") {
          const n = window;
          window.salvar(
            n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].getData()
          );
        } else if (window.wrappedJSObject) {
          const n = window;
          n.wrappedJSObject.salvar(
            n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].getData()
          );
        }
      } catch (n) {
        console.warn(n);
      }
    },
    args: [t],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function wA(e) {
  return (await w.scripting.executeScript({
    target: { tabId: e.senderTab },
    func: () => {
      let t;
      if (window.sessionStorage.pjeLegacyUrl && typeof window.sessionStorage.pjeLegacyUrl == "string")
        try {
          const r = JSON.parse(window.sessionStorage.pjeLegacyUrl);
          r && r.value && typeof r.value == "string" && (t = r.value);
        } catch {
        }
      return t ?? window.location.href;
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  })).at(0)?.result;
}
async function TA(e) {
  return await w.webNavigation.getAllFrames({ tabId: e.senderTab });
}
async function SA(e) {
  const t = e.args;
  if (!t) return { erro: "Não foi possível obter os argumentos da requisição" };
  if (!t.url) return { erro: "Não foi possível obter a url da requisição" };
  if (!t.init) return { erro: "Não foi possível obter o init da requisição" };
  const r = await Vr({ ...e, args: { frame: "/pje/" } });
  return r ? await w.scripting.executeScript({
    target: { tabId: e.senderTab, frameIds: [r.frameId] },
    func: cA,
    args: [t.url, t.init],
    world: "ISOLATED"
  }) : { erro: "Não possível obter o frame do PJE" };
}
async function EA(e) {
  const t = e.args;
  if (!t) return { erro: "Não foi possível obter os argumentos da requisição" };
  if (!t.frame) return { erro: "Não foi possível obter o frame da requisição" };
  if (!t.evento) return { erro: "Não foi possível obter o evento da requisição" };
  const r = await Vr(e);
  return r ? await w.scripting.executeScript({
    target: { tabId: e.senderTab, frameIds: [r.frameId] },
    func: (n, o) => {
      document.dispatchEvent(new CustomEvent(n, { detail: { ...o } }));
    },
    args: [t.evento, t.detail || {}],
    world: "ISOLATED"
  }) : { erro: `Não possível obter o frame: ${t.frame}` };
}
async function PA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: () => {
      if ("CKEDITOR" in window) {
        const r = window;
        return r.CKEDITOR.instances[Object.getOwnPropertyNames(r.CKEDITOR.instances)[0]].getData();
      } else if (window.wrappedJSObject) {
        const r = window;
        return r.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(r.wrappedJSObject.CKEDITOR.instances)[0]].getData();
      }
      return "";
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function OA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: (r) => {
      if ("CKEDITOR" in window) {
        const n = window;
        n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].setData(r);
      } else if (window.wrappedJSObject) {
        const n = window;
        n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].setData(r);
      }
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function FA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: () => {
      let r, n = !1;
      const o = () => {
        setTimeout(() => {
          r = document.querySelector("iframe.cke_wysiwyg_frame")?.contentDocument?.body, r && (n ? n && r.getAttribute("pmr-ckeditor-init") !== "true" && (r.setAttribute("pmr-ckeditor-init", "true"), window.dispatchEvent(new CustomEvent("PJMR:CKEDITOR_RESET"))) : (n = !0, r.setAttribute("pmr-ckeditor-init", "true"), window.dispatchEvent(new CustomEvent("PJMR:CKEDITOR_READY")))), o();
        }, 1e3);
      };
      if ("CKEDITOR" in window) {
        const s = () => {
          setTimeout(() => {
            const a = window, i = Object.getOwnPropertyNames(a.CKEDITOR.instances)[0], l = a.CKEDITOR.instances[i].status;
            l !== "ready" && s(), l === "ready" && o();
          }, 100);
        };
        s();
      } else if (window.wrappedJSObject) {
        const s = () => {
          setTimeout(() => {
            const a = window, i = Object.getOwnPropertyNames(
              a.wrappedJSObject.CKEDITOR.instances
            )[0], l = a.wrappedJSObject.CKEDITOR.instances[i].status;
            l !== "ready" && s(), l === "ready" && o();
          }, 100);
        };
        s();
      }
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function LA(e) {
  return e.isFirefox ? await w.storage.local.get() : await chrome.storage.local.get();
}
async function RA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: () => "tinyMCE" in window ? window.tinyMCE.activeEditor.getContent() : window.wrappedJSObject ? window.wrappedJSObject.tinyMCE.activeEditor.getContent() : "",
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function _A(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: (r) => {
      "tinyMCE" in window ? window.tinyMCE.activeEditor.setContent(r) : window.wrappedJSObject && window.wrappedJSObject.tinyMCE.activeEditor.setContent(r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function kA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: (r) => {
      const n = window.tinyMCE || window.wrappedJSObject.tinyMCE, o = Object.values(n.editors)[0], s = o.selection.getNode(), a = ["body", "div", "blockquote", "td"], i = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
      let l = s;
      for (; l.parentElement && !a.includes(l.parentElement.tagName.toLowerCase()); )
        l = l.parentElement;
      if (l && i.forEach((u) => {
        "tagName" in l && (l = l.closest(u) || l);
      }), "tagName" in l) {
        const u = new DOMParser().parseFromString(r, "text/html");
        for (; u.body.lastChild; )
          l.insertAdjacentElement(
            "afterend",
            u.body.lastChild
          );
      } else
        o.execCommand("mceInsertContent", !1, r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function DA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: () => {
      try {
        return "badonWriter" in window ? window.badonWriter.getInjectable("editor").obterConteudoNew() : window.wrappedJSObject ? window.wrappedJSObject.badonWriter.getInjectable("editor").obterConteudoNew() : "";
      } catch (r) {
        return console.warn(r), "";
      }
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function MA(e) {
  const t = await Tt(e);
  return await w.scripting.executeScript({
    target: t,
    func: (r) => {
      const n = document.getElementById("editorEstruturadoFrame")?.contentDocument?.defaultView;
      n && "badonWriter" in n ? n.badonWriter.getInjectable("editor").insertHTML(r) : n.wrappedJSObject && n.wrappedJSObject.badonWriter.getInjectable("editor").insertHTML(r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
function es(e) {
  return new Promise((t, r) => {
    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error);
  });
}
function jA(e, t) {
  const r = indexedDB.open(e);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const n = es(r);
  return (o, s) => n.then((a) => s(a.transaction(t, o).objectStore(t)));
}
let Do;
function vu() {
  return Do || (Do = jA("keyval-store", "keyval")), Do;
}
function NA(e, t = vu()) {
  return t("readonly", (r) => es(r.get(e)));
}
function BA(e, t, r = vu()) {
  return r("readwrite", (n) => (n.put(t, e), es(n.transaction)));
}
let Mo = "";
const _t = /* @__PURE__ */ new Map();
async function UA(e) {
  const { acao: t, conteudo: r, pjeLegacyUrl: n } = e.args;
  if (!n || !n.length) return;
  Mo = n, _t.get("init") !== !0 && await VA() && _t.set("init", !0);
  const o = _t.get(Mo) || {};
  if (t === "obter")
    if (r) {
      const s = r;
      return typeof s == "string" && s in o ? o[s] : o;
    } else
      return o;
  else t === "definir" && (Object.assign(o, r), _t.set(Mo, o), await BA("state", _t));
  return o;
}
async function VA() {
  const e = await NA("state");
  if (_t.size === 0 && e) {
    _t.clear();
    for (const [t, r] of e)
      _t.set(t, r);
  }
  return !0;
}
const Mi = {
  salvarModelo: xA,
  adicionarConteudoCkeditor: yA,
  obterUrl: wA,
  obterFrames: TA,
  enviarRequisicaoPJE: SA,
  enviarEventoFrame: EA,
  obterConteudoCkeditor: PA,
  definirConteudoCkeditor: OA,
  checarCKEditorReady: FA,
  getSessionStorage: LA,
  obterConteudoTinyEditor: RA,
  obterConteudoBadonEditor: DA,
  adicionarConteudoBadonEditor: MA,
  definirConteudoTinyEditor: _A,
  adicionarConteudoTinyEditor: kA,
  state: UA
};
function HA(e, t, r) {
  if (e.origem !== Xa.GESTOR) return !1;
  const n = !!navigator.userAgent.match(/firefox|fxios/i);
  if (t.id !== w.runtime.id) {
    const o = { resposta: "Erro desconhecido.", mensagemOriginal: e };
    if (!n && r) return r(o);
    if (n) return new Promise((s) => s(o));
  }
  if (!t.tab || !t.tab.id) {
    const o = { resposta: "Requisição sem tab ou tabId" };
    if (!n && r) return r(o);
    if (n) return new Promise((s) => s(o));
  } else if (e.mensagem in Mi) {
    const o = Mi[e.mensagem]({
      senderTab: t.tab?.id,
      args: e.conteudo,
      frameId: t.frameId,
      isFirefox: n
    });
    return n ? o : (o.then((s) => {
      r && r(s);
    }), !0);
  } else
    return !1;
}
w.webNavigation.onCompleted.addListener(
  async (e) => {
    let t = 0, r;
    const n = setInterval(async () => {
      if (t++ > 50) {
        clearInterval(n);
        return;
      }
      if (r = (await w.scripting.executeScript({
        target: { tabId: e.tabId, frameIds: [e.frameId] },
        func: (...o) => {
          if (!(window.top === window)) return null;
          const [a] = o, i = window, l = a ? i.wrappedJSObject?.pjePayload : i.pjePayload;
          return l?.CONSTANTES.WEB_ROOT ? {
            loginUsuarioSenha: !!document.querySelector(".tipo.tipo-login"),
            windowOrigin: window.location.origin,
            pjePayload: l
          } : !1;
        },
        args: [Xt],
        world: Xt ? "ISOLATED" : "MAIN"
      }))[0], r.result === null) {
        clearInterval(n);
        return;
      }
      if (r.result !== !1) {
        clearInterval(n);
        const o = r.result;
        Ge.guardarSessionStorage({ "pjemr-token-pje": o });
      }
    }, 250);
  },
  {
    url: [
      {
        urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
      }
    ]
  }
);
yt("pjemrTokenPJe", async (e) => {
  const t = await Ge.obter(
    "pularpaginavaziaOpcaoAuxiliar"
  );
  if (!t.pularpaginavaziaOpcaoAuxiliar?.criarAtaalhoPjeTokenMenuPJe)
    return jo.console.log("Não está habilitado: ", t), !1;
  try {
    const { data: r, sender: n } = e, { tabId: o, frameId: s = 0 } = n;
    return await w.scripting.executeScript({
      target: { tabId: o, frameIds: [s] },
      func: (...a) => {
        const i = { error: () => {
        }, log: () => {
        } }, l = () => {
          const d = document.querySelectorAll('script[type="text/javascript"]');
          for (const m of d) {
            const A = m.innerHTML.match(/new window\.Menu\((.+?)\);/);
            if (A && A[1]) {
              const C = A[1].trim();
              try {
                return JSON.parse(C);
              } catch (Z) {
                return i.error("[Pular página Token]: Erro ao analisar o JSON:", Z), null;
              }
            }
          }
          return i.log("[Pular página Token]: JSON não encontrado em nenhum dos scripts."), null;
        }, [u] = a, c = l();
        switch (document.querySelector(".nivel > ul")?.replaceChildren(), i.log("[Pular página Token]: argumentos recebidos", { args: a, data: u }), u) {
          case "ativar-menu": {
            if (document.querySelector('[href="#/pjemr-token-pje"]')) return;
            i.log("[Pular página Token]: Menu inexistente"), new window.Menu({
              Menu: [
                ...c.Menu,
                {
                  itens: [
                    {
                      itens: [],
                      popup: !1,
                      nome: "Inserir",
                      url: "/pje/publico/usuario/token.seam#/pjemr-token-pje"
                    },
                    {
                      itens: [],
                      popup: !1,
                      nome: "Configurar Mobile",
                      url: "/pje/UsuarioMobile/listView.seam"
                    }
                  ],
                  popup: !1,
                  nome: "Token PJe",
                  url: "#/pjemr-token-pje"
                }
              ]
            }), i.log("[Pular página Token]: Adicionando detalhes PJe+R");
            const d = document.createElement("i");
            d.classList.add("fa", "fa-id-card", "icone-nav");
            const m = document.createElement("i");
            m.classList.add("fa", "fa-angle-right");
            const p = document.querySelector('[href="#/pjemr-token-pje"]');
            p && (p.insertAdjacentElement("afterbegin", d), p.insertAdjacentElement("beforeend", m), p.parentElement && (p.parentElement.style.boxShadow = "inset 0px 0px 20px 4px rgb(255 214 177)"), p.setAttribute("title", "PJe+R: Inserir Token PJe")), i.log("[Pular página Token]: Finalizado");
            break;
          }
        }
      },
      args: [r, Xt],
      world: Xt ? "ISOLATED" : "MAIN"
    }), !0;
  } catch (r) {
    return jo.erro("Erro ao executar o script"), jo.console.log(r), !1;
  }
});
const jo = new $e({ recurso: "pjemr-token-pje" }), Hr = {};
chrome.tabs.onUpdated.addListener((e, t) => {
  t.url && (Hr[e] || (Hr[e] = []), Hr[e].push(t.url));
});
chrome.tabs.onRemoved.addListener((e) => {
  delete Hr[e];
});
yt("obterHistoricoGuia", async (e) => {
  const t = e.sender.tabId;
  return t ? Hr[t] || [] : [];
});
class Yt {
  static instance;
  ouvintes = /* @__PURE__ */ new Map();
  // Construtor privado para garantir que a classe seja Singleton
  constructor() {
    yt(
      "mensageriaPJemR",
      async (t) => {
        const r = t.data;
        return ZA.console.log("Mensagem recebida:", r), this.transmitirMensagem(r);
      }
    );
  }
  // Método para obter a instância Singleton
  static getInstance() {
    return Yt.instance || (Yt.instance = new Yt()), Yt.instance;
  }
  // Método para adicionar novos objetos ao array
  inscrever(t) {
    this.ouvintes.set(t.tipo, t);
  }
  // Método privado para notificar objetos (exemplo de uso)
  async transmitirMensagem(t) {
    const r = this.ouvintes.get(t.tipo);
    return r ? await r.ouvirMensagem(t) : {
      ...t,
      conteudo: {
        resultado: "erro",
        texto: "Não existe ovinte para tratar a mensagem recebida"
      },
      resposta: !0
    };
  }
}
const ZA = new $e({
  recurso: Yt.name,
  adicional: "mensageria-pjemr-ts"
});
vt.getInstance();
(function() {
  w.webNavigation.onCommitted.addListener(async (t) => {
    w.scripting.executeScript({
      target: { tabId: t.tabId, frameIds: [t.frameId] },
      files: ["page-context.js"],
      world: Xt ? "ISOLATED" : "MAIN"
    });
  });
})();
w.runtime.onInstalled.addListener((e) => {
  e.reason === "install" ? (Ge.iniciar(), Ce.sucesso("Extensão instalada!")) : e.reason === "update" && (Ce.sucesso("Extensão atualizada!"), Ge.atualizar()), Ce.inspecionar("this: ", void 0), Ce.inspecionar("browser: ", w);
});
yt("guardarSessionStorage", async (e) => {
  let t;
  try {
    t = JSON.parse(e.data);
  } catch {
    return { resposta: "Erro ao converter dados para JSON" };
  }
  return await Ge.guardarSessionStorage(t), { resposta: "Dados guardados na sessionStorage" };
});
yt("obterSessionStorage", async (e) => {
  const t = await Ge.obterSessionStorage(e.data);
  return JSON.stringify({ resposta: t });
});
yt("endpoints", async ({ data: e }) => {
  switch (e.chamar) {
    case "backgroundFetchEndpoint":
      return !e.opcoes || !e.opcoes?.functionName || e.opcoes?.args ? {
        backgroundResponseWithError: !0,
        errorMessage: "Requisição mal formada"
      } : xa.fetch(e.opcoes.functionName, e.opcoes.args);
    default:
      return {
        backgroundResponseWithError: !0,
        errorMessage: "Requisição desconhecida"
      };
  }
});
w.runtime.onMessage.addListener((e, t, r) => {
  if (e.origem === Xa.GESTOR)
    return HA(e, t, r);
});
yt("intimaZapStartDownload", ({ data: e }) => {
  const t = e;
  return new Promise((r, n) => {
    chrome.downloads.download({ url: t }, (o) => {
      if (chrome.runtime.lastError) {
        n({ error: "Erro ao iniciar o download" });
        return;
      }
      const s = (a) => {
        a.id === o && a.state?.current === "complete" && (chrome.downloads.search({ id: o }, (i) => {
          if (i.length > 0) {
            const l = i[0].filename;
            r({ fullPath: l });
          } else
            n({ error: "Falha ao encontrar o arquivo baixado" });
        }), chrome.downloads.onChanged.removeListener(s));
      };
      chrome.downloads.onChanged.addListener(s);
    });
  });
});
w.runtime.onMessage.addListener((e, t, r) => {
  if (e.action === "checkWhatsAppTab")
    return w.tabs.query({ url: "*://web.whatsapp.com/*" }).then((n) => {
      if (n.length > 0) {
        const o = n[0].id;
        o !== void 0 && w.tabs.update(o, { url: e.url, active: !0 }).then(() => {
          r({ success: !0 });
        });
      } else
        w.tabs.create({ url: e.url }).then(() => {
          r({ success: !0 });
        });
    }), !0;
});
w.storage.onChanged.addListener((e, t) => {
  Ce.inspecionar(`Mudanças na área de armazenamento "${t}":`, e), e.ativada && Bu(e.ativada.newValue), (e.ativada || e.tema || e.cartaoProcesso || e.ajustesGerais || e.maisEspaco || e.ultimasEtiquetasUsadaTarefa || e.destacarLembretes || e.inativaCartao) && w.tabs.query({}).then((r) => {
    Ge.obter(null).then((n) => {
      r.forEach((o) => {
        const { url: s, id: a } = o;
        Zi(n, a, s), zi(n, a, s);
      });
    });
  });
});
w.tabs.onUpdated.addListener((e) => {
  w.tabs.get(e).then((t) => {
    const { url: r } = t;
    Ge.obter(null).then((n) => {
      Zi(n, e, r), zi(n, e, r);
    });
  });
});
(function() {
  Yt.getInstance();
})();
export {
  wr as P,
  Hu as a,
  td as b,
  Uu as c,
  Qu as d,
  WA as e,
  Xu as f
};
