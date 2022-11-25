var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app.js
var app_exports = {};
__export(app_exports, {
  sendEmail: () => sendEmail
});
module.exports = __toCommonJS(app_exports);
var import_nodemailer = __toESM(require("nodemailer"));
var import_nodemailer_mailgun_transport = __toESM(require("nodemailer-mailgun-transport"));
var sendEmail = (auth, sender, recipient, subject, emailContent, callback) => {
  const transporter = import_nodemailer.default.createTransport((0, import_nodemailer_mailgun_transport.default)(auth));
  const recipientString = `${recipient.join(", ")}`;
  const mailOptions = {
    from: sender,
    to: recipientString,
    subject,
    html: emailContent
  };
  transporter.sendMail(mailOptions, function(err, result) {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendEmail
});
