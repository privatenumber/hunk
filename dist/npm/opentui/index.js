var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/.bun/emoji-regex@10.6.0/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS((exports, module) => {
  module.exports = () => {
    return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  };
});

// src/opentui/index.ts
import { parseDiffFromFile, parsePatchFiles as parsePatchFiles2 } from "@pierre/diffs";

// src/core/theme/catalog.ts
var BUNDLED_SHIKI_THEME_IDS = [
  "andromeeda",
  "aurora-x",
  "ayu-dark",
  "ayu-light",
  "ayu-mirage",
  "catppuccin-frappe",
  "catppuccin-latte",
  "catppuccin-macchiato",
  "catppuccin-mocha",
  "dark-plus",
  "dracula",
  "dracula-soft",
  "everforest-dark",
  "everforest-light",
  "github-dark",
  "github-dark-default",
  "github-dark-dimmed",
  "github-dark-high-contrast",
  "github-light",
  "github-light-default",
  "github-light-high-contrast",
  "gruvbox-dark-hard",
  "gruvbox-dark-medium",
  "gruvbox-dark-soft",
  "gruvbox-light-hard",
  "gruvbox-light-medium",
  "gruvbox-light-soft",
  "horizon",
  "horizon-bright",
  "houston",
  "kanagawa-dragon",
  "kanagawa-lotus",
  "kanagawa-wave",
  "laserwave",
  "light-plus",
  "material-theme",
  "material-theme-darker",
  "material-theme-lighter",
  "material-theme-ocean",
  "material-theme-palenight",
  "min-dark",
  "min-light",
  "monokai",
  "night-owl",
  "night-owl-light",
  "nord",
  "one-dark-pro",
  "one-light",
  "plastic",
  "poimandres",
  "red",
  "rose-pine",
  "rose-pine-dawn",
  "rose-pine-moon",
  "slack-dark",
  "slack-ochin",
  "snazzy-light",
  "solarized-dark",
  "solarized-light",
  "synthwave-84",
  "tokyo-night",
  "vesper",
  "vitesse-black",
  "vitesse-dark",
  "vitesse-light"
];
var LEGACY_THEME_ID_ALIASES = {
  graphite: "github-dark-default",
  midnight: "github-dark-dimmed",
  paper: "github-light-default",
  ember: "dark-plus",
  zenburn: "everforest-dark"
};
function resolveLegacyThemeId(themeId) {
  return themeId ? LEGACY_THEME_ID_ALIASES[themeId] ?? themeId : undefined;
}
function resolveBundledShikiThemeId(themeId) {
  const resolvedThemeId = resolveLegacyThemeId(themeId);
  return BUNDLED_SHIKI_THEME_IDS.includes(resolvedThemeId) ? resolvedThemeId : undefined;
}
var BUNDLED_SHIKI_THEME_BACKGROUNDS = {
  andromeeda: "#23262e",
  "aurora-x": "#07090f",
  "ayu-dark": "#10141c",
  "ayu-light": "#fcfcfc",
  "ayu-mirage": "#242936",
  "catppuccin-frappe": "#303446",
  "catppuccin-latte": "#eff1f5",
  "catppuccin-macchiato": "#24273a",
  "catppuccin-mocha": "#1e1e2e",
  "dark-plus": "#1e1e1e",
  dracula: "#282a36",
  "dracula-soft": "#282a36",
  "everforest-dark": "#2d353b",
  "everforest-light": "#fdf6e3",
  "github-dark": "#24292e",
  "github-dark-default": "#0d1117",
  "github-dark-dimmed": "#22272e",
  "github-dark-high-contrast": "#0a0c10",
  "github-light": "#ffffff",
  "github-light-default": "#ffffff",
  "github-light-high-contrast": "#ffffff",
  "gruvbox-dark-hard": "#1d2021",
  "gruvbox-dark-medium": "#282828",
  "gruvbox-dark-soft": "#32302f",
  "gruvbox-light-hard": "#f9f5d7",
  "gruvbox-light-medium": "#fbf1c7",
  "gruvbox-light-soft": "#f2e5bc",
  horizon: "#1c1e26",
  "horizon-bright": "#fdf0ed",
  houston: "#17191e",
  "kanagawa-dragon": "#181616",
  "kanagawa-lotus": "#f2ecbc",
  "kanagawa-wave": "#1f1f28",
  laserwave: "#27212e",
  "light-plus": "#ffffff",
  "material-theme": "#263238",
  "material-theme-darker": "#212121",
  "material-theme-lighter": "#fafafa",
  "material-theme-ocean": "#0f111a",
  "material-theme-palenight": "#292d3e",
  "min-dark": "#1f1f1f",
  "min-light": "#ffffff",
  monokai: "#272822",
  "night-owl": "#011627",
  "night-owl-light": "#fbfbfb",
  nord: "#2e3440",
  "one-dark-pro": "#282c34",
  "one-light": "#fafafa",
  plastic: "#21252b",
  poimandres: "#1b1e28",
  red: "#390000",
  "rose-pine": "#191724",
  "rose-pine-dawn": "#faf4ed",
  "rose-pine-moon": "#232136",
  "slack-dark": "#222222",
  "slack-ochin": "#ffffff",
  "snazzy-light": "#fafbfc",
  "solarized-dark": "#002b36",
  "solarized-light": "#fdf6e3",
  "synthwave-84": "#262335",
  "tokyo-night": "#1a1b26",
  vesper: "#101010",
  "vitesse-black": "#000000",
  "vitesse-dark": "#121212",
  "vitesse-light": "#ffffff"
};
var BUNDLED_SHIKI_THEME_FOREGROUNDS = {
  andromeeda: "#d5ced9",
  "ayu-dark": "#bfbdb6",
  "ayu-light": "#5c6166",
  "ayu-mirage": "#cccac2",
  "catppuccin-frappe": "#c6d0f5",
  "catppuccin-latte": "#4c4f69",
  "catppuccin-macchiato": "#cad3f5",
  "catppuccin-mocha": "#cdd6f4",
  "dark-plus": "#d4d4d4",
  dracula: "#f8f8f2",
  "dracula-soft": "#f6f6f4",
  "everforest-dark": "#d3c6aa",
  "everforest-light": "#5c6a72",
  "github-dark": "#e1e4e8",
  "github-dark-default": "#e6edf3",
  "github-dark-dimmed": "#adbac7",
  "github-dark-high-contrast": "#f0f3f6",
  "github-light": "#24292e",
  "github-light-default": "#1f2328",
  "github-light-high-contrast": "#0e1116",
  "gruvbox-dark-hard": "#ebdbb2",
  "gruvbox-dark-medium": "#ebdbb2",
  "gruvbox-dark-soft": "#ebdbb2",
  "gruvbox-light-hard": "#3c3836",
  "gruvbox-light-medium": "#3c3836",
  "gruvbox-light-soft": "#3c3836",
  houston: "#eef0f9",
  "kanagawa-dragon": "#c5c9c5",
  "kanagawa-lotus": "#545464",
  "kanagawa-wave": "#dcd7ba",
  laserwave: "#ffffff",
  "light-plus": "#000000",
  "material-theme": "#eeffff",
  "material-theme-darker": "#eeffff",
  "material-theme-lighter": "#90a4ae",
  "material-theme-ocean": "#babed8",
  "material-theme-palenight": "#babed8",
  "min-light": "#212121",
  monokai: "#f8f8f2",
  "night-owl": "#d6deeb",
  "night-owl-light": "#403f53",
  nord: "#d8dee9",
  "one-dark-pro": "#abb2bf",
  "one-light": "#383a42",
  plastic: "#a9b2c3",
  poimandres: "#a6accd",
  red: "#f8f8f8",
  "rose-pine": "#e0def4",
  "rose-pine-dawn": "#575279",
  "rose-pine-moon": "#e0def4",
  "slack-dark": "#e6e6e6",
  "slack-ochin": "#000000",
  "snazzy-light": "#565869",
  "solarized-dark": "#839496",
  "solarized-light": "#657b83",
  "tokyo-night": "#a9b1d6",
  vesper: "#ffffff",
  "vitesse-black": "#dbd7ca",
  "vitesse-dark": "#dbd7ca",
  "vitesse-light": "#393a34"
};
var BUNDLED_SHIKI_THEME_DIFF_COLORS = {
  andromeeda: { added: "#9bc53d", removed: "#fc644d", modified: "#5bc0eb" },
  "aurora-x": { added: "#64d389", removed: "#dd5074", modified: "#c778db" },
  "ayu-dark": { added: "#70bf56", removed: "#f26d78", modified: "#73b8ff" },
  "ayu-light": { added: "#6cbf43", removed: "#ff7383", modified: "#478acc" },
  "ayu-mirage": { added: "#87d96c", removed: "#f27983", modified: "#80bfff" },
  "catppuccin-frappe": { added: "#a6d189", removed: "#e78284", modified: "#e5c890" },
  "catppuccin-latte": { added: "#40a02b", removed: "#d20f39", modified: "#df8e1d" },
  "catppuccin-macchiato": { added: "#a6da95", removed: "#ed8796", modified: "#eed49f" },
  "catppuccin-mocha": { added: "#a6e3a1", removed: "#f38ba8", modified: "#f9e2af" },
  dracula: { added: "#50fa7b", removed: "#ff5555", modified: "#8be9fd" },
  "dracula-soft": { added: "#50fa7b", removed: "#ff5555", modified: "#8be9fd" },
  "everforest-dark": { added: "#899c40", removed: "#da6362", modified: "#5a93a2" },
  "everforest-light": { added: "#8da101", removed: "#f1706f", modified: "#3a94c5" },
  "github-dark": { added: "#28a745", removed: "#ea4a5a", modified: "#2188ff" },
  "github-dark-default": { added: "#2ea043", removed: "#f85149", modified: "#bb8009" },
  "github-dark-dimmed": { added: "#46954a", removed: "#e5534b", modified: "#ae7c14" },
  "github-dark-high-contrast": { added: "#09b43a", removed: "#ff6a69", modified: "#e09b13" },
  "github-light": { added: "#28a745", removed: "#d73a49", modified: "#2188ff" },
  "github-light-default": { added: "#116329", removed: "#cf222e", modified: "#9a6700" },
  "github-light-high-contrast": { added: "#26a148", removed: "#ee5a5d", modified: "#b58407" },
  "gruvbox-dark-hard": { added: "#b8bb26", removed: "#fb4934", modified: "#83a598" },
  "gruvbox-dark-medium": { added: "#b8bb26", removed: "#fb4934", modified: "#83a598" },
  "gruvbox-dark-soft": { added: "#b8bb26", removed: "#fb4934", modified: "#83a598" },
  "gruvbox-light-hard": { added: "#79740e", removed: "#9d0006", modified: "#076678" },
  "gruvbox-light-medium": { added: "#79740e", removed: "#9d0006", modified: "#076678" },
  "gruvbox-light-soft": { added: "#79740e", removed: "#9d0006", modified: "#076678" },
  horizon: { added: "#09f7a0", removed: "#f43e5c", modified: "#21bfc2" },
  "horizon-bright": { added: "#29d398", removed: "#f43e5c", modified: "#af5427" },
  houston: { added: "#4bf3c8", removed: "#f06788", modified: "#54b9ff" },
  "kanagawa-dragon": { added: "#76946a", removed: "#c34043", modified: "#dca561" },
  "kanagawa-lotus": { added: "#6e915f", removed: "#d7474b", modified: "#4d699b" },
  "kanagawa-wave": { added: "#76946a", removed: "#c34043", modified: "#dca561" },
  laserwave: { added: "#74dfc4", removed: "#eb64b9", modified: "#40b4c4" },
  "material-theme": { added: "#c3e88d", removed: "#f07178", modified: "#82aaff" },
  "material-theme-darker": { added: "#c3e88d", removed: "#f07178", modified: "#82aaff" },
  "material-theme-lighter": { added: "#39adb5", removed: "#e53935", modified: "#6182b8" },
  "material-theme-ocean": { added: "#c3e88d", removed: "#f07178", modified: "#82aaff" },
  "material-theme-palenight": { added: "#c3e88d", removed: "#f07178", modified: "#82aaff" },
  "min-light": { added: "#77cc00", removed: "#d32f2f" },
  monokai: { added: "#86b42b", removed: "#c4265e", modified: "#6a7ec8" },
  "night-owl": { added: "#9ccc65", removed: "#ef5350", modified: "#e2b93d" },
  "night-owl-light": { added: "#08916a", removed: "#f76e6e", modified: "#288ed7" },
  nord: { added: "#a3be8c", removed: "#bf616a", modified: "#ebcb8b" },
  "one-dark-pro": { added: "#109868", removed: "#e05561", modified: "#948b60" },
  "one-light": { added: "#00809b" },
  plastic: { added: "#98c379", removed: "#e06c75", modified: "#d19a66" },
  poimandres: { added: "#5fb3a1", removed: "#d0679d", modified: "#add7ff" },
  "rose-pine": { added: "#9ccfd8", removed: "#eb6f92", modified: "#ebbcba" },
  "rose-pine-dawn": { added: "#56949f", removed: "#b4637a", modified: "#d7827e" },
  "rose-pine-moon": { added: "#9ccfd8", removed: "#eb6f92", modified: "#ea9a97" },
  "slack-ochin": { added: "#91b859", removed: "#e53935", modified: "#ecb22e" },
  "snazzy-light": { added: "#2dae58", removed: "#ff5c57", modified: "#00a39f" },
  "solarized-dark": { added: "#859900", removed: "#dc322f", modified: "#268bd2" },
  "solarized-light": { added: "#859900", removed: "#dc322f", modified: "#268bd2" },
  "synthwave-84": { added: "#0beb99", removed: "#fa2e46", modified: "#b893ce" },
  "tokyo-night": { added: "#41a6b5", removed: "#db4b4b", modified: "#6183bb" },
  vesper: { added: "#99ffe4", removed: "#ff8080", modified: "#ffc799" },
  "vitesse-black": { added: "#4d9375", removed: "#cb7676", modified: "#6394bf" },
  "vitesse-dark": { added: "#4d9375", removed: "#cb7676", modified: "#6394bf" },
  "vitesse-light": { added: "#1e754f", removed: "#ab5959", modified: "#296aa3" }
};
function getBundledShikiThemeBackground(themeId) {
  return themeId && themeId in BUNDLED_SHIKI_THEME_BACKGROUNDS ? BUNDLED_SHIKI_THEME_BACKGROUNDS[themeId] : undefined;
}
function getBundledShikiThemeForeground(themeId) {
  return themeId && themeId in BUNDLED_SHIKI_THEME_FOREGROUNDS ? BUNDLED_SHIKI_THEME_FOREGROUNDS[themeId] : undefined;
}
function getBundledShikiThemeDiffColors(themeId) {
  return themeId && themeId in BUNDLED_SHIKI_THEME_DIFF_COLORS ? BUNDLED_SHIKI_THEME_DIFF_COLORS[themeId] : undefined;
}

// src/opentui/themes.ts
var HUNK_DIFF_THEME_NAMES = BUNDLED_SHIKI_THEME_IDS;
// src/opentui/HunkDiffBody.tsx
import { useMemo } from "react";

// src/core/run/reviewGap.ts
var DEFAULT_FILE_GAP = 1;
var DEFAULT_HUNK_GAP = 0;

// src/core/run/tabWidth.ts
var DEFAULT_TAB_WIDTH = 4;
var MIN_TAB_WIDTH = 1;
var MAX_TAB_WIDTH = 16;
function validateTabWidth(value, label = "tab width") {
  if (!Number.isSafeInteger(value) || value < MIN_TAB_WIDTH || value > MAX_TAB_WIDTH) {
    throw new Error(`Invalid ${label}: ${String(value)} (expected ${MIN_TAB_WIDTH}-${MAX_TAB_WIDTH})`);
  }
  return value;
}

// node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup-data.js
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var halfwidthRanges = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
var narrowRanges = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];

// node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i = mid * 2;
    if (codePoint < ranges[i]) {
      high = mid - 1;
    } else if (codePoint > ranges[i + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup.js
var minimumAmbiguousCodePoint = ambiguousRanges[0];
var maximumAmbiguousCodePoint = ambiguousRanges.at(-1);
var minimumFullWidthCodePoint = fullwidthRanges[0];
var maximumFullWidthCodePoint = fullwidthRanges.at(-1);
var minimumHalfWidthCodePoint = halfwidthRanges[0];
var maximumHalfWidthCodePoint = halfwidthRanges.at(-1);
var minimumNarrowCodePoint = narrowRanges[0];
var maximumNarrowCodePoint = narrowRanges.at(-1);
var minimumWideCodePoint = wideRanges[0];
var maximumWideCodePoint = wideRanges.at(-1);
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0;index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < minimumAmbiguousCodePoint || codePoint > maximumAmbiguousCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullWidth = (codePoint) => {
  if (codePoint < minimumFullWidthCodePoint || codePoint > maximumFullWidthCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < minimumWideCodePoint || codePoint > maximumWideCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// src/ui/lib/text.ts
var import_emoji_regex = __toESM(require_emoji_regex(), 1);

// src/lib/terminalText.ts
var controlCodeRegex = /[\x00-\x1f\x7f-\x9f]/;
var sevenBitControlStrings = /\x1b(?:\][\s\S]*?(?:\x07|\x1b\\|\x9c)|[PX^_][\s\S]*?(?:\x1b\\|\x9c)|\[[0-?]*[ -/]*[@-~])/g;
var c1ControlStrings = /[\x90\x98\x9d\x9e\x9f][\s\S]*?(?:\x07|\x1b\\|\x9c)/g;
var c1Csi = /\x9b[0-?]*[ -/]*[@-~]/g;
var preservedStyleTokenDelimiters = /[\u{f0000}\u{f0001}]/gu;
function sanitizeTerminalText(text, {
  preserveNewlines = true,
  preserveTabs = true,
  preserveAnsiStyle = false
} = {}) {
  if (!controlCodeRegex.test(text)) {
    return text;
  }
  const controlCharacters = preserveNewlines ? preserveTabs ? /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g : /[\x00-\x09\x0b-\x1f\x7f-\x9f]/g : preserveTabs ? /[\x00-\x08\x0a-\x1f\x7f-\x9f]/g : /[\x00-\x1f\x7f-\x9f]/g;
  const preservedStyles = [];
  const preserveStyle = (sequence) => {
    if (!preserveAnsiStyle || !/^\x1b\[[0-9;:]*m$/.test(sequence)) {
      return "";
    }
    const token = `\uDB80\uDC00${preservedStyles.length}\uDB80\uDC01`;
    preservedStyles.push(sequence);
    return token;
  };
  const tokenSafeText = preserveAnsiStyle ? text.replace(preservedStyleTokenDelimiters, "") : text;
  let sanitized = tokenSafeText.replace(sevenBitControlStrings, preserveStyle).replace(c1ControlStrings, "").replace(c1Csi, "").replace(controlCharacters, "");
  for (const [index, sequence] of preservedStyles.entries()) {
    sanitized = sanitized.replaceAll(`\uDB80\uDC00${index}\uDB80\uDC01`, sequence);
  }
  return sanitized;
}
function sanitizeTerminalLine(text) {
  return sanitizeTerminalText(text, { preserveNewlines: false, preserveTabs: true });
}
function formatTerminalPath(path) {
  let formatted = "";
  for (const character of path) {
    const codePoint = character.codePointAt(0);
    if (character === "\\") {
      formatted += "\\\\";
    } else if (character === "\t") {
      formatted += "\\t";
    } else if (character === `
`) {
      formatted += "\\n";
    } else if (character === "\r") {
      formatted += "\\r";
    } else if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      formatted += `\\x${codePoint.toString(16).padStart(2, "0")}`;
    } else {
      formatted += character;
    }
  }
  return formatted;
}
function sanitizeTerminalSpans(spans) {
  let sanitized = null;
  for (let index = 0;index < spans.length; index += 1) {
    const span = spans[index];
    const text = sanitizeTerminalLine(span.text);
    if (text === span.text && text.length > 0) {
      sanitized?.push(span);
      continue;
    }
    sanitized ??= spans.slice(0, index);
    if (text.length > 0) {
      sanitized.push({ ...span, text });
    }
  }
  return sanitized ?? spans;
}

// src/ui/lib/text.ts
var printableAsciiRegex = /^[\u0020-\u007E]*$/;
function isPrintableAsciiText(text) {
  return printableAsciiRegex.test(text);
}
var graphemeSegmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
function textClusters(text) {
  return Array.from(graphemeSegmenter.segment(text), (segment) => segment.segment);
}
var zeroWidthScalarRegex = /^[\p{Default_Ignorable_Code_Point}\p{Control}\p{Format}\p{Nonspacing_Mark}\p{Enclosing_Mark}\p{Surrogate}]$/u;
var zeroWidthClusterRegex = /^(?:\p{Default_Ignorable_Code_Point}|\p{Control}|\p{Format}|\p{Nonspacing_Mark}|\p{Enclosing_Mark}|\p{Surrogate})+$/u;
var leadingNonPrintingRegex = /^[\p{Default_Ignorable_Code_Point}\p{Control}\p{Format}\p{Nonspacing_Mark}\p{Enclosing_Mark}\p{Surrogate}]+/u;
var spacingMarkRegex = /\p{Spacing_Mark}/u;
var emojiModifierRegex = /^\p{Emoji_Modifier}$/u;
var regionalIndicatorRegex = /^\p{Regional_Indicator}$/u;
var extendedPictographicRegex = /\p{Extended_Pictographic}/gu;
var unqualifiedKeycapRegex = /^[\d#*]\u20E3$/u;
var emojiSequenceRegex = import_emoji_regex.default();
function isDoubleWidthEmojiCluster(cluster) {
  emojiSequenceRegex.lastIndex = 0;
  const emojiMatch = emojiSequenceRegex.exec(cluster);
  if (emojiMatch?.index === 0 && emojiMatch[0].length === cluster.length) {
    return true;
  }
  if (unqualifiedKeycapRegex.test(cluster)) {
    return true;
  }
  if (!cluster.includes("‍") || cluster.length > 50) {
    return false;
  }
  const pictographics = cluster.match(extendedPictographicRegex);
  return pictographics !== null && pictographics.length >= 2;
}
function isHangulLeadingJamo(codePoint) {
  return codePoint >= 4352 && codePoint <= 4447 || codePoint >= 43360 && codePoint <= 43388;
}
function isHangulVowelJamo(codePoint) {
  return codePoint !== undefined && (codePoint >= 4448 && codePoint <= 4519 || codePoint >= 55216 && codePoint <= 55238);
}
function isHangulTrailingJamo(codePoint) {
  return codePoint !== undefined && (codePoint >= 4520 && codePoint <= 4607 || codePoint >= 55243 && codePoint <= 55291);
}
function isHangulJamo(codePoint) {
  return isHangulLeadingJamo(codePoint) || isHangulVowelJamo(codePoint) || isHangulTrailingJamo(codePoint);
}
function measureHangulClusterWidth(cluster) {
  const codePoints = [];
  for (const scalar of cluster) {
    if (!zeroWidthScalarRegex.test(scalar)) {
      codePoints.push(scalar.codePointAt(0));
    }
  }
  if (codePoints.length === 0) {
    return null;
  }
  let width = 0;
  for (let index = 0;index < codePoints.length; index += 1) {
    const codePoint = codePoints[index];
    if (!isHangulJamo(codePoint)) {
      if (width === 0) {
        return null;
      }
      for (let remaining = index;remaining < codePoints.length; remaining += 1) {
        width += eastAsianWidth(codePoints[remaining]);
      }
      return width;
    }
    if (isHangulLeadingJamo(codePoint) && isHangulVowelJamo(codePoints[index + 1])) {
      width += 2;
      index += isHangulTrailingJamo(codePoints[index + 2]) ? 2 : 1;
      continue;
    }
    width += eastAsianWidth(codePoint);
  }
  return width;
}
function isGraphemePrepend(codePoint) {
  return codePoint >= 1536 && codePoint <= 1541 || codePoint === 1757 || codePoint === 1807 || codePoint >= 2192 && codePoint <= 2193 || codePoint === 2274 || codePoint === 3406 || codePoint === 69821 || codePoint === 69837 || codePoint >= 70082 && codePoint <= 70083 || codePoint === 71999 || codePoint === 72001 || codePoint === 72250 || codePoint >= 72324 && codePoint <= 72329 || codePoint === 73030 || codePoint === 73474;
}
function isCommonIndependentScalar(codePoint) {
  return codePoint >= 32 && codePoint <= 126 || codePoint >= 12288 && codePoint <= 12329 || codePoint >= 12353 && codePoint <= 12438 || codePoint >= 12445 && codePoint <= 12543 || codePoint >= 13312 && codePoint <= 40959 || codePoint >= 44032 && codePoint <= 55203 || codePoint >= 63744 && codePoint <= 64255 || codePoint >= 65281 && codePoint <= 65376 || codePoint >= 65504 && codePoint <= 65510;
}
function scalarRequiresGraphemeComposition(scalar, codePoint) {
  if (isCommonIndependentScalar(codePoint)) {
    return false;
  }
  return zeroWidthScalarRegex.test(scalar) || emojiModifierRegex.test(scalar) || regionalIndicatorRegex.test(scalar) || isGraphemePrepend(codePoint) || codePoint === 3635 || codePoint === 3763 || codePoint === 65438 || codePoint === 65439 || codePoint >= 4352 && codePoint <= 4607 || codePoint >= 43360 && codePoint <= 43391 || codePoint >= 55216 && codePoint <= 55295;
}
function measureSimpleSanitizedTextWidth(text) {
  let width = 0;
  for (const scalar of text) {
    const codePoint = scalar.codePointAt(0);
    if (scalarRequiresGraphemeComposition(scalar, codePoint)) {
      return null;
    }
    width += eastAsianWidth(codePoint);
  }
  return width;
}
function measureClusterWidth(cluster) {
  if (cluster.length === 1 && cluster.charCodeAt(0) >= 32 && cluster.charCodeAt(0) <= 126) {
    return 1;
  }
  const codePoint = cluster.codePointAt(0);
  if (codePoint === undefined) {
    return 0;
  }
  const scalarUnitLength = codePoint > 65535 ? 2 : 1;
  if (cluster.length === scalarUnitLength) {
    return zeroWidthScalarRegex.test(cluster) ? 0 : eastAsianWidth(codePoint);
  }
  if (zeroWidthClusterRegex.test(cluster)) {
    return 0;
  }
  if (isDoubleWidthEmojiCluster(cluster)) {
    return 2;
  }
  const visibleCluster = cluster.replace(leadingNonPrintingRegex, "");
  const hangulWidth = measureHangulClusterWidth(visibleCluster);
  if (hangulWidth !== null) {
    return hangulWidth;
  }
  let width = eastAsianWidth(visibleCluster.codePointAt(0));
  let isFirstScalar = true;
  for (const scalar of visibleCluster) {
    if (isFirstScalar) {
      isFirstScalar = false;
      continue;
    }
    if (spacingMarkRegex.test(scalar) || scalar >= "＀" && scalar <= "￯") {
      width += eastAsianWidth(scalar.codePointAt(0));
    }
  }
  return width;
}
function repeatedSingleUnitChar(text) {
  if (text.length < 2) {
    return null;
  }
  const unit = text.charCodeAt(0);
  if (unit >= 55296 && unit <= 57343) {
    return null;
  }
  for (let index = 1;index < text.length; index += 1) {
    if (text.charCodeAt(index) !== unit) {
      return null;
    }
  }
  return text[0] ?? null;
}
function measureSanitizedTextWidth(text) {
  if (printableAsciiRegex.test(text)) {
    return text.length;
  }
  const repeatedChar = repeatedSingleUnitChar(text);
  if (repeatedChar !== null) {
    const codePoint = repeatedChar.codePointAt(0);
    const charWidth = measureClusterWidth(repeatedChar);
    if (charWidth > 0 && !scalarRequiresGraphemeComposition(repeatedChar, codePoint)) {
      return charWidth * text.length;
    }
  }
  const simpleWidth = measureSimpleSanitizedTextWidth(text);
  if (simpleWidth !== null) {
    return simpleWidth;
  }
  let width = 0;
  for (const cluster of textClusters(text)) {
    width += measureClusterWidth(cluster);
  }
  return width;
}
function measureTextWidth(text) {
  return measureSanitizedTextWidth(sanitizeTerminalLine(text));
}
function wrapText(text, width) {
  if (width <= 0) {
    return [""];
  }
  const normalized = sanitizeTerminalLine(text).trim().replace(/\s+/g, " ");
  if (normalized.length === 0) {
    return [""];
  }
  const words = normalized.split(" ");
  const lines = [];
  let current = "";
  let currentWidth = 0;
  const pushCurrent = () => {
    if (current.length > 0) {
      lines.push(current);
      current = "";
      currentWidth = 0;
    }
  };
  for (const word of words) {
    const wordWidth = measureTextWidth(word);
    if (wordWidth > width) {
      pushCurrent();
      let offset = 0;
      while (offset < wordWidth) {
        const chunk = sliceTextByWidth(word, offset, width);
        if (chunk.width <= 0) {
          const rest = sliceTextByWidth(word, offset, Number.MAX_SAFE_INTEGER);
          if (rest.text.length > 0) {
            lines.push(rest.text);
          }
          break;
        }
        lines.push(chunk.text);
        offset += chunk.width;
      }
      continue;
    }
    const nextWidth = current.length === 0 ? wordWidth : currentWidth + 1 + wordWidth;
    if (nextWidth <= width) {
      current = current.length === 0 ? word : `${current} ${word}`;
      currentWidth = nextWidth;
      continue;
    }
    pushCurrent();
    current = word;
    currentWidth = wordWidth;
  }
  pushCurrent();
  return lines.length > 0 ? lines : [""];
}
function wrapSanitizedTextByWidth(safeText, lineWidth, firstLineWidth = lineWidth, firstLineHasContent = false) {
  const fullWidth = Math.max(0, lineWidth);
  if (fullWidth === 0 || safeText.length === 0) {
    return [];
  }
  const chunks = [];
  let remaining = Math.max(0, Math.min(firstLineWidth, fullWidth));
  let startsNewLine = false;
  if (printableAsciiRegex.test(safeText)) {
    let offset = 0;
    while (offset < safeText.length) {
      if (remaining === 0) {
        remaining = fullWidth;
        startsNewLine = true;
      }
      const chunkWidth2 = Math.min(remaining, safeText.length - offset);
      chunks.push({
        text: safeText.slice(offset, offset + chunkWidth2),
        width: chunkWidth2,
        startsNewLine
      });
      offset += chunkWidth2;
      remaining -= chunkWidth2;
      startsNewLine = false;
    }
    return chunks;
  }
  let chunkText = "";
  let chunkWidth = 0;
  let existingLineHasContent = firstLineHasContent;
  const flushChunk = () => {
    if (chunkText.length === 0) {
      return;
    }
    chunks.push({ text: chunkText, width: chunkWidth, startsNewLine });
    chunkText = "";
    chunkWidth = 0;
    startsNewLine = false;
  };
  const initialRemaining = remaining;
  const appendCluster = (cluster, clusterWidth) => {
    if (clusterWidth > remaining) {
      const rowAlreadyStarted = existingLineHasContent || remaining < fullWidth || chunkText.length > 0;
      flushChunk();
      remaining = fullWidth;
      startsNewLine = rowAlreadyStarted;
      existingLineHasContent = false;
      if (clusterWidth > fullWidth) {
        if (rowAlreadyStarted) {
          chunks.push({ text: "", width: 0, startsNewLine: true });
        }
        startsNewLine = false;
        return true;
      }
    }
    chunkText += cluster;
    chunkWidth += clusterWidth;
    remaining -= clusterWidth;
    return true;
  };
  let simpleScalars = true;
  for (const scalar of safeText) {
    const codePoint = scalar.codePointAt(0);
    if (scalarRequiresGraphemeComposition(scalar, codePoint)) {
      simpleScalars = false;
      break;
    }
    if (!appendCluster(scalar, eastAsianWidth(codePoint))) {
      flushChunk();
      return chunks;
    }
  }
  if (simpleScalars) {
    flushChunk();
    return chunks;
  }
  chunks.length = 0;
  remaining = initialRemaining;
  startsNewLine = false;
  chunkText = "";
  existingLineHasContent = firstLineHasContent;
  chunkWidth = 0;
  for (const cluster of textClusters(safeText)) {
    if (!appendCluster(cluster, measureClusterWidth(cluster))) {
      break;
    }
  }
  flushChunk();
  return chunks;
}
function sliceTextByWidth(text, offset, width) {
  return sliceSanitizedTextByWidth(sanitizeTerminalLine(text), offset, width);
}
function sliceSanitizedTextByWidth(safeText, offset, width) {
  const startOffset = Math.max(0, offset);
  const maxWidth = Math.max(0, width);
  if (maxWidth === 0) {
    return { text: "", width: 0 };
  }
  if (printableAsciiRegex.test(safeText)) {
    const sliced = safeText.slice(startOffset, startOffset + maxWidth);
    return { text: sliced, width: sliced.length };
  }
  let scalarCursor = 0;
  let scalarUsedWidth = 0;
  let scalarVisibleText = "";
  let simpleScalars = true;
  for (const scalar of safeText) {
    const codePoint = scalar.codePointAt(0);
    if (scalarRequiresGraphemeComposition(scalar, codePoint)) {
      simpleScalars = false;
      break;
    }
    const scalarWidth = eastAsianWidth(codePoint);
    const scalarStart = scalarCursor;
    const scalarEnd = scalarCursor + scalarWidth;
    scalarCursor = scalarEnd;
    if (scalarEnd <= startOffset) {
      continue;
    }
    if (scalarStart < startOffset) {
      const hiddenCellWidth = Math.min(scalarEnd, startOffset + maxWidth) - startOffset;
      if (hiddenCellWidth > 0) {
        scalarVisibleText += " ".repeat(hiddenCellWidth);
        scalarUsedWidth += hiddenCellWidth;
      }
      continue;
    }
    if (scalarUsedWidth + scalarWidth > maxWidth) {
      return { text: scalarVisibleText, width: scalarUsedWidth };
    }
    scalarVisibleText += scalar;
    scalarUsedWidth += scalarWidth;
  }
  if (simpleScalars) {
    return { text: scalarVisibleText, width: scalarUsedWidth };
  }
  let cursor = 0;
  let usedWidth = 0;
  let visibleText = "";
  for (const cluster of textClusters(safeText)) {
    const clusterWidth = measureClusterWidth(cluster);
    const clusterStart = cursor;
    const clusterEnd = cursor + clusterWidth;
    cursor = clusterEnd;
    if (clusterEnd <= startOffset) {
      continue;
    }
    if (clusterStart < startOffset) {
      const hiddenCellWidth = Math.min(clusterEnd, startOffset + maxWidth) - startOffset;
      if (hiddenCellWidth > 0) {
        visibleText += " ".repeat(hiddenCellWidth);
        usedWidth += hiddenCellWidth;
      }
      continue;
    }
    if (usedWidth + clusterWidth > maxWidth) {
      break;
    }
    visibleText += cluster;
    usedWidth += clusterWidth;
  }
  return { text: visibleText, width: usedWidth };
}
function fitText(text, width, overflowMarker = ".") {
  const safeText = sanitizeTerminalLine(text);
  if (width <= 0) {
    return "";
  }
  if (measureTextWidth(safeText) <= width) {
    return safeText;
  }
  const safeMarker = sanitizeTerminalLine(overflowMarker);
  const marker = sliceTextByWidth(safeMarker, 0, width);
  const textWidth = Math.max(0, width - marker.width);
  return `${sliceTextByWidth(safeText, 0, textWidth).text}${marker.text}`;
}
function padText(text, width) {
  const trimmed = fitText(text, width);
  return `${trimmed}${" ".repeat(Math.max(0, width - measureTextWidth(trimmed)))}`;
}

// src/ui/diff/codeColumns.ts
var DIFF_RAIL_PREFIX_WIDTH = 1;
var DIFF_SPLIT_SEPARATOR_WIDTH = 1;
var maxFileCodeLineWidthCache = new WeakMap;
function expandDiffTabs(text, tabWidth = DEFAULT_TAB_WIDTH, initialColumn = 0) {
  if (!text.includes("\t")) {
    return text;
  }
  const resolvedTabWidth = validateTabWidth(tabWidth);
  const segments = text.split("\t");
  let column = Math.max(0, initialColumn);
  let expanded = "";
  for (const [index, segment] of segments.entries()) {
    expanded += segment;
    column += measureTextWidth(segment);
    if (index < segments.length - 1) {
      const spaces = resolvedTabWidth - column % resolvedTabWidth;
      expanded += " ".repeat(spaces);
      column += spaces;
    }
  }
  return expanded;
}
function findMaxLineNumber(file) {
  let highest = 0;
  for (const hunk of file.metadata.hunks) {
    highest = Math.max(highest, hunk.deletionStart + hunk.deletionCount, hunk.additionStart + hunk.additionCount);
  }
  return Math.max(highest, 1);
}
function resolveSplitPaneWidths(width) {
  const usableWidth = Math.max(0, width - DIFF_RAIL_PREFIX_WIDTH - DIFF_SPLIT_SEPARATOR_WIDTH);
  const leftWidth = Math.max(0, DIFF_RAIL_PREFIX_WIDTH + Math.floor(usableWidth / 2));
  const rightWidth = Math.max(0, DIFF_SPLIT_SEPARATOR_WIDTH + usableWidth - Math.floor(usableWidth / 2));
  return { leftWidth, rightWidth };
}
function resolveSplitCellGeometry(width, lineNumberDigits, showLineNumbers, prefixWidth = DIFF_RAIL_PREFIX_WIDTH) {
  const availableWidth = Math.max(0, width - prefixWidth);
  const gutterWidth = Math.min(availableWidth, showLineNumbers ? lineNumberDigits + 3 : 2);
  return {
    gutterWidth,
    contentWidth: Math.max(0, availableWidth - gutterWidth)
  };
}
function resolveStackCellGeometry(width, lineNumberDigits, showLineNumbers, prefixWidth = DIFF_RAIL_PREFIX_WIDTH) {
  const availableWidth = Math.max(0, width - prefixWidth);
  const gutterWidth = Math.min(availableWidth, showLineNumbers ? lineNumberDigits * 2 + 5 : 2);
  return {
    gutterWidth,
    contentWidth: Math.max(0, availableWidth - gutterWidth)
  };
}

// src/ui/diff/diffRows.ts
import {
  cleanLastNewline as cleanLastNewline2,
  getHighlighterOptions,
  getSharedHighlighter,
  renderDiffWithHighlighter,
  renderFileWithHighlighter
} from "@pierre/diffs";

// src/core/changeset/hunkHeader.ts
function formatHunkHeader(hunk) {
  const specs = hunk.hunkSpecs ?? `@@ -${hunk.deletionStart},${hunk.deletionCount} +${hunk.additionStart},${hunk.additionCount} @@`;
  return hunk.hunkContext ? `${specs} ${hunk.hunkContext}` : specs;
}

// src/core/review/expansion.ts
function reviewGapId(position, hunkIndex) {
  return `${position}:${hunkIndex}`;
}
function reviewLeadingGap(source, hunkIndex) {
  const hunk = source.hunks[hunkIndex];
  if (!hunk || hunk.collapsedBefore <= 0) {
    return;
  }
  const oldEnd = hunk.deletionStart - (hunk.deletionCount > 0 ? 1 : 0);
  const newEnd = hunk.additionStart - (hunk.additionCount > 0 ? 1 : 0);
  const oldStart = oldEnd - hunk.collapsedBefore + 1;
  const newStart = newEnd - hunk.collapsedBefore + 1;
  if (oldStart <= 0 || newStart <= 0) {
    return;
  }
  return {
    position: "before",
    hunkIndex,
    oldRange: [oldStart, oldEnd],
    newRange: [newStart, newEnd],
    lineCount: hunk.collapsedBefore
  };
}
function reviewTrailingGap(source) {
  const hunkIndex = source.hunks.length - 1;
  const hunk = source.hunks[hunkIndex];
  if (!hunk || source.isPartial) {
    return;
  }
  const oldCount = source.deletionLines.length - (hunk.deletionLineIndex + hunk.deletionCount);
  const newCount = source.additionLines.length - (hunk.additionLineIndex + hunk.additionCount);
  if (oldCount !== newCount || oldCount <= 0) {
    return;
  }
  const oldStart = hunk.deletionStart + hunk.deletionCount;
  const newStart = hunk.additionStart + hunk.additionCount;
  return {
    position: "trailing",
    hunkIndex,
    oldRange: [oldStart, oldStart + oldCount - 1],
    newRange: [newStart, newStart + newCount - 1],
    lineCount: oldCount
  };
}

// src/ui/lib/color.ts
function hexToRgb(hex) {
  const normalized = /^#?[0-9a-f]{6}$/i.test(hex) ? hex.replace(/^#/, "") : "000000";
  const value = parseInt(normalized, 16);
  return {
    r: value >> 16 & 255,
    g: value >> 8 & 255,
    b: value & 255
  };
}
function blendHex(fg, bg, ratio) {
  const foreground = hexToRgb(fg);
  const background = hexToRgb(bg);
  const mix = (front, back) => Math.max(0, Math.min(255, Math.round(back + (front - back) * ratio)));
  return `#${(mix(foreground.r, background.r) << 16 | mix(foreground.g, background.g) << 8 | mix(foreground.b, background.b)).toString(16).padStart(6, "0")}`;
}
function linearizedChannel(channel) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}
function relativeLuminance(hex) {
  const color = hexToRgb(hex);
  return 0.2126 * linearizedChannel(color.r) + 0.7152 * linearizedChannel(color.g) + 0.0722 * linearizedChannel(color.b);
}
function contrastRatio(foreground, background) {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}
function hexColorDistance(left, right) {
  const a = hexToRgb(left);
  const b = hexToRgb(right);
  return Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);
}

// src/core/theme/legacySyntaxScopes.ts
var LEGACY_CUSTOM_SYNTAX_COLOR_KEYS = [
  "default",
  "keyword",
  "string",
  "comment",
  "number",
  "function",
  "property",
  "type",
  "variable",
  "operator",
  "punctuation"
];
var LEGACY_SYNTAX_ROLE_SCOPES = {
  default: ["source"],
  keyword: ["keyword"],
  string: ["string"],
  comment: ["comment", "punctuation.definition.comment"],
  number: ["constant.numeric"],
  function: ["entity.name.function", "support.function", "variable.function"],
  property: ["variable.other.property", "support.variable.property"],
  type: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
  variable: ["variable"],
  operator: ["keyword.operator"],
  punctuation: ["punctuation"]
};
function legacySyntaxColorsToScopes(syntax) {
  if (!syntax) {
    return;
  }
  const scopes = {};
  for (const role of LEGACY_CUSTOM_SYNTAX_COLOR_KEYS) {
    const color = syntax[role];
    if (!color) {
      continue;
    }
    for (const scope of LEGACY_SYNTAX_ROLE_SCOPES[role]) {
      scopes[scope] = color;
    }
  }
  return Object.keys(scopes).length > 0 ? scopes : undefined;
}
function resolveSyntaxScopeOverrides(syntax, syntaxScopes) {
  const legacyScopes = legacySyntaxColorsToScopes(syntax);
  if (!legacyScopes) {
    return syntaxScopes;
  }
  if (!syntaxScopes) {
    return legacyScopes;
  }
  return { ...legacyScopes, ...syntaxScopes };
}

// src/core/theme/customThemes.ts
var LEGACY_CUSTOM_THEME_ID = "custom";
var RESERVED_THEME_IDS = new Set([
  "auto",
  ...BUNDLED_SHIKI_THEME_IDS
]);

// src/ui/themes.ts
var TRANSPARENT_BACKGROUND = "transparent";
var DEFAULT_DARK_THEME_ID = "github-dark-default";
var DEFAULT_LIGHT_THEME_ID = "github-light-default";
var MIN_GUTTER_CONTRAST = 4.5;
var MIN_DIFF_SIGN_CONTRAST = 3;
var MIN_EMPHASIS_SEPARATION = 28;
var FALLBACK_DIFF_COLORS = {
  dark: { added: "#5ecc71", removed: "#ff6762", modified: "#69b1ff" },
  light: { added: "#0dbe4e", removed: "#ff2e3f", modified: "#009fff" }
};
function readableForeground(preferred, background) {
  if (preferred && contrastRatio(preferred, background) >= MIN_GUTTER_CONTRAST) {
    return preferred;
  }
  return relativeLuminance(background) > 0.45 ? "#000000" : "#ffffff";
}
function readableDimForeground(preferred, background) {
  if (contrastRatio(preferred, background) >= MIN_GUTTER_CONTRAST) {
    return preferred;
  }
  return relativeLuminance(background) > 0.45 ? blendHex("#000000", background, 0.62) : blendHex("#ffffff", background, 0.62);
}
function readableDiffSign(preferred, background) {
  if (contrastRatio(preferred, background) >= MIN_DIFF_SIGN_CONTRAST) {
    return preferred;
  }
  let anchor = relativeLuminance(background) > 0.45 ? "#000000" : "#ffffff";
  if (contrastRatio(anchor, background) < MIN_DIFF_SIGN_CONTRAST) {
    anchor = anchor === "#000000" ? "#ffffff" : "#000000";
  }
  for (let amount = 0.02;amount < 1; amount += 0.02) {
    const candidate = blendHex(anchor, preferred, amount);
    if (contrastRatio(candidate, background) >= MIN_DIFF_SIGN_CONTRAST) {
      return candidate;
    }
  }
  return anchor;
}
function buildSyntaxColors(codeForeground) {
  return {
    default: codeForeground,
    keyword: codeForeground,
    string: codeForeground,
    comment: codeForeground,
    number: codeForeground,
    function: codeForeground,
    property: codeForeground,
    type: codeForeground,
    variable: codeForeground,
    operator: codeForeground,
    punctuation: codeForeground
  };
}
function readableTintedBackground(tintColor, background, foreground, preferredAmount) {
  const maxSteps = Math.round(preferredAmount / 0.01);
  for (let step = maxSteps;step >= 1; step -= 1) {
    const candidate = blendHex(tintColor, background, step * 0.01);
    if (contrastRatio(foreground, candidate) >= MIN_GUTTER_CONTRAST) {
      return candidate;
    }
  }
  return background;
}
function readableSeparatedRowBackground(tintColor, background, foreground, preferredAmount, contentBackground) {
  let readableFallback;
  const maxSteps = Math.round(preferredAmount / 0.02);
  for (let step = maxSteps;step >= 1; step -= 1) {
    const candidate = blendHex(tintColor, background, step * 0.02);
    if (contrastRatio(foreground, candidate) < MIN_GUTTER_CONTRAST) {
      continue;
    }
    if (hexColorDistance(candidate, contentBackground) >= MIN_EMPHASIS_SEPARATION) {
      return candidate;
    }
    readableFallback ??= candidate;
  }
  return readableFallback ?? background;
}
function readableChromeColor(preferred, panel, panelAlt) {
  if (contrastRatio(preferred, panel) >= MIN_GUTTER_CONTRAST && contrastRatio(preferred, panelAlt) >= MIN_GUTTER_CONTRAST) {
    return preferred;
  }
  const lightPanel = relativeLuminance(panelAlt) > 0.45;
  const anchor = lightPanel ? "#000000" : "#ffffff";
  for (const amount of [0.35, 0.5, 0.65, 0.8, 1]) {
    const candidate = blendHex(anchor, preferred, amount);
    if (contrastRatio(candidate, panel) >= MIN_GUTTER_CONTRAST && contrastRatio(candidate, panelAlt) >= MIN_GUTTER_CONTRAST) {
      return candidate;
    }
  }
  return anchor;
}
function buildShikiTheme(themeId) {
  const editorBackground = getBundledShikiThemeBackground(themeId) ?? "#0d1117";
  const editorForeground = getBundledShikiThemeForeground(themeId);
  const diffColors = getBundledShikiThemeDiffColors(themeId);
  const isLightSurface = relativeLuminance(editorBackground) > 0.45;
  const fallbackDiffColors = FALLBACK_DIFF_COLORS[isLightSurface ? "light" : "dark"];
  const rowTint = isLightSurface ? 0.12 : 0.2;
  const contentTint = isLightSurface ? 0.18 : 0.28;
  const selectedTint = isLightSurface ? 0.18 : 0.25;
  const codeForeground = readableForeground(editorForeground, editorBackground);
  const neutralPanel = blendHex(codeForeground, editorBackground, isLightSurface ? 0.04 : 0.08);
  const neutralPanelAlt = blendHex(codeForeground, editorBackground, isLightSurface ? 0.08 : 0.12);
  const neutralBorder = blendHex(codeForeground, editorBackground, isLightSurface ? 0.15 : 0.18);
  const textForeground = readableForeground(editorForeground ?? codeForeground, neutralPanelAlt);
  const lineNumberForeground = readableDimForeground(blendHex(textForeground, editorBackground, 0.56), editorBackground);
  const mutedForeground = readableDimForeground(blendHex(textForeground, editorBackground, 0.56), neutralPanelAlt);
  const addedSignColor = readableDiffSign(diffColors?.added ?? fallbackDiffColors.added, editorBackground);
  const removedSignColor = readableDiffSign(diffColors?.removed ?? fallbackDiffColors.removed, editorBackground);
  const modifiedColor = readableDiffSign(diffColors?.modified ?? fallbackDiffColors.modified, editorBackground);
  const addedContentBg = readableTintedBackground(addedSignColor, editorBackground, textForeground, contentTint);
  const removedContentBg = readableTintedBackground(removedSignColor, editorBackground, textForeground, contentTint);
  const addedBg = readableSeparatedRowBackground(addedSignColor, editorBackground, textForeground, rowTint, addedContentBg);
  const removedBg = readableSeparatedRowBackground(removedSignColor, editorBackground, textForeground, rowTint, removedContentBg);
  const movedBg = readableTintedBackground(modifiedColor, editorBackground, textForeground, rowTint);
  const accentMuted = readableTintedBackground(modifiedColor, editorBackground, textForeground, selectedTint);
  const syntaxColors = buildSyntaxColors(textForeground);
  const badgeAdded = readableChromeColor(addedSignColor, neutralPanel, neutralPanelAlt);
  const badgeRemoved = readableChromeColor(removedSignColor, neutralPanel, neutralPanelAlt);
  const badgeModified = readableChromeColor(modifiedColor, neutralPanel, neutralPanelAlt);
  const themeBase = {
    id: themeId,
    label: themeId,
    appearance: isLightSurface ? "light" : "dark",
    background: editorBackground,
    panel: neutralPanel,
    panelAlt: neutralPanelAlt,
    border: neutralBorder,
    accent: modifiedColor,
    accentMuted,
    text: textForeground,
    muted: mutedForeground,
    contextBg: editorBackground,
    contextContentBg: editorBackground,
    addedBg,
    removedBg,
    movedAddedBg: movedBg,
    movedRemovedBg: movedBg,
    addedContentBg,
    removedContentBg,
    addedSignColor,
    removedSignColor,
    lineNumberBg: editorBackground,
    lineNumberFg: lineNumberForeground,
    selectedHunk: blendHex(modifiedColor, editorBackground, selectedTint),
    noteBackground: neutralPanel,
    noteBorder: modifiedColor,
    noteTitleBackground: neutralPanel,
    noteTitleText: textForeground,
    badgeAdded,
    badgeRemoved,
    badgeNeutral: mutedForeground,
    fileNew: badgeAdded,
    fileDeleted: badgeRemoved,
    fileRenamed: badgeModified,
    fileModified: badgeModified,
    fileUntracked: badgeAdded,
    syntaxTheme: themeId
  };
  return { ...themeBase, syntaxColors };
}
var THEMES = BUNDLED_SHIKI_THEME_IDS.map((themeId) => buildShikiTheme(themeId));
function builtInThemeById(themeId) {
  const resolvedThemeId = resolveBundledShikiThemeId(themeId);
  return THEMES.find((theme) => theme.id === resolvedThemeId);
}
function fallbackTheme(themeMode) {
  const fallbackId = themeMode === "light" ? DEFAULT_LIGHT_THEME_ID : DEFAULT_DARK_THEME_ID;
  return builtInThemeById(fallbackId) ?? THEMES[0];
}
function buildCustomTheme(customTheme) {
  const baseTheme = builtInThemeById(customTheme.base) ?? fallbackTheme();
  const themeBase = {
    ...baseTheme,
    id: customTheme.id,
    label: customTheme.label ?? (customTheme.id === LEGACY_CUSTOM_THEME_ID ? "Custom" : customTheme.id),
    background: customTheme.background ?? baseTheme.background,
    panel: customTheme.panel ?? baseTheme.panel,
    panelAlt: customTheme.panelAlt ?? baseTheme.panelAlt,
    border: customTheme.border ?? baseTheme.border,
    accent: customTheme.accent ?? baseTheme.accent,
    accentMuted: customTheme.accentMuted ?? baseTheme.accentMuted,
    text: customTheme.text ?? baseTheme.text,
    muted: customTheme.muted ?? baseTheme.muted,
    addedBg: customTheme.addedBg ?? baseTheme.addedBg,
    removedBg: customTheme.removedBg ?? baseTheme.removedBg,
    movedAddedBg: customTheme.movedAddedBg ?? baseTheme.movedAddedBg,
    movedRemovedBg: customTheme.movedRemovedBg ?? baseTheme.movedRemovedBg,
    contextBg: customTheme.contextBg ?? baseTheme.contextBg,
    addedContentBg: customTheme.addedContentBg ?? baseTheme.addedContentBg,
    removedContentBg: customTheme.removedContentBg ?? baseTheme.removedContentBg,
    contextContentBg: customTheme.contextContentBg ?? baseTheme.contextContentBg,
    addedSignColor: customTheme.addedSignColor ?? baseTheme.addedSignColor,
    removedSignColor: customTheme.removedSignColor ?? baseTheme.removedSignColor,
    lineNumberBg: customTheme.lineNumberBg ?? baseTheme.lineNumberBg,
    lineNumberFg: customTheme.lineNumberFg ?? baseTheme.lineNumberFg,
    selectedHunk: customTheme.selectedHunk ?? baseTheme.selectedHunk,
    badgeAdded: customTheme.badgeAdded ?? baseTheme.badgeAdded,
    badgeRemoved: customTheme.badgeRemoved ?? baseTheme.badgeRemoved,
    badgeNeutral: customTheme.badgeNeutral ?? baseTheme.badgeNeutral,
    fileNew: customTheme.fileNew ?? baseTheme.fileNew,
    fileDeleted: customTheme.fileDeleted ?? baseTheme.fileDeleted,
    fileRenamed: customTheme.fileRenamed ?? baseTheme.fileRenamed,
    fileModified: customTheme.fileModified ?? baseTheme.fileModified,
    fileUntracked: customTheme.fileUntracked ?? baseTheme.fileUntracked,
    noteBorder: customTheme.noteBorder ?? baseTheme.noteBorder,
    noteBackground: customTheme.noteBackground ?? baseTheme.noteBackground,
    noteTitleBackground: customTheme.noteTitleBackground ?? baseTheme.noteTitleBackground,
    noteTitleText: customTheme.noteTitleText ?? baseTheme.noteTitleText,
    syntaxTheme: baseTheme.syntaxTheme,
    syntaxScopeOverrides: resolveSyntaxScopeOverrides(customTheme.syntax, customTheme.syntaxScopes)
  };
  return { ...themeBase, syntaxColors: baseTheme.syntaxColors };
}
function resolveTheme(requested, themeMode, customThemes = []) {
  if (requested === "auto") {
    return fallbackTheme(themeMode);
  }
  const customTheme = requested ? customThemes.find((theme) => theme.id === requested) : undefined;
  if (customTheme) {
    return buildCustomTheme(customTheme);
  }
  const exact = builtInThemeById(requested);
  if (exact) {
    return exact;
  }
  return fallbackTheme(themeMode);
}

// src/highlightWorkerClient.ts
function highlightWorkerUrl() {
  return new URL("./highlightWorkerEntry.js", import.meta.url);
}
function supportsHighlightWorkerOffload({
  execPath = process.execPath,
  platform = process.platform
} = {}) {
  const executableName = execPath.replaceAll("\\", "/").split("/").at(-1)?.toLowerCase();
  const runsThroughBun = executableName === "bun" || executableName === "bun.exe";
  return platform !== "win32" || runsThroughBun;
}
function createHighlightWorker() {
  const workerUrl = highlightWorkerUrl();
  if (!supportsHighlightWorkerOffload()) {
    throw new Error("Syntax worker offload is unavailable in Bun's compiled Windows runtime.");
  }
  return new Worker(workerUrl);
}
// src/ui/diff/worker/highlightWorkerClient.ts
var worker = null;
var activeRequest = null;
var nextRequestId = 1;
var queuedRequests = [];
function useHighlightWorker(nextWorker) {
  nextWorker.unref?.();
  nextWorker.onmessage = handleWorkerMessage;
  nextWorker.onerror = handleWorkerError;
  worker = nextWorker;
  return nextWorker;
}
function getHighlightWorker() {
  if (worker) {
    return worker;
  }
  return useHighlightWorker(createHighlightWorker());
}
function settleActiveRequest(settle) {
  const request = activeRequest;
  activeRequest = null;
  if (request) {
    settle(request);
  }
  runNextRequest();
}
function handleWorkerMessage(event) {
  const response = event.data;
  const request = activeRequest;
  if (!request || response.version !== 3 || response.id !== request.id) {
    return;
  }
  if (response.ok) {
    settleActiveRequest((active) => active.resolve(response.code));
    return;
  }
  settleActiveRequest((active) => active.reject(new Error(response.message)));
}
function resetWorker(error) {
  const currentWorker = worker;
  worker = null;
  if (currentWorker) {
    currentWorker.terminate();
  }
  const pending = [activeRequest, ...queuedRequests].filter((request) => request !== null);
  activeRequest = null;
  queuedRequests.length = 0;
  for (const request of pending) {
    request.reject(error);
  }
}
function handleWorkerError(event) {
  resetWorker(new Error(event.message || "The syntax highlighting worker failed."));
}
function runNextRequest() {
  if (activeRequest || queuedRequests.length === 0) {
    return;
  }
  const request = queuedRequests.shift();
  if (!request) {
    return;
  }
  activeRequest = request;
  try {
    const message = {
      version: 3,
      id: request.id,
      aliasContext: request.aliasContext,
      metadata: request.metadata,
      appearance: request.appearance,
      language: request.language,
      theme: request.theme
    };
    getHighlightWorker().postMessage(message);
  } catch (error) {
    resetWorker(error instanceof Error ? error : new Error(String(error)));
  }
}
function highlightDiffInWorker({
  aliasContext,
  appearance,
  language,
  metadata,
  theme
}) {
  return new Promise((resolve, reject) => {
    queuedRequests.push({
      id: nextRequestId++,
      aliasContext,
      appearance,
      language,
      metadata,
      theme,
      resolve,
      reject
    });
    runNextRequest();
  });
}
// src/ui/diff/worker/highlightHast.ts
import { cleanLastNewline } from "@pierre/diffs";
var EMPTY_STYLE_VALUES = new Map;
var parsedStyleValueCache = new Map;
function parseStyleValue(styleValue) {
  if (typeof styleValue !== "string") {
    return EMPTY_STYLE_VALUES;
  }
  const cached = parsedStyleValueCache.get(styleValue);
  if (cached) {
    return cached;
  }
  const styles = new Map;
  for (const segment of styleValue.split(";")) {
    const separator = segment.indexOf(":");
    if (separator <= 0) {
      continue;
    }
    const key = segment.slice(0, separator).trim();
    const value = segment.slice(separator + 1).trim();
    if (key && value) {
      styles.set(key, value);
    }
  }
  parsedStyleValueCache.set(styleValue, styles);
  return styles;
}
function appendRun(target, next) {
  if (next.text.length === 0) {
    return;
  }
  const previous = target[target.length - 1];
  if (previous && previous.fg === next.fg && previous.wordDiff === next.wordDiff) {
    previous.text += next.text;
    return;
  }
  target.push(next);
}
function collectHastHighlightRuns(node, appearance) {
  if (!node) {
    return [];
  }
  const runs = [];
  const colorVariable = appearance === "light" ? "--diffs-token-light" : "--diffs-token-dark";
  const visit = (current, inherited) => {
    if (!current) {
      return;
    }
    if (current.type === "text") {
      appendRun(runs, {
        text: cleanLastNewline(current.value),
        fg: inherited.fg,
        wordDiff: inherited.wordDiff
      });
      return;
    }
    const styles = parseStyleValue(current.properties?.style);
    const nextStyle = {
      fg: styles.get(colorVariable) ?? styles.get("color") ?? inherited.fg,
      wordDiff: Object.hasOwn(current.properties ?? {}, "data-diff-span") || inherited.wordDiff
    };
    for (const child of current.children ?? []) {
      visit(child, nextStyle);
    }
  };
  visit(node, { wordDiff: false });
  return runs;
}

// src/ui/diff/worker/highlightCompact.ts
var COMPACT_HIGHLIGHT_PROTOCOL_VERSION = 1;
var COMPACT_HIGHLIGHT_FLAG_WORD_DIFF = 1;
function validateSide({
  side,
  paletteLength,
  lineLengths,
  name
}) {
  if (!(side.lineOffsets instanceof Uint32Array) || !(side.starts instanceof Uint32Array) || !(side.ends instanceof Uint32Array) || !(side.styleIds instanceof Uint16Array) || !(side.flags instanceof Uint8Array)) {
    throw new Error(`Compact ${name} highlight fields must be typed arrays.`);
  }
  const runCount = side.starts.length;
  if (side.ends.length !== runCount || side.styleIds.length !== runCount || side.flags.length !== runCount || side.lineOffsets.length === 0) {
    throw new Error(`Compact ${name} highlight run arrays disagree.`);
  }
  if (lineLengths && lineLengths.length !== side.lineOffsets.length - 1) {
    throw new Error(`Compact ${name} highlight line count does not match its source.`);
  }
  let previousOffset = 0;
  for (let lineIndex = 0;lineIndex < side.lineOffsets.length; lineIndex += 1) {
    const offset = side.lineOffsets[lineIndex];
    if (offset < previousOffset || offset > runCount) {
      throw new Error(`Compact ${name} highlight offsets are invalid.`);
    }
    previousOffset = offset;
  }
  if (previousOffset !== runCount) {
    throw new Error(`Compact ${name} highlight final offset does not reach its runs.`);
  }
  for (let lineIndex = 0;lineIndex < side.lineOffsets.length - 1; lineIndex += 1) {
    const startOffset = side.lineOffsets[lineIndex];
    const endOffset = side.lineOffsets[lineIndex + 1];
    let previousEnd = 0;
    const lineLength = lineLengths?.[lineIndex];
    for (let runIndex = startOffset;runIndex < endOffset; runIndex += 1) {
      const start = side.starts[runIndex];
      const end = side.ends[runIndex];
      const styleId = side.styleIds[runIndex];
      const flags = side.flags[runIndex];
      if (start !== previousEnd || end <= start || lineLength !== undefined && end > lineLength) {
        throw new Error(`Compact ${name} highlight ranges are invalid at line ${lineIndex}.`);
      }
      if (styleId > paletteLength) {
        throw new Error(`Compact ${name} highlight style ID is outside its palette.`);
      }
      if ((flags & ~COMPACT_HIGHLIGHT_FLAG_WORD_DIFF) !== 0) {
        throw new Error(`Compact ${name} highlight contains unsupported flags.`);
      }
      previousEnd = end;
    }
    if (startOffset < endOffset && lineLength !== undefined && previousEnd !== lineLength) {
      throw new Error(`Compact ${name} highlight ranges do not cover line ${lineIndex}.`);
    }
  }
}
function validateCompactHighlightedDiff(payload, lineLengths) {
  if (payload.version !== COMPACT_HIGHLIGHT_PROTOCOL_VERSION) {
    throw new Error(`Unsupported compact highlight protocol version: ${String(payload.version)}`);
  }
  if (!Array.isArray(payload.foregroundPalette) || payload.foregroundPalette.some((color) => typeof color !== "string" || color.length === 0)) {
    throw new Error("Compact syntax palette contains an invalid color.");
  }
  validateSide({
    side: payload.deletion,
    paletteLength: payload.foregroundPalette.length,
    lineLengths: lineLengths?.deletion,
    name: "deletion"
  });
  validateSide({
    side: payload.addition,
    paletteLength: payload.foregroundPalette.length,
    lineLengths: lineLengths?.addition,
    name: "addition"
  });
}
function compactHighlightRunsForLine(payload, sideName, lineIndex) {
  const side = payload[sideName];
  if (!Number.isInteger(lineIndex) || lineIndex < 0 || lineIndex >= side.lineOffsets.length - 1) {
    throw new Error(`Compact ${sideName} highlight line index is outside its payload.`);
  }
  const startOffset = side.lineOffsets[lineIndex];
  const endOffset = side.lineOffsets[lineIndex + 1];
  const runs = [];
  for (let runIndex = startOffset;runIndex < endOffset; runIndex += 1) {
    const styleId = side.styleIds[runIndex];
    runs.push({
      start: side.starts[runIndex],
      end: side.ends[runIndex],
      fg: styleId === 0 ? undefined : payload.foregroundPalette[styleId - 1],
      wordDiff: (side.flags[runIndex] & COMPACT_HIGHLIGHT_FLAG_WORD_DIFF) !== 0
    });
  }
  return runs;
}
// src/ui/diff/worker/highlightContext.ts
function aliasContextHighlightLines(metadata, highlighted) {
  for (const hunk of metadata.hunks) {
    let deletionLineIndex = hunk.deletionLineIndex;
    let additionLineIndex = hunk.additionLineIndex;
    for (const content of hunk.hunkContent) {
      if (content.type === "context") {
        for (let offset = 0;offset < content.lines; offset += 1) {
          const sharedLine = highlighted.additionLines[additionLineIndex + offset] ?? highlighted.deletionLines[deletionLineIndex + offset];
          if (!sharedLine) {
            continue;
          }
          highlighted.deletionLines[deletionLineIndex + offset] = sharedLine;
          highlighted.additionLines[additionLineIndex + offset] = sharedLine;
        }
        deletionLineIndex += content.lines;
        additionLineIndex += content.lines;
        continue;
      }
      deletionLineIndex += content.deletions;
      additionLineIndex += content.additions;
    }
  }
  return highlighted;
}
// src/core/review/geometry.ts
function rebaseReviewHunk(hunk, origins) {
  let deletionLineIndex = origins.deletionLineIndex;
  let additionLineIndex = origins.additionLineIndex;
  const hunkContent = hunk.hunkContent.map((content) => {
    const rebased = { ...content, deletionLineIndex, additionLineIndex };
    if (content.type === "context") {
      deletionLineIndex += content.lines ?? 0;
      additionLineIndex += content.lines ?? 0;
    } else {
      deletionLineIndex += content.deletions ?? 0;
      additionLineIndex += content.additions ?? 0;
    }
    return rebased;
  });
  return {
    hunk: { ...hunk, ...origins, hunkContent },
    deletionEndIndex: deletionLineIndex,
    additionEndIndex: additionLineIndex
  };
}

// src/ui/diff/sourceBackedHighlight.ts
function splitSourceLines(text) {
  const normalized = text.replaceAll(`\r
`, `
`);
  const lines = [];
  let start = 0;
  while (start < normalized.length) {
    const newline = normalized.indexOf(`
`, start);
    if (newline < 0) {
      lines.push(normalized.slice(start));
      break;
    }
    lines.push(normalized.slice(start, newline + 1));
    start = newline + 1;
  }
  return lines;
}
function sourceStartIndex(start, count) {
  return count === 0 ? start : Math.max(start - 1, 0);
}
function assignSourceLine(map, partialLines, fullLines, partialIndex, fullIndex) {
  if (partialIndex < 0 || partialIndex >= partialLines.length || fullIndex < 0 || fullIndex >= fullLines.length || partialLines[partialIndex] !== fullLines[fullIndex]) {
    return false;
  }
  const existing = map[partialIndex];
  if (existing !== undefined && existing >= 0 && existing !== fullIndex) {
    return false;
  }
  map[partialIndex] = fullIndex;
  return true;
}
function mapIsComplete(map) {
  for (let index = 0;index < map.length; index += 1) {
    if (!Number.isInteger(map[index]) || (map[index] ?? -1) < 0) {
      return false;
    }
  }
  return true;
}
function createSourceBackedHighlightPlan(metadata, oldText, newText) {
  if (!metadata.isPartial || metadata.hunks.length === 0) {
    return null;
  }
  if (oldText === null && metadata.type !== "new" || newText === null && metadata.type !== "deleted") {
    return null;
  }
  const fullDeletionLines = splitSourceLines(oldText ?? "");
  const fullAdditionLines = splitSourceLines(newText ?? "");
  const deletionLineMap = Array.from({ length: metadata.deletionLines.length }, () => -1);
  const additionLineMap = Array.from({ length: metadata.additionLines.length }, () => -1);
  let previousDeletionEnd = 0;
  let previousAdditionEnd = 0;
  let finalDeletionEnd = 0;
  let finalAdditionEnd = 0;
  let valid = true;
  const hunks = metadata.hunks.map((hunk) => {
    const deletionStartIndex = sourceStartIndex(hunk.deletionStart, hunk.deletionCount);
    const additionStartIndex = sourceStartIndex(hunk.additionStart, hunk.additionCount);
    if (oldText !== null && deletionStartIndex - previousDeletionEnd !== hunk.collapsedBefore || newText !== null && additionStartIndex - previousAdditionEnd !== hunk.collapsedBefore) {
      valid = false;
    }
    const rebased = rebaseReviewHunk(hunk, {
      deletionLineIndex: deletionStartIndex,
      additionLineIndex: additionStartIndex
    });
    hunk.hunkContent.forEach((content, blockIndex) => {
      const target = rebased.hunk.hunkContent[blockIndex];
      const deletions = content.type === "context" ? content.lines : content.deletions;
      const additions = content.type === "context" ? content.lines : content.additions;
      for (let offset = 0;offset < deletions; offset += 1) {
        valid = assignSourceLine(deletionLineMap, metadata.deletionLines, fullDeletionLines, content.deletionLineIndex + offset, target.deletionLineIndex + offset) && valid;
      }
      for (let offset = 0;offset < additions; offset += 1) {
        valid = assignSourceLine(additionLineMap, metadata.additionLines, fullAdditionLines, content.additionLineIndex + offset, target.additionLineIndex + offset) && valid;
      }
    });
    if (rebased.deletionEndIndex - deletionStartIndex !== hunk.deletionCount || rebased.additionEndIndex - additionStartIndex !== hunk.additionCount || rebased.deletionEndIndex > fullDeletionLines.length || rebased.additionEndIndex > fullAdditionLines.length) {
      valid = false;
    }
    previousDeletionEnd = rebased.deletionEndIndex;
    previousAdditionEnd = rebased.additionEndIndex;
    finalDeletionEnd = rebased.deletionEndIndex;
    finalAdditionEnd = rebased.additionEndIndex;
    return rebased.hunk;
  });
  if (!valid || !mapIsComplete(deletionLineMap) || !mapIsComplete(additionLineMap)) {
    return null;
  }
  return {
    metadata: {
      ...metadata,
      isPartial: false,
      deletionLines: fullDeletionLines.slice(0, finalDeletionEnd),
      additionLines: fullAdditionLines.slice(0, finalAdditionEnd),
      hunks
    },
    deletionLineMap,
    additionLineMap
  };
}
function remapSourceBackedHighlight(plan, highlighted) {
  return {
    deletionLines: plan.deletionLineMap.map((sourceIndex) => highlighted.deletionLines[sourceIndex]),
    additionLines: plan.additionLineMap.map((sourceIndex) => highlighted.additionLines[sourceIndex])
  };
}

// src/ui/diff/syntaxHighlightTheme.ts
import { createHash } from "node:crypto";
import {
  registerCustomTheme,
  resolveTheme as resolvePierreTheme
} from "@pierre/diffs";
var PIERRE_THEME = {
  light: "pierre-light",
  dark: "pierre-dark"
};
var registeredSyntaxThemes = new Set;
function syntaxThemeFingerprint(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 16);
}
async function buildCustomSyntaxTheme(name, baseThemeName, scopeOverrides) {
  const baseTheme = await resolvePierreTheme(baseThemeName);
  const scopeSettings = Object.entries(scopeOverrides).map(([scope, foreground]) => ({
    scope,
    settings: { foreground }
  }));
  return {
    ...baseTheme,
    name,
    settings: [...baseTheme.settings ?? [], ...scopeSettings]
  };
}
function syntaxHighlightThemeName(theme) {
  if (typeof theme === "string") {
    return PIERRE_THEME[theme];
  }
  const baseThemeName = theme.syntaxTheme ?? PIERRE_THEME[theme.appearance];
  const orderedOverrides = Object.entries(theme.syntaxScopeOverrides ?? {}).map(([scope, color]) => [scope, color.toLowerCase()]);
  const fingerprintInput = JSON.stringify({ baseThemeName, orderedOverrides });
  return orderedOverrides.length > 0 ? `hunk-custom-${syntaxThemeFingerprint(fingerprintInput)}` : baseThemeName;
}
function ensureSyntaxHighlightThemeRegistered(theme) {
  const themeName = syntaxHighlightThemeName(theme);
  if (typeof theme === "string" || !theme.syntaxScopeOverrides) {
    return themeName;
  }
  const baseThemeName = theme.syntaxTheme ?? PIERRE_THEME[theme.appearance];
  if (themeName === baseThemeName) {
    return themeName;
  }
  if (!registeredSyntaxThemes.has(themeName)) {
    const capturedOverrides = { ...theme.syntaxScopeOverrides };
    registerCustomTheme(themeName, () => buildCustomSyntaxTheme(themeName, baseThemeName, capturedOverrides));
    registeredSyntaxThemes.add(themeName);
  }
  return themeName;
}

// src/ui/diff/diffRows.ts
var HIGHLIGHT_WORKER_MIN_LINES = 40;
function highlightThemeAppearance(theme) {
  return typeof theme === "string" ? theme : theme.appearance;
}
function pierreRenderOptions(theme) {
  return {
    theme: syntaxHighlightThemeName(theme),
    useTokenTransformer: false,
    tokenizeMaxLineLength: 1000,
    lineDiffType: "word-alt",
    maxLineDiffLength: 1e4
  };
}
var highlighterOptionsByKey = new Map;
var queuedHighlightWork = Promise.resolve();
function tabify(text, tabWidth, initialColumn = 0) {
  return expandDiffTabs(sanitizeTerminalLine(text), tabWidth, initialColumn);
}
var flattenedHighlightedLineCache = new WeakMap;
var WORD_DIFF_BLEND_STEP = 0.005;
var WORD_DIFF_MAX_BLEND = 0.2;
var wordDiffBackgroundCache = new Map;
function strengthenWordDiffBg(lineBg, signColor) {
  let strongestCandidate = lineBg;
  const maxSteps = Math.floor(WORD_DIFF_MAX_BLEND / WORD_DIFF_BLEND_STEP);
  for (let step = 1;step <= maxSteps; step += 1) {
    const blendRatio = step * WORD_DIFF_BLEND_STEP;
    const candidate = blendHex(signColor, lineBg, blendRatio);
    strongestCandidate = candidate;
    if (hexColorDistance(candidate, lineBg) >= MIN_EMPHASIS_SEPARATION) {
      return candidate;
    }
  }
  return strongestCandidate;
}
function isHexThemeColor(color) {
  return /^#[0-9a-f]{6}$/i.test(color);
}
function resolveWordDiffHighlightBg(contentBg, lineBg, signColor) {
  if (contentBg === TRANSPARENT_BACKGROUND || lineBg === TRANSPARENT_BACKGROUND) {
    return contentBg;
  }
  if (!isHexThemeColor(contentBg) || !isHexThemeColor(lineBg)) {
    return contentBg;
  }
  return hexColorDistance(contentBg, lineBg) >= MIN_EMPHASIS_SEPARATION ? contentBg : strengthenWordDiffBg(lineBg, signColor);
}
function wordDiffHighlightBg(kind, theme) {
  const cacheKey = [
    theme.addedContentBg,
    theme.addedBg,
    theme.addedSignColor,
    theme.removedContentBg,
    theme.removedBg,
    theme.removedSignColor,
    theme.contextContentBg,
    theme.panelAlt
  ].join(":");
  let cached = wordDiffBackgroundCache.get(cacheKey);
  if (!cached) {
    const addition = resolveWordDiffHighlightBg(theme.addedContentBg, theme.addedBg, theme.addedSignColor);
    const deletion = resolveWordDiffHighlightBg(theme.removedContentBg, theme.removedBg, theme.removedSignColor);
    cached = {
      addition,
      context: theme.contextContentBg,
      deletion,
      empty: theme.panelAlt
    };
    wordDiffBackgroundCache.set(cacheKey, cached);
  }
  return cached[kind];
}
function mergeSpan(target, next) {
  if (next.text.length === 0) {
    return;
  }
  const previous = target[target.length - 1];
  if (previous && previous.fg === next.fg && previous.bg === next.bg) {
    previous.text += next.text;
    return;
  }
  target.push(next);
}
function flattenHighlightedLine(node, theme, emphasisBg, tabWidth) {
  if (!node) {
    return [];
  }
  const cacheKey = `${theme.appearance}:${emphasisBg}:${tabWidth}`;
  const cachedByTheme = flattenedHighlightedLineCache.get(node);
  const cached = cachedByTheme?.get(cacheKey);
  if (cached) {
    return cached;
  }
  const spans = [];
  let codeColumn = 0;
  for (const run of collectHastHighlightRuns(node, theme.appearance)) {
    const text = tabify(run.text, tabWidth, codeColumn);
    mergeSpan(spans, {
      text,
      fg: run.fg,
      bg: run.wordDiff ? emphasisBg : undefined
    });
    codeColumn += measureTextWidth(text);
  }
  const nextCachedByTheme = cachedByTheme ?? new Map;
  nextCachedByTheme.set(cacheKey, spans);
  if (!cachedByTheme) {
    flattenedHighlightedLineCache.set(node, nextCachedByTheme);
  }
  return spans;
}
function flattenCompactHighlightedLine(rawLine, runs, emphasisBg, tabWidth) {
  const source = cleanLastNewline2(rawLine ?? "");
  const spans = [];
  let sourceColumn = 0;
  let codeColumn = 0;
  const appendText = (text, fg, bg) => {
    const tabified = tabify(text, tabWidth, codeColumn);
    mergeSpan(spans, { text: tabified, fg, bg });
    codeColumn += measureTextWidth(tabified);
  };
  for (const run of runs) {
    appendText(source.slice(sourceColumn, run.start));
    appendText(source.slice(run.start, run.end), run.fg, run.wordDiff ? emphasisBg : undefined);
    sourceColumn = run.end;
  }
  appendText(source.slice(sourceColumn));
  return spans;
}
function compactRunsForHighlightedLine(highlighted, side, lineIndex) {
  const compact = highlighted?.compact;
  if (!compact) {
    return;
  }
  const sourceLineMap = side === "deletion" ? compact.deletionLineMap : compact.additionLineMap;
  const sourceIndex = sourceLineMap ? sourceLineMap[lineIndex] : lineIndex;
  const lineCount = compact.payload[side].lineOffsets.length - 1;
  if (!Number.isInteger(sourceIndex) || sourceIndex === undefined || sourceIndex < 0 || sourceIndex >= lineCount) {
    return;
  }
  return compactHighlightRunsForLine(compact.payload, side, sourceIndex);
}
function cleanDiffLine(line, tabWidth) {
  return tabify(cleanLastNewline2(line ?? ""), tabWidth);
}
function makeSplitCell(kind, lineNumber, rawLine, highlightedLine, theme, tabWidth, moveKind, compactRuns) {
  if (kind === "empty") {
    return {
      kind,
      sign: " ",
      spans: []
    };
  }
  let spans;
  if (highlightedLine !== undefined) {
    spans = flattenHighlightedLine(highlightedLine, theme, wordDiffHighlightBg(kind, theme), tabWidth);
  } else if (compactRuns !== undefined) {
    spans = flattenCompactHighlightedLine(rawLine, compactRuns, wordDiffHighlightBg(kind, theme), tabWidth);
  } else {
    spans = [];
  }
  if (spans.length === 0) {
    const fallbackText = cleanDiffLine(rawLine, tabWidth);
    spans = fallbackText.length > 0 ? [{ text: fallbackText }] : [];
  }
  return {
    kind,
    sign: kind === "addition" ? "+" : kind === "deletion" ? "-" : " ",
    lineNumber,
    moveKind,
    spans
  };
}
function makeStackCell(kind, oldLineNumber, newLineNumber, rawLine, highlightedLine, theme, tabWidth, moveKind, compactRuns) {
  let spans;
  if (highlightedLine !== undefined) {
    spans = flattenHighlightedLine(highlightedLine, theme, wordDiffHighlightBg(kind, theme), tabWidth);
  } else if (compactRuns !== undefined) {
    spans = flattenCompactHighlightedLine(rawLine, compactRuns, wordDiffHighlightBg(kind, theme), tabWidth);
  } else {
    spans = [];
  }
  if (spans.length === 0) {
    const fallbackText = cleanDiffLine(rawLine, tabWidth);
    spans = fallbackText.length > 0 ? [{ text: fallbackText }] : [];
  }
  return {
    kind,
    sign: kind === "addition" ? "+" : kind === "deletion" ? "-" : " ",
    oldLineNumber,
    newLineNumber,
    moveKind,
    spans
  };
}
function collapsedRowText(lines) {
  return `${lines} unchanged ${lines === 1 ? "line" : "lines"}`;
}
function collapsedGapRow(file, address, keyPrefix) {
  return {
    type: "collapsed",
    key: `${file.id}:${keyPrefix}${address.position === "trailing" ? "trailing" : address.hunkIndex}`,
    fileId: file.id,
    hunkIndex: address.hunkIndex,
    text: collapsedRowText(address.lineCount),
    position: address.position,
    oldRange: [...address.oldRange],
    newRange: [...address.newRange]
  };
}
async function prepareHighlighter(language, theme) {
  const resolvedLanguage = language ?? "text";
  const syntaxTheme = ensureSyntaxHighlightThemeRegistered(theme);
  const cacheKey = `${syntaxTheme}:${resolvedLanguage}`;
  const options = highlighterOptionsByKey.get(cacheKey) ?? getHighlighterOptions(resolvedLanguage, {
    theme: syntaxTheme
  });
  if (!highlighterOptionsByKey.has(cacheKey)) {
    highlighterOptionsByKey.set(cacheKey, options);
  }
  return getSharedHighlighter({
    ...options,
    preferredHighlighter: "shiki-wasm"
  });
}
function queueHighlightedWork(run) {
  const queued = queuedHighlightWork.then(() => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(run());
      } catch (error) {
        reject(error);
      }
    }, 0);
  }));
  queuedHighlightWork = queued.then(() => {
    return;
  }, () => {
    return;
  });
  return queued;
}
async function loadSourceBackedHighlightPlan(file) {
  if (!file.metadata.isPartial || !file.sourceFetcher || file.metadata.hunks.length === 0) {
    return null;
  }
  try {
    const [oldText, newText] = await Promise.all([
      file.sourceFetcher.getFullText("old"),
      file.sourceFetcher.getFullText("new")
    ]);
    return createSourceBackedHighlightPlan(file.metadata, oldText, newText);
  } catch {
    return null;
  }
}
function finalizeHighlightedDiff(file, sourcePlan, highlighted) {
  const code = {
    deletionLines: highlighted.code.deletionLines,
    additionLines: highlighted.code.additionLines
  };
  return sourcePlan ? remapSourceBackedHighlight(sourcePlan, code) : aliasContextHighlightLines(file.metadata, code);
}
function renderHighlightedDiff(file, metadata, highlighter, theme, sourcePlan) {
  return queueHighlightedWork(() => {
    const highlighted = renderDiffWithHighlighter(metadata, highlighter, pierreRenderOptions(theme));
    return finalizeHighlightedDiff(file, sourcePlan, highlighted);
  });
}
var MAX_HIGHLIGHTED_DIFF_LINES = 1e4;
var UNHIGHLIGHTED_DIFF = Object.freeze({
  deletionLines: [],
  additionLines: []
});
function highlightedDiffLineCount(metadata) {
  return (metadata.deletionLines?.length ?? 0) + (metadata.additionLines?.length ?? 0);
}
function shouldHighlightMetadata(metadata) {
  return highlightedDiffLineCount(metadata) <= MAX_HIGHLIGHTED_DIFF_LINES;
}
function shouldHighlightDiff(file) {
  return shouldHighlightMetadata(file.metadata);
}
function shouldOffloadHighlight(metadata, theme, options) {
  return options.offloadLargeDiff === true && supportsHighlightWorkerOffload() && typeof theme !== "string" && Object.keys(theme.syntaxScopeOverrides ?? {}).length === 0 && shouldHighlightMetadata(metadata) && Math.max(metadata.deletionLines.length, metadata.additionLines.length) >= HIGHLIGHT_WORKER_MIN_LINES;
}
function compactHighlightLineLengths(metadata) {
  return {
    deletion: metadata.deletionLines.map((line) => cleanLastNewline2(line).length),
    addition: metadata.additionLines.map((line) => cleanLastNewline2(line).length)
  };
}
async function loadWorkerHighlightedDiff(file, metadata, theme, sourcePlan) {
  const aliasContext = sourcePlan === null;
  const language = file.language ?? "text";
  const syntaxTheme = syntaxHighlightThemeName(theme);
  const payload = await highlightDiffInWorker({
    aliasContext,
    appearance: theme.appearance,
    language,
    metadata,
    theme: syntaxTheme
  });
  validateCompactHighlightedDiff(payload, compactHighlightLineLengths(metadata));
  return {
    deletionLines: [],
    additionLines: [],
    compact: {
      payload,
      deletionLineMap: sourcePlan?.deletionLineMap,
      additionLineMap: sourcePlan?.additionLineMap
    }
  };
}
async function loadHighlightedDiff(file, theme = "dark", options = {}) {
  if (!shouldHighlightDiff(file)) {
    return UNHIGHLIGHTED_DIFF;
  }
  const sourcePlan = await loadSourceBackedHighlightPlan(file);
  const highlightSourcePlan = sourcePlan && shouldHighlightMetadata(sourcePlan.metadata) ? sourcePlan : null;
  const metadata = highlightSourcePlan?.metadata ?? file.metadata;
  if (typeof theme !== "string" && shouldOffloadHighlight(metadata, theme, options)) {
    try {
      return await loadWorkerHighlightedDiff(file, metadata, theme, highlightSourcePlan);
    } catch {
      return { deletionLines: [], additionLines: [], retryable: true };
    }
  }
  try {
    const highlighter = await prepareHighlighter(file.language, theme);
    try {
      return await renderHighlightedDiff(file, metadata, highlighter, theme, highlightSourcePlan);
    } catch (error) {
      if (!highlightSourcePlan) {
        throw error;
      }
      return await renderHighlightedDiff(file, file.metadata, highlighter, theme, null);
    }
  } catch {
    const fallbackTheme2 = highlightThemeAppearance(theme);
    const highlighter = await prepareHighlighter("text", fallbackTheme2);
    return await renderHighlightedDiff(file, { ...file.metadata, lang: "text" }, highlighter, fallbackTheme2, null);
  }
}
function buildSplitRows(file, highlighted, theme, tabWidth = DEFAULT_TAB_WIDTH) {
  const rows = [];
  const deletionLines = highlighted?.deletionLines ?? [];
  const additionLines = highlighted?.additionLines ?? [];
  for (const [hunkIndex, hunk] of file.metadata.hunks.entries()) {
    const leadingGap = reviewLeadingGap(file.metadata, hunkIndex);
    if (leadingGap) {
      rows.push(collapsedGapRow(file, leadingGap, "collapsed:"));
    }
    rows.push({
      type: "hunk-header",
      key: `${file.id}:header:${hunkIndex}`,
      fileId: file.id,
      hunkIndex,
      text: formatHunkHeader(hunk)
    });
    let deletionLineIndex = hunk.deletionLineIndex;
    let additionLineIndex = hunk.additionLineIndex;
    let deletionLineNumber = hunk.deletionStart;
    let additionLineNumber = hunk.additionStart;
    for (const content of hunk.hunkContent) {
      if (content.type === "context") {
        for (let offset = 0;offset < content.lines; offset += 1) {
          rows.push({
            type: "split-line",
            key: `${file.id}:split:${hunkIndex}:context:${deletionLineIndex + offset}:${additionLineIndex + offset}`,
            fileId: file.id,
            hunkIndex,
            left: makeSplitCell("context", deletionLineNumber + offset, file.metadata.deletionLines[deletionLineIndex + offset], deletionLines[deletionLineIndex + offset], theme, tabWidth, undefined, compactRunsForHighlightedLine(highlighted, "deletion", deletionLineIndex + offset)),
            right: makeSplitCell("context", additionLineNumber + offset, file.metadata.additionLines[additionLineIndex + offset], additionLines[additionLineIndex + offset], theme, tabWidth, undefined, compactRunsForHighlightedLine(highlighted, "addition", additionLineIndex + offset))
          });
        }
        deletionLineIndex += content.lines;
        additionLineIndex += content.lines;
        deletionLineNumber += content.lines;
        additionLineNumber += content.lines;
        continue;
      }
      const pairedLines = Math.max(content.deletions, content.additions);
      for (let offset = 0;offset < pairedLines; offset += 1) {
        const hasDeletion = offset < content.deletions;
        const hasAddition = offset < content.additions;
        rows.push({
          type: "split-line",
          key: `${file.id}:split:${hunkIndex}:change:${deletionLineIndex + offset}:${additionLineIndex + offset}`,
          fileId: file.id,
          hunkIndex,
          left: hasDeletion ? makeSplitCell("deletion", deletionLineNumber + offset, file.metadata.deletionLines[deletionLineIndex + offset], deletionLines[deletionLineIndex + offset], theme, tabWidth, file.lineMoveKinds?.deletionLines[deletionLineIndex + offset], compactRunsForHighlightedLine(highlighted, "deletion", deletionLineIndex + offset)) : makeSplitCell("empty", undefined, undefined, undefined, theme, tabWidth),
          right: hasAddition ? makeSplitCell("addition", additionLineNumber + offset, file.metadata.additionLines[additionLineIndex + offset], additionLines[additionLineIndex + offset], theme, tabWidth, file.lineMoveKinds?.additionLines[additionLineIndex + offset], compactRunsForHighlightedLine(highlighted, "addition", additionLineIndex + offset)) : makeSplitCell("empty", undefined, undefined, undefined, theme, tabWidth)
        });
      }
      deletionLineIndex += content.deletions;
      additionLineIndex += content.additions;
      deletionLineNumber += content.deletions;
      additionLineNumber += content.additions;
    }
  }
  const trailingGap = reviewTrailingGap(file.metadata);
  if (trailingGap) {
    rows.push(collapsedGapRow(file, trailingGap, "collapsed:"));
  }
  return rows;
}
function buildStackRows(file, highlighted, theme, tabWidth = DEFAULT_TAB_WIDTH) {
  const rows = [];
  const deletionLines = highlighted?.deletionLines ?? [];
  const additionLines = highlighted?.additionLines ?? [];
  for (const [hunkIndex, hunk] of file.metadata.hunks.entries()) {
    const leadingGap = reviewLeadingGap(file.metadata, hunkIndex);
    if (leadingGap) {
      rows.push(collapsedGapRow(file, leadingGap, "stack:collapsed:"));
    }
    rows.push({
      type: "hunk-header",
      key: `${file.id}:stack:header:${hunkIndex}`,
      fileId: file.id,
      hunkIndex,
      text: formatHunkHeader(hunk)
    });
    let deletionLineIndex = hunk.deletionLineIndex;
    let additionLineIndex = hunk.additionLineIndex;
    let deletionLineNumber = hunk.deletionStart;
    let additionLineNumber = hunk.additionStart;
    for (const content of hunk.hunkContent) {
      if (content.type === "context") {
        for (let offset = 0;offset < content.lines; offset += 1) {
          rows.push({
            type: "stack-line",
            key: `${file.id}:stack:${hunkIndex}:context:${deletionLineIndex + offset}:${additionLineIndex + offset}`,
            fileId: file.id,
            hunkIndex,
            cell: makeStackCell("context", deletionLineNumber + offset, additionLineNumber + offset, file.metadata.additionLines[additionLineIndex + offset], additionLines[additionLineIndex + offset], theme, tabWidth, undefined, compactRunsForHighlightedLine(highlighted, "addition", additionLineIndex + offset))
          });
        }
        deletionLineIndex += content.lines;
        additionLineIndex += content.lines;
        deletionLineNumber += content.lines;
        additionLineNumber += content.lines;
        continue;
      }
      for (let offset = 0;offset < content.deletions; offset += 1) {
        rows.push({
          type: "stack-line",
          key: `${file.id}:stack:${hunkIndex}:deletion:${deletionLineIndex + offset}`,
          fileId: file.id,
          hunkIndex,
          cell: makeStackCell("deletion", deletionLineNumber + offset, undefined, file.metadata.deletionLines[deletionLineIndex + offset], deletionLines[deletionLineIndex + offset], theme, tabWidth, file.lineMoveKinds?.deletionLines[deletionLineIndex + offset], compactRunsForHighlightedLine(highlighted, "deletion", deletionLineIndex + offset))
        });
      }
      for (let offset = 0;offset < content.additions; offset += 1) {
        rows.push({
          type: "stack-line",
          key: `${file.id}:stack:${hunkIndex}:addition:${additionLineIndex + offset}`,
          fileId: file.id,
          hunkIndex,
          cell: makeStackCell("addition", undefined, additionLineNumber + offset, file.metadata.additionLines[additionLineIndex + offset], additionLines[additionLineIndex + offset], theme, tabWidth, file.lineMoveKinds?.additionLines[additionLineIndex + offset], compactRunsForHighlightedLine(highlighted, "addition", additionLineIndex + offset))
        });
      }
      deletionLineIndex += content.deletions;
      additionLineIndex += content.additions;
      deletionLineNumber += content.deletions;
      additionLineNumber += content.additions;
    }
  }
  const trailingGap = reviewTrailingGap(file.metadata);
  if (trailingGap) {
    rows.push(collapsedGapRow(file, trailingGap, "stack:collapsed:"));
  }
  return rows;
}

// src/ui/diff/DiffRowView.tsx
import { memo as memo2 } from "react";

// src/ui/diff/codeRowAffordance.ts
var CODE_ROW_ADD_NOTE_BADGE_TEXT = "[+]";
var CODE_ROW_ADD_NOTE_BADGE_WIDTH = CODE_ROW_ADD_NOTE_BADGE_TEXT.length;

// src/ui/diff/styledSpanLayout.ts
function appendRenderSpan(target, span) {
  const previous = target.at(-1);
  if (previous && previous.fg === span.fg && previous.bg === span.bg && previous.transformFg === span.transformFg) {
    previous.text += span.text;
  } else {
    target.push(span);
  }
}
function boundaryScalar(text, first) {
  if (first) {
    const codePoint = text.codePointAt(0);
    return codePoint === undefined ? "" : String.fromCodePoint(codePoint);
  }
  let scalar = "";
  for (const candidate of text) {
    scalar = candidate;
  }
  return scalar;
}
function spansMaySplitGrapheme(spans) {
  for (let index = 1;index < spans.length; index += 1) {
    const left = boundaryScalar(spans[index - 1]?.text ?? "", false);
    const right = boundaryScalar(spans[index]?.text ?? "", true);
    if (left && measureSimpleSanitizedTextWidth(left) === null || right && measureSimpleSanitizedTextWidth(right) === null) {
      return true;
    }
  }
  return false;
}
function mergeCrossSpanGraphemes(spans) {
  const normalized = [];
  const text = spans.map((span) => span.text).join("");
  let sourceIndex = 0;
  let sourceEnd = spans[0]?.text.length ?? 0;
  let cursor = 0;
  for (const cluster of textClusters(text)) {
    while (cursor >= sourceEnd && sourceIndex < spans.length - 1) {
      sourceIndex += 1;
      sourceEnd += spans[sourceIndex]?.text.length ?? 0;
    }
    const source = spans[sourceIndex];
    if (source) {
      appendRenderSpan(normalized, { ...source, text: cluster });
    }
    cursor += cluster.length;
  }
  return normalized;
}
function preserveCrossSpanGraphemes(spans) {
  return spansMaySplitGrapheme(spans) ? mergeCrossSpanGraphemes(spans) : spans;
}
function sliceSpansWindow(spans, offset, width) {
  if (width <= 0) {
    return {
      spans: [],
      usedWidth: 0
    };
  }
  const sliced = [];
  let remainingOffset = Math.max(0, offset);
  let remaining = width;
  let usedWidth = 0;
  for (const span of spans) {
    if (remaining <= 0) {
      break;
    }
    const spanWidth = measureSanitizedTextWidth(span.text);
    if (spanWidth === 0) {
      appendRenderSpan(sliced, { ...span });
      continue;
    }
    if (remainingOffset >= spanWidth) {
      remainingOffset -= spanWidth;
      continue;
    }
    if (remainingOffset === 0 && spanWidth <= remaining) {
      appendRenderSpan(sliced, { ...span });
      remaining -= spanWidth;
      usedWidth += spanWidth;
      continue;
    }
    const visible = sliceSanitizedTextByWidth(span.text, remainingOffset, remaining);
    remainingOffset = 0;
    if (visible.text.length === 0) {
      continue;
    }
    const nextSpan = {
      ...span,
      text: visible.text
    };
    appendRenderSpan(sliced, nextSpan);
    remaining -= visible.width;
    usedWidth += visible.width;
  }
  return {
    spans: sliced,
    usedWidth
  };
}
var SINGLE_PASS_WRAP_LINE_THRESHOLD = 8;
function wrapSpans(spans, width) {
  if (width <= 0) {
    return [[]];
  }
  const lines = [[]];
  let current = lines[0];
  let remaining = width;
  const safeSpans = sanitizeTerminalSpans(spans);
  let plannedSpans = safeSpans;
  let hasCompositionSensitiveSpan = false;
  let simpleSpanWidths = [];
  for (const span of safeSpans) {
    const spanWidth = measureSimpleSanitizedTextWidth(span.text);
    simpleSpanWidths.push(spanWidth);
    hasCompositionSensitiveSpan ||= spanWidth === null;
  }
  if (safeSpans.length > 1 && hasCompositionSensitiveSpan) {
    plannedSpans = mergeCrossSpanGraphemes(safeSpans);
    simpleSpanWidths = plannedSpans.map((span) => measureSimpleSanitizedTextWidth(span.text));
  }
  for (let spanIndex = 0;spanIndex < plannedSpans.length; spanIndex += 1) {
    const span = plannedSpans[spanIndex];
    const simpleSpanWidth = simpleSpanWidths[spanIndex] ?? null;
    const spanWidth = simpleSpanWidth ?? measureSanitizedTextWidth(span.text);
    if (spanWidth === 0) {
      appendRenderSpan(current, { ...span });
      continue;
    }
    if (spanWidth > width * SINGLE_PASS_WRAP_LINE_THRESHOLD || simpleSpanWidth === null || width === 1 && !isPrintableAsciiText(span.text)) {
      for (const chunk of wrapSanitizedTextByWidth(span.text, width, remaining, current.length > 0)) {
        if (chunk.startsNewLine) {
          current = [];
          lines.push(current);
          remaining = width;
        }
        if (chunk.text.length > 0) {
          appendRenderSpan(current, { ...span, text: chunk.text });
        }
        remaining -= chunk.width;
      }
      continue;
    }
    let offset = 0;
    while (offset < spanWidth) {
      if (remaining <= 0) {
        current = [];
        lines.push(current);
        remaining = width;
      }
      const visible = sliceSanitizedTextByWidth(span.text, offset, remaining);
      if (visible.width === 0) {
        if (current.length > 0 || remaining < width) {
          current = [];
          lines.push(current);
          remaining = width;
        }
        const forced = sliceSanitizedTextByWidth(span.text, offset, width);
        if (forced.width === 0) {
          break;
        }
        const nextSpan2 = {
          ...span,
          text: forced.text
        };
        current.push(nextSpan2);
        offset += forced.width;
        remaining = Math.max(0, width - forced.width);
        continue;
      }
      const nextSpan = {
        ...span,
        text: visible.text
      };
      appendRenderSpan(current, nextSpan);
      offset += visible.width;
      remaining -= visible.width;
    }
  }
  return lines;
}
function measureWrappedSpansLineCount(spans, width) {
  if (width <= 0) {
    return 1;
  }
  let lineCount = 1;
  let remaining = width;
  let currentLineHasContent = false;
  const safeSpans = preserveCrossSpanGraphemes(sanitizeTerminalSpans(spans));
  for (const span of safeSpans) {
    for (const chunk of wrapSanitizedTextByWidth(span.text, width, remaining, currentLineHasContent)) {
      if (chunk.startsNewLine) {
        lineCount += 1;
        remaining = width;
        currentLineHasContent = false;
      }
      remaining -= chunk.width;
      currentLineHasContent ||= chunk.text.length > 0;
    }
  }
  return lineCount;
}

