/**
 * did                = "did:" method-name ":" method-specific-id
 * method-name        = 1*method-char
 * did-url            = did *( ";" param ) path-abempty [ "?" query ]
 *                      [ "#" fragment ]
 * param              = param-name [ "=" param-value ]
 * param-name         = 1*param-char
 * param-value        = *param-char
 *                                           pct-encoded
*/

// \\w == [A-Za-z0-9]

/* eslint-disable max-len */

// method-char = %x61-7A / DIGIT
const methodChar = '[a-z09]';

// method-specific-id = *idchar *( ":" *idchar )
// idchar = ALPHA / DIGIT / "." / "-" / "_"
const idChar = '[_\\w\\.\\-:]';

// param-char = ALPHA / DIGIT / "." / "-" / "_" / ":" /
const paramChar = '[_\\w\\.\\-:]';

const didRegex = new RegExp(`^(?<did>did):(?<methodName>${methodChar}+):(?<methodSpecificId>${idChar}*)(?<extra>[;\\?#\/]*.*)$`);

function parseDID(did) {
  return didRegex.exec(did);
}

function isDiD(did) {
  return didRegex.test(did);
}

function isFragment(extra) {
  return /^#/.test(extra);
}

function hasParameters(extra) {
  return /^;/.test(extra);
}

const paramterRegex = new RegExp(`(?<parameterName>${paramChar}+)\=(?<parameterValue>${paramChar}*)`);

function methodSpecificDIDParameter(methodName) {
  return new RegExp(`(?<methodName>${methodName})\:(?<parameterName>${paramChar}+)\=(?<parameterValue>${paramChar}*)`);
}

function getParameter(extra) {
  return paramterRegex.exec(extra);
}

exports.getParameter = getParameter;
exports.methodSepcificDIDParameter = methodSpecificDIDParameter;
exports.isFragment = isFragment;
exports.didRegex = didRegex;
exports.hasParameters = hasParameters;
exports.isDid = isDiD;
exports.parseDID = parseDID;
exports.uuid = 'did:uuid:0d2bae3e-4915-489c-bfa1-1ba14e8b43cd';
exports.methSpec = exports.uuid + ';uuid:extra=true';
exports.urn = 'did:urn:example:foo-bar-baz-qux?+CCResolve:cc=uk';