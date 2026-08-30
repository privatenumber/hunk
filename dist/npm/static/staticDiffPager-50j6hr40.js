import {
  DEFAULT_TAB_WIDTH,
  changesetFromPatch,
  validateTabWidth
} from "./index-k2v7zfxe.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./index-0v6na3yp.js";

// ../../../../../../../../../Users/hiroki/Developer/worktrees/github/modem-dev/hunk/feat-static-diff-export/node_modules/.bun/emoji-regex@10.6.0/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS((exports, module) => {
  module.exports = () => {
    return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  };
});

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

// ../../../../../../../../../Users/hiroki/Developer/worktrees/github/modem-dev/hunk/feat-static-diff-export/node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup-data.js
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var halfwidthRanges = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
var narrowRanges = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];

// ../../../../../../../../../Users/hiroki/Developer/worktrees/github/modem-dev/hunk/feat-static-diff-export/node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/utilities.js
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

// ../../../../../../../../../Users/hiroki/Developer/worktrees/github/modem-dev/hunk/feat-static-diff-export/node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/lookup.js
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

// ../../../../../../../../../Users/hiroki/Developer/worktrees/github/modem-dev/hunk/feat-static-diff-export/node_modules/.bun/get-east-asian-width@1.5.0/node_modules/get-east-asian-width/index.js
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

// src/ui/lib/text.ts
var printableAsciiRegex = /^[\u0020-\u007E]*$/;
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
function withTransparentSurfaces(theme) {
  return {
    ...theme,
    background: TRANSPARENT_BACKGROUND,
    panel: TRANSPARENT_BACKGROUND,
    panelAlt: TRANSPARENT_BACKGROUND,
    contextBg: TRANSPARENT_BACKGROUND,
    contextContentBg: TRANSPARENT_BACKGROUND,
    lineNumberBg: TRANSPARENT_BACKGROUND
  };
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

// src/ui/diff/rowStyle.ts
var INACTIVE_RAIL_BLEND = 0.35;
var selectionBackgroundCache = new WeakMap;
var cursorLineBackgroundCache = new WeakMap;
function diffRailMarker() {
  return "▌";
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
var lineHighlightStyleCache = new WeakMap;
var dimSpanFgCache = new WeakMap;
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

// src/ui/staticDiffPager.ts
var DEFAULT_STATIC_WIDTH = 120;
var MIN_STATIC_WIDTH = 20;
var RESET = "\x1B[0m";
function ansiColor(kind, hex) {
  const normalized = hex?.replace(/^#/, "");
  if (!normalized || !/^[0-9a-f]{6}$/i.test(normalized)) {
    return "";
  }
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  return `\x1B[${kind === "fg" ? 38 : 48};2;${red};${green};${blue}m`;
}
function colorText(text, fg, bg) {
  const safeText = sanitizeTerminalLine(text);
  if (!safeText) {
    return "";
  }
  const prefix = `${ansiColor("fg", fg)}${ansiColor("bg", bg)}`;
  return prefix ? `${prefix}${safeText}${RESET}` : safeText;
}
function fillRemainingLine(bg) {
  const background = ansiColor("bg", bg);
  return background ? `${background}\x1B[K${RESET}` : "";
}
function serializeSpans(spans, rowBg) {
  return spans.map((span) => colorText(span.text, span.fg, span.bg ?? rowBg)).join("");
}
function serializeSpansFixedWidth(spans, rowBg, width) {
  let remaining = Math.max(0, width);
  let usedWidth = 0;
  let output = "";
  for (const span of spans) {
    if (remaining <= 0) {
      break;
    }
    const visible = sliceTextByWidth(span.text, 0, remaining);
    if (visible.text) {
      output += colorText(visible.text, span.fg, span.bg ?? rowBg);
      usedWidth += visible.width;
      remaining -= visible.width;
    }
  }
  if (usedWidth < width) {
    output += colorText(" ".repeat(width - usedWidth), undefined, rowBg);
  }
  return output;
}
var marker = diffRailMarker;
function renderHeaderLikeRow(text, fg, bg, theme) {
  return `${colorText(marker(), neutralRailColor(theme), bg)}${colorText(text.trimEnd(), fg, bg)}`;
}
function fixedWidthText(text, width) {
  const visible = sliceTextByWidth(text, 0, width);
  return `${visible.text}${" ".repeat(Math.max(0, width - visible.width))}`;
}
function staticStackGutterText(cell, lineNumberWidth, showLineNumbers) {
  return stackGutterText(cell, lineNumberWidth, showLineNumbers).padEnd(showLineNumbers ? lineNumberWidth * 2 + 5 : 2);
}
function staticSplitGutterText(cell, lineNumberWidth, showLineNumbers) {
  return splitGutterText(cell, lineNumberWidth, showLineNumbers).padEnd(showLineNumbers ? lineNumberWidth + 3 : 2);
}
function renderStaticStackRow(row, theme, lineNumberWidth, options) {
  if (row.type === "collapsed") {
    return renderHeaderLikeRow(`··· ${row.text} ···`, theme.muted, theme.panelAlt, theme);
  }
  if (row.type === "hunk-header") {
    return options.hunkHeaders === false ? "" : renderHeaderLikeRow(row.text, theme.badgeNeutral, theme.panelAlt, theme);
  }
  if (row.type !== "stack-line") {
    return "";
  }
  const { cell } = row;
  const palette = stackCellPalette(cell.kind, theme, cell.moveKind);
  return `${colorText(marker(), stackRailColor(cell.kind, theme, true), theme.panel)}${colorText(staticStackGutterText(cell, lineNumberWidth, options.lineNumbers !== false), palette.numberColor, palette.gutterBg)}${serializeSpans(cell.spans, palette.contentBg)}${fillRemainingLine(palette.contentBg)}`;
}
function renderStaticSplitCell(cell, side, width, theme, lineNumberWidth, options) {
  const palette = splitCellPalette(cell.kind, theme, cell.moveKind);
  const { gutterWidth, contentWidth } = resolveSplitCellGeometry(width, lineNumberWidth, options.lineNumbers !== false, marker().length);
  const railColor = side === "left" ? splitLeftRailColor(cell.kind, theme, true) : splitRightRailColor(cell.kind, theme, true);
  const gutterText = fixedWidthText(staticSplitGutterText(cell, lineNumberWidth, options.lineNumbers !== false), gutterWidth);
  return `${colorText(marker(), railColor, theme.panel)}${colorText(gutterText, palette.numberColor, palette.gutterBg)}${serializeSpansFixedWidth(cell.spans, palette.contentBg, contentWidth)}`;
}
function renderStaticSplitRow(row, theme, lineNumberWidth, options, width) {
  if (row.type === "collapsed") {
    return renderHeaderLikeRow(`··· ${row.text} ···`, theme.muted, theme.panelAlt, theme);
  }
  if (row.type === "hunk-header") {
    return options.hunkHeaders === false ? "" : renderHeaderLikeRow(row.text, theme.badgeNeutral, theme.panelAlt, theme);
  }
  if (row.type !== "split-line") {
    return "";
  }
  const { leftWidth, rightWidth } = resolveSplitPaneWidths(width);
  return `${renderStaticSplitCell(row.left, "left", leftWidth, theme, lineNumberWidth, options)}${renderStaticSplitCell(row.right, "right", rightWidth, theme, lineNumberWidth, options)}`;
}
function maxLineNumberWidth(file, rows) {
  let max = 1;
  for (const row of rows) {
    if (row.type === "stack-line") {
      max = Math.max(max, row.cell.oldLineNumber ? String(row.cell.oldLineNumber).length : 1, row.cell.newLineNumber ? String(row.cell.newLineNumber).length : 1);
      continue;
    }
    if (row.type === "split-line") {
      max = Math.max(max, row.left.lineNumber ? String(row.left.lineNumber).length : 1, row.right.lineNumber ? String(row.right.lineNumber).length : 1);
    }
  }
  return Math.max(max, String(file.metadata.additionLines.length).length);
}
function fileStatusLabel(file) {
  if (file.isTooLarge) {
    return "skipped large file";
  }
  if (file.isBinary) {
    return "binary";
  }
  switch (file.metadata.type) {
    case "new":
      return file.isUntracked ? "untracked" : "new file";
    case "deleted":
      return "deleted";
    case "rename-pure":
      return "renamed";
    case "rename-changed":
      return "renamed modified";
    case "change":
    default:
      return file.metadata.prevMode && file.metadata.prevMode !== file.metadata.mode ? "mode changed" : "modified";
  }
}
var STATIC_DIFF_MESSAGES = {
  "rename-only": "No textual changes.",
  binary: "Binary file.",
  "too-large": "Skipped because the file is too large to render.",
  "new-file": "No textual changes.",
  "deleted-file": "No textual changes.",
  "no-hunks": "No textual changes."
};
function staticEmptyDiffMessage(file) {
  return STATIC_DIFF_MESSAGES[reviewEmptyDiffReason({
    changeKind: file.metadata.type,
    binary: Boolean(file.isBinary),
    tooLarge: Boolean(file.isTooLarge)
  })];
}
function fileDisplayPath(file) {
  const previousPath = file.previousPath ?? file.metadata.prevName;
  return previousPath && previousPath !== file.path ? `${formatTerminalPath(previousPath)} → ${formatTerminalPath(file.path)}` : formatTerminalPath(file.path);
}
function fileModeText(file) {
  if (file.metadata.prevMode && file.metadata.mode && file.metadata.prevMode !== file.metadata.mode) {
    return ` ${file.metadata.prevMode}→${file.metadata.mode}`;
  }
  if ((file.metadata.type === "new" || file.metadata.type === "deleted") && file.metadata.mode) {
    return ` ${file.metadata.mode}`;
  }
  return "";
}
function resolveStaticLayout(options) {
  return options.mode === "split" ? "split" : "stack";
}
async function renderStaticFile(file, theme, options, width) {
  const highlighted = file.isBinary || file.isTooLarge ? null : await loadHighlightedDiff(file, theme);
  const layout = resolveStaticLayout(options);
  const tabWidth = options.tabWidth ?? DEFAULT_TAB_WIDTH;
  const rows = layout === "split" ? buildSplitRows(file, highlighted, theme, tabWidth) : buildStackRows(file, highlighted, theme, tabWidth);
  const lineNumberWidth = maxLineNumberWidth(file, rows);
  const stats = `${colorText(`+${file.stats.additions}${file.statsTruncated ? "+" : ""}`, theme.badgeAdded)} ${colorText(`-${file.stats.deletions}`, theme.badgeRemoved)}`;
  const status = colorText(`${fileStatusLabel(file)}${fileModeText(file)}`, theme.muted);
  const header = `${colorText(fileDisplayPath(file), theme.text)} ${status} ${stats}`;
  if (rows.length === 0) {
    return [header, colorText(`  ${staticEmptyDiffMessage(file)}`, theme.muted)].join(`
`);
  }
  return [
    header,
    ...rows.map((row) => layout === "split" ? renderStaticSplitRow(row, theme, lineNumberWidth, options, width) : renderStaticStackRow(row, theme, lineNumberWidth, options)).filter(Boolean)
  ].join(`
`);
}
function fallbackMessage(error) {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return String(error || "unknown error");
}
function resolveStaticWidth(deps) {
  return Math.max(MIN_STATIC_WIDTH, Math.floor(deps.terminalColumns ?? process.stdout.columns ?? DEFAULT_STATIC_WIDTH));
}
function warnFallback(deps, reason) {
  deps.stderr?.write(`hunk: static pager render failed; falling back to raw diff (${sanitizeTerminalLine(reason)}).
`);
}
async function renderStaticFiles(files, options, theme, width) {
  if (files.length === 0) {
    throw new Error("No diff files could be parsed.");
  }
  const rendered = await Promise.all(files.map((file) => renderStaticFile(file, theme, options, width)));
  return `${rendered.join(`

`)}
`;
}
async function renderStaticDiff(text, options = {}) {
  const changeset = changesetFromPatch(text, "Static diff", "static", null);
  const commonOptions = {
    hunkHeaders: options.hunkHeaders,
    lineNumbers: options.lineNumbers,
    mode: options.layout,
    tabWidth: options.tabWidth,
    theme: options.theme,
    transparentBackground: options.transparentBackground
  };
  const theme = commonOptions.transparentBackground ? withTransparentSurfaces(resolveTheme(commonOptions.theme, null)) : resolveTheme(commonOptions.theme, null);
  const width = resolveStaticWidth({ terminalColumns: options.width });
  return renderStaticFiles(changeset.files, commonOptions, theme, width);
}
async function renderStaticDiffPager(text, options = {}, deps = { stderr: process.stderr }) {
  try {
    const { loadAppBootstrap } = await import("./loaders-dwww3c5z.js");
    const bootstrap = await loadAppBootstrap({
      kind: "patch",
      file: "-",
      text,
      options: {
        ...options,
        pager: true
      }
    });
    const resolvedTheme = resolveTheme(options.theme, null, deps.customThemes);
    const theme = options.transparentBackground ? withTransparentSurfaces(resolvedTheme) : resolvedTheme;
    const width = resolveStaticWidth(deps);
    return await renderStaticFiles(bootstrap.changeset.files, options, theme, width);
  } catch (error) {
    warnFallback(deps, fallbackMessage(error));
    return sanitizeTerminalText(text);
  }
}
export {
  renderStaticDiffPager,
  renderStaticDiff
};