// src/ui/diff/codeRowLayout.ts
function planCodeCellLayout(spans, width, prefixWidth, gutterWidth, wrapLines) {
  const contentWidth = Math.max(0, width - prefixWidth - gutterWidth);
  let measuredWrappedLineCount;
  return {
    width,
    prefixWidth,
    gutterWidth,
    contentWidth,
    get wrappedLineCount() {
      measuredWrappedLineCount ??= wrapLines ? measureWrappedSpansLineCount(spans, contentWidth) : 1;
      return measuredWrappedLineCount;
    }
  };
}
function planCodeRowLayout(plannedRow, {
  width,
  lineNumberDigits,
  showLineNumbers,
  wrapLines,
  reserveAddNoteColumn = false,
  showAddNoteBadge = false
}) {
  if (plannedRow.kind !== "diff-row") {
    return null;
  }
  const row = plannedRow.row;
  if (row.type !== "split-line" && row.type !== "stack-line") {
    return null;
  }
  const prefixWidth = 1;
  const trailingGuideWidth = plannedRow.noteGuideSide === "new" ? 1 : 0;
  const addNoteBadgeWidth = showAddNoteBadge || wrapLines && reserveAddNoteColumn ? CODE_ROW_ADD_NOTE_BADGE_WIDTH : 0;
  if (row.type === "split-line") {
    const { leftWidth: leftPaneWidth, rightWidth: rightPaneWidth } = resolveSplitPaneWidths(width);
    const rightWidth = Math.max(0, rightPaneWidth - trailingGuideWidth - addNoteBadgeWidth);
    const leftGeometry = resolveSplitCellGeometry(leftPaneWidth, lineNumberDigits, showLineNumbers, prefixWidth);
    const rightGeometry = resolveSplitCellGeometry(rightWidth, lineNumberDigits, showLineNumbers, prefixWidth);
    const left = planCodeCellLayout(row.left.spans, leftPaneWidth, prefixWidth, leftGeometry.gutterWidth, wrapLines);
    const right = planCodeCellLayout(row.right.spans, rightWidth, prefixWidth, rightGeometry.gutterWidth, wrapLines);
    let measuredWrappedLineCount2;
    return {
      kind: "split",
      left,
      right,
      leftPaneWidth,
      rightPaneWidth,
      noteGuideSide: plannedRow.noteGuideSide,
      trailingGuideWidth,
      addNoteBadgeWidth,
      get wrappedLineCount() {
        measuredWrappedLineCount2 ??= Math.max(left.wrappedLineCount, right.wrappedLineCount);
        return measuredWrappedLineCount2;
      }
    };
  }
  const cellWidth = Math.max(0, width - trailingGuideWidth - addNoteBadgeWidth);
  const cellGeometry = resolveStackCellGeometry(cellWidth, lineNumberDigits, showLineNumbers, prefixWidth);
  const cell = planCodeCellLayout(row.cell.spans, cellWidth, prefixWidth, cellGeometry.gutterWidth, wrapLines);
  let measuredWrappedLineCount;
  return {
    kind: "stack",
    cell,
    noteGuideSide: plannedRow.noteGuideSide,
    trailingGuideWidth,
    addNoteBadgeWidth,
    get wrappedLineCount() {
      measuredWrappedLineCount ??= cell.wrappedLineCount;
      return measuredWrappedLineCount;
    }
  };
}
function legacyPlannedDiffRow(row, anchorId, noteGuideSide) {
  return {
    kind: "diff-row",
    key: row.key,
    stableKey: row.key,
    fileId: row.fileId,
    hunkIndex: row.hunkIndex,
    row,
    anchorId,
    noteGuideSide
  };
}

// src/ui/diff/CodeCellView.tsx
import { Fragment, isValidElement, memo } from "react";
import { parseColor, StyledText } from "@opentui/core";

