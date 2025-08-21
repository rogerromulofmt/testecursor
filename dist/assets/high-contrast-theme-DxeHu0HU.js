var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _elementosDoc;
import { watch, onScopeDispose, effectScope, shallowRef, Fragment, reactive, computed, watchEffect, toRefs, capitalize, isVNode, Comment, unref, warn, getCurrentInstance as getCurrentInstance$1, ref, inject as inject$1, provide, defineComponent as defineComponent$1, h, camelize, toRaw, createVNode, mergeProps, onBeforeUnmount, readonly, onMounted, useId, onDeactivated, onActivated, nextTick, isRef, resolveDynamicComponent, toRef, TransitionGroup, Transition, Teleport, withDirectives, vShow, resolveDirective, resolveComponent, render as render$1, createElementBlock, openBlock, createStaticVNode, normalizeClass, normalizeStyle, Text, renderList, createElementVNode, vModelRadio, toDisplayString, onBeforeMount, onUpdated, createApp, withCtx, renderSlot, createTextVNode, createBlock } from "../vue.esm-browser.prod.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function useToggleScope(source, fn) {
  let scope;
  function start() {
    scope = effectScope();
    scope.run(() => fn.length ? fn(() => {
      scope == null ? void 0 : scope.stop();
      start();
    }) : fn());
  }
  watch(source, (active) => {
    if (active && !scope) {
      start();
    } else if (!active) {
      scope == null ? void 0 : scope.stop();
      scope = void 0;
    }
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
}
const IN_BROWSER = typeof window !== "undefined";
const SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
const SUPPORTS_TOUCH = IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _classPrivateFieldGet(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === void 0 ? fallback : obj;
  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }
  if (obj == null) return fallback;
  return obj[path[last]] === void 0 ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    return false;
  }
  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }
  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    return false;
  }
  return props.every((p) => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  if (obj == null || !path || typeof path !== "string") return fallback;
  if (obj[path] !== void 0) return obj[path];
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  return getNestedValue(obj, path.split("."), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property === true) return item === void 0 ? fallback : item;
  if (property == null || typeof property === "boolean") return fallback;
  if (item !== Object(item)) {
    if (typeof property !== "function") return fallback;
    const value2 = property(item, fallback);
    return typeof value2 === "undefined" ? fallback : value2;
  }
  if (typeof property === "string") return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== "function") return fallback;
  const value = property(item, fallback);
  return typeof value === "undefined" ? fallback : value;
}
function createRange(length) {
  let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length
  }, (v, k) => start + k);
}
function convertToUnit(str) {
  let unit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (str == null || str === "") {
    return void 0;
  }
  const num = Number(str);
  if (isNaN(num)) {
    return String(str);
  } else if (!isFinite(num)) {
    return void 0;
  } else {
    return `${num}${unit}`;
  }
}
function isObject(obj) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function isPlainObject(obj) {
  let proto;
  return obj !== null && typeof obj === "object" && ((proto = Object.getPrototypeOf(obj)) === Object.prototype || proto === null);
}
function refElement(obj) {
  if (obj && "$el" in obj) {
    const el = obj.$el;
    if ((el == null ? void 0 : el.nodeType) === Node.TEXT_NODE) {
      return el.nextElementSibling;
    }
    return el;
  }
  return obj;
}
const keyCodes = Object.freeze({
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
function keys(o) {
  return Object.keys(o);
}
function has(obj, key) {
  return key.every((k) => obj.hasOwnProperty(k));
}
function pick(obj, paths) {
  const found = {};
  for (const key of paths) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      found[key] = obj[key];
    }
  }
  return found;
}
function pickWithRest(obj, paths, exclude) {
  const found = /* @__PURE__ */ Object.create(null);
  const rest = /* @__PURE__ */ Object.create(null);
  for (const key in obj) {
    if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key) && true) {
      found[key] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  }
  return [found, rest];
}
function omit(obj, exclude) {
  const clone = {
    ...obj
  };
  exclude.forEach((prop) => delete clone[prop]);
  return clone;
}
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const bubblingEvents = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function filterInputAttrs(attrs) {
  const [events, props] = pickWithRest(attrs, [onRE]);
  const inputEvents = omit(events, bubblingEvents);
  const [rootAttrs, inputAttrs] = pickWithRest(props, ["class", "style", "id", /^data-/]);
  Object.assign(rootAttrs, events);
  Object.assign(inputAttrs, inputEvents);
  return [rootAttrs, inputAttrs];
}
function wrapInArray(v) {
  return v == null ? [] : Array.isArray(v) ? v : [v];
}
function debounce(fn, delay) {
  let timeoutId = 0;
  const wrap = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), unref(delay));
  };
  wrap.clear = () => {
    clearTimeout(timeoutId);
  };
  wrap.immediate = fn;
  return wrap;
}
function clamp(value) {
  let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return str + char.repeat(Math.max(0, length - str.length));
}
function padStart(str, length) {
  let char = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return char.repeat(Math.max(0, length - str.length)) + str;
}
function chunk(str) {
  let size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }
  return chunked;
}
function mergeDeep() {
  let source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let arrayFn = arguments.length > 2 ? arguments[2] : void 0;
  const out = {};
  for (const key in source) {
    out[key] = source[key];
  }
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];
    if (isPlainObject(sourceProperty) && isPlainObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);
      continue;
    }
    if (arrayFn && Array.isArray(sourceProperty) && Array.isArray(targetProperty)) {
      out[key] = arrayFn(sourceProperty, targetProperty);
      continue;
    }
    out[key] = targetProperty;
  }
  return out;
}
function flattenFragments(nodes) {
  return nodes.map((node) => {
    if (node.type === Fragment) {
      return flattenFragments(node.children);
    } else {
      return node;
    }
  }).flat();
}
function toKebabCase() {
  let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (toKebabCase.cache.has(str)) return toKebabCase.cache.get(str);
  const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  toKebabCase.cache.set(str, kebab);
  return kebab;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(key, vnode) {
  if (!vnode || typeof vnode !== "object") return [];
  if (Array.isArray(vnode)) {
    return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.suspense) {
    return findChildrenWithProvide(key, vnode.ssContent);
  } else if (Array.isArray(vnode.children)) {
    return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
  } else if (vnode.component) {
    if (Object.getOwnPropertySymbols(vnode.component.provides).includes(key)) {
      return [vnode.component];
    } else if (vnode.component.subTree) {
      return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
    }
  }
  return [];
}
var _arr = /* @__PURE__ */ new WeakMap();
var _pointer = /* @__PURE__ */ new WeakMap();
class CircularBuffer {
  constructor(size) {
    _classPrivateFieldInitSpec(this, _arr, []);
    _classPrivateFieldInitSpec(this, _pointer, 0);
    this.size = size;
  }
  push(val) {
    _classPrivateFieldGet(_arr, this)[_classPrivateFieldGet(_pointer, this)] = val;
    _classPrivateFieldSet(_pointer, this, (_classPrivateFieldGet(_pointer, this) + 1) % this.size);
  }
  values() {
    return _classPrivateFieldGet(_arr, this).slice(_classPrivateFieldGet(_pointer, this)).concat(_classPrivateFieldGet(_arr, this).slice(0, _classPrivateFieldGet(_pointer, this)));
  }
}
function destructComputed(getter) {
  const refs = reactive({});
  const base = computed(getter);
  watchEffect(() => {
    for (const key in base.value) {
      refs[key] = base.value[key];
    }
  }, {
    flush: "sync"
  });
  return toRefs(refs);
}
function includes(arr, val) {
  return arr.includes(val);
}
function eventName(propName) {
  return propName[2].toLowerCase() + propName.slice(3);
}
const EventProp = () => [Function, Array];
function hasEvent(props, name) {
  name = "on" + capitalize(name);
  return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
function callEvent(handler) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  if (Array.isArray(handler)) {
    for (const h2 of handler) {
      h2(...args);
    }
  } else if (typeof handler === "function") {
    handler(...args);
  }
}
function focusableChildren(el) {
  let filterByTabIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const targets = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((s) => `${s}${filterByTabIndex ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...el.querySelectorAll(targets)];
}
function getNextElement(elements, location, condition) {
  let _el;
  let idx = elements.indexOf(document.activeElement);
  const inc = location === "next" ? 1 : -1;
  do {
    idx += inc;
    _el = elements[idx];
  } while ((!_el || _el.offsetParent == null || !((condition == null ? void 0 : condition(_el)) ?? true)) && idx < elements.length && idx >= 0);
  return _el;
}
function focusChild(el, location) {
  var _a, _b, _c, _d;
  const focusable = focusableChildren(el);
  if (!location) {
    if (el === document.activeElement || !el.contains(document.activeElement)) {
      (_a = focusable[0]) == null ? void 0 : _a.focus();
    }
  } else if (location === "first") {
    (_b = focusable[0]) == null ? void 0 : _b.focus();
  } else if (location === "last") {
    (_c = focusable.at(-1)) == null ? void 0 : _c.focus();
  } else if (typeof location === "number") {
    (_d = focusable[location]) == null ? void 0 : _d.focus();
  } else {
    const _el = getNextElement(focusable, location);
    if (_el) _el.focus();
    else focusChild(el, location === "next" ? "first" : "last");
  }
}
function noop() {
}
function matchesSelector(el, selector) {
  const supportsSelector = IN_BROWSER && typeof CSS !== "undefined" && typeof CSS.supports !== "undefined" && CSS.supports(`selector(${selector})`);
  if (!supportsSelector) return null;
  try {
    return !!el && el.matches(selector);
  } catch (err) {
    return null;
  }
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    return child.type !== Fragment || ensureValidVNode(child.children);
  }) ? vnodes : null;
}
function defer(timeout, cb) {
  if (!IN_BROWSER || timeout === 0) {
    cb();
    return () => {
    };
  }
  const timeoutId = window.setTimeout(cb, timeout);
  return () => window.clearTimeout(timeoutId);
}
function isClickInsideElement(event, targetDiv) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const divRect = targetDiv.getBoundingClientRect();
  const divLeft = divRect.left;
  const divTop = divRect.top;
  const divRight = divRect.right;
  const divBottom = divRect.bottom;
  return mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom;
}
function templateRef() {
  const el = shallowRef();
  const fn = (target) => {
    el.value = target;
  };
  Object.defineProperty(fn, "value", {
    enumerable: true,
    get: () => el.value,
    set: (val) => el.value = val
  });
  Object.defineProperty(fn, "el", {
    enumerable: true,
    get: () => refElement(el.value)
  });
  return fn;
}
function checkPrintable(e) {
  const isPrintableChar = e.key.length === 1;
  const noModifier = !e.ctrlKey && !e.metaKey && !e.altKey;
  return isPrintableChar && noModifier;
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "bigint";
}
const block = ["top", "bottom"];
const inline = ["start", "end", "left", "right"];
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(" ");
  if (!align) {
    align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === "start") return isRtl ? "right" : "left";
  if (str === "end") return isRtl ? "left" : "right";
  return str;
}
function flipSide(anchor) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.side],
    align: anchor.align
  };
}
function flipAlign(anchor) {
  return {
    side: anchor.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[anchor.align]
  };
}
function flipCorner(anchor) {
  return {
    side: anchor.align,
    align: anchor.side
  };
}
function getAxis(anchor) {
  return includes(block, anchor.side) ? "y" : "x";
}
class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function getTargetBox(target) {
  if (Array.isArray(target)) {
    return new Box({
      x: target[0],
      y: target[1],
      width: 0,
      height: 0
    });
  } else {
    return target.getBoundingClientRect();
  }
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = Number(ta[0]);
      sy = Number(ta[5]);
      dx = Number(ta[12]);
      dy = Number(ta[13]);
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = Number(ta[0]);
      sy = Number(ta[3]);
      dx = Number(ta[4]);
      dy = Number(ta[5]);
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h2 = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h2
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined") return {
    finished: Promise.resolve()
  };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
const handlers = /* @__PURE__ */ new WeakMap();
function bindProps(el, props) {
  Object.keys(props).forEach((k) => {
    var _a;
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      if (props[k] == null) {
        handler == null ? void 0 : handler.forEach((v) => {
          const [n, fn] = v;
          if (n === name) {
            el.removeEventListener(name, fn);
            handler.delete(v);
          }
        });
      } else if (!handler || !((_a = [...handler]) == null ? void 0 : _a.some((v) => v[0] === name && v[1] === props[k]))) {
        el.addEventListener(name, props[k]);
        const _handler = handler || /* @__PURE__ */ new Set();
        _handler.add([name, props[k]]);
        if (!handlers.has(el)) handlers.set(el, _handler);
      }
    } else {
      if (props[k] == null) {
        el.removeAttribute(k);
      } else {
        el.setAttribute(k, props[k]);
      }
    }
  });
}
function unbindProps(el, props) {
  Object.keys(props).forEach((k) => {
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      handler == null ? void 0 : handler.forEach((v) => {
        const [n, fn] = v;
        if (n === name) {
          el.removeEventListener(name, fn);
          handler.delete(v);
        }
      });
    } else {
      el.removeAttribute(k);
    }
  });
}
const mainTRC = 2.4;
const Rco = 0.2126729;
const Gco = 0.7151522;
const Bco = 0.072175;
const normBG = 0.55;
const normTXT = 0.58;
const revTXT = 0.57;
const revBG = 0.62;
const blkThrs = 0.03;
const blkClmp = 1.45;
const deltaYmin = 5e-4;
const scaleBoW = 1.25;
const scaleWoB = 1.25;
const loConThresh = 0.078;
const loConFactor = 12.82051282051282;
const loConOffset = 0.06;
const loClip = 1e-3;
function APCAcontrast(text, background) {
  const Rtxt = (text.r / 255) ** mainTRC;
  const Gtxt = (text.g / 255) ** mainTRC;
  const Btxt = (text.b / 255) ** mainTRC;
  const Rbg = (background.r / 255) ** mainTRC;
  const Gbg = (background.g / 255) ** mainTRC;
  const Bbg = (background.b / 255) ** mainTRC;
  let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
  let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
  if (Ytxt <= blkThrs) Ytxt += (blkThrs - Ytxt) ** blkClmp;
  if (Ybg <= blkThrs) Ybg += (blkThrs - Ybg) ** blkClmp;
  if (Math.abs(Ybg - Ytxt) < deltaYmin) return 0;
  let outputContrast;
  if (Ybg > Ytxt) {
    const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
    outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
  } else {
    const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
    outputContrast = SAPC > -1e-3 ? 0 : SAPC > -0.078 ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
  }
  return outputContrast * 100;
}
function consoleWarn(message) {
  warn(`Vuetify: ${message}`);
}
function consoleError(message) {
  warn(`Vuetify error: ${message}`);
}
function deprecate(original, replacement) {
  replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map((s) => `'${s}'`).join(", ") + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
  warn(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
}
const delta = 0.20689655172413793;
const cielabForwardTransform = (t) => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
const cielabReverseTransform = (t) => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
function fromXYZ$1(xyz) {
  const transform2 = cielabForwardTransform;
  const transformedY = transform2(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform2(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform2(xyz[2] / 1.08883))];
}
function toXYZ$1(lab) {
  const transform2 = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform2(Ln + lab[1] / 500) * 0.95047, transform2(Ln), transform2(Ln - lab[2] / 200) * 1.08883];
}
const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
const srgbForwardTransform = (C) => C <= 31308e-7 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055;
const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
const srgbReverseTransform = (C) => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform2 = srgbForwardTransform;
  const matrix = srgbForwardMatrix;
  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(clamp(transform2(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  }
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  };
}
function toXYZ(_ref) {
  let {
    r,
    g,
    b
  } = _ref;
  const xyz = [0, 0, 0];
  const transform2 = srgbReverseTransform;
  const matrix = srgbReverseMatrix;
  r = transform2(r / 255);
  g = transform2(g / 255);
  b = transform2(b / 255);
  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }
  return xyz;
}
function isCssColor(color) {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
function isParsableColor(color) {
  return isCssColor(color) && !/^((rgb|hsl)a?\()?var\(--/.test(color);
}
const cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
const mappers = {
  rgb: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  rgba: (r, g, b, a) => ({
    r,
    g,
    b,
    a
  }),
  hsl: (h2, s, l, a) => HSLtoRGB({
    h: h2,
    s,
    l,
    a
  }),
  hsla: (h2, s, l, a) => HSLtoRGB({
    h: h2,
    s,
    l,
    a
  }),
  hsv: (h2, s, v, a) => HSVtoRGB({
    h: h2,
    s,
    v,
    a
  }),
  hsva: (h2, s, v, a) => HSVtoRGB({
    h: h2,
    s,
    v,
    a
  })
};
function parseColor(color) {
  if (typeof color === "number") {
    if (isNaN(color) || color < 0 || color > 16777215) {
      consoleWarn(`'${color}' is not a valid hex color`);
    }
    return {
      r: (color & 16711680) >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  } else if (typeof color === "string" && cssColorRe.test(color)) {
    const {
      groups
    } = color.match(cssColorRe);
    const {
      fn,
      values
    } = groups;
    const realValues = values.split(/,\s*|\s*\/\s*|\s+/).map((v, i) => {
      if (v.endsWith("%") || // unitless slv are %
      i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(fn)) {
        return parseFloat(v) / 100;
      } else {
        return parseFloat(v);
      }
    });
    return mappers[fn](...realValues);
  } else if (typeof color === "string") {
    let hex = color.startsWith("#") ? color.slice(1) : color;
    if ([3, 4].includes(hex.length)) {
      hex = hex.split("").map((char) => char + char).join("");
    } else if (![6, 8].includes(hex.length)) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    const int = parseInt(hex, 16);
    if (isNaN(int) || int < 0 || int > 4294967295) {
      consoleWarn(`'${color}' is not a valid hex(a) color`);
    }
    return HexToRGB(hex);
  } else if (typeof color === "object") {
    if (has(color, ["r", "g", "b"])) {
      return color;
    } else if (has(color, ["h", "s", "l"])) {
      return HSVtoRGB(HSLtoHSV(color));
    } else if (has(color, ["h", "s", "v"])) {
      return HSVtoRGB(color);
    }
  }
  throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function HSVtoRGB(hsva) {
  const {
    h: h2,
    s,
    v,
    a
  } = hsva;
  const f = (n) => {
    const k = (n + h2 / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  const rgb = [f(5), f(3), f(1)].map((v2) => Math.round(v2 * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
function HSLtoRGB(hsla) {
  return HSVtoRGB(HSLtoHSV(hsla));
}
function HSLtoHSV(hsl) {
  const {
    h: h2,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h: h2,
    s: sprime,
    v,
    a
  };
}
function toHex(v) {
  const h2 = Math.round(v).toString(16);
  return ("00".substr(0, 2 - h2.length) + h2).toUpperCase();
}
function RGBtoHex(_ref2) {
  let {
    r,
    g,
    b,
    a
  } = _ref2;
  return `#${[toHex(r), toHex(g), toHex(b), a !== void 0 ? toHex(Math.round(a * 255)) : ""].join("")}`;
}
function HexToRGB(hex) {
  hex = parseHex(hex);
  let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
  a = a === void 0 ? a : a / 255;
  return {
    r,
    g,
    b,
    a
  };
}
function parseHex(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  hex = hex.replace(/([^0-9a-f])/gi, "F");
  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split("").map((x) => x + x).join("");
  }
  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, "F");
  }
  return hex;
}
function lighten(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] + amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function darken(value, amount) {
  const lab = fromXYZ$1(toXYZ(value));
  lab[0] = lab[0] - amount * 10;
  return fromXYZ(toXYZ$1(lab));
}
function getLuma(color) {
  const rgb = parseColor(color);
  return toXYZ(rgb)[1];
}
function getForeground(color) {
  const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
  const whiteContrast = Math.abs(APCAcontrast(parseColor(16777215), parseColor(color)));
  return whiteContrast > Math.min(blackContrast, 50) ? "#fff" : "#000";
}
function propsFactory(props, source) {
  return (defaults) => {
    return Object.keys(props).reduce((obj, prop) => {
      const isObjectDefinition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]);
      const definition = isObjectDefinition ? props[prop] : {
        type: props[prop]
      };
      if (defaults && prop in defaults) {
        obj[prop] = {
          ...definition,
          default: defaults[prop]
        };
      } else {
        obj[prop] = definition;
      }
      if (source && !obj[prop].source) {
        obj[prop].source = source;
      }
      return obj;
    }, {});
  };
}
const makeComponentProps = propsFactory({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function getCurrentInstance(name, message) {
  const vm = getCurrentInstance$1();
  if (!vm) {
    throw new Error(`[Vuetify] ${name} ${"must be called from inside a setup function"}`);
  }
  return vm;
}
function getCurrentInstanceName() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const vm = getCurrentInstance(name).type;
  return toKebabCase((vm == null ? void 0 : vm.aliasName) || (vm == null ? void 0 : vm.name));
}
function injectSelf(key) {
  let vm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance("injectSelf");
  const {
    provides
  } = vm;
  if (provides && key in provides) {
    return provides[key];
  }
  return void 0;
}
const DefaultsSymbol = Symbol.for("vuetify:defaults");
function createDefaults(options) {
  return ref(options);
}
function injectDefaults() {
  const defaults = inject$1(DefaultsSymbol);
  if (!defaults) throw new Error("[Vuetify] Could not find defaults instance");
  return defaults;
}
function provideDefaults(defaults, options) {
  const injectedDefaults = injectDefaults();
  const providedDefaults = ref(defaults);
  const newDefaults = computed(() => {
    const disabled = unref(options == null ? void 0 : options.disabled);
    if (disabled) return injectedDefaults.value;
    const scoped = unref(options == null ? void 0 : options.scoped);
    const reset = unref(options == null ? void 0 : options.reset);
    const root = unref(options == null ? void 0 : options.root);
    if (providedDefaults.value == null && !(scoped || reset || root)) return injectedDefaults.value;
    let properties = mergeDeep(providedDefaults.value, {
      prev: injectedDefaults.value
    });
    if (scoped) return properties;
    if (reset || root) {
      const len = Number(reset || Infinity);
      for (let i = 0; i <= len; i++) {
        if (!properties || !("prev" in properties)) {
          break;
        }
        properties = properties.prev;
      }
      if (properties && typeof root === "string" && root in properties) {
        properties = mergeDeep(mergeDeep(properties, {
          prev: properties
        }), properties[root]);
      }
      return properties;
    }
    return properties.prev ? mergeDeep(properties.prev, properties) : properties;
  });
  provide(DefaultsSymbol, newDefaults);
  return newDefaults;
}
function propIsDefined(vnode, prop) {
  var _a, _b;
  return typeof ((_a = vnode.props) == null ? void 0 : _a[prop]) !== "undefined" || typeof ((_b = vnode.props) == null ? void 0 : _b[toKebabCase(prop)]) !== "undefined";
}
function internalUseDefaults() {
  let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let name = arguments.length > 1 ? arguments[1] : void 0;
  let defaults = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : injectDefaults();
  const vm = getCurrentInstance("useDefaults");
  name = name ?? vm.type.name ?? vm.type.__name;
  if (!name) {
    throw new Error("[Vuetify] Could not determine component name");
  }
  const componentDefaults = computed(() => {
    var _a;
    return (_a = defaults.value) == null ? void 0 : _a[props._as ?? name];
  });
  const _props = new Proxy(props, {
    get(target, prop) {
      var _a, _b, _c, _d, _e, _f, _g;
      const propValue = Reflect.get(target, prop);
      if (prop === "class" || prop === "style") {
        return [(_a = componentDefaults.value) == null ? void 0 : _a[prop], propValue].filter((v) => v != null);
      } else if (typeof prop === "string" && !propIsDefined(vm.vnode, prop)) {
        return ((_b = componentDefaults.value) == null ? void 0 : _b[prop]) !== void 0 ? (_c = componentDefaults.value) == null ? void 0 : _c[prop] : ((_e = (_d = defaults.value) == null ? void 0 : _d.global) == null ? void 0 : _e[prop]) !== void 0 ? (_g = (_f = defaults.value) == null ? void 0 : _f.global) == null ? void 0 : _g[prop] : propValue;
      }
      return propValue;
    }
  });
  const _subcomponentDefaults = shallowRef();
  watchEffect(() => {
    if (componentDefaults.value) {
      const subComponents = Object.entries(componentDefaults.value).filter((_ref) => {
        let [key] = _ref;
        return key.startsWith(key[0].toUpperCase());
      });
      _subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
    } else {
      _subcomponentDefaults.value = void 0;
    }
  });
  function provideSubDefaults() {
    const injected = injectSelf(DefaultsSymbol, vm);
    provide(DefaultsSymbol, computed(() => {
      return _subcomponentDefaults.value ? mergeDeep((injected == null ? void 0 : injected.value) ?? {}, _subcomponentDefaults.value) : injected == null ? void 0 : injected.value;
    }));
  }
  return {
    props: _props,
    provideSubDefaults
  };
}
function defineComponent(options) {
  options._setup = options._setup ?? options.setup;
  if (!options.name) {
    consoleWarn("The component is missing an explicit name, unable to generate default prop value");
    return options;
  }
  if (options._setup) {
    options.props = propsFactory(options.props ?? {}, options.name)();
    const propKeys = Object.keys(options.props).filter((key) => key !== "class" && key !== "style");
    options.filterProps = function filterProps(props) {
      return pick(props, propKeys);
    };
    options.props._as = String;
    options.setup = function setup(props, ctx) {
      const defaults = injectDefaults();
      if (!defaults.value) return options._setup(props, ctx);
      const {
        props: _props,
        provideSubDefaults
      } = internalUseDefaults(props, props._as ?? options.name, defaults);
      const setupBindings = options._setup(_props, ctx);
      provideSubDefaults();
      return setupBindings;
    };
  }
  return options;
}
function genericComponent() {
  let exposeDefaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (options) => (exposeDefaults ? defineComponent : defineComponent$1)(options);
}
function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name ?? capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode) node = node.parentNode;
    if (node !== document) return null;
    return document;
  }
  const root = node.getRootNode();
  if (root !== document && root.getRootNode({
    composed: true
  }) !== document) return null;
  return root;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
function getScrollParent(el) {
  let includeHidden = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  while (el) {
    if (includeHidden ? isPotentiallyScrollable(el) : hasScrollbar(el)) return el;
    el = el.parentElement;
  }
  return document.scrollingElement;
}
function getScrollParents(el, stopAt) {
  const elements = [];
  if (stopAt && el && !stopAt.contains(el)) return elements;
  while (el) {
    if (hasScrollbar(el)) elements.push(el);
    if (el === stopAt) break;
    el = el.parentElement;
  }
  return elements;
}
function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = window.getComputedStyle(el);
  return style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
}
function isPotentiallyScrollable(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = window.getComputedStyle(el);
  return ["scroll", "auto"].includes(style.overflowY);
}
function isFixedPosition(el) {
  while (el) {
    if (window.getComputedStyle(el).position === "fixed") {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}
function useRender(render2) {
  const vm = getCurrentInstance("useRender");
  vm.render = render2;
}
function useProxiedModel(props, prop, defaultValue) {
  let transformIn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v;
  let transformOut = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const vm = getCurrentInstance("useProxiedModel");
  const internal = ref(props[prop] !== void 0 ? props[prop] : defaultValue);
  const kebabProp = toKebabCase(prop);
  const checkKebab = kebabProp !== prop;
  const isControlled = checkKebab ? computed(() => {
    var _a, _b, _c, _d;
    void props[prop];
    return !!((((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) || ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(kebabProp))) && (((_c = vm.vnode.props) == null ? void 0 : _c.hasOwnProperty(`onUpdate:${prop}`)) || ((_d = vm.vnode.props) == null ? void 0 : _d.hasOwnProperty(`onUpdate:${kebabProp}`))));
  }) : computed(() => {
    var _a, _b;
    void props[prop];
    return !!(((_a = vm.vnode.props) == null ? void 0 : _a.hasOwnProperty(prop)) && ((_b = vm.vnode.props) == null ? void 0 : _b.hasOwnProperty(`onUpdate:${prop}`)));
  });
  useToggleScope(() => !isControlled.value, () => {
    watch(() => props[prop], (val) => {
      internal.value = val;
    });
  });
  const model = computed({
    get() {
      const externalValue = props[prop];
      return transformIn(isControlled.value ? externalValue : internal.value);
    },
    set(internalValue) {
      const newValue = transformOut(internalValue);
      const value = toRaw(isControlled.value ? props[prop] : internal.value);
      if (value === newValue || transformIn(value) === internalValue) {
        return;
      }
      internal.value = newValue;
      vm == null ? void 0 : vm.emit(`update:${prop}`, newValue);
    }
  });
  Object.defineProperty(model, "externalValue", {
    get: () => isControlled.value ? props[prop] : internal.value
  });
  return model;
}
const en = {
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
};
const LANG_PREFIX = "$vuetify.";
const replace = (str, params) => {
  return str.replace(/\{(\d+)\}/g, (match, index) => {
    return String(params[Number(index)]);
  });
};
const createTranslateFunction = (current, fallback, messages) => {
  return function(key) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    if (!key.startsWith(LANG_PREFIX)) {
      return replace(key, params);
    }
    const shortKey = key.replace(LANG_PREFIX, "");
    const currentLocale = current.value && messages.value[current.value];
    const fallbackLocale = fallback.value && messages.value[fallback.value];
    let str = getObjectValueByPath(currentLocale, shortKey, null);
    if (!str) {
      consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
      str = getObjectValueByPath(fallbackLocale, shortKey, null);
    }
    if (!str) {
      consoleError(`Translation key "${key}" not found in fallback`);
      str = key;
    }
    if (typeof str !== "string") {
      consoleError(`Translation key "${key}" has a non-string value`);
      str = key;
    }
    return replace(str, params);
  };
};
function createNumberFunction(current, fallback) {
  return (value, options) => {
    const numberFormat = new Intl.NumberFormat([current.value, fallback.value], options);
    return numberFormat.format(value);
  };
}
function useProvided(props, prop, provided) {
  const internal = useProxiedModel(props, prop, props[prop] ?? provided.value);
  internal.value = props[prop] ?? provided.value;
  watch(provided, (v) => {
    if (props[prop] == null) {
      internal.value = provided.value;
    }
  });
  return internal;
}
function createProvideFunction(state) {
  return (props) => {
    const current = useProvided(props, "locale", state.current);
    const fallback = useProvided(props, "fallback", state.fallback);
    const messages = useProvided(props, "messages", state.messages);
    return {
      name: "vuetify",
      current,
      fallback,
      messages,
      t: createTranslateFunction(current, fallback, messages),
      n: createNumberFunction(current, fallback),
      provide: createProvideFunction({
        current,
        fallback,
        messages
      })
    };
  };
}
function createVuetifyAdapter(options) {
  const current = shallowRef((options == null ? void 0 : options.locale) ?? "en");
  const fallback = shallowRef((options == null ? void 0 : options.fallback) ?? "en");
  const messages = ref({
    en,
    ...options == null ? void 0 : options.messages
  });
  return {
    name: "vuetify",
    current,
    fallback,
    messages,
    t: createTranslateFunction(current, fallback, messages),
    n: createNumberFunction(current, fallback),
    provide: createProvideFunction({
      current,
      fallback,
      messages
    })
  };
}
const LocaleSymbol = Symbol.for("vuetify:locale");
function isLocaleInstance(obj) {
  return obj.name != null;
}
function createLocale(options) {
  const i18n = (options == null ? void 0 : options.adapter) && isLocaleInstance(options == null ? void 0 : options.adapter) ? options == null ? void 0 : options.adapter : createVuetifyAdapter(options);
  const rtl = createRtl(i18n, options);
  return {
    ...i18n,
    ...rtl
  };
}
function useLocale() {
  const locale = inject$1(LocaleSymbol);
  if (!locale) throw new Error("[Vuetify] Could not find injected locale instance");
  return locale;
}
function genDefaults$3() {
  return {
    af: false,
    ar: true,
    bg: false,
    ca: false,
    ckb: false,
    cs: false,
    de: false,
    el: false,
    en: false,
    es: false,
    et: false,
    fa: true,
    fi: false,
    fr: false,
    hr: false,
    hu: false,
    he: true,
    id: false,
    it: false,
    ja: false,
    km: false,
    ko: false,
    lv: false,
    lt: false,
    nl: false,
    no: false,
    pl: false,
    pt: false,
    ro: false,
    ru: false,
    sk: false,
    sl: false,
    srCyrl: false,
    srLatn: false,
    sv: false,
    th: false,
    tr: false,
    az: false,
    uk: false,
    vi: false,
    zhHans: false,
    zhHant: false
  };
}
function createRtl(i18n, options) {
  const rtl = ref((options == null ? void 0 : options.rtl) ?? genDefaults$3());
  const isRtl = computed(() => rtl.value[i18n.current.value] ?? false);
  return {
    isRtl,
    rtl,
    rtlClasses: computed(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
  };
}
function useRtl() {
  const locale = inject$1(LocaleSymbol);
  if (!locale) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}
function weekInfo(locale) {
  const code = locale.slice(-2).toUpperCase();
  switch (true) {
    case locale === "GB-alt-variant": {
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    }
    case locale === "001": {
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    }
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(code): {
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    }
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(code): {
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    }
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(code): {
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    }
    case `AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY`.includes(code): {
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    }
    case code === "MV": {
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    }
    case code === "PT": {
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    }
    default:
      return null;
  }
}
function getWeekArray(date2, locale, firstDayOfWeek) {
  var _a;
  const weeks = [];
  let currentWeek = [];
  const firstDayOfMonth = startOfMonth(date2);
  const lastDayOfMonth = endOfMonth(date2);
  const first = firstDayOfWeek ?? ((_a = weekInfo(locale)) == null ? void 0 : _a.firstDay) ?? 0;
  const firstDayWeekIndex = (firstDayOfMonth.getDay() - first + 7) % 7;
  const lastDayWeekIndex = (lastDayOfMonth.getDay() - first + 7) % 7;
  for (let i = 0; i < firstDayWeekIndex; i++) {
    const adjacentDay = new Date(firstDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i));
    currentWeek.push(adjacentDay);
  }
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const day = new Date(date2.getFullYear(), date2.getMonth(), i);
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  for (let i = 1; i < 7 - lastDayWeekIndex; i++) {
    const adjacentDay = new Date(lastDayOfMonth);
    adjacentDay.setDate(adjacentDay.getDate() + i);
    currentWeek.push(adjacentDay);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
}
function startOfWeek(date2, locale, firstDayOfWeek) {
  var _a;
  const day = firstDayOfWeek ?? ((_a = weekInfo(locale)) == null ? void 0 : _a.firstDay) ?? 0;
  const d = new Date(date2);
  while (d.getDay() !== day) {
    d.setDate(d.getDate() - 1);
  }
  return d;
}
function endOfWeek(date2, locale) {
  var _a;
  const d = new Date(date2);
  const lastDay = ((((_a = weekInfo(locale)) == null ? void 0 : _a.firstDay) ?? 0) + 6) % 7;
  while (d.getDay() !== lastDay) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}
function startOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), 1);
}
function endOfMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
}
function parseLocalDate(value) {
  const parts = value.split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
const _YYYMMDD = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function date(value) {
  if (value == null) return /* @__PURE__ */ new Date();
  if (value instanceof Date) return value;
  if (typeof value === "string") {
    let parsed;
    if (_YYYMMDD.test(value)) {
      return parseLocalDate(value);
    } else {
      parsed = Date.parse(value);
    }
    if (!isNaN(parsed)) return new Date(parsed);
  }
  return null;
}
const sundayJanuarySecond2000 = new Date(2e3, 0, 2);
function getWeekdays(locale, firstDayOfWeek) {
  var _a;
  const daysFromSunday = firstDayOfWeek ?? ((_a = weekInfo(locale)) == null ? void 0 : _a.firstDay) ?? 0;
  return createRange(7).map((i) => {
    const weekday = new Date(sundayJanuarySecond2000);
    weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i);
    return new Intl.DateTimeFormat(locale, {
      weekday: "narrow"
    }).format(weekday);
  });
}
function format(value, formatString, locale, formats) {
  const newDate = date(value) ?? /* @__PURE__ */ new Date();
  const customFormat = formats == null ? void 0 : formats[formatString];
  if (typeof customFormat === "function") {
    return customFormat(newDate, formatString, locale);
  }
  let options = {};
  switch (formatString) {
    case "fullDate":
      options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const day = newDate.getDate();
      const month = new Intl.DateTimeFormat(locale, {
        month: "long"
      }).format(newDate);
      return `${day} ${month}`;
    case "normalDateWithWeekday":
      options = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      options = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      options = {
        year: "numeric"
      };
      break;
    case "month":
      options = {
        month: "long"
      };
      break;
    case "monthShort":
      options = {
        month: "short"
      };
      break;
    case "monthAndYear":
      options = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      options = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      options = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      options = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(locale).format(newDate.getDate());
    case "hours12h":
      options = {
        hour: "numeric",
        hour12: true
      };
      break;
    case "hours24h":
      options = {
        hour: "numeric",
        hour12: false
      };
      break;
    case "minutes":
      options = {
        minute: "numeric"
      };
      break;
    case "seconds":
      options = {
        second: "numeric"
      };
      break;
    case "fullTime":
      options = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      break;
    case "fullTime24h":
      options = {
        hour: "numeric",
        minute: "numeric",
        hour12: false
      };
      break;
    case "fullDateTime":
      options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      break;
    case "fullDateTime24h":
      options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      };
      break;
    case "keyboardDate":
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
    case "keyboardDateTime12h":
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
    case "keyboardDateTime24h":
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      };
      return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
    default:
      options = customFormat ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(locale, options).format(newDate);
}
function toISO(adapter, value) {
  const date2 = adapter.toJsDate(value);
  const year = date2.getFullYear();
  const month = padStart(String(date2.getMonth() + 1), 2, "0");
  const day = padStart(String(date2.getDate()), 2, "0");
  return `${year}-${month}-${day}`;
}
function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function addMinutes(date2, amount) {
  const d = new Date(date2);
  d.setMinutes(d.getMinutes() + amount);
  return d;
}
function addHours(date2, amount) {
  const d = new Date(date2);
  d.setHours(d.getHours() + amount);
  return d;
}
function addDays(date2, amount) {
  const d = new Date(date2);
  d.setDate(d.getDate() + amount);
  return d;
}
function addWeeks(date2, amount) {
  const d = new Date(date2);
  d.setDate(d.getDate() + amount * 7);
  return d;
}
function addMonths(date2, amount) {
  const d = new Date(date2);
  d.setDate(1);
  d.setMonth(d.getMonth() + amount);
  return d;
}
function getYear(date2) {
  return date2.getFullYear();
}
function getMonth(date2) {
  return date2.getMonth();
}
function getWeek(date2, locale, firstDayOfWeek, firstWeekMinSize) {
  const weekInfoFromLocale = weekInfo(locale);
  const weekStart = firstDayOfWeek ?? (weekInfoFromLocale == null ? void 0 : weekInfoFromLocale.firstDay) ?? 0;
  const minWeekSize = firstWeekMinSize ?? (weekInfoFromLocale == null ? void 0 : weekInfoFromLocale.firstWeekSize) ?? 1;
  function firstWeekSize(year2) {
    const yearStart2 = new Date(year2, 0, 1);
    return 7 - getDiff(yearStart2, startOfWeek(yearStart2, locale, weekStart), "days");
  }
  let year = getYear(date2);
  const currentWeekEnd = addDays(startOfWeek(date2, locale, weekStart), 6);
  if (year < getYear(currentWeekEnd) && firstWeekSize(year + 1) >= minWeekSize) {
    year++;
  }
  const yearStart = new Date(year, 0, 1);
  const size = firstWeekSize(year);
  const d1w1 = size >= minWeekSize ? addDays(yearStart, size - 7) : addDays(yearStart, size);
  return 1 + getDiff(date2, d1w1, "weeks");
}
function getDate(date2) {
  return date2.getDate();
}
function getNextMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 1);
}
function getPreviousMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() - 1, 1);
}
function getHours(date2) {
  return date2.getHours();
}
function getMinutes(date2) {
  return date2.getMinutes();
}
function startOfYear(date2) {
  return new Date(date2.getFullYear(), 0, 1);
}
function endOfYear(date2) {
  return new Date(date2.getFullYear(), 11, 31);
}
function isWithinRange(date2, range) {
  return isAfter(date2, range[0]) && isBefore(date2, range[1]);
}
function isValid(date2) {
  const d = new Date(date2);
  return d instanceof Date && !isNaN(d.getTime());
}
function isAfter(date2, comparing) {
  return date2.getTime() > comparing.getTime();
}
function isAfterDay(date2, comparing) {
  return isAfter(startOfDay(date2), startOfDay(comparing));
}
function isBefore(date2, comparing) {
  return date2.getTime() < comparing.getTime();
}
function isEqual(date2, comparing) {
  return date2.getTime() === comparing.getTime();
}
function isSameDay(date2, comparing) {
  return date2.getDate() === comparing.getDate() && date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function isSameMonth(date2, comparing) {
  return date2.getMonth() === comparing.getMonth() && date2.getFullYear() === comparing.getFullYear();
}
function isSameYear(date2, comparing) {
  return date2.getFullYear() === comparing.getFullYear();
}
function getDiff(date2, comparing, unit) {
  const d = new Date(date2);
  const c = new Date(comparing);
  switch (unit) {
    case "years":
      return d.getFullYear() - c.getFullYear();
    case "quarters":
      return Math.floor((d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12) / 4);
    case "months":
      return d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12;
    case "weeks":
      return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((d.getTime() - c.getTime()) / 1e3);
    default: {
      return d.getTime() - c.getTime();
    }
  }
}
function setHours(date2, count) {
  const d = new Date(date2);
  d.setHours(count);
  return d;
}
function setMinutes(date2, count) {
  const d = new Date(date2);
  d.setMinutes(count);
  return d;
}
function setMonth(date2, count) {
  const d = new Date(date2);
  d.setMonth(count);
  return d;
}
function setDate(date2, day) {
  const d = new Date(date2);
  d.setDate(day);
  return d;
}
function setYear(date2, year) {
  const d = new Date(date2);
  d.setFullYear(year);
  return d;
}
function startOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0, 0);
}
function endOfDay(date2) {
  return new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 23, 59, 59, 999);
}
class VuetifyDateAdapter {
  constructor(options) {
    this.locale = options.locale;
    this.formats = options.formats;
  }
  date(value) {
    return date(value);
  }
  toJsDate(date2) {
    return date2;
  }
  toISO(date2) {
    return toISO(this, date2);
  }
  parseISO(date2) {
    return parseISO(date2);
  }
  addMinutes(date2, amount) {
    return addMinutes(date2, amount);
  }
  addHours(date2, amount) {
    return addHours(date2, amount);
  }
  addDays(date2, amount) {
    return addDays(date2, amount);
  }
  addWeeks(date2, amount) {
    return addWeeks(date2, amount);
  }
  addMonths(date2, amount) {
    return addMonths(date2, amount);
  }
  getWeekArray(date2, firstDayOfWeek) {
    const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
    return getWeekArray(date2, this.locale, firstDay);
  }
  startOfWeek(date2, firstDayOfWeek) {
    const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
    return startOfWeek(date2, this.locale, firstDay);
  }
  endOfWeek(date2) {
    return endOfWeek(date2, this.locale);
  }
  startOfMonth(date2) {
    return startOfMonth(date2);
  }
  endOfMonth(date2) {
    return endOfMonth(date2);
  }
  format(date2, formatString) {
    return format(date2, formatString, this.locale, this.formats);
  }
  isEqual(date2, comparing) {
    return isEqual(date2, comparing);
  }
  isValid(date2) {
    return isValid(date2);
  }
  isWithinRange(date2, range) {
    return isWithinRange(date2, range);
  }
  isAfter(date2, comparing) {
    return isAfter(date2, comparing);
  }
  isAfterDay(date2, comparing) {
    return isAfterDay(date2, comparing);
  }
  isBefore(date2, comparing) {
    return !isAfter(date2, comparing) && !isEqual(date2, comparing);
  }
  isSameDay(date2, comparing) {
    return isSameDay(date2, comparing);
  }
  isSameMonth(date2, comparing) {
    return isSameMonth(date2, comparing);
  }
  isSameYear(date2, comparing) {
    return isSameYear(date2, comparing);
  }
  setMinutes(date2, count) {
    return setMinutes(date2, count);
  }
  setHours(date2, count) {
    return setHours(date2, count);
  }
  setMonth(date2, count) {
    return setMonth(date2, count);
  }
  setDate(date2, day) {
    return setDate(date2, day);
  }
  setYear(date2, year) {
    return setYear(date2, year);
  }
  getDiff(date2, comparing, unit) {
    return getDiff(date2, comparing, unit);
  }
  getWeekdays(firstDayOfWeek) {
    const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
    return getWeekdays(this.locale, firstDay);
  }
  getYear(date2) {
    return getYear(date2);
  }
  getMonth(date2) {
    return getMonth(date2);
  }
  getWeek(date2, firstDayOfWeek, firstWeekMinSize) {
    const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
    return getWeek(date2, this.locale, firstDay, firstWeekMinSize);
  }
  getDate(date2) {
    return getDate(date2);
  }
  getNextMonth(date2) {
    return getNextMonth(date2);
  }
  getPreviousMonth(date2) {
    return getPreviousMonth(date2);
  }
  getHours(date2) {
    return getHours(date2);
  }
  getMinutes(date2) {
    return getMinutes(date2);
  }
  startOfDay(date2) {
    return startOfDay(date2);
  }
  endOfDay(date2) {
    return endOfDay(date2);
  }
  startOfYear(date2) {
    return startOfYear(date2);
  }
  endOfYear(date2) {
    return endOfYear(date2);
  }
}
const DateOptionsSymbol = Symbol.for("vuetify:date-options");
const DateAdapterSymbol = Symbol.for("vuetify:date-adapter");
function createDate(options, locale) {
  const _options = mergeDeep({
    adapter: VuetifyDateAdapter,
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
  }, options);
  return {
    options: _options,
    instance: createInstance(_options, locale)
  };
}
function createInstance(options, locale) {
  const instance = reactive(typeof options.adapter === "function" ? new options.adapter({
    locale: options.locale[locale.current.value] ?? locale.current.value,
    formats: options.formats
  }) : options.adapter);
  watch(locale.current, (value) => {
    instance.locale = options.locale[value] ?? value ?? instance.locale;
  });
  return instance;
}
const breakpoints = ["sm", "md", "lg", "xl", "xxl"];
const DisplaySymbol = Symbol.for("vuetify:display");
const defaultDisplayOptions = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
};
const parseDisplayOptions = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDisplayOptions;
  return mergeDeep(defaultDisplayOptions, options);
};
function getClientWidth(ssr) {
  return IN_BROWSER && !ssr ? window.innerWidth : typeof ssr === "object" && ssr.clientWidth || 0;
}
function getClientHeight(ssr) {
  return IN_BROWSER && !ssr ? window.innerHeight : typeof ssr === "object" && ssr.clientHeight || 0;
}
function getPlatform(ssr) {
  const userAgent2 = IN_BROWSER && !ssr ? window.navigator.userAgent : "ssr";
  function match(regexp) {
    return Boolean(userAgent2.match(regexp));
  }
  const android = match(/android/i);
  const ios = match(/iphone|ipad|ipod/i);
  const cordova = match(/cordova/i);
  const electron = match(/electron/i);
  const chrome2 = match(/chrome/i);
  const edge = match(/edge/i);
  const firefox = match(/firefox/i);
  const opera = match(/opera/i);
  const win2 = match(/win/i);
  const mac = match(/mac/i);
  const linux = match(/linux/i);
  return {
    android,
    ios,
    cordova,
    electron,
    chrome: chrome2,
    edge,
    firefox,
    opera,
    win: win2,
    mac,
    linux,
    touch: SUPPORTS_TOUCH,
    ssr: userAgent2 === "ssr"
  };
}
function createDisplay(options, ssr) {
  const {
    thresholds,
    mobileBreakpoint
  } = parseDisplayOptions(options);
  const height = shallowRef(getClientHeight(ssr));
  const platform = shallowRef(getPlatform(ssr));
  const state = reactive({});
  const width = shallowRef(getClientWidth(ssr));
  function updateSize() {
    height.value = getClientHeight();
    width.value = getClientWidth();
  }
  function update() {
    updateSize();
    platform.value = getPlatform();
  }
  watchEffect(() => {
    const xs = width.value < thresholds.sm;
    const sm = width.value < thresholds.md && !xs;
    const md = width.value < thresholds.lg && !(sm || xs);
    const lg = width.value < thresholds.xl && !(md || sm || xs);
    const xl = width.value < thresholds.xxl && !(lg || md || sm || xs);
    const xxl = width.value >= thresholds.xxl;
    const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
    const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
    const mobile = width.value < breakpointValue;
    state.xs = xs;
    state.sm = sm;
    state.md = md;
    state.lg = lg;
    state.xl = xl;
    state.xxl = xxl;
    state.smAndUp = !xs;
    state.mdAndUp = !(xs || sm);
    state.lgAndUp = !(xs || sm || md);
    state.xlAndUp = !(xs || sm || md || lg);
    state.smAndDown = !(md || lg || xl || xxl);
    state.mdAndDown = !(lg || xl || xxl);
    state.lgAndDown = !(xl || xxl);
    state.xlAndDown = !xxl;
    state.name = name;
    state.height = height.value;
    state.width = width.value;
    state.mobile = mobile;
    state.mobileBreakpoint = mobileBreakpoint;
    state.platform = platform.value;
    state.thresholds = thresholds;
  });
  if (IN_BROWSER) {
    window.addEventListener("resize", updateSize, {
      passive: true
    });
    onScopeDispose(() => {
      window.removeEventListener("resize", updateSize);
    }, true);
  }
  return {
    ...toRefs(state),
    update,
    ssr: !!ssr
  };
}
const makeDisplayProps = propsFactory({
  mobile: {
    type: Boolean,
    default: false
  },
  mobileBreakpoint: [Number, String]
}, "display");
function useDisplay() {
  let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  };
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const display = inject$1(DisplaySymbol);
  if (!display) throw new Error("Could not find Vuetify display injection");
  const mobile = computed(() => {
    if (props.mobile) {
      return true;
    } else if (typeof props.mobileBreakpoint === "number") {
      return display.width.value < props.mobileBreakpoint;
    } else if (props.mobileBreakpoint) {
      return display.width.value < display.thresholds.value[props.mobileBreakpoint];
    } else if (props.mobile === null) {
      return display.mobile.value;
    } else {
      return false;
    }
  });
  const displayClasses = computed(() => {
    if (!name) return {};
    return {
      [`${name}--mobile`]: mobile.value
    };
  });
  return {
    ...display,
    displayClasses,
    mobile
  };
}
const GoToSymbol = Symbol.for("vuetify:goto");
function genDefaults$2() {
  return {
    container: void 0,
    duration: 300,
    layout: false,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (t) => t,
      easeInQuad: (t) => t ** 2,
      easeOutQuad: (t) => t * (2 - t),
      easeInOutQuad: (t) => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t,
      easeInCubic: (t) => t ** 3,
      easeOutCubic: (t) => --t ** 3 + 1,
      easeInOutCubic: (t) => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      easeInQuart: (t) => t ** 4,
      easeOutQuart: (t) => 1 - --t ** 4,
      easeInOutQuart: (t) => t < 0.5 ? 8 * t ** 4 : 1 - 8 * --t ** 4,
      easeInQuint: (t) => t ** 5,
      easeOutQuint: (t) => 1 + --t ** 5,
      easeInOutQuint: (t) => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5
    }
  };
}
function getContainer(el) {
  return getTarget$1(el) ?? (document.scrollingElement || document.body);
}
function getTarget$1(el) {
  return typeof el === "string" ? document.querySelector(el) : refElement(el);
}
function getOffset$1(target, horizontal, rtl) {
  if (typeof target === "number") return horizontal && rtl ? -target : target;
  let el = getTarget$1(target);
  let totalOffset = 0;
  while (el) {
    totalOffset += horizontal ? el.offsetLeft : el.offsetTop;
    el = el.offsetParent;
  }
  return totalOffset;
}
function createGoTo(options, locale) {
  return {
    rtl: locale.isRtl,
    options: mergeDeep(genDefaults$2(), options)
  };
}
async function scrollTo(_target, _options, horizontal, goTo) {
  const property = horizontal ? "scrollLeft" : "scrollTop";
  const options = mergeDeep((goTo == null ? void 0 : goTo.options) ?? genDefaults$2(), _options);
  const rtl = goTo == null ? void 0 : goTo.rtl.value;
  const target = (typeof _target === "number" ? _target : getTarget$1(_target)) ?? 0;
  const container = options.container === "parent" && target instanceof HTMLElement ? target.parentElement : getContainer(options.container);
  const ease = typeof options.easing === "function" ? options.easing : options.patterns[options.easing];
  if (!ease) throw new TypeError(`Easing function "${options.easing}" not found.`);
  let targetLocation;
  if (typeof target === "number") {
    targetLocation = getOffset$1(target, horizontal, rtl);
  } else {
    targetLocation = getOffset$1(target, horizontal, rtl) - getOffset$1(container, horizontal, rtl);
    if (options.layout) {
      const styles = window.getComputedStyle(target);
      const layoutOffset = styles.getPropertyValue("--v-layout-top");
      if (layoutOffset) targetLocation -= parseInt(layoutOffset, 10);
    }
  }
  targetLocation += options.offset;
  targetLocation = clampTarget(container, targetLocation, !!rtl, !!horizontal);
  const startLocation = container[property] ?? 0;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const startTime = performance.now();
  return new Promise((resolve) => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = timeElapsed / options.duration;
    const location = Math.floor(startLocation + (targetLocation - startLocation) * ease(clamp(progress, 0, 1)));
    container[property] = location;
    if (progress >= 1 && Math.abs(location - container[property]) < 10) {
      return resolve(targetLocation);
    } else if (progress > 2) {
      consoleWarn("Scroll target is not reachable");
      return resolve(container[property]);
    }
    requestAnimationFrame(step);
  }));
}
function useGoTo() {
  let _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const goToInstance = inject$1(GoToSymbol);
  const {
    isRtl
  } = useRtl();
  if (!goToInstance) throw new Error("[Vuetify] Could not find injected goto instance");
  const goTo = {
    ...goToInstance,
    // can be set via VLocaleProvider
    rtl: computed(() => goToInstance.rtl.value || isRtl.value)
  };
  async function go(target, options) {
    return scrollTo(target, mergeDeep(_options, options), false, goTo);
  }
  go.horizontal = async (target, options) => {
    return scrollTo(target, mergeDeep(_options, options), true, goTo);
  };
  return go;
}
function clampTarget(container, value, rtl, horizontal) {
  const {
    scrollWidth,
    scrollHeight
  } = container;
  const [containerWidth, containerHeight] = container === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [container.offsetWidth, container.offsetHeight];
  let min;
  let max;
  if (horizontal) {
    if (rtl) {
      min = -(scrollWidth - containerWidth);
      max = 0;
    } else {
      min = 0;
      max = scrollWidth - containerWidth;
    }
  } else {
    min = 0;
    max = scrollHeight + -containerHeight;
  }
  return Math.max(Math.min(value, max), min);
}
const aliases$1 = {
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
};
const mdi$1 = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (props) => h(VClassIcon, {
    ...props,
    class: "mdi"
  })
};
const IconValue = [String, Function, Object, Array];
const IconSymbol = Symbol.for("vuetify:icons");
const makeIconProps = propsFactory({
  icon: {
    type: IconValue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: true
  }
}, "icon");
const VComponentIcon = genericComponent()({
  name: "VComponentIcon",
  props: makeIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      const Icon = props.icon;
      return createVNode(props.tag, null, {
        default: () => {
          var _a;
          return [props.icon ? createVNode(Icon, null, null) : (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
const VSvgIcon = defineComponent({
  name: "VSvgIcon",
  inheritAttrs: false,
  props: makeIconProps(),
  setup(props, _ref2) {
    let {
      attrs
    } = _ref2;
    return () => {
      return createVNode(props.tag, mergeProps(attrs, {
        "style": null
      }), {
        default: () => [createVNode("svg", {
          "class": "v-icon__svg",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 24 24",
          "role": "img",
          "aria-hidden": "true"
        }, [Array.isArray(props.icon) ? props.icon.map((path) => Array.isArray(path) ? createVNode("path", {
          "d": path[0],
          "fill-opacity": path[1]
        }, null) : createVNode("path", {
          "d": path
        }, null)) : createVNode("path", {
          "d": props.icon
        }, null)])]
      });
    };
  }
});
defineComponent({
  name: "VLigatureIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, null, {
        default: () => [props.icon]
      });
    };
  }
});
const VClassIcon = defineComponent({
  name: "VClassIcon",
  props: makeIconProps(),
  setup(props) {
    return () => {
      return createVNode(props.tag, {
        "class": props.icon
      }, null);
    };
  }
});
function genDefaults$1() {
  return {
    svg: {
      component: VSvgIcon
    },
    class: {
      component: VClassIcon
    }
  };
}
function createIcons(options) {
  const sets = genDefaults$1();
  const defaultSet = (options == null ? void 0 : options.defaultSet) ?? "mdi";
  if (defaultSet === "mdi" && !sets.mdi) {
    sets.mdi = mdi$1;
  }
  return mergeDeep({
    defaultSet,
    sets,
    aliases: {
      ...aliases$1,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, options);
}
const useIcon = (props) => {
  const icons = inject$1(IconSymbol);
  if (!icons) throw new Error("Missing Vuetify Icons provide!");
  const iconData = computed(() => {
    var _a;
    const iconAlias = unref(props);
    if (!iconAlias) return {
      component: VComponentIcon
    };
    let icon = iconAlias;
    if (typeof icon === "string") {
      icon = icon.trim();
      if (icon.startsWith("$")) {
        icon = (_a = icons.aliases) == null ? void 0 : _a[icon.slice(1)];
      }
    }
    if (!icon) consoleWarn(`Could not find aliased icon "${iconAlias}"`);
    if (Array.isArray(icon)) {
      return {
        component: VSvgIcon,
        icon
      };
    } else if (typeof icon !== "string") {
      return {
        component: VComponentIcon,
        icon
      };
    }
    const iconSetName = Object.keys(icons.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
    const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
    const iconSet = icons.sets[iconSetName ?? icons.defaultSet];
    return {
      component: iconSet.component,
      icon: iconName
    };
  });
  return {
    iconData
  };
};
const ThemeSymbol = Symbol.for("vuetify:theme");
const makeThemeProps = propsFactory({
  theme: String
}, "theme");
function genDefaults() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: false,
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
        dark: true,
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
function parseThemeOptions() {
  var _a, _b;
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : genDefaults();
  const defaults = genDefaults();
  if (!options) return {
    ...defaults,
    isDisabled: true
  };
  const themes = {};
  for (const [key, theme] of Object.entries(options.themes ?? {})) {
    const defaultTheme2 = theme.dark || key === "dark" ? (_a = defaults.themes) == null ? void 0 : _a.dark : (_b = defaults.themes) == null ? void 0 : _b.light;
    themes[key] = mergeDeep(defaultTheme2, theme);
  }
  return mergeDeep(defaults, {
    ...options,
    themes
  });
}
function createCssClass(lines, selector, content, scope) {
  lines.push(`${getScopedSelector(selector, scope)} {
`, ...content.map((line) => `  ${line};
`), "}\n");
}
function genCssVariables(theme) {
  const lightOverlay = theme.dark ? 2 : 1;
  const darkOverlay = theme.dark ? 1 : 2;
  const variables = [];
  for (const [key, value] of Object.entries(theme.colors)) {
    const rgb = parseColor(value);
    variables.push(`--v-theme-${key}: ${rgb.r},${rgb.g},${rgb.b}`);
    if (!key.startsWith("on-")) {
      variables.push(`--v-theme-${key}-overlay-multiplier: ${getLuma(value) > 0.18 ? lightOverlay : darkOverlay}`);
    }
  }
  for (const [key, value] of Object.entries(theme.variables)) {
    const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
    const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
    variables.push(`--v-${key}: ${rgb ?? value}`);
  }
  return variables;
}
function genVariation(name, color, variations) {
  const object = {};
  if (variations) {
    for (const variation of ["lighten", "darken"]) {
      const fn = variation === "lighten" ? lighten : darken;
      for (const amount of createRange(variations[variation], 1)) {
        object[`${name}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
      }
    }
  }
  return object;
}
function genVariations(colors, variations) {
  if (!variations) return {};
  let variationColors = {};
  for (const name of variations.colors) {
    const color = colors[name];
    if (!color) continue;
    variationColors = {
      ...variationColors,
      ...genVariation(name, color, variations)
    };
  }
  return variationColors;
}
function genOnColors(colors) {
  const onColors = {};
  for (const color of Object.keys(colors)) {
    if (color.startsWith("on-") || colors[`on-${color}`]) continue;
    const onColor = `on-${color}`;
    const colorVal = parseColor(colors[color]);
    onColors[onColor] = getForeground(colorVal);
  }
  return onColors;
}
function getScopedSelector(selector, scope) {
  if (!scope) return selector;
  const scopeSelector = `:where(${scope})`;
  return selector === ":root" ? scopeSelector : `${scopeSelector} ${selector}`;
}
function upsertStyles(styleEl, styles) {
  if (!styleEl) return;
  styleEl.innerHTML = styles;
}
function getOrCreateStyleElement(id, cspNonce) {
  if (!IN_BROWSER) return null;
  let style = document.getElementById(id);
  if (!style) {
    style = document.createElement("style");
    style.id = id;
    style.type = "text/css";
    if (cspNonce) style.setAttribute("nonce", cspNonce);
    document.head.appendChild(style);
  }
  return style;
}
function createTheme(options) {
  const parsedOptions = parseThemeOptions(options);
  const name = shallowRef(parsedOptions.defaultTheme);
  const themes = ref(parsedOptions.themes);
  const computedThemes = computed(() => {
    const acc = {};
    for (const [name2, original] of Object.entries(themes.value)) {
      const colors = {
        ...original.colors,
        ...genVariations(original.colors, parsedOptions.variations)
      };
      acc[name2] = {
        ...original,
        colors: {
          ...colors,
          ...genOnColors(colors)
        }
      };
    }
    return acc;
  });
  const current = computed(() => computedThemes.value[name.value]);
  const styles = computed(() => {
    var _a;
    const lines = [];
    if ((_a = current.value) == null ? void 0 : _a.dark) {
      createCssClass(lines, ":root", ["color-scheme: dark"], parsedOptions.scope);
    }
    createCssClass(lines, ":root", genCssVariables(current.value), parsedOptions.scope);
    for (const [themeName, theme] of Object.entries(computedThemes.value)) {
      createCssClass(lines, `.v-theme--${themeName}`, [`color-scheme: ${theme.dark ? "dark" : "normal"}`, ...genCssVariables(theme)], parsedOptions.scope);
    }
    const bgLines = [];
    const fgLines = [];
    const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
    for (const key of colors) {
      if (key.startsWith("on-")) {
        createCssClass(fgLines, `.${key}`, [`color: rgb(var(--v-theme-${key})) !important`], parsedOptions.scope);
      } else {
        createCssClass(bgLines, `.bg-${key}`, [`--v-theme-overlay-multiplier: var(--v-theme-${key}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${key})) !important`, `color: rgb(var(--v-theme-on-${key})) !important`], parsedOptions.scope);
        createCssClass(fgLines, `.text-${key}`, [`color: rgb(var(--v-theme-${key})) !important`], parsedOptions.scope);
        createCssClass(fgLines, `.border-${key}`, [`--v-border-color: var(--v-theme-${key})`], parsedOptions.scope);
      }
    }
    lines.push(...bgLines, ...fgLines);
    return lines.map((str, i) => i === 0 ? str : `    ${str}`).join("");
  });
  function install(app) {
    if (parsedOptions.isDisabled) return;
    const head = app._context.provides.usehead;
    if (head) {
      let getHead = function() {
        return {
          style: [{
            textContent: styles.value,
            id: parsedOptions.stylesheetId,
            nonce: parsedOptions.cspNonce || false
          }]
        };
      };
      if (head.push) {
        const entry = head.push(getHead);
        if (IN_BROWSER) {
          watch(styles, () => {
            entry.patch(getHead);
          });
        }
      } else {
        if (IN_BROWSER) {
          head.addHeadObjs(computed(getHead));
          watchEffect(() => head.updateDOM());
        } else {
          head.addHeadObjs(getHead());
        }
      }
    } else {
      let updateStyles = function() {
        upsertStyles(getOrCreateStyleElement(parsedOptions.stylesheetId, parsedOptions.cspNonce), styles.value);
      };
      if (IN_BROWSER) {
        watch(styles, updateStyles, {
          immediate: true
        });
      } else {
        updateStyles();
      }
    }
  }
  const themeClasses = computed(() => parsedOptions.isDisabled ? void 0 : `v-theme--${name.value}`);
  return {
    install,
    isDisabled: parsedOptions.isDisabled,
    name,
    themes,
    current,
    computedThemes,
    themeClasses,
    styles,
    global: {
      name,
      current
    }
  };
}
function provideTheme(props) {
  getCurrentInstance("provideTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme) throw new Error("Could not find Vuetify theme injection");
  const name = computed(() => props.theme ?? theme.name.value);
  const current = computed(() => theme.themes.value[name.value]);
  const themeClasses = computed(() => theme.isDisabled ? void 0 : `v-theme--${name.value}`);
  const newTheme = {
    ...theme,
    name,
    current,
    themeClasses
  };
  provide(ThemeSymbol, newTheme);
  return newTheme;
}
function useTheme() {
  getCurrentInstance("useTheme");
  const theme = inject$1(ThemeSymbol, null);
  if (!theme) throw new Error("Could not find Vuetify theme injection");
  return theme;
}
function useResizeObserver(callback) {
  let box = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const resizeRef = templateRef();
  const contentRect = ref();
  if (IN_BROWSER) {
    const observer = new ResizeObserver((entries) => {
      if (!entries.length) return;
      if (box === "content") {
        contentRect.value = entries[0].contentRect;
      } else {
        contentRect.value = entries[0].target.getBoundingClientRect();
      }
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(() => resizeRef.el, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        contentRect.value = void 0;
      }
      if (newValue) observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
const VuetifyLayoutKey = Symbol.for("vuetify:layout");
const VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
const ROOT_ZINDEX = 1e3;
const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout");
const makeLayoutItemProps = propsFactory({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function useLayout() {
  const layout = inject$1(VuetifyLayoutKey);
  if (!layout) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: layout.getLayoutItem,
    mainRect: layout.mainRect,
    mainStyles: layout.mainStyles
  };
}
function useLayoutItem(options) {
  const layout = inject$1(VuetifyLayoutKey);
  if (!layout) throw new Error("[Vuetify] Could not find injected layout");
  const id = options.id ?? `layout-item-${useId()}`;
  const vm = getCurrentInstance("useLayoutItem");
  provide(VuetifyLayoutItemKey, {
    id
  });
  const isKeptAlive = shallowRef(false);
  onDeactivated(() => isKeptAlive.value = true);
  onActivated(() => isKeptAlive.value = false);
  const {
    layoutItemStyles,
    layoutItemScrimStyles
  } = layout.register(vm, {
    ...options,
    active: computed(() => isKeptAlive.value ? false : options.active.value),
    id
  });
  onBeforeUnmount(() => layout.unregister(id));
  return {
    layoutItemStyles,
    layoutRect: layout.layoutRect,
    layoutItemScrimStyles
  };
}
const generateLayers = (layout, positions, layoutSizes, activeItems) => {
  let previousLayer = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const layers = [{
    id: "",
    layer: {
      ...previousLayer
    }
  }];
  for (const id of layout) {
    const position = positions.get(id);
    const amount = layoutSizes.get(id);
    const active = activeItems.get(id);
    if (!position || !amount || !active) continue;
    const layer = {
      ...previousLayer,
      [position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
    };
    layers.push({
      id,
      layer
    });
    previousLayer = layer;
  }
  return layers;
};
function createLayout(props) {
  const parentLayout = inject$1(VuetifyLayoutKey, null);
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
  const registered = ref([]);
  const positions = reactive(/* @__PURE__ */ new Map());
  const layoutSizes = reactive(/* @__PURE__ */ new Map());
  const priorities = reactive(/* @__PURE__ */ new Map());
  const activeItems = reactive(/* @__PURE__ */ new Map());
  const disabledTransitions = reactive(/* @__PURE__ */ new Map());
  const {
    resizeRef,
    contentRect: layoutRect
  } = useResizeObserver();
  const computedOverlaps = computed(() => {
    const map = /* @__PURE__ */ new Map();
    const overlaps = props.overlaps ?? [];
    for (const overlap of overlaps.filter((item) => item.includes(":"))) {
      const [top, bottom] = overlap.split(":");
      if (!registered.value.includes(top) || !registered.value.includes(bottom)) continue;
      const topPosition = positions.get(top);
      const bottomPosition = positions.get(bottom);
      const topAmount = layoutSizes.get(top);
      const bottomAmount = layoutSizes.get(bottom);
      if (!topPosition || !bottomPosition || !topAmount || !bottomAmount) continue;
      map.set(bottom, {
        position: topPosition.value,
        amount: parseInt(topAmount.value, 10)
      });
      map.set(top, {
        position: bottomPosition.value,
        amount: -parseInt(bottomAmount.value, 10)
      });
    }
    return map;
  });
  const layers = computed(() => {
    const uniquePriorities = [...new Set([...priorities.values()].map((p) => p.value))].sort((a, b) => a - b);
    const layout = [];
    for (const p of uniquePriorities) {
      const items2 = registered.value.filter((id) => {
        var _a;
        return ((_a = priorities.get(id)) == null ? void 0 : _a.value) === p;
      });
      layout.push(...items2);
    }
    return generateLayers(layout, positions, layoutSizes, activeItems);
  });
  const transitionsEnabled = computed(() => {
    return !Array.from(disabledTransitions.values()).some((ref2) => ref2.value);
  });
  const mainRect = computed(() => {
    return layers.value[layers.value.length - 1].layer;
  });
  const mainStyles = computed(() => {
    return {
      "--v-layout-left": convertToUnit(mainRect.value.left),
      "--v-layout-right": convertToUnit(mainRect.value.right),
      "--v-layout-top": convertToUnit(mainRect.value.top),
      "--v-layout-bottom": convertToUnit(mainRect.value.bottom),
      ...transitionsEnabled.value ? void 0 : {
        transition: "none"
      }
    };
  });
  const items = computed(() => {
    return layers.value.slice(1).map((_ref, index) => {
      let {
        id
      } = _ref;
      const {
        layer
      } = layers.value[index];
      const size = layoutSizes.get(id);
      const position = positions.get(id);
      return {
        id,
        ...layer,
        size: Number(size.value),
        position: position.value
      };
    });
  });
  const getLayoutItem = (id) => {
    return items.value.find((item) => item.id === id);
  };
  const rootVm = getCurrentInstance("createLayout");
  const isMounted = shallowRef(false);
  onMounted(() => {
    isMounted.value = true;
  });
  provide(VuetifyLayoutKey, {
    register: (vm, _ref2) => {
      let {
        id,
        order,
        position,
        layoutSize,
        elementSize,
        active,
        disableTransitions,
        absolute
      } = _ref2;
      priorities.set(id, order);
      positions.set(id, position);
      layoutSizes.set(id, layoutSize);
      activeItems.set(id, active);
      disableTransitions && disabledTransitions.set(id, disableTransitions);
      const instances = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm == null ? void 0 : rootVm.vnode);
      const instanceIndex = instances.indexOf(vm);
      if (instanceIndex > -1) registered.value.splice(instanceIndex, 0, id);
      else registered.value.push(id);
      const index = computed(() => items.value.findIndex((i) => i.id === id));
      const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index.value * 2);
      const layoutItemStyles = computed(() => {
        const isHorizontal = position.value === "left" || position.value === "right";
        const isOppositeHorizontal = position.value === "right";
        const isOppositeVertical = position.value === "bottom";
        const size = elementSize.value ?? layoutSize.value;
        const unit = size === 0 ? "%" : "px";
        const styles = {
          [position.value]: 0,
          zIndex: zIndex.value,
          transform: `translate${isHorizontal ? "X" : "Y"}(${(active.value ? 0 : -(size === 0 ? 100 : size)) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1)}${unit})`,
          position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
          ...transitionsEnabled.value ? void 0 : {
            transition: "none"
          }
        };
        if (!isMounted.value) return styles;
        const item = items.value[index.value];
        if (!item) throw new Error(`[Vuetify] Could not find layout item "${id}"`);
        const overlap = computedOverlaps.value.get(id);
        if (overlap) {
          item[overlap.position] += overlap.amount;
        }
        return {
          ...styles,
          height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
          left: isOppositeHorizontal ? void 0 : `${item.left}px`,
          right: isOppositeHorizontal ? `${item.right}px` : void 0,
          top: position.value !== "bottom" ? `${item.top}px` : void 0,
          bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
          width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
        };
      });
      const layoutItemScrimStyles = computed(() => ({
        zIndex: zIndex.value - 1
      }));
      return {
        layoutItemStyles,
        layoutItemScrimStyles,
        zIndex
      };
    },
    unregister: (id) => {
      priorities.delete(id);
      positions.delete(id);
      layoutSizes.delete(id);
      activeItems.delete(id);
      disabledTransitions.delete(id);
      registered.value = registered.value.filter((v) => v !== id);
    },
    mainRect,
    mainStyles,
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex
  });
  const layoutClasses = computed(() => ["v-layout", {
    "v-layout--full-height": props.fullHeight
  }]);
  const layoutStyles = computed(() => ({
    zIndex: parentLayout ? rootZIndex.value : void 0,
    position: parentLayout ? "relative" : void 0,
    overflow: parentLayout ? "hidden" : void 0
  }));
  return {
    layoutClasses,
    layoutStyles,
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef
  };
}
function createVuetify() {
  let vuetify2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint,
    ...rest
  } = vuetify2;
  const options = mergeDeep(blueprint, rest);
  const {
    aliases: aliases2 = {},
    components = {},
    directives: directives2 = {}
  } = options;
  const scope = effectScope();
  return scope.run(() => {
    const defaults = createDefaults(options.defaults);
    const display = createDisplay(options.display, options.ssr);
    const theme = createTheme(options.theme);
    const icons = createIcons(options.icons);
    const locale = createLocale(options.locale);
    const date2 = createDate(options.date, locale);
    const goTo = createGoTo(options.goTo, locale);
    function install(app) {
      for (const key in directives2) {
        app.directive(key, directives2[key]);
      }
      for (const key in components) {
        app.component(key, components[key]);
      }
      for (const key in aliases2) {
        app.component(key, defineComponent({
          ...aliases2[key],
          name: key,
          aliasName: aliases2[key].name
        }));
      }
      const appScope = effectScope();
      appScope.run(() => {
        theme.install(app);
      });
      app.onUnmount(() => appScope.stop());
      app.provide(DefaultsSymbol, defaults);
      app.provide(DisplaySymbol, display);
      app.provide(ThemeSymbol, theme);
      app.provide(IconSymbol, icons);
      app.provide(LocaleSymbol, locale);
      app.provide(DateOptionsSymbol, date2.options);
      app.provide(DateAdapterSymbol, date2.instance);
      app.provide(GoToSymbol, goTo);
      if (IN_BROWSER && options.ssr) {
        if (app.$nuxt) {
          app.$nuxt.hook("app:suspense:resolve", () => {
            display.update();
          });
        } else {
          const {
            mount
          } = app;
          app.mount = function() {
            const vm = mount(...arguments);
            nextTick(() => display.update());
            app.mount = mount;
            return vm;
          };
        }
      }
      {
        app.mixin({
          computed: {
            $vuetify() {
              return reactive({
                defaults: inject.call(this, DefaultsSymbol),
                display: inject.call(this, DisplaySymbol),
                theme: inject.call(this, ThemeSymbol),
                icons: inject.call(this, IconSymbol),
                locale: inject.call(this, LocaleSymbol),
                date: inject.call(this, DateAdapterSymbol)
              });
            }
          }
        });
      }
    }
    function unmount() {
      scope.stop();
    }
    return {
      install,
      unmount,
      defaults,
      display,
      theme,
      icons,
      locale,
      date: date2,
      goTo
    };
  });
}
const version$1 = "3.8.2";
createVuetify.version = version$1;
function inject(key) {
  var _a, _b;
  const vm = this.$;
  const provides = ((_a = vm.parent) == null ? void 0 : _a.provides) ?? ((_b = vm.vnode.appContext) == null ? void 0 : _b.provides);
  if (provides && key in provides) {
    return provides[key];
  }
}
const aliases = {
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
};
const mdi = {
  component: VSvgIcon
};
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false) return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target) return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  e.shadowTarget = e.target;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(document);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  beforeUnmount(el, binding) {
    if (!el._clickOutside) return;
    handleShadow(el, (app) => {
      var _a;
      if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid])) return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};
function mounted$5(el, binding) {
  if (!SUPPORTS_INTERSECTION) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver(function() {
    var _a;
    let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    const _observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
    if (!_observe) return;
    const isIntersecting = entries.some((entry) => entry.isIntersecting);
    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(isIntersecting, entries, observer2);
    }
    if (isIntersecting && modifiers.once) unmounted$5(el, binding);
    else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[binding.instance.$.uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}
function unmounted$5(el, binding) {
  var _a;
  const observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted: mounted$5,
  unmounted: unmounted$5
};
function mounted$4(el, binding) {
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    once,
    immediate,
    ...modifierKeys
  } = modifiers;
  const defaultValue = !Object.keys(modifierKeys).length;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {
      attributes: (modifierKeys == null ? void 0 : modifierKeys.attr) ?? defaultValue,
      characterData: (modifierKeys == null ? void 0 : modifierKeys.char) ?? defaultValue,
      childList: (modifierKeys == null ? void 0 : modifierKeys.child) ?? defaultValue,
      subtree: (modifierKeys == null ? void 0 : modifierKeys.sub) ?? defaultValue
    }
  };
  const observer = new MutationObserver(function() {
    let mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    handler == null ? void 0 : handler(mutations, observer2);
    if (once) unmounted$4(el, binding);
  });
  if (immediate) handler == null ? void 0 : handler([], observer);
  el._mutate = Object(el._mutate);
  el._mutate[binding.instance.$.uid] = {
    observer
  };
  observer.observe(el, options);
}
function unmounted$4(el, binding) {
  var _a;
  if (!((_a = el._mutate) == null ? void 0 : _a[binding.instance.$.uid])) return;
  el._mutate[binding.instance.$.uid].observer.disconnect();
  delete el._mutate[binding.instance.$.uid];
}
const Mutate = {
  mounted: mounted$4,
  unmounted: unmounted$4
};
function mounted$3(el, binding) {
  var _a, _b;
  const handler = binding.value;
  const options = {
    passive: !((_a = binding.modifiers) == null ? void 0 : _a.active)
  };
  window.addEventListener("resize", handler, options);
  el._onResize = Object(el._onResize);
  el._onResize[binding.instance.$.uid] = {
    handler,
    options
  };
  if (!((_b = binding.modifiers) == null ? void 0 : _b.quiet)) {
    handler();
  }
}
function unmounted$3(el, binding) {
  var _a;
  if (!((_a = el._onResize) == null ? void 0 : _a[binding.instance.$.uid])) return;
  const {
    handler,
    options
  } = el._onResize[binding.instance.$.uid];
  window.removeEventListener("resize", handler, options);
  delete el._onResize[binding.instance.$.uid];
}
const Resize = {
  mounted: mounted$3,
  unmounted: unmounted$3
};
const stopSymbol = Symbol("rippleStop");
const DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e) {
  return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
  return e.constructor.name === "KeyboardEvent";
}
const calculate = function(e, el) {
  var _a;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_a = el._ripple) == null ? void 0 : _a.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
const ripples = {
  /* eslint-disable max-statements */
  show(e, el) {
    var _a;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) {
      return;
    }
    const container = document.createElement("span");
    const animation = document.createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed2 = window.getComputedStyle(el);
    if (computed2 && computed2.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animation.classList.remove("v-ripple__animation--enter");
        animation.classList.add("v-ripple__animation--in");
        transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      });
    });
  },
  hide(el) {
    var _a;
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) return;
    const ripples2 = el.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0) return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding) return;
    else animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      setTimeout(() => {
        var _a2;
        const ripples3 = el.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (((_a2 = animation.parentNode) == null ? void 0 : _a2.parentNode) === el) el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e[stopSymbol]) return;
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch) return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit) return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      var _a;
      if ((_a = element == null ? void 0 : element._ripple) == null ? void 0 : _a.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple)) return;
  window.clearTimeout(element._ripple.showTimer);
  if (e.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple)) return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el, binding, wasEnabled) {
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = el._ripple ?? {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  if (isObject(value) && value.class) {
    el._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el.addEventListener("mousedown", rippleStop);
      return;
    }
    el.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el.addEventListener("touchcancel", rippleHide);
    el.addEventListener("mousedown", rippleShow);
    el.addEventListener("mouseup", rippleHide);
    el.addEventListener("mouseleave", rippleHide);
    el.addEventListener("keydown", keyboardRippleShow);
    el.addEventListener("keyup", keyboardRippleHide);
    el.addEventListener("blur", focusRippleHide);
    el.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  el.removeEventListener("mousedown", rippleShow);
  el.removeEventListener("touchstart", rippleShow);
  el.removeEventListener("touchend", rippleHide);
  el.removeEventListener("touchmove", rippleCancelShow);
  el.removeEventListener("touchcancel", rippleHide);
  el.removeEventListener("mouseup", rippleHide);
  el.removeEventListener("mouseleave", rippleHide);
  el.removeEventListener("keydown", keyboardRippleShow);
  el.removeEventListener("keyup", keyboardRippleHide);
  el.removeEventListener("dragstart", rippleHide);
  el.removeEventListener("blur", focusRippleHide);
}
function mounted$2(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted$2(el) {
  delete el._ripple;
  removeListeners(el);
}
function updated$1(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
const Ripple = {
  mounted: mounted$2,
  unmounted: unmounted$2,
  updated: updated$1
};
function mounted$1(el, binding) {
  const {
    self: self2 = false
  } = binding.modifiers ?? {};
  const value = binding.value;
  const options = typeof value === "object" && value.options || {
    passive: true
  };
  const handler = typeof value === "function" || "handleEvent" in value ? value : value.handler;
  const target = self2 ? el : binding.arg ? document.querySelector(binding.arg) : window;
  if (!target) return;
  target.addEventListener("scroll", handler, options);
  el._onScroll = Object(el._onScroll);
  el._onScroll[binding.instance.$.uid] = {
    handler,
    options,
    // Don't reference self
    target: self2 ? void 0 : target
  };
}
function unmounted$1(el, binding) {
  var _a;
  if (!((_a = el._onScroll) == null ? void 0 : _a[binding.instance.$.uid])) return;
  const {
    handler,
    options,
    target = el
  } = el._onScroll[binding.instance.$.uid];
  target.removeEventListener("scroll", handler, options);
  delete el._onScroll[binding.instance.$.uid];
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) return;
  unmounted$1(el, binding);
  mounted$1(el, binding);
}
const Scroll = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated
};
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (value == null ? void 0 : value.options) ?? {
    passive: true
  };
  const uid2 = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid2) return;
  const handlers2 = createHandlers(binding.value);
  target._touchHandlers = target._touchHandlers ?? /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid2] = handlers2;
  keys(handlers2).forEach((eventName2) => {
    target.addEventListener(eventName2, handlers2[eventName2], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid2 = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid2) return;
  const handlers2 = target._touchHandlers[uid2];
  keys(handlers2).forEach((eventName2) => {
    target.removeEventListener(eventName2, handlers2[eventName2]);
  });
  delete target._touchHandlers[uid2];
}
const Touch = {
  mounted,
  unmounted
};
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
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
function useLocationStrategies(props, data2) {
  const contentStyles = ref({});
  const updateLocation = ref();
  if (IN_BROWSER) {
    useToggleScope(() => !!(data2.isActive.value && props.locationStrategy), (reset) => {
      var _a, _b;
      watch(() => props.locationStrategy, reset);
      onScopeDispose(() => {
        window.removeEventListener("resize", onResize);
        updateLocation.value = void 0;
      });
      window.addEventListener("resize", onResize, {
        passive: true
      });
      if (typeof props.locationStrategy === "function") {
        updateLocation.value = (_a = props.locationStrategy(data2, props, contentStyles)) == null ? void 0 : _a.updateLocation;
      } else {
        updateLocation.value = (_b = locationStrategies[props.locationStrategy](data2, props, contentStyles)) == null ? void 0 : _b.updateLocation;
      }
    });
  }
  function onResize(e) {
    var _a;
    (_a = updateLocation.value) == null ? void 0 : _a.call(updateLocation, e);
  }
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data2, props, contentStyles) {
  const activatorFixed = Array.isArray(data2.target.value) || isFixedPosition(data2.target.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed",
      top: 0,
      [data2.isRtl.value ? "right" : "left"]: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data2.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data2.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2) offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe) updateLocation();
  });
  watch([data2.target, data2.contentEl], (_ref, _ref2) => {
    let [newTarget, newContentEl] = _ref;
    let [oldTarget, oldContentEl] = _ref2;
    if (oldTarget && !Array.isArray(oldTarget)) observer.unobserve(oldTarget);
    if (newTarget && !Array.isArray(newTarget)) observer.observe(newTarget);
    if (oldContentEl) observer.unobserve(oldContentEl);
    if (newContentEl) observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => observe = true);
    if (!data2.target.value || !data2.contentEl.value) return;
    const targetBox = getTargetBox(data2.target.value);
    const contentBox = getIntrinsicSize(data2.contentEl.value, data2.isRtl.value);
    const scrollParents = getScrollParents(data2.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data2.contentEl.value.style.top && data2.contentEl.value.style.left)) {
        contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === document.documentElement ? 0 : rect.x,
        y: el === document.documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset) continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data2.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data2.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result) return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame) frame();
    if (frames.length) run();
    else clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "VOverlay-scroll-strategies");
function useScrollStrategies(props, data2) {
  if (!IN_BROWSER) return;
  let scope;
  watchEffect(async () => {
    scope == null ? void 0 : scope.stop();
    if (!(data2.isActive.value && props.scrollStrategy)) return;
    scope = effectScope();
    await new Promise((resolve) => setTimeout(resolve));
    scope.active && scope.run(() => {
      var _a;
      if (typeof props.scrollStrategy === "function") {
        props.scrollStrategy(data2, props, scope);
      } else {
        (_a = scrollStrategies[props.scrollStrategy]) == null ? void 0 : _a.call(scrollStrategies, data2, props, scope);
      }
    });
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
}
function closeScrollStrategy(data2) {
  function onScroll(e) {
    data2.isActive.value = false;
  }
  bindScroll(data2.targetEl.value ?? data2.contentEl.value, onScroll);
}
function blockScrollStrategy(data2, props) {
  var _a;
  const offsetParent = (_a = data2.root.value) == null ? void 0 : _a.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data2.targetEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data2.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data2.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    if (el !== document.documentElement) {
      el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    }
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      const scrollBehavior = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
      el.style.scrollBehavior = scrollBehavior;
    });
    if (scrollableParent) {
      data2.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data2, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _a, _b;
      const start = performance.now();
      (_b = (_a = data2.updateLocation).value) == null ? void 0 : _b.call(_a, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(data2.targetEl.value ?? data2.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el, onScroll) {
  const scrollElements = [document, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  let clearDelay = () => {
  };
  function runDelay(isOpening) {
    clearDelay == null ? void 0 : clearDelay();
    const delay = Number(isOpening ? props.openDelay : props.closeDelay);
    return new Promise((resolve) => {
      clearDelay = defer(delay, () => {
        cb == null ? void 0 : cb(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay() {
    return runDelay(false);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
const makeActivatorProps = propsFactory({
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
  ...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop,
    contentEl
  } = _ref;
  const vm = getCurrentInstance("useActivator");
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, (value) => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const cursorTarget = ref();
  const availableEvents = {
    onClick: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      if (!isActive.value) {
        cursorTarget.value = [e.clientX, e.clientY];
      }
      isActive.value = !isActive.value;
    },
    onMouseenter: (e) => {
      var _a;
      if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents) return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: (e) => {
      if (matchesSelector(e.target, ":focus-visible") === false) return;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = () => {
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject$1(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    var _a;
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered)) && !((_a = contentEl.value) == null ? void 0 : _a.contains(document.activeElement))) {
      isActive.value = false;
    }
  });
  watch(isActive, (val) => {
    if (!val) {
      setTimeout(() => {
        cursorTarget.value = void 0;
      });
    }
  }, {
    flush: "post"
  });
  const activatorRef = templateRef();
  watchEffect(() => {
    if (!activatorRef.value) return;
    nextTick(() => {
      activatorEl.value = activatorRef.el;
    });
  });
  const targetRef = templateRef();
  const target = computed(() => {
    if (props.target === "cursor" && cursorTarget.value) return cursorTarget.value;
    if (targetRef.value) return targetRef.el;
    return getTarget(props.target, vm) || activatorEl.value;
  });
  const targetEl = computed(() => {
    return Array.isArray(target.value) ? void 0 : target.value;
  });
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    target,
    targetEl,
    targetRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el) return;
    bindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el) return;
    unbindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function getActivator() {
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    const activator = getTarget(selector, vm);
    activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : void 0;
    return activatorEl.value;
  }
}
function getTarget(selector, vm) {
  var _a, _b;
  if (!selector) return;
  let target;
  if (selector === "parent") {
    let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
    while (el == null ? void 0 : el.hasAttribute("data-no-activator")) {
      el = el.parentNode;
    }
    target = el;
  } else if (typeof selector === "string") {
    target = document.querySelector(selector);
  } else if ("$el" in selector) {
    target = selector.$el;
  } else {
    target = selector;
  }
  return target;
}
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
        if (!colors.value.text && isParsableColor(colors.value.background)) {
          const backgroundColor = parseColor(colors.value.background);
          if (backgroundColor.a == null || backgroundColor.a === 1) {
            const textColor = getForeground(backgroundColor);
            styles.color = textColor;
            styles.caretColor = textColor;
          }
        }
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(props, name) {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => {
    const styles = {};
    const height = convertToUnit(props.height);
    const maxHeight = convertToUnit(props.maxHeight);
    const maxWidth = convertToUnit(props.maxWidth);
    const minHeight = convertToUnit(props.minHeight);
    const minWidth = convertToUnit(props.minWidth);
    const width = convertToUnit(props.width);
    if (height != null) styles.height = height;
    if (maxHeight != null) styles.maxHeight = maxHeight;
    if (maxWidth != null) styles.maxWidth = maxWidth;
    if (minHeight != null) styles.minHeight = minHeight;
    if (minWidth != null) styles.minWidth = minWidth;
    if (width != null) styles.width = width;
    return styles;
  });
  return {
    dimensionStyles
  };
}
function useHydration() {
  if (!IN_BROWSER) return shallowRef(false);
  const {
    ssr
  } = useDisplay();
  if (ssr) {
    const isMounted = shallowRef(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return isMounted;
  } else {
    return shallowRef(true);
  }
}
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager) isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
function useRoute() {
  const vm = getCurrentInstance("useRoute");
  return computed(() => {
    var _a;
    return (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$route;
  });
}
function useRouter() {
  var _a, _b;
  return (_b = (_a = getCurrentInstance("useRouter")) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$router;
}
function useLink(props, attrs) {
  var _a, _b;
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
    const href2 = toRef(props, "href");
    return {
      isLink,
      isClickable,
      href: href2,
      linkProps: reactive({
        href: href2
      })
    };
  }
  const linkProps = computed(() => ({
    ...props,
    to: toRef(() => props.to || "")
  }));
  const routerLink = RouterLink.useLink(linkProps.value);
  const link = computed(() => props.to ? routerLink : void 0);
  const route = useRoute();
  const isActive = computed(() => {
    var _a2, _b2, _c;
    if (!link.value) return false;
    if (!props.exact) return ((_a2 = link.value.isActive) == null ? void 0 : _a2.value) ?? false;
    if (!route.value) return ((_b2 = link.value.isExactActive) == null ? void 0 : _b2.value) ?? false;
    return ((_c = link.value.isExactActive) == null ? void 0 : _c.value) && deepEqual(link.value.route.value.query, route.value.query);
  });
  const href = computed(() => {
    var _a2;
    return props.to ? (_a2 = link.value) == null ? void 0 : _a2.route.value.href : props.href;
  });
  return {
    isLink,
    isClickable,
    isActive,
    route: (_a = link.value) == null ? void 0 : _a.route,
    navigate: (_b = link.value) == null ? void 0 : _b.navigate,
    href,
    linkProps: reactive({
      href,
      "aria-current": computed(() => isActive.value ? "page" : void 0)
    })
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let inTransition = false;
function useBackButton(router, cb) {
  let popped = false;
  let removeBefore;
  let removeAfter;
  if (IN_BROWSER && (router == null ? void 0 : router.beforeEach)) {
    nextTick(() => {
      window.addEventListener("popstate", onPopstate);
      removeBefore = router.beforeEach((to, from, next) => {
        if (!inTransition) {
          setTimeout(() => popped ? cb(next) : next());
        } else {
          popped ? cb(next) : next();
        }
        inTransition = true;
      });
      removeAfter = router == null ? void 0 : router.afterEach(() => {
        inTransition = false;
      });
    });
    onScopeDispose(() => {
      window.removeEventListener("popstate", onPopstate);
      removeBefore == null ? void 0 : removeBefore();
      removeAfter == null ? void 0 : removeAfter();
    });
  }
  function onPopstate(e) {
    var _a;
    if ((_a = e.state) == null ? void 0 : _a.replaced) return;
    popped = true;
    setTimeout(() => popped = false);
  }
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const StackSymbol = Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject$1(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = shallowRef(Number(zIndex.value));
  useToggleScope(isActive, () => {
    var _a;
    const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : Number(zIndex.value);
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = shallowRef(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _a;
      const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target();
    if (_target === true || !IN_BROWSER) return void 0;
    const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      warn(`Unable to locate target ${_target}`);
      return void 0;
    }
    let container = [...targetElement.children].find((el) => el.matches(".v-overlay-container"));
    if (!container) {
      container = document.createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}
const makeTransitionProps$1 = propsFactory({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    group,
    ...rest
  } = props;
  const {
    component = group ? TransitionGroup : Transition,
    ...customProps
  } = typeof transition === "object" ? transition : {};
  return h(component, mergeProps(typeof transition === "string" ? {
    name: disabled ? "" : transition
  } : customProps, typeof transition === "string" ? {} : Object.fromEntries(Object.entries({
    disabled,
    group
  }).filter((_ref2) => {
    let [_, v] = _ref2;
    return v !== void 0;
  })), rest), slots);
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
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
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1()
}, "VOverlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    keydown: (e) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const vm = getCurrentInstance("VOverlay");
    const root = ref();
    const scrimEl = ref();
    const contentEl = ref();
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled)) model.value = v;
      }
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave: _onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      target,
      targetEl,
      targetRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop,
      contentEl
    });
    const {
      teleportTarget
    } = useTeleport(() => {
      var _a, _b, _c;
      const target2 = props.attach || props.contained;
      if (target2) return target2;
      const rootNode = ((_a = activatorEl == null ? void 0 : activatorEl.value) == null ? void 0 : _a.getRootNode()) || ((_c = (_b = vm.proxy) == null ? void 0 : _b.$el) == null ? void 0 : _c.getRootNode());
      if (rootNode instanceof ShadowRoot) return rootNode;
      return false;
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v) isActive.value = false;
    });
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies(props, {
      isRtl,
      contentEl,
      target,
      isActive
    });
    useScrollStrategies(props, {
      root,
      contentEl,
      targetEl,
      isActive,
      updateLocation
    });
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent) isActive.value = false;
      else animateClick();
    }
    function closeConditional(e) {
      return isActive.value && globalTop.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!props.scrim || e.target === scrimEl.value || e instanceof MouseEvent && e.shadowTarget === scrimEl.value);
    }
    IN_BROWSER && watch(isActive, (val) => {
      if (val) {
        window.addEventListener("keydown", onKeydown);
      } else {
        window.removeEventListener("keydown", onKeydown);
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      if (!IN_BROWSER) return;
      window.removeEventListener("keydown", onKeydown);
    });
    function onKeydown(e) {
      var _a, _b, _c;
      if (e.key === "Escape" && globalTop.value) {
        if (!((_a = contentEl.value) == null ? void 0 : _a.contains(document.activeElement))) {
          emit("keydown", e);
        }
        if (!props.persistent) {
          isActive.value = false;
          if ((_b = contentEl.value) == null ? void 0 : _b.contains(document.activeElement)) {
            (_c = activatorEl.value) == null ? void 0 : _c.focus();
          }
        } else animateClick();
      }
    }
    function onKeydownSelf(e) {
      if (e.key === "Escape" && !globalTop.value) return;
      emit("keydown", e);
    }
    const router = useRouter();
    useToggleScope(() => props.closeOnBack, () => {
      useBackButton(router, (next) => {
        if (globalTop.value && isActive.value) {
          next(false);
          if (!props.persistent) isActive.value = false;
          else animateClick();
        } else {
          next();
        }
      });
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation) return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    function onAfterEnter() {
      emit("afterEnter");
    }
    function onAfterLeave() {
      _onAfterLeave();
      emit("afterLeave");
    }
    useRender(() => {
      var _a;
      return createVNode(Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        targetRef,
        props: mergeProps({
          ref: activatorRef
        }, activatorEvents.value, props.activatorProps)
      }), isMounted.value && hasContent.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value, props.class],
          "style": [stackStyles.value, {
            "--v-overlay-opacity": props.opacity,
            top: convertToUnit(top.value)
          }, props.style],
          "ref": root,
          "onKeydown": onKeydownSelf
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim,
          "ref": scrimEl
        }, scrimEvents.value), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": target.value,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", mergeProps({
              "ref": contentEl,
              "class": ["v-overlay__content", props.contentClass],
              "style": [dimensionStyles.value, contentStyles.value]
            }, contentEvents.value, props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
              isActive
            })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
              handler: onClickOutside,
              closeConditional,
              include: () => [activatorEl.value]
            }]])];
          }
        })])]
      })]);
    });
    return {
      activatorEl,
      scrimEl,
      target,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return Reflect.set(ref2.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor) return descriptor;
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
      for (const ref2 of refs) {
        if (!ref2.value) continue;
        const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0);
        if (descriptor2) return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs) continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2) return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2) queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
const makeVTooltipProps = propsFactory({
  id: String,
  interactive: Boolean,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: false
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid2 = useId();
    const id = computed(() => props.id || `v-tooltip-${uid2}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition) return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", {
          "v-tooltip--interactive": props.interactive
        }, props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return ((_a = slots.default) == null ? void 0 : _a.call(slots, ...args)) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
function useDirectiveComponent(component, props) {
  const concreteComponent = typeof component === "string" ? resolveComponent(component) : component;
  const hook = mountComponent(concreteComponent, props);
  return {
    mounted: hook,
    updated: hook,
    unmounted(el) {
      render$1(null, el);
    }
  };
}
function mountComponent(component, props) {
  return function(el, binding, vnode) {
    var _a, _b, _c;
    const _props = typeof props === "function" ? props(binding) : props;
    const text = ((_a = binding.value) == null ? void 0 : _a.text) ?? binding.value ?? (_props == null ? void 0 : _props.text);
    const value = isObject(binding.value) ? binding.value : {};
    const children = () => text ?? el.textContent;
    const provides = (vnode.ctx === binding.instance.$ ? (_b = findComponentParent(vnode, binding.instance.$)) == null ? void 0 : _b.provides : (_c = vnode.ctx) == null ? void 0 : _c.provides) ?? binding.instance.$.provides;
    const node = h(component, mergeProps(_props, value), children);
    node.appContext = Object.assign(/* @__PURE__ */ Object.create(null), binding.instance.$.appContext, {
      provides
    });
    render$1(node, el);
  };
}
function findComponentParent(vnode, root) {
  const stack = /* @__PURE__ */ new Set();
  const walk = (children) => {
    var _a, _b;
    for (const child of children) {
      if (!child) continue;
      if (child === vnode || child.el && vnode.el && child.el === vnode.el) {
        return true;
      }
      stack.add(child);
      let result2;
      if (child.suspense) {
        result2 = walk([child.ssContent]);
      } else if (Array.isArray(child.children)) {
        result2 = walk(child.children);
      } else if ((_a = child.component) == null ? void 0 : _a.vnode) {
        result2 = walk([(_b = child.component) == null ? void 0 : _b.subTree]);
      }
      if (result2) {
        return result2;
      }
      stack.delete(child);
    }
    return false;
  };
  if (!walk([root.subTree])) {
    consoleError("Could not find original vnode, component will not inherit provides");
    return root;
  }
  const result = Array.from(stack).reverse();
  for (const child of result) {
    if (child.component) {
      return child.component;
    }
  }
  return root;
}
const Tooltip = useDirectiveComponent(VTooltip, (binding) => {
  var _a;
  return {
    activator: "parent",
    location: (_a = binding.arg) == null ? void 0 : _a.replace("-", " "),
    text: typeof binding.value === "boolean" ? void 0 : binding.value
  };
});
const directives = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside,
  Intersect,
  Mutate,
  Resize,
  Ripple,
  Scroll,
  Tooltip,
  Touch
}, Symbol.toStringTag, { value: "Module" }));
const myCustomLightTheme = {
  dark: false,
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
};
const myCustomDarkTheme = {
  dark: false,
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
};
const myCustomHighContrastTheme = {
  dark: false,
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
};
const pjemrTemaBaseClaro = {
  dark: false,
  colors: {
    primary: "#ff912c"
    // Altere essa cor para sua cor prim\u00e1ria desejada
  },
  variables: {
    "theme-on-primary": "#FFFFFF"
    // Cor do texto para bot\u00f5es prim\u00e1rios (branco)
  }
};
const vuetify = createVuetify({
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: mergeThemes(myCustomLightTheme, pjemrTemaBaseClaro),
      dark: myCustomDarkTheme,
      highContrast: myCustomHighContrastTheme
    }
  }
});
function mergeThemes(baseTheme, customTheme) {
  return {
    ...baseTheme,
    ...customTheme,
    colors: {
      ...baseTheme.colors,
      ...customTheme.colors
    },
    variables: {
      ...baseTheme.variables,
      ...customTheme.variables
    }
  };
}
const _hoisted_1$3 = {
  viewBox: "0 0 47 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createStaticVNode('<g fill="#E8592B"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.127 27.804c1.29-1.72-.898-2.695-1.797-2.546-4.911 3.115-7.437 0-8.086-1.946h10.782c1.078 0 1.048-1.997.898-2.995-1.557-6.11-6.838-6.54-9.284-5.99-6.11 1.677-6.539 7.088-5.99 9.584 1.048 5.99 7.338 5.99 7.787 5.99 2.755 0 5.241-1.498 5.69-2.097Zm-2.096-7.188h-7.487c.12-2.635 2.645-3.194 3.893-3.144 2.875-.12 3.594 2.046 3.594 3.144Z"></path><path d="m42.33 25.258-.024-.147-.03.005-.026.016.08.126Zm1.797 2.546.12.09-.12-.09Zm-9.883-4.492v-.15h-.208l.066.197.142-.047Zm11.68-2.995.148-.023v-.007l-.003-.007-.145.037Zm-9.284-5.99-.033-.146-.007.002.04.144Zm-5.99 9.584.148-.026-.002-.007-.146.033Zm7.787 5.99v-.15.15Zm-3.893-9.285-.15-.006-.007.156h.157v-.15Zm7.487 0v.15h.15v-.15h-.15Zm-3.594-3.144-.006.15h.012l-.006-.15Zm3.918 7.934c.194-.032.474-.005.772.088.296.092.593.245.823.448.23.203.386.45.418.734.033.284-.054.63-.36 1.038l.24.18c.338-.452.461-.873.418-1.252-.043-.377-.249-.687-.517-.924a2.599 2.599 0 0 0-.933-.51c-.325-.102-.655-.14-.91-.097l.049.295Zm-8.253-2.047c.333.999 1.148 2.304 2.522 2.96 1.385.66 3.3.643 5.786-.934l-.16-.253c-2.425 1.538-4.229 1.52-5.497.916-1.279-.61-2.051-1.836-2.367-2.784l-.284.095Zm10.924-.197H34.244v.3h10.782v-.3Zm.75-2.823c.074.49.117 1.222.012 1.824-.053.302-.14.557-.267.733a.58.58 0 0 1-.495.266v.3a.88.88 0 0 0 .737-.39c.166-.23.264-.536.32-.858.112-.645.066-1.412-.01-1.92l-.297.045Zm-9.103-5.866c1.198-.269 3.096-.298 4.882.489 1.778.784 3.457 2.381 4.224 5.392l.29-.074c-.79-3.1-2.53-4.771-4.393-5.592-1.856-.818-3.821-.787-5.069-.507l.066.292Zm-5.877 9.405c-.269-1.223-.298-3.167.49-5.007.784-1.833 2.383-3.573 5.394-4.4l-.08-.289c-3.1.851-4.77 2.655-5.59 4.57-.817 1.91-.786 3.918-.506 5.19l.292-.064Zm7.64 5.873c-.218 0-1.878 0-3.61-.737-1.724-.734-3.515-2.195-4.028-5.13l-.295.052c.534 3.057 2.412 4.59 4.206 5.354 1.788.76 3.498.76 3.728.76v-.3Zm5.572-2.037c-.097.129-.319.323-.655.545-.331.22-.763.46-1.266.68-1.009.444-2.298.812-3.65.812v.3c1.404 0 2.735-.382 3.77-.837a8.895 8.895 0 0 0 1.312-.705c.343-.227.6-.444.728-.615l-.24-.18Zm-9.464-6.948h7.487v-.3h-7.487v.3Zm3.899-3.444c-.644-.026-1.618.105-2.45.585-.842.485-1.537 1.328-1.599 2.703l.3.013c.056-1.26.684-2.016 1.448-2.456.772-.446 1.685-.57 2.29-.546l.011-.299Zm3.738 3.294c0-.575-.187-1.427-.753-2.123-.57-.704-1.516-1.233-2.997-1.171l.012.3c1.394-.059 2.246.435 2.753 1.06.513.631.685 1.412.685 1.934h.3Zm2.845 2.546H34.244v.3h10.782v-.3Z"></path></g><path d="M17.921 29.002c.15-.948 1.378-2.845 3.295-2.845 2.396 0 3.144-1.947 3.144-2.845V4.593c.05-.998.899-3.114 3.894-3.593v22.462c-.05 1.946-1.048 5.9-4.642 6.14H18.97c-.45 0-1.049-.15-1.049-.6Z" fill="#666"></path><path d="M24.36 23.312c0 .898-.748 2.845-3.144 2.845-1.917 0-3.145 1.897-3.295 2.845 0 .45.6.6 1.049.6m5.39-6.29V4.593m0 18.719V4.593m0 0c.05-.998.899-3.114 3.894-3.593v22.462c-.05 1.946-1.048 5.9-4.642 6.14m0 0H18.97m4.642 0H18.97" stroke="#666" stroke-width=".299"></path><path d="M9.985 26.606v2.995l5.54 4.792c.7.55 2.546 1.168 4.343-.749l-6.888-7.038H9.985Z" fill="#E8592B" stroke="#E8592B" stroke-width=".299"></path><path d="M4.594 30.5v4.492c1.398.1 4.193-.629 4.193-4.343v-.15H4.594Z" fill="#666" stroke="#666" stroke-width=".299"></path><path d="M4.893 17.621a.3.3 0 0 0-.3.3v2.995a.3.3 0 0 1-.299.3H1.3a.3.3 0 0 0-.299.299v3.294a.3.3 0 0 0 .3.3h2.994a.3.3 0 0 1 .3.3v2.994a.3.3 0 0 0 .3.3h3.294a.3.3 0 0 0 .3-.3v-2.995a.3.3 0 0 1 .299-.3h2.995a.3.3 0 0 0 .3-.299v-3.294a.3.3 0 0 0-.3-.3H8.787a.3.3 0 0 1-.3-.3v-2.994a.3.3 0 0 0-.3-.3H4.894Z" fill="#23B0E6" stroke="#23B0E6" stroke-width=".299"></path><path d="M14.327 24.66h1.648c1.92 0 3.751-.366 4.642-1.198.998-.933.898-1.049 1.198-1.648.3-.599.3-1.946.3-1.946v-4.792c0-4.672-4.842-5.89-7.039-5.84H6.241c-1.078 0-1.348.798-1.348 1.198v5.091h3.594v-2.396h5.84c2.995 0 3.644 2.695 3.594 4.043.12 3.354-1.747 4.193-2.695 4.193h-.899v3.295Z" fill="#666"></path><path d="M6.241 15.375v-4.792c.05-.35.45-1.048 1.647-1.048h7.038c2.147 0 6.44 1.078 6.44 5.391v5.69c-.097.7.037 2.002-.75 2.846m-4.641 1.198h-1.648v-3.295h.899c.948 0 2.815-.838 2.695-4.193.05-1.348-.599-4.043-3.594-4.043h-5.84v2.396H4.893v-5.091c0-.4.27-1.198 1.348-1.198m9.734 15.424c1.92 0 3.751-.366 4.642-1.198m-4.642 1.198c1.98.123 3.801-.296 4.642-1.198M6.24 9.236h8.835m-8.835 0h8.835m0 0c2.197-.05 7.038 1.168 7.038 5.84v4.792s0 1.347-.3 1.946c-.299.6-.2.715-1.197 1.648" stroke="#666" stroke-width=".299"></path>', 8)
  ]));
}
const LogoPJELight = { render };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const icones = {
  "fa-MaterialSymbolsSubdirectoryArrowRightRounded": "_fa-MaterialSymbolsSubdirectoryArrowRightRounded_1crgg_1",
  "fa-solid-money-check-alt": "_fa-solid-money-check-alt_1crgg_11",
  "fluent-FluentMdl2AlignCenter": "_fluent-FluentMdl2AlignCenter_1crgg_20",
  "fluent-FluentMdl2AlignJustify": "_fluent-FluentMdl2AlignJustify_1crgg_30",
  "fluent-FluentMdl2AlignLeft": "_fluent-FluentMdl2AlignLeft_1crgg_40",
  "fluent-FluentMdl2AlignRight": "_fluent-FluentMdl2AlignRight_1crgg_50",
  "fluent-FluentMdl2Color": "_fluent-FluentMdl2Color_1crgg_60",
  "fluent-FluentMdl2ColorSolid": "_fluent-FluentMdl2ColorSolid_1crgg_70",
  "fluent-FluentMdl2DecreaseIndent": "_fluent-FluentMdl2DecreaseIndent_1crgg_80",
  "fluent-FluentMdl2IncreaseIndent": "_fluent-FluentMdl2IncreaseIndent_1crgg_90",
  "fluent-FluentMdl2IndentFirstLine": "_fluent-FluentMdl2IndentFirstLine_1crgg_100",
  "fluent-FluentMdl2LineSpacing": "_fluent-FluentMdl2LineSpacing_1crgg_110",
  "ic-baseline-sos": "_ic-baseline-sos_1crgg_119",
  "mdi-alert-circle-outline": "_mdi-alert-circle-outline_1crgg_128",
  "mdi-check": "_mdi-check_1crgg_138",
  "mdi-close": "_mdi-close_1crgg_148",
  "mdi-content-copy": "_mdi-content-copy_1crgg_158",
  "mdi-delete-alert-cutline": "_mdi-delete-alert-cutline_1crgg_168",
  "mdi-delete": "_mdi-delete_1crgg_168",
  "mdi-dots-vertical": "_mdi-dots-vertical_1crgg_188",
  "mdi-drag": "_mdi-drag_1crgg_198",
  "mdi-emoticon-happy-outline": "_mdi-emoticon-happy-outline_1crgg_208",
  "mdi-emoticon-outline": "_mdi-emoticon-outline_1crgg_218",
  "mdi-emoticon": "_mdi-emoticon_1crgg_208",
  "mdi-export-variant": "_mdi-export-variant_1crgg_238",
  "mdi-export": "_mdi-export_1crgg_238",
  "mdi-file-document-multiple-outline": "_mdi-file-document-multiple-outline_1crgg_258",
  "mdi-IcBaselineDownload": "_mdi-IcBaselineDownload_1crgg_268",
  "mdi-IcBaselineFileUpload": "_mdi-IcBaselineFileUpload_1crgg_278",
  "mdi-IcSharpArrowDownward": "_mdi-IcSharpArrowDownward_1crgg_288",
  "mdi-import": "_mdi-import_1crgg_298",
  "mdi-loading": "_mdi-loading_1crgg_308",
  "mdi-open-in-new": "_mdi-open-in-new_1crgg_315",
  "mdi-outlook": "_mdi-outlook_1crgg_325",
  "mdi-palette": "_mdi-palette_1crgg_335",
  "mdi-pencil": "_mdi-pencil_1crgg_345",
  "mdi-plus-circle-outline": "_mdi-plus-circle-outline_1crgg_355",
  "mdi-rename-box": "_mdi-rename-box_1crgg_365",
  "mdi-square-outline": "_mdi-square-outline_1crgg_375",
  "mdi-telegram": "_mdi-telegram_1crgg_385",
  "mdi-test-tube": "_mdi-test-tube_1crgg_395",
  "nossos-advogado": "_nossos-advogado_1crgg_404",
  "nossos-agenda": "_nossos-agenda_1crgg_414",
  "nossos-arroba": "_nossos-arroba_1crgg_424",
  "nossos-bb": "_nossos-bb_1crgg_434",
  "nossos-bug": "_nossos-bug_1crgg_441",
  "nossos-calculator-solid": "_nossos-calculator-solid_1crgg_451",
  "nossos-calculo": "_nossos-calculo_1crgg_458",
  "nossos-cef": "_nossos-cef_1crgg_465",
  "nossos-copiado": "_nossos-copiado_1crgg_475",
  "nossos-copiar": "_nossos-copiar_1crgg_482",
  "nossos-correios": "_nossos-correios_1crgg_489",
  "nossos-egestao": "_nossos-egestao_1crgg_499",
  "nossos-engrenagem": "_nossos-engrenagem_1crgg_509",
  "nossos-extenso-numero": "_nossos-extenso-numero_1crgg_519",
  "nossos-extenso-valor": "_nossos-extenso-valor_1crgg_529",
  "nossos-gigs": "_nossos-gigs_1crgg_539",
  "nossos-github": "_nossos-github_1crgg_549",
  "nossos-google-agenda": "_nossos-google-agenda_1crgg_559",
  "nossos-google-drive": "_nossos-google-drive_1crgg_566",
  "nossos-google-meet": "_nossos-google-meet_1crgg_573",
  "nossos-google-tradutor": "_nossos-google-tradutor_1crgg_580",
  "nossos-google": "_nossos-google_1crgg_559",
  "nossos-headset": "_nossos-headset_1crgg_594",
  "nossos-html": "_nossos-html_1crgg_604",
  "nossos-i": "_nossos-i_1crgg_614",
  "nossos-inseto": "_nossos-inseto_1crgg_624",
  "nossos-intranet": "_nossos-intranet_1crgg_634",
  "nossos-jf-fabrica-de-calculos": "_nossos-jf-fabrica-de-calculos_1crgg_644",
  "nossos-logoPjeMaisR": "_nossos-logoPjeMaisR_1crgg_651",
  "nossos-lupa-interrogacao": "_nossos-lupa-interrogacao_1crgg_658",
  "nossos-lupa": "_nossos-lupa_1crgg_658",
  "nossos-maiusculas": "_nossos-maiusculas_1crgg_678",
  "nossos-malote": "_nossos-malote_1crgg_688",
  "nossos-martelo": "_nossos-martelo_1crgg_698",
  "nossos-minusculas": "_nossos-minusculas_1crgg_708",
  "nossos-operador-adicao": "_nossos-operador-adicao_1crgg_718",
  "nossos-operador-divisao": "_nossos-operador-divisao_1crgg_728",
  "nossos-operador-multiplicacao": "_nossos-operador-multiplicacao_1crgg_738",
  "nossos-operador-subtracao": "_nossos-operador-subtracao_1crgg_748",
  "nossos-painel": "_nossos-painel_1crgg_758",
  "nossos-pericias": "_nossos-pericias_1crgg_768",
  "nossos-picareta": "_nossos-picareta_1crgg_778",
  "nossos-pje": "_nossos-pje_1crgg_788",
  "nossos-recarregar": "_nossos-recarregar_1crgg_795",
  "nossos-receita-federal": "_nossos-receita-federal_1crgg_805",
  "nossos-renajud": "_nossos-renajud_1crgg_815",
  "nossos-robot": "_nossos-robot_1crgg_825",
  "nossos-script": "_nossos-script_1crgg_835",
  "nossos-sei": "_nossos-sei_1crgg_845",
  "nossos-seta": "_nossos-seta_1crgg_852",
  "nossos-sigeo": "_nossos-sigeo_1crgg_862",
  "nossos-sisbajud": "_nossos-sisbajud_1crgg_872",
  "nossos-t": "_nossos-t_1crgg_879",
  "nossos-tabela": "_nossos-tabela_1crgg_889",
  "nossos-telegram": "_nossos-telegram_1crgg_899",
  "nossos-termos": "_nossos-termos_1crgg_909",
  "nossos-tst": "_nossos-tst_1crgg_919",
  "nossos-whatsapp": "_nossos-whatsapp_1crgg_926",
  "nossos-wikivt": "_nossos-wikivt_1crgg_936",
  "nossos-youtube": "_nossos-youtube_1crgg_943",
  "nossos-zoom": "_nossos-zoom_1crgg_953"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent$1({
  __name: "AppIco",
  props: {
    nome: { default: "mdi-alert-circle-outline" }
  },
  setup(__props) {
    const props = __props;
    const icone = props.nome.split(":").join("-");
    const classe = icones[icone] || icones["mdi-alert-circle-outline"];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(classe))
      }, null, 2);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent$1({
  __name: "AppLinkBtn",
  props: {
    icone: {},
    alt: { default: "" },
    solido: { type: Boolean, default: false },
    tamanho: { default: "30" },
    cor: { default: "" },
    bgColor: { default: "#E6E8EB" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        ref: "link",
        class: normalizeClass(["app-img-btn-container", { solido: _ctx.solido }]),
        style: normalizeStyle({
          width: `${_ctx.tamanho}px`,
          height: `${_ctx.tamanho}px`,
          background: _ctx.bgColor
        })
      }, [
        createVNode(unref(_sfc_main$9), {
          nome: _ctx.icone,
          style: normalizeStyle({ color: _ctx.cor, fontSize: `${_ctx.tamanho}px` }),
          alt: _ctx.alt
        }, null, 8, ["nome", "style", "alt"])
      ], 6);
    };
  }
});
const AppLinkBtn = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ef37f4ed"]]);
const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
const makeTagProps = propsFactory({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag");
const makeVIconProps = propsFactory({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  opacity: [String, Number],
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "VIcon");
const VIcon = genericComponent()({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = ref();
    const {
      themeClasses
    } = useTheme();
    const {
      iconData
    } = useIcon(computed(() => slotIcon.value || props.icon));
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      var _a, _b;
      const slotValue = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (slotValue) {
        slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
      }
      const hasClick = !!(attrs.onClick || attrs.onClickOnce);
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": hasClick,
          "v-icon--disabled": props.disabled,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }, props.class],
        "style": [{
          "--v-icon-opacity": props.opacity
        }, !sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value, props.style],
        "role": hasClick ? "button" : void 0,
        "aria-hidden": !hasClick,
        "tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});
const _hoisted_1$2 = ["name", "value"];
const _hoisted_2$1 = { class: "icon-box" };
const _hoisted_3 = ["src", "width", "alt"];
const _hoisted_4 = { class: "label" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent$1({
  __name: "AppRadio",
  props: {
    modelValue: { default: void 0 },
    titulo: { default: "Op\u00e7\u00f5es" },
    opcoes: { default: () => [] }
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const valor = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:model-value", val)
    });
    const isActive = (opcao) => opcao.valor === props.modelValue;
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.opcoes, (opcao, index) => {
        return openBlock(), createElementBlock("div", { key: index }, [
          createElementVNode("label", {
            class: normalizeClass({ active: isActive(opcao) }),
            style: normalizeStyle({ width: opcao.icon ? "60px" : opcao.width, textAlign: "center" })
          }, [
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valor.value = $event),
              type: "radio",
              name: _ctx.titulo,
              value: opcao.valor,
              class: "hide"
            }, null, 8, _hoisted_1$2), [
              [vModelRadio, valor.value]
            ]),
            withDirectives(createElementVNode("div", _hoisted_2$1, [
              createVNode(VIcon, {
                icon: opcao.icon
              }, null, 8, ["icon"])
            ], 512), [
              [vShow, opcao.icon]
            ]),
            withDirectives(createElementVNode("img", {
              src: opcao.imagemUrl,
              width: opcao.width,
              alt: opcao.rotulo
            }, null, 8, _hoisted_3), [
              [vShow, opcao.imagemUrl]
            ]),
            createElementVNode("div", _hoisted_4, toDisplayString(opcao.rotulo), 1)
          ], 6)
        ]);
      }), 128);
    };
  }
});
const AppRadio = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-963f6ba0"]]);
const _hoisted_1$1 = ["width", "height"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent$1({
  __name: "AppSpinner",
  props: {
    tamanho: { default: 32 },
    overlay: { type: Boolean, default: false },
    mono: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["app-spinner-container", { overlay: _ctx.overlay }])
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "spin",
          width: `${_ctx.tamanho}px`,
          height: `${_ctx.tamanho}px`,
          viewBox: "0 0 66 66",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          createElementVNode("circle", {
            class: normalizeClass(["dash", _ctx.mono ? "mono" : "colorido"]),
            fill: "none",
            "stroke-width": "6",
            "stroke-linecap": "round",
            cx: "33",
            cy: "33",
            r: "30"
          }, null, 2)
        ], 8, _hoisted_1$1))
      ], 2);
    };
  }
});
const AppSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-25a56a4c"]]);
var mdiAlertOctagon = "M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z";
var mdiApplicationCogOutline = "M21.7 18.6V17.6L22.8 16.8C22.9 16.7 23 16.6 22.9 16.5L21.9 14.8C21.9 14.7 21.7 14.7 21.6 14.7L20.4 15.2C20.1 15 19.8 14.8 19.5 14.7L19.3 13.4C19.3 13.3 19.2 13.2 19.1 13.2H17.1C16.9 13.2 16.8 13.3 16.8 13.4L16.6 14.7C16.3 14.9 16.1 15 15.8 15.2L14.6 14.7C14.5 14.7 14.4 14.7 14.3 14.8L13.3 16.5C13.3 16.6 13.3 16.7 13.4 16.8L14.5 17.6V18.6L13.4 19.4C13.3 19.5 13.2 19.6 13.3 19.7L14.3 21.4C14.4 21.5 14.5 21.5 14.6 21.5L15.8 21C16 21.2 16.3 21.4 16.6 21.5L16.8 22.8C16.9 22.9 17 23 17.1 23H19.1C19.2 23 19.3 22.9 19.3 22.8L19.5 21.5C19.8 21.3 20 21.2 20.3 21L21.5 21.4C21.6 21.4 21.7 21.4 21.8 21.3L22.8 19.6C22.9 19.5 22.9 19.4 22.8 19.4L21.7 18.6M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5M12.3 22H3C1.9 22 1 21.1 1 20V4C1 2.9 1.9 2 3 2H21C22.1 2 23 2.9 23 4V13.1C22.4 12.5 21.7 12 21 11.7V6H3V20H11.3C11.5 20.7 11.8 21.4 12.3 22Z";
var mdiApplicationSettingsOutline = "M21 0H3C1.9 0 1 .9 1 2V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V2C23 .9 22.1 0 21 0M21 18H3V4H21V18M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22";
var mdiBrushVariant = "M8 3C5.79 3 4 4.79 4 7V14C4 15.1 4.9 16 6 16H9V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V16H18C19.1 16 20 15.1 20 14V3H8M8 5H12V7H14V5H15V9H17V5H18V10H6V7C6 5.9 6.9 5 8 5M6 14V12H18V14H6Z";
var mdiCardAccountDetails = "M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z";
var mdiCellphoneKey = "M7 1C5.9 1 5 1.9 5 3V7H7V4H17V20H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1H7M6 9C4.3 9 3 10.3 3 12S4.3 15 6 15C7.3 15 8.4 14.2 8.8 13H11V15H13V13H15V11H8.8C8.4 9.8 7.3 9 6 9M6 11C6.6 11 7 11.4 7 12S6.6 13 6 13 5 12.6 5 12 5.4 11 6 11Z";
var mdiCog = "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
var mdiCommentOffOutline = "M7.2 4L5.2 2H20C21.11 2 22 2.9 22 4V16C22 16.76 21.57 17.41 20.95 17.75L19.2 16H20V4H7.2M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 3.97 2 3.93 2 3.9L1.11 3L2.39 1.73L22.11 21.46M14.11 16L4 5.89V16H10V19.08L13.08 16H14.11Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiCursorDefaultClick = "M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10";
var mdiDomain = "M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z";
var mdiEraser = "M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z";
var mdiExport = "M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z";
var mdiFileDocumentOutline = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z";
var mdiFileOutline = "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z";
var mdiFilter = "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z";
var mdiFilterOutline = "M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z";
var mdiFormatListChecks = "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z";
var mdiGavel = "M2.3,20.28L11.9,10.68L10.5,9.26L9.78,9.97C9.39,10.36 8.76,10.36 8.37,9.97L7.66,9.26C7.27,8.87 7.27,8.24 7.66,7.85L13.32,2.19C13.71,1.8 14.34,1.8 14.73,2.19L15.44,2.9C15.83,3.29 15.83,3.92 15.44,4.31L14.73,5L16.15,6.43C16.54,6.04 17.17,6.04 17.56,6.43C17.95,6.82 17.95,7.46 17.56,7.85L18.97,9.26L19.68,8.55C20.07,8.16 20.71,8.16 21.1,8.55L21.8,9.26C22.19,9.65 22.19,10.29 21.8,10.68L16.15,16.33C15.76,16.72 15.12,16.72 14.73,16.33L14.03,15.63C13.63,15.24 13.63,14.6 14.03,14.21L14.73,13.5L13.32,12.09L3.71,21.7C3.32,22.09 2.69,22.09 2.3,21.7C1.91,21.31 1.91,20.67 2.3,20.28M20,19A2,2 0 0,1 22,21V22H12V21A2,2 0 0,1 14,19H20Z";
var mdiImport = "M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z";
var mdiLaptop = "M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z";
var mdiLaptopOff = "M1,4.27L2.28,3L20,20.72L18.73,22L16.73,20H0V18H4C2.89,18 2,17.1 2,16V6C2,5.78 2.04,5.57 2.1,5.37L1,4.27M4,16H12.73L4,7.27V16M20,16V6H7.82L5.82,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H21.82L17.82,16H20Z";
var mdiMagnify = "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
var mdiTextBoxOutline = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z";
var mdiYoutube = "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
const makeTransitionProps = propsFactory({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
  return genericComponent()({
    name,
    props: makeTransitionProps({
      mode,
      origin
    }),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          if (props.origin) {
            el.style.transformOrigin = props.origin;
          }
        },
        onLeave(el) {
          if (props.leaveAbsolute) {
            const {
              offsetTop,
              offsetLeft,
              offsetWidth,
              offsetHeight
            } = el;
            el._transitionInitialStyles = {
              position: el.style.position,
              top: el.style.top,
              left: el.style.left,
              width: el.style.width,
              height: el.style.height
            };
            el.style.position = "absolute";
            el.style.top = `${offsetTop}px`;
            el.style.left = `${offsetLeft}px`;
            el.style.width = `${offsetWidth}px`;
            el.style.height = `${offsetHeight}px`;
          }
          if (props.hideOnLeave) {
            el.style.setProperty("display", "none", "important");
          }
        },
        onAfterLeave(el) {
          if (props.leaveAbsolute && (el == null ? void 0 : el._transitionInitialStyles)) {
            const {
              position,
              top,
              left,
              width,
              height
            } = el._transitionInitialStyles;
            delete el._transitionInitialStyles;
            el.style.position = position || "";
            el.style.top = top || "";
            el.style.left = left || "";
            el.style.width = width || "";
            el.style.height = height || "";
          }
        }
      };
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          ...props.group ? void 0 : {
            mode: props.mode
          },
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return genericComponent()({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      const tag = props.group ? TransitionGroup : Transition;
      return () => {
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function ExpandTransitionGenerator() {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    onEnter(el) {
      const initialStyle = el._initialStyle;
      if (!initialStyle) return;
      el.style.setProperty("transition", "none", "important");
      el.style.overflow = "hidden";
      const offset = `${el[offsetProperty]}px`;
      el.style[sizeProperty] = "0";
      void el.offsetHeight;
      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el) {
      el._initialStyle = {
        transition: "",
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = "hidden";
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => el.style[sizeProperty] = "0");
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    if (!el._initialStyle) return;
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null) el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}
const makeVDialogTransitionProps = propsFactory({
  target: [Object, Array]
}, "v-dialog-transition");
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = getTargetBox(target);
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
createCssTransition("fab-transition", "center center", "out-in");
createCssTransition("dialog-bottom-transition");
createCssTransition("dialog-top-transition");
const VFadeTransition = createCssTransition("fade-transition");
const VScaleTransition = createCssTransition("scale-transition");
createCssTransition("scroll-x-transition");
createCssTransition("scroll-x-reverse-transition");
createCssTransition("scroll-y-transition");
createCssTransition("scroll-y-reverse-transition");
createCssTransition("slide-x-transition");
createCssTransition("slide-x-reverse-transition");
const VSlideYTransition = createCssTransition("slide-y-transition");
createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator());
const VExpandXTransition = createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
const makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
const VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name,
      color
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    function onKeydown(e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      e.stopPropagation();
      callEvent(listener, new PointerEvent("click", e));
    }
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener,
      "onKeydown": onKeydown,
      "color": color
    }, null);
  }
  return {
    InputIcon
  };
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps$1({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style]
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const FormKey = Symbol.for("vuetify:form");
function useForm(props) {
  const form = inject$1(FormKey, null);
  return {
    ...form,
    isReadonly: computed(() => !!((props == null ? void 0 : props.readonly) ?? (form == null ? void 0 : form.isReadonly.value))),
    isDisabled: computed(() => !!((props == null ? void 0 : props.disabled) ?? (form == null ? void 0 : form.isDisabled.value)))
  };
}
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    // type: Array as PropType<readonly (ValidationRule | ValidationAlias)[]>,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : useId();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm(props);
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const errorMessages = computed(() => {
    var _a;
    return ((_a = props.errorMessages) == null ? void 0 : _a.length) ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, Number(props.maxErrors))) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    var _a;
    let value = (props.validateOn ?? ((_a = form.validateOn) == null ? void 0 : _a.value)) || "input";
    if (value === "lazy") value = "input lazy";
    if (value === "eager") value = "input eager";
    const set = new Set((value == null ? void 0 : value.split(" ")) ?? []);
    return {
      input: set.has("input"),
      blur: set.has("blur") || set.has("input") || set.has("invalid-input"),
      invalidInput: set.has("invalid-input"),
      lazy: set.has("lazy"),
      eager: set.has("eager")
    };
  });
  const isValid2 = computed(() => {
    var _a;
    if (props.error || ((_a = props.errorMessages) == null ? void 0 : _a.length)) return false;
    if (!props.rules.length) return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid2.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: form.isDisabled.value,
      [`${name}--readonly`]: form.isReadonly.value
    };
  });
  const vm = getCurrentInstance("validation");
  const uid2 = computed(() => props.name ?? unref(id));
  onBeforeMount(() => {
    var _a;
    (_a = form.register) == null ? void 0 : _a.call(form, {
      id: uid2.value,
      vm,
      validate,
      reset,
      resetValidation
    });
  });
  onBeforeUnmount(() => {
    var _a;
    (_a = form.unregister) == null ? void 0 : _a.call(form, uid2.value);
  });
  onMounted(async () => {
    var _a;
    if (!validateOn.value.lazy) {
      await validate(!validateOn.value.eager);
    }
    (_a = form.update) == null ? void 0 : _a.call(form, uid2.value, isValid2.value, errorMessages.value);
  });
  useToggleScope(() => validateOn.value.input || validateOn.value.invalidInput && isValid2.value === false, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val) validate();
    });
  });
  watch([isValid2, errorMessages], () => {
    var _a;
    (_a = form.update) == null ? void 0 : _a.call(form, uid2.value, isValid2.value, errorMessages.value);
  });
  async function reset() {
    model.value = null;
    await nextTick();
    await resetValidation();
  }
  async function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      await validate(!validateOn.value.eager);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (props.disabled || props.readonly) {
      internalErrorMessages.value = [];
      isValidating.value = false;
      return internalErrorMessages.value;
    }
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= Number(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled: form.isDisabled,
    isReadonly: form.isReadonly,
    isPristine,
    isValid: isValid2,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: true
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...pick(makeDimensionProps(), ["maxWidth", "minWidth", "width"]),
  ...makeThemeProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid2 = useId();
    const id = computed(() => props.id || `input-${uid2}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid: isValid2,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid: isValid2,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const color = computed(() => {
      return props.error || props.disabled ? void 0 : props.focused ? props.color : props.baseColor;
    });
    const iconColor = computed(() => {
      if (!props.iconColor) return void 0;
      return props.iconColor === true ? color.value : props.iconColor;
    });
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix,
          "v-input--focused": props.focused,
          "v-input--glow": props.glow,
          "v-input--hide-spin-buttons": props.hideSpinButtons
        }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": [dimensionStyles.value, props.style]
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend",
        "color": iconColor.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append",
        "color": iconColor.value
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "id": messagesId.value,
        "class": "v-input__details",
        "role": "alert",
        "aria-live": "polite"
      }, [createVNode(VMessages, {
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid: isValid2,
      errorMessages
    };
  }
});
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    }, options);
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue) observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  onClick: EventProp(),
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": !!props.onClick
        }, props.class],
        "style": props.style,
        "onClick": props.onClick
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, "modelValue");
    const uid2 = useId();
    const id = computed(() => props.id || `v-selection-control-group-${uid2}`);
    const name = computed(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        density: toRef(props, "density"),
        error: toRef(props, "error"),
        inline: toRef(props, "inline"),
        modelValue,
        multiple: computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(props, "falseIcon"),
        trueIcon: toRef(props, "trueIcon"),
        readonly: toRef(props, "readonly"),
        ripple: toRef(props, "ripple"),
        type: toRef(props, "type"),
        valueComparator: toRef(props, "valueComparator")
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-selection-control-group", {
          "v-selection-control-group--inline": props.inline
        }, props.class],
        "style": props.style,
        "role": props.type === "radio" ? "radiogroup" : void 0
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVSelectionControlProps = propsFactory({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject$1(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(computed(() => {
    if (props.error || props.disabled) return void 0;
    return model.value ? props.color : props.baseColor;
  }));
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(computed(() => {
    return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
  }));
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
const VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid2 = useId();
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    const id = computed(() => props.id || `input-${uid2}`);
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    group == null ? void 0 : group.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      if (!isInteractive.value) return;
      isFocused.value = true;
      if (matchesSelector(e.target, ":focus-visible") !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onClickLabel(e) {
      e.stopPropagation();
    }
    function onInput(e) {
      if (!isInteractive.value) {
        if (input.value) {
          input.value.checked = model.value;
        }
        return;
      }
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      var _a, _b;
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!props.disabled,
        "aria-label": props.label,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createVNode("div", {
        "class": ["v-selection-control__wrapper", textColorClasses.value],
        "style": textColorStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createVNode("div", {
        "class": ["v-selection-control__input"]
      }, [((_b = slots.input) == null ? void 0 : _b.call(slots, {
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      })) ?? createVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[resolveDirective("ripple"), props.ripple && [!props.disabled && !props.readonly, null, ["center", "circle"]]]])]), label && createVNode(VLabel, {
        "for": id.value,
        "onClick": onClickLabel
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
const oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location) return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset2(side2) {
      return offset ? offset(side2) : 0;
    }
    const styles = {};
    if (side !== "center") {
      if (opposite) styles[oppositeMap[side]] = `calc(100% - ${getOffset2(side)}px)`;
      else styles[side] = 0;
    }
    if (align !== "center") {
      if (opposite) styles[oppositeMap[align]] = `calc(100% - ${getOffset2(align)}px)`;
      else styles[align] = 0;
    } else {
      if (side === "center") styles.top = styles.left = "50%";
      else {
        styles[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const tile = isRef(props) ? props.value : props.tile;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    } else if (tile || rounded === false) {
      classes.push("rounded-0");
    }
    return classes;
  });
  return {
    roundedClasses
  };
}
const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: bufferColorClasses,
      backgroundColorStyles: bufferColorStyles
    } = useBackgroundColor(computed(() => props.bufferColor || props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseFloat(props.max));
    const height = computed(() => parseFloat(props.height));
    const normalizedBuffer = computed(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
    const normalizedValue = computed(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const isForcedColorsModeActive = IN_BROWSER && ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(forced-colors: active)").matches);
    function handleClick(e) {
      if (!intersectionRef.value) return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...props.absolute ? locationStyles.value : {}
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : Math.min(parseFloat(progress.value), max.value),
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: parseFloat(props.bufferOpacity),
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", !isForcedColorsModeActive ? backgroundColorClasses.value : void 0],
        "style": [backgroundColorStyles.value, {
          opacity: parseFloat(props.bgOpacity),
          width: props.stream ? 0 : void 0
        }]
      }, null), createVNode("div", {
        "class": ["v-progress-linear__buffer", !isForcedColorsModeActive ? bufferColorClasses.value : void 0],
        "style": [bufferColorStyles.value, {
          opacity: parseFloat(props.bufferOpacity),
          width: convertToUnit(normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", !isForcedColorsModeActive ? barColorClasses.value : void 0],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, !isForcedColorsModeActive ? barColorClasses.value : void 0],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "absolute": props.absolute,
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const isForcedColorsModeActive = IN_BROWSER && window.matchMedia("(forced-colors: active)").matches;
    const loaderColor = computed(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid2 = useId();
    const id = computed(() => props.id || `switch-${uid2}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      var _a, _b;
      e.stopPropagation();
      e.preventDefault();
      (_b = (_a = control.value) == null ? void 0 : _a.input) == null ? void 0 : _b.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-switch", {
          "v-switch--flat": props.flat
        }, {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid: isValid2
          } = _ref2;
          const slotProps = {
            model,
            isValid: isValid2
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createVNode("div", {
                "class": ["v-switch__track", !isForcedColorsModeActive ? backgroundColorClasses.value : void 0],
                "style": backgroundColorStyles.value,
                "onClick": onTrackClick
              }, [slots["track-true"] && createVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createVNode(Fragment, null, [inputNode, createVNode("div", {
                "class": ["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset || isForcedColorsModeActive ? void 0 : backgroundColorClasses.value],
                "style": props.inset ? void 0 : backgroundColorStyles.value
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid2.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return {};
  }
});
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === "") {
      classes.push(`${name}--border`);
    } else if (typeof border === "string" || border === 0) {
      for (const value of String(border).split(" ")) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = computed(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null) return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}
const allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createVNode(Fragment, null, [isClickable && createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v) => allowedVariants.includes(v)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = computed(() => {
    const {
      variant
    } = unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(computed(() => {
    const {
      variant,
      color
    } = unref(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
const makeVBtnGroupProps = propsFactory({
  baseColor: String,
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        baseColor: toRef(props, "baseColor"),
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = useId();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject$1(injectKey, null);
  if (!group) {
    if (!required) return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  onBeforeUnmount(() => {
    group.unregister(id);
  });
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const isFirst = computed(() => {
    return group.items.value[0].id === id;
  });
  const isLast = computed(() => {
    return group.items.value[group.items.value.length - 1].id === id;
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  }, {
    flush: "sync"
  });
  return {
    id,
    isSelected,
    isFirst,
    isLast,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  let isUnmounted = false;
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null) return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index = children.indexOf(vm);
    if (unref(unwrapped.value) == null) {
      unwrapped.value = index;
      unwrapped.useIndexAsValue = true;
    }
    if (index > -1) {
      items.splice(index, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    if (isUnmounted) return;
    forceMandatoryValue();
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  onMounted(() => {
    forceMandatoryValue();
  });
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  onUpdated(() => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].useIndexAsValue) {
        items[i].value = i;
      }
    }
  });
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled)) return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index = internalValue.findIndex((v) => v === id);
      const isSelected = ~index;
      value = value ?? !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1) return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max) return;
      if (index < 0 && value) internalValue.push(id);
      else if (index >= 0 && !value) internalValue.splice(index, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected) return;
      selected.value = value ?? !isSelected ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple) consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled) return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length) return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const btnGroupProps = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v) => positionValues.includes(v)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = computed(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}
function useSelectLink(link, select) {
  watch(() => {
    var _a;
    return (_a = link.isActive) == null ? void 0 : _a.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}
const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
const VBtn = genericComponent()({
  name: "VBtn",
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const color = computed(() => isActive.value ? props.activeColor ?? props.color : props.color);
    const variantProps = computed(() => {
      var _a, _b;
      const showColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return {
        color: showColor ? color.value ?? props.baseColor : props.baseColor,
        variant: props.variant
      };
    });
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0 || typeof props.value === "symbol") return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      var _a;
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank")) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      return withDirectives(createVNode(Tag, mergeProps({
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--readonly": props.readonly,
          "v-btn--slim": props.slim,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "aria-busy": props.loading ? true : void 0,
        "disabled": isDisabled.value || void 0,
        "tabindex": props.loading || props.readonly ? -1 : void 0,
        "onClick": onClick,
        "value": valueAttr.value
      }, link.linkProps), {
        default: () => {
          var _a;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) ?? toDisplayString(props.text)];
            }
          })]), !props.icon && hasAppend && createVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [((_a = slots.loader) == null ? void 0 : _a.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "width": "2"
          }, null)])];
        }
      }), [[Ripple, !isDisabled.value && props.ripple, "", {
        center: !!props.icon
      }]]);
    });
    return {
      group
    };
  }
});
const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, "VApp");
const VApp = genericComponent()({
  name: "VApp",
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": ["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class],
        "style": [props.style]
      }, [createVNode("div", {
        "class": "v-application__wrap"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + "%"
      } : void 0;
    })
  };
}
const makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VResponsive");
const VResponsive = genericComponent()({
  name: "VResponsive",
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-responsive", {
          "v-responsive--inline": props.inline
        }, props.class],
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "class": "v-responsive__sizer",
        "style": aspectStyles.value
      }, null), (_a = slots.additional) == null ? void 0 : _a.call(slots), slots.default && createVNode("div", {
        "class": ["v-responsive__content", props.contentClass]
      }, [slots.default()])]);
    });
    return {};
  }
});
const makeVImgProps = propsFactory({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeTransitionProps$1()
}, "VImg");
const VImg = genericComponent()({
  name: "VImg",
  directives: {
    intersect: Intersect
  },
  props: makeVImgProps(),
  emits: {
    loadstart: (value) => true,
    load: (value) => true,
    error: (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const vm = getCurrentInstance("VImg");
    const currentSrc = shallowRef("");
    const image = ref();
    const state = shallowRef(props.eager ? "loading" : "idle");
    const naturalWidth = shallowRef();
    const naturalHeight = shallowRef();
    const normalisedSrc = computed(() => {
      return props.src && typeof props.src === "object" ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    watch(() => props.src, () => {
      init(state.value !== "idle");
    });
    watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });
    onBeforeMount(() => init());
    function init(isIntersecting) {
      if (props.eager && isIntersecting) return;
      if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager) return;
      state.value = "loading";
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src) return;
      nextTick(() => {
        var _a;
        emit("loadstart", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
        setTimeout(() => {
          var _a2;
          if (vm.isUnmounted) return;
          if ((_a2 = image.value) == null ? void 0 : _a2.complete) {
            if (!image.value.naturalWidth) {
              onError();
            }
            if (state.value === "error") return;
            if (!aspectRatio.value) pollForSize(image.value, null);
            if (state.value === "loading") onLoad();
          } else {
            if (!aspectRatio.value) pollForSize(image.value);
            getSrc();
          }
        });
      });
    }
    function onLoad() {
      var _a;
      if (vm.isUnmounted) return;
      getSrc();
      pollForSize(image.value);
      state.value = "loaded";
      emit("load", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function onError() {
      var _a;
      if (vm.isUnmounted) return;
      state.value = "error";
      emit("error", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img) currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    onBeforeUnmount(() => {
      clearTimeout(timer);
    });
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        if (vm.isUnmounted) return;
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === "loading" && timeout != null) {
          timer = window.setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = computed(() => ({
      "v-img__img--cover": props.cover,
      "v-img__img--contain": !props.cover
    }));
    const __image = () => {
      var _a;
      if (!normalisedSrc.value.src || state.value === "idle") return null;
      const img = createVNode("img", {
        "class": ["v-img__img", containClasses.value],
        "style": {
          objectPosition: props.position
        },
        "crossorigin": props.crossorigin,
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": props.alt,
        "referrerpolicy": props.referrerpolicy,
        "draggable": props.draggable,
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = (_a = slots.sources) == null ? void 0 : _a.call(slots);
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [withDirectives(sources ? createVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vShow, state.value === "loaded"]])]
      });
    };
    const __preloadImage = () => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && createVNode("img", {
        "class": ["v-img__img", "v-img__img--preload", containClasses.value],
        "style": {
          objectPosition: props.position
        },
        "crossorigin": props.crossorigin,
        "src": normalisedSrc.value.lazySrc,
        "alt": props.alt,
        "referrerpolicy": props.referrerpolicy,
        "draggable": props.draggable
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder) return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && createVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error) return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === "error" && createVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient) return null;
      return createVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = shallowRef(false);
    {
      const stop = watch(aspectRatio, (val) => {
        if (val) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => {
      const responsiveProps = VResponsive.filterProps(props);
      return withDirectives(createVNode(VResponsive, mergeProps({
        "class": ["v-img", {
          "v-img--absolute": props.absolute,
          "v-img--booting": !isBooted.value
        }, backgroundColorClasses.value, roundedClasses.value, props.class],
        "style": [{
          width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
        }, backgroundColorStyles.value, props.style]
      }, responsiveProps, {
        "aspectRatio": aspectRatio.value,
        "aria-label": props.alt,
        "role": props.alt ? "img" : void 0
      }), {
        additional: () => createVNode(Fragment, null, [createVNode(__image, null, null), createVNode(__preloadImage, null, null), createVNode(__gradient, null, null), createVNode(__placeholder, null, null), createVNode(__error, null, null)]),
        default: slots.default
      }), [[resolveDirective("intersect"), {
        handler: init,
        options: props.options
      }, null, {
        once: true
      }]]);
    });
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});
function useSsrBoot() {
  const isBooted = shallowRef(false);
  onMounted(() => {
    window.requestAnimationFrame(() => {
      isBooted.value = true;
    });
  });
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => [!slots.default ? props.image ? createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : props.text : createVNode(VDefaultsProvider, {
        "key": "content-defaults",
        "defaults": {
          VImg: {
            cover: true,
            src: props.image
          },
          VIcon: {
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.default()]
      }), genOverlays(false, "v-avatar")]
    }));
    return {};
  }
});
function calculateUpdatedTarget(_ref) {
  let {
    selectedElement,
    containerElement,
    isRtl,
    isHorizontal
  } = _ref;
  const containerSize = getOffsetSize(isHorizontal, containerElement);
  const scrollPosition = getScrollPosition(isHorizontal, isRtl, containerElement);
  const childrenSize = getOffsetSize(isHorizontal, selectedElement);
  const childrenStartPosition = getOffsetPosition(isHorizontal, selectedElement);
  const additionalOffset = childrenSize * 0.4;
  if (scrollPosition > childrenStartPosition) {
    return childrenStartPosition - additionalOffset;
  } else if (scrollPosition + containerSize < childrenStartPosition + childrenSize) {
    return childrenStartPosition - containerSize + childrenSize + additionalOffset;
  }
  return scrollPosition;
}
function calculateCenteredTarget(_ref2) {
  let {
    selectedElement,
    containerElement,
    isHorizontal
  } = _ref2;
  const containerOffsetSize = getOffsetSize(isHorizontal, containerElement);
  const childrenOffsetPosition = getOffsetPosition(isHorizontal, selectedElement);
  const childrenOffsetSize = getOffsetSize(isHorizontal, selectedElement);
  return childrenOffsetPosition - containerOffsetSize / 2 + childrenOffsetSize / 2;
}
function getScrollSize(isHorizontal, element) {
  const key = isHorizontal ? "scrollWidth" : "scrollHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getClientSize(isHorizontal, element) {
  const key = isHorizontal ? "clientWidth" : "clientHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getScrollPosition(isHorizontal, rtl, element) {
  if (!element) {
    return 0;
  }
  const {
    scrollLeft,
    offsetWidth,
    scrollWidth
  } = element;
  if (isHorizontal) {
    return rtl ? scrollWidth - offsetWidth + scrollLeft : scrollLeft;
  }
  return element.scrollTop;
}
function getOffsetSize(isHorizontal, element) {
  const key = isHorizontal ? "offsetWidth" : "offsetHeight";
  return (element == null ? void 0 : element[key]) || 0;
}
function getOffsetPosition(isHorizontal, element) {
  const key = isHorizontal ? "offsetLeft" : "offsetTop";
  return (element == null ? void 0 : element[key]) || 0;
}
const VSlideGroupSymbol = Symbol.for("vuetify:v-slide-group");
const makeVSlideGroupProps = propsFactory({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: VSlideGroupSymbol
  },
  nextIcon: {
    type: IconValue,
    default: "$next"
  },
  prevIcon: {
    type: IconValue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || ["always", "desktop", "mobile"].includes(v)
  },
  ...makeComponentProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeTagProps(),
  ...makeGroupProps({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup");
const VSlideGroup = genericComponent()({
  name: "VSlideGroup",
  props: makeVSlideGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const group = useGroup(props, props.symbol);
    const isOverflowing = shallowRef(false);
    const scrollOffset = shallowRef(0);
    const containerSize = shallowRef(0);
    const contentSize = shallowRef(0);
    const isHorizontal = computed(() => props.direction === "horizontal");
    const {
      resizeRef: containerRef,
      contentRect: containerRect
    } = useResizeObserver();
    const {
      resizeRef: contentRef,
      contentRect
    } = useResizeObserver();
    const goTo = useGoTo();
    const goToOptions = computed(() => {
      return {
        container: containerRef.el,
        duration: 200,
        easing: "easeOutQuart"
      };
    });
    const firstSelectedIndex = computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[0]);
    });
    const lastSelectedIndex = computed(() => {
      if (!group.selected.value.length) return -1;
      return group.items.value.findIndex((item) => item.id === group.selected.value[group.selected.value.length - 1]);
    });
    if (IN_BROWSER) {
      let frame = -1;
      watch(() => [group.selected.value, containerRect.value, contentRect.value, isHorizontal.value], () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          if (containerRect.value && contentRect.value) {
            const sizeProperty = isHorizontal.value ? "width" : "height";
            containerSize.value = containerRect.value[sizeProperty];
            contentSize.value = contentRect.value[sizeProperty];
            isOverflowing.value = containerSize.value + 1 < contentSize.value;
          }
          if (firstSelectedIndex.value >= 0 && contentRef.el) {
            const selectedElement = contentRef.el.children[lastSelectedIndex.value];
            scrollToChildren(selectedElement, props.centerActive);
          }
        });
      });
    }
    const isFocused = shallowRef(false);
    function scrollToChildren(children, center) {
      let target = 0;
      if (center) {
        target = calculateCenteredTarget({
          containerElement: containerRef.el,
          isHorizontal: isHorizontal.value,
          selectedElement: children
        });
      } else {
        target = calculateUpdatedTarget({
          containerElement: containerRef.el,
          isHorizontal: isHorizontal.value,
          isRtl: isRtl.value,
          selectedElement: children
        });
      }
      scrollToPosition(target);
    }
    function scrollToPosition(newPosition) {
      if (!IN_BROWSER || !containerRef.el) return;
      const offsetSize = getOffsetSize(isHorizontal.value, containerRef.el);
      const scrollPosition = getScrollPosition(isHorizontal.value, isRtl.value, containerRef.el);
      const scrollSize = getScrollSize(isHorizontal.value, containerRef.el);
      if (scrollSize <= offsetSize || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(newPosition - scrollPosition) < 16) return;
      if (isHorizontal.value && isRtl.value && containerRef.el) {
        const {
          scrollWidth,
          offsetWidth: containerWidth
        } = containerRef.el;
        newPosition = scrollWidth - containerWidth - newPosition;
      }
      if (isHorizontal.value) {
        goTo.horizontal(newPosition, goToOptions.value);
      } else {
        goTo(newPosition, goToOptions.value);
      }
    }
    function onScroll(e) {
      const {
        scrollTop,
        scrollLeft
      } = e.target;
      scrollOffset.value = isHorizontal.value ? scrollLeft : scrollTop;
    }
    function onFocusin(e) {
      isFocused.value = true;
      if (!isOverflowing.value || !contentRef.el) return;
      for (const el of e.composedPath()) {
        for (const item of contentRef.el.children) {
          if (item === el) {
            scrollToChildren(item);
            return;
          }
        }
      }
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    let ignoreFocusEvent = false;
    function onFocus(e) {
      var _a;
      if (!ignoreFocusEvent && !isFocused.value && !(e.relatedTarget && ((_a = contentRef.el) == null ? void 0 : _a.contains(e.relatedTarget)))) focus();
      ignoreFocusEvent = false;
    }
    function onFocusAffixes() {
      ignoreFocusEvent = true;
    }
    function onKeydown(e) {
      if (!contentRef.el) return;
      function toFocus(location) {
        e.preventDefault();
        focus(location);
      }
      if (isHorizontal.value) {
        if (e.key === "ArrowRight") {
          toFocus(isRtl.value ? "prev" : "next");
        } else if (e.key === "ArrowLeft") {
          toFocus(isRtl.value ? "next" : "prev");
        }
      } else {
        if (e.key === "ArrowDown") {
          toFocus("next");
        } else if (e.key === "ArrowUp") {
          toFocus("prev");
        }
      }
      if (e.key === "Home") {
        toFocus("first");
      } else if (e.key === "End") {
        toFocus("last");
      }
    }
    function getSiblingElement(el, location) {
      if (!el) return void 0;
      let sibling = el;
      do {
        sibling = sibling == null ? void 0 : sibling[location === "next" ? "nextElementSibling" : "previousElementSibling"];
      } while (sibling == null ? void 0 : sibling.hasAttribute("disabled"));
      return sibling;
    }
    function focus(location) {
      if (!contentRef.el) return;
      let el;
      if (!location) {
        const focusable = focusableChildren(contentRef.el);
        el = focusable[0];
      } else if (location === "next") {
        el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
        if (!el) return focus("first");
      } else if (location === "prev") {
        el = getSiblingElement(contentRef.el.querySelector(":focus"), location);
        if (!el) return focus("last");
      } else if (location === "first") {
        el = contentRef.el.firstElementChild;
        if (el == null ? void 0 : el.hasAttribute("disabled")) el = getSiblingElement(el, "next");
      } else if (location === "last") {
        el = contentRef.el.lastElementChild;
        if (el == null ? void 0 : el.hasAttribute("disabled")) el = getSiblingElement(el, "prev");
      }
      if (el) {
        el.focus({
          preventScroll: true
        });
      }
    }
    function scrollTo2(location) {
      const direction = isHorizontal.value && isRtl.value ? -1 : 1;
      const offsetStep = (location === "prev" ? -direction : direction) * containerSize.value;
      let newPosition = scrollOffset.value + offsetStep;
      if (isHorizontal.value && isRtl.value && containerRef.el) {
        const {
          scrollWidth,
          offsetWidth: containerWidth
        } = containerRef.el;
        newPosition += scrollWidth - containerWidth;
      }
      scrollToPosition(newPosition);
    }
    const slotProps = computed(() => ({
      next: group.next,
      prev: group.prev,
      select: group.select,
      isSelected: group.isSelected
    }));
    const hasAffixes = computed(() => {
      switch (props.showArrows) {
        case "always":
          return true;
        case "desktop":
          return !mobile.value;
        case true:
          return isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        case "mobile":
          return mobile.value || isOverflowing.value || Math.abs(scrollOffset.value) > 0;
        default:
          return !mobile.value && (isOverflowing.value || Math.abs(scrollOffset.value) > 0);
      }
    });
    const hasPrev = computed(() => {
      return Math.abs(scrollOffset.value) > 1;
    });
    const hasNext = computed(() => {
      if (!containerRef.value) return false;
      const scrollSize = getScrollSize(isHorizontal.value, containerRef.el);
      const clientSize = getClientSize(isHorizontal.value, containerRef.el);
      const scrollSizeMax = scrollSize - clientSize;
      return scrollSizeMax - Math.abs(scrollOffset.value) > 1;
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-slide-group", {
        "v-slide-group--vertical": !isHorizontal.value,
        "v-slide-group--has-affixes": hasAffixes.value,
        "v-slide-group--is-overflowing": isOverflowing.value
      }, displayClasses.value, props.class],
      "style": props.style,
      "tabindex": isFocused.value || group.selected.value.length ? -1 : 0,
      "onFocus": onFocus
    }, {
      default: () => {
        var _a, _b, _c;
        return [hasAffixes.value && createVNode("div", {
          "key": "prev",
          "class": ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !hasPrev.value
          }],
          "onMousedown": onFocusAffixes,
          "onClick": () => hasPrev.value && scrollTo2("prev")
        }, [((_a = slots.prev) == null ? void 0 : _a.call(slots, slotProps.value)) ?? createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.nextIcon : props.prevIcon
          }, null)]
        })]), createVNode("div", {
          "key": "container",
          "ref": containerRef,
          "class": "v-slide-group__container",
          "onScroll": onScroll
        }, [createVNode("div", {
          "ref": contentRef,
          "class": "v-slide-group__content",
          "onFocusin": onFocusin,
          "onFocusout": onFocusout,
          "onKeydown": onKeydown
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)])]), hasAffixes.value && createVNode("div", {
          "key": "next",
          "class": ["v-slide-group__next", {
            "v-slide-group__next--disabled": !hasNext.value
          }],
          "onMousedown": onFocusAffixes,
          "onClick": () => hasNext.value && scrollTo2("next")
        }, [((_c = slots.next) == null ? void 0 : _c.call(slots, slotProps.value)) ?? createVNode(VFadeTransition, null, {
          default: () => [createVNode(VIcon, {
            "icon": isRtl.value ? props.prevIcon : props.nextIcon
          }, null)]
        })])];
      }
    }));
    return {
      selected: group.selected,
      scrollTo: scrollTo2,
      scrollOffset,
      focus,
      hasPrev,
      hasNext
    };
  }
});
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onFocusin(e) {
      var _a, _b;
      const before = e.relatedTarget;
      const after = e.target;
      if (before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost dialog
      ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the dialog body
      ![document, overlay.value.contentEl].includes(after) && // It isn't inside the dialog body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        if (!focusable.length) return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        if (before === firstElement) {
          lastElement.focus();
        } else {
          firstElement.focus();
        }
      }
    }
    onBeforeUnmount(() => {
      document.removeEventListener("focusin", onFocusin);
    });
    if (IN_BROWSER) {
      watch(() => isActive.value && props.retainFocus, (val) => {
        val ? document.addEventListener("focusin", onFocusin) : document.removeEventListener("focusin", onFocusin);
      }, {
        immediate: true
      });
    }
    function onAfterEnter() {
      var _a;
      emit("afterEnter");
      if (((_a = overlay.value) == null ? void 0 : _a.contentEl) && !overlay.value.contentEl.contains(document.activeElement)) {
        overlay.value.contentEl.focus({
          preventScroll: true
        });
      }
    }
    function onAfterLeave() {
      emit("afterLeave");
    }
    watch(isActive, async (val) => {
      var _a;
      if (!val) {
        await nextTick();
        (_a = overlay.value.activatorEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const activatorProps = mergeProps({
        "aria-haspopup": "dialog"
      }, props.activatorProps);
      const contentProps = mergeProps({
        tabindex: -1
      }, props.contentProps);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps,
        "contentProps": contentProps,
        "height": !props.fullscreen ? props.height : void 0,
        "width": !props.fullscreen ? props.width : void 0,
        "maxHeight": !props.fullscreen ? props.maxHeight : void 0,
        "maxWidth": !props.fullscreen ? props.maxWidth : void 0,
        "role": "dialog",
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVCardSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardSubtitle");
const VCardSubtitle = genericComponent()({
  name: "VCardSubtitle",
  props: makeVCardSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-subtitle", props.class],
      "style": [{
        "--v-card-subtitle-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const VCardTitle = createSimpleFunctional("v-card-title");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "image": props.prependAvatar
      }, null), props.prependIcon && createVNode(VIcon, {
        "key": "prepend-icon",
        "density": props.density,
        "icon": props.prependIcon
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? toDisplayString(props.title)];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) ?? toDisplayString(props.subtitle)];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
        "key": "append-icon",
        "density": props.density,
        "icon": props.appendIcon
      }, null), props.appendAvatar && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "image": props.appendAvatar
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const makeVCardTextProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardText");
const VCardText = genericComponent()({
  name: "VCardText",
  props: makeVCardTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-card-text", props.class],
      "style": [{
        "--v-card-text-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title != null);
      const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text != null);
      return withDirectives(createVNode(Tag, mergeProps({
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, link.linkProps), {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.text) == null ? void 0 : _a2.call(slots)) ?? props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window2 = inject$1(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window2 || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window2.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = false;
      if (window2.transitionCount.value > 0) {
        window2.transitionCount.value -= 1;
        if (window2.transitionCount.value === 0) {
          window2.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window2) {
        return;
      }
      isTransitioning.value = true;
      if (window2.transitionCount.value === 0) {
        window2.transitionHeight.value = convertToUnit((_a = window2.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window2.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window2) {
          return;
        }
        window2.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window2.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window2.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a, _b;
      return ((_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) ?? false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta2 = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta2) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta2) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta2) + (Math.sign(delta2) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta2}px) scale${XY}(${initialScale})`, `translate${XY}(${delta2 / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject$1(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a;
          return [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.tab) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a3;
                return (_a3 = slots[`tab.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              } : void 0
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a3;
                return (_a3 = slots[`item.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browserPolyfill$1 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    {
      factory(module);
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function(module2) {
    var _a, _b;
    if (!((_b = (_a = globalThis.chrome) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id)) {
      throw new Error("This script should only be loaded in a browser extension.");
    }
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
      const wrapAPIs = (extensionAPIs) => {
        const apiMetadata = {
          "alarms": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "clearAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "bookmarks": {
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getChildren": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getRecent": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getSubTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTree": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "browserAction": {
            "disable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "enable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "getBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getBadgeText": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "openPopup": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setBadgeText": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "browsingData": {
            "remove": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "removeCache": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCookies": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeDownloads": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFormData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeHistory": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeLocalStorage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePasswords": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePluginData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "settings": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "commands": {
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "contextMenus": {
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "cookies": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAllCookieStores": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "devtools": {
            "inspectedWindow": {
              "eval": {
                "minArgs": 1,
                "maxArgs": 2,
                "singleCallbackArg": false
              }
            },
            "panels": {
              "create": {
                "minArgs": 3,
                "maxArgs": 3,
                "singleCallbackArg": true
              },
              "elements": {
                "createSidebarPane": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            }
          },
          "downloads": {
            "cancel": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "download": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "erase": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFileIcon": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "open": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "pause": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFile": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "resume": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "extension": {
            "isAllowedFileSchemeAccess": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "isAllowedIncognitoAccess": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "history": {
            "addUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "deleteRange": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getVisits": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "i18n": {
            "detectLanguage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAcceptLanguages": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "identity": {
            "launchWebAuthFlow": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "idle": {
            "queryState": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "management": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getSelf": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setEnabled": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "uninstallSelf": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "notifications": {
            "clear": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPermissionLevel": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "pageAction": {
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "hide": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "permissions": {
            "contains": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "request": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "runtime": {
            "getBackgroundPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPlatformInfo": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "openOptionsPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "requestUpdateCheck": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "sendMessage": {
              "minArgs": 1,
              "maxArgs": 3
            },
            "sendNativeMessage": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "setUninstallURL": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "sessions": {
            "getDevices": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getRecentlyClosed": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "restore": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "storage": {
            "local": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "managed": {
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "sync": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          },
          "tabs": {
            "captureVisibleTab": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "detectLanguage": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "discard": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "duplicate": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "executeScript": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getZoom": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getZoomSettings": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goBack": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goForward": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "highlight": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "insertCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "query": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "reload": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "sendMessage": {
              "minArgs": 2,
              "maxArgs": 3
            },
            "setZoom": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "setZoomSettings": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "update": {
              "minArgs": 1,
              "maxArgs": 2
            }
          },
          "topSites": {
            "get": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "webNavigation": {
            "getAllFrames": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFrame": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "webRequest": {
            "handlerBehaviorChanged": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "windows": {
            "create": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getLastFocused": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          }
        };
        if (Object.keys(apiMetadata).length === 0) {
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        }
        class DefaultWeakMap extends WeakMap {
          constructor(createItem, items = void 0) {
            super(items);
            this.createItem = createItem;
          }
          get(key) {
            if (!this.has(key)) {
              this.set(key, this.createItem(key));
            }
            return super.get(key);
          }
        }
        const isThenable = (value) => {
          return value && typeof value === "object" && typeof value.then === "function";
        };
        const makeCallback = (promise2, metadata) => {
          return (...callbackArgs) => {
            if (extensionAPIs.runtime.lastError) {
              promise2.reject(new Error(extensionAPIs.runtime.lastError.message));
            } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
              promise2.resolve(callbackArgs[0]);
            } else {
              promise2.resolve(callbackArgs);
            }
          };
        };
        const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
        const wrapAsyncFunction = (name, metadata) => {
          return function asyncFunctionWrapper(target, ...args) {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              if (metadata.fallbackToNoCallback) {
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                  target[name](...args);
                  metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                }
              } else if (metadata.noCallback) {
                target[name](...args);
                resolve();
              } else {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              }
            });
          };
        };
        const wrapMethod = (target, method, wrapper) => {
          return new Proxy(method, {
            apply(targetMethod, thisObj, args) {
              return wrapper.call(thisObj, target, ...args);
            }
          });
        };
        let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
        const wrapObject = (target, wrappers = {}, metadata = {}) => {
          let cache = /* @__PURE__ */ Object.create(null);
          let handlers2 = {
            has(proxyTarget2, prop) {
              return prop in target || prop in cache;
            },
            get(proxyTarget2, prop, receiver) {
              if (prop in cache) {
                return cache[prop];
              }
              if (!(prop in target)) {
                return void 0;
              }
              let value = target[prop];
              if (typeof value === "function") {
                if (typeof wrappers[prop] === "function") {
                  value = wrapMethod(target, target[prop], wrappers[prop]);
                } else if (hasOwnProperty(metadata, prop)) {
                  let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                  value = wrapMethod(target, target[prop], wrapper);
                } else {
                  value = value.bind(target);
                }
              } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                value = wrapObject(value, wrappers[prop], metadata[prop]);
              } else if (hasOwnProperty(metadata, "*")) {
                value = wrapObject(value, wrappers[prop], metadata["*"]);
              } else {
                Object.defineProperty(cache, prop, {
                  configurable: true,
                  enumerable: true,
                  get() {
                    return target[prop];
                  },
                  set(value2) {
                    target[prop] = value2;
                  }
                });
                return value;
              }
              cache[prop] = value;
              return value;
            },
            set(proxyTarget2, prop, value, receiver) {
              if (prop in cache) {
                cache[prop] = value;
              } else {
                target[prop] = value;
              }
              return true;
            },
            defineProperty(proxyTarget2, prop, desc) {
              return Reflect.defineProperty(cache, prop, desc);
            },
            deleteProperty(proxyTarget2, prop) {
              return Reflect.deleteProperty(cache, prop);
            }
          };
          let proxyTarget = Object.create(target);
          return new Proxy(proxyTarget, handlers2);
        };
        const wrapEvent = (wrapperMap) => ({
          addListener(target, listener, ...args) {
            target.addListener(wrapperMap.get(listener), ...args);
          },
          hasListener(target, listener) {
            return target.hasListener(wrapperMap.get(listener));
          },
          removeListener(target, listener) {
            target.removeListener(wrapperMap.get(listener));
          }
        });
        const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onRequestFinished(req) {
            const wrappedReq = wrapObject(
              req,
              {},
              {
                getContent: {
                  minArgs: 0,
                  maxArgs: 0
                }
              }
            );
            listener(wrappedReq);
          };
        });
        const onMessageWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onMessage2(message, sender, sendResponse) {
            let didCallSendResponse = false;
            let wrappedSendResponse;
            let sendResponsePromise = new Promise((resolve) => {
              wrappedSendResponse = function(response) {
                didCallSendResponse = true;
                resolve(response);
              };
            });
            let result;
            try {
              result = listener(message, sender, wrappedSendResponse);
            } catch (err) {
              result = Promise.reject(err);
            }
            const isResultThenable = result !== true && isThenable(result);
            if (result !== true && !isResultThenable && !didCallSendResponse) {
              return false;
            }
            const sendPromisedResult = (promise2) => {
              promise2.then((msg) => {
                sendResponse(msg);
              }, (error) => {
                let message2;
                if (error && (error instanceof Error || typeof error.message === "string")) {
                  message2 = error.message;
                } else {
                  message2 = "An unexpected error occurred";
                }
                sendResponse({
                  __mozWebExtensionPolyfillReject__: true,
                  message: message2
                });
              }).catch((err) => {
                console.error("Failed to send onMessage rejected reply", err);
              });
            };
            if (isResultThenable) {
              sendPromisedResult(result);
            } else {
              sendPromisedResult(sendResponsePromise);
            }
            return true;
          };
        });
        const wrappedSendMessageCallback = ({
          reject,
          resolve
        }, reply) => {
          if (extensionAPIs.runtime.lastError) {
            if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
              resolve();
            } else {
              reject(new Error(extensionAPIs.runtime.lastError.message));
            }
          } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
            reject(new Error(reply.message));
          } else {
            resolve(reply);
          }
        };
        const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            const wrappedCb = wrappedSendMessageCallback.bind(null, {
              resolve,
              reject
            });
            args.push(wrappedCb);
            apiNamespaceObj.sendMessage(...args);
          });
        };
        const staticWrappers = {
          devtools: {
            network: {
              onRequestFinished: wrapEvent(onRequestFinishedWrappers)
            }
          },
          runtime: {
            onMessage: wrapEvent(onMessageWrappers),
            onMessageExternal: wrapEvent(onMessageWrappers),
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        };
        const settingMetadata = {
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
        apiMetadata.privacy = {
          network: {
            "*": settingMetadata
          },
          services: {
            "*": settingMetadata
          },
          websites: {
            "*": settingMetadata
          }
        };
        return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
      };
      module2.exports = wrapAPIs(chrome);
    } else {
      module2.exports = globalThis.browser;
    }
  });
})(browserPolyfill$1);
var browserPolyfillExports$1 = browserPolyfill$1.exports;
const Browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports$1);
function obterNavegador() {
  if (chrome !== void 0) {
    return chrome.runtime.getManifest().manifest_version === 3 ? chrome : Browser;
  }
  if (browser$1 !== void 0) return browser$1;
  return Browser;
}
navigator.userAgent.includes("Firefox");
const browser$1 = obterNavegador();
const obterManifesto = () => browser$1.runtime.getManifest();
var tinyUid = { exports: {} };
const generator = (base) => typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" ? () => {
  const num = crypto.getRandomValues(new Uint8Array(1))[0];
  return (num >= base ? num % base : num).toString(base);
} : () => Math.floor(Math.random() * base).toString(base);
const uid = (length = 7, hex = false) => Array.from({ length }, generator(hex ? 16 : 36)).join("");
tinyUid.exports = uid;
tinyUid.exports.default = uid;
var tinyUidExports = tinyUid.exports;
const tuid = /* @__PURE__ */ getDefaultExportFromCjs(tinyUidExports);
var EN_MAPA_CALOR_ORIGEM_DADOS = /* @__PURE__ */ ((EN_MAPA_CALOR_ORIGEM_DADOS2) => {
  EN_MAPA_CALOR_ORIGEM_DADOS2[EN_MAPA_CALOR_ORIGEM_DADOS2["QUANTIDADE_TOTAL_TAREFA"] = 1] = "QUANTIDADE_TOTAL_TAREFA";
  EN_MAPA_CALOR_ORIGEM_DADOS2[EN_MAPA_CALOR_ORIGEM_DADOS2["PARALIZADOS_ENTRADA_TAREFA"] = 2] = "PARALIZADOS_ENTRADA_TAREFA";
  EN_MAPA_CALOR_ORIGEM_DADOS2[EN_MAPA_CALOR_ORIGEM_DADOS2["PARALIZADOS_ULTIMO_MOVIMENTO"] = 3] = "PARALIZADOS_ULTIMO_MOVIMENTO";
  return EN_MAPA_CALOR_ORIGEM_DADOS2;
})(EN_MAPA_CALOR_ORIGEM_DADOS || {});
var EN_MAPA_CALOR_FORMATO_BARRA = /* @__PURE__ */ ((EN_MAPA_CALOR_FORMATO_BARRA2) => {
  EN_MAPA_CALOR_FORMATO_BARRA2["PADRAO"] = "mc_formato_padrao";
  EN_MAPA_CALOR_FORMATO_BARRA2["MINIMO"] = "mc_formato_minimo";
  return EN_MAPA_CALOR_FORMATO_BARRA2;
})(EN_MAPA_CALOR_FORMATO_BARRA || {});
var EN_STATUS_MONTAGEM_MAPA = /* @__PURE__ */ ((EN_STATUS_MONTAGEM_MAPA2) => {
  EN_STATUS_MONTAGEM_MAPA2[EN_STATUS_MONTAGEM_MAPA2["NAO_ATIVADO"] = 0] = "NAO_ATIVADO";
  EN_STATUS_MONTAGEM_MAPA2[EN_STATUS_MONTAGEM_MAPA2["DESMONTADO"] = 1] = "DESMONTADO";
  EN_STATUS_MONTAGEM_MAPA2[EN_STATUS_MONTAGEM_MAPA2["COMPLETAMENTE_MONTADO"] = 2] = "COMPLETAMENTE_MONTADO";
  EN_STATUS_MONTAGEM_MAPA2[EN_STATUS_MONTAGEM_MAPA2["REQUISITANDO_E_PROCESSANDO_DADOS"] = 3] = "REQUISITANDO_E_PROCESSANDO_DADOS";
  return EN_STATUS_MONTAGEM_MAPA2;
})(EN_STATUS_MONTAGEM_MAPA || {});
const displayName = "P-J-e+R-tester";
const version = "2.28.104";
const description = "Extens\u00e3o com melhorias na utiliza\u00e7\u00e3o do PJe";
const data = "22 de maio de 2025";
var OPCOES_COPIAR_DADOS_DA_PECA = /* @__PURE__ */ ((OPCOES_COPIAR_DADOS_DA_PECA2) => {
  OPCOES_COPIAR_DADOS_DA_PECA2["SEM_DESCRICAO"] = "sem_descricao";
  OPCOES_COPIAR_DADOS_DA_PECA2["DESCRICAO"] = "descricao";
  OPCOES_COPIAR_DADOS_DA_PECA2["APENAS_ID"] = "apenas_id";
  OPCOES_COPIAR_DADOS_DA_PECA2["ID_ENTRE_PARENTESE"] = "ID_ENTRE_PARENTESE";
  return OPCOES_COPIAR_DADOS_DA_PECA2;
})(OPCOES_COPIAR_DADOS_DA_PECA || {});
var OPCOES_TEMA = /* @__PURE__ */ ((OPCOES_TEMA2) => {
  OPCOES_TEMA2["PADRAO"] = "padrao";
  OPCOES_TEMA2["ESCURO"] = "escuro";
  OPCOES_TEMA2["AJUSTES_GERAIS"] = "ajustesGerais";
  OPCOES_TEMA2["ALTO_CONTRASTE"] = "altoContraste";
  OPCOES_TEMA2["MAIS_ESPACO"] = "maisEspaco";
  return OPCOES_TEMA2;
})(OPCOES_TEMA || {});
var OPCOES_CARTAO_DE_PROCESSO = /* @__PURE__ */ ((OPCOES_CARTAO_DE_PROCESSO2) => {
  OPCOES_CARTAO_DE_PROCESSO2["NORMAL"] = "normal";
  OPCOES_CARTAO_DE_PROCESSO2["ALTERNAR_LINHAS"] = "alternar_linhas";
  OPCOES_CARTAO_DE_PROCESSO2["MINIMO"] = "minimo";
  return OPCOES_CARTAO_DE_PROCESSO2;
})(OPCOES_CARTAO_DE_PROCESSO || {});
var OPCOES_COPIAR_DADOS_POLO = /* @__PURE__ */ ((OPCOES_COPIAR_DADOS_POLO2) => {
  OPCOES_COPIAR_DADOS_POLO2["NOME"] = "nome";
  OPCOES_COPIAR_DADOS_POLO2["NOME_NUMERO"] = "nome_numero";
  return OPCOES_COPIAR_DADOS_POLO2;
})(OPCOES_COPIAR_DADOS_POLO || {});
var OPCOES_PALETA_CORES = /* @__PURE__ */ ((OPCOES_PALETA_CORES2) => {
  OPCOES_PALETA_CORES2["REDUZIDO"] = "reduzido";
  OPCOES_PALETA_CORES2["COMPLETO"] = "completo";
  return OPCOES_PALETA_CORES2;
})(OPCOES_PALETA_CORES || {});
var OPCOES_FILTROS_PERFIS = /* @__PURE__ */ ((OPCOES_FILTROS_PERFIS2) => {
  OPCOES_FILTROS_PERFIS2["VARA_MISTA"] = "vara_mista";
  OPCOES_FILTROS_PERFIS2["DIRECAO"] = "direcao";
  OPCOES_FILTROS_PERFIS2["MINHAS_TAREFAS"] = "minhas_tarefas";
  OPCOES_FILTROS_PERFIS2["TURMA_RECURSAL"] = "turma_recursal";
  return OPCOES_FILTROS_PERFIS2;
})(OPCOES_FILTROS_PERFIS || {});
var OPCOES_DOWNLOAD_CSV = /* @__PURE__ */ ((OPCOES_DOWNLOAD_CSV2) => {
  OPCOES_DOWNLOAD_CSV2["SIMPLIFICADO"] = "simplificado";
  OPCOES_DOWNLOAD_CSV2["COMPLETO"] = "completo";
  return OPCOES_DOWNLOAD_CSV2;
})(OPCOES_DOWNLOAD_CSV || {});
const OPCOES_DEFAULT = {
  idVersaoOpcoes: `${version}:${data}`,
  ativada: true,
  carregadaPJE: false,
  autosAbaMovimentos: false,
  autosAbaFases: false,
  autosAjustaDataHora: false,
  copiarDadosDaPeca: "sem_descricao",
  copiaDadosPecaAtivado: false,
  tema: "padrao",
  incluirLotacaoNoTitulo: true,
  incluirLotacaoNoTituloOpcoes: {
    painelEsquerdo: false,
    painelDireito: true
  },
  ajustesGerais: false,
  maisEspaco: false,
  avisoDuplicacaoEtiquetas: false,
  destacarLembretes: true,
  selecionarLotacao: true,
  pularquadroavisos: true,
  pularPaginaVaziaHome: true,
  pularpaginavazia: false,
  pularpaginavaziaOpcaoAuxiliar: {
    criarAtaalhoPjeTokenMenuPJe: false
  },
  infoQuadroAviso: [],
  totalTarefas: true,
  inativaCartao: false,
  cartaoProcesso: "normal",
  opcoesCopiarDadosPolo: "nome",
  opcoesPaletaCores: "completo",
  ajustarUsuarioMinuta: true,
  minutaCentralizada: false,
  removerAvisoAtencao: true,
  ajustarUrgenciaSigilo: true,
  ajustarPrazoIntimacao: true,
  ajustarCaixaMovimentos: true,
  homologadorMovimentos: true,
  ultimalotacaoacessada: 0,
  filtros: {
    perfilAtivo: "direcao",
    perfis: {
      [
        "vara_mista"
        /* VARA_MISTA */
      ]: {
        nome: "Vara Mista",
        setores: {
          "[Civ]": ["[Civ]"],
          "[Crim]": ["[Crim]"],
          "[EF]": ["[EF]"],
          "[JEF]": ["[JEF]"],
          "[PInvest]": ["[PInvest]"]
        }
      },
      [
        "direcao"
        /* DIRECAO */
      ]: {
        nome: "Dire\u00e7\u00e3o",
        setores: {
          Gab: [
            "Minutar Decis\u00e3o - Gabinete",
            "Minutar Despacho - Gabinete",
            "Minutar informa\u00e7\u00e3o",
            "Minutar Senten\u00e7a - Gabinete",
            "Revisar Decis\u00e3o - Gabinete",
            "Revisar Despacho - Gabinete",
            "Revisar Senten\u00e7a - Gabinete",
            "Assinar Decis\u00e3o - Gabinete",
            "Assinar Despacho - Gabinete",
            "Assinar Senten\u00e7a - Gabinete"
          ],
          Inic: [
            "Triagem inicial",
            "Triagem inicial URGENTES",
            "Processos reclassificados",
            "Preven\u00e7\u00e3o - Analisar e Minutar ato",
            "Evoluir de classe judicial",
            "Redistribuir processo",
            "Verificar impedimentos \u00e0 redistribui\u00e7\u00e3o",
            "Selecionar \u00f3rg\u00e3o julgador de destino",
            "Migra\u00e7\u00e3o - Triagem",
            "Processos inclu\u00eddos",
            "Processos despachados no PLANT\u00c3O JUDICIAL"
          ],
          Tria: [
            "Analisar peti\u00e7\u00e3o",
            "An\u00e1lise de secretaria",
            "Avaliar ato judicial proferido",
            "Avaliar ato judicial URGENTE proferido",
            "Avaliar ato ordinat\u00f3rio praticado",
            "Avaliar certid\u00e3o expedida",
            "Avaliar informa\u00e7\u00e3o proferida",
            "Lan\u00e7ar movimenta\u00e7\u00e3o n\u00e3o registrada",
            "Aguardando prazo autom\u00e1tico - Analisar peti\u00e7\u00e3o",
            "Aguardando prazo manual - Analisar peti\u00e7\u00e3o",
            "Arquivados - Analisar peti\u00e7\u00e3o",
            "Sobrestados - Analisar peti\u00e7\u00e3o",
            "Certificar decurso de prazo anterior ao arquivamento",
            "Definir prazo e tipo de sobrestamento",
            "Definir tipo de arquivamento",
            "Solucionar impedimentos ao arquivamento",
            "Recebido da inst\u00e2ncia superior",
            "Pendentes de an\u00e1lise - outros conv\u00eanios",
            "Pendentes de an\u00e1lise BACENJUD",
            "Pendentes de an\u00e1lise INFOJUD",
            "Pendentes de an\u00e1lise RENAJUD",
            "Recebidos da Inst\u00e2ncia Superior",
            "Remeter \u00e0 inst\u00e2ncia superior",
            "Solucionar impedimentos \u00e0 remessa \u00e0 inst\u00e2ncia superior",
            "Remetidos \u00e0 Central de Cumprimento de Julgados",
            "Remetidos \u00e0 Concilia\u00e7\u00e3o",
            "Remetidos \u00e0 Contadoria",
            "Recebidos da Central de Cumprimento de Julgados",
            "Recebidos da Concilia\u00e7\u00e3o",
            "Recebidos da Contadoria",
            "Arquivo provis\u00f3rio",
            "Suspens\u00e3o ou Sobrestamento",
            "Sobrestados - Prazo decorrido",
            "Sobrestados - prazo decorrido"
          ],
          Exp: [
            "Assinar comunica\u00e7\u00e3o via Sistema ou DJe",
            "Assinar comunica\u00e7\u00e3o via Telefone ou Balc\u00e3o",
            "Escolher expediente padr\u00e3o e prazo",
            "Escolher rotina de comunica\u00e7\u00f5es e outros expedientes",
            "Preparar comunica\u00e7\u00e3o por outros meios",
            "Preparar comunica\u00e7\u00e3o via Carta Precat\u00f3ria",
            "Preparar comunica\u00e7\u00e3o via Carta Rogat\u00f3ria",
            "Preparar comunica\u00e7\u00e3o via Ceman local",
            "Preparar comunica\u00e7\u00e3o via Correios",
            "Preparar comunica\u00e7\u00e3o via Edital",
            "Preparar comunica\u00e7\u00e3o via Sistema ou DJe",
            "Preparar comunica\u00e7\u00e3o via Telefone ou Balc\u00e3o",
            "Preparar comunica\u00e7\u00f5es - rotina individual",
            "Preparar comunica\u00e7\u00f5es e outros expedientes - rotina em lote",
            "Selecionar Central de Mandado",
            "Concluir publica\u00e7\u00e3o de Edital no DJe",
            "Concluir publica\u00e7\u00e3o no DJe",
            "Encerrar prazos em aberto",
            "Aguardando devolu\u00e7\u00e3o de AR",
            "Aguardando devolu\u00e7\u00e3o de Carta Precat\u00f3ria",
            "Aguardando devolu\u00e7\u00e3o de Carta Rogat\u00f3ria",
            "Aguardando devolu\u00e7\u00e3o de mandado",
            "Aguardando publica\u00e7\u00e3o de Edital no DJe",
            "Aguardando remessa de Carta aos Correios",
            "Aguardando remessa de Carta Precat\u00f3ria",
            "Aguardando remessa de Carta Rogat\u00f3ria",
            "Aguardando remessa de expediente aos Correios",
            "Assinar comunica\u00e7\u00e3o via Correios - Magistrado",
            "Documento assinado - comunica\u00e7\u00e3o por outros meios",
            "Aguardando inclus\u00e3o de laudo pericial"
          ],
          Req: [
            "Aguardando dep\u00f3sito ou negativa de precat\u00f3rio",
            "Aguardando dep\u00f3sito ou negativa de RPV",
            "Aguardando expedi\u00e7\u00e3o e juntada de precat\u00f3rio",
            "Aguardando expedi\u00e7\u00e3o e juntada de RPV",
            "Aguardando impress\u00e3o de alvar\u00e1",
            "Aguardando migra\u00e7\u00e3o de precat\u00f3rio",
            "Aguardando migra\u00e7\u00e3o de RPV",
            "Aguardando prazo - Avaliar manifesta\u00e7\u00e3o - Precat\u00f3rio",
            "Aguardando prazo - Avaliar manifesta\u00e7\u00e3o - RPV",
            "Aguardando prazo - Precat\u00f3rio",
            "Aguardando prazo - RPV",
            "Preparar alvar\u00e1",
            "Preparar precat\u00f3rio",
            "Preparar RPV",
            "Recebidos da rotina de requisi\u00e7\u00e3o de pagamento",
            "Escolher tipo de requisi\u00e7\u00e3o de pagamento",
            "Sobrestados por expedi\u00e7\u00e3o de precat\u00f3rio"
          ],
          Sec: [
            "Assinar Decis\u00e3o - Secretaria",
            "Assinar Despacho - Secretaria",
            "Assinar Senten\u00e7a - Secretaria",
            "Minutar Decis\u00e3o - Secretaria",
            "Minutar Despacho - Secretaria",
            "Minutar Senten\u00e7a - Secretaria",
            "Minutar ato ordinat\u00f3rio",
            "Informar dados da audi\u00eancia - impedimento para arquivamento",
            "Minutar ata de audi\u00eancia c\u00edvel"
          ]
        }
      },
      [
        "minhas_tarefas"
        /* MINHAS_TAREFAS */
      ]: {
        nome: "Minhas Tarefas",
        setores: { Exemplo: ["Exemplo de tarefa 1"] }
      },
      [
        "turma_recursal"
        /* TURMA_RECURSAL */
      ]: {
        nome: "Turma Recursal",
        setores: {
          Secretaria: [
            "[TR]  Aguardando devolu\u00e7\u00e3o de AR",
            "[TR] Aguardando expedi\u00e7\u00e3o de mandado",
            "[TR] Aguardando impress\u00e3o de alvar\u00e1",
            "[TR] Aguardando julgamento pela Turma Nacional",
            "[TR] Aguardando julgamento pela Turma Regional",
            "[TR] Aguardando prazo autom\u00e1tico",
            "[TR] Aguardando prazo autom\u00e1tico - Analisar peti\u00e7\u00e3o",
            "[TR] Aguardando prazo manual",
            "[TR] Aguardando prazo manual - Analisar peti\u00e7\u00e3o",
            "[TR] Aguardando publica\u00e7\u00e3o de Edital no DJe",
            "[TR] Aguardando remessa de expediente aos Correios",
            "[TR] Alterar Classe para remessa \u00e0 Turma Regional",
            "[TR] An\u00e1lise de secretaria",
            "[TR] Arquivados - Analisar peti\u00e7\u00e3o",
            "[TR] Arquivo permanente",
            "[TR] Arquivo provis\u00f3rio",
            "[TR] Assinar alvar\u00e1",
            "[TR] Assinar ato ordinat\u00f3rio",
            "[TR] Assinar certid\u00e3o",
            "[TR] Assinar certid\u00e3o de decurso de prazo",
            "[TR] Assinar certid\u00e3o de tr\u00e2nsito em julgado",
            "[TR] Assinar comunica\u00e7\u00e3o por outros meios",
            "[TR] Assinar comunica\u00e7\u00e3o via Ceman",
            "[TR] Assinar comunica\u00e7\u00e3o via Ceman - Magistrado",
            "[TR] Assinar comunica\u00e7\u00e3o via Correios",
            "[TR] Assinar comunica\u00e7\u00e3o via Edital",
            "[TR] Assinar comunica\u00e7\u00e3o via Sistema ou DJe",
            "[TR] Assinar comunica\u00e7\u00e3o via Telefone ou Balc\u00e3o",
            "[TR] Assinar informa\u00e7\u00e3o",
            "[TR] Avaliar ac\u00f3rd\u00e3o proferido",
            "[TR] Avaliar Ac\u00f3rd\u00e3o proferido - intima\u00e7\u00f5es pendentes",
            "[TR] Avaliar ato judicial proferido",
            "[TR] Avaliar ato judicial URGENTE proferido",
            "[TR] Avaliar ato ordinat\u00f3rio praticado",
            "[TR] Avaliar certid\u00e3o expedida",
            "[TR] Avaliar informa\u00e7\u00e3o proferida",
            "[TR] Avaliar mandado devolvido",
            "[TR] Certificar decurso de prazo anterior ao arquivamento",
            "[TR] Certificar tr\u00e2nsito em julgado",
            "[TR] Classificar sobrestados por decis\u00e3o de Inst\u00e2ncia ou Tribunal Superior",
            "[TR] Concluir publica\u00e7\u00e3o de Edital no DJe",
            "[TR] Concluir publica\u00e7\u00e3o no DJe",
            "[TR] Conferir alvar\u00e1",
            "[TR] Definir prazo e tipo de sobrestamento",
            "[TR] Definir tipo de arquivamento",
            "[TR] Encerrar prazos em aberto",
            "[TR] Escolher expediente padr\u00e3o e prazo",
            "[TR] Escolher rotina de comunica\u00e7\u00f5es e outros expedientes",
            "[TR] Migra\u00e7\u00e3o - Triagem",
            "[TR] Minutar ato ordinat\u00f3rio",
            "[TR] Minutar certid\u00e3o",
            "[TR] Minutar certid\u00e3o de decurso de prazo",
            "[TR] Minutar certid\u00e3o de tr\u00e2nsito em julgado",
            "[TR] Minutar informa\u00e7\u00e3o",
            "[TR] Preparar alvar\u00e1",
            "[TR] Preparar comunica\u00e7\u00e3o por outros meios",
            "[TR] Preparar comunica\u00e7\u00e3o via Ceman",
            "[TR] Preparar comunica\u00e7\u00e3o via Correios",
            "[TR] Preparar comunica\u00e7\u00e3o via Edital",
            "[TR] Preparar comunica\u00e7\u00e3o via Sistema ou DJe",
            "[TR] Preparar comunica\u00e7\u00e3o via Telefone ou Balc\u00e3o",
            "[TR] Preparar comunica\u00e7\u00f5es - rotina individual",
            "[TR] Preparar comunica\u00e7\u00f5es e outros expedientes - rotina em lote",
            "[TR] Processos baixados por cancelamento da distribui\u00e7\u00e3o",
            "[TR] Processos baixados por remessa a outro \u00f3rg\u00e3o",
            "[TR] Processos com a conclus\u00e3o cancelada",
            "[TR] Processos remetidos ao Juizado Especial Federal",
            "[TR] Recebidos da Concilia\u00e7\u00e3o",
            "[TR] Recebidos da Contadoria",
            "[TR] Recebidos da rotina de comunica\u00e7\u00f5es e outros expedientes",
            "[TR] Recebidos da Turma Nacional",
            "[TR] Recebidos da Turma Regional",
            "[TR] Recebidos do arquivo",
            "[TR] Recebidos do sobrestamento",
            "[TR] Reclassificar tipo de documento",
            "[TR] Redistribuir processo",
            "[TR] Redistribuir processo ao TRF1",
            "[TR] Remeter a outro \u00f3rg\u00e3o julgador",
            "[TR] Remeter \u00e0 Turma Nacional",
            "[TR] Remeter \u00e0 Turma Regional",
            "[TR] Remeter ao Juizado Especial Federal",
            "[TR] Remetidos \u00e0 Concilia\u00e7\u00e3o",
            "[TR] Remetidos \u00e0 Contadoria",
            "[TR] Selecionar Central de Mandados",
            "[TR] Sobrestados - Analisar peti\u00e7\u00e3o",
            "[TR] Sobrestados para aguardar julgamento de outra causa ou recurso",
            "[TR] Sobrestados para cumprimento de transa\u00e7\u00e3o penal",
            "[TR] Sobrestados por argui\u00e7\u00e3o de impedimento ou de suspei\u00e7\u00e3o",
            "[TR] Sobrestados por conflito de compet\u00eancia",
            "[TR] Sobrestados por conven\u00e7\u00e3o das partes",
            "[TR] Sobrestados por decis\u00e3o do Presidente do STF - IRDR",
            "[TR] Sobrestados por incidente de insanidade mental",
            "[TR] Sobrestados por IRDR (TRF)",
            "[TR] Sobrestados por morte de parte ou procurador",
            "[TR] Sobrestados por outros motivos",
            "[TR] Sobrestados por RE com repercuss\u00e3o geral",
            "[TR] Sobrestados por RESP repetitivo",
            "[TR] Sobrestados por suspens\u00e3o condicional do processo",
            "[TR] Solucionar impedimentos \u00e0 remessa \u00e0 Turma Nacional",
            "[TR] Solucionar impedimentos ao arquivamento",
            "[TR] Trasladar documentos de outro processo",
            "[TR] Triagem inicial"
          ],
          Gabinete: [
            "[TR] Aguardando a sess\u00e3o - Confirmar Voto Vista",
            "[TR] Aguardando a sess\u00e3o - Encaminhados para o Gabinete Vista",
            "[TR] Aguardando a sess\u00e3o - Preparar Voto Vista",
            "[TR] Aguardando a sess\u00e3o - adiados",
            "[TR] Aguardando a sess\u00e3o - inclu\u00eddos em pauta",
            "[TR] Aguardando a sess\u00e3o - inclu\u00eddos em pauta - Voto Vista",
            "[TR] Aguardando a sess\u00e3o - iniciada",
            "[TR] Aguardando a sess\u00e3o - n\u00e3o inclu\u00eddos em pauta",
            "[TR] Aguardando a sess\u00e3o - n\u00e3o relator",
            "[TR] Aguardando a sess\u00e3o - preparar voto vista",
            "[TR] Apreciar admissibilidade do Pedido de Uniformiza\u00e7\u00e3o",
            "[TR] Apreciar admissibilidade do RE",
            "[TR] Assinar Decis\u00e3o",
            "[TR] Assinar Decis\u00e3o - \u00f3rg\u00e3o julgador diverso",
            "[TR] Assinar Despacho",
            "[TR] Assinar Despacho - \u00f3rg\u00e3o julgador diverso",
            "[TR] Assinar ato sobre admissibilidade do Pedido de Uniformiza\u00e7\u00e3o",
            "[TR] Assinar ato sobre admissibilidade do RE",
            "[TR] Assinar inteiro teor",
            "[TR] Confirmar Voto Vista",
            "[TR] Confirmar Voto e encaminhar para Gabinete Vista",
            "[TR] Confirmar voto - n\u00e3o relator",
            "[TR] Confirmar voto vencido - relator",
            "[TR] Lan\u00e7ar movimenta\u00e7\u00f5es processuais do julgamento",
            "[TR] Lan\u00e7ar movimenta\u00e7\u00e3o n\u00e3o registrada",
            "[TR] Minutar Decis\u00e3o",
            "[TR] Minutar Decis\u00e3o - \u00f3rg\u00e3o julgador diverso",
            "[TR] Minutar Despacho",
            "[TR] Minutar Despacho - \u00f3rg\u00e3o julgador diverso",
            "[TR] Minutar voto - n\u00e3o relator",
            "[TR] Preparar Voto Vista",
            "[TR] Preparar relat\u00f3rio e voto",
            "[TR] Preven\u00e7\u00e3o - Analisar e Minutar ato",
            "[TR] Preven\u00e7\u00e3o - Assinar ato",
            "[TR] Revisar Decis\u00e3o",
            "[TR] Revisar Decis\u00e3o - \u00f3rg\u00e3o julgador diverso",
            "[TR] Revisar Despacho",
            "[TR] Revisar Despacho - \u00f3rg\u00e3o julgador diverso",
            "[TR] Revisar ato sobre admissibilidade do Pedido de Uniformiza\u00e7\u00e3o",
            "[TR] Revisar ato sobre admissibilidade do RE",
            "[TR] Triagem - Gabinete de Turma Recursal",
            "[TR] Triagem - Gabinete do Presidente de Turma Recursal",
            "[TR] Triagem inicial - \u00f3rg\u00e3o julgador diverso",
            "[TR] Votar antecipadamente - n\u00e3o relator"
          ]
        }
      }
    }
  },
  filtrostarefas: true,
  inverterOrdemDownload: false,
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
  painelBaixaTarefas: false,
  etiquetasColoridas: true,
  coresEtiquetasColoridas: {},
  integracaoAJG: false,
  tagsAutosDigitais: true,
  etiquetaFavoritaMinhasTarefas: true,
  abrirLinkMenuNoAppup: false,
  esconderBarraLateralPainelTarefas: true,
  painelOficialJustica: false,
  sisbajud: false,
  gestorDeModelos: false,
  ultimasEtiquetasUsadaTarefa: true,
  autorizarLogEmProducao: false,
  copiarDadosPolo: true,
  automacaoProcessos: true,
  telaVisivel: false,
  gerenciadorEtiquetas: true,
  contarSelecaoProcessos: true,
  multivisualizador: false,
  gerarSinopseRelatoria: false,
  adicionarEtiquetasAutos: true,
  linksUltimasTarefas: false,
  melhorarCartaoTarefa: true,
  melhorarCartaoTarefaOpcoesAuxiliares: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 20,
    flagDeLimiteVerde: 15,
    destacarNumeroProcesso: true,
    modificarCorPadraoEtiqueta: false,
    copiarNumeroProcesso: true,
    melhorarDestaquePrioridade: true,
    recolherdorCartao: true,
    melhorarDestaqueCartaoSelecionado: true,
    contarDiasConclusao: true
  },
  melhorarCartaoTarefaCartoesRecolhidosPersistencia: [],
  atalhosuteis: true,
  maisAtalhosAutosDigitais: false,
  visualizadorLembretes: true,
  pesquisacamposreordena: true,
  siteAtual: "",
  seletorProcessos: false,
  integracaoInfojud: false,
  mapaDeCalorPainelUsuario: false,
  mapaDeCalorPainelUsuarioLimitesFlags: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 25,
    flagDeLimiteVerde: 15,
    mapaDeCalorPainelUsuarioUsarLimitesFlagsMelhorarCartaoTarefa: false
  },
  mapaDeCalorPainelUsuarioStorage: {},
  mapaDeCalorPainelUsuaroiAnalisesProcessadasStorage: {},
  mapaDeCalorPainelUsuarioTarefasIgnoradas: [
    "arquivo",
    "aguardando aprecia\u00e7\u00e3o",
    "processos suspensos",
    "remetidos para tr",
    "remetidos \u00e0 tr",
    "sobrestados",
    "devolvidos para inst\u00e2ncia de origem"
  ],
  mapaDeCalorPainelUsuarioOrigemDados: EN_MAPA_CALOR_ORIGEM_DADOS.PARALIZADOS_ENTRADA_TAREFA,
  mapaDeCalorPainelUsuarioFormatoBarra: EN_MAPA_CALOR_FORMATO_BARRA.PADRAO,
  mapaDeCalorPainelUsuaroiHashImpressaoLimitesFlags: Math.E,
  mapaDeCalorPainelUsuarioSessionStorage: {
    status: EN_STATUS_MONTAGEM_MAPA.NAO_ATIVADO,
    timestampMontagem: -1
  },
  menuHaburgueIntegracaoSistemas: true,
  integracaoSerasajud: false,
  mostraProcessosDigitos: false,
  intimaZap: false,
  abrirLembreteNoPopup: false,
  postIt: false,
  minutaRemoveOrientacoes: false,
  mostrarResultadoDiligencia: false,
  contadorTempoMandado: false,
  tagsMandados: false,
  listaTarefaFiltros: true,
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
  visualizarAnexoResultadoDiligencia: true,
  exibirIdOrigem: false,
  estenderAcessibilidadePcdVisual: false,
  reproduzirVideos: true,
  painelGerencial: true,
  menuIconePainelUsuario: true,
  filtrarPerfisDoUsuario: true
  // inserir novo valor default acima
};
const MAX_TIMEOUT_MSG = 200;
const HREF_ROOT = /https?:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|.+grau)|(pje.g)\.(.+)\.jus\.br|frontend.prd.cnj.cloud|corregedoria.pje.jus.br|localhost:8080\/pje)\//;
const LEGACY_WEB_ROOT = /https?:\/\/((.+)\.(.+)\.jus\.br\/(pje|pjecnj|pje\w|pje-treinamento-1g|pje.g|.g|.+grau)|(pje.g)\.(.+)\.jus\.br|corregedoria\.pje\.jus\.br)/;
const HRFES_MOCKS = {
  MINUTA: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?minuta(-\w+)*\.html/,
  PAINEL_USUARIO: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LOCAL: /http:\/\/localhost:4000\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LISTA_TAREFA_FILTRO: "http://localhost:4000/pje/lista-tarefa-filtro.html",
  AUTOS_DIGITAIS: /http:\/\/localhost:(\d+)\/pje\/autos-digitais\/autos-digitais(-\w+)*(\w*\d+G)?\.html/,
  ULTIMAS_TAREFAS: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?ultimas-tarefas(-\w+)*\.html/
};
const HREFS_PRODUCAO = {
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
};
const DEFINICOES = {
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
    ROOT: HREF_ROOT,
    LEGACY_WEB_ROOT,
    HOME: [HREFS_PRODUCAO.HOME],
    MINUTA: [HREFS_PRODUCAO.MINUTA, HRFES_MOCKS.MINUTA],
    PAINEL_CONSULTA_CLOUD: HREFS_PRODUCAO.PAINEL_CONSULTA_CLOUD,
    PAINEL_CONSULTA: HREFS_PRODUCAO.PAINEL_CONSULTA,
    PAINEL_ETIQUETAS: HREFS_PRODUCAO.PAINEL_ETIQUETAS,
    PAINEL_USUARIO: [
      HREFS_PRODUCAO.PAINEL_USUARIO,
      HRFES_MOCKS.PAINEL_USUARIO,
      HRFES_MOCKS.PAINEL_USUARIO_LISTA_TAREFA_FILTRO
    ],
    PAINEL_USUARIO_LOCAL: [HREFS_PRODUCAO.PAINEL_USUARIO_LOCAL, HRFES_MOCKS.PAINEL_USUARIO_LOCAL],
    AUTOS_DIGITAIS: [HREFS_PRODUCAO.AUTOS_DIGITAIS, HRFES_MOCKS.AUTOS_DIGITAIS],
    AJG: HREFS_PRODUCAO.AJG,
    PAINEL_OFICIAL_JUSTICA: HREFS_PRODUCAO.PAINEL_OFICIAL_JUSTICA,
    RELACAO_JULGAMENTO: [HREFS_PRODUCAO.RELACAO_JULGAMENTO, HRFES_MOCKS.AUTOS_DIGITAIS],
    ULTIMAS_TAREFAS: [HREFS_PRODUCAO.ULTIMAS_TAREFAS, HRFES_MOCKS.ULTIMAS_TAREFAS],
    OFICIAL_JUSTICA_CONTROLE_MANDADOS: [HREFS_PRODUCAO.OFICIAL_JUSTICA_CONTROLE_MANDADOS]
  }
};
function tipo(o) {
  return {}.toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function tipoObjeto(o) {
  if (o !== null && o !== void 0) {
    return tipo(o) === "object";
  }
  return false;
}
function tipoData(o) {
  return tipo(o) === "date";
}
function tipoRegExp(o) {
  return tipo(o) === "regexp";
}
function tipoBooleano(o) {
  return typeof o === "boolean";
}
function tipoFuncao(o) {
  return typeof o === "function";
}
function tipoNumero(o) {
  return typeof o === "number" && !isNaN(o) && isFinite(o);
}
function tipoString(o) {
  return tipo(o) === "string";
}
function tipoListaStrings(o) {
  return Array.isArray(o) && o.every((algo) => tipoString(algo));
}
function tipoPrimitivo(o) {
  return tipoBooleano(o) || tipoString(o) || tipoNumero(o);
}
function tipoElementoHtml(o) {
  const descricao = tipo(o);
  return descricao.startsWith("html") && descricao.endsWith("element");
}
function tipoListaElementosHtml(o) {
  return Array.isArray(o) && o.every((algo) => tipoElementoHtml(algo));
}
let Depurador$3 = class Depurador {
  static estilos = {
    azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;"
  };
  static console = {
    assert: (..._args) => void 0,
    count: (..._args) => void 0,
    debug: (..._args) => void 0,
    dir: (..._args) => void 0,
    error: (..._args) => void 0,
    group: (..._args) => void 0,
    groupCollapsed: (..._args) => void 0,
    groupEnd: (..._args) => void 0,
    info: (..._args) => void 0,
    log: (..._args) => void 0,
    profile: (..._args) => void 0,
    table: (..._args) => void 0,
    time: (..._args) => void 0,
    timeEnd: (..._args) => void 0,
    trace: (..._args) => void 0,
    warn: (..._args) => void 0
  };
  static autorizarEmProducao = false;
  static info(mensagem) {
    Depurador.log(mensagem, Depurador.estilos.azul);
  }
  static erro(objeto) {
    if (objeto instanceof Error) {
      Depurador.log(objeto.message, Depurador.estilos.vermelho);
      console.log(objeto);
    } else {
      Depurador.log(objeto, Depurador.estilos.vermelho);
    }
  }
  static aviso(mensagem) {
    Depurador.log(mensagem, Depurador.estilos.laranja);
  }
  static sucesso(mensagem) {
    Depurador.log(mensagem, Depurador.estilos.verde);
  }
  static detalhes(mensagem) {
    Depurador.log(mensagem, Depurador.estilos.cinza);
  }
  static inspecionar(rotulo, objeto) {
    if (this.autorizarEmProducao) {
      Depurador.detalhes(rotulo);
      console.log(objeto);
    }
  }
  static log(mensagem, estilo = "") {
    if (this.autorizarEmProducao) {
      console.log(`%c${mensagem}`, estilo);
    }
  }
};
class Depurador2 {
  recurso;
  contexto_;
  adicional;
  get contexto() {
    return tipoString(this.contexto_) ? this.contexto_ : this.contexto_();
  }
  static _depurador;
  static _baseConsoleFunc = (consoleFunc, ...args) => {
    const prefixMes = `[${displayName}][${Depurador2._depurador.recurso}][${Depurador2._depurador.contexto}]${Depurador2._depurador.adicional ? `[${Depurador2._depurador.adicional}]` : ""}: `;
    if (typeof args[0] === "string") {
      args[0] = !args[0].startsWith("%c") ? `${prefixMes}${args[0]}` : `%c${prefixMes}${args[0].slice(2)}`;
    } else {
      args = [prefixMes].concat(args);
    }
    consoleFunc(...args);
  };
  static _console = {
    assert: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.assert, ...args) : (..._args) => void 0,
    count: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.count, ...args) : (..._args) => void 0,
    debug: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.debug, ...args) : (..._args) => void 0,
    dir: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.dir, ...args) : (..._args) => void 0,
    error: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.error, ...args) : (..._args) => void 0,
    group: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.group, ...args) : (..._args) => void 0,
    groupCollapsed: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.groupCollapsed, ...args) : (..._args) => void 0,
    groupEnd: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.groupEnd, ...args) : (..._args) => void 0,
    info: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.info, ...args) : (..._args) => void 0,
    log: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.log, ...args) : (..._args) => void 0,
    profile: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.profile, ...args) : (..._args) => void 0,
    table: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.table, ...args) : (..._args) => void 0,
    time: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.time, ...args) : (..._args) => void 0,
    timeEnd: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.timeEnd, ...args) : (..._args) => void 0,
    trace: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.trace, ...args) : (..._args) => void 0,
    warn: (...args) => Depurador$3.autorizarEmProducao ? Depurador2._baseConsoleFunc(console.warn, ...args) : (..._args) => void 0
  };
  /**
   * Cria uma inst\u00e2ncia de Depurador2.
   * @param {string} recurso - O recurso associado \u00e0 depura\u00e7\u00e3o.
   * @param {string | TUnknownFunction} contexto - O contexto associado \u00e0 depura\u00e7\u00e3o.
   * @param {string} [adicional] - Informa\u00e7\u00f5es adicionais opcionais.
   */
  constructor({
    recurso,
    contexto,
    adicional
  }) {
    this.recurso = recurso.replace(/^_/, "");
    this.contexto_ = contexto || "unset";
    this.adicional = adicional;
  }
  /**
   * Obt\u00e9m o objeto console configurado para depura\u00e7\u00e3o.
   * @returns {Object} - Objeto console configurado.
   */
  get console() {
    Depurador2._depurador = this;
    return Depurador2._console;
  }
  /**
   * Registra uma mensagem informativa no console.
   * @param {string} mensagem - A mensagem informativa a ser registrada.
   */
  info(mensagem) {
    this.log(mensagem, Depurador$3.estilos.azul);
  }
  /**
   * Registra uma mensagem de erro no console.
   * @param {string | unknown} objeto - O objeto ou mensagem de erro a ser registrado.
   */
  erro(objeto, objeto2) {
    const mensagem = objeto instanceof Error ? objeto.message : objeto;
    this.log(mensagem, Depurador$3.estilos.vermelho, objeto2);
    if (objeto instanceof Error) {
      console.log(objeto, objeto2);
    }
  }
  /**
   * Registra uma mensagem de aviso no console.
   * @param {string} mensagem - A mensagem de aviso a ser registrada.
   */
  aviso(mensagem) {
    this.log(mensagem, Depurador$3.estilos.laranja);
  }
  /**
   * Registra uma mensagem de sucesso no console.
   * @param {string} mensagem - A mensagem de sucesso a ser registrada.
   */
  sucesso(mensagem, objeto) {
    this.log(mensagem, Depurador$3.estilos.verde, objeto);
  }
  /**
   * Registra uma mensagem de detalhes no console.
   * @param {string} mensagem - A mensagem de detalhes a ser registrada.
   */
  detalhes(mensagem) {
    this.log(mensagem, Depurador$3.estilos.cinza);
  }
  /**
   * Inspeciona um objeto e registra no console com um r\u00f3tulo
   * @param {string} rotulo - O r\u00f3tulo a ser exibido antes do objeto.
   * @param {unknown} objeto - O objeto a ser inspecionado e registrado.
   */
  inspecionar(rotulo, objeto) {
    this.detalhes(rotulo);
    this.console.log(objeto);
  }
  /**
   * Registra uma mensagem de log no console.
   * @param {string} mensagem - A mensagem a ser registrada.
   * @param {string} [estilo=''] - O estilo CSS a ser aplicado \u00e0 mensagem.
   */
  log(mensagem, estilo = "", objeto) {
    this.console.log(`%c${mensagem}`, estilo, objeto);
  }
}
function exporGlobalmenteEmDev(objetoComPropriedade) {
}
class Armazenamento {
  static iniciar() {
    browser$1.storage.local.set(OPCOES_DEFAULT);
  }
  static async atualizar() {
    const opcoesAtuais = await Armazenamento.obter(null);
    browser$1.storage.local.set(Object.assign(OPCOES_DEFAULT, opcoesAtuais));
  }
  static remover(item) {
    return browser$1.storage.local.remove(item);
  }
  static guardar(dados) {
    return browser$1.storage.local.set(dados);
  }
  static async obter(itens) {
    return await browser$1.storage.local.get(itens || null);
  }
  static async guardarSessionStorage(objeto) {
    Depurador$2.console.log("Salvando dados no armazenamento de sess\u00e3o.");
    if (browser$1.runtime.getManifest().manifest_version === 2) {
      for (const chave in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, chave)) {
          const valor = objeto[chave];
          sessionStorage.setItem(chave, JSON.stringify(valor));
        }
      }
    } else {
      try {
        await browser$1.storage.session.set(objeto);
        Depurador$2.console.log("Dados salvos no armazenamento de sess\u00e3o.");
      } catch (error) {
        Depurador$2.console.error("Erro ao salvar dados no armazenamento de sess\u00e3o:", error);
      }
    }
  }
  static async obterSessionStorage(chave = null) {
    if (browser$1.runtime.getManifest().manifest_version === 2) {
      const todosDados = {};
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key) todosDados[key] = sessionStorage.getItem(key);
      }
      return chave ? sessionStorage.getItem(chave) : todosDados;
    } else {
      try {
        const dados = await browser$1.storage.session.get(chave);
        return chave ? dados[chave] : dados;
      } catch (error) {
        Depurador$2.console.error("Erro ao obter dados do armazenamento de sess\u00e3o:", error);
        return null;
      }
    }
  }
}
const Depurador$2 = new Depurador2({
  recurso: "Armazenamento"
});
function emIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
async function copiar(texto) {
  try {
    if (navigator.userAgent.includes("Firefox")) {
      await navigator.clipboard.writeText(texto);
    } else {
      const copyArea = document.createElement("div");
      copyArea.style.cssText = "width: 1px; height: 1px; opacity: 0.01; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;";
      copyArea.contentEditable = "true";
      document.body.insertAdjacentElement("afterbegin", copyArea);
      copyArea.innerText = texto;
      copyArea.focus();
      document.execCommand("SelectAll", false);
      document.execCommand("Copy", false, void 0);
      document.body.removeChild(copyArea);
    }
  } catch (e) {
    Depurador$3.inspecionar("Conte\u00fado selecionado:", texto);
    Depurador$3.console.error(e);
  }
}
function encontrarNoElemento(seletor, elemento) {
  const elements = Array.from(elemento.querySelectorAll(seletor));
  return elements;
}
function ancestraisDoElemento(elemento, selecionarAncestrais, ateElementoSer) {
  let matched = [];
  let elem = elemento;
  while ((elem = elem.parentElement) && elem.nodeType !== 9) {
    if (elem.nodeType === 1) {
      matched.push(elem);
    }
  }
  if (selecionarAncestrais) {
    matched = matched.filter((elem2) => {
      return elem2.matches(selecionarAncestrais);
    });
  }
  return matched;
}
function adicionarEstilosAoHead(style) {
  const head = document.head || document.getElementsByTagName("head")[0];
  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(style));
  head.appendChild(styleElement);
}
function igual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (tipoPrimitivo(a) && tipoPrimitivo(b)) {
    return a === b;
  }
  if (tipoRegExp(a) && tipoRegExp(b)) {
    return a.toString() === b.toString();
  }
  if (tipoData(a) && tipoData(b)) {
    return a.toISOString() === b.toISOString();
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => igual(v, b[i]));
  }
  if (tipoFuncao(a) && tipoFuncao(b)) {
    return a.toString() === b.toString();
  }
  if (tipoObjeto(a) && tipoObjeto(b)) {
    const chavesA = Object.keys(a);
    const chavesB = Object.keys(b);
    const mesmasChaves = igual(chavesA, chavesB);
    return mesmasChaves && chavesA.every((chave) => igual(a[chave], b[chave]));
  }
  return Object.is(a, b);
}
function contem(a, b) {
  if (igual(a, b)) return true;
  if (Array.isArray(a)) return a.includes(b);
  if (tipoObjeto(a)) {
    if (typeof b === "string") return b in a;
    if (tipoObjeto(b)) {
      const chavesB = Object.keys(b);
      return chavesB.every((chavesB2) => chavesB2 in a && contem(a[chavesB2], b[chavesB2]));
    }
    return false;
  }
  return false;
}
function contemPeloMenosUm(a, b) {
  if (igual(a, b)) return true;
  if (Array.isArray(b)) return b.some((elementoB) => contemPeloMenosUm(a, elementoB));
  if (tipoObjeto(b)) {
    if (tipoObjeto(a))
      return Object.keys(b).some(
        (chaveB) => chaveB in a && contemPeloMenosUm(a[chaveB], b[chaveB])
      );
    return false;
  }
  return false;
}
class PJePayloadServico {
  static instance;
  pjePayloadAtual;
  async PATH() {
    var _a, _b;
    if (!this.pjePayloadAtual) this.pjePayloadAtual = await this.obterPayload();
    return (_b = (_a = this.pjePayloadAtual) == null ? void 0 : _a.CONSTANTES) == null ? void 0 : _b.PATH;
  }
  async WEB_ROOT() {
    var _a, _b;
    if (!this.pjePayloadAtual) this.pjePayloadAtual = await this.obterPayload();
    return (_b = (_a = this.pjePayloadAtual) == null ? void 0 : _a.CONSTANTES) == null ? void 0 : _b.WEB_ROOT;
  }
  async ID_USUARIO_LOCALIZACAO() {
    var _a, _b;
    if (!this.pjePayloadAtual) this.pjePayloadAtual = await this.obterPayload();
    return (_b = (_a = this.pjePayloadAtual) == null ? void 0 : _a.CONSTANTES) == null ? void 0 : _b.ID_USUARIO_LOCALIZACAO;
  }
  constructor() {
    this.iniciarOuvinte();
  }
  async iniciarOuvinte() {
  }
  static getInstance() {
    if (!PJePayloadServico.instance) {
      PJePayloadServico.instance = new PJePayloadServico();
    }
    return PJePayloadServico.instance;
  }
  async obterPayload() {
    {
      Depurador$1.erro("N\u00e3o \u00e9 esperado que esse ponto do c\u00f3digo seja alcan\u00e7ado.");
      return void 0;
    }
  }
}
const Depurador$1 = new Depurador2({
  recurso: "PJePayloadServico",
  adicional: "Servi\u00e7o"
});
exporGlobalmenteEmDev({ PJePayloadServico: PJePayloadServico.getInstance() });
({
  headers: {
    "User-Agent": userAgent()
  }
});
function userAgent() {
  try {
    return (typeof window !== "undefined" ? window : self).navigator.userAgent;
  } catch (e) {
    return "";
  }
}
var eOrigemMensagem = /* @__PURE__ */ ((eOrigemMensagem2) => {
  eOrigemMensagem2["GESTOR"] = "gestor";
  return eOrigemMensagem2;
})(eOrigemMensagem || {});
function obterIdUnico() {
  return `id_${Math.random() * 1e7}_${Date.now()}`;
}
function sendMessage$1(mensagem, callback) {
  return new Promise((resolve) => {
    const isFirefox = navigator.userAgent.match(/firefox|fxios/i) ? true : false;
    if (isFirefox) {
      Browser.runtime.sendMessage({ ...mensagem, origem: eOrigemMensagem.GESTOR }).then((res) => {
        resolve(res);
      });
    } else {
      chrome.runtime.sendMessage({ ...mensagem, origem: eOrigemMensagem.GESTOR }, (res) => {
        resolve(res);
      });
    }
  });
}
function obterUrlRaiz() {
  var _a;
  try {
    return typeof window !== "undefined" ? ((_a = window.location.href.match(DEFINICOES.HREFS.ROOT)) == null ? void 0 : _a.at(0)) || "" : "";
  } catch (e) {
    return "";
  }
}
var ETipoAtalho = /* @__PURE__ */ ((ETipoAtalho2) => {
  ETipoAtalho2["atalhoModelo"] = "atalhoModelo";
  ETipoAtalho2["atalhoEntrada"] = "atalhoEntrada";
  ETipoAtalho2["entradaNegativa"] = "entradaNegativa";
  return ETipoAtalho2;
})(ETipoAtalho || {});
({
  ...ETipoAtalho
});
({
  UrlRaiz: obterUrlRaiz()
});
function removerAcentos(textoComAcentos) {
  const mapaAcentos = {
    \u00e1: "a",
    \u00e0: "a",
    \u00e3: "a",
    \u00e2: "a",
    \u00e9: "e",
    \u00e8: "e",
    \u00ea: "e",
    \u00ed: "i",
    \u00ec: "i",
    \u00ee: "i",
    \u00f3: "o",
    \u00f2: "o",
    \u00f5: "o",
    \u00f4: "o",
    \u00fa: "u",
    \u00f9: "u",
    \u00fb: "u",
    \u00e7: "c"
  };
  return textoComAcentos.replace(/[\u00e1\u00e0\u00e3\u00e2\u00e9\u00e8\u00ea\u00ed\u00ec\u00ee\u00f3\u00f2\u00f5\u00f4\u00fa\u00f9\u00fb\u00e7]/g, (match) => mapaAcentos[match] || match);
}
function normalizarTextoParaIdHash(text) {
  const withoutAccents = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const lowerCaseTrimmed = withoutAccents.toLocaleLowerCase().trim();
  const normalized = lowerCaseTrimmed.replace(/\s+/g, "-");
  return normalized;
}
function corrigeStylesheetsVuetify() {
  var _a;
  let vuetifyStylesheet = void 0;
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (((_a = document.styleSheets[i].ownerNode) == null ? void 0 : _a.id) == "vuetify-theme-stylesheet") {
      vuetifyStylesheet = document.styleSheets[i];
    }
  }
  if (vuetifyStylesheet) {
    for (let i = 0; i < vuetifyStylesheet.cssRules.length; i++) {
      const regras = vuetifyStylesheet.cssRules[i];
      regras.selectorText = regras.selectorText.replace(
        /(?<!\.)\.(?!v-)(?!:)([\w-]+)/,
        `.pjemrVuetify ${regras.selectorText}`
      );
      Depurador$3.log("styleSheets OK");
    }
  }
}
const ress = "/**\n * Estilos parciais do ress para serem aplicados ao shadow host\n * objetivando o uso adequado do Vuetify montado no\n * shado DOM\n * veja https://github.com/filipelinhares/ress\n */\n:host {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */\n  word-break: normal;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements and pseudo elements */\n  box-sizing: inherit;\n}\n\n::before,\n::after {\n  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n\n* {\n  padding: 0; /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}";
function montarComponenteVueNoShadowDOM({
  componente,
  id,
  elementoAlvo,
  tagRaiz = "div",
  posicaoRelacaoAlvo = "beforeend",
  estilosUrl = "",
  usarVuetify = false,
  classesRaiz = "",
  props = {}
}) {
  var _a;
  id = removerAcentos(id);
  const container = document.createElement(`${tagRaiz}-container`);
  classesRaiz.length && container.setAttribute(
    "class",
    !usarVuetify ? classesRaiz : `pjemrVuetify ${classesRaiz}`.trim()
  );
  container.id = id;
  if (usarVuetify && !estilosUrl.length) estilosUrl = DEFINICOES.CONTENT_SCRIPTS.ESTILOS_URL;
  if (!(elementoAlvo.getRootNode() instanceof ShadowRoot)) {
    const pjemrRoot = document.createElement("pjemr-root");
    const root = document.createElement(tagRaiz);
    const shadowRoot = ((_a = container.attachShadow) == null ? void 0 : _a.call(container, { mode: "open" })) || container;
    const styleEl = estilosUrl ? document.createElement("link") : null;
    if (styleEl) {
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", browser$1.runtime.getURL(estilosUrl));
      shadowRoot.appendChild(styleEl);
    }
    root.setAttribute(id, "");
    shadowRoot.appendChild(pjemrRoot);
    pjemrRoot.appendChild(root);
    const app = createApp(componente, { ...props, eComponenteRootNoShadowDom: true });
    usarVuetify && app.use(vuetify);
    app.provide("container", container);
    app.provide("shadowRoot", shadowRoot);
    app.provide("root", root);
    const instance = app.mount(root);
    elementoAlvo.insertAdjacentElement(posicaoRelacaoAlvo, container);
    return [container, app, instance, shadowRoot];
  } else {
    elementoAlvo.insertAdjacentElement(posicaoRelacaoAlvo, container);
    const app = createApp(componente, { ...props, eComponenteRootNoShadowDom: false });
    usarVuetify && app.use(vuetify);
    app.provide("container", container);
    const instance = app.mount(container);
    corrigeStylesheetsVuetify();
    return [container, app, instance];
  }
}
function corrigeStylesheetsVuetifyNoShadowDOMHost(shadowRoot) {
  const styleSheets = Array.from(shadowRoot.styleSheets);
  for (const styleSheet of styleSheets) {
    const cssRules = styleSheet.cssRules;
    for (let i = 0; i < cssRules.length; i++) {
      const rule = cssRules[i];
      if (rule instanceof CSSStyleRule) {
        let selectorText = rule.selectorText;
        selectorText = selectorText.replace(/\bhtml(?=[\s.,:|{[\])]|$)/g, ":host");
        selectorText = selectorText.replace(/\bbody(?=[\s.,:|{[\])]|$)/g, "pjemr-root");
        rule.selectorText = selectorText;
      }
    }
  }
}
function redefinirTamanhoFonteBaseDoHTML() {
  const estilosCss = (
    /*css*/
    `
    html {
      font-size: 1rem;
    }
  `
  );
  const styleEl = document.createElement("style");
  const jaTemStyle = document.querySelector("#pjemr-html-font-redeficao");
  if (styleEl && !jaTemStyle) {
    styleEl.setAttribute("id", "pjemr-html-font-redeficao");
    styleEl.textContent = estilosCss;
    document.head.appendChild(styleEl);
  }
}
function copiarFolhaDeEstilosDoTemaVuetifyParaShadowDOM(shadowRoot) {
  var _a;
  const estilo = document.querySelector("#vuetify-theme-stylesheet");
  if (estilo) {
    const newStyle = document.createElement("style");
    newStyle.textContent = ((_a = estilo.textContent) == null ? void 0 : _a.replaceAll(":root", ":host")) || "";
    newStyle.id = estilo.id;
    shadowRoot.insertBefore(newStyle, shadowRoot.firstChild);
  } else
    Depurador$3.aviso("Folha de estilso de tema n\u00e3o forma encontrados para copiar para o ShadowDOM");
}
function inserirRessParcialNoShadowDOM(shadowRoot) {
  const estilo2 = shadowRoot.querySelector("#shadow-dom-ress");
  if (!estilo2) {
    const newStyle = document.createElement("style");
    newStyle.textContent = ress;
    newStyle.id = "shadow-dom-ress";
    shadowRoot.insertBefore(newStyle, shadowRoot.firstChild);
  } else
    Depurador$3.aviso("Folha de estilso de tema n\u00e3o forma encontrados para copiar para o ShadowDOM");
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent$1({
  __name: "Vuetify",
  props: {
    appPadrao: { type: Boolean },
    eComponenteRootNoShadowDom: { type: Boolean }
  },
  setup(__props) {
    const mounted2 = ref(false);
    const props = __props;
    const mainDiv = ref(null);
    onMounted(() => {
      setTimeout(() => {
        var _a;
        mounted2.value = true;
        !props.appPadrao && ajustarVuetifyDiv();
        if (props.eComponenteRootNoShadowDom) {
          const shadowRoot = (_a = mainDiv.value) == null ? void 0 : _a.getRootNode();
          redefinirTamanhoFonteBaseDoHTML();
          if (shadowRoot) {
            copiarFolhaDeEstilosDoTemaVuetifyParaShadowDOM(shadowRoot);
            corrigeStylesheetsVuetifyNoShadowDOMHost(shadowRoot);
            inserirRessParcialNoShadowDOM(shadowRoot);
          }
        }
        corrigeStylesheetsVuetify();
      }, 200);
    });
    function ajustarVuetifyDiv() {
      var _a, _b;
      const vDiv = (_a = mainDiv.value) == null ? void 0 : _a.querySelector(
        "div.pjemrVuetify div.v-application"
      );
      const vDivWrap = (_b = mainDiv.value) == null ? void 0 : _b.querySelector(
        "div.pjemrVuetify div.v-application__wrap"
      );
      if (!vDiv || !vDivWrap) {
        return;
      }
      vDivWrap.style.minHeight = "unset";
      vDiv.style.background = "unset";
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "mainDiv",
        ref: mainDiv,
        class: "pjemrVuetify"
      }, [
        createVNode(unref(VApp), { ref: "vApp" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 512)
      ], 512)), [
        [vShow, mounted2.value]
      ]);
    };
  }
});
const _sfc_main$4 = {
  __name: "VOverlayAlert",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Aviso"
    },
    textoAcaoPrimaria: {
      type: String,
      default: "OK"
    },
    message: {
      type: String,
      default: "Este \u00e9 um aviso para o usu\u00e1rio."
    },
    zIndex: {
      type: Number,
      default: 2e3
    }
  },
  emits: ["update:modelValue", "ao-fechar"],
  setup(__props, { emit: __emit }) {
    const raizOverlay = ref(null);
    const defaultsProv = ref(null);
    onMounted(() => {
      defaultsProv.value = {
        global: {
          attach: raizOverlay.value.getRootNode()
        }
      };
    });
    const props = __props;
    const emit = __emit;
    const visible = ref(props.modelValue);
    function close() {
      visible.value = false;
      emit("ao-fechar");
    }
    watch(
      () => props.modelValue,
      (newValue) => {
        visible.value = newValue;
      }
    );
    watch(visible, (newValue) => {
      if (newValue !== props.modelValue) {
        emit("update:modelValue", newValue);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "raizOverlay",
        ref: raizOverlay
      }, [
        createVNode(VDefaultsProvider, { defaults: defaultsProv.value }, {
          default: withCtx(() => [
            createVNode(VOverlay, {
              modelValue: visible.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
              "z-index": __props.zIndex
            }, {
              default: withCtx(() => [
                createVNode(VDialog, {
                  modelValue: visible.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
                  "max-width": "400",
                  persistent: "",
                  transition: "dialog-transition",
                  scrollable: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.message), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "primary",
                              onClick: close
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.textoAcaoPrimaria), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue", "z-index"])
          ]),
          _: 1
        }, 8, ["defaults"])
      ], 512);
    };
  }
};
const VOverlayAlert = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-26a99ee6"]]);
class GerenciadorOpcoes {
  opcoes = { ...OPCOES_DEFAULT };
  nome = "GerenciadorOpcoes";
  callback;
  constructor(callback) {
    browser$1.storage.onChanged.addListener((mudancas, area) => {
      Depurador$3.inspecionar(
        `[~/utils/vue/${this.nome}] Mudan\u00e7as na \u00e1rea de armazenamento "${area}":`,
        mudancas
      );
      Object.keys(mudancas).forEach((key) => {
        const valor = mudancas[key].newValue;
        this.opcoes[key] = valor;
      });
      if (this.callback) this.callback(this.opcoes);
    });
    this.callback = callback;
    this.obterOpcoes();
  }
  async obterOpcoes() {
    const opcoes = await Armazenamento.obter();
    Object.assign(this.opcoes, opcoes);
    Depurador$3.inspecionar(`[~/services/${this.nome}] Entregando opc\u00f5es: `, this.opcoes);
    if (this.callback) this.callback(this.opcoes);
    return this.opcoes;
  }
  async obterOpcao(opcao) {
    const opcao_ = await Armazenamento.obter(opcao);
    Depurador$3.inspecionar(`[~/services/${this.nome}] Entregando op\u00e7\u00e3o: `, opcao_);
    return opcao_;
  }
  async obterOpcaoComSubKey(dados) {
    const { opcao, objKey } = dados;
    const opcao_ = await Armazenamento.obter(opcao);
    const subopcao = opcao_[opcao] && opcao_[opcao][objKey] ? opcao_[opcao][objKey] : void 0;
    Depurador$3.inspecionar(
      `[~/services/${this.nome}] Entregando subop\u00e7\u00e3o: ${opcao}.${objKey}`,
      subopcao
    );
    return subopcao;
  }
  definirOpcao(dados) {
    Depurador$3.inspecionar(`[~/services/${this.nome}] Armazenando "${dados.opcao}": `, dados.valor);
    Armazenamento.guardar({ [dados.opcao]: dados.valor });
  }
  definirOpcaoFiltrosPerfis(perfil) {
    this.opcoes.filtros.perfilAtivo = perfil;
    Depurador$3.info(`[~/services/${this.nome}] Alterando o perfil ativo para "${perfil}"`);
    Armazenamento.guardar({ filtros: this.opcoes.filtros });
  }
  async definirOpcaoComSubKey(dados) {
    Depurador$3.inspecionar(
      `[~/services/${this.nome}] Armazenando "${dados.opcao}.${dados.objKey}": `,
      dados.valor
    );
    const opcaoValores = this.opcoes[dados.opcao];
    if (opcaoValores) {
      opcaoValores[dados.objKey] = dados.valor;
      await Armazenamento.guardar({ [dados.opcao]: opcaoValores });
      return true;
    } else
      Depurador$3.inspecionar(
        `[~/services/${this.nome}] Erro ao armazentar "${dados.opcao}.${dados.objKey}": op\u00e7\u00e3o pais n\u00e3o existe`,
        [dados.opcao, dados.valor]
      );
    return false;
  }
  atualizarOpcoes(dados) {
    Object.assign(this.opcoes, dados);
    Armazenamento.guardar(this.opcoes);
  }
}
var createFingerprint = () => `uid::${tuid(7)}`;
var isValidConnectionArgs = (args, requiredKeys = ["endpointName", "fingerprint"]) => typeof args === "object" && args !== null && requiredKeys.every((k) => k in args);
var encodeConnectionArgs = (args) => {
  if (!isValidConnectionArgs(args))
    throw new TypeError("Invalid connection args");
  return JSON.stringify(args);
};
var createDeliveryLogger = () => {
  let logs = [];
  return {
    add: (...receipts) => {
      logs = [...logs, ...receipts];
    },
    remove: (message) => {
      logs = typeof message === "string" ? logs.filter((receipt) => receipt.message.transactionId !== message) : logs.filter((receipt) => !message.includes(receipt));
    },
    entries: () => logs
  };
};
var PortMessage = class {
  static toBackground(port2, message) {
    return port2.postMessage(message);
  }
  static toExtensionContext(port2, message) {
    return port2.postMessage(message);
  }
};
var browserPolyfill = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    {
      factory(module);
    }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function(module2) {
    if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
      const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
      const wrapAPIs = (extensionAPIs) => {
        const apiMetadata = {
          "alarms": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "clearAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "bookmarks": {
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getChildren": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getRecent": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getSubTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTree": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeTree": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "browserAction": {
            "disable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "enable": {
              "minArgs": 0,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "getBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getBadgeText": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "openPopup": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setBadgeBackgroundColor": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setBadgeText": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "browsingData": {
            "remove": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "removeCache": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCookies": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeDownloads": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFormData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeHistory": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeLocalStorage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePasswords": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removePluginData": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "settings": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "commands": {
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "contextMenus": {
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "cookies": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAllCookieStores": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "devtools": {
            "inspectedWindow": {
              "eval": {
                "minArgs": 1,
                "maxArgs": 2,
                "singleCallbackArg": false
              }
            },
            "panels": {
              "create": {
                "minArgs": 3,
                "maxArgs": 3,
                "singleCallbackArg": true
              },
              "elements": {
                "createSidebarPane": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            }
          },
          "downloads": {
            "cancel": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "download": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "erase": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFileIcon": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "open": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "pause": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeFile": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "resume": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "extension": {
            "isAllowedFileSchemeAccess": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "isAllowedIncognitoAccess": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "history": {
            "addUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "deleteRange": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "deleteUrl": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getVisits": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "search": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "i18n": {
            "detectLanguage": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAcceptLanguages": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "identity": {
            "launchWebAuthFlow": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "idle": {
            "queryState": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "management": {
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getSelf": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "setEnabled": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "uninstallSelf": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "notifications": {
            "clear": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPermissionLevel": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          },
          "pageAction": {
            "getPopup": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getTitle": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "hide": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setIcon": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "setPopup": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "setTitle": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            },
            "show": {
              "minArgs": 1,
              "maxArgs": 1,
              "fallbackToNoCallback": true
            }
          },
          "permissions": {
            "contains": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "request": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "runtime": {
            "getBackgroundPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getPlatformInfo": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "openOptionsPage": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "requestUpdateCheck": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "sendMessage": {
              "minArgs": 1,
              "maxArgs": 3
            },
            "sendNativeMessage": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "setUninstallURL": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "sessions": {
            "getDevices": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getRecentlyClosed": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "restore": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "storage": {
            "local": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "managed": {
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "sync": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getBytesInUse": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          },
          "tabs": {
            "captureVisibleTab": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "create": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "detectLanguage": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "discard": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "duplicate": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "executeScript": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "getZoom": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getZoomSettings": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goBack": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "goForward": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "highlight": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "insertCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "move": {
              "minArgs": 2,
              "maxArgs": 2
            },
            "query": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "reload": {
              "minArgs": 0,
              "maxArgs": 2
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "removeCSS": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "sendMessage": {
              "minArgs": 2,
              "maxArgs": 3
            },
            "setZoom": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "setZoomSettings": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "update": {
              "minArgs": 1,
              "maxArgs": 2
            }
          },
          "topSites": {
            "get": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "webNavigation": {
            "getAllFrames": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "getFrame": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "webRequest": {
            "handlerBehaviorChanged": {
              "minArgs": 0,
              "maxArgs": 0
            }
          },
          "windows": {
            "create": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "get": {
              "minArgs": 1,
              "maxArgs": 2
            },
            "getAll": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getCurrent": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getLastFocused": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "update": {
              "minArgs": 2,
              "maxArgs": 2
            }
          }
        };
        if (Object.keys(apiMetadata).length === 0) {
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        }
        class DefaultWeakMap extends WeakMap {
          constructor(createItem, items = void 0) {
            super(items);
            this.createItem = createItem;
          }
          get(key) {
            if (!this.has(key)) {
              this.set(key, this.createItem(key));
            }
            return super.get(key);
          }
        }
        const isThenable = (value) => {
          return value && typeof value === "object" && typeof value.then === "function";
        };
        const makeCallback = (promise2, metadata) => {
          return (...callbackArgs) => {
            if (extensionAPIs.runtime.lastError) {
              promise2.reject(new Error(extensionAPIs.runtime.lastError.message));
            } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
              promise2.resolve(callbackArgs[0]);
            } else {
              promise2.resolve(callbackArgs);
            }
          };
        };
        const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
        const wrapAsyncFunction = (name, metadata) => {
          return function asyncFunctionWrapper(target, ...args) {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              if (metadata.fallbackToNoCallback) {
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                  target[name](...args);
                  metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                }
              } else if (metadata.noCallback) {
                target[name](...args);
                resolve();
              } else {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              }
            });
          };
        };
        const wrapMethod = (target, method, wrapper) => {
          return new Proxy(method, {
            apply(targetMethod, thisObj, args) {
              return wrapper.call(thisObj, target, ...args);
            }
          });
        };
        let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
        const wrapObject = (target, wrappers = {}, metadata = {}) => {
          let cache = /* @__PURE__ */ Object.create(null);
          let handlers2 = {
            has(proxyTarget2, prop) {
              return prop in target || prop in cache;
            },
            get(proxyTarget2, prop, receiver) {
              if (prop in cache) {
                return cache[prop];
              }
              if (!(prop in target)) {
                return void 0;
              }
              let value = target[prop];
              if (typeof value === "function") {
                if (typeof wrappers[prop] === "function") {
                  value = wrapMethod(target, target[prop], wrappers[prop]);
                } else if (hasOwnProperty(metadata, prop)) {
                  let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                  value = wrapMethod(target, target[prop], wrapper);
                } else {
                  value = value.bind(target);
                }
              } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                value = wrapObject(value, wrappers[prop], metadata[prop]);
              } else if (hasOwnProperty(metadata, "*")) {
                value = wrapObject(value, wrappers[prop], metadata["*"]);
              } else {
                Object.defineProperty(cache, prop, {
                  configurable: true,
                  enumerable: true,
                  get() {
                    return target[prop];
                  },
                  set(value2) {
                    target[prop] = value2;
                  }
                });
                return value;
              }
              cache[prop] = value;
              return value;
            },
            set(proxyTarget2, prop, value, receiver) {
              if (prop in cache) {
                cache[prop] = value;
              } else {
                target[prop] = value;
              }
              return true;
            },
            defineProperty(proxyTarget2, prop, desc) {
              return Reflect.defineProperty(cache, prop, desc);
            },
            deleteProperty(proxyTarget2, prop) {
              return Reflect.deleteProperty(cache, prop);
            }
          };
          let proxyTarget = Object.create(target);
          return new Proxy(proxyTarget, handlers2);
        };
        const wrapEvent = (wrapperMap) => ({
          addListener(target, listener, ...args) {
            target.addListener(wrapperMap.get(listener), ...args);
          },
          hasListener(target, listener) {
            return target.hasListener(wrapperMap.get(listener));
          },
          removeListener(target, listener) {
            target.removeListener(wrapperMap.get(listener));
          }
        });
        const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onRequestFinished(req) {
            const wrappedReq = wrapObject(
              req,
              {},
              {
                getContent: {
                  minArgs: 0,
                  maxArgs: 0
                }
              }
            );
            listener(wrappedReq);
          };
        });
        let loggedSendResponseDeprecationWarning = false;
        const onMessageWrappers = new DefaultWeakMap((listener) => {
          if (typeof listener !== "function") {
            return listener;
          }
          return function onMessage2(message, sender, sendResponse) {
            let didCallSendResponse = false;
            let wrappedSendResponse;
            let sendResponsePromise = new Promise((resolve) => {
              wrappedSendResponse = function(response) {
                if (!loggedSendResponseDeprecationWarning) {
                  console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                  loggedSendResponseDeprecationWarning = true;
                }
                didCallSendResponse = true;
                resolve(response);
              };
            });
            let result;
            try {
              result = listener(message, sender, wrappedSendResponse);
            } catch (err) {
              result = Promise.reject(err);
            }
            const isResultThenable = result !== true && isThenable(result);
            if (result !== true && !isResultThenable && !didCallSendResponse) {
              return false;
            }
            const sendPromisedResult = (promise2) => {
              promise2.then((msg) => {
                sendResponse(msg);
              }, (error) => {
                let message2;
                if (error && (error instanceof Error || typeof error.message === "string")) {
                  message2 = error.message;
                } else {
                  message2 = "An unexpected error occurred";
                }
                sendResponse({
                  __mozWebExtensionPolyfillReject__: true,
                  message: message2
                });
              }).catch((err) => {
                console.error("Failed to send onMessage rejected reply", err);
              });
            };
            if (isResultThenable) {
              sendPromisedResult(result);
            } else {
              sendPromisedResult(sendResponsePromise);
            }
            return true;
          };
        });
        const wrappedSendMessageCallback = ({
          reject,
          resolve
        }, reply) => {
          if (extensionAPIs.runtime.lastError) {
            if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
              resolve();
            } else {
              reject(new Error(extensionAPIs.runtime.lastError.message));
            }
          } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
            reject(new Error(reply.message));
          } else {
            resolve(reply);
          }
        };
        const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            const wrappedCb = wrappedSendMessageCallback.bind(null, {
              resolve,
              reject
            });
            args.push(wrappedCb);
            apiNamespaceObj.sendMessage(...args);
          });
        };
        const staticWrappers = {
          devtools: {
            network: {
              onRequestFinished: wrapEvent(onRequestFinishedWrappers)
            }
          },
          runtime: {
            onMessage: wrapEvent(onMessageWrappers),
            onMessageExternal: wrapEvent(onMessageWrappers),
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        };
        const settingMetadata = {
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
        apiMetadata.privacy = {
          network: {
            "*": settingMetadata
          },
          services: {
            "*": settingMetadata
          },
          websites: {
            "*": settingMetadata
          }
        };
        return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
      };
      module2.exports = wrapAPIs(chrome);
    } else {
      module2.exports = globalThis.browser;
    }
  });
})(browserPolyfill);
var browserPolyfillExports = browserPolyfill.exports;
const browser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
var createPersistentPort = (name = "") => {
  const fingerprint = createFingerprint();
  let port2;
  let undeliveredQueue = [];
  const pendingResponses = createDeliveryLogger();
  const onMessageListeners = /* @__PURE__ */ new Set();
  const onFailureListeners = /* @__PURE__ */ new Set();
  const handleMessage = (msg, port22) => {
    switch (msg.status) {
      case "undeliverable":
        if (!undeliveredQueue.some((m) => m.message.messageID === msg.message.messageID)) {
          undeliveredQueue = [
            ...undeliveredQueue,
            {
              message: msg.message,
              resolvedDestination: msg.resolvedDestination
            }
          ];
        }
        return;
      case "deliverable":
        undeliveredQueue = undeliveredQueue.reduce((acc, queuedMsg) => {
          if (queuedMsg.resolvedDestination === msg.deliverableTo) {
            PortMessage.toBackground(port22, {
              type: "deliver",
              message: queuedMsg.message
            });
            return acc;
          }
          return [...acc, queuedMsg];
        }, []);
        return;
      case "delivered":
        if (msg.receipt.message.messageType === "message")
          pendingResponses.add(msg.receipt);
        return;
      case "incoming":
        if (msg.message.messageType === "reply")
          pendingResponses.remove(msg.message.messageID);
        onMessageListeners.forEach((cb) => cb(msg.message, port22));
        return;
      case "terminated": {
        const rogueMsgs = pendingResponses.entries().filter((receipt) => msg.fingerprint === receipt.to);
        pendingResponses.remove(rogueMsgs);
        rogueMsgs.forEach(({ message }) => onFailureListeners.forEach((cb) => cb(message)));
      }
    }
  };
  const connect = () => {
    port2 = browser.runtime.connect({
      name: encodeConnectionArgs({
        endpointName: name,
        fingerprint
      })
    });
    port2.onMessage.addListener(handleMessage);
    port2.onDisconnect.addListener(connect);
    PortMessage.toBackground(port2, {
      type: "sync",
      pendingResponses: pendingResponses.entries(),
      pendingDeliveries: [
        ...new Set(undeliveredQueue.map(({ resolvedDestination }) => resolvedDestination))
      ]
    });
  };
  connect();
  return {
    onFailure(cb) {
      onFailureListeners.add(cb);
    },
    onMessage(cb) {
      onMessageListeners.add(cb);
    },
    postMessage(message) {
      PortMessage.toBackground(port2, {
        type: "deliver",
        message
      });
    }
  };
};
var promise;
var getMessagePort = (thisContext, namespace, onMessage2) => promise != null ? promise : promise = new Promise((resolve) => {
  const acceptMessagingPort = (event) => {
    const { data: { cmd, scope, context }, ports } = event;
    if (cmd === "webext-port-offer" && scope === namespace && context !== thisContext) {
      window.removeEventListener("message", acceptMessagingPort);
      ports[0].onmessage = onMessage2;
      ports[0].postMessage("port-accepted");
      return resolve(ports[0]);
    }
  };
  const offerMessagingPort = () => {
    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      if (event.data === "port-accepted") {
        window.removeEventListener("message", acceptMessagingPort);
        return resolve(channel.port1);
      }
      onMessage2 == null ? void 0 : onMessage2(event);
    };
    window.postMessage({
      cmd: "webext-port-offer",
      scope: namespace,
      context: thisContext
    }, "*", [channel.port2]);
  };
  window.addEventListener("message", acceptMessagingPort);
  offerMessagingPort();
});
var usePostMessaging = (thisContext) => {
  let allocatedNamespace;
  let messagingEnabled = false;
  let onMessageCallback;
  let portP;
  return {
    enable: () => messagingEnabled = true,
    onMessage: (cb) => onMessageCallback = cb,
    postMessage: async (msg) => {
      if (!messagingEnabled)
        throw new Error("Communication with window has not been allowed");
      ensureNamespaceSet(allocatedNamespace);
      return (await portP).postMessage(msg);
    },
    setNamespace: (nsps) => {
      if (allocatedNamespace)
        throw new Error("Namespace once set cannot be changed");
      allocatedNamespace = nsps;
      portP = getMessagePort(thisContext, nsps, ({ data: data2 }) => onMessageCallback == null ? void 0 : onMessageCallback(data2));
    }
  };
};
function ensureNamespaceSet(namespace) {
  if (typeof namespace !== "string" || namespace.trim().length === 0) {
    throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s) for message routingwhich is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/;
var parseEndpoint = (endpoint) => {
  const [, context, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
  return {
    context,
    tabId: +tabId,
    frameId: frameId ? +frameId : void 0
  };
};
const commonProperties = [
  {
    property: "name",
    enumerable: false
  },
  {
    property: "message",
    enumerable: false
  },
  {
    property: "stack",
    enumerable: false
  },
  {
    property: "code",
    enumerable: true
  }
];
const toJsonWasCalled = Symbol(".toJSON was called");
const toJSON = (from) => {
  from[toJsonWasCalled] = true;
  const json = from.toJSON();
  delete from[toJsonWasCalled];
  return json;
};
const destroyCircular = ({
  from,
  seen,
  to_,
  forceEnumerable,
  maxDepth,
  depth
}) => {
  const to = to_ || (Array.isArray(from) ? [] : {});
  seen.push(from);
  if (depth >= maxDepth) {
    return to;
  }
  if (typeof from.toJSON === "function" && from[toJsonWasCalled] !== true) {
    return toJSON(from);
  }
  for (const [key, value] of Object.entries(from)) {
    if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
      to[key] = "[object Buffer]";
      continue;
    }
    if (value !== null && typeof value === "object" && typeof value.pipe === "function") {
      to[key] = "[object Stream]";
      continue;
    }
    if (typeof value === "function") {
      continue;
    }
    if (!value || typeof value !== "object") {
      to[key] = value;
      continue;
    }
    if (!seen.includes(from[key])) {
      depth++;
      to[key] = destroyCircular({
        from: from[key],
        seen: [...seen],
        forceEnumerable,
        maxDepth,
        depth
      });
      continue;
    }
    to[key] = "[Circular]";
  }
  for (const { property, enumerable } of commonProperties) {
    if (typeof from[property] === "string") {
      Object.defineProperty(to, property, {
        value: from[property],
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
  }
  return to;
};
function serializeError(value, options = {}) {
  const { maxDepth = Number.POSITIVE_INFINITY } = options;
  if (typeof value === "object" && value !== null) {
    return destroyCircular({
      from: value,
      seen: [],
      forceEnumerable: true,
      maxDepth,
      depth: 0
    });
  }
  if (typeof value === "function") {
    return `[Function: ${value.name || "anonymous"}]`;
  }
  return value;
}
let createNanoEvents = () => ({
  events: {},
  emit(event, ...args) {
    (this.events[event] || []).forEach((i) => i(...args));
  },
  on(event, cb) {
    (this.events[event] = this.events[event] || []).push(cb);
    return () => this.events[event] = (this.events[event] || []).filter((i) => i !== cb);
  }
});
var createEndpointRuntime = (thisContext, routeMessage, localMessage) => {
  const runtimeId = tuid();
  const openTransactions = /* @__PURE__ */ new Map();
  const onMessageListeners = /* @__PURE__ */ new Map();
  const handleMessage = (message) => {
    if (message.destination.context === thisContext && !message.destination.frameId && !message.destination.tabId) {
      const { transactionId, messageID, messageType } = message;
      const handleReply = () => {
        const transactionP = openTransactions.get(transactionId);
        if (transactionP) {
          const { err, data: data2 } = message;
          if (err) {
            const dehydratedErr = err;
            const errCtr = self[dehydratedErr.name];
            const hydratedErr = new (typeof errCtr === "function" ? errCtr : Error)(dehydratedErr.message);
            for (const prop in dehydratedErr)
              hydratedErr[prop] = dehydratedErr[prop];
            transactionP.reject(hydratedErr);
          } else {
            transactionP.resolve(data2);
          }
          openTransactions.delete(transactionId);
        }
      };
      const handleNewMessage = async () => {
        let reply;
        let err;
        let noHandlerFoundError = false;
        try {
          const cb = onMessageListeners.get(messageID);
          if (typeof cb === "function") {
            reply = await cb({
              sender: message.origin,
              id: messageID,
              data: message.data,
              timestamp: message.timestamp
            });
          } else {
            noHandlerFoundError = true;
            throw new Error(`[webext-bridge] No handler registered in '${thisContext}' to accept messages with id '${messageID}'`);
          }
        } catch (error) {
          err = error;
        } finally {
          if (err)
            message.err = serializeError(err);
          handleMessage(__spreadProps(__spreadValues({}, message), {
            messageType: "reply",
            data: reply,
            origin: { context: thisContext, tabId: null },
            destination: message.origin,
            hops: []
          }));
          if (err && !noHandlerFoundError)
            throw reply;
        }
      };
      switch (messageType) {
        case "reply":
          return handleReply();
        case "message":
          return handleNewMessage();
      }
    }
    message.hops.push(`${thisContext}::${runtimeId}`);
    return routeMessage(message);
  };
  return {
    handleMessage,
    endTransaction: (transactionID) => {
      const transactionP = openTransactions.get(transactionID);
      transactionP == null ? void 0 : transactionP.reject("Transaction was ended before it could complete");
      openTransactions.delete(transactionID);
    },
    sendMessage: (messageID, data2, destination = "background") => {
      const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
      const errFn = "Bridge#sendMessage ->";
      if (!endpoint.context) {
        throw new TypeError(`${errFn} Destination must be any one of known destinations`);
      }
      return new Promise((resolve, reject) => {
        const payload = {
          messageID,
          data: data2,
          destination: endpoint,
          messageType: "message",
          transactionId: tuid(),
          origin: { context: thisContext, tabId: null },
          hops: [],
          timestamp: Date.now()
        };
        openTransactions.set(payload.transactionId, { resolve, reject });
        try {
          handleMessage(payload);
        } catch (error) {
          openTransactions.delete(payload.transactionId);
          reject(error);
        }
      });
    },
    onMessage: (messageID, callback) => {
      onMessageListeners.set(messageID, callback);
      return () => onMessageListeners.delete(messageID);
    }
  };
};
var _Stream = class {
  constructor(endpointRuntime2, streamInfo) {
    this.endpointRuntime = endpointRuntime2;
    this.streamInfo = streamInfo;
    this.emitter = createNanoEvents();
    this.isClosed = false;
    this.handleStreamClose = () => {
      if (!this.isClosed) {
        this.isClosed = true;
        this.emitter.emit("closed", true);
        this.emitter.events = {};
      }
    };
    if (!_Stream.initDone) {
      endpointRuntime2.onMessage("__crx_bridge_stream_transfer__", (msg) => {
        const { streamId, streamTransfer, action } = msg.data;
        const stream = _Stream.openStreams.get(streamId);
        if (stream && !stream.isClosed) {
          if (action === "transfer")
            stream.emitter.emit("message", streamTransfer);
          if (action === "close") {
            _Stream.openStreams.delete(streamId);
            stream.handleStreamClose();
          }
        }
      });
      _Stream.initDone = true;
    }
    _Stream.openStreams.set(this.streamInfo.streamId, this);
  }
  get info() {
    return this.streamInfo;
  }
  send(msg) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: msg,
      action: "transfer"
    }, this.streamInfo.endpoint);
  }
  close(msg) {
    if (msg)
      this.send(msg);
    this.handleStreamClose();
    this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: null,
      action: "close"
    }, this.streamInfo.endpoint);
  }
  onMessage(callback) {
    return this.getDisposable("message", callback);
  }
  onClose(callback) {
    return this.getDisposable("closed", callback);
  }
  getDisposable(event, callback) {
    const off = this.emitter.on(event, callback);
    return Object.assign(off, {
      dispose: off,
      close: off
    });
  }
};
var Stream = _Stream;
Stream.initDone = false;
Stream.openStreams = /* @__PURE__ */ new Map();
var createStreamWirings = (endpointRuntime2) => {
  const openStreams = /* @__PURE__ */ new Map();
  const onOpenStreamCallbacks = /* @__PURE__ */ new Map();
  const streamyEmitter = createNanoEvents();
  endpointRuntime2.onMessage("__crx_bridge_stream_open__", (message) => {
    return new Promise((resolve) => {
      const { sender, data: data2 } = message;
      const { channel } = data2;
      let watching = false;
      let off = () => {
      };
      const readyup = () => {
        const callback = onOpenStreamCallbacks.get(channel);
        if (typeof callback === "function") {
          callback(new Stream(endpointRuntime2, __spreadProps(__spreadValues({}, data2), { endpoint: sender })));
          if (watching)
            off();
          resolve(true);
        } else if (!watching) {
          watching = true;
          off = streamyEmitter.on("did-change-stream-callbacks", readyup);
        }
      };
      readyup();
    });
  });
  async function openStream(channel, destination) {
    if (openStreams.has(channel))
      throw new Error("webext-bridge: A Stream is already open at this channel");
    const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
    const streamInfo = { streamId: tuid(), channel, endpoint };
    const stream = new Stream(endpointRuntime2, streamInfo);
    stream.onClose(() => openStreams.delete(channel));
    await endpointRuntime2.sendMessage("__crx_bridge_stream_open__", streamInfo, endpoint);
    openStreams.set(channel, stream);
    return stream;
  }
  function onOpenStreamChannel(channel, callback) {
    if (onOpenStreamCallbacks.has(channel))
      throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    onOpenStreamCallbacks.set(channel, callback);
    streamyEmitter.emit("did-change-stream-callbacks");
  }
  return {
    openStream,
    onOpenStreamChannel
  };
};
var win = usePostMessaging("content-script");
var port = createPersistentPort();
var endpointRuntime = createEndpointRuntime("content-script", (message) => {
  if (message.destination.context === "window")
    win.postMessage(message);
  else
    port.postMessage(message);
});
win.onMessage((message) => {
  message.origin = {
    context: "window",
    tabId: null
  };
  endpointRuntime.handleMessage(message);
});
port.onMessage(endpointRuntime.handleMessage);
port.onFailure((message) => {
  if (message.origin.context === "window") {
    win.postMessage({
      type: "error",
      transactionID: message.transactionId
    });
    return;
  }
  endpointRuntime.endTransaction(message.transactionId);
});
var { sendMessage, onMessage } = endpointRuntime;
createStreamWirings(endpointRuntime);
const contentScript = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onMessage,
  sendMessage
}, Symbol.toStringTag, { value: "Module" }));
async function adiar(tempo = 1) {
  return new Promise((resolve) => setTimeout(resolve, tempo));
}
const _Funcionalidade = class _Funcionalidade {
  async enviarRequisicaoPJE(requisicao, opcoes = null, args) {
    return await sendMessage("requisicaoAPI", {
      endpoint: requisicao,
      opcoes,
      args
    });
  }
  nome = "Funcionalidade [PAI]";
  emIFrame;
  checarOpcoes = { ativada: true };
  logicaChecagemOpcoes;
  elementos = [];
  estilosUrl = DEFINICOES.CONTENT_SCRIPTS.ESTILOS_URL;
  esperar;
  tipoEspera;
  esperarPor;
  //Marca o estado da funcionalidade como ativa ou n\u00e3o
  _isAtiva = false;
  static set elementosDoc(elementos) {
    __privateSet(this, _elementosDoc, elementos);
  }
  static get elementosDoc() {
    return [];
  }
  /**
   * Array de elementos constantes na p\u00e1gina, atualizados a partir da \u00faltima itera\u00e7\u00e3o do mutation observer.
   * Evita o querySelectorAll
   */
  get elementosDoc() {
    return __privateGet(_Funcionalidade, _elementosDoc);
  }
  constructor(nome2, { emIframe: emIframe2 }, { checarOpcoes, alvo, esperar, estilosUrl, logicaChecagemOpcoes }) {
    this.nome = nome2;
    this.emIFrame = emIframe2 === false;
    this.checarOpcoes = checarOpcoes;
    this.logicaChecagemOpcoes = logicaChecagemOpcoes ? logicaChecagemOpcoes : "conjuncao (AND)";
    this.esperar = esperar === true || typeof esperar === "string" || typeof alvo == "boolean" && alvo == false;
    this.elementos = typeof alvo == "boolean" && alvo == false ? [] : this.selecionar(alvo);
    if (typeof esperar === "string") this.tipoEspera = esperar;
    if (this.esperar && (tipoString(alvo) || tipoListaStrings(alvo))) {
      this.esperarPor = Array.isArray(alvo) ? alvo : [alvo];
    } else if (typeof alvo == "boolean" && alvo == false) this.esperarPor = false;
    if (this.elementos.length) this.esperar = false;
    if (estilosUrl) {
      this.estilosUrl = estilosUrl;
    }
  }
  get isAtiva() {
    return this._isAtiva;
  }
  set isAtiva(valor) {
    this._isAtiva = valor;
  }
  selecionar(alvo, talvezElementosDoc) {
    if (typeof alvo == "boolean" && alvo == false) return [];
    if (!alvo) return [document.body];
    if (tipoElementoHtml(alvo) || tipoListaElementosHtml(alvo)) {
      return Array.isArray(alvo) ? alvo : [alvo];
    }
    const elementosDoc = talvezElementosDoc ?? Array.from(document.querySelectorAll("*"));
    const elementosDocLength = elementosDoc.length;
    const elementos = [];
    const seletores = Array.isArray(alvo) ? alvo : [alvo];
    for (let j = 0; j < seletores.length; j++) {
      for (let i = 0; i < elementosDocLength; i++) {
        if (elementosDoc[i].matches && elementosDoc[i].matches(seletores[j])) {
          elementos.push(elementosDoc[i]);
        }
      }
    }
    return elementos;
  }
  obterNome() {
    return this.nome;
  }
  deveAguardarMudancas() {
    return !!this.esperar;
  }
  /**
   * Envia uma mensagem para o background script.
   * Implementa a mensageria simples.
   * @param mensagem mensagem a ser enviada para o background atualmente representa uma ordem
   * @param dados Objeto Json com dados a serem enviados para o background
   * @returns Promise<any> com a resposta do background
   * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage}
   * @see {@link https://developer.chrome.com/docs/extensions/mv3/messaging/}
   */
  async enviarMensagem(mensagem, dados) {
    const resposta = await browser$1.runtime.sendMessage({
      mensagem,
      dados: JSON.stringify(dados)
    });
    return resposta.resposta;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verificarMudancas(contexto, elementosDoc) {
    if (!this.esperar || !this.esperarPor) return;
    this.elementos = this.selecionar(this.esperarPor, elementosDoc);
    this.atualizar(contexto);
  }
  podeAtivar(contexto) {
    if (!contexto.opcoes.ativada) return false;
    if (this.esperar) return false;
    if (!this.checarOpcoes) return true;
    const { opcoes } = contexto;
    switch (this.logicaChecagemOpcoes) {
      case "conjuncao (AND)":
        return contem(opcoes, this.checarOpcoes);
      case "disjuncao (OR)":
        return contemPeloMenosUm(opcoes, this.checarOpcoes);
    }
  }
  atualizar(contexto) {
    if (!this.elementos.length) {
      this.elementos = this.selecionar(this.esperarPor);
      if (!this.elementos.length) return;
    }
    Depurador$3.inspecionar(`${this.nome} -> alvos localizados: `, this.elementos);
    this.esperar = false;
    if (this.podeAtivar(contexto)) {
      this.protocoloAtivar(contexto);
      if (this.tipoEspera === "reativar") this.esperar = true;
    } else {
      this.protocoloDesativar(contexto);
    }
  }
  /**
   * @returns boolean indicando se os elementos da funcionalidade continuam na p\u00e1gina
   */
  verificaPersistencia() {
    return this.elementos.every((elemento) => !!elemento && this.setElementos.has(elemento));
  }
  setElementos = /* @__PURE__ */ new WeakSet();
  /**
   * @see {@link verificaPersistencia}
   * Registra a ativa\u00e7\u00e3o da funcionalidade no elemento
   */
  registrarAtivacao() {
    this.elementos.forEach((elemento) => {
      elemento && this.setElementos.add(elemento);
    });
  }
  /**
   * Verifica se os elementos de tipo de ativa\u00e7\u00e3o "reativar", precisam ser reativados.
   * @returns boolean indicando se a funcionalidade deve ser reativada.
   * Retorna true para as funcionalidades cujos tipos de ativa\u00e7\u00e3o s\u00e3o diferentes de "reativar"
   */
  precisaReativar() {
    if (!this.verificaPersistencia() && this.tipoEspera === "reativar") {
      this.registrarAtivacao();
    } else if (this.verificaPersistencia() && this.tipoEspera === "reativar") {
      return false;
    }
    return true;
  }
  async protocoloAtivar(contexto) {
    try {
      if (!this.precisaReativar()) return;
      await adiar();
      this.ativar(contexto);
      this.isAtiva = true;
      Depurador$3.aviso(`Funcionalidade ${this.nome} ser\u00e1 ativada neste contexto`);
      Depurador$3.inspecionar("Contexto -> ", contexto);
    } catch (e) {
      Depurador$3.erro(`Erro ao ativar funcionalidade: ${this.nome}`);
    }
  }
  protocoloDesativar(contexto) {
    Depurador$3.aviso(`Desativando ${this.nome}...`);
    this.esperar = false;
    try {
      this.desativar(contexto);
      this.isAtiva = false;
    } catch (e) {
      Depurador$3.erro(`Erro ao desativar componente: ${this.nome}`);
    }
  }
};
_elementosDoc = new WeakMap();
// elementos da p\u00e1gina a cada itera\u00e7\u00e3o do mutation observer
__privateAdd(_Funcionalidade, _elementosDoc, []);
__publicField(_Funcionalidade, "c", 0);
let Funcionalidade = _Funcionalidade;
async function mensageriaBackground(mensagem, dados) {
  switch (mensagem) {
    case "guardarSessionStorage":
      if (dados) {
        return await sendMessage("guardarSessionStorage", JSON.stringify(dados));
      } else {
        throw new Error("Dados n\u00e3o informados para guardar na sessionStorage");
      }
    case "obterSessionStorage":
      return JSON.parse(
        await sendMessage(
          "obterSessionStorage",
          (dados ?? {}).chave ?? null
        )
      );
    default:
      return {};
  }
}
const mapeamentoRamo = /* @__PURE__ */ new Map();
mapeamentoRamo.set("federal", ["trf"]);
mapeamentoRamo.set("estadual", ["tj"]);
mapeamentoRamo.set("eleitoral", ["tre(?!inamento)", "tse"]);
mapeamentoRamo.set("trabalho", ["trt", "tst"]);
mapeamentoRamo.set("militar", ["^tjmsp$"]);
mapeamentoRamo.set("cnj", ["cnj"]);
const mapeamentoGrau = /* @__PURE__ */ new Map();
mapeamentoGrau.set("primeiro", ["^pje$", "primeirograu", "1g", "pjepg", "localhost"]);
mapeamentoGrau.set("segundo", [
  "^pje2$",
  "segundograu",
  "2g",
  "2i",
  "tre(?!inamento)",
  "pjesg",
  "^pjerecursal$"
]);
mapeamentoGrau.set("superior", ["^pje.tse.jus.br$", "^tst$", "^www.cnj.jus.br$"]);
async function extrairRamoEGrauDaURL(hostName, pathname) {
  const ramoEGrauMapeado = {
    ramo: null,
    grau: null
  };
  const [tribunal, instalacaoPjePeloSubdomininioHostName] = hostName.split(".").reverse().filter((_a, idx) => idx > 1);
  const [instalacaoPJePeloPathName] = pathname.split("/").filter((_a, idx) => idx > 0);
  if (!emIframe()) {
    mapeamentoRamo.forEach((valores, ramo) => {
      const regexRamo = new RegExp(valores.join("|"), "i");
      switch (tribunal) {
        case "pje":
          if (instalacaoPjePeloSubdomininioHostName.match(regexRamo)) ramoEGrauMapeado.ramo = ramo;
          break;
        default:
          if (tribunal && tribunal.match(regexRamo)) ramoEGrauMapeado.ramo = ramo;
          break;
      }
    });
    mapeamentoGrau.forEach((valores, grau) => {
      const regexGrau = new RegExp(valores.join("|"), "i");
      switch (ramoEGrauMapeado.ramo) {
        case "trabalho":
          if (instalacaoPJePeloPathName.match(regexGrau)) ramoEGrauMapeado.grau = grau;
          break;
        case "cnj":
        case "eleitoral":
        case "federal":
          if (hostName.match(regexGrau)) ramoEGrauMapeado.grau = grau;
          break;
        case "estadual":
        case "militar":
          switch (tribunal) {
            case "pje":
            case "tjce":
            case "tjes":
            case "tjmt":
            case "tjpa":
            case "tjpe":
              if (instalacaoPJePeloPathName.match(regexGrau)) ramoEGrauMapeado.grau = grau;
              break;
            case "tjba":
            case "tjdft":
            case "tjma":
            case "tjmg":
            case "tjpb":
            case "tjrn":
            case "tjro":
            case "tjmsp":
              if (instalacaoPjePeloSubdomininioHostName.match(regexGrau))
                ramoEGrauMapeado.grau = grau;
              break;
          }
          break;
      }
    });
    if (ramoEGrauMapeado.ramo && ramoEGrauMapeado.grau) {
      await mensageriaBackground("guardarSessionStorage", {
        ramoEGrau: ramoEGrauMapeado
      });
      return ramoEGrauMapeado;
    }
  }
  const sessionStorage2 = await mensageriaBackground("obterSessionStorage");
  let resultado;
  if (sessionStorage2 && typeof sessionStorage2 === "string") {
    resultado = JSON.parse(sessionStorage2);
  } else {
    resultado = sessionStorage2;
  }
  if (resultado && resultado.ramoEGrau) {
    return resultado.ramoEGrau;
  } else {
    return { ramo: null, grau: null };
  }
}
async function extrairPapel() {
  if (!emIframe) return "";
  const spanElement = document.querySelector(
    ".hidden-xs.nome-sobrenome.tip-bottom"
  );
  if (spanElement != null) {
    const textoLotacao = spanElement.getAttribute("data-original-title") || "";
    const partesDoTexto = textoLotacao.split("/");
    const papel = partesDoTexto[partesDoTexto.length - 1].trim();
    mensageriaBackground("guardarSessionStorage", {
      papel,
      lotacao: textoLotacao.trim()
    });
    return papel;
  }
  return "";
}
function infoGeralHandler(mensagem) {
  const { currentUser, pjeLegacyUrl, constantes } = mensagem.conteudo;
  MensageriaPJE.pjeLegacyUrl = new URL(pjeLegacyUrl.value).origin;
  MensageriaPJE.setPjeLegacyUrlFull(pjeLegacyUrl.value);
  guardarState({
    infoGeral: {
      currentUser,
      constantes
    }
  });
  mensageriaBackground("obterSessionStorage").then((resposta) => {
    let res = {};
    try {
      if (typeof resposta === "string") {
        res = JSON.parse(resposta);
      } else {
        res = resposta;
      }
    } catch (error) {
      res = res || resposta || {};
      Depurador$3.console.error(error);
    }
    mensageriaBackground("guardarSessionStorage", {
      ...res,
      [MensageriaPJE.pjeLegacyUrlCompleta]: {
        ramo: constantes.TIPO_JUSTICA,
        grau: constantes.INSTANCIA
      }
    }).then(() => {
      sendMessage$1({
        mensagem: "state",
        conteudo: {
          pjeLegacyUrl: MensageriaPJE.pjeLegacyUrlCompleta
        }
      }).then((resposta2) => {
      });
    });
  });
}
function etiquetaRespostaHandler(mensagem) {
  guardarState({
    etiquetas: mensagem.conteudo
  });
}
const MensageriaPJE = function() {
  const etiquetasListeners = /* @__PURE__ */ new Map();
  const tarefasListeners = /* @__PURE__ */ new Map();
  const infoGeralListeners = /* @__PURE__ */ new Map();
  const listenersEspecificos = /* @__PURE__ */ new Map();
  const listenersFuncionalidades = /* @__PURE__ */ new Map();
  let pjeLegacyUrl = "";
  let _pjeLegacyUrlCompleta = "";
  adicionarEtiquetaListener("etiquetas", etiquetaRespostaHandler);
  adicionarInfoGeralListener("infoGeral", infoGeralHandler);
  return {
    get pjeLegacyUrl() {
      return pjeLegacyUrl;
    },
    set pjeLegacyUrl(url) {
      pjeLegacyUrl = url;
    },
    get pjeLegacyUrlCompleta() {
      return _pjeLegacyUrlCompleta;
    },
    setPjeLegacyUrlFull(url) {
      _pjeLegacyUrlCompleta = url;
    },
    /**
     *
     * @param tipo Tipo do componente que receber\u00e1 a mensagem
     * @param acao A\u00e7\u00e3o que o componente deve executar
     * @param conteudo Conte\u00fado da mensagem
     * @param logInfo Se deve logar a mensagem no console
     */
    obterSender(destino) {
      return async function(tipo2, acao, conteudo, logInfo = false) {
        const id = obterIdUnico();
        return new Promise((resolve, reject) => {
          let resolved = false;
          adicionarListenerEspecifico(id, (mensagem) => {
            removerListenerEspecifico(id);
            resolve(mensagem);
            resolved = true;
          });
          setTimeout(() => {
            if (resolved) return;
            removerListenerEspecifico(id);
            reject({
              erro: "timeout"
            });
            Depurador$3.console.warn({
              erro: "timeout",
              origem: "sender",
              tipo: tipo2,
              acao,
              conteudo,
              de: document.location.href,
              para: destino.location.href
            });
          }, MAX_TIMEOUT_MSG);
          destino.postMessage(
            {
              logInfo,
              origem: "PJEMaisR",
              tipo: tipo2,
              mensagem: {
                acao,
                conteudo,
                id
              }
            },
            "*"
          );
        });
      };
    },
    //TODO: documentar
    obterRespondedorAuxiliador(destino) {
      return async function(mensagem) {
        const id = mensagem.id;
        return new Promise((resolve, reject) => {
          let resolved = false;
          adicionarListenerEspecifico(id, (mensagem2) => {
            removerListenerEspecifico(id);
            resolve(!!mensagem2);
            resolved = true;
          });
          setTimeout(() => {
            if (resolved) return;
            removerListenerEspecifico(id);
            reject({
              erro: "timeout"
            });
            Depurador$3.console.warn({
              erro: "timeout",
              origem: "respondedorAuxiliador",
              id,
              de: document.location.href,
              para: destino.location.href
            });
          }, MAX_TIMEOUT_MSG);
          destino.postMessage(
            {
              origem: "PJEMaisR",
              tipo: mensagem.tipo,
              mensagem: {
                acao: mensagem.acao,
                conteudo: mensagem.conteudo,
                id: mensagem.id,
                respostaParaAuxiliador: true
              }
            },
            "*"
          );
        });
      };
    },
    ativar() {
      window.addEventListener("pmr-message", listener);
    },
    desativar() {
      document.removeEventListener("pmr-message", listener);
    },
    adicionarInfoGeralListener,
    adicionarTarefasListener,
    adicionarEtiquetaListener,
    removerInfoGeralListener,
    removerTarefasListener,
    removerEtiquetaListener,
    listenersFuncionalidades: {
      adicionar: function(id, listener2, tipo2) {
        if (listenersFuncionalidades.has(id)) {
          return;
        }
        listenersFuncionalidades.set(id, { listener: listener2, tipo: tipo2 });
      },
      remover: function(id) {
        if (!listenersFuncionalidades.has(id)) {
          return;
        }
        listenersFuncionalidades.delete(id);
      }
    }
  };
  function adicionarListenerEspecifico(id, listener2) {
    if (listenersEspecificos.has(id)) {
      return;
    }
    listenersEspecificos.set(id, listener2);
  }
  function removerListenerEspecifico(id) {
    if (!listenersEspecificos.has(id)) {
      return;
    }
    listenersEspecificos.delete(id);
  }
  function adicionarInfoGeralListener(id, listener2) {
    if (infoGeralListeners.has(id)) {
      return;
    }
    infoGeralListeners.set(id, listener2);
  }
  function removerInfoGeralListener(id) {
    if (!infoGeralListeners.has(id)) {
      return;
    }
    infoGeralListeners.delete(id);
  }
  function adicionarTarefasListener(id, listener2) {
    if (tarefasListeners.has(id)) {
      return;
    }
    tarefasListeners.set(id, listener2);
  }
  function removerTarefasListener(id) {
    if (!tarefasListeners.has(id)) {
      return;
    }
    tarefasListeners.delete(id);
  }
  function adicionarEtiquetaListener(id, listener2) {
    if (etiquetasListeners.has(id)) {
      return;
    }
    etiquetasListeners.set(id, listener2);
  }
  function removerEtiquetaListener(id) {
    if (!etiquetasListeners.has(id)) {
      return;
    }
    etiquetasListeners.delete(id);
  }
  function listener(event) {
    var _a;
    const { tipo: tipo2, mensagem } = event.detail;
    if (mensagem.respostaParaAuxiliador) return;
    const listenerEspecifico = listenersEspecificos.get(((_a = mensagem.conteudo) == null ? void 0 : _a.id) || (mensagem == null ? void 0 : mensagem.id));
    if (listenerEspecifico) return listenerEspecifico(mensagem);
    switch (tipo2) {
      case "etiquetasResposta": {
        etiquetasListeners.forEach((listener2) => {
          try {
            listener2(mensagem);
          } catch (error) {
            Depurador$3.console.error(error);
          }
        });
        break;
      }
      case "tarefasResposta": {
        tarefasListeners.forEach((listener2) => {
          try {
            listener2(mensagem);
          } catch (error) {
            Depurador$3.console.error(error);
          }
        });
        break;
      }
      case "infoGeral": {
        infoGeralListeners.forEach((listener2) => {
          try {
            listener2(mensagem);
          } catch (error) {
            Depurador$3.console.error(error);
          }
        });
        break;
      }
      default: {
        listenersFuncionalidades.forEach((value) => {
          if (value.tipo === tipo2) {
            value.listener(mensagem);
          }
        });
        break;
      }
    }
  }
}();
async function guardarState(state) {
  return sendMessage$1({
    mensagem: "state",
    conteudo: {
      pjeLegacyUrl: MensageriaPJE.pjeLegacyUrl,
      acao: "definir",
      conteudo: state
    }
  });
}
const extrairDeArray = (arrayOriginal) => {
  const resultado = [];
  for (const item of arrayOriginal) {
    if (Array.isArray(item)) {
      resultado.push(...item);
    } else {
      resultado.push(item);
    }
  }
  return resultado;
};
class Orquestrador {
  instaladores = [];
  funcionalidades = [];
  cacheOpcoes;
  observador = void 0;
  static OPCOES_OBSERVADOR = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  };
  ramoEGrau = {
    ramo: null,
    grau: null
  };
  papel = null;
  constructor(instaladores) {
    this.instaladores = instaladores;
  }
  obterContexto(opcoes, ramoEGrau, papel) {
    const href = window.location.href;
    const iframe = emIframe();
    Depurador$3.autorizarEmProducao = opcoes.autorizarLogEmProducao;
    return {
      opcoes,
      href,
      iframe,
      ...ramoEGrau,
      papel,
      mensageriaNativa: this.mensageriaNativa,
      pjeLegacyUrl: this.pjeLegacyUrl,
      currentUser: this.currentUser,
      constantes: this.constantes
    };
  }
  async atualizar(contexto) {
    if (contexto.opcoes.ativada) {
      await this.funcionalidades.forEachAsync(async (funcionalidade) => {
        await adiar();
        if (funcionalidade.podeAtivar && funcionalidade.podeAtivar(contexto)) {
          funcionalidade.atualizar(contexto);
        }
      });
      if (this.observador) this.observador.observe(document.body, Orquestrador.OPCOES_OBSERVADOR);
    } else {
      if (this.observador) this.observador.disconnect();
      await this.funcionalidades.forEachAsync(async (funcionalidade) => {
        await adiar();
        funcionalidade.atualizar(contexto);
      });
    }
  }
  async ouvirMudancas() {
    const subscritores = [];
    const subscritoresDormindo = [];
    const subscritoresDOM = [];
    await this.funcionalidades.forEachAsync(async (funcionalidade) => {
      if (funcionalidade.deveAguardarMudancas()) subscritores.push(funcionalidade);
      if (funcionalidade.aoAlterarDOM) subscritoresDOM.push(funcionalidade);
    });
    const nomes = subscritores.map((subscritor) => subscritor.obterNome());
    const comunicarAlteracaoDOM = async (mudancas) => {
      await subscritoresDOM.forEachAsync(async (subscritor) => {
        subscritor.isAtiva && subscritor.aoAlterarDOM && subscritor.aoAlterarDOM(mudancas);
      });
    };
    Depurador$3.info(`MutationObserver ser\u00e1 iniciado a pedido de ${nomes.join(",")}`);
    let addedNodesCounter = 0;
    let mudancasBuffer = [];
    let timeout = null;
    const getElementsInShadowDOM = (shadowRoot) => {
      const elementosShadow = [];
      const walker = document.createTreeWalker(shadowRoot, NodeFilter.SHOW_ELEMENT);
      while (walker.nextNode()) elementosShadow.push(walker.currentNode);
      return elementosShadow;
    };
    const handleMudancas = () => {
      if (!this.cacheOpcoes) {
        Depurador$3.erro("Estranho... Cache de op\u00e7\u00f5es vazio...");
        return;
      }
      const elementosDoc = [];
      const walker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
      while (walker.nextNode()) {
        elementosDoc.push(walker.currentNode);
        const sdRoot = walker.currentNode.shadowRoot;
        if (sdRoot) elementosDoc.push(...getElementsInShadowDOM(sdRoot));
      }
      Funcionalidade.elementosDoc = elementosDoc;
      if (!subscritores.length && subscritoresDOM.length) {
        comunicarAlteracaoDOM(mudancasBuffer);
        Depurador$3.inspecionar(
          `Nenhum subscritor ativo. MutationObserver mantido apenas para os subscritores ouvindo altera\u00e7\u00f5es no DOM: `,
          subscritoresDOM
        );
        return;
      }
      const contexto = this.obterContexto(this.cacheOpcoes, this.ramoEGrau, this.papel);
      if (!contexto.opcoes.ativada) return;
      Depurador$3.inspecionar(`MutationObserver reportando: `, mudancasBuffer);
      Depurador$3.log(`Ao iniciar, ${subscritores.length} subscritores ativos`);
      for (let i = 0; i < subscritores.length; i++) {
        subscritores[i].verificarMudancas(contexto, elementosDoc);
        if (!subscritores[i].deveAguardarMudancas()) {
          subscritoresDormindo.push(subscritores[i]);
          subscritores.splice(i, 1);
        }
      }
      Depurador$3.log(
        `Ao finalizar, ${subscritores.length} subscritores ativos: ${subscritores.map(
          (subscritor) => subscritor.obterNome()
        )}`
      );
      for (let i = 0; i < subscritoresDormindo.length; i++) {
        if (subscritoresDormindo[i].deveAguardarMudancas()) {
          subscritores.push(subscritoresDormindo[i]);
          subscritoresDormindo.splice(i, 1);
        }
      }
      comunicarAlteracaoDOM(mudancasBuffer);
      if (!subscritores.length && !subscritoresDOM.length) observador.disconnect();
    };
    const observadorHandler = (mudancas) => {
      mudancasBuffer.push(...mudancas);
      for (let i = 0; i < mudancas.length; i++) addedNodesCounter += mudancas[i].addedNodes.length;
      if (addedNodesCounter > 20) {
        timeout && clearTimeout(timeout);
        handleMudancas();
        mudancasBuffer = [];
        addedNodesCounter = 0;
      } else {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
          handleMudancas();
          mudancasBuffer = [];
          addedNodesCounter = 0;
        }, 500);
      }
    };
    const observador = new MutationObserver((mudancas) => {
      observadorHandler(mudancas);
    });
    observador.observe(document.body, Orquestrador.OPCOES_OBSERVADOR);
    subscritores.forEach((subscritor) => {
      if (subscritor instanceof FuncionalidadeVue) {
        if (subscritor.precisaOuvirMudancasSD()) subscritor.ouvirMudancasSD(observador);
      }
    });
    return observador;
  }
  ouvirArmazenamento() {
    browser$1.storage.onChanged.addListener((mudancas, area) => {
      Depurador$3.inspecionar(`Mudan\u00e7as na \u00e1rea de armazenamento "${area}":`, mudancas);
      Armazenamento.obter(null).then((opcoes) => {
        const _opcoes = OPCOES_DEFAULT;
        Object.assign(_opcoes, opcoes);
        this.cacheOpcoes = opcoes;
        const contexto = this.obterContexto(_opcoes, this.ramoEGrau, this.papel);
        this.atualizar(contexto);
      });
    });
  }
  async iniciar() {
    MensageriaPJE.ativar();
    let fallback = true;
    if (this.verificaPresenteHref(DEFINICOES.HREFS.PAINEL_USUARIO, window.location.href)) {
      MensageriaPJE.adicionarInfoGeralListener("infoGeralOrquestrador", (mensagem) => {
        if (fallback) {
          fallback = false;
          this.protocoloIniciar(mensagem);
        }
      });
      setTimeout(() => {
        if (fallback) {
          fallback = false;
          MensageriaPJE.removerInfoGeralListener("infoGeralOrquestrador");
          this.protocoloIniciar();
        }
      }, 4e3);
    } else {
      this.protocoloIniciar();
    }
  }
  pjeLegacyUrl = "";
  currentUser = null;
  constantes = null;
  mensageriaNativa = false;
  protocoloIniciarComMensageria(mensagemPJE) {
    if (mensagemPJE.acao === "infoInit") {
      try {
        const { currentUser, pjeLegacyUrl, constantes } = mensagemPJE.conteudo;
        this.pjeLegacyUrl = pjeLegacyUrl.value ?? "";
        this.currentUser = currentUser;
        this.constantes = constantes;
        this.ramoEGrau = {
          ramo: constantes.TIPO_JUSTICA,
          grau: constantes.INSTANCIA
        };
        this.mensageriaNativa = !!this.pjeLegacyUrl && !!this.currentUser && !!this.constantes;
      } catch (e) {
        Depurador$3.console.error(
          "[ORQUESTRADOR][protocoloIniciar] Erro ao extrair informa\u00e7\u00f5es do PJE:",
          e
        );
      }
    }
  }
  async protocoloIniciar(mensagemPJE) {
    this.ramoEGrau = await extrairRamoEGrauDaURL(window.location.hostname, window.location.pathname);
    this.papel = await extrairPapel();
    if (mensagemPJE) {
      let grau = null;
      let ramo = null;
      const constantes = mensagemPJE.conteudo.CONSTANTES;
      if (!constantes || !constantes.INSTANCIA) {
        grau = this.ramoEGrau.grau;
      } else {
        grau = constantes.INSTANCIA === "2" ? "segundo" : "primeiro";
        switch (constantes.TIPO_JUSTICA) {
          case "JF": {
            ramo = "federal";
            break;
          }
          case "JC": {
            ramo = "estadual";
            break;
          }
          case "JE": {
            ramo = "eleitoral";
            break;
          }
          case "JM": {
            ramo = "militar";
            break;
          }
          case "JT": {
            ramo = "trabalho";
            break;
          }
        }
        ramo = ramo ?? this.ramoEGrau.ramo;
      }
      browser$1.storage.local.set({
        ramoEGrau: {
          ramo,
          grau
        }
      });
      this.protocoloIniciarComMensageria(mensagemPJE);
    }
    Armazenamento.obter(null).then(async (opcoes) => {
      if (!opcoes.ativada) return;
      Depurador$3.sucesso("[Pje+R] Orquestrador de scripts de conte\u00fado iniciado!");
      Depurador$3.inspecionar("Configura\u00e7\u00e3o:", opcoes);
      this.cacheOpcoes = opcoes;
      const contexto = this.obterContexto(opcoes, this.ramoEGrau, this.papel);
      await this.instaladores.forEachAsyncOrdered(async (instalador) => {
        const funcionalidade = instalador.instalar(contexto);
        if (funcionalidade !== null) this.funcionalidades.push(funcionalidade);
        return adiar();
      });
      if (this.funcionalidades.length) {
        this.observador = await this.ouvirMudancas() || void 0;
        this.ouvirArmazenamento();
      }
    });
  }
  verificaPresenteHref(checarHref, href) {
    if (checarHref === void 0) return true;
    if (checarHref === null) {
      return false;
    }
    let padroesParaChecar;
    if (Array.isArray(checarHref)) {
      padroesParaChecar = extrairDeArray(checarHref);
    } else {
      padroesParaChecar = [checarHref];
    }
    let resultado = false;
    padroesParaChecar.some((padrao) => {
      if (padrao instanceof RegExp) {
        if (padrao.test(href)) resultado = true;
      } else if (typeof padrao === "string") {
        if (href.includes(padrao)) resultado = true;
      }
    });
    return resultado;
  }
}
class FuncionalidadeVue extends Funcionalidade {
  component;
  componentes = [];
  opcoesAtivacao;
  tagRaiz = "div";
  posicaoRelacaoAlvo = "beforeend";
  usarVuetify = false;
  classesRaiz = "";
  observarMudancasShadowDOM = false;
  observadorDoOrquestrador;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
    this.opcoesAtivacao = opcoesAtivacao2;
    const {
      componente,
      tagRaiz,
      posicaoRelacaoAlvo,
      usarVuetify,
      classesRaiz,
      observarMudancasShadowDOM
    } = opcoesInstalacao2;
    this.component = componente;
    tagRaiz && (this.tagRaiz = tagRaiz);
    posicaoRelacaoAlvo && (this.posicaoRelacaoAlvo = posicaoRelacaoAlvo);
    classesRaiz && (this.classesRaiz = classesRaiz);
    this.usarVuetify = !!usarVuetify;
    this.observarMudancasShadowDOM = !!observarMudancasShadowDOM;
  }
  inspecionar() {
    Depurador$3.inspecionar(`${this.nome} -> componentes instalados: `, this.componentes);
  }
  // Na instala\u00e7\u00e3o, o componente tem a op\u00e7\u00e3o de receber refer\u00eancias
  // para o elemento externo no qual o shadow-dom est\u00e1 apoiado (container),
  // o shadow-root (shadowRoot) e o elemento-raiz interno (root).
  // Para tanto, o componente deve implementar inject('container'),
  // inject('shadowRoot') e inject('root').
  // Para entender melhor, veja:
  // - a implementa\u00e7\u00e3o de 'montarComponente'
  // - https://v3.vuejs.org/guide/component-provide-inject.html#provide-inject
  instalarComponente() {
    this.elementos.forEach((elementoAlvo, index) => {
      const nome2 = `${this.nome} ${index + 1}`;
      const id = nome2.toLowerCase().replaceAll(" ", "-");
      const opcoesMontagem = {
        componente: this.component,
        id,
        elementoAlvo,
        tagRaiz: this.tagRaiz,
        estilosUrl: this.estilosUrl,
        posicaoRelacaoAlvo: this.posicaoRelacaoAlvo,
        usarVuetify: this.usarVuetify,
        classesRaiz: this.classesRaiz
      };
      const [container, app, instance, shadowDOM] = montarComponenteVueNoShadowDOM(opcoesMontagem);
      const iComp = {
        container,
        app,
        instance,
        elementoAlvo,
        index
      };
      this.componentes.push(iComp);
      if (shadowDOM && this.observarMudancasShadowDOM && this.observadorDoOrquestrador)
        this.observadorDoOrquestrador.observe(shadowDOM, Orquestrador.OPCOES_OBSERVADOR);
      Depurador$3.sucesso(`${nome2} no DOM!`);
    });
    this.inspecionar();
  }
  instalarComponenteAuxiliar(opcoesInstalacaoAuxiliar) {
    this.componentes.map((c) => c.elementoAlvo).forEach((elementoAlvo, index) => {
      const nome2 = `${this.nome} ${opcoesInstalacaoAuxiliar.nome} ${index + 1}`;
      const id = nome2.toLowerCase().replaceAll(" ", "-");
      const opcoesMontagem = {
        componente: opcoesInstalacaoAuxiliar.componente,
        id,
        elementoAlvo,
        tagRaiz: opcoesInstalacaoAuxiliar.tagRaiz || this.tagRaiz,
        estilosUrl: opcoesInstalacaoAuxiliar.estilosUrl || this.estilosUrl,
        posicaoRelacaoAlvo: opcoesInstalacaoAuxiliar.posicaoRelacaoAlvo || "beforeend",
        usarVuetify: opcoesInstalacaoAuxiliar.usarVuetify || this.usarVuetify,
        classesRaiz: opcoesInstalacaoAuxiliar.classesRaiz || this.classesRaiz
      };
      const [container, app, instance] = montarComponenteVueNoShadowDOM(opcoesMontagem);
      const iComp = {
        container,
        app,
        instance,
        elementoAlvo,
        index,
        posicaoRelacaoAlvo: opcoesMontagem == null ? void 0 : opcoesMontagem.posicaoRelacaoAlvo
      };
      this.componentes[index].auxiliares ??= [];
      this.componentes[index].auxiliares.push(iComp);
      Depurador$3.sucesso(`${nome2} auxiliar no DOM!`);
    });
    this.inspecionar();
  }
  // Este m\u00e9todo reccebe opcionalmente um callback,
  // que ser\u00e1 invocado para cada componente
  ativar(contexto) {
    this.instalarOuReinserir();
    const { opcoes } = contexto;
    this.componentes.forEach((componente, index) => {
      var _a;
      const nome2 = `${this.nome} #${index + 1}`;
      if (typeof ((_a = componente.instance) == null ? void 0 : _a.atualizarOpcoes) === "function") {
        Depurador$3.inspecionar(`Atualizando opcoes de ${nome2}: `, opcoes);
        componente.instance.atualizarOpcoes(opcoes);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  instalarOuReinserir() {
    var _a, _b;
    if (!this.componentes.length) {
      this.instalarComponente();
      return;
    } else if (this.tipoEspera === "reativar") {
      for (const componente of this.componentes) {
        if (document.querySelector(`#${(_a = componente.container) == null ? void 0 : _a.id}`) === null) {
          this.reinsere(componente);
        }
        if (componente == null ? void 0 : componente.auxiliares)
          for (const componenteAuxiliar of componente.auxiliares) {
            if (document.querySelector(`#${(_b = componenteAuxiliar.container) == null ? void 0 : _b.id}`) === null) {
              this.reinsere(componente, componenteAuxiliar);
            }
          }
      }
    }
  }
  reinsere(componente, componenteAuxiliar) {
    if (componenteAuxiliar == null ? void 0 : componenteAuxiliar.container)
      this.elementos[componente.index].insertAdjacentElement(
        componenteAuxiliar.posicaoRelacaoAlvo || this.posicaoRelacaoAlvo,
        componenteAuxiliar.container
      );
    else if (componente.container)
      this.elementos[componente.index].insertAdjacentElement(
        this.posicaoRelacaoAlvo,
        componente.container
      );
  }
  desativar(callbackOrContexto) {
    var _a, _b, _c;
    if (typeof callbackOrContexto === "function") {
      while (this.componentes.length) {
        const componente = this.componentes.shift();
        if (componente) {
          if (tipoFuncao(callbackOrContexto)) callbackOrContexto(componente);
          (_a = componente.app) == null ? void 0 : _a.unmount();
          delete componente.app;
          (_c = (_b = componente.container) == null ? void 0 : _b.parentNode) == null ? void 0 : _c.removeChild(componente == null ? void 0 : componente.container);
          delete componente.container;
        }
      }
      this.inspecionar();
    }
  }
  precisaOuvirMudancasSD() {
    return this.observarMudancasShadowDOM;
  }
  ouvirMudancasSD(observadorDoOrquestrador) {
    this.observadorDoOrquestrador = observadorDoOrquestrador;
    this.observarMudancasSD();
  }
  observarMudancasSD() {
    if (!this.observadorDoOrquestrador) return;
    for (const componente of this.componentes)
      componente.shadowDOM && this.observadorDoOrquestrador.observe(
        componente.shadowDOM,
        Orquestrador.OPCOES_OBSERVADOR
      );
  }
}
class Instalador {
  nome = "Funcionalidade [PAI]";
  opcoesInstalacao;
  opcoesAtivacao;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    this.nome = nome2;
    this.opcoesInstalacao = opcoesInstalacao2;
    this.opcoesAtivacao = opcoesAtivacao2;
  }
  /**
   * Verifica se a funcionalidade pode ser instalada no contexto atual
   * @param contexto @see {@link IContexto}
   * @returns boolean
   */
  podeInstalar(contexto) {
    const { checarHref, emIframe: emIframe2 } = this.opcoesInstalacao;
    const { href, iframe } = contexto;
    if (!this.verificaPresenteFrame(emIframe2, iframe)) return false;
    if (!this.verificaPresenteHref(checarHref, href)) return false;
    return true;
  }
  /**
   * Verifica se a funcionalidade pode ser ativada no href atual
   * @param checarHref @see {@link IOpcoesInstalacao['checarHref']}
   * @param href @see {@link IContexto['href']}
   * @returns boolean
   */
  verificaPresenteHref(checarHref, href) {
    if (checarHref === void 0) return true;
    if (checarHref === null) {
      Depurador$3.log(`Funcionalidade "${this.nome}" n\u00e3o ser\u00e1 instalada pois checarHref === null`);
      return false;
    }
    let padroesParaChecar;
    if (Array.isArray(checarHref)) {
      padroesParaChecar = extrairDeArray(checarHref);
    } else {
      padroesParaChecar = [checarHref];
    }
    let resultado = false;
    padroesParaChecar.some((padrao) => {
      if (padrao instanceof RegExp) {
        if (padrao.test(href)) resultado = true;
      } else if (typeof padrao === "string") {
        if (href.includes(padrao)) resultado = true;
      }
    });
    return resultado;
  }
  verificaPresenteFrame(emIframe2, iframe) {
    if (emIframe2 === "todos") return true;
    if (emIframe2 === void 0 && !iframe) return true;
    const resultado = emIframe2 === iframe;
    if (!resultado) {
      Depurador$3.log(`Funcionalidade "${this.nome}" n\u00e3o deve ser instalada neste iframe`);
    }
    return resultado;
  }
  instalar(contexto) {
    const instalar = this.podeInstalar(contexto);
    if (!instalar) {
      Depurador$3.inspecionar(
        `Funcionalidade ${this.nome} n\u00e3o ser\u00e1 instalada no presente contexto`,
        contexto
      );
      return null;
    }
    Depurador$3.inspecionar(
      `Funcionalidade ${this.nome} ser\u00e1 instalada no presente contexto`,
      contexto
    );
    const construtor = this.opcoesInstalacao.funcionalidade || Funcionalidade;
    const funcionalidade = new construtor(this.nome, this.opcoesInstalacao, this.opcoesAtivacao);
    funcionalidade.atualizar(contexto);
    return funcionalidade;
  }
}
class InstaladorVue extends Instalador {
  opcoesInstalacao;
  opcoesAtivacao;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
    this.opcoesInstalacao = opcoesInstalacao2;
    this.opcoesAtivacao = opcoesAtivacao2;
  }
  instalar(contexto) {
    const instalar = this.podeInstalar(contexto);
    Depurador$3.inspecionar("Op\u00e7\u00f5es de instala\u00e7\u00e3o: ", this.opcoesInstalacao);
    if (!instalar) {
      Depurador$3.inspecionar(
        `Funcionalidade-Vue ${this.nome} n\u00e3o ser\u00e1 instalada no presente contexto`,
        contexto
      );
      return null;
    }
    Depurador$3.inspecionar(
      `Funcionalidade-Vue ${this.nome} ser\u00e1 instalada no presente contexto`,
      contexto
    );
    const construtor = this.opcoesInstalacao.funcionalidade || FuncionalidadeVue;
    const funcionalidade = new construtor(this.nome, this.opcoesInstalacao, this.opcoesAtivacao);
    funcionalidade.atualizar(contexto);
    return funcionalidade;
  }
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent$1({
  __name: "VServico",
  setup(__props) {
    onMounted(() => {
      var _a;
      Depurador$3.aviso(`Servi\u00e7o ${(_a = Servico.getInstance()) == null ? void 0 : _a.obterNome()}: montado`);
      return;
    });
    onBeforeUnmount(() => {
      var _a;
      Depurador$3.aviso(`Servi\u00e7o ${(_a = Servico.getInstance()) == null ? void 0 : _a.obterNome()}: desmontado`);
      return;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(_sfc_main$5), {
        "pjemr-servico": (_a = unref(Servico).getInstance()) == null ? void 0 : _a.obterNome()
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["pjemr-servico"]);
    };
  }
});
const VServico = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5542ccd1"]]);
class Servico extends FuncionalidadeVue {
  static selfInstance;
  subscritores = [];
  opcoesInstalacao;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    opcoesInstalacao2.componente ||= VServico;
    opcoesAtivacao2.alvo = !opcoesInstalacao2.possuiInterfaceUsuario ? void 0 : opcoesAtivacao2.alvo;
    const opcoesInstalacaoVue = opcoesInstalacao2;
    opcoesInstalacaoVue.usarVuetify = true;
    super(nome2, opcoesInstalacaoVue, opcoesAtivacao2);
    this.opcoesInstalacao = opcoesInstalacao2;
    this.tagRaiz = "pjemr-servico";
    Servico.selfInstance = this;
  }
  podeAtivar(contexto) {
    if (!this.opcoesInstalacao.possuiInterfaceUsuario) return true;
    else return super.podeAtivar(contexto);
  }
  ativar(contexto) {
    if (!this.opcoesInstalacao.possuiInterfaceUsuario) return;
    super.ativar(contexto);
  }
  static getInstance() {
    return Servico.selfInstance;
  }
  subscreverNoServico(funcionalidade) {
    this.subscritores.push(funcionalidade);
    return true;
  }
}
class InstaladorServico extends InstaladorVue {
  opcoesInstalacaoServico;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    opcoesInstalacao2.componente ||= VServico;
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
    this.opcoesInstalacaoServico = opcoesInstalacao2;
    this.opcoesInstalacao = opcoesInstalacao2;
    this.opcoesAtivacao = opcoesAtivacao2;
  }
  podeInstalar(contexto) {
    if (!this.opcoesInstalacaoServico.possuiInterfaceUsuario) return true;
    else return super.podeInstalar(contexto);
  }
  instalar(contexto) {
    const instalar = this.podeInstalar(contexto);
    Depurador$3.inspecionar("Op\u00e7\u00f5es de instala\u00e7\u00e3o: ", this.opcoesInstalacao);
    if (!instalar) {
      Depurador$3.inspecionar(
        `Funcionalidade-Vue ${this.nome} n\u00e3o ser\u00e1 instalada no presente contexto`,
        contexto
      );
      return null;
    }
    Depurador$3.inspecionar(
      `Funcionalidade-Vue ${this.nome} ser\u00e1 instalada no presente contexto`,
      contexto
    );
    const construtor = this.opcoesInstalacaoServico.funcionalidade || Servico;
    const servico = new construtor(this.nome, this.opcoesInstalacaoServico, this.opcoesAtivacao);
    servico.atualizar(contexto);
    return servico;
  }
}
class ServicoExemplo extends Servico {
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
  }
}
const nome$2 = "Servico exemplo";
const opcoesInstalacao$2 = {
  possuiInterfaceUsuario: false,
  funcionalidade: ServicoExemplo
};
const opcoesAtivacao$2 = {};
new InstaladorServico(
  nome$2,
  opcoesInstalacao$2,
  opcoesAtivacao$2
);
class StoreTabsMultiopcoes {
  static instance;
  state = reactive({
    tabs: [],
    _tabModel: null,
    acaoPesquisar: {
      loading: false,
      disabled: false
    },
    acaoLimpar: {
      loading: false,
      disabled: false
    }
  });
  constructor() {
    this.state.tabs = [{ titulo: "PJe", value: "filtro-pje" }];
  }
  static getInstance() {
    if (!StoreTabsMultiopcoes.instance) {
      StoreTabsMultiopcoes.instance = new StoreTabsMultiopcoes();
    }
    return StoreTabsMultiopcoes.instance;
  }
  set tabModel(id) {
    if (typeof id === "string") {
      this.state._tabModel = id;
    } else if (id === -1) {
      this.state._tabModel = null;
    }
  }
  get tabModel() {
    return this.state._tabModel;
  }
  get tabs() {
    return this.state.tabs;
  }
  resetar() {
    this.state.tabs.splice(0, this.state.tabs.length);
    this.state._tabModel = null;
  }
  fecharTab(id) {
    const index = this.state.tabs.findIndex((tab) => tab.value === id);
    if (index >= 0) {
      this.state.tabs.splice(index, 1);
      if (!this.state.tabs.length) this.state._tabModel = null;
    }
  }
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent$1({
  __name: "VActionButtons",
  setup(__props) {
    const instanciaServico = TabsMultiopcoesListaTarefa.getInstance();
    const store = StoreTabsMultiopcoes.getInstance();
    onMounted(() => {
      return;
    });
    async function acaoPesquisar() {
      const button = document.querySelector("#filtro-tarefas fieldset div:last-child .btnPesquisar");
      store.state.acaoPesquisar.loading = true;
      store.state.acaoLimpar.disabled = true;
      const resultado = await (instanciaServico == null ? void 0 : instanciaServico.acaoPesquisar());
      resultado && (button == null ? void 0 : button.dispatchEvent(new Event("click")));
      store.state.acaoPesquisar.loading = false;
      store.state.acaoLimpar.disabled = false;
    }
    async function acaoLimpar() {
      const button = document.querySelector("#filtro-tarefas fieldset div:last-child .btn-default");
      store.state.acaoLimpar.loading = true;
      store.state.acaoPesquisar.disabled = true;
      const resultado = await (instanciaServico == null ? void 0 : instanciaServico.acaoLimpar());
      resultado && (button == null ? void 0 : button.dispatchEvent(new Event("click")));
      store.state.acaoLimpar.loading = false;
      store.state.acaoPesquisar.disabled = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$5), { id: "pmr-vuetify-div-main-actions-buttons" }, {
        default: withCtx(() => [
          createVNode(VContainer, null, {
            default: withCtx(() => [
              createVNode(VBtn, {
                color: "primary",
                elevation: "4",
                class: "mr-2 text-uppercase",
                loading: unref(store).state.acaoPesquisar.loading,
                disabled: unref(store).state.acaoPesquisar.disabled,
                onClick: acaoPesquisar
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { left: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(mdiMagnify)), 1)
                    ]),
                    _: 1
                  }),
                  _cache[0] || (_cache[0] = createTextVNode(" Pesquisar "))
                ]),
                _: 1
              }, 8, ["loading", "disabled"]),
              createVNode(VBtn, {
                elevation: "4",
                class: "ml-2 text-uppercase",
                loading: unref(store).state.acaoLimpar.loading,
                disabled: unref(store).state.acaoLimpar.disabled,
                onClick: acaoLimpar
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, { left: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(mdiEraser)), 1)
                    ]),
                    _: 1
                  }),
                  _cache[1] || (_cache[1] = createTextVNode("Limpar "))
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const sobreporEstilosPJe = ":root {\n  --altura-painel-filtros-pje-inicial: 100vh;\n}\n\nfiltro-tarefas[pmr-filtros] #filtro-tarefas {\n  margin-top: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\nfiltro-tarefas[pmr-filtros] #filtro-tarefas fieldset > div:last-child {\n  display: none !important;\n}\n\n#pmr-filtro-pje-conteudo fieldset > div {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n#pmr-filtro-pje-conteudo fieldset > div select,\n#pmr-filtro-pje-conteudo fieldset > div input {\n  border: 1px solid #ccc !important;\n  border-radius: 2px !important;\n  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.3) !important;\n  outline: none !important;\n}\n#pmr-filtro-pje-conteudo fieldset > div select,\n#pmr-filtro-pje-conteudo fieldset > div input:not([type=checkbox]) {\n  width: 95%;\n}\n\n#filtro-tarefas form fieldset {\n  transition: max-height 0.5s linear;\n  max-height: var(--altura-painel-filtros-pje-inicial);\n  overflow: hidden;\n}\n#filtro-tarefas[pmr-sem-form-pje] form fieldset {\n  transition: max-height 0.5s linear;\n  max-height: 0px;\n}";
class TabsMultiopcoesListaTarefa extends Servico {
  store;
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
    this.store = StoreTabsMultiopcoes.getInstance();
  }
  ativar(contexto) {
    var _a;
    super.ativar(contexto);
    adicionarEstilosAoHead(sobreporEstilosPJe);
    const elFiltroTarefas = document.querySelector("filtro-tarefas");
    if (elFiltroTarefas) {
      (_a = elFiltroTarefas.parentElement) == null ? void 0 : _a.setAttribute("pmr-override-pje-style", "");
      elFiltroTarefas.setAttribute("pmr-filtros", "");
    }
  }
  desativar(callbackOrContexto) {
    super.desativar(callbackOrContexto);
  }
  instalarComponente() {
    super.instalarComponente();
    this.instalarComponenteAuxiliar({
      componente: _sfc_main$2,
      nome: "bot\u00f5es de acao",
      posicaoRelacaoAlvo: "afterend",
      usarVuetify: true
    });
  }
  /**
   * NOTA: No contexto de uso desse servi\u00e7o, o angular n\u00e3o deleta
   * o componente principal vinculado a este servi\u00e7o. Logo, para
   * aproveitar a funcionalidade da calsse super, uma interven\u00e7\u00e3o
   * ara remover manualmente o componente principal
   * @override
   */
  instalarOuReinserir() {
    var _a;
    this.store.tabModel = "filtro-pje";
    for (const componente of this.componentes) {
      const docElement = document.querySelector(
        `#${(_a = componente.container) == null ? void 0 : _a.id}`
      );
      if (docElement !== null) docElement.remove();
    }
    super.instalarOuReinserir();
  }
  subscreverNoServico(funcionalidade) {
    super.subscreverNoServico(funcionalidade);
    const tabDef = funcionalidade.obterDefinicaoTab();
    this.store.tabs.push(tabDef);
    funcionalidade.sincronizarAlvos(`#pmr-${tabDef.value}-conteudo`);
    return true;
  }
  async acaoPesquisar() {
    const subscritores = this.subscritores;
    const promises = subscritores.map((subscritor) => subscritor.acaoPesquisar());
    const resultados = await Promise.all(promises);
    if (resultados.some((resultado) => resultado === false)) {
      return false;
    }
    return true;
  }
  async acaoLimpar() {
    const subscritores = this.subscritores;
    const promises = subscritores.map((subscritor) => subscritor.acaoLimpar());
    const resultados = await Promise.all(promises);
    if (resultados.some((resultado) => resultado === false)) {
      return false;
    }
    return true;
  }
}
const _hoisted_1 = ["title"];
const _hoisted_2 = {
  key: 0,
  id: "pmr-filtro-pje-conteudo",
  style: { "min-height": "20px" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  __name: "VTabsMultiopcoesListaTarefas",
  setup(__props) {
    const store = StoreTabsMultiopcoes.getInstance();
    onMounted(() => {
      return;
    });
    const once = ref(false);
    const onTabChange = (a) => {
      var _a, _b;
      if (!once.value) {
        const fieldsetHeight = document.querySelector("#filtro-tarefas form fieldset");
        if (!fieldsetHeight || fieldsetHeight.offsetHeight == 0) return;
        const rootElement = document.documentElement;
        rootElement.style.setProperty(
          "--altura-painel-filtros-pje-inicial",
          `${fieldsetHeight.offsetHeight}px`
        );
        once.value = true;
      }
      if (a != "filtro-pje")
        (_a = document.getElementById("filtro-tarefas")) == null ? void 0 : _a.setAttribute("pmr-sem-form-pje", "");
      else (_b = document.getElementById("filtro-tarefas")) == null ? void 0 : _b.removeAttribute("pmr-sem-form-pje");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VServico, null, {
        default: withCtx(() => [
          createVNode(VTabs, {
            modelValue: unref(store).tabModel,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => unref(store).tabModel = $event),
              onTabChange
            ],
            "bg-color": "rgb(255, 145, 44)",
            "slider-color": "#0084ac",
            density: "comfortable",
            "center-active": ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).tabs, (tab) => {
                return openBlock(), createBlock(VTab, {
                  id: "pmr_" + tab.value + "_menu",
                  key: tab.value,
                  value: tab.value,
                  "max-width": "250px",
                  color: "grey-lighten-5"
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      style: { "max-width": "200px", "overflow": "hidden" },
                      title: tab.titulo,
                      class: "tab-titulo"
                    }, toDisplayString(tab.titulo), 9, _hoisted_1)
                  ]),
                  _: 2
                }, 1032, ["id", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(VWindow, {
            modelValue: unref(store).tabModel,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).tabModel = $event)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).tabs, (tab) => {
                return openBlock(), createBlock(VWindowItem, {
                  key: tab.value,
                  value: tab.value
                }, {
                  default: withCtx(() => [
                    tab.value === "filtro-pje" ? (openBlock(), createElementBlock("div", _hoisted_2)) : (openBlock(), createBlock(VSheet, {
                      key: 1,
                      id: `pmr-${tab.value}-conteudo`
                    }, null, 8, ["id"]))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
const VTabsMultiopcoesListaTarefas = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-29393f06"]]);
const nome$1 = "Tabs Multiop\u00e7\u00f5es lista tarefas";
const opcoesInstalacao$1 = {
  possuiInterfaceUsuario: true,
  funcionalidade: TabsMultiopcoesListaTarefa,
  checarHref: DEFINICOES.HREFS.PAINEL_USUARIO,
  emIframe: "todos",
  componente: VTabsMultiopcoesListaTarefas,
  posicaoRelacaoAlvo: "beforebegin",
  observarMudancasShadowDOM: true
};
const opcoesAtivacao$1 = {
  checarOpcoes: { listaTarefaFiltros: true },
  logicaChecagemOpcoes: "disjuncao (OR)",
  alvo: ["#filtro-tarefas form"],
  esperar: "reativar"
};
new InstaladorServico(
  nome$1,
  opcoesInstalacao$1,
  opcoesAtivacao$1
);
const overlayServicoStore = reactive({
  overlay: false,
  mensagem: "",
  title: "PJe+R",
  textoAcaoPrimaria: "OK"
});
const Depurador3 = new Depurador2({
  recurso: "overlay-servico",
  adicional: "event bus"
});
const EvBusOverlayService = reactive({
  // O Map agora \u00e9 tipado para associar cada evento a uma lista de listeners correspondentes
  events: /* @__PURE__ */ new Map(),
  // M\u00e9todo $on com tipagem gen\u00e9rica
  $on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    const listeners = this.events.get(event);
    listeners == null ? void 0 : listeners.push(listener);
  },
  $once(event, listener) {
    const onceListener = (...args) => {
      this.$off(event, onceListener);
      return listener(...args);
    };
    this.$on(event, onceListener);
  },
  // M\u00e9todo $off para remover um listener
  $off(event, listener) {
    const listeners = this.events.get(event);
    if (listeners) {
      this.events.set(
        event,
        listeners.filter((l) => l !== listener)
      );
    }
  },
  // M\u00e9todo $emit com tipagem gen\u00e9rica
  async $emit(event, ...args) {
    const listeners = this.events.get(event);
    if (listeners) {
      const timeout = 5e3;
      const fallback = new Promise(
        (resolve) => setTimeout(() => {
          Depurador3.aviso(
            `Timeout: Algumas promessas do evento "${String(event)}" n\u00e3o foram resolvidas a tempo.`
          );
          resolve("timeout");
        }, timeout)
      );
      try {
        const raceResult = await Promise.race([
          Promise.all(
            listeners.map((listener) => {
              const result = listener(...args);
              return result instanceof Promise ? result : void 0;
            })
          ),
          fallback
        ]);
        return raceResult;
      } catch (error) {
        Depurador3.erro(`Erro ao processar ouvintes para o evento "${String(event)}":`, error);
        return "erro-no-evento";
      }
    }
    return;
  }
});
class OverlayServico extends Servico {
  constructor(nome2, opcoesInstalacao2, opcoesAtivacao2) {
    super(nome2, opcoesInstalacao2, opcoesAtivacao2);
  }
  ativar(contexto) {
    super.ativar(contexto);
  }
  desativar(callbackOrContexto) {
    super.desativar(callbackOrContexto);
  }
  instalarComponente() {
    super.instalarComponente();
  }
  mostrarAlerta(mensagem, textoAcao = "OK", title = "PJe+R") {
    overlayServicoStore.mensagem = mensagem;
    overlayServicoStore.title = title;
    overlayServicoStore.textoAcaoPrimaria = textoAcao;
    overlayServicoStore.overlay = true;
    return new Promise((resolver) => {
      EvBusOverlayService.$once("VOverlayService::aoClicarOk", () => resolver());
    });
  }
  /*public static override getInstance(): OverlayServico {
    return super.getInstance() as OverlayServico
  }*/
  /* public subscreverNoServico(
      funcionalidade: IServicoSubscritor & TabsMultiopcoesListaTarefaSubscritor
    ): boolean {
      super.subscreverNoServico(funcionalidade)
      const tabDef: TTabMultiopcao = funcionalidade.obterDefinicaoTab()
  
      this.store.tabs.push(tabDef)
      funcionalidade.sincronizarAlvos(`#pmr-${tabDef.value}-conteudo`)
      return true
    }*/
}
const _sfc_main = /* @__PURE__ */ defineComponent$1({
  __name: "VOverlayServico",
  setup(__props) {
    onMounted(() => {
      return;
    });
    const transmitirEvento = (eventoTipo) => {
      switch (eventoTipo) {
        case "ao-fechar":
          EvBusOverlayService.$emit("VOverlayService::aoClicarOk");
          break;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VServico, null, {
        default: withCtx(() => [
          createVNode(VOverlayAlert, {
            modelValue: unref(overlayServicoStore).overlay,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(overlayServicoStore).overlay = $event),
            title: unref(overlayServicoStore).title,
            message: unref(overlayServicoStore).mensagem,
            "texto-acao-primaria": unref(overlayServicoStore).textoAcaoPrimaria,
            onAoFechar: _cache[1] || (_cache[1] = ($event) => transmitirEvento(`ao-fechar`))
          }, null, 8, ["modelValue", "title", "message", "texto-acao-primaria"])
        ]),
        _: 1
      });
    };
  }
});
const nome = "Overlay Servi\u00e7o";
const opcoesInstalacao = {
  possuiInterfaceUsuario: true,
  funcionalidade: OverlayServico,
  checarHref: DEFINICOES.HREFS.ROOT,
  emIframe: false,
  componente: _sfc_main,
  posicaoRelacaoAlvo: "beforeend",
  observarMudancasShadowDOM: false
};
const opcoesAtivacao = {
  //checarOpcoes: { listaTarefaFiltros: true },
  //  logicaChecagemOpcoes: 'disjuncao (OR)',
  alvo: "body:not([id=tinymce])",
  esperar: "reativar"
};
new InstaladorServico(
  nome,
  opcoesInstalacao,
  opcoesAtivacao
);
new Depurador2({
  recurso: "lista-tarefas-filtros"
});
new Depurador2({
  recurso: "ApiEndpointServico",
  adicional: "Servi\u00e7o"
});
const defaultTheme = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAqCAYAAAAgXQw3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB7duxTsJQFMbx03KJaIqpCcTExckQnRhkL2+go4ND38EH8AV8hsbJwUEmVypMhgUmIbq4lBDQtGpMTUm0p5EEF5D2jN8vgdvb8Z/e26VXozmO41jxUI1/JsEyrm3b7myi8V8c0HxRxs3t+oE1yhkUanmCxSrRmKzwqVGevsU9bV/xzbEqOpdGzULA/xvky/Ssto7sj3tevXWNl/O1UW0O8tsEq9udvtLpe6eux9cWIqY3ym3yUNUJMgm1ZHc0EVIIQgpBSCEIKUTNLnYKGp3vF6hi6FRUGsFizcmULh6/yAu/k3kSkiNe1TYQcAX1kqJDM0cnnc9knizts701REyBm/EqZklIq6QI0uGtkOFlk9FsJSOkEIQUgpBCEFIIQgpBSCEIKQQhhSCkEIQUgpBCEFIIQgpBSCEIKQQhhSCkEIQUgpBCEFIIQgpBSCEc0o+iiCAbDtkNAp8gHc/zeHB1PuLQ6/VcPJWr42b9/kODGyZ7ZBAEx+12qzEcegTLccDJZEyt1p3r+77N9/58OfV7YMkiWIb3wu78gaUfQwNu7TjGKIwAAAAASUVORK5CYII=";
const darkTheme = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAqCAYAAADLarc0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7du9TsJQGMbxlwomlKUKIzUYjRKnusmGAZ3dUBfS0dErUK9A76DhDmQzIglXgC5gUMBK2NomHaRMTTxtZEUo7/j8ktPTj+2fc3KmxuiPYRiKmM7EyBH8xxSjpet6MFMsuNRqternYPhgjkaK500J5pOTSVKzWTO/t3tbrVZrMbECtc5773VomgTL2dnO0UF+/zjuuO49AkYz+DJpc0O5kRzbKRJENvGmmkSwEt/3FURkgIgMEJEBIjKIz25OSiU6LZcpk0kTzGc7Dj03XqjRbIbPYcSLSkUELBEsJpNO0+V5JVxw7Xab4luqioARBTvXm/yQdKhpBNGpWRUHy6pkWUZEDojIABEZICIDRGSAiAwQkQEiMkBEBojIABEZICIDRGSAiAwQkQEiMkBEBojIABEZICIDRGSAiAwk3/ddgpVInjd5I4jMtq2WNB6P7/r9PsHygm6WZV2v1et1s1A4+hbvtFRKVhKJdYL5xO6lXu/D7XY7V7quP8VmHwzDyImpSPgZaBGmGI8iYHie/ALZ23IjAnTI7wAAAABJRU5ErkJggg==";
const highContrastTheme = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAqCAYAAAAgXQw3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgB7dvPSgJRFMfxM85MC/+kpKBG0aZAEkFc9IeCxjfIR5iHaNUD9AStZ9M+38DpBUSIoG0SGlRgSFNqanNuCbbRHM/y94Hxemf5Zc7M6mo0xXEcy1+K/pUgmMe1bdudbDT+8QMm2gP9+upJt5qfRN5II5itFBtTJTWsrq8M/Z52x+Cbrb7uXDzoFgL+X72r0b1nnJ5vqektazzOly2zVu+GCBaXC4/pbLNf5noWIgbX7KkpLqLgkryhWhIIKQQhhSCkEIQUYkz+hL88Kj03KN57I3M0IJitHcnSbTJPnhFWexWSI5YfbxBwAdn3NqU+Xqi2ceLv9J/RLrzeIWIA3IynmKmQXBeC4Vchw8dmSZNJRkghCCkEIYUgpBCEFIKQQhBSCEIKQUghCCkEIYUgpBCEFIKQQhBSCEIKQUghCCkEIYUgpBCEFIKQQjhkxzRNguVwyEZ8NUYQTCaT5sUN8RGHQn7XxVO5OG6W29muckP1joxGIpWjg71qJp0mmI8DppJrdHy478aiUZvv/TkP8ntgySKYp+NfjekDS9/072e3ngP/MgAAAABJRU5ErkJggg==";
export {
  VDefaultsProvider as $,
  AppSpinner as A,
  AppLinkBtn as B,
  mdiCardAccountDetails as C,
  Depurador$3 as D,
  AppRadio as E,
  data as F,
  GerenciadorOpcoes as G,
  vuetify as H,
  createSimpleFunctional as I,
  genericComponent as J,
  propsFactory as K,
  LogoPJELight as L,
  useProxiedModel as M,
  provideTheme as N,
  OPCOES_FILTROS_PERFIS as O,
  useVariant as P,
  useDensity as Q,
  useDimension as R,
  useElevation as S,
  useLocation as T,
  usePosition as U,
  VIcon as V,
  useRounded as W,
  useTextColor as X,
  useLocale as Y,
  genOverlays as Z,
  _sfc_main$9 as _,
  _export_sfc as a,
  forwardRefs as a$,
  VBtn as a0,
  makeVariantProps as a1,
  makeThemeProps as a2,
  makeTagProps as a3,
  makeRoundedProps as a4,
  makePositionProps as a5,
  makeLocationProps as a6,
  makeElevationProps as a7,
  makeDimensionProps as a8,
  makeDensityProps as a9,
  VSlideGroup as aA,
  Ripple as aB,
  useSize as aC,
  useGroupItem as aD,
  useLink as aE,
  VExpandXTransition as aF,
  VAvatar as aG,
  makeSizeProps as aH,
  makeRouterProps as aI,
  makeGroupItemProps as aJ,
  EventProp as aK,
  wrapInArray as aL,
  getCurrentInstance as aM,
  consoleError as aN,
  defineComponent as aO,
  MaybeTransition as aP,
  deprecate as aQ,
  isPrimitive as aR,
  pick as aS,
  getPropertyFromItem as aT,
  focusChild as aU,
  useScopeId as aV,
  VMenuSymbol as aW,
  isClickInsideElement as aX,
  focusableChildren as aY,
  IN_BROWSER as aZ,
  VOverlay as a_,
  makeComponentProps as aa,
  IconValue as ab,
  _sfc_main$5 as ac,
  useRender as ad,
  useBackgroundColor as ae,
  useBorder as af,
  useRtl as ag,
  provideDefaults as ah,
  VImg as ai,
  convertToUnit as aj,
  VExpandTransition as ak,
  makeBorderProps as al,
  clamp as am,
  consoleWarn as an,
  useToggleScope as ao,
  useSsrBoot as ap,
  useLayoutItem as aq,
  makeLayoutItemProps as ar,
  makeVBtnProps as as,
  omit as at,
  VSelectionControl as au,
  makeVSelectionControlProps as av,
  makeGroupProps as aw,
  makeVSlideGroupProps as ax,
  deepEqual as ay,
  useGroup as az,
  mdiLaptopOff as b,
  mdiYoutube as b$,
  makeVOverlayProps as b0,
  VDialogTransition as b1,
  getNextElement as b2,
  makeTransitionProps$1 as b3,
  VSlideYTransition as b4,
  VLabel as b5,
  makeFocusProps as b6,
  useLoader as b7,
  useFocus as b8,
  useInputIcon as b9,
  useDelay as bA,
  makeDisplayProps as bB,
  makeDelayProps as bC,
  PJePayloadServico as bD,
  mdiExport as bE,
  mdiImport as bF,
  Funcionalidade as bG,
  ancestraisDoElemento as bH,
  encontrarNoElemento as bI,
  MensageriaPJE as bJ,
  copiar as bK,
  tipoString as bL,
  commonjsGlobal as bM,
  getDefaultExportFromCjs as bN,
  mdiFilter as bO,
  InstaladorVue as bP,
  OPCOES_PALETA_CORES as bQ,
  OPCOES_DOWNLOAD_CSV as bR,
  OPCOES_CARTAO_DE_PROCESSO as bS,
  OPCOES_COPIAR_DADOS_POLO as bT,
  EN_MAPA_CALOR_ORIGEM_DADOS as bU,
  EN_MAPA_CALOR_FORMATO_BARRA as bV,
  displayName as bW,
  description as bX,
  version as bY,
  VCard as bZ,
  VCardText as b_,
  nullifyTransforms as ba,
  animate as bb,
  standardEasing as bc,
  LoaderSlot as bd,
  makeLoaderProps as be,
  Intersect as bf,
  filterInputAttrs as bg,
  VInput as bh,
  makeVInputProps as bi,
  callEvent as bj,
  useResizeObserver as bk,
  useDisplay as bl,
  debounce as bm,
  getScrollParent as bn,
  useForm as bo,
  ensureValidVNode as bp,
  checkPrintable as bq,
  matchesSelector as br,
  noop as bs,
  breakpoints as bt,
  createLayout as bu,
  makeLayoutProps as bv,
  useLayout as bw,
  CircularBuffer as bx,
  useRouter as by,
  toPhysical as bz,
  VSwitch as c,
  mdiFileDocumentOutline as c0,
  mdiAlertOctagon as c1,
  VSpacer as c2,
  mdiApplicationCogOutline as c3,
  VSheet as c4,
  mdiCog as c5,
  normalizarTextoParaIdHash as c6,
  VContainer as c7,
  VCardTitle as c8,
  contentScript as c9,
  defaultTheme as d,
  OPCOES_TEMA as e,
  darkTheme as f,
  mdiTextBoxOutline as g,
  highContrastTheme as h,
  OPCOES_COPIAR_DADOS_DA_PECA as i,
  mdiCommentOffOutline as j,
  mdiFileOutline as k,
  browser$1 as l,
  mdiLaptop as m,
  mdiGavel as n,
  mdiDomain as o,
  mdiApplicationSettingsOutline as p,
  mdiFormatListChecks as q,
  mdiBrushVariant as r,
  mdiContentCopy as s,
  mdiFilterOutline as t,
  useTheme as u,
  obterManifesto as v,
  mdiCellphoneKey as w,
  Armazenamento as x,
  DEFINICOES as y,
  mdiCursorDefaultClick as z
};