// src/ui/diff/lineHighlightPaint.ts
function lineHighlightPaintKey(side, line) {
  return `${side}:${line}`;
}
function appendSpan(target, span) {
  const previous = target.at(-1);
  if (previous && previous.fg === span.fg && previous.bg === span.bg && previous.transformFg === span.transformFg) {
    previous.text += span.text;
  } else {
    target.push(span);
  }
}
var lineHighlightCutPlans = new WeakMap;
function lineHighlightCutPlan(ranges) {
  const cached = lineHighlightCutPlans.get(ranges);
  if (cached)
    return cached;
  const cutSet = new Set;
  for (const range of ranges) {
    cutSet.add(range.startCol);
    cutSet.add(range.endCol);
  }
  const cuts = [...cutSet].sort((a, b) => a - b);
  const columnIndex = new Map;
  for (const [index, cut] of cuts.entries())
    columnIndex.set(cut, index);
  const intervals = Math.max(0, cuts.length - 1);
  const tones = Array.from({ length: intervals });
  const skip = new Int32Array(intervals + 1);
  for (let index = 0;index <= intervals; index += 1)
    skip[index] = index;
  const nextUnclaimed = (index) => {
    let current = index;
    while (skip[current] !== current) {
      skip[current] = skip[skip[current]];
      current = skip[current];
    }
    return current;
  };
  for (let index = ranges.length - 1;index >= 0; index -= 1) {
    const range = ranges[index];
    const to = columnIndex.get(range.endCol);
    let interval = nextUnclaimed(columnIndex.get(range.startCol));
    while (interval < to) {
      tones[interval] = range.tone;
      skip[interval] = interval + 1;
      interval = nextUnclaimed(interval + 1);
    }
  }
  const plan = { cuts, tones };
  lineHighlightCutPlans.set(ranges, plan);
  return plan;
}
function toneAtColumn(plan, col) {
  const { cuts, tones } = plan;
  let low = 0;
  let high = cuts.length - 1;
  let interval = -1;
  while (low <= high) {
    const middle = low + high >> 1;
    if (cuts[middle] <= col) {
      interval = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return interval >= 0 && interval < tones.length ? tones[interval] : undefined;
}
function applyLineHighlightsToSpans(spans, ranges, resolveStyle) {
  if (ranges.length === 0) {
    return [...spans];
  }
  const plan = lineHighlightCutPlan(ranges);
  const { cuts } = plan;
  const result = [];
  let col = 0;
  let cutCursor = 0;
  const paint = (span, text, startCol) => {
    if (text.length === 0)
      return;
    const tone = toneAtColumn(plan, startCol);
    const style = tone === undefined ? undefined : resolveStyle(tone);
    if (style === undefined) {
      appendSpan(result, { ...span, text });
      return;
    }
    if (style.transformFg) {
      appendSpan(result, {
        ...span,
        text,
        bg: style.bg ?? span.bg,
        transformFg: style.transformFg
      });
      return;
    }
    appendSpan(result, style.fg === undefined ? { ...span, text, bg: style.bg ?? span.bg } : { ...span, text, bg: style.bg, fg: style.fg });
  };
  for (const span of spans) {
    const safeText = sanitizeTerminalLine(span.text);
    const spanWidth = measureSanitizedTextWidth(safeText);
    if (spanWidth === 0) {
      appendSpan(result, { ...span });
      continue;
    }
    const spanStart = col;
    const spanEnd = col + spanWidth;
    col = spanEnd;
    while (cutCursor < cuts.length && cuts[cutCursor] <= spanStart)
      cutCursor += 1;
    if (cutCursor >= cuts.length || cuts[cutCursor] >= spanEnd) {
      paint(span, span.text, spanStart);
      continue;
    }
    let cursor = cutCursor;
    let pieceIndex = 0;
    let pieceCol = spanStart;
    if (isPrintableAsciiText(safeText)) {
      while (cursor < cuts.length && cuts[cursor] < spanEnd) {
        const cut = cuts[cursor];
        paint(span, safeText.slice(pieceIndex, cut - spanStart), pieceCol);
        pieceIndex = cut - spanStart;
        pieceCol = cut;
        cursor += 1;
      }
      paint(span, safeText.slice(pieceIndex), pieceCol);
      continue;
    }
    let clusterIndex = 0;
    let clusterCol = spanStart;
    for (const cluster of textClusters(safeText)) {
      while (cursor < cuts.length && cuts[cursor] < clusterCol)
        cursor += 1;
      if (cursor < cuts.length && cuts[cursor] === clusterCol) {
        paint(span, safeText.slice(pieceIndex, clusterIndex), pieceCol);
        pieceIndex = clusterIndex;
        pieceCol = clusterCol;
        cursor += 1;
      }
      clusterCol += measureClusterWidth(cluster);
      clusterIndex += cluster.length;
    }
    paint(span, safeText.slice(pieceIndex), pieceCol);
  }
  return result;
}

// src/ui/diff/rowStyle.ts
var INACTIVE_RAIL_BLEND = 0.35;
var SELECTION_BG_BLEND = 0.75;
var CURSOR_LINE_BG_BLEND = 0.2;
var selectionBackgroundCache = new WeakMap;
var cursorLineBackgroundCache = new WeakMap;
function cachedRowBackground(cache, theme, baseBg, blend) {
  let backgrounds = cache.get(theme);
  if (!backgrounds) {
    backgrounds = new Map;
    cache.set(theme, backgrounds);
  }
  let background = backgrounds.get(baseBg);
  if (background === undefined) {
    background = blend();
    backgrounds.set(baseBg, background);
  }
  return background;
}
function diffRailMarker() {
  return "▌";
}
function selectionHighlightBg(baseBg, theme) {
  return cachedRowBackground(selectionBackgroundCache, theme, baseBg, () => blendHex(theme.selectedHunk, baseBg, SELECTION_BG_BLEND));
}
function cursorLineHighlightBg(baseBg, theme) {
  return cachedRowBackground(cursorLineBackgroundCache, theme, baseBg, () => {
    const source = baseBg === TRANSPARENT_BACKGROUND ? theme.appearance === "dark" ? "#000000" : "#ffffff" : baseBg;
    return blendHex(theme.text, source, CURSOR_LINE_BG_BLEND);
  });
}
function neutralRailColor(theme) {
  return theme.lineNumberFg;
}
function dimRailColor(color, theme) {
  return blendHex(color, theme.panel, INACTIVE_RAIL_BLEND);
}
function stackRailColor(kind, theme, selected) {
  let color;
  if (kind === "addition") {
    color = theme.addedSignColor;
  } else if (kind === "deletion") {
    color = theme.removedSignColor;
  } else {
    color = neutralRailColor(theme);
  }
  return selected ? color : dimRailColor(color, theme);
}
function splitLeftRailColor(kind, theme, selected) {
  const color = kind === "deletion" ? theme.removedSignColor : neutralRailColor(theme);
  return selected ? color : dimRailColor(color, theme);
}
function splitRightRailColor(kind, theme, selected) {
  const color = kind === "addition" ? theme.addedSignColor : neutralRailColor(theme);
  return selected ? color : dimRailColor(color, theme);
}
function splitCellPalette(kind, theme, moveKind) {
  if (kind === "addition") {
    return {
      gutterBg: moveKind ? theme.movedAddedBg : theme.addedBg,
      contentBg: moveKind ? theme.movedAddedBg : theme.addedBg,
      signColor: theme.addedSignColor,
      numberColor: theme.addedSignColor
    };
  }
  if (kind === "deletion") {
    return {
      gutterBg: moveKind ? theme.movedRemovedBg : theme.removedBg,
      contentBg: moveKind ? theme.movedRemovedBg : theme.removedBg,
      signColor: theme.removedSignColor,
      numberColor: theme.removedSignColor
    };
  }
  if (kind === "empty") {
    return {
      gutterBg: theme.lineNumberBg,
      contentBg: theme.panelAlt,
      signColor: theme.muted,
      numberColor: theme.lineNumberFg
    };
  }
  return {
    gutterBg: theme.lineNumberBg,
    contentBg: theme.contextBg,
    signColor: theme.muted,
    numberColor: theme.lineNumberFg
  };
}
function stackCellPalette(kind, theme, moveKind) {
  if (kind === "addition") {
    return {
      gutterBg: moveKind ? theme.movedAddedBg : theme.addedBg,
      contentBg: moveKind ? theme.movedAddedBg : theme.addedBg,
      signColor: theme.addedSignColor,
      numberColor: theme.addedSignColor
    };
  }
  if (kind === "deletion") {
    return {
      gutterBg: moveKind ? theme.movedRemovedBg : theme.removedBg,
      contentBg: moveKind ? theme.movedRemovedBg : theme.removedBg,
      signColor: theme.removedSignColor,
      numberColor: theme.removedSignColor
    };
  }
  return {
    gutterBg: theme.lineNumberBg,
    contentBg: theme.contextBg,
    signColor: theme.muted,
    numberColor: theme.lineNumberFg
  };
}
var MIN_LINE_HIGHLIGHT_BG_DISTANCE = 72;
var LINE_HIGHLIGHT_BLEND_STEP = 0.05;
var LINE_HIGHLIGHT_MAX_BLEND = 0.85;
var MIN_LINE_HIGHLIGHT_TEXT_CONTRAST = 3.1;
var lineHighlightStyleCache = new WeakMap;
function isHexThemeColor2(color) {
  return /^#[0-9a-f]{6}$/i.test(color);
}
function effectiveHighlightBackground(baseBg, theme) {
  if (isHexThemeColor2(baseBg))
    return baseBg;
  if (isHexThemeColor2(theme.background))
    return theme.background;
  return theme.appearance === "dark" ? "#000000" : "#ffffff";
}
function lineHighlightToneAnchor(tone, theme) {
  switch (tone) {
    case "info":
      return theme.badgeNeutral;
    case "warning":
      return theme.fileModified;
    case "error":
      return theme.removedSignColor;
    case "current":
    case "match":
      return theme.accent;
  }
}
function strengthenLineHighlightBg(baseBg, anchor, minDistance, textColor) {
  let strongestReadable = baseBg;
  const maxSteps = Math.floor(LINE_HIGHLIGHT_MAX_BLEND / LINE_HIGHLIGHT_BLEND_STEP);
  for (let step = 1;step <= maxSteps; step += 1) {
    const candidate = blendHex(anchor, baseBg, step * LINE_HIGHLIGHT_BLEND_STEP);
    if (contrastRatio(textColor, candidate) < MIN_LINE_HIGHLIGHT_TEXT_CONTRAST) {
      return strongestReadable;
    }
    strongestReadable = candidate;
    if (hexColorDistance(candidate, baseBg) >= minDistance) {
      return candidate;
    }
  }
  return strongestReadable;
}
function lineHighlightToneStyle(tone, baseBg, theme) {
  let styles = lineHighlightStyleCache.get(theme);
  if (!styles) {
    styles = new Map;
    lineHighlightStyleCache.set(theme, styles);
  }
  const cacheKey = `${tone}:${baseBg}`;
  if (styles.has(cacheKey)) {
    return styles.get(cacheKey);
  }
  const resolved = resolveLineHighlightToneStyle(tone, baseBg, theme);
  styles.set(cacheKey, resolved);
  return resolved;
}
var DEFAULT_DIM_RATIO = 0.45;
var MIN_DIM_TEXT_CONTRAST = 1.6;
var dimSpanFgCache = new WeakMap;
function dimSpanFg(sourceFg, baseBg, theme, ratio = DEFAULT_DIM_RATIO) {
  let themeCache = dimSpanFgCache.get(theme);
  if (!themeCache) {
    themeCache = new Map;
    dimSpanFgCache.set(theme, themeCache);
  }
  const cacheKey = `${baseBg}:${sourceFg ?? ""}:${ratio}`;
  const cached = themeCache.get(cacheKey);
  if (cached !== undefined) {
    return cached;
  }
  const effectiveBg = effectiveHighlightBackground(baseBg, theme);
  const fallbackFg = theme.syntaxColors.default || theme.text;
  const effectiveFg = sourceFg && isHexThemeColor2(sourceFg) ? sourceFg : isHexThemeColor2(fallbackFg) ? fallbackFg : theme.appearance === "dark" ? "#adbac7" : "#24292f";
  let result = effectiveFg;
  const candidate = blendHex(effectiveFg, effectiveBg, ratio);
  if (contrastRatio(candidate, effectiveBg) >= MIN_DIM_TEXT_CONTRAST) {
    result = candidate;
  } else {
    for (let step = 1;step <= 9; step += 1) {
      const stepRatio = ratio + step * 0.05;
      if (stepRatio > 0.901)
        break;
      const strengthened = blendHex(effectiveFg, effectiveBg, stepRatio);
      if (contrastRatio(strengthened, effectiveBg) >= MIN_DIM_TEXT_CONTRAST) {
        result = strengthened;
        break;
      }
    }
  }
  themeCache.set(cacheKey, result);
  return result;
}
function resolveLineHighlightToneStyle(tone, baseBg, theme) {
  if (tone === "dim") {
    return {
      transformFg: (sourceFg, spanBg) => dimSpanFg(sourceFg, spanBg ?? baseBg, theme)
    };
  }
  if (tone === "current" && isHexThemeColor2(theme.text)) {
    return { bg: theme.text, fg: effectiveHighlightBackground(theme.background, theme) };
  }
  const anchor = lineHighlightToneAnchor(tone, theme);
  if (!isHexThemeColor2(anchor) || !isHexThemeColor2(theme.text)) {
    return;
  }
  return {
    bg: strengthenLineHighlightBg(effectiveHighlightBackground(baseBg, theme), anchor, MIN_LINE_HIGHLIGHT_BG_DISTANCE, theme.text)
  };
}
function diffLineNumberText(value, width) {
  return value === undefined ? " ".repeat(width) : String(value).padStart(width, " ");
}
function stackGutterText(cell, lineNumberDigits, showLineNumbers) {
  if (!showLineNumbers) {
    return `${cell.sign} `;
  }
  const oldNumber = diffLineNumberText(cell.oldLineNumber, lineNumberDigits);
  const newNumber = diffLineNumberText(cell.newLineNumber, lineNumberDigits);
  return `${oldNumber} ${newNumber} ${cell.sign}`;
}
function splitGutterText(cell, lineNumberDigits, showLineNumbers) {
  if (!showLineNumbers) {
    return `${cell.sign} `;
  }
  const number = cell.lineNumber ? String(cell.lineNumber).padStart(lineNumberDigits, " ") : " ".repeat(lineNumberDigits);
  return `${number} ${cell.sign}`;
}

// src/ui/diff/CodeCellView.tsx
import { jsxDEV, Fragment as Fragment2 } from "@opentui/react/jsx-dev-runtime";
var FULL_CODE_CELL_COL_RANGE = {
  startCol: 0,
  endCol: Number.MAX_SAFE_INTEGER
};
var styledTextColorCache = new Map;
var addNoteSpacerContentCache = new Map;
function styledTextColor(value) {
  if (!value) {
    return;
  }
  let parsed = styledTextColorCache.get(value);
  if (!parsed) {
    parsed = parseColor(value);
    styledTextColorCache.set(value, parsed);
  }
  return parsed;
}
function renderedSpanForeground(span, fallbackColor, renderedBg) {
  const sourceFg = span.fg ?? fallbackColor;
  return span.transformFg ? span.transformFg(sourceFg, renderedBg) : sourceFg;
}
function styledTextFromSpanNodes(nodes) {
  const chunks = [];
  const collect = (node, fg, bg) => {
    if (node === null || node === undefined || typeof node === "boolean") {
      return;
    }
    if (typeof node === "string" || typeof node === "number") {
      chunks.push({
        __isChunk: true,
        text: String(node),
        fg: styledTextColor(fg),
        bg: styledTextColor(bg)
      });
      return;
    }
    if (Array.isArray(node)) {
      for (const child of node) {
        collect(child, fg, bg);
      }
      return;
    }
    if (!isValidElement(node)) {
      return;
    }
    if (node.type === Fragment) {
      collect(node.props.children, fg, bg);
      return;
    }
    if (node.type === "span") {
      collect(node.props.children, node.props.fg ?? fg, node.props.bg ?? bg);
    }
  };
  collect(nodes);
  return new StyledText(chunks);
}
function appendFixedInlineChunks(chunks, spans, width, fallbackColor, fallbackBg, highlightBg) {
  const { spans: trimmed, usedWidth } = sliceSpansWindow(spans, 0, width);
  const renderedBackground = (background) => highlightBg ? highlightBg(background) : background;
  const paddingAmount = Math.max(0, width - usedWidth);
  const lastSpan = trimmed.at(-1);
  let paddingMerged = false;
  if (paddingAmount > 0 && lastSpan && (lastSpan.fg ?? fallbackColor) === fallbackColor && (lastSpan.bg ?? fallbackBg) === fallbackBg) {
    lastSpan.text += " ".repeat(paddingAmount);
    paddingMerged = true;
  }
  for (const span of trimmed) {
    const background = renderedBackground(span.bg ?? fallbackBg);
    chunks.push({
      __isChunk: true,
      text: span.text,
      fg: styledTextColor(renderedSpanForeground(span, fallbackColor, background)),
      bg: styledTextColor(background)
    });
  }
  if (!paddingMerged && paddingAmount > 0) {
    chunks.push({
      __isChunk: true,
      text: " ".repeat(paddingAmount),
      fg: styledTextColor(fallbackColor),
      bg: styledTextColor(renderedBackground(fallbackBg))
    });
  }
}
function appendPlainInlineChunks(chunks, spans, width, horizontalOffset, fallbackColor, fallbackBg) {
  const { spans: trimmed, usedWidth } = sliceSpansWindow(sanitizeTerminalSpans(spans), horizontalOffset, width);
  const paddingAmount = Math.max(0, width - usedWidth);
  const lastSpan = trimmed.at(-1);
  let paddingMerged = false;
  if (paddingAmount > 0 && lastSpan && (lastSpan.fg ?? fallbackColor) === fallbackColor && (lastSpan.bg ?? fallbackBg) === fallbackBg) {
    lastSpan.text += " ".repeat(paddingAmount);
    paddingMerged = true;
  }
  for (const span of trimmed) {
    const background = span.bg ?? fallbackBg;
    chunks.push({
      __isChunk: true,
      text: span.text,
      fg: styledTextColor(renderedSpanForeground(span, fallbackColor, background)),
      bg: styledTextColor(background)
    });
  }
  if (!paddingMerged && paddingAmount > 0) {
    chunks.push({
      __isChunk: true,
      text: " ".repeat(paddingAmount),
      fg: styledTextColor(fallbackColor),
      bg: styledTextColor(fallbackBg)
    });
  }
}
function appendPlainSplitCellChunks(chunks, cell, geometry, lineNumberDigits, showLineNumbers, theme, contentOffset, prefix) {
  const palette = splitCellPalette(cell.kind, theme, cell.moveKind);
  chunks.push({
    __isChunk: true,
    text: prefix.text,
    fg: styledTextColor(prefix.fg),
    bg: styledTextColor(prefix.bg)
  }, {
    __isChunk: true,
    text: splitGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(geometry.gutterWidth),
    fg: styledTextColor(palette.numberColor),
    bg: styledTextColor(palette.gutterBg)
  });
  appendPlainInlineChunks(chunks, cell.spans, geometry.contentWidth, contentOffset, theme.syntaxColors.default, palette.contentBg);
}
function appendPlainStackCellChunks(chunks, cell, geometry, lineNumberDigits, showLineNumbers, theme, contentOffset, prefix) {
  const palette = stackCellPalette(cell.kind, theme, cell.moveKind);
  chunks.push({
    __isChunk: true,
    text: prefix.text,
    fg: styledTextColor(prefix.fg),
    bg: styledTextColor(prefix.bg)
  }, {
    __isChunk: true,
    text: stackGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(geometry.gutterWidth),
    fg: styledTextColor(palette.numberColor),
    bg: styledTextColor(palette.gutterBg)
  });
  appendPlainInlineChunks(chunks, cell.spans, geometry.contentWidth, contentOffset, theme.syntaxColors.default, palette.contentBg);
}
function isChunkCompatibleWrappedHighlight(highlight) {
  return !highlight?.colRange || highlight.colRange === FULL_CODE_CELL_COL_RANGE;
}
function appendWrappedCellChunks(chunks, line, palette, contentWidth, theme, prefix, highlight) {
  const renderedBackground = (background) => highlight ? highlight.bg(background) : background;
  const contentHighlightBg = highlight?.colRange === FULL_CODE_CELL_COL_RANGE ? highlight.bg : undefined;
  chunks.push({
    __isChunk: true,
    text: prefix.text,
    fg: styledTextColor(prefix.fg),
    bg: styledTextColor(renderedBackground(prefix.bg))
  }, {
    __isChunk: true,
    text: line.gutterText,
    fg: styledTextColor(palette.numberColor),
    bg: styledTextColor(renderedBackground(palette.gutterBg))
  });
  appendFixedInlineChunks(chunks, line.spans, contentWidth, theme.syntaxColors.default, palette.contentBg, contentHighlightBg);
}
function renderInlineSpans(spans, width, fallbackColor, fallbackBg, keyPrefix, horizontalOffset = 0, highlightBg, selectionColRange, spansAreSanitized = false) {
  const { spans: trimmed, usedWidth } = sliceSpansWindow(spansAreSanitized ? spans : sanitizeTerminalSpans(spans), horizontalOffset, width);
  const fullHighlightBg = highlightBg && selectionColRange && selectionColRange.start <= 0 && selectionColRange.end >= width ? highlightBg : undefined;
  const needsBlending = !fullHighlightBg && highlightBg && selectionColRange;
  const renderedBackground = (background) => fullHighlightBg ? fullHighlightBg(background) : background;
  const paddingAmount = Math.max(0, width - usedWidth);
  let paddingMerged = false;
  const lastSpan = trimmed.at(-1);
  if (!needsBlending && paddingAmount > 0 && lastSpan && (lastSpan.fg ?? fallbackColor) === fallbackColor && (lastSpan.bg ?? fallbackBg) === fallbackBg) {
    lastSpan.text += " ".repeat(paddingAmount);
    paddingMerged = true;
  }
  const elements = [];
  let colPos = 0;
  let elementIndex = 0;
  for (const span of trimmed) {
    const baseBackground = span.bg ?? fallbackBg;
    if (!needsBlending) {
      const background = renderedBackground(baseBackground);
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, background),
        bg: background,
        children: span.text
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
      continue;
    }
    const spanWidth = measureTextWidth(span.text);
    const spanStart = colPos;
    const spanEnd = colPos + spanWidth;
    colPos = spanEnd;
    if (spanEnd <= selectionColRange.start || spanStart >= selectionColRange.end) {
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, baseBackground),
        bg: baseBackground,
        children: span.text
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
      continue;
    }
    const localSelStart = Math.max(0, selectionColRange.start - spanStart);
    const localSelEnd = Math.min(spanWidth, selectionColRange.end - spanStart);
    if (localSelStart >= localSelEnd) {
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, baseBackground),
        bg: baseBackground,
        children: span.text
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
      continue;
    }
    const prefix = sliceTextByWidth(span.text, 0, localSelStart).text;
    const selected = sliceTextByWidth(span.text, localSelStart, localSelEnd - localSelStart).text;
    const suffix = sliceTextByWidth(span.text, localSelEnd, spanWidth - localSelEnd).text;
    if (prefix) {
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, baseBackground),
        bg: baseBackground,
        children: prefix
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
    }
    if (selected) {
      const selectedBackground = highlightBg(baseBackground);
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, selectedBackground),
        bg: selectedBackground,
        children: selected
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
    }
    if (suffix) {
      elements.push(/* @__PURE__ */ jsxDEV("span", {
        fg: renderedSpanForeground(span, fallbackColor, baseBackground),
        bg: baseBackground,
        children: suffix
      }, `${keyPrefix}:${elementIndex++}`, false, undefined, this));
    }
  }
  if (needsBlending) {
    const padStart = colPos;
    const padEnd = colPos + Math.max(0, width - usedWidth);
    if (paddingAmount > 0) {
      if (padStart < selectionColRange.end && padEnd > selectionColRange.start) {
        const beforeSel = Math.max(0, selectionColRange.start - padStart);
        const inSel = Math.min(paddingAmount, selectionColRange.end - padStart) - Math.max(0, beforeSel);
        const afterSel = paddingAmount - beforeSel - Math.max(0, inSel);
        if (beforeSel > 0) {
          elements.push(/* @__PURE__ */ jsxDEV("span", {
            fg: fallbackColor,
            bg: fallbackBg,
            children: " ".repeat(beforeSel)
          }, `${keyPrefix}:pad-before`, false, undefined, this));
        }
        if (inSel > 0) {
          elements.push(/* @__PURE__ */ jsxDEV("span", {
            fg: fallbackColor,
            bg: highlightBg(fallbackBg),
            children: " ".repeat(inSel)
          }, `${keyPrefix}:pad-sel`, false, undefined, this));
        }
        if (afterSel > 0) {
          elements.push(/* @__PURE__ */ jsxDEV("span", {
            fg: fallbackColor,
            bg: fallbackBg,
            children: " ".repeat(afterSel)
          }, `${keyPrefix}:pad-after`, false, undefined, this));
        }
      } else {
        elements.push(/* @__PURE__ */ jsxDEV("span", {
          fg: fallbackColor,
          bg: fallbackBg,
          children: " ".repeat(paddingAmount)
        }, `${keyPrefix}:pad`, false, undefined, this));
      }
    }
  } else if (!paddingMerged && paddingAmount > 0) {
    elements.push(/* @__PURE__ */ jsxDEV("span", {
      fg: fallbackColor,
      bg: renderedBackground(fallbackBg),
      children: " ".repeat(paddingAmount)
    }, `${keyPrefix}:pad`, false, undefined, this));
  }
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: elements
  }, undefined, false, undefined, this);
}
function buildWrappedSplitCell(cell, geometry, lineNumberDigits, showLineNumbers, theme) {
  const palette = splitCellPalette(cell.kind, theme, cell.moveKind);
  const firstGutterText = splitGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(geometry.gutterWidth);
  const wrappedSpans = wrapSpans(cell.spans, geometry.contentWidth);
  return {
    gutterWidth: geometry.gutterWidth,
    contentWidth: geometry.contentWidth,
    palette,
    lines: wrappedSpans.map((spans, index) => ({
      gutterText: index === 0 ? firstGutterText : " ".repeat(geometry.gutterWidth),
      spans
    }))
  };
}
function buildWrappedStackCell(cell, geometry, lineNumberDigits, showLineNumbers, theme) {
  const palette = stackCellPalette(cell.kind, theme, cell.moveKind);
  const firstGutterText = stackGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(geometry.gutterWidth);
  const wrappedSpans = wrapSpans(cell.spans, geometry.contentWidth);
  return {
    gutterWidth: geometry.gutterWidth,
    contentWidth: geometry.contentWidth,
    palette,
    lines: wrappedSpans.map((spans, index) => ({
      gutterText: index === 0 ? firstGutterText : " ".repeat(geometry.gutterWidth),
      spans
    }))
  };
}
function applyHighlightPalette(palette, highlightBg) {
  return {
    ...palette,
    gutterBg: highlightBg(palette.gutterBg)
  };
}
function applyHighlightPrefix(prefix, highlightBg) {
  return {
    ...prefix,
    bg: highlightBg(prefix.bg)
  };
}
var SplitCellContent = memo(function SplitCellContent2({
  cell,
  gutterWidth,
  contentWidth,
  lineNumberDigits,
  showLineNumbers,
  theme,
  keyPrefix,
  contentOffset,
  prefixWidth,
  highlight,
  paneOffset
}) {
  const basePalette = splitCellPalette(cell.kind, theme, cell.moveKind);
  const palette = highlight ? applyHighlightPalette(basePalette, highlight.bg) : basePalette;
  const gutterText = splitGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(gutterWidth);
  const globalContentStart = paneOffset + prefixWidth + gutterWidth;
  const colRange = highlight?.colRange;
  const localColRange = colRange && globalContentStart < colRange.endCol ? {
    start: Math.max(0, colRange.startCol - globalContentStart),
    end: Math.min(contentWidth, Math.max(0, colRange.endCol - globalContentStart + 1))
  } : undefined;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      /* @__PURE__ */ jsxDEV("span", {
        fg: palette.numberColor,
        bg: palette.gutterBg,
        children: gutterText
      }, `${keyPrefix}:gutter`, false, undefined, this),
      renderInlineSpans(cell.spans, contentWidth, theme.syntaxColors.default, palette.contentBg, `${keyPrefix}:content`, contentOffset, highlight?.bg, localColRange)
    ]
  }, undefined, true, undefined, this);
});
function renderSplitCell(cell, geometry, lineNumberDigits, showLineNumbers, theme, keyPrefix, contentOffset = 0, prefix, highlight, paneOffset = 0) {
  const resolvedPrefix = highlight && prefix ? applyHighlightPrefix(prefix, highlight.bg) : prefix;
  const prefixWidth = resolvedPrefix?.text.length ?? 0;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      resolvedPrefix ? /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPrefix.fg,
        bg: resolvedPrefix.bg,
        children: resolvedPrefix.text
      }, `${keyPrefix}:prefix`, false, undefined, this) : null,
      /* @__PURE__ */ jsxDEV(SplitCellContent, {
        cell,
        gutterWidth: geometry.gutterWidth,
        contentWidth: geometry.contentWidth,
        lineNumberDigits,
        showLineNumbers,
        theme,
        keyPrefix,
        contentOffset,
        prefixWidth,
        highlight,
        paneOffset
      }, `${keyPrefix}:body`, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var StackCellContent = memo(function StackCellContent2({
  cell,
  gutterWidth,
  contentWidth,
  lineNumberDigits,
  showLineNumbers,
  theme,
  keyPrefix,
  contentOffset,
  prefixWidth,
  highlight
}) {
  const basePalette = stackCellPalette(cell.kind, theme, cell.moveKind);
  const palette = highlight ? applyHighlightPalette(basePalette, highlight.bg) : basePalette;
  const globalContentStart = prefixWidth + gutterWidth;
  const colRange = highlight?.colRange;
  const localColRange = colRange && globalContentStart < colRange.endCol ? {
    start: Math.max(0, colRange.startCol - globalContentStart),
    end: Math.min(contentWidth, Math.max(0, colRange.endCol - globalContentStart + 1))
  } : undefined;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      /* @__PURE__ */ jsxDEV("span", {
        fg: palette.numberColor,
        bg: palette.gutterBg,
        children: stackGutterText(cell, lineNumberDigits, showLineNumbers).padEnd(gutterWidth)
      }, `${keyPrefix}:gutter`, false, undefined, this),
      renderInlineSpans(cell.spans, contentWidth, theme.syntaxColors.default, palette.contentBg, `${keyPrefix}:content`, contentOffset, highlight?.bg, localColRange)
    ]
  }, undefined, true, undefined, this);
});
function renderStackCell(cell, geometry, lineNumberDigits, showLineNumbers, theme, keyPrefix, contentOffset = 0, prefix, highlight) {
  const resolvedPrefix = highlight && prefix ? applyHighlightPrefix(prefix, highlight.bg) : prefix;
  const prefixWidth = resolvedPrefix?.text.length ?? 0;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      resolvedPrefix ? /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPrefix.fg,
        bg: resolvedPrefix.bg,
        children: resolvedPrefix.text
      }, `${keyPrefix}:prefix`, false, undefined, this) : null,
      /* @__PURE__ */ jsxDEV(StackCellContent, {
        cell,
        gutterWidth: geometry.gutterWidth,
        contentWidth: geometry.contentWidth,
        lineNumberDigits,
        showLineNumbers,
        theme,
        keyPrefix,
        contentOffset,
        prefixWidth,
        highlight
      }, `${keyPrefix}:body`, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function renderWrappedSplitCellLine(line, palette, contentWidth, theme, keyPrefix, prefix, highlight, paneOffset = 0) {
  const resolvedPalette = highlight ? applyHighlightPalette(palette, highlight.bg) : palette;
  const resolvedPrefix = highlight ? applyHighlightPrefix(prefix, highlight.bg) : prefix;
  const prefixWidth = prefix.text.length;
  const gutterWidth = line.gutterText.length;
  const globalContentStart = paneOffset + prefixWidth + gutterWidth;
  const colRange = highlight?.colRange;
  const localColRange = colRange && globalContentStart < colRange.endCol ? {
    start: Math.max(0, colRange.startCol - globalContentStart),
    end: Math.min(contentWidth, Math.max(0, colRange.endCol - globalContentStart + 1))
  } : undefined;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPrefix.fg,
        bg: resolvedPrefix.bg,
        children: resolvedPrefix.text
      }, `${keyPrefix}:prefix`, false, undefined, this),
      /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPalette.numberColor,
        bg: resolvedPalette.gutterBg,
        children: line.gutterText
      }, `${keyPrefix}:gutter`, false, undefined, this),
      renderInlineSpans(line.spans, contentWidth, theme.syntaxColors.default, resolvedPalette.contentBg, `${keyPrefix}:content`, 0, highlight?.bg, localColRange, true)
    ]
  }, undefined, true, undefined, this);
}
function renderWrappedStackCellLine(line, palette, contentWidth, theme, keyPrefix, prefix, highlight) {
  const resolvedPalette = highlight ? applyHighlightPalette(palette, highlight.bg) : palette;
  const resolvedPrefix = highlight ? applyHighlightPrefix(prefix, highlight.bg) : prefix;
  const prefixWidth = prefix.text.length;
  const gutterWidth = line.gutterText.length;
  const globalContentStart = prefixWidth + gutterWidth;
  const colRange = highlight?.colRange;
  const localColRange = colRange && globalContentStart < colRange.endCol ? {
    start: Math.max(0, colRange.startCol - globalContentStart),
    end: Math.min(contentWidth, Math.max(0, colRange.endCol - globalContentStart + 1))
  } : undefined;
  return /* @__PURE__ */ jsxDEV(Fragment2, {
    children: [
      /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPrefix.fg,
        bg: resolvedPrefix.bg,
        children: resolvedPrefix.text
      }, `${keyPrefix}:prefix`, false, undefined, this),
      /* @__PURE__ */ jsxDEV("span", {
        fg: resolvedPalette.numberColor,
        bg: resolvedPalette.gutterBg,
        children: line.gutterText
      }, `${keyPrefix}:gutter`, false, undefined, this),
      renderInlineSpans(line.spans, contentWidth, theme.syntaxColors.default, resolvedPalette.contentBg, `${keyPrefix}:content`, 0, highlight?.bg, localColRange, true)
    ]
  }, undefined, true, undefined, this);
}
function withSplitCellLineHighlights(cell, side, lineHighlights, theme) {
  if (cell.kind === "empty" || cell.lineNumber === undefined) {
    return cell;
  }
  const ranges = lineHighlights.get(lineHighlightPaintKey(side, cell.lineNumber));
  if (!ranges) {
    return cell;
  }
  const contentBg = splitCellPalette(cell.kind, theme, cell.moveKind).contentBg;
  return {
    ...cell,
    spans: applyLineHighlightsToSpans(cell.spans, ranges, (tone) => lineHighlightToneStyle(tone, contentBg, theme))
  };
}
function withRowLineHighlights(row, lineHighlights, theme) {
  if (!lineHighlights || lineHighlights.size === 0) {
    return row;
  }
  if (row.type === "split-line") {
    const left = withSplitCellLineHighlights(row.left, "old", lineHighlights, theme);
    const right = withSplitCellLineHighlights(row.right, "new", lineHighlights, theme);
    return left === row.left && right === row.right ? row : { ...row, left, right };
  }
  if (row.type === "stack-line") {
    const cell = row.cell;
    const ranges = (cell.newLineNumber !== undefined ? lineHighlights.get(lineHighlightPaintKey("new", cell.newLineNumber)) : undefined) ?? (cell.oldLineNumber !== undefined ? lineHighlights.get(lineHighlightPaintKey("old", cell.oldLineNumber)) : undefined);
    if (!ranges) {
      return row;
    }
    const contentBg = stackCellPalette(cell.kind, theme, cell.moveKind).contentBg;
    return {
      ...row,
      cell: {
        ...cell,
        spans: applyLineHighlightsToSpans(cell.spans, ranges, (tone) => lineHighlightToneStyle(tone, contentBg, theme))
      }
    };
  }
  return row;
}
function renderNowrapSplitCodeCells({
  row,
  layout,
  lineNumberDigits,
  showLineNumbers,
  theme,
  horizontalOffset,
  leftPrefix,
  rightPrefix,
  leftHighlight,
  rightHighlight,
  guideOnNewSide
}) {
  if (!leftHighlight && !rightHighlight) {
    const chunks = [];
    appendPlainSplitCellChunks(chunks, row.left, layout.left, lineNumberDigits, showLineNumbers, theme, horizontalOffset, leftPrefix);
    appendPlainSplitCellChunks(chunks, row.right, layout.right, lineNumberDigits, showLineNumbers, theme, horizontalOffset, rightPrefix);
    appendNoteGuideChunk(chunks, guideOnNewSide, theme);
    return /* @__PURE__ */ jsxDEV("text", {
      content: new StyledText(chunks)
    }, `${row.key}:plain`, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV("text", {
    children: [
      renderSplitCell(row.left, layout.left, lineNumberDigits, showLineNumbers, theme, `${row.key}:left`, horizontalOffset, leftPrefix, leftHighlight, 0),
      renderSplitCell(row.right, layout.right, lineNumberDigits, showLineNumbers, theme, `${row.key}:right`, horizontalOffset, rightPrefix, rightHighlight, layout.left.width),
      guideOnNewSide ? /* @__PURE__ */ jsxDEV("span", {
        fg: theme.noteBorder,
        children: "│"
      }, `${row.key}:note-guide`, false, undefined, this) : null
    ]
  }, `${row.key}:painted`, true, undefined, this);
}
function renderNowrapStackCodeCell({
  row,
  layout,
  lineNumberDigits,
  showLineNumbers,
  theme,
  horizontalOffset,
  prefix,
  highlight,
  guideOnNewSide
}) {
  if (!highlight) {
    const chunks = [];
    appendPlainStackCellChunks(chunks, row.cell, layout.cell, lineNumberDigits, showLineNumbers, theme, horizontalOffset, prefix);
    appendNoteGuideChunk(chunks, guideOnNewSide, theme);
    return /* @__PURE__ */ jsxDEV("text", {
      content: new StyledText(chunks)
    }, `${row.key}:plain`, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV("text", {
    children: [
      renderStackCell(row.cell, layout.cell, lineNumberDigits, showLineNumbers, theme, `${row.key}:stack`, horizontalOffset, prefix, highlight),
      guideOnNewSide ? /* @__PURE__ */ jsxDEV("span", {
        fg: theme.noteBorder,
        children: "│"
      }, `${row.key}:note-guide`, false, undefined, this) : null
    ]
  }, `${row.key}:painted`, true, undefined, this);
}
function appendNoteGuideChunk(chunks, enabled, theme) {
  if (!enabled)
    return;
  chunks.push({ __isChunk: true, text: "│", fg: styledTextColor(theme.noteBorder) });
}
function createWrappedSplitCodeCells({
  row,
  layout,
  lineNumberDigits,
  showLineNumbers,
  theme,
  leftPrefix,
  rightPrefix,
  leftHighlight,
  rightHighlight,
  guideOnNewSide
}) {
  const leftLayout = buildWrappedSplitCell(row.left, layout.left, lineNumberDigits, showLineNumbers, theme);
  const rightLayout = buildWrappedSplitCell(row.right, layout.right, lineNumberDigits, showLineNumbers, theme);
  const lineCount = Math.max(leftLayout.lines.length, rightLayout.lines.length);
  return {
    lineCount,
    contentBackground: rightLayout.palette.contentBg,
    paintLine(index, trailingWidth = 0) {
      const leftLine = leftLayout.lines[index] ?? {
        gutterText: " ".repeat(leftLayout.gutterWidth),
        spans: []
      };
      const rightLine = rightLayout.lines[index] ?? {
        gutterText: " ".repeat(rightLayout.gutterWidth),
        spans: []
      };
      let styledRow;
      if (!isChunkCompatibleWrappedHighlight(leftHighlight) || !isChunkCompatibleWrappedHighlight(rightHighlight)) {
        styledRow = styledTextFromSpanNodes([
          renderWrappedSplitCellLine(leftLine, leftLayout.palette, layout.left.contentWidth, theme, `${row.key}:left:${index}`, leftPrefix, leftHighlight, 0),
          renderWrappedSplitCellLine(rightLine, rightLayout.palette, layout.right.contentWidth, theme, `${row.key}:right:${index}`, rightPrefix, rightHighlight, layout.left.width),
          guideOnNewSide ? /* @__PURE__ */ jsxDEV("span", {
            fg: theme.noteBorder,
            children: "│"
          }, `${row.key}:note-guide:${index}`, false, undefined, this) : null
        ]);
      } else {
        const chunks = [];
        appendWrappedCellChunks(chunks, leftLine, leftLayout.palette, layout.left.contentWidth, theme, leftPrefix, leftHighlight);
        appendWrappedCellChunks(chunks, rightLine, rightLayout.palette, layout.right.contentWidth, theme, rightPrefix, rightHighlight);
        appendNoteGuideChunk(chunks, guideOnNewSide, theme);
        styledRow = new StyledText(chunks);
      }
      appendTrailingChunks(styledRow, trailingWidth, rightLayout.palette.contentBg);
      return styledRow;
    }
  };
}
function createWrappedStackCodeCell({
  row,
  layout,
  lineNumberDigits,
  showLineNumbers,
  theme,
  prefix,
  highlight,
  guideOnNewSide
}) {
  const wrapped = buildWrappedStackCell(row.cell, layout.cell, lineNumberDigits, showLineNumbers, theme);
  return {
    lineCount: wrapped.lines.length,
    contentBackground: wrapped.palette.contentBg,
    paintLine(index, trailingWidth = 0) {
      const line = wrapped.lines[index];
      let styledRow;
      if (isChunkCompatibleWrappedHighlight(highlight)) {
        const chunks = [];
        appendWrappedCellChunks(chunks, line, wrapped.palette, layout.cell.contentWidth, theme, prefix, highlight);
        appendNoteGuideChunk(chunks, guideOnNewSide, theme);
        styledRow = new StyledText(chunks);
      } else {
        styledRow = styledTextFromSpanNodes([
          renderWrappedStackCellLine(line, wrapped.palette, layout.cell.contentWidth, theme, `${row.key}:stack:${index}`, prefix, highlight),
          guideOnNewSide ? /* @__PURE__ */ jsxDEV("span", {
            fg: theme.noteBorder,
            children: "│"
          }, `${row.key}:note-guide:${index}`, false, undefined, this) : null
        ]);
      }
      appendTrailingChunks(styledRow, trailingWidth, wrapped.palette.contentBg);
      return styledRow;
    }
  };
}
function appendTrailingChunks(content, width, background) {
  if (width <= 0)
    return;
  content.chunks.push({
    __isChunk: true,
    text: " ".repeat(width),
    bg: styledTextColor(background)
  });
}
function spacerContent(width, background) {
  const cacheKey = `${width}:${background}`;
  let content = addNoteSpacerContentCache.get(cacheKey);
  if (!content) {
    content = new StyledText([
      {
        __isChunk: true,
        text: " ".repeat(width),
        bg: styledTextColor(background)
      }
    ]);
    addNoteSpacerContentCache.set(cacheKey, content);
  }
  return content;
}
var codeCellView = {
  applyLineHighlights: withRowLineHighlights,
  createWrappedSplit: createWrappedSplitCodeCells,
  createWrappedStack: createWrappedStackCodeCell,
  renderNowrapSplit: renderNowrapSplitCodeCells,
  renderNowrapStack: renderNowrapStackCodeCell,
  spacerContent
};

// src/ui/diff/rowMouseActions.ts
var nestedRowMouseActions = new WeakSet;
function markNestedRowMouseAction(event) {
  nestedRowMouseActions.add(event);
}

// src/ui/diff/CodeRowView.tsx
import { jsxDEV as jsxDEV2 } from "@opentui/react/jsx-dev-runtime";
function pickRowHighlight(selection, cursor, hasSelection, onCursor) {
  if (hasSelection)
    return selection;
  return onCursor ? cursor : undefined;
}
function renderAddNoteButton(key, theme, hunkIndex, target, onStartUserNoteAtHunk) {
  return /* @__PURE__ */ jsxDEV2("box", {
    style: { width: CODE_ROW_ADD_NOTE_BADGE_WIDTH, height: 1 },
    onMouseUp: (event) => {
      markNestedRowMouseAction(event);
      onStartUserNoteAtHunk?.(hunkIndex, target);
    },
    children: /* @__PURE__ */ jsxDEV2("text", {
      fg: theme.noteTitleText,
      bg: theme.noteTitleBackground,
      children: CODE_ROW_ADD_NOTE_BADGE_TEXT
    }, undefined, false, undefined, this)
  }, key, false, undefined, this);
}
function renderAddNoteSpacer(key, width, bg) {
  if (width <= 0) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV2("box", {
    style: { width, height: 1 },
    children: /* @__PURE__ */ jsxDEV2("text", {
      content: codeCellView.spacerContent(width, bg)
    }, undefined, false, undefined, this)
  }, key, false, undefined, this);
}
function CodeRowView({
  plannedRow,
  width,
  lineNumberDigits,
  showLineNumbers,
  wrapLines,
  codeHorizontalOffset,
  theme,
  selected,
  copySelectedRowRange,
  copySelectedSide,
  cursorHighlight,
  lineHighlights,
  showAddNoteBadge = false,
  onHoverRow,
  onStartUserNoteAtHunk
}) {
  const row = codeCellView.applyLineHighlights(plannedRow.row, lineHighlights, theme);
  const { anchorId } = plannedRow;
  const hasCopySelection = copySelectedRowRange !== undefined;
  const codeRowLayout = planCodeRowLayout(plannedRow, {
    lineNumberDigits,
    reserveAddNoteColumn: Boolean(onStartUserNoteAtHunk),
    showAddNoteBadge,
    showLineNumbers,
    width,
    wrapLines
  });
  const hasLeftSelection = hasCopySelection && copySelectedSide !== "right";
  const hasRightSelection = hasCopySelection && copySelectedSide !== "left";
  const splitContextRow = row.type === "split-line" && row.left.kind === "context" && row.right.kind === "context";
  const onCursorRow = cursorHighlight !== undefined;
  const selectionHighlight = {
    bg: (baseBg) => selectionHighlightBg(baseBg, theme),
    colRange: copySelectedRowRange
  };
  const cursorRowHighlight = onCursorRow ? {
    bg: (baseBg) => cursorLineHighlightBg(baseBg, theme),
    colRange: cursorHighlight.style === "row" ? FULL_CODE_CELL_COL_RANGE : undefined
  } : undefined;
  const leftHighlight = pickRowHighlight(selectionHighlight, cursorRowHighlight, hasLeftSelection, onCursorRow && (splitContextRow || cursorHighlight.side === "old"));
  const rightHighlight = pickRowHighlight(selectionHighlight, cursorRowHighlight, hasRightSelection, onCursorRow && (splitContextRow || cursorHighlight.side === "new"));
  const cellHighlight = pickRowHighlight(selectionHighlight, cursorRowHighlight, hasCopySelection, onCursorRow);
  if (row.type === "split-line") {
    const splitLayout = codeRowLayout;
    const guideOnOldSide2 = splitLayout.noteGuideSide === "old";
    const guideOnNewSide2 = splitLayout.noteGuideSide === "new";
    const addNoteTarget2 = row.right.lineNumber !== undefined ? { side: "new", line: row.right.lineNumber } : row.left.lineNumber !== undefined ? { side: "old", line: row.left.lineNumber } : undefined;
    const addBadgeWidth2 = splitLayout.addNoteBadgeWidth;
    const leftPrefix = {
      text: guideOnOldSide2 ? "│" : diffRailMarker(),
      fg: guideOnOldSide2 ? theme.noteBorder : splitLeftRailColor(row.left.kind, theme, selected || hasCopySelection),
      bg: theme.panel
    };
    const rightPrefix = {
      text: "▌",
      fg: splitRightRailColor(row.right.kind, theme, selected || hasCopySelection),
      bg: theme.panel
    };
    if (!wrapLines) {
      return /* @__PURE__ */ jsxDEV2("box", {
        id: anchorId,
        style: { width: "100%", height: 1, flexDirection: "row" },
        onMouseMove: () => onHoverRow?.(row.key),
        children: [
          /* @__PURE__ */ jsxDEV2("box", {
            style: {
              width: showAddNoteBadge ? Math.max(0, width - addBadgeWidth2) : "100%",
              height: 1
            },
            children: codeCellView.renderNowrapSplit({
              row,
              layout: splitLayout,
              lineNumberDigits,
              showLineNumbers,
              theme,
              horizontalOffset: codeHorizontalOffset,
              leftPrefix,
              rightPrefix,
              leftHighlight,
              rightHighlight,
              guideOnNewSide: guideOnNewSide2
            })
          }, undefined, false, undefined, this),
          showAddNoteBadge ? renderAddNoteButton(`${row.key}:add-note`, theme, row.hunkIndex, addNoteTarget2, onStartUserNoteAtHunk) : null
        ]
      }, undefined, true, undefined, this);
    }
    const wrapped2 = codeCellView.createWrappedSplit({
      row,
      layout: splitLayout,
      lineNumberDigits,
      showLineNumbers,
      theme,
      leftPrefix,
      rightPrefix,
      leftHighlight,
      rightHighlight,
      guideOnNewSide: guideOnNewSide2
    });
    return /* @__PURE__ */ jsxDEV2("box", {
      id: anchorId,
      style: { width: "100%", flexDirection: "column" },
      children: Array.from({ length: wrapped2.lineCount }, (_, index) => {
        const showBadgeOnLine = showAddNoteBadge && index === 0;
        const styledRow = wrapped2.paintLine(index, showBadgeOnLine ? 0 : addBadgeWidth2);
        if (!showBadgeOnLine) {
          return /* @__PURE__ */ jsxDEV2("text", {
            content: styledRow,
            onMouseMove: () => onHoverRow?.(row.key)
          }, `${row.key}:wrap:${index}`, false, undefined, this);
        }
        return /* @__PURE__ */ jsxDEV2("box", {
          style: { width: "100%", height: 1, flexDirection: "row" },
          onMouseMove: () => onHoverRow?.(row.key),
          children: [
            /* @__PURE__ */ jsxDEV2("box", {
              style: { width: Math.max(0, width - addBadgeWidth2), height: 1 },
              children: /* @__PURE__ */ jsxDEV2("text", {
                content: styledRow
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            renderAddNoteButton(`${row.key}:add-note:${index}`, theme, row.hunkIndex, addNoteTarget2, onStartUserNoteAtHunk)
          ]
        }, `${row.key}:wrap:${index}`, true, undefined, this);
      })
    }, undefined, false, undefined, this);
  }
  const stackLayout = codeRowLayout;
  const guideOnOldSide = stackLayout.noteGuideSide === "old";
  const guideOnNewSide = stackLayout.noteGuideSide === "new";
  const addNoteTarget = row.cell.newLineNumber !== undefined ? { side: "new", line: row.cell.newLineNumber } : row.cell.oldLineNumber !== undefined ? { side: "old", line: row.cell.oldLineNumber } : undefined;
  const addBadgeWidth = stackLayout.addNoteBadgeWidth;
  const prefix = {
    text: guideOnOldSide ? "│" : diffRailMarker(),
    fg: guideOnOldSide ? theme.noteBorder : stackRailColor(row.cell.kind, theme, selected || hasCopySelection),
    bg: theme.panel
  };
  if (!wrapLines) {
    return /* @__PURE__ */ jsxDEV2("box", {
      id: anchorId,
      style: { width: "100%", height: 1, flexDirection: "row" },
      onMouseMove: () => onHoverRow?.(row.key),
      children: [
        /* @__PURE__ */ jsxDEV2("box", {
          style: {
            width: showAddNoteBadge ? Math.max(0, width - addBadgeWidth) : "100%",
            height: 1
          },
          children: codeCellView.renderNowrapStack({
            row,
            layout: stackLayout,
            lineNumberDigits,
            showLineNumbers,
            theme,
            horizontalOffset: codeHorizontalOffset,
            prefix,
            highlight: cellHighlight,
            guideOnNewSide
          })
        }, undefined, false, undefined, this),
        showAddNoteBadge ? renderAddNoteButton(`${row.key}:add-note`, theme, row.hunkIndex, addNoteTarget, onStartUserNoteAtHunk) : null
      ]
    }, undefined, true, undefined, this);
  }
  const wrapped = codeCellView.createWrappedStack({
    row,
    layout: stackLayout,
    lineNumberDigits,
    showLineNumbers,
    theme,
    prefix,
    highlight: cellHighlight,
    guideOnNewSide
  });
  return /* @__PURE__ */ jsxDEV2("box", {
    id: anchorId,
    style: { width: "100%", flexDirection: "column" },
    children: Array.from({ length: wrapped.lineCount }, (_, index) => {
      const showBadgeOnLine = showAddNoteBadge && index === 0;
      const styledRow = wrapped.paintLine(index);
      return /* @__PURE__ */ jsxDEV2("box", {
        style: { width: "100%", height: 1, flexDirection: "row" },
        onMouseMove: () => onHoverRow?.(row.key),
        children: [
          /* @__PURE__ */ jsxDEV2("box", {
            style: {
              width: addBadgeWidth > 0 ? Math.max(0, width - addBadgeWidth) : "100%",
              height: 1
            },
            children: /* @__PURE__ */ jsxDEV2("text", {
              content: styledRow
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          showBadgeOnLine ? renderAddNoteButton(`${row.key}:add-note:${index}`, theme, row.hunkIndex, addNoteTarget, onStartUserNoteAtHunk) : renderAddNoteSpacer(`${row.key}:add-note-spacer:${index}`, addBadgeWidth, wrapped.contentBackground)
        ]
      }, `${row.key}:wrap:${index}`, true, undefined, this);
    })
  }, undefined, false, undefined, this);
}

// src/core/review/document.ts
function reviewEmptyDiffReason({
  changeKind,
  binary,
  tooLarge
}) {
  if (changeKind === "rename-pure") {
    return "rename-only";
  }
  if (binary) {
    return "binary";
  }
  if (tooLarge) {
    return "too-large";
  }
  if (changeKind === "new") {
    return "new-file";
  }
  if (changeKind === "deleted") {
    return "deleted-file";
  }
  return "no-hunks";
}

// src/ui/lib/files.ts
import { basename, dirname } from "node:path/posix";

// src/core/changeset/diffPaths.ts
function normalizeDiffPath(path) {
  return path?.replace(/[\r\n]+$/u, "");
}
function normalizeDiffMetadataPaths(metadata) {
  const name = normalizeDiffPath(metadata.name) ?? metadata.name;
  const prevName = normalizeDiffPath(metadata.prevName);
  if (name === metadata.name && prevName === metadata.prevName) {
    return metadata;
  }
  return {
    ...metadata,
    name,
    prevName
  };
}

// src/extensions/events.ts
function readMetadataChangeType(metadata) {
  const type = metadata?.type;
  return type === "change" || type === "rename-pure" || type === "rename-changed" || type === "new" || type === "deleted" ? type : undefined;
}
var NO_HUNK_SUMMARIES = Object.freeze([]);
var metadataHunkSummaries = new WeakMap;
var readOnlyDeepViews = new WeakMap;

// src/ui/lib/files.ts
function sidebarFileName(file) {
  const path = formatTerminalPath(normalizeDiffPath(file.path) ?? file.path);
  const previousPath = file.previousPath ? formatTerminalPath(normalizeDiffPath(file.previousPath) ?? file.previousPath) : undefined;
  if (!previousPath || previousPath === path) {
    return basename(path);
  }
  const previousName = basename(previousPath);
  const nextName = basename(path);
  return previousName === nextName ? nextName : `${previousName} -> ${nextName}`;
}
function formatSidebarStat(prefix, value, truncated = false) {
  return value > 0 ? `${prefix}${value}${truncated ? "+" : ""}` : null;
}
function sidebarEntryStats(entry) {
  const stats = [];
  if (entry.agentCommentsText) {
    stats.push({ kind: "agent-comment", text: entry.agentCommentsText });
  }
  if (entry.additionsText) {
    stats.push({ kind: "addition", text: entry.additionsText });
  }
  if (entry.deletionsText) {
    stats.push({ kind: "deletion", text: entry.deletionsText });
  }
  return stats;
}
function sidebarEntryStatsWidth(entry) {
  return sidebarEntryStats(entry).reduce((width, stat, index) => width + stat.text.length + (index > 0 ? 1 : 0), 0);
}
function buildSidebarEntries(files) {
  const entries = [];
  let activeGroup;
  files.forEach((file, index) => {
    const path = formatTerminalPath(normalizeDiffPath(file.path) ?? file.path);
    const group = dirname(path);
    if (group !== activeGroup) {
      activeGroup = group;
      entries.push({
        kind: "group",
        id: `group:${group}:${index}`,
        label: group === "." ? "./" : `${group}/`
      });
    }
    const agentCommentCount = file.agent?.annotations.length ?? 0;
    entries.push({
      kind: "file",
      id: file.id,
      name: sidebarFileName(file),
      agentCommentsText: agentCommentCount > 0 ? `*${agentCommentCount}` : null,
      additionsText: formatSidebarStat("+", file.stats.additions, file.statsTruncated),
      deletionsText: formatSidebarStat("-", file.stats.deletions),
      changeType: file.changeType ?? readMetadataChangeType(file.metadata) ?? "change",
      isUntracked: file.isUntracked ?? false
    });
  });
  return entries;
}
function fileLabelParts(file) {
  if (!file) {
    return { filename: "No file selected", stateLabel: null };
  }
  const path = formatTerminalPath(normalizeDiffPath(file.path) ?? file.path);
  const previousPath = file.previousPath ? formatTerminalPath(normalizeDiffPath(file.previousPath) ?? file.previousPath) : undefined;
  const baseLabel = previousPath && previousPath !== path ? `${previousPath} -> ${path}` : path;
  let stateLabel = null;
  if (file.isUntracked) {
    stateLabel = " (untracked)";
  } else if (file.metadata.type === "new") {
    stateLabel = " (new)";
  } else if (file.metadata.type === "deleted") {
    stateLabel = " (deleted)";
  }
  return { filename: baseLabel, stateLabel };
}

// src/ui/diff/plannedRowText.ts
function fitText2(text, width) {
  const safeText = sanitizeTerminalLine(text);
  if (width <= 0) {
    return "";
  }
  if (measureSanitizedTextWidth(safeText) <= width) {
    return safeText;
  }
  if (width === 1) {
    return "…";
  }
  return `${sliceSanitizedTextByWidth(safeText, 0, width - 1).text}…`;
}
var DIFF_MESSAGES = {
  "rename-only": "No textual hunks. This change only renames the file.",
  binary: "Binary file skipped",
  "too-large": "File too large to render automatically.",
  "new-file": "No textual hunks. The file is marked as new.",
  "deleted-file": "No textual hunks. The file is marked as deleted.",
  "no-hunks": "No textual hunks to render for this file."
};
function diffMessage(file) {
  return DIFF_MESSAGES[reviewEmptyDiffReason({
    changeKind: file.metadata.type,
    binary: Boolean(file.isBinary),
    tooLarge: Boolean(file.isTooLarge)
  })];
}

// src/ui/diff/DiffMetaRowView.tsx
import { jsxDEV as jsxDEV3 } from "@opentui/react/jsx-dev-runtime";
function collapsedRowLabel(text, expandable) {
  if (!expandable) {
    return `··· ${text} ···`;
  }
  return `▾ ${text}`;
}
function DiffMetaRowView({
  plannedRow,
  width,
  theme,
  selected,
  showHunkHeaders,
  showAddNoteBadge = false,
  onHoverRow,
  onStartUserNoteAtHunk,
  onToggleGap
}) {
  const { anchorId, row } = plannedRow;
  if (row.type === "hunk-header" && !showHunkHeaders) {
    return null;
  }
  const badges = [
    showAddNoteBadge ? {
      key: "user-note",
      text: CODE_ROW_ADD_NOTE_BADGE_TEXT,
      onClick: () => onStartUserNoteAtHunk?.(row.hunkIndex)
    } : null
  ].filter((badge) => Boolean(badge));
  const badgeWidth = badges.reduce((total, badge) => total + badge.text.length + 1, 0);
  const collapsedExpandable = row.type === "collapsed" && Boolean(onToggleGap);
  const labelText = row.type === "collapsed" ? collapsedRowLabel(row.text, collapsedExpandable) : row.text;
  const label = fitText2(labelText, Math.max(0, width - 1 - badgeWidth));
  const handleCollapsedClick = row.type === "collapsed" && onToggleGap ? () => onToggleGap(reviewGapId(row.position, row.hunkIndex)) : undefined;
  if (badges.length === 0) {
    return /* @__PURE__ */ jsxDEV3("box", {
      id: anchorId,
      style: {
        width,
        height: 1,
        backgroundColor: theme.panelAlt
      },
      onMouseMove: () => onHoverRow?.(row.key),
      onMouseOver: () => onHoverRow?.(row.key),
      onMouseUp: handleCollapsedClick,
      children: /* @__PURE__ */ jsxDEV3("text", {
        children: [
          /* @__PURE__ */ jsxDEV3("span", {
            fg: selected ? neutralRailColor(theme) : dimRailColor(neutralRailColor(theme), theme),
            bg: theme.panelAlt,
            children: diffRailMarker()
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("span", {
            fg: row.type === "collapsed" ? theme.muted : theme.badgeNeutral,
            bg: theme.panelAlt,
            children: label
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV3("box", {
    id: anchorId,
    style: {
      width,
      height: 1,
      flexDirection: "row",
      backgroundColor: theme.panelAlt
    },
    onMouseMove: () => onHoverRow?.(row.key),
    onMouseOver: () => onHoverRow?.(row.key),
    children: [
      /* @__PURE__ */ jsxDEV3("box", {
        style: { width: Math.max(0, width - badgeWidth), height: 1 },
        onMouseUp: handleCollapsedClick,
        children: /* @__PURE__ */ jsxDEV3("text", {
          children: [
            /* @__PURE__ */ jsxDEV3("span", {
              fg: selected ? neutralRailColor(theme) : dimRailColor(neutralRailColor(theme), theme),
              bg: theme.panelAlt,
              children: diffRailMarker()
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsxDEV3("span", {
              fg: row.type === "collapsed" ? theme.muted : theme.badgeNeutral,
              bg: theme.panelAlt,
              children: label
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      badges.map((badge) => /* @__PURE__ */ jsxDEV3("box", {
        style: { width: badge.text.length + 1, height: 1 },
        onMouseUp: (event) => {
          markNestedRowMouseAction(event);
          badge.onClick();
        },
        children: /* @__PURE__ */ jsxDEV3("text", {
          fg: theme.noteTitleText,
          bg: theme.noteTitleBackground,
          children: ` ${badge.text}`
        }, undefined, false, undefined, this)
      }, badge.key, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}

// src/ui/diff/DiffRowView.tsx
import { jsxDEV as jsxDEV4 } from "@opentui/react/jsx-dev-runtime";
function renderRow(plannedRow, width, lineNumberDigits, showLineNumbers, showHunkHeaders, wrapLines, codeHorizontalOffset, theme, selected, copySelectedRowRange, copySelectedSide, cursorHighlight, lineHighlights, showAddNoteBadge = false, onHoverRow, onStartUserNoteAtHunk, onToggleGap) {
  if (plannedRow.row.type === "collapsed" || plannedRow.row.type === "hunk-header") {
    return /* @__PURE__ */ jsxDEV4(DiffMetaRowView, {
      plannedRow,
      width,
      theme,
      selected: selected || copySelectedRowRange !== undefined,
      showHunkHeaders,
      showAddNoteBadge,
      onHoverRow,
      onStartUserNoteAtHunk,
      onToggleGap
    }, undefined, false, undefined, this);
  }
  if (plannedRow.row.type === "split-line" || plannedRow.row.type === "stack-line") {
    return /* @__PURE__ */ jsxDEV4(CodeRowView, {
      plannedRow,
      width,
      lineNumberDigits,
      showLineNumbers,
      wrapLines,
      codeHorizontalOffset,
      theme,
      selected,
      copySelectedRowRange,
      copySelectedSide,
      cursorHighlight,
      lineHighlights,
      showAddNoteBadge,
      onHoverRow,
      onStartUserNoteAtHunk
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV4("box", {
    style: { width: "100%", height: 1 },
    children: /* @__PURE__ */ jsxDEV4("text", {
      fg: theme.muted,
      children: "Unsupported row."
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var DiffRowView = memo2(function DiffRowViewComponent({
  plannedRow,
  row,
  width,
  lineNumberDigits,
  showLineNumbers,
  showHunkHeaders,
  wrapLines,
  codeHorizontalOffset,
  theme,
  selected,
  copySelectedRowRange,
  copySelectedSide,
  cursorHighlight,
  lineHighlights,
  anchorId,
  noteGuideSide,
  showAddNoteBadge,
  onHoverRow,
  onStartUserNoteAtHunk,
  onToggleGap
}) {
  const resolvedPlannedRow = plannedRow ?? (row ? legacyPlannedDiffRow(row, anchorId, noteGuideSide) : undefined);
  if (!resolvedPlannedRow) {
    return null;
  }
  return renderRow(resolvedPlannedRow, width, lineNumberDigits, showLineNumbers, showHunkHeaders, wrapLines, codeHorizontalOffset, theme, selected, copySelectedRowRange, copySelectedSide, cursorHighlight, lineHighlights, showAddNoteBadge, onHoverRow, onStartUserNoteAtHunk, onToggleGap);
}, (previous, next) => {
  return previous.plannedRow === next.plannedRow && previous.row === next.row && previous.width === next.width && previous.lineNumberDigits === next.lineNumberDigits && previous.showLineNumbers === next.showLineNumbers && previous.showHunkHeaders === next.showHunkHeaders && previous.wrapLines === next.wrapLines && previous.codeHorizontalOffset === next.codeHorizontalOffset && previous.theme === next.theme && previous.selected === next.selected && previous.copySelectedRowRange === next.copySelectedRowRange && previous.copySelectedSide === next.copySelectedSide && previous.cursorHighlight === next.cursorHighlight && previous.lineHighlights === next.lineHighlights && previous.anchorId === next.anchorId && previous.noteGuideSide === next.noteGuideSide && previous.showAddNoteBadge === next.showAddNoteBadge && previous.onHoverRow === next.onHoverRow && previous.onStartUserNoteAtHunk === next.onStartUserNoteAtHunk && previous.onToggleGap === next.onToggleGap;
});

// src/core/review/state.ts
function reviewNoteOwnerHunkIndex(note) {
  return note.anchor.ownerHunkIndex ?? note.anchor.intersectingHunkIndices[0] ?? 0;
}
function reviewNoteAnchorLine(note) {
  return note.anchor.preferred ?? { side: "new", line: 1 };
}
var REVIEW_VIEWPORT_ANCHOR_REVEAL = Object.freeze({
  anchor: "none",
  scrollToNote: false
});

// src/ui/lib/ids.ts
function fileRowId(fileId) {
  return `file-row:${fileId}`;
}
function diffHunkId(fileId, hunkIndex) {
  return `diff-hunk:${fileId}:${hunkIndex}`;
}
function reviewRowId(rowKey) {
  return `review-row:${rowKey}`;
}

// src/ui/diff/reviewRenderPlan.ts
var EMPTY_VISIBLE_AGENT_NOTES = [];
var EMPTY_ROW_KEYS = new Set;
function lineRows(rows) {
  return rows.filter((row) => row.type === "split-line" || row.type === "stack-line");
}
function uniqueStableKeys(keys) {
  const next = [];
  const seen = new Set;
  for (const key of keys) {
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    next.push(key);
  }
  return next;
}
function lineStableKey(hunkIndex, side, lineNumber) {
  return `line:${hunkIndex}:${side}:${lineNumber}`;
}
function inlineNoteStableKey(noteId) {
  return `inline-note:${noteId}`;
}
function oldLineStableKey(hunkIndex, lineNumber) {
  return lineNumber === undefined ? undefined : lineStableKey(hunkIndex, "old", lineNumber);
}
function newLineStableKey(hunkIndex, lineNumber) {
  return lineNumber === undefined ? undefined : lineStableKey(hunkIndex, "new", lineNumber);
}
function contextLineStableKey(hunkIndex, oldLineNumber, newLineNumber) {
  return oldLineNumber === undefined || newLineNumber === undefined ? undefined : `line:${hunkIndex}:context:${oldLineNumber}:${newLineNumber}`;
}
function diffRowStableKeys(row) {
  if (row.type === "collapsed") {
    return [`meta:collapsed:${row.position}:${row.hunkIndex}`];
  }
  if (row.type === "hunk-header") {
    return [`meta:hunk-header:${row.hunkIndex}`];
  }
  if (row.type === "split-line") {
    const contextKey2 = contextLineStableKey(row.hunkIndex, row.left.lineNumber, row.right.lineNumber);
    if (row.left.kind === "context" && row.right.kind === "context") {
      return uniqueStableKeys([
        contextKey2,
        newLineStableKey(row.hunkIndex, row.right.lineNumber),
        oldLineStableKey(row.hunkIndex, row.left.lineNumber)
      ]);
    }
    return uniqueStableKeys([
      oldLineStableKey(row.hunkIndex, row.left.lineNumber),
      newLineStableKey(row.hunkIndex, row.right.lineNumber)
    ]);
  }
  const contextKey = contextLineStableKey(row.hunkIndex, row.cell.oldLineNumber, row.cell.newLineNumber);
  if (row.cell.kind === "context") {
    return uniqueStableKeys([
      contextKey,
      newLineStableKey(row.hunkIndex, row.cell.newLineNumber),
      oldLineStableKey(row.hunkIndex, row.cell.oldLineNumber)
    ]);
  }
  return uniqueStableKeys([
    newLineStableKey(row.hunkIndex, row.cell.newLineNumber),
    oldLineStableKey(row.hunkIndex, row.cell.oldLineNumber)
  ]);
}
function rowLineNumber(row, side) {
  if (row.type === "split-line") {
    return side === "new" ? row.right.lineNumber : row.left.lineNumber;
  }
  return side === "new" ? row.cell.newLineNumber : row.cell.oldLineNumber;
}
function rowOverlapsNoteRange(row, anchor) {
  for (const side of ["old", "new"]) {
    const range = side === "old" ? anchor.oldRange : anchor.newRange;
    const lineNumber = rowLineNumber(row, side);
    if (range && lineNumber !== undefined && lineNumber >= range[0] && lineNumber <= range[1]) {
      return true;
    }
  }
  return false;
}
function findInlineNoteAnchorRow(rows, note) {
  const fileLineRows = lineRows(rows);
  const ownerHunkIndex = reviewNoteOwnerHunkIndex(note);
  const ownerRows = fileLineRows.filter((row) => row.hunkIndex === ownerHunkIndex);
  const candidates = ownerRows.length > 0 ? ownerRows : fileLineRows;
  const { side, line } = reviewNoteAnchorLine(note);
  let precedingRow;
  for (const row of candidates) {
    const lineNumber = rowLineNumber(row, side);
    if (lineNumber === undefined) {
      continue;
    }
    if (lineNumber >= line) {
      return row;
    }
    precedingRow = row;
  }
  return precedingRow ?? candidates[0] ?? rows.find((row) => row.type === "hunk-header" && row.hunkIndex === ownerHunkIndex) ?? rows.find((row) => row.type === "hunk-header");
}
function buildInlineVisibleNotePlacements(rows, visibleAgentNotes) {
  const fileLineRows = lineRows(rows);
  const placementsByAnchor = new Map;
  for (const note of visibleAgentNotes) {
    const anchorRow = findInlineNoteAnchorRow(rows, note);
    if (!anchorRow) {
      continue;
    }
    const anchorSide = note.anchor.preferred?.side;
    const coveredRows = fileLineRows.filter((row) => rowOverlapsNoteRange(row, note.anchor));
    const guideRows = coveredRows.filter((row) => row.key !== anchorRow.key);
    const anchorPlacements = placementsByAnchor.get(anchorRow.key) ?? [];
    anchorPlacements.push({
      anchorKey: anchorRow.key,
      anchorSide,
      guidedRowKeys: guideRows.length > 0 ? new Set(guideRows.map((row) => row.key)) : EMPTY_ROW_KEYS,
      hunkIndex: anchorRow.hunkIndex,
      note,
      noteCount: 1,
      noteIndex: 0
    });
    placementsByAnchor.set(anchorRow.key, anchorPlacements);
  }
  for (const placements of placementsByAnchor.values()) {
    placements.forEach((placement, index) => {
      placement.noteIndex = index;
      placement.noteCount = placements.length;
    });
  }
  return placementsByAnchor;
}
function buildNoteGuideSideByRowKey(placementsByAnchor) {
  const guideSideByRowKey = new Map;
  for (const placements of placementsByAnchor.values()) {
    for (const placement of placements) {
      if (!placement.anchorSide) {
        continue;
      }
      for (const rowKey of placement.guidedRowKeys) {
        if (!guideSideByRowKey.has(rowKey)) {
          guideSideByRowKey.set(rowKey, placement.anchorSide);
        }
      }
    }
  }
  return guideSideByRowKey;
}
function rowCanAnchorHunk(row, showHunkHeaders) {
  if (showHunkHeaders) {
    return row.type === "hunk-header";
  }
  if (row.type === "collapsed" || row.type === "hunk-header") {
    return false;
  }
  return row.isExpansionRow !== true;
}
function buildReviewRenderPlan({
  fileId,
  rows,
  showHunkHeaders,
  visibleAgentNotes = EMPTY_VISIBLE_AGENT_NOTES,
  selectedHunkIndex: _selectedHunkIndex,
  hunkGap = DEFAULT_HUNK_GAP
}) {
  const placementsByAnchor = buildInlineVisibleNotePlacements(rows, visibleAgentNotes);
  const noteGuideSideByRowKey = buildNoteGuideSideByRowKey(placementsByAnchor);
  const plannedRows = [];
  const anchoredHunks = new Set;
  for (const row of rows) {
    const shouldAnchorHunk = rowCanAnchorHunk(row, showHunkHeaders) && !anchoredHunks.has(row.hunkIndex);
    const anchorId = shouldAnchorHunk ? diffHunkId(fileId, row.hunkIndex) : undefined;
    const diffStableKeys = diffRowStableKeys(row);
    const diffStableKey = diffStableKeys[0] ?? `row:${row.key}`;
    const diffStableAliasKeys = diffStableKeys.slice(1);
    if (hunkGap > 0 && row.type === "hunk-header" && row.hunkIndex > 0) {
      plannedRows.push({
        kind: "hunk-gap",
        key: `hunk-gap:${fileId}:${row.hunkIndex}`,
        stableKey: `hunk-gap:${row.hunkIndex}`,
        fileId,
        hunkIndex: row.hunkIndex,
        height: hunkGap
      });
    }
    if (shouldAnchorHunk) {
      anchoredHunks.add(row.hunkIndex);
    }
    plannedRows.push({
      kind: "diff-row",
      key: `diff-row:${row.key}`,
      stableKey: diffStableKey,
      stableAliasKeys: diffStableAliasKeys,
      fileId: row.fileId,
      hunkIndex: row.hunkIndex,
      row,
      anchorId,
      noteGuideSide: noteGuideSideByRowKey.get(row.key)
    });
    const anchoredNotes = placementsByAnchor.get(row.key) ?? [];
    anchoredNotes.forEach((placement) => {
      plannedRows.push({
        kind: "inline-note",
        key: `inline-note:${placement.note.id}:${row.key}:${placement.noteIndex}`,
        stableKey: inlineNoteStableKey(placement.note.id),
        fileId,
        hunkIndex: placement.hunkIndex,
        annotationId: placement.note.id,
        annotation: placement.note.annotation,
        note: placement.note,
        anchorSide: placement.anchorSide,
        noteCount: placement.noteCount,
        noteIndex: placement.noteIndex
      });
    });
  }
  return plannedRows;
}

// src/ui/components/panes/AgentInlineNote.tsx
import {
  createTextAttributes,
  EditBuffer,
  EditorView
} from "@opentui/core";
import { useLayoutEffect, useRef } from "react";

// src/ui/lib/agentNoteGeometry.ts
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function agentNoteBoxLayout({
  anchorSide,
  layout,
  width
}) {
  const splitWidths = resolveSplitPaneWidths(width);
  const canDockRight = layout === "split" && anchorSide === "new" && width >= 84;
  const canDockLeft = layout === "split" && anchorSide === "old" && width >= 84;
  const preferredDockWidth = canDockRight ? splitWidths.rightWidth : canDockLeft ? splitWidths.leftWidth : Math.max(34, width - 4);
  const boxWidth = clamp(preferredDockWidth, 28, Math.max(28, width - 4));
  const boxLeft = canDockRight ? Math.max(0, width - boxWidth) : canDockLeft ? 0 : Math.min(4, Math.max(0, width - boxWidth));
  const innerWidth = Math.max(1, boxWidth - 2);
  const contentWidth = Math.max(1, innerWidth - 2);
  return { boxWidth, boxLeft, contentWidth };
}

// src/ui/lib/stml/colors.ts
var NAMED_COLORS = new Map([
  ["black", "#1c1c1c"],
  ["red", "#e05252"],
  ["green", "#4fb469"],
  ["yellow", "#d9a331"],
  ["blue", "#4f8fd9"],
  ["magenta", "#b969d9"],
  ["cyan", "#3fb5b5"],
  ["white", "#e8e8e8"],
  ["gray", "#8a8a8a"],
  ["grey", "#8a8a8a"],
  ["orange", "#e0873d"],
  ["purple", "#9a6fd0"],
  ["pink", "#d9699a"]
]);
var THEME_COLOR_KEY_BY_TOKEN = new Map([
  ["accent", "accent"],
  ["info", "accentMuted"],
  ["success", "addedSignColor"],
  ["danger", "removedSignColor"],
  ["error", "removedSignColor"],
  ["warning", "fileModified"],
  ["muted", "muted"],
  ["subtle", "panelAlt"],
  ["heading", "text"],
  ["text", "text"],
  ["panel", "panel"],
  ["bg", "panel"],
  ["note-border", "noteBorder"],
  ["badge-text", "background"]
]);

// src/core/review/stml.ts
var TAG_ROLES = {
  b: "strong",
  strong: "strong",
  i: "emphasis",
  em: "emphasis",
  u: "underline",
  s: "strike",
  strike: "strike",
  del: "strike",
  dim: "muted",
  muted: "muted",
  kbd: "key",
  badge: "badge",
  a: "link",
  link: "link",
  c: "styled",
  color: "styled",
  span: "styled",
  br: "line-break",
  box: "container",
  col: "container",
  column: "container",
  stack: "container",
  section: "container",
  card: "card",
  row: "row",
  text: "paragraph",
  p: "paragraph",
  h: "heading",
  h2: "heading",
  h3: "heading",
  heading: "heading",
  h1: "title",
  title: "title",
  hr: "divider",
  rule: "divider",
  divider: "divider",
  spacer: "spacer",
  space: "spacer",
  list: "list",
  ul: "list",
  ol: "ordered-list",
  item: "list-item",
  li: "list-item",
  code: "code",
  pre: "code"
};
var INLINE_ROLES = new Set([
  "strong",
  "emphasis",
  "underline",
  "strike",
  "muted",
  "key",
  "badge",
  "link",
  "styled",
  "line-break"
]);
var VOID_ROLES = new Set([
  "line-break",
  "divider",
  "spacer"
]);
var RAW_TEXT_ROLES = new Set(["code"]);
function stmlTagRole(tag) {
  return TAG_ROLES[tag];
}
function isInlineStmlRole(role) {
  return role !== undefined && INLINE_ROLES.has(role);
}
function isVoidStmlTag(tag) {
  const role = stmlTagRole(tag);
  return role !== undefined && VOID_ROLES.has(role);
}
function isRawTextStmlTag(tag) {
  const role = stmlTagRole(tag);
  return role !== undefined && RAW_TEXT_ROLES.has(role);
}

// src/core/review/validation.ts
function utf8ByteLength(value) {
  let bytes = 0;
  for (let index = 0;index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if (code < 128) {
      bytes += 1;
    } else if (code < 2048) {
      bytes += 2;
    } else if (code >= 55296 && code <= 56319) {
      const next = index + 1 < value.length ? value.charCodeAt(index + 1) : 0;
      if (next >= 56320 && next <= 57343) {
        bytes += 4;
        index += 1;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
}

// src/ui/lib/stml/parse.ts
var DEFAULT_STML_PARSE_LIMITS = {
  maxInputBytes: 64 * 1024,
  maxNodes: 2000,
  maxDepth: 32,
  maxErrors: 20
};
var NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  mdash: "—",
  ndash: "–",
  hellip: "…",
  bull: "•",
  middot: "·",
  rarr: "→",
  larr: "←",
  uarr: "↑",
  darr: "↓",
  check: "✓",
  cross: "✗",
  times: "×"
};
function isValidCodePoint(code) {
  return Number.isInteger(code) && code >= 0 && code <= 1114111;
}
function decodeStmlEntities(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);/g, (whole, body) => {
    if (body[0] !== "#") {
      return NAMED_ENTITIES[body.toLowerCase()] ?? whole;
    }
    const code = body[1] === "x" || body[1] === "X" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
    return isValidCodePoint(code) ? String.fromCodePoint(code) : whole;
  });
}
function sanitizeStmlText(text) {
  return sanitizeTerminalText(text, { preserveNewlines: true, preserveTabs: false });
}
var isSpace = (ch) => ch === " " || ch === "\t" || ch === `
` || ch === "\r" || ch === "\f";
var isNameChar = (ch) => /[a-zA-Z0-9\-_]/.test(ch);
var isTagStart = (ch) => ch !== undefined && /[a-zA-Z]/.test(ch);
function parseStml(input, options = {}) {
  const limits = { ...DEFAULT_STML_PARSE_LIMITS, ...options };
  const errors = [];
  const addError = limitedErrorCollector(errors, limits.maxErrors);
  const root = [];
  const stack = [];
  const top = () => stack.length > 0 ? stack[stack.length - 1].children : root;
  let source = input;
  const bytes = utf8ByteLength(source);
  if (bytes > limits.maxInputBytes) {
    source = truncateUtf8(source, limits.maxInputBytes);
    addError(`input truncated at ${limits.maxInputBytes} byte(s)`);
  }
  let i = 0;
  const n = source.length;
  let nodeCount = 0;
  let nodeLimitReached = false;
  const canAddNode = () => {
    if (nodeCount < limits.maxNodes) {
      nodeCount += 1;
      return true;
    }
    if (!nodeLimitReached) {
      nodeLimitReached = true;
      addError(`node limit reached at ${limits.maxNodes} node(s); remaining markup ignored`);
    }
    return false;
  };
  const pushText = (value) => {
    if (value.length === 0 || nodeLimitReached) {
      return;
    }
    const safe = sanitizeStmlText(value);
    if (safe.length === 0) {
      return;
    }
    const siblings = top();
    const last = siblings[siblings.length - 1];
    if (last && last.type === "text") {
      last.value += safe;
    } else if (canAddNode()) {
      siblings.push({ type: "text", value: safe });
    }
  };
  while (i < n && !nodeLimitReached) {
    const lt = source.indexOf("<", i);
    if (lt === -1) {
      pushText(source.slice(i));
      break;
    }
    if (lt > i) {
      pushText(source.slice(i, lt));
    }
    if (nodeLimitReached) {
      break;
    }
    i = lt;
    if (source.startsWith("<!--", i)) {
      const end = source.indexOf("-->", i + 4);
      i = end === -1 ? n : end + 3;
      continue;
    }
    if (source[i + 1] === "/") {
      let j = i + 2;
      let name = "";
      while (j < n && isNameChar(source[j])) {
        name += source[j++];
      }
      while (j < n && source[j] !== ">") {
        j++;
      }
      i = j + 1;
      name = name.toLowerCase();
      const idx = findOpen(stack, name);
      if (idx === -1) {
        addError(`stray closing tag </${name}>`);
      } else {
        if (idx !== stack.length - 1) {
          addError(`closing </${name}> implicitly closed ${stack.length - 1 - idx} tag(s)`);
        }
        stack.length = idx;
      }
      continue;
    }
    if (!isTagStart(source[i + 1])) {
      pushText("<");
      i += 1;
      continue;
    }
    const open = readOpenTag(source, i);
    i = open.next;
    if (stack.length >= limits.maxDepth) {
      addError(`depth limit reached at <${open.tag}> (${limits.maxDepth} level(s))`);
      continue;
    }
    if (!canAddNode()) {
      break;
    }
    const el = { type: "element", tag: open.tag, attrs: open.attrs, children: [] };
    top().push(el);
    if (open.selfClosing || isVoidStmlTag(open.tag)) {
      continue;
    }
    if (isRawTextStmlTag(open.tag)) {
      const close = `</${open.tag}`;
      const end = indexOfCloser(source, i, close);
      const raw = source.slice(i, end === -1 ? n : end);
      if (raw.length > 0 && canAddNode()) {
        el.children.push({ type: "text", value: sanitizeStmlText(raw) });
      }
      if (end === -1) {
        addError(`unclosed <${open.tag}>`);
        i = n;
      } else {
        const gt = source.indexOf(">", end);
        i = gt === -1 ? n : gt + 1;
      }
      continue;
    }
    stack.push(el);
  }
  if (stack.length > 0) {
    addError(`unclosed tag(s): ${stack.map((e) => `<${e.tag}>`).join(", ")}`);
  }
  return { nodes: root, errors };
}
function limitedErrorCollector(errors, maxErrors) {
  let omitted = false;
  return (message) => {
    if (errors.length < maxErrors) {
      errors.push(message);
      return;
    }
    if (!omitted) {
      omitted = true;
      if (errors.length === 0) {
        return;
      }
      errors[errors.length - 1] = `${errors[errors.length - 1]} (further parse errors omitted)`;
    }
  };
}
function truncateUtf8(text, maxBytes) {
  const bytes = new TextEncoder().encode(text).slice(0, maxBytes);
  return new TextDecoder("utf-8", { fatal: false }).decode(bytes).replace(/�$/, "");
}
function findOpen(stack, name) {
  for (let k = stack.length - 1;k >= 0; k--) {
    if (stack[k].tag === name) {
      return k;
    }
  }
  return -1;
}
function indexOfCloser(input, from, closer) {
  return input.toLowerCase().indexOf(closer.toLowerCase(), from);
}
function readOpenTag(input, start) {
  const n = input.length;
  let i = start + 1;
  let tag = "";
  while (i < n && isNameChar(input[i])) {
    tag += input[i++];
  }
  tag = tag.toLowerCase();
  const attrs = {};
  while (i < n) {
    while (i < n && isSpace(input[i])) {
      i++;
    }
    if (i >= n) {
      break;
    }
    if (input[i] === ">") {
      return { tag, attrs, selfClosing: false, next: i + 1 };
    }
    if (input[i] === "/" && input[i + 1] === ">") {
      return { tag, attrs, selfClosing: true, next: i + 2 };
    }
    let name = "";
    while (i < n && isNameChar(input[i])) {
      name += input[i++];
    }
    if (!name) {
      i++;
      continue;
    }
    name = name.toLowerCase();
    while (i < n && isSpace(input[i])) {
      i++;
    }
    if (input[i] === "=") {
      i++;
      while (i < n && isSpace(input[i])) {
        i++;
      }
      const quote = input[i];
      if (quote === '"' || quote === "'") {
        i++;
        let value = "";
        while (i < n && input[i] !== quote) {
          value += input[i++];
        }
        i++;
        attrs[name] = sanitizeStmlText(decodeStmlEntities(value));
      } else {
        let value = "";
        while (i < n && !isSpace(input[i]) && input[i] !== ">" && !(input[i] === "/" && input[i + 1] === ">")) {
          value += input[i++];
        }
        attrs[name] = sanitizeStmlText(decodeStmlEntities(value));
      }
    } else {
      attrs[name] = "";
    }
  }
  return { tag, attrs, selfClosing: false, next: n };
}

// src/ui/lib/stml/layout.ts
var MIN_STML_LAYOUT_WIDTH = 8;
var MAX_LAYOUT_ERRORS = 20;
var isInlineTag = (tag) => isInlineStmlRole(stmlTagRole(tag));
var BORDER_STYLES = {
  single: {
    topLeft: "┌",
    topRight: "┐",
    bottomLeft: "└",
    bottomRight: "┘",
    horizontal: "─",
    vertical: "│"
  },
  rounded: {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯",
    horizontal: "─",
    vertical: "│"
  },
  double: {
    topLeft: "╔",
    topRight: "╗",
    bottomLeft: "╚",
    bottomRight: "╝",
    horizontal: "═",
    vertical: "║"
  },
  heavy: {
    topLeft: "┏",
    topRight: "┓",
    bottomLeft: "┗",
    bottomRight: "┛",
    horizontal: "━",
    vertical: "┃"
  }
};
var truthyAttr = (value) => value === undefined || value === "" || value === "true" || value === "yes" || value === "on";
var collapseWs = (text) => text.replace(/\s+/g, " ");
var mergeStyle = (base, over) => ({ ...base, ...over });
function numAttr(value) {
  if (value === undefined) {
    return;
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}
function widthAttr(value, available) {
  if (value === undefined) {
    return;
  }
  const percent = /^(\d+(?:\.\d+)?)%$/.exec(value);
  if (percent) {
    return Math.max(1, Math.floor(available * Number(percent[1]) / 100));
  }
  const n = numAttr(value);
  return n !== undefined ? Math.max(1, Math.floor(n)) : undefined;
}
function attrStyle(attrs) {
  const style = {};
  if (attrs.fg ?? attrs.color) {
    style.fg = attrs.fg ?? attrs.color;
  }
  if (attrs.bg) {
    style.bg = attrs.bg;
  }
  if ("bold" in attrs) {
    style.bold = truthyAttr(attrs.bold);
  }
  if ("italic" in attrs) {
    style.italic = truthyAttr(attrs.italic);
  }
  if ("underline" in attrs) {
    style.underline = truthyAttr(attrs.underline);
  }
  if ("dim" in attrs) {
    style.dim = truthyAttr(attrs.dim);
  }
  if ("strike" in attrs) {
    style.strike = truthyAttr(attrs.strike);
  }
  return style;
}
function inlineStyle(tag, attrs) {
  switch (stmlTagRole(tag)) {
    case "strong":
      return { bold: true };
    case "emphasis":
      return { italic: true };
    case "underline":
      return { underline: true };
    case "strike":
      return { strike: true };
    case "muted":
      return { dim: true };
    case "key":
      return { bg: "subtle", fg: "heading" };
    case "badge":
      return {
        bg: attrs.color ?? attrs.bg ?? "accent",
        fg: attrs.fg ?? "badge-text",
        bold: true
      };
    case "link":
      return { fg: "accent", underline: true };
    case "styled":
    default:
      return attrStyle(attrs);
  }
}

class LayoutErrors {
  messages = [];
  add(message) {
    if (this.messages.length < MAX_LAYOUT_ERRORS) {
      this.messages.push(message);
    } else if (this.messages.length === MAX_LAYOUT_ERRORS) {
      this.messages.push("further layout notes omitted");
    }
  }
}
function inlineSpans(node, style) {
  if (node.type === "text") {
    const text = collapseWs(decodeStmlEntities(node.value));
    return text === "" ? [] : [{ ...style, text }];
  }
  const role = stmlTagRole(node.tag);
  if (role === "line-break") {
    return [{ ...style, text: `
` }];
  }
  const next = mergeStyle(style, inlineStyle(node.tag, node.attrs));
  const padded = role === "badge" || role === "key";
  const out = [];
  if (padded) {
    out.push({ ...next, text: " " });
  }
  for (const child of node.children) {
    out.push(...inlineSpans(child, next));
  }
  if (padded) {
    out.push({ ...next, text: " " });
  }
  return out;
}
function tokenizeSpans(spans) {
  const tokens = [];
  for (const span of spans) {
    const parts = span.text.split(/(\n| +)/);
    for (const part of parts) {
      if (part === "") {
        continue;
      }
      if (part === `
`) {
        tokens.push({ span: { ...span, text: `
` }, kind: "break", width: 0 });
      } else if (/^ +$/.test(part) && !span.bg) {
        tokens.push({ span: { ...span, text: part }, kind: "space", width: part.length });
      } else {
        tokens.push({ span: { ...span, text: part }, kind: "word", width: measureTextWidth(part) });
      }
    }
  }
  return tokens;
}
function sameStyle(a, b) {
  return a.fg === b.fg && a.bg === b.bg && a.bold === b.bold && a.italic === b.italic && a.underline === b.underline && a.dim === b.dim && a.strike === b.strike;
}
function pushSpan(line, span) {
  const last = line.spans[line.spans.length - 1];
  if (last && sameStyle(last, span)) {
    last.text += span.text;
  } else {
    line.spans.push({ ...span });
  }
}
function wrapSpans2(spans, width) {
  const usable = Math.max(1, width);
  const tokens = tokenizeSpans(spans);
  const lines = [];
  let current = { spans: [] };
  let currentWidth = 0;
  let started = false;
  const flush = () => {
    while (current.spans.length > 0) {
      const last = current.spans[current.spans.length - 1];
      if (last.bg || !/^ *$/.test(last.text)) {
        last.text = last.bg ? last.text : last.text.replace(/ +$/, "");
        break;
      }
      current.spans.pop();
    }
    lines.push(current);
    current = { spans: [] };
    currentWidth = 0;
    started = false;
  };
  for (const token of tokens) {
    if (token.kind === "break") {
      flush();
      continue;
    }
    if (token.kind === "space") {
      if (!started) {
        continue;
      }
      if (currentWidth + token.width > usable) {
        flush();
        continue;
      }
      pushSpan(current, token.span);
      currentWidth += token.width;
      continue;
    }
    if (currentWidth + token.width <= usable) {
      pushSpan(current, token.span);
      currentWidth += token.width;
      started = true;
      continue;
    }
    if (started) {
      flush();
    }
    let rest = token.span.text;
    while (measureTextWidth(rest) > usable) {
      const slice = sliceTextByWidth(rest, 0, usable);
      if (slice.text.length === 0) {
        break;
      }
      pushSpan(current, { ...token.span, text: slice.text });
      flush();
      rest = rest.slice(slice.text.length);
    }
    if (rest.length > 0) {
      pushSpan(current, { ...token.span, text: rest });
      currentWidth = measureTextWidth(rest);
      started = true;
    }
  }
  if (current.spans.length > 0 || lines.length === 0) {
    lines.push(current);
  }
  return lines;
}
function lineWidth(line) {
  return line.spans.reduce((total, span) => total + measureTextWidth(span.text), 0);
}
function padLines(lines, width, bg) {
  return lines.map((line) => {
    const spans = bg ? line.spans.map((span) => ({ ...span, bg: span.bg ?? bg })) : line.spans.map((span) => ({ ...span }));
    const used = lineWidth({ spans });
    if (used < width) {
      spans.push({ text: " ".repeat(width - used), ...bg ? { bg } : {} });
    }
    return { spans };
  });
}
var rawText = (el) => el.children.map((child) => child.type === "text" ? child.value : "").join("");
function dedent(text) {
  const lines = text.replace(/^\n/, "").replace(/\s+$/, "").split(`
`);
  let min = Infinity;
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    min = Math.min(min, line.length - line.trimStart().length);
  }
  if (!Number.isFinite(min) || min === 0) {
    return lines.join(`
`);
  }
  return lines.map((line) => line.slice(min)).join(`
`);
}
function borderChars(styleAttr, fallback) {
  if (styleAttr && BORDER_STYLES[styleAttr]) {
    return { chars: BORDER_STYLES[styleAttr], unknown: false };
  }
  return { chars: BORDER_STYLES[fallback], unknown: styleAttr !== undefined };
}
function frameLines(content, {
  width,
  border,
  chars,
  borderColor,
  title,
  titleColor,
  bg,
  paddingX,
  paddingY
}) {
  const innerWidth = Math.max(1, width - (border ? 2 : 0) - paddingX * 2);
  const padded = padLines(content, innerWidth, bg);
  const sidePad = paddingX > 0 ? { text: " ".repeat(paddingX), ...bg ? { bg } : {} } : null;
  const bodyLines = [];
  const blankRow = () => ({
    spans: [{ text: " ".repeat(innerWidth + paddingX * 2), ...bg ? { bg } : {} }]
  });
  for (let i = 0;i < paddingY; i++) {
    bodyLines.push(blankRow());
  }
  for (const line of padded) {
    const spans = [];
    if (sidePad) {
      spans.push({ ...sidePad });
    }
    spans.push(...line.spans);
    if (sidePad) {
      spans.push({ ...sidePad });
    }
    bodyLines.push({ spans });
  }
  for (let i = 0;i < paddingY; i++) {
    bodyLines.push(blankRow());
  }
  if (!border) {
    return bodyLines;
  }
  const horizontalWidth = Math.max(0, width - 2);
  const top = { spans: [] };
  if (title && title.trim() !== "") {
    const label = ` ${title.trim()} `;
    const fitted = sliceTextByWidth(label, 0, Math.max(0, horizontalWidth - 2)).text;
    const remainder = Math.max(0, horizontalWidth - 1 - measureTextWidth(fitted));
    top.spans.push({ text: `${chars.topLeft}${chars.horizontal}`, fg: borderColor });
    top.spans.push({ text: fitted, fg: titleColor, bold: true });
    top.spans.push({
      text: `${chars.horizontal.repeat(remainder)}${chars.topRight}`,
      fg: borderColor
    });
  } else {
    top.spans.push({
      text: `${chars.topLeft}${chars.horizontal.repeat(horizontalWidth)}${chars.topRight}`,
      fg: borderColor
    });
  }
  const bottom = {
    spans: [
      {
        text: `${chars.bottomLeft}${chars.horizontal.repeat(horizontalWidth)}${chars.bottomRight}`,
        fg: borderColor
      }
    ]
  };
  const framed = [top];
  for (const line of bodyLines) {
    framed.push({
      spans: [
        { text: chars.vertical, fg: borderColor, ...bg ? { bg } : {} },
        ...line.spans,
        { text: chars.vertical, fg: borderColor, ...bg ? { bg } : {} }
      ]
    });
  }
  framed.push(bottom);
  return framed;
}
function bulletLines(prefix, children, width, style, errors) {
  const prefixWidth = measureTextWidth(prefix);
  const bodyWidth = Math.max(1, width - prefixWidth);
  const body = layoutBlockNodes(children, bodyWidth, style, errors);
  return body.map((line, index) => ({
    spans: [
      index === 0 ? { text: prefix, fg: "muted" } : { text: " ".repeat(prefixWidth) },
      ...line.spans
    ]
  }));
}
function mergeColumns(columns, widths, gap) {
  const height = Math.max(0, ...columns.map((column) => column.length));
  const merged = [];
  for (let rowIndex = 0;rowIndex < height; rowIndex++) {
    const spans = [];
    columns.forEach((column, columnIndex) => {
      if (columnIndex > 0 && gap > 0) {
        spans.push({ text: " ".repeat(gap) });
      }
      const width = widths[columnIndex];
      const line = column[rowIndex];
      if (line) {
        spans.push(...line.spans);
        const used = lineWidth(line);
        if (used < width) {
          spans.push({ text: " ".repeat(width - used) });
        }
      } else {
        spans.push({ text: " ".repeat(width) });
      }
    });
    merged.push({ spans });
  }
  return merged;
}
function layoutRow(el, width, style, errors) {
  const children = el.children.filter((child) => child.type === "element" && !isInlineTag(child.tag));
  const looseInline = el.children.filter((child) => child.type === "text" || child.type === "element" && isInlineTag(child.tag));
  if (children.length === 0) {
    return layoutBlockNodes(el.children, width, style, errors);
  }
  if (looseInline.some((node) => node.type !== "text" || node.value.trim() !== "")) {
    errors.add("<row> mixes bare text with block children; text laid out above the row");
  }
  const gap = Math.max(0, numAttr(el.attrs.gap) ?? 1);
  const totalGap = gap * (children.length - 1);
  const available = width - totalGap;
  const fixed = children.map((child) => widthAttr(child.attrs.width, available));
  const fixedTotal = fixed.reduce((total, w) => total + (w ?? 0), 0);
  const flexCount = fixed.filter((w) => w === undefined).length;
  const flexSpace = Math.max(flexCount, available - fixedTotal);
  const flexWidth = flexCount > 0 ? Math.floor(flexSpace / flexCount) : 0;
  let flexRemainder = flexCount > 0 ? flexSpace - flexWidth * flexCount : 0;
  if (available < children.length) {
    errors.add("<row> too narrow for its columns; stacking vertically");
    return children.flatMap((child) => layoutBlock(child, width, style, errors));
  }
  const widths = fixed.map((w) => {
    if (w !== undefined) {
      return Math.max(1, Math.min(w, available));
    }
    const extra = flexRemainder > 0 ? 1 : 0;
    flexRemainder -= extra;
    return Math.max(1, flexWidth + extra);
  });
  const inlinePrefix = looseInline.length > 0 ? layoutBlockNodes(looseInline, width, style, errors) : [];
  const columns = children.map((child, index) => layoutBlock(child, widths[index], style, errors));
  return [...inlinePrefix, ...mergeColumns(columns, widths, gap)];
}
function layoutBlock(el, width, style, errors) {
  const tag = el.tag;
  const role = stmlTagRole(tag);
  switch (role) {
    case "container":
    case "card": {
      const isCard = role === "card";
      const border = "border" in el.attrs ? truthyAttr(el.attrs.border) : isCard || ("border-style" in el.attrs);
      const { chars, unknown } = borderChars(el.attrs["border-style"], isCard ? "rounded" : "single");
      if (unknown) {
        errors.add(`unknown border-style "${el.attrs["border-style"]}"`);
      }
      const padding = Math.max(0, numAttr(el.attrs.padding) ?? (isCard ? 1 : 0));
      const paddingX = Math.max(0, numAttr(el.attrs["padding-x"]) ?? padding);
      const paddingY = Math.max(0, numAttr(el.attrs["padding-y"]) ?? padding);
      const requestedWidth = widthAttr(el.attrs.width, width);
      const boxWidth = Math.max(4, Math.min(requestedWidth ?? width, width));
      const innerWidth = Math.max(1, boxWidth - (border ? 2 : 0) - paddingX * 2);
      const childStyle = mergeStyle(style, attrStyle(el.attrs));
      const content = layoutBlockNodes(el.children, innerWidth, childStyle, errors);
      return frameLines(content, {
        width: boxWidth,
        border,
        chars,
        borderColor: el.attrs["border-color"] ?? "note-border",
        title: el.attrs.title,
        titleColor: el.attrs["title-color"] ?? "heading",
        bg: el.attrs.bg,
        paddingX,
        paddingY
      });
    }
    case "row":
      return layoutRow(el, width, style, errors);
    case "paragraph":
      return wrapSpans2(el.children.flatMap((child) => inlineSpans(child, mergeStyle(style, attrStyle(el.attrs)))), width);
    case "heading":
    case "title": {
      const base = mergeStyle(style, {
        bold: true,
        fg: el.attrs.fg ?? el.attrs.color ?? "heading"
      });
      if (role === "title") {
        base.underline = true;
      }
      return wrapSpans2(el.children.flatMap((child) => inlineSpans(child, base)), width);
    }
    case "divider":
      return [
        {
          spans: [{ text: "─".repeat(Math.max(1, width)), fg: el.attrs.color ?? "muted" }]
        }
      ];
    case "spacer": {
      const size = Math.max(1, Math.min(20, numAttr(el.attrs.size) ?? 1));
      return Array.from({ length: size }, () => ({ spans: [{ text: "" }] }));
    }
    case "list":
    case "ordered-list": {
      const ordered = role === "ordered-list";
      const marker = el.attrs.marker ?? "•";
      const lines = [];
      let index = 1;
      for (const child of el.children) {
        if (child.type !== "element" || stmlTagRole(child.tag) !== "list-item") {
          continue;
        }
        const prefix = ordered ? `${index++}. ` : `${marker} `;
        lines.push(...bulletLines(prefix, child.children, width, style, errors));
      }
      return lines;
    }
    case "list-item":
      return bulletLines("• ", el.children, width, style, errors);
    case "code": {
      const { chars } = borderChars(el.attrs["border-style"], "single");
      const codeStyle = { ...style, fg: el.attrs.fg ?? style.fg };
      const codeWidth = Math.max(1, width - 4);
      const content = dedent(rawText(el)).split(`
`).map((line) => {
        const fitted = sliceTextByWidth(line.replaceAll("\t", "  "), 0, codeWidth);
        return { spans: [{ ...codeStyle, text: fitted.text }] };
      });
      return frameLines(content, {
        width,
        border: true,
        chars,
        borderColor: el.attrs["border-color"] ?? "subtle",
        title: el.attrs.title,
        titleColor: "heading",
        bg: el.attrs.bg,
        paddingX: 1,
        paddingY: 0
      });
    }
    default: {
      errors.add(`unknown tag <${tag}>`);
      return layoutBlockNodes(el.children, width, style, errors);
    }
  }
}
function layoutBlockNodes(nodes, width, style, errors) {
  const out = [];
  let run = [];
  const flush = () => {
    if (run.length === 0) {
      return;
    }
    const spans = run.flatMap((node) => inlineSpans(node, style));
    const meaningful = spans.some((span) => span.text.trim() !== "" || span.text === `
`);
    if (meaningful) {
      out.push(...wrapSpans2(spans, width));
    }
    run = [];
  };
  for (const node of nodes) {
    if (node.type === "text" || isInlineTag(node.tag)) {
      run.push(node);
      continue;
    }
    flush();
    out.push(...layoutBlock(node, width, style, errors));
  }
  flush();
  return out;
}
function layoutStml(markup, width) {
  if (width < MIN_STML_LAYOUT_WIDTH) {
    return { lines: [], errors: [`width ${width} below minimum ${MIN_STML_LAYOUT_WIDTH}`] };
  }
  const errors = new LayoutErrors;
  const parsed = parseStml(markup);
  for (const message of parsed.errors) {
    errors.add(message);
  }
  const lines = layoutBlockNodes(parsed.nodes, width, {}, errors);
  while (lines.length > 0 && lineWidth(lines[0]) === 0 && lines[0].spans.every((s) => s.text.trim() === "")) {
    lines.shift();
  }
  while (lines.length > 0 && lineWidth(lines[lines.length - 1]) === 0 && lines[lines.length - 1].spans.every((s) => s.text.trim() === "")) {
    lines.pop();
  }
  return { lines, errors: errors.messages };
}
var layoutCache = new Map;
var LAYOUT_CACHE_LIMIT = 256;
function layoutStmlCached(markup, width) {
  const key = `${width}\x00${markup}`;
  const cached = layoutCache.get(key);
  if (cached) {
    return cached;
  }
  const result = layoutStml(markup, width);
  if (layoutCache.size >= LAYOUT_CACHE_LIMIT) {
    layoutCache.clear();
  }
  layoutCache.set(key, result);
  return result;
}

// src/ui/components/panes/AgentInlineNote.tsx
import { jsxDEV as jsxDEV5 } from "@opentui/react/jsx-dev-runtime";
function agentInlineNoteMarkupLines(annotation, contentWidth) {
  if (!annotation.markup || annotation.source === "user-draft") {
    return null;
  }
  const { lines } = layoutStmlCached(annotation.markup, contentWidth);
  return lines.length > 0 ? lines : null;
}
var draftMeasureView = null;
function draftVisualLineCount(text, width) {
  if (!draftMeasureView) {
    const buffer2 = EditBuffer.create("unicode");
    const view2 = EditorView.create(buffer2, 1, 1);
    view2.setWrapMode("char");
    draftMeasureView = { buffer: buffer2, view: view2 };
  }
  const { buffer, view } = draftMeasureView;
  view.setViewport(0, 0, Math.max(1, width), 1);
  buffer.setText(text);
  return view.getTotalVirtualLineCount();
}
function wrapNoteText(text, width) {
  return text.split(`
`).flatMap((line) => wrapText(sanitizeTerminalLine(line), width));
}
function agentInlineNoteBodyLines(annotation, contentWidth) {
  return [
    ...wrapNoteText(annotation.summary, contentWidth).map((text) => ({
      kind: "summary",
      text
    })),
    ...annotation.rationale ? wrapNoteText(annotation.rationale, contentWidth).map((text) => ({
      kind: "rationale",
      text
    })) : []
  ];
}
function measureAgentInlineNoteHeight({
  annotation,
  anchorSide,
  layout,
  width
}) {
  const { contentWidth } = agentNoteBoxLayout({ anchorSide, layout, width });
  if (annotation.source === "user-draft") {
    return draftVisualLineCount(annotation.summary, contentWidth) + 6;
  }
  const markupLines = agentInlineNoteMarkupLines(annotation, contentWidth);
  const bodyLineCount = markupLines ? markupLines.length : agentInlineNoteBodyLines(annotation, contentWidth).length;
  return 3 + bodyLineCount;
}

// src/ui/diff/reviewRowGeometry.ts
function plannedReviewRowHeight(row, { showHunkHeaders, layout, width }) {
  if (row.kind === "inline-note") {
    return measureAgentInlineNoteHeight({
      annotation: row.annotation,
      anchorSide: row.anchorSide,
      layout,
      width
    });
  }
  if (row.kind === "hunk-gap") {
    return row.height;
  }
  if (row.row.type === "hunk-header") {
    return showHunkHeaders ? 1 : 0;
  }
  return 1;
}
function plannedReviewRowVisible(row, options) {
  return plannedReviewRowHeight(row, options) > 0;
}

// src/ui/diff/useHighlightedDiff.ts
import { createHash as createHash2 } from "node:crypto";
import { useLayoutEffect as useLayoutEffect2, useState } from "react";

// src/ui/diff/highlightedDiffCache.ts
var MAX_HIGHLIGHTED_DIFF_CACHE_LINES = 60000;
var ENTRY_OVERHEAD_LINES = 8;
function highlightedLineCount(value) {
  if (value.compact) {
    return (value.compact.deletionLineMap?.length ?? value.compact.payload.deletion.lineOffsets.length - 1) + (value.compact.additionLineMap?.length ?? value.compact.payload.addition.lineOffsets.length - 1);
  }
  return value.deletionLines.length + value.additionLines.length;
}
function entryCost(value) {
  return highlightedLineCount(value) + ENTRY_OVERHEAD_LINES;
}
function createHighlightedDiffCache(maxLines = MAX_HIGHLIGHTED_DIFF_CACHE_LINES) {
  const entries = new Map;
  const budget = Math.max(1, Math.floor(maxLines));
  let cachedCost = 0;
  const touch = (key, entry) => {
    entries.delete(key);
    entries.set(key, entry);
  };
  return {
    get(key) {
      const entry = entries.get(key);
      if (entry === undefined) {
        return;
      }
      touch(key, entry);
      return entry.value;
    },
    peek(key) {
      return entries.get(key)?.value;
    },
    set(key, value) {
      cachedCost -= entries.get(key)?.cost ?? 0;
      const cost = entryCost(value);
      touch(key, { cost, value });
      cachedCost += cost;
      while (cachedCost > budget && entries.size > 1) {
        const leastRecentlyUsed = entries.entries().next().value;
        if (leastRecentlyUsed === undefined) {
          return;
        }
        const [evictedKey, evictedEntry] = leastRecentlyUsed;
        entries.delete(evictedKey);
        cachedCost -= evictedEntry.cost;
      }
    }
  };
}

// src/ui/diff/useHighlightedDiff.ts
var SHARED_HIGHLIGHTED_DIFF_CACHE = createHighlightedDiffCache();
var SHARED_HIGHLIGHT_PROMISES = new Map;
var highlightedContentFingerprints = new WeakMap;
var sourceFetcherIds = new WeakMap;
var nextSourceFetcherId = 1;
function highlightedContentFingerprint(file) {
  const cached = highlightedContentFingerprints.get(file);
  if (cached?.metadata === file.metadata && cached.patch === file.patch) {
    return cached.fingerprint;
  }
  const metadata = JSON.stringify(file.metadata);
  const fingerprint = createHash2("sha256").update(`${file.patch.length}:`).update(file.patch).update(`${metadata.length}:`).update(metadata).digest("hex");
  highlightedContentFingerprints.set(file, {
    fingerprint,
    metadata: file.metadata,
    patch: file.patch
  });
  return fingerprint;
}
function sourceFetcherFingerprint(file) {
  if (!file.metadata.isPartial || !file.sourceFetcher) {
    return "patch-only";
  }
  if (file.sourceFetcher.cacheKey !== undefined) {
    return `source-cache:${file.sourceFetcher.cacheKey.length}:${file.sourceFetcher.cacheKey}`;
  }
  let id = sourceFetcherIds.get(file.sourceFetcher);
  if (id === undefined) {
    id = nextSourceFetcherId;
    nextSourceFetcherId += 1;
    sourceFetcherIds.set(file.sourceFetcher, id);
  }
  return `source:${id}`;
}
function highlightedDiffCacheKey(theme, file) {
  return `${theme.id}:${syntaxHighlightThemeName(theme)}:${file.id}:${file.language ?? "text"}:${highlightedContentFingerprint(file)}:${sourceFetcherFingerprint(file)}`;
}
function commitHighlightResult(cacheKey, promise, result) {
  if (SHARED_HIGHLIGHT_PROMISES.get(cacheKey) !== promise) {
    return false;
  }
  SHARED_HIGHLIGHT_PROMISES.delete(cacheKey);
  if (!result.retryable) {
    SHARED_HIGHLIGHTED_DIFF_CACHE.set(cacheKey, result);
  }
  return true;
}
function ensureHighlightedDiffLoaded(file, theme, offloadLargeDiff, cacheKey = highlightedDiffCacheKey(theme, file)) {
  const cached = SHARED_HIGHLIGHTED_DIFF_CACHE.get(cacheKey);
  if (cached) {
    return Promise.resolve(cached);
  }
  const existing = SHARED_HIGHLIGHT_PROMISES.get(cacheKey);
  if (existing) {
    return existing;
  }
  let pending;
  pending = loadHighlightedDiff(file, theme, { offloadLargeDiff }).then((nextHighlighted) => {
    commitHighlightResult(cacheKey, pending, nextHighlighted);
    return nextHighlighted;
  }).catch(() => {
    const fallback = {
      deletionLines: [],
      additionLines: []
    };
    commitHighlightResult(cacheKey, pending, fallback);
    return fallback;
  });
  SHARED_HIGHLIGHT_PROMISES.set(cacheKey, pending);
  return pending;
}
function resolveHighlightedSnapshot({
  appearanceCacheKey,
  highlighted,
  highlightedCacheKey
}) {
  if (!appearanceCacheKey) {
    return null;
  }
  if (highlightedCacheKey === appearanceCacheKey) {
    return highlighted;
  }
  return SHARED_HIGHLIGHTED_DIFF_CACHE.peek(appearanceCacheKey) ?? null;
}
function useHighlightedDiff({
  file,
  offloadLargeDiff = false,
  theme,
  shouldLoadHighlight
}) {
  const [highlighted, setHighlighted] = useState(null);
  const [highlightedCacheKey, setHighlightedCacheKey] = useState(null);
  const appearanceCacheKey = file ? highlightedDiffCacheKey(theme, file) : null;
  useLayoutEffect2(() => {
    if (!file || !appearanceCacheKey) {
      setHighlighted(null);
      setHighlightedCacheKey(null);
      return;
    }
    if (highlightedCacheKey === appearanceCacheKey) {
      return;
    }
    const cached = SHARED_HIGHLIGHTED_DIFF_CACHE.get(appearanceCacheKey);
    if (cached) {
      setHighlighted(cached);
      setHighlightedCacheKey(appearanceCacheKey);
      return;
    }
    if (!shouldLoadHighlight) {
      return;
    }
    let cancelled = false;
    setHighlighted(null);
    ensureHighlightedDiffLoaded(file, theme, offloadLargeDiff, appearanceCacheKey).then((nextHighlighted) => {
      if (cancelled) {
        return;
      }
      setHighlighted(nextHighlighted);
      setHighlightedCacheKey(appearanceCacheKey);
    });
    return () => {
      cancelled = true;
    };
  }, [appearanceCacheKey, file, highlightedCacheKey, offloadLargeDiff, shouldLoadHighlight]);
  return resolveHighlightedSnapshot({
    appearanceCacheKey,
    highlighted,
    highlightedCacheKey
  });
}

// src/opentui/model.ts
import { parsePatchFiles } from "@pierre/diffs";

// src/core/changeset/binary.ts
function patchLooksBinary(patch) {
  return /(^|\n)Binary files .* differ(?:\n|$)/.test(patch) || /(^|\n)GIT binary patch(?:\n|$)/.test(patch);
}

// src/core/changeset/diffFile.ts
import { setLanguageOverride } from "@pierre/diffs";

// src/core/changeset/fileLanguageLookup.ts
import { getFiletypeFromFileName } from "@pierre/diffs";

// src/core/changeset/fileLanguage.ts
var HUNK_CUSTOM_EXTENSIONS = {
  mts: "typescript",
  cts: "typescript"
};
var BUILT_IN_FILE_LANGUAGE_EXTENSIONS = new Set(Object.keys(HUNK_CUSTOM_EXTENSIONS));
var builtInFileLanguages = Object.entries(HUNK_CUSTOM_EXTENSIONS).map(([value, language]) => ({
  matcher: { kind: "extension", value },
  language,
  reserved: true
}));
var registrationVersion = 0;
var activeFileLanguages = builtInFileLanguages;
function fileLanguageRegistrationSnapshot() {
  return { version: registrationVersion, registrations: activeFileLanguages };
}

// src/core/changeset/fileLanguageLookup.ts
var appliedRegistrationVersion = -1;
var appliedFileLanguages = [];
var GLOB_LITERAL_BACKSLASH = "\x00";
function encodeGlobBackslashes(value) {
  return value.replaceAll("\\", GLOB_LITERAL_BACKSLASH);
}
function applyCurrentFileLanguages() {
  const snapshot = fileLanguageRegistrationSnapshot();
  if (snapshot.version === appliedRegistrationVersion) {
    return;
  }
  appliedFileLanguages = snapshot.registrations.map((registration) => ({
    ...registration,
    glob: registration.matcher.kind === "glob" && !registration.matcher.value.includes("\x00") ? new Bun.Glob(encodeGlobBackslashes(registration.matcher.value)) : undefined
  }));
  appliedRegistrationVersion = snapshot.version;
}
function basenameForLanguagePath(path) {
  return path.slice(path.lastIndexOf("/") + 1);
}
function filenameLanguage(basename2) {
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind === "filename" && registration.matcher.value === basename2) {
      return registration.language;
    }
  }
  return;
}
function globLanguage(path, basename2) {
  if (path.includes("\x00")) {
    return;
  }
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind !== "glob") {
      continue;
    }
    const candidate = registration.matcher.target === "path" ? path : basename2;
    if (registration.glob?.match(encodeGlobBackslashes(candidate))) {
      return registration.language;
    }
  }
  return;
}
function extensionLanguage(basename2, reservedOnly = false) {
  const lowerBasename = basename2.toLowerCase();
  let best;
  for (let index = appliedFileLanguages.length - 1;index >= 0; index -= 1) {
    const registration = appliedFileLanguages[index];
    if (registration.matcher.kind !== "extension" || reservedOnly && registration.reserved !== true || !reservedOnly && registration.reserved === true) {
      continue;
    }
    const extension = registration.matcher.value;
    if (lowerBasename.endsWith(`.${extension}`) && (best === undefined || extension.length > best.length)) {
      best = { length: extension.length, language: registration.language };
    }
  }
  return best?.language;
}
function fileLanguageForPath(path) {
  applyCurrentFileLanguages();
  const basename2 = basenameForLanguagePath(path);
  const registeredLanguage = extensionLanguage(basename2, true) ?? filenameLanguage(basename2) ?? globLanguage(path, basename2) ?? extensionLanguage(basename2);
  if (registeredLanguage !== undefined) {
    return registeredLanguage;
  }
  const inferred = getFiletypeFromFileName(path);
  return inferred === "text" && basename2 !== path ? getFiletypeFromFileName(basename2) : inferred;
}

// src/core/changeset/diffFile.ts
function countDiffStats(metadata) {
  let additions = 0;
  let deletions = 0;
  for (const hunk of metadata.hunks) {
    for (const content of hunk.hunkContent) {
      if (content.type === "change") {
        additions += content.additions;
        deletions += content.deletions;
      }
    }
  }
  return { additions, deletions };
}

// src/core/patch/chunks.ts
function stripPrefixes(path) {
  return path.replace(/^[ab]\//, "");
}
function splitPatchIntoFileChunks(rawPatch) {
  const patch = rawPatch.replaceAll(`\r
`, `
`);
  const lines = patch.split(`
`);
  const chunks = [];
  let current = [];
  const hasGitHeaders = lines.some((line) => line.startsWith("diff --git "));
  const flush = () => {
    if (current.length > 0) {
      chunks.push(`${current.join(`
`).trimEnd()}
`);
      current = [];
    }
  };
  for (let index = 0;index < lines.length; index += 1) {
    const line = lines[index];
    if (hasGitHeaders && line.startsWith("diff --git ")) {
      flush();
      current.push(line);
      continue;
    }
    if (!hasGitHeaders && line.startsWith("--- ") && lines[index + 1]?.startsWith("+++ ")) {
      flush();
      current.push(line);
      current.push(lines[index + 1]);
      index += 1;
      continue;
    }
    if (current.length > 0) {
      current.push(line);
    }
  }
  flush();
  return chunks;
}
function findPatchChunk(metadata, chunks, index) {
  const byIndex = chunks[index];
  if (byIndex) {
    return byIndex;
  }
  return chunks.find((chunk) => [metadata.name, metadata.prevName].map(normalizeDiffPath).filter((value) => Boolean(value)).map(stripPrefixes).some((path) => chunk.includes(`a/${path}`) || chunk.includes(`b/${path}`) || chunk.includes(path))) ?? "";
}

// src/core/patch/gitFormat.ts
var gitQuotedUtf8Decoder = new TextDecoder("utf-8", { fatal: true });
var gitQuotedUtf8Encoder = new TextEncoder;
var gitUnsafeDecodedHeaderCharacter = /[\x00-\x1f\x7f-\x9f]/;
var gitSimpleEscapeBytes = {
  a: 7,
  b: 8,
  t: 9,
  n: 10,
  v: 11,
  f: 12,
  r: 13,
  "\\": 92,
  '"': 34
};
function decodeGitQuotedUtf8Path(path) {
  let decodedPath = "";
  let index = 0;
  while (index < path.length) {
    const escape = path.slice(index).match(/^\\([0-7]{3})/);
    if (!escape) {
      if (path[index] === "\\" && index + 1 < path.length) {
        decodedPath += path.slice(index, index + 2);
        index += 2;
      } else {
        decodedPath += path[index];
        index += 1;
      }
      continue;
    }
    const escapedBytes = [];
    const escapedText = [];
    while (index < path.length) {
      const byteEscape = path.slice(index).match(/^\\([0-7]{3})/);
      if (!byteEscape) {
        break;
      }
      escapedText.push(byteEscape[0]);
      escapedBytes.push(Number.parseInt(byteEscape[1], 8));
      index += byteEscape[0].length;
    }
    if (escapedBytes.every((byte) => byte >= 128 && byte <= 255)) {
      try {
        const decodedBytes = gitQuotedUtf8Decoder.decode(Uint8Array.from(escapedBytes));
        if (!gitUnsafeDecodedHeaderCharacter.test(decodedBytes)) {
          decodedPath += decodedBytes;
          continue;
        }
      } catch {}
    }
    decodedPath += escapedText.join("");
  }
  return decodedPath;
}
function decodeGitQuotedPath(path) {
  const bytes = [];
  let index = 0;
  while (index < path.length) {
    if (path[index] !== "\\") {
      const codePoint = path.codePointAt(index);
      if (codePoint === undefined) {
        break;
      }
      const scalar = String.fromCodePoint(codePoint);
      bytes.push(...gitQuotedUtf8Encoder.encode(scalar));
      index += scalar.length;
      continue;
    }
    const octalEscape = path.slice(index).match(/^\\([0-7]{1,3})/);
    if (octalEscape) {
      const byte2 = Number.parseInt(octalEscape[1], 8);
      if (byte2 > 255) {
        return null;
      }
      bytes.push(byte2);
      index += octalEscape[0].length;
      continue;
    }
    const escaped = path[index + 1];
    const byte = escaped ? gitSimpleEscapeBytes[escaped] : undefined;
    if (byte === undefined) {
      return null;
    }
    bytes.push(byte);
    index += 2;
  }
  try {
    return gitQuotedUtf8Decoder.decode(Uint8Array.from(bytes));
  } catch {
    return null;
  }
}
function sanitizeGitPatch(patchText) {
  if (!patchText.includes("diff --git ")) {
    return { text: patchText, filePaths: [] };
  }
  const lines = patchText.split(`
`);
  const normalizedLines = [];
  const filePaths = [];
  let blockLines = [];
  const flushBlock = () => {
    if (blockLines.length === 0) {
      return;
    }
    const rewritten = rewriteGitPatchBlock(blockLines);
    normalizedLines.push(...rewritten.lines);
    filePaths.push(rewritten.filePaths);
    blockLines = [];
  };
  for (const line of lines) {
    if (line.startsWith("diff --git ")) {
      flushBlock();
      blockLines.push(line);
      continue;
    }
    if (blockLines.length > 0) {
      blockLines.push(line);
    } else {
      normalizedLines.push(line);
    }
  }
  flushBlock();
  return { text: normalizedLines.join(`
`), filePaths };
}
function rewriteGitPatchBlock(blockLines) {
  const firstLine = blockLines[0];
  if (!firstLine?.startsWith("diff --git ")) {
    return { lines: blockLines, filePaths: undefined };
  }
  const result = rewriteGitDiffHeader(firstLine, blockLines);
  let blockRewriteMode = result.rewriteMode;
  const rewrittenLines = [result.line];
  for (const line of blockLines.slice(1)) {
    if (blockRewriteMode && line.startsWith("--- ")) {
      rewrittenLines.push(rewriteUnifiedFileLine(line, "--- ", "a/", blockRewriteMode));
      continue;
    }
    if (blockRewriteMode && line.startsWith("+++ ")) {
      const rewriteMode = blockRewriteMode;
      blockRewriteMode = null;
      rewrittenLines.push(rewriteUnifiedFileLine(line, "+++ ", "b/", rewriteMode));
      continue;
    }
    rewrittenLines.push(rewriteGitMetadataPathLine(line));
  }
  return {
    lines: rewrittenLines,
    filePaths: resolveDecodedGitFilePaths(result.decodedPair, blockLines)
  };
}
function rewriteGitDiffHeader(line, blockLines) {
  const rest = line.slice("diff --git ".length).trimEnd();
  const quotedMatch = rest.match(/^"((?:\\.|[^"\\])*)" "((?:\\.|[^"\\])*)"$/);
  if (quotedMatch) {
    const quotedOldPath = quotedMatch[1] ?? "";
    const quotedNewPath = quotedMatch[2] ?? "";
    const oldPath = decodeGitQuotedUtf8Path(quotedOldPath);
    const newPath = decodeGitQuotedUtf8Path(quotedNewPath);
    const pair = canonicalizeGitPathPair(oldPath, newPath, blockLines);
    const decodedOldPath = decodeGitQuotedPath(quotedOldPath);
    const decodedNewPath = decodeGitQuotedPath(quotedNewPath);
    const decodedPair = decodedOldPath !== null && decodedNewPath !== null ? canonicalizeGitPathPair(decodedOldPath, decodedNewPath, blockLines) : undefined;
    return {
      line: `diff --git ${pair.oldPath} ${pair.newPath}`,
      rewriteMode: pair.rewriteMode,
      decodedPair
    };
  }
  const tokens = rest.split(" ");
  if (tokens.length >= 2 && tokens.length % 2 === 0) {
    const half = tokens.length / 2;
    const firstHalf = tokens.slice(0, half).join(" ");
    const secondHalf = tokens.slice(half).join(" ");
    const knownPair = canonicalizeKnownGitPathPair(firstHalf, secondHalf, blockLines);
    if (knownPair?.changed) {
      return {
        line: `diff --git ${knownPair.oldPath} ${knownPair.newPath}`,
        rewriteMode: knownPair.rewriteMode
      };
    }
    if (knownPair?.isCanonical) {
      return { line, rewriteMode: null };
    }
    if (firstHalf === secondHalf && firstHalf.length > 0) {
      return {
        line: `diff --git a/${firstHalf} b/${secondHalf}`,
        rewriteMode: "prepend-prefix"
      };
    }
  }
  if (tokens.length === 2 && tokens[0] && tokens[1]) {
    return {
      line: `diff --git a/${tokens[0]} b/${tokens[1]}`,
      rewriteMode: "prepend-prefix"
    };
  }
  return { line, rewriteMode: null };
}
var GIT_MNEMONIC_PREFIXES = new Set(["c", "i", "o", "w", "1", "2"]);
function splitGitMnemonicPrefix(path) {
  const [prefix, ...rest] = path.split("/");
  if (!prefix || rest.length === 0 || !GIT_MNEMONIC_PREFIXES.has(prefix)) {
    return null;
  }
  return { prefix, path: rest.join("/") };
}
function stripGitPathQuotes(path) {
  const quotedPath = path.match(/^"((?:\\.|[^"\\])*)"$/)?.[1];
  return quotedPath === undefined ? path : decodeGitQuotedPath(quotedPath) ?? decodeGitQuotedUtf8Path(quotedPath);
}
var gitMetadataPathMarkers = ["rename from ", "rename to ", "copy from ", "copy to "];
function rewriteGitMetadataPathLine(line) {
  const marker = gitMetadataPathMarkers.find((candidate) => line.startsWith(candidate));
  if (!marker) {
    return line;
  }
  const value = line.slice(marker.length);
  const quotedPath = value.match(/^"((?:\\.|[^"\\])*)"$/)?.[1];
  if (quotedPath === undefined) {
    return line;
  }
  const decodedPath = decodeGitQuotedUtf8Path(quotedPath);
  return decodedPath === quotedPath ? line : `${marker}${decodedPath}`;
}
function findRenameOrCopyMetadata(blockLines) {
  for (const kind of ["rename", "copy"]) {
    const oldMarker = `${kind} from `;
    const newMarker = `${kind} to `;
    const oldPath = blockLines.find((line) => line.startsWith(oldMarker));
    const newPath = blockLines.find((line) => line.startsWith(newMarker));
    if (oldPath && newPath) {
      return {
        oldPath: stripGitPathQuotes(oldPath.slice(oldMarker.length)),
        newPath: stripGitPathQuotes(newPath.slice(newMarker.length))
      };
    }
  }
  return null;
}
function resolveDecodedGitFilePaths(decodedPair, blockLines) {
  if (!decodedPair) {
    return;
  }
  const metadata = findRenameOrCopyMetadata(blockLines);
  const previousPath = metadata?.oldPath ?? decodedPair.oldPath.replace(/^a\//, "");
  const path = metadata?.newPath ?? decodedPair.newPath.replace(/^b\//, "");
  return previousPath === path ? { path } : { path, previousPath };
}
function withGitPrefix(path, prefix) {
  return path.startsWith(prefix) ? path : `${prefix}${path}`;
}
function shouldStripMnemonicPair(oldPath, newPath, blockLines) {
  const oldMnemonic = splitGitMnemonicPrefix(oldPath);
  const newMnemonic = splitGitMnemonicPrefix(newPath);
  if (!oldMnemonic || !newMnemonic || oldMnemonic.prefix === newMnemonic.prefix) {
    return null;
  }
  const metadata = findRenameOrCopyMetadata(blockLines);
  if (!metadata) {
    return true;
  }
  if (metadata.oldPath === oldPath && metadata.newPath === newPath) {
    return false;
  }
  if (metadata.oldPath === oldMnemonic.path && metadata.newPath === newMnemonic.path) {
    return true;
  }
  return true;
}
function canonicalizeKnownGitPathPair(oldPath, newPath, blockLines) {
  const oldMnemonic = splitGitMnemonicPrefix(oldPath);
  const newMnemonic = splitGitMnemonicPrefix(newPath);
  const isCanonical = oldPath.startsWith("a/") && newPath.startsWith("b/");
  if (isCanonical) {
    const metadata = findRenameOrCopyMetadata(blockLines);
    if (metadata?.oldPath === oldPath && metadata.newPath === newPath) {
      return null;
    }
    return { oldPath, newPath, rewriteMode: "add", changed: false, isCanonical: true };
  }
  if (oldMnemonic && newMnemonic && shouldStripMnemonicPair(oldPath, newPath, blockLines)) {
    return {
      oldPath: `a/${oldMnemonic.path}`,
      newPath: `b/${newMnemonic.path}`,
      rewriteMode: "strip",
      changed: true,
      isCanonical: false
    };
  }
  return null;
}
function canonicalizeGitPathPair(oldPath, newPath, blockLines) {
  return canonicalizeKnownGitPathPair(oldPath, newPath, blockLines) ?? {
    oldPath: `a/${oldPath}`,
    newPath: `b/${newPath}`,
    rewriteMode: "prepend-prefix",
    changed: true,
    isCanonical: false
  };
}
function rewriteUnifiedFileLine(line, marker, prefix, mode) {
  const path = line.slice(marker.length);
  const quotedPath = path.match(/^"((?:\\.|[^"\\])*)"(.*)$/);
  const pathName = quotedPath?.[1] ?? path;
  const suffix = quotedPath?.[2] ?? "";
  if (pathName === "/dev/null" || pathName.startsWith("/dev/null\t")) {
    return line;
  }
  const decodedPathName = quotedPath ? decodeGitQuotedUtf8Path(pathName) : pathName;
  const normalizedPath = mode === "strip" ? splitGitMnemonicPrefix(decodedPathName)?.path ?? decodedPathName : decodedPathName;
  const prefixedPath = mode === "prepend-prefix" ? `${prefix}${normalizedPath}` : withGitPrefix(normalizedPath, prefix);
  return `${marker}${prefixedPath}${suffix}`;
}

// src/core/patch/gitLog.ts
function stripGitLogMetadata(text) {
  const COMMIT_BOUNDARY = /^commit [0-9a-f]{4,64}(?: |$)/m;
  if (!COMMIT_BOUNDARY.test(text)) {
    return text;
  }
  const lines = text.split(`
`);
  const out = [];
  let inHeader = false;
  for (const line of lines) {
    if (COMMIT_BOUNDARY.test(line)) {
      inHeader = true;
      continue;
    }
    if (inHeader) {
      if (line.startsWith("diff --git ") || line.startsWith("--- ") || line.startsWith("+++ ")) {
        inHeader = false;
        out.push(line);
      }
      continue;
    }
    out.push(line);
  }
  return out.join(`
`);
}

// src/core/patch/sanitize.ts
function stripTerminalControl(text) {
  return text.replace(/\x1bP[\s\S]*?\x1b\\/g, "").replace(/\x1b\][\s\S]*?(?:\x07|\x1b\\)/g, "").replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "").replace(/\x1b[@-_]/g, "");
}
function sanitizePatch(patchText) {
  return sanitizeGitPatch(stripGitLogMetadata(stripTerminalControl(patchText.replaceAll(`\r
`, `
`))));
}

// src/opentui/model.ts
var NORMALIZED_HUNK_DIFF_FILES = new WeakSet;
var countHunkDiffStats = countDiffStats;
function buildHunkDiffFile(input, pathsAreExact) {
  const metadata = pathsAreExact ? input.metadata : normalizeDiffMetadataPaths(input.metadata);
  const path = pathsAreExact ? input.path ?? metadata.name : normalizeDiffPath(input.path) ?? metadata.name;
  const previousPath = pathsAreExact ? input.previousPath ?? metadata.prevName : normalizeDiffPath(input.previousPath) ?? metadata.prevName;
  const normalized = {
    ...input,
    id: input.id,
    metadata,
    path,
    previousPath,
    stats: input.stats ?? countHunkDiffStats(metadata)
  };
  NORMALIZED_HUNK_DIFF_FILES.add(normalized);
  return normalized;
}
function createHunkDiffFile(input) {
  return buildHunkDiffFile(input, false);
}
function resolveHunkDiffFile(input) {
  if (NORMALIZED_HUNK_DIFF_FILES.has(input)) {
    return input;
  }
  return createHunkDiffFile(input);
}
function toInternalDiffFile(diff) {
  const normalized = resolveHunkDiffFile(diff);
  const patch = normalized.patch ?? "";
  return {
    agent: null,
    id: normalized.id,
    isBinary: normalized.isBinary ?? patchLooksBinary(patch),
    isTooLarge: normalized.isTooLarge,
    isUntracked: normalized.isUntracked,
    language: normalized.language,
    metadata: normalized.metadata,
    patch,
    path: normalized.path ?? normalized.metadata.name,
    previousPath: normalized.previousPath,
    stats: normalized.stats,
    statsTruncated: normalized.statsTruncated
  };
}
function createHunkDiffFilesFromPatch(patchText, sourceId = "patch") {
  const sanitizedPatch = sanitizePatch(patchText);
  const chunks = splitPatchIntoFileChunks(sanitizedPatch.text);
  return parsePatchFiles(sanitizedPatch.text, sourceId, true).flatMap((entry) => entry.files).map((metadata, index) => {
    const decodedPaths = sanitizedPatch.filePaths[index];
    const normalizedMetadata = decodedPaths ? { ...metadata, name: decodedPaths.path, prevName: decodedPaths.previousPath } : metadata;
    return buildHunkDiffFile({
      id: `${sourceId}:${index}:${normalizedMetadata.name}`,
      language: fileLanguageForPath(normalizedMetadata.name),
      metadata: normalizedMetadata,
      patch: findPatchChunk(metadata, chunks, index)
    }, Boolean(decodedPaths));
  });
}
function toInternalDiffFiles(files) {
  return files.map(toInternalDiffFile);
}

// src/opentui/HunkDiffBody.tsx
import { jsxDEV as jsxDEV6 } from "@opentui/react/jsx-dev-runtime";
function HunkDiffBody({
  file,
  layout = "split",
  width,
  theme = "github-dark-default",
  showLineNumbers = true,
  showHunkHeaders = true,
  tabWidth = DEFAULT_TAB_WIDTH,
  hunkGap = DEFAULT_HUNK_GAP,
  wrapLines = false,
  horizontalOffset = 0,
  highlight = true,
  selectedHunkIndex = 0
}) {
  const resolvedTheme = resolveTheme(theme, null);
  const internalFile = useMemo(() => file ? toInternalDiffFile(file) : undefined, [file]);
  const resolvedHighlighted = useHighlightedDiff({
    file: internalFile,
    theme: resolvedTheme,
    shouldLoadHighlight: highlight
  });
  const rows = useMemo(() => internalFile ? layout === "split" ? buildSplitRows(internalFile, resolvedHighlighted, resolvedTheme, tabWidth) : buildStackRows(internalFile, resolvedHighlighted, resolvedTheme, tabWidth) : [], [internalFile, layout, resolvedHighlighted, resolvedTheme, tabWidth]);
  const plannedRows = useMemo(() => internalFile ? buildReviewRenderPlan({
    fileId: internalFile.id,
    rows,
    showHunkHeaders,
    hunkGap
  }) : [], [hunkGap, internalFile, rows, showHunkHeaders]);
  const lineNumberDigits = useMemo(() => String(internalFile ? findMaxLineNumber(internalFile) : 1).length, [internalFile]);
  if (!internalFile) {
    return /* @__PURE__ */ jsxDEV6("box", {
      style: { width: "100%", paddingLeft: 1, paddingRight: 1 },
      children: /* @__PURE__ */ jsxDEV6("text", {
        fg: resolvedTheme.muted,
        children: fitText2("No file selected.", Math.max(1, width - 2))
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (internalFile.metadata.hunks.length === 0) {
    return /* @__PURE__ */ jsxDEV6("box", {
      style: { width: "100%", paddingLeft: 1, paddingRight: 1, paddingBottom: 1 },
      children: /* @__PURE__ */ jsxDEV6("text", {
        fg: resolvedTheme.muted,
        children: fitText2(diffMessage(internalFile), Math.max(1, width - 2))
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV6("box", {
    style: { width: "100%", flexDirection: "column" },
    children: plannedRows.map((plannedRow) => {
      if (!plannedReviewRowVisible(plannedRow, {
        layout,
        showHunkHeaders,
        width
      })) {
        return null;
      }
      if (plannedRow.kind === "hunk-gap") {
        return /* @__PURE__ */ jsxDEV6("box", {
          id: reviewRowId(plannedRow.key),
          style: {
            width: "100%",
            height: plannedRow.height,
            backgroundColor: resolvedTheme.panel
          }
        }, plannedRow.key, false, undefined, this);
      }
      if (plannedRow.kind !== "diff-row") {
        return null;
      }
      return /* @__PURE__ */ jsxDEV6("box", {
        id: reviewRowId(plannedRow.key),
        style: { width: "100%", flexDirection: "column" },
        children: /* @__PURE__ */ jsxDEV6(DiffRowView, {
          plannedRow,
          width,
          lineNumberDigits,
          showLineNumbers,
          showHunkHeaders,
          wrapLines,
          codeHorizontalOffset: horizontalOffset,
          theme: resolvedTheme,
          selected: plannedRow.row.hunkIndex === selectedHunkIndex
        }, undefined, false, undefined, this)
      }, plannedRow.key, false, undefined, this);
    })
  }, undefined, false, undefined, this);
}
// src/opentui/HunkDiffFileHeader.tsx
import { useMemo as useMemo2 } from "react";

// src/ui/lib/fileHeader.ts
var FILE_HEADER_OVERFLOW_MARKER = "...";
function fileHeaderStats(file) {
  const additionsText = `+${file.stats.additions}${file.statsTruncated ? "+" : ""}`;
  const deletionsText = `-${file.stats.deletions}`;
  const text = `${additionsText} ${deletionsText} `;
  return {
    additionsText,
    deletionsText,
    text,
    width: measureTextWidth(text)
  };
}
function maxFileHeaderStatsWidth(files) {
  return Math.max(0, ...files.map((file) => fileHeaderStats(file).width));
}
function fitFileHeaderLabel(file, width) {
  const { filename, stateLabel } = fileLabelParts(file);
  const stateWidth = measureTextWidth(stateLabel ?? "");
  const visibleStateLabel = stateLabel && stateWidth < width ? stateLabel : null;
  const visibleStateWidth = visibleStateLabel ? stateWidth : 0;
  return {
    filename: fitText(filename, Math.max(0, width - visibleStateWidth), FILE_HEADER_OVERFLOW_MARKER),
    stateLabel: visibleStateLabel
  };
}

// src/ui/components/panes/DiffFileHeaderRow.tsx
import { jsxDEV as jsxDEV7 } from "@opentui/react/jsx-dev-runtime";
function DiffFileHeaderRow({
  file,
  headerLabelWidth,
  headerStatsWidth,
  theme,
  onSelect
}) {
  const { additionsText, deletionsText } = fileHeaderStats(file);
  const { filename, stateLabel } = fitFileHeaderLabel(file, headerLabelWidth);
  return /* @__PURE__ */ jsxDEV7("box", {
    style: {
      width: "100%",
      height: 1,
      flexShrink: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 1,
      paddingRight: 1,
      backgroundColor: theme.panel
    },
    onMouseUp: onSelect,
    children: [
      /* @__PURE__ */ jsxDEV7("box", {
        style: { flexDirection: "row" },
        children: [
          /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.text,
            children: filename
          }, undefined, false, undefined, this),
          stateLabel && /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.muted,
            children: stateLabel
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV7("box", {
        style: {
          width: headerStatsWidth,
          height: 1,
          flexDirection: "row",
          justifyContent: "flex-end"
        },
        children: [
          /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.badgeAdded,
            children: additionsText
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.muted,
            children: " "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.badgeRemoved,
            children: deletionsText
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV7("text", {
            fg: theme.muted,
            children: " "
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/opentui/HunkDiffFileHeader.tsx
import { jsxDEV as jsxDEV8 } from "@opentui/react/jsx-dev-runtime";
function HunkDiffFileHeader({
  file,
  width,
  theme = "github-dark-default",
  onSelect
}) {
  const resolvedTheme = resolveTheme(theme, null);
  const internalFile = useMemo2(() => toInternalDiffFile(file), [file]);
  const headerStatsWidth = maxFileHeaderStatsWidth([internalFile]);
  return /* @__PURE__ */ jsxDEV8(DiffFileHeaderRow, {
    file: internalFile,
    headerLabelWidth: Math.max(0, width - 2 - headerStatsWidth - 1),
    headerStatsWidth,
    theme: resolvedTheme,
    onSelect
  }, undefined, false, undefined, this);
}
// src/opentui/HunkDiffView.tsx
import { jsxDEV as jsxDEV9 } from "@opentui/react/jsx-dev-runtime";
function HunkDiffView({ diff, scrollable = true, ...props }) {
  const content = /* @__PURE__ */ jsxDEV9(HunkDiffBody, {
    file: diff,
    ...props
  }, undefined, false, undefined, this);
  if (!scrollable) {
    return content;
  }
  return /* @__PURE__ */ jsxDEV9("scrollbox", {
    width: "100%",
    height: "100%",
    scrollY: true,
    viewportCulling: true,
    focused: false,
    children: content
  }, undefined, false, undefined, this);
}
// src/opentui/HunkFileNav.tsx
import { useMemo as useMemo3 } from "react";

// src/ui/components/panes/FileListItem.tsx
import { memo as memo3 } from "react";
import { jsxDEV as jsxDEV10 } from "@opentui/react/jsx-dev-runtime";
function getFileStateIcon(entry, theme) {
  if (entry.isUntracked) {
    return { icon: "?", color: theme.fileUntracked };
  }
  switch (entry.changeType) {
    case "new":
      return { icon: "A", color: theme.fileNew };
    case "deleted":
      return { icon: "D", color: theme.fileDeleted };
    case "rename-pure":
    case "rename-changed":
      return { icon: "R", color: theme.fileRenamed };
    case "change":
      return { icon: "M", color: theme.fileModified };
    default:
      return { icon: "", color: theme.text };
  }
}
function FileGroupHeader({
  entry,
  paddingLeft = 1,
  textWidth,
  theme
}) {
  return /* @__PURE__ */ jsxDEV10("box", {
    style: {
      width: "100%",
      height: 1,
      paddingLeft,
      backgroundColor: theme.panel
    },
    children: /* @__PURE__ */ jsxDEV10("text", {
      fg: theme.muted,
      children: fitText(entry.label, Math.max(1, textWidth))
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var FileListItem = memo3(function FileListItem2({
  entry,
  paddingLeft = 1,
  selected,
  statsWidth,
  textWidth,
  theme,
  onSelectFile
}) {
  const rowBackground = selected ? theme.panelAlt : theme.panel;
  const stats = sidebarEntryStats(entry);
  const { icon, color } = getFileStateIcon(entry, theme);
  const iconWidth = icon ? 2 : 0;
  const statsSectionWidth = statsWidth > 0 ? statsWidth + 1 : 0;
  const nameWidth = Math.max(1, textWidth - 1 - iconWidth - statsSectionWidth);
  return /* @__PURE__ */ jsxDEV10("box", {
    id: fileRowId(entry.id),
    style: {
      width: "100%",
      height: 1,
      backgroundColor: rowBackground,
      flexDirection: "row"
    },
    onMouseUp: () => onSelectFile(entry.id),
    children: [
      /* @__PURE__ */ jsxDEV10("box", {
        style: {
          width: 1,
          height: 1,
          backgroundColor: selected ? theme.accent : rowBackground
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV10("box", {
        style: {
          flexGrow: 1,
          height: 1,
          paddingLeft,
          flexDirection: "row",
          backgroundColor: rowBackground
        },
        children: [
          icon && /* @__PURE__ */ jsxDEV10("text", {
            fg: color,
            children: [
              icon,
              " "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsxDEV10("text", {
            fg: theme.text,
            children: padText(fitText(entry.name, nameWidth), nameWidth)
          }, undefined, false, undefined, this),
          statsSectionWidth > 0 && /* @__PURE__ */ jsxDEV10("box", {
            style: {
              width: statsSectionWidth,
              height: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: rowBackground
            },
            children: stats.map((stat, index) => /* @__PURE__ */ jsxDEV10("box", {
              style: { height: 1, flexDirection: "row", backgroundColor: rowBackground },
              children: [
                index > 0 && /* @__PURE__ */ jsxDEV10("text", {
                  fg: selected ? theme.text : theme.muted,
                  children: " "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsxDEV10("text", {
                  fg: stat.kind === "agent-comment" ? theme.noteBorder : stat.kind === "addition" ? theme.badgeAdded : theme.badgeRemoved,
                  children: stat.text
                }, undefined, false, undefined, this)
              ]
            }, `${entry.id}:${stat.kind}`, true, undefined, this))
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});

// src/opentui/HunkFileNav.tsx
import { jsxDEV as jsxDEV11 } from "@opentui/react/jsx-dev-runtime";
function HunkFileNav({
  files,
  selectedFileId,
  width,
  theme = "github-dark-default",
  onSelectFile = () => {}
}) {
  const resolvedTheme = resolveTheme(theme, null);
  const internalFiles = useMemo3(() => toInternalDiffFiles(files), [files]);
  const entries = useMemo3(() => buildSidebarEntries(internalFiles), [internalFiles]);
  const fileEntries = entries.filter((entry) => entry.kind === "file");
  const statsWidth = Math.max(0, ...fileEntries.map((entry) => sidebarEntryStatsWidth(entry)));
  const textWidth = Math.max(1, width - 1);
  return /* @__PURE__ */ jsxDEV11("box", {
    style: { width: "100%", flexDirection: "column", backgroundColor: resolvedTheme.panel },
    children: entries.map((entry) => entry.kind === "group" ? /* @__PURE__ */ jsxDEV11(FileGroupHeader, {
      entry,
      paddingLeft: 0,
      textWidth: Math.max(1, width),
      theme: resolvedTheme
    }, entry.id, false, undefined, this) : /* @__PURE__ */ jsxDEV11(FileListItem, {
      entry,
      paddingLeft: 0,
      selected: entry.id === selectedFileId,
      statsWidth,
      textWidth,
      theme: resolvedTheme,
      onSelectFile
    }, entry.id, false, undefined, this))
  }, undefined, false, undefined, this);
}
// src/opentui/HunkReviewStream.tsx
import { jsxDEV as jsxDEV12 } from "@opentui/react/jsx-dev-runtime";
function resolveSelection(files, selection) {
  if (selection && files.some((file) => file.id === selection.fileId)) {
    return selection;
  }
  const first = files[0];
  return first ? { fileId: first.id, hunkIndex: 0 } : undefined;
}
function HunkReviewStream({
  files,
  layout = "split",
  width,
  theme = "github-dark-default",
  selection,
  showFileHeaders = true,
  showFileSeparators = true,
  showLineNumbers = true,
  showHunkHeaders = true,
  tabWidth,
  fileGap = DEFAULT_FILE_GAP,
  hunkGap = DEFAULT_HUNK_GAP,
  wrapLines = false,
  horizontalOffset = 0,
  highlight = true,
  onSelectionChange
}) {
  const resolvedTheme = resolveTheme(theme, null);
  const activeSelection = resolveSelection(files, selection);
  if (files.length === 0) {
    return /* @__PURE__ */ jsxDEV12("box", {
      style: { width: "100%", paddingLeft: 1, paddingRight: 1 },
      children: /* @__PURE__ */ jsxDEV12("text", {
        fg: resolvedTheme.muted,
        children: "No files to render."
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsxDEV12("box", {
    style: { width: "100%", flexDirection: "column", backgroundColor: resolvedTheme.panel },
    children: files.map((file, index) => {
      const selectedHunkIndex = activeSelection?.fileId === file.id ? activeSelection.hunkIndex : -1;
      return /* @__PURE__ */ jsxDEV12("box", {
        style: {
          width: "100%",
          flexDirection: "column",
          backgroundColor: resolvedTheme.panel
        },
        children: [
          showFileSeparators && index > 0 && fileGap > 0 ? /* @__PURE__ */ jsxDEV12("box", {
            style: {
              width: "100%",
              height: fileGap,
              flexDirection: "column",
              paddingLeft: 1,
              paddingRight: 1
            },
            children: [
              fileGap > 1 ? /* @__PURE__ */ jsxDEV12("box", {
                style: { width: "100%", height: fileGap - 1 }
              }, undefined, false, undefined, this) : null,
              /* @__PURE__ */ jsxDEV12("text", {
                fg: resolvedTheme.border,
                children: "─".repeat(Math.max(1, width - 2))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this) : null,
          showFileHeaders ? /* @__PURE__ */ jsxDEV12(HunkDiffFileHeader, {
            file,
            width,
            theme,
            onSelect: () => onSelectionChange?.({ fileId: file.id, hunkIndex: 0 })
          }, undefined, false, undefined, this) : null,
          /* @__PURE__ */ jsxDEV12(HunkDiffBody, {
            file,
            layout,
            width,
            theme,
            showLineNumbers,
            showHunkHeaders,
            tabWidth,
            hunkGap,
            wrapLines,
            horizontalOffset,
            highlight,
            selectedHunkIndex
          }, undefined, false, undefined, this)
        ]
      }, file.id, true, undefined, this);
    })
  }, undefined, false, undefined, this);
}
export {
  parsePatchFiles2 as parsePatchFiles,
  parseDiffFromFile,
  createHunkDiffFilesFromPatch,
  createHunkDiffFile,
  countHunkDiffStats,
  HunkReviewStream,
  HunkFileNav,
  HunkDiffView,
  HunkDiffFileHeader,
  HunkDiffBody,
  HUNK_DIFF_THEME_NAMES
};
