/* eslint-disable */
import { FileDescriptorProto } from "ts-proto-descriptors/google/protobuf/descriptor";
import {
  Subject,
  protoMetadata as protoMetadata1,
} from "../../io/restorecommerce/auth";
import {
  Status,
  OperationStatus,
  protoMetadata as protoMetadata2,
} from "../../io/restorecommerce/status";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "io.restorecommerce.payment";

/** Possible service providers. Provider names must be exactly as in config.yml. */
export enum Provider {
  NO_PROVIDER = 0,
  Adyen = 1,
  AuthorizeNetCIM = 2,
  AuthorizeNet = 3,
  AxcessMS = 4,
  Balanced = 5,
  BamboraAsiaPacific = 6,
  BankFrick = 7,
  Banwire = 8,
  BarclaysePDQExtraPlus = 9,
  Be2Bill = 10,
  Beanstreamcom = 11,
  BluePay = 12,
  Borgun = 13,
  Braintree = 14,
  BridgePay = 15,
  Cardknox = 16,
  CardSave = 17,
  CardStream = 18,
  Cashnet = 19,
  Cecabank = 20,
  Cenpos = 21,
  CAMSCentralAccountManagementSystem = 22,
  Checkoutcom = 23,
  Clearhaus = 24,
  Commercegate = 25,
  Conekta = 26,
  CyberSource = 27,
  DIBS = 28,
  DataCash = 29,
  Efsnet = 30,
  ElavonMyVirtualMerchant = 31,
  ePay = 32,
  EVOCanada = 33,
  eWAY = 34,
  eWAYRapid = 35,
  Exact = 36,
  Ezic = 37,
  FatZebra = 38,
  FederatedCanada = 39,
  FinansbankWebPOS = 40,
  Flo2Cash = 41,
  stPayGatewayNet = 42,
  FirstDataGlobalGatewaye4 = 43,
  FirstGiving = 44,
  GarantiSanalPOS = 45,
  GlobalTransport = 46,
  HDFC = 47,
  HeartlandPaymentSystems = 48,
  iATSPayments = 49,
  InspireCommerce = 50,
  InstaPay = 51,
  IPP = 52,
  Iridium = 53,
  iTransact = 54,
  JetPay = 55,
  Komoju = 56,
  LinkPoint = 57,
  LitleCo = 58,
  maxiPago = 59,
  MerchanteSolutions = 60,
  MerchantOneGateway = 61,
  MerchantWARE = 62,
  MerchantWarrior = 63,
  Mercury = 64,
  MetricsGlobal = 65,
  MasterCardInternetGatewayServiceMiGS = 66,
  ModernPayments = 67,
  MONEI = 68,
  Moneris = 69,
  MoneyMovers = 70,
  NABTransact = 71,
  NELiXTransaX = 72,
  NetRegistry = 73,
  BBSNetaxept = 74,
  NETbilling = 75,
  NETPAYGateway = 76,
  NMI = 77,
  Ogone = 78,
  Omise = 79,
  Openpay = 80,
  OptimalPayments = 81,
  OrbitalPaymentech = 82,
  Pagarme = 83,
  PagoFacil = 84,
  PayConex = 85,
  PayGatePayXML = 86,
  PayHub = 87,
  PayJunction = 89,
  PaySecure = 90,
  PayboxDirect = 91,
  Payeezy = 92,
  Payex = 93,
  PaymentExpress = 94,
  PAYMILL = 95,
  PayPalExpressCheckout = 96,
  PayPalExpressCheckoutUK = 97,
  PayPalPayflowPro = 98,
  PayPalPaymentsProUS = 99,
  PayPalPaymentsProUK = 100,
  PayPalWebsitePaymentsProCA = 101,
  PayPalExpressCheckoutforDigitalGoods = 102,
  Payscout = 103,
  Paystation = 104,
  PayWay = 105,
  PayUIndia = 106,
  PinPayments = 107,
  PlugnPay = 108,
  Psigate = 109,
  PSLPaymentSolutions = 110,
  QuickBooksMerchantServices = 111,
  QuickBooksPayments = 112,
  QuantumGateway = 113,
  QuickPay = 114,
  Qvalent = 115,
  Raven = 116,
  Realex = 117,
  Redsys = 118,
  S5 = 119,
  SagePay = 120,
  SagePaymentSolutions = 121,
  SallieMae = 122,
  SecureNet = 123,
  SecurePay = 124,
  SecurePayTech = 125,
  SecurionPay = 126,
  SkipJack = 127,
  SoEasyPay = 128,
  Spreedly = 129,
  Stripe = 130,
  Swipe = 131,
  TNS = 132,
  TransactPro = 133,
  TransFirst = 134,
  Transnational = 135,
  Trexle = 136,
  TrustCommerce = 137,
  USAePay = 138,
  VancoPaymentSolutions = 139,
  Verifi = 140,
  ViaKLIX = 141,
  WebPay = 142,
  WePay = 143,
  Wirecard = 144,
  WorldpayGlobal = 145,
  WorldpayOnline = 146,
  WorldpayUS = 147,
  UNRECOGNIZED = -1,
}

export function providerFromJSON(object: any): Provider {
  switch (object) {
    case 0:
    case "NO_PROVIDER":
      return Provider.NO_PROVIDER;
    case 1:
    case "Adyen":
      return Provider.Adyen;
    case 2:
    case "AuthorizeNetCIM":
      return Provider.AuthorizeNetCIM;
    case 3:
    case "AuthorizeNet":
      return Provider.AuthorizeNet;
    case 4:
    case "AxcessMS":
      return Provider.AxcessMS;
    case 5:
    case "Balanced":
      return Provider.Balanced;
    case 6:
    case "BamboraAsiaPacific":
      return Provider.BamboraAsiaPacific;
    case 7:
    case "BankFrick":
      return Provider.BankFrick;
    case 8:
    case "Banwire":
      return Provider.Banwire;
    case 9:
    case "BarclaysePDQExtraPlus":
      return Provider.BarclaysePDQExtraPlus;
    case 10:
    case "Be2Bill":
      return Provider.Be2Bill;
    case 11:
    case "Beanstreamcom":
      return Provider.Beanstreamcom;
    case 12:
    case "BluePay":
      return Provider.BluePay;
    case 13:
    case "Borgun":
      return Provider.Borgun;
    case 14:
    case "Braintree":
      return Provider.Braintree;
    case 15:
    case "BridgePay":
      return Provider.BridgePay;
    case 16:
    case "Cardknox":
      return Provider.Cardknox;
    case 17:
    case "CardSave":
      return Provider.CardSave;
    case 18:
    case "CardStream":
      return Provider.CardStream;
    case 19:
    case "Cashnet":
      return Provider.Cashnet;
    case 20:
    case "Cecabank":
      return Provider.Cecabank;
    case 21:
    case "Cenpos":
      return Provider.Cenpos;
    case 22:
    case "CAMSCentralAccountManagementSystem":
      return Provider.CAMSCentralAccountManagementSystem;
    case 23:
    case "Checkoutcom":
      return Provider.Checkoutcom;
    case 24:
    case "Clearhaus":
      return Provider.Clearhaus;
    case 25:
    case "Commercegate":
      return Provider.Commercegate;
    case 26:
    case "Conekta":
      return Provider.Conekta;
    case 27:
    case "CyberSource":
      return Provider.CyberSource;
    case 28:
    case "DIBS":
      return Provider.DIBS;
    case 29:
    case "DataCash":
      return Provider.DataCash;
    case 30:
    case "Efsnet":
      return Provider.Efsnet;
    case 31:
    case "ElavonMyVirtualMerchant":
      return Provider.ElavonMyVirtualMerchant;
    case 32:
    case "ePay":
      return Provider.ePay;
    case 33:
    case "EVOCanada":
      return Provider.EVOCanada;
    case 34:
    case "eWAY":
      return Provider.eWAY;
    case 35:
    case "eWAYRapid":
      return Provider.eWAYRapid;
    case 36:
    case "Exact":
      return Provider.Exact;
    case 37:
    case "Ezic":
      return Provider.Ezic;
    case 38:
    case "FatZebra":
      return Provider.FatZebra;
    case 39:
    case "FederatedCanada":
      return Provider.FederatedCanada;
    case 40:
    case "FinansbankWebPOS":
      return Provider.FinansbankWebPOS;
    case 41:
    case "Flo2Cash":
      return Provider.Flo2Cash;
    case 42:
    case "stPayGatewayNet":
      return Provider.stPayGatewayNet;
    case 43:
    case "FirstDataGlobalGatewaye4":
      return Provider.FirstDataGlobalGatewaye4;
    case 44:
    case "FirstGiving":
      return Provider.FirstGiving;
    case 45:
    case "GarantiSanalPOS":
      return Provider.GarantiSanalPOS;
    case 46:
    case "GlobalTransport":
      return Provider.GlobalTransport;
    case 47:
    case "HDFC":
      return Provider.HDFC;
    case 48:
    case "HeartlandPaymentSystems":
      return Provider.HeartlandPaymentSystems;
    case 49:
    case "iATSPayments":
      return Provider.iATSPayments;
    case 50:
    case "InspireCommerce":
      return Provider.InspireCommerce;
    case 51:
    case "InstaPay":
      return Provider.InstaPay;
    case 52:
    case "IPP":
      return Provider.IPP;
    case 53:
    case "Iridium":
      return Provider.Iridium;
    case 54:
    case "iTransact":
      return Provider.iTransact;
    case 55:
    case "JetPay":
      return Provider.JetPay;
    case 56:
    case "Komoju":
      return Provider.Komoju;
    case 57:
    case "LinkPoint":
      return Provider.LinkPoint;
    case 58:
    case "LitleCo":
      return Provider.LitleCo;
    case 59:
    case "maxiPago":
      return Provider.maxiPago;
    case 60:
    case "MerchanteSolutions":
      return Provider.MerchanteSolutions;
    case 61:
    case "MerchantOneGateway":
      return Provider.MerchantOneGateway;
    case 62:
    case "MerchantWARE":
      return Provider.MerchantWARE;
    case 63:
    case "MerchantWarrior":
      return Provider.MerchantWarrior;
    case 64:
    case "Mercury":
      return Provider.Mercury;
    case 65:
    case "MetricsGlobal":
      return Provider.MetricsGlobal;
    case 66:
    case "MasterCardInternetGatewayServiceMiGS":
      return Provider.MasterCardInternetGatewayServiceMiGS;
    case 67:
    case "ModernPayments":
      return Provider.ModernPayments;
    case 68:
    case "MONEI":
      return Provider.MONEI;
    case 69:
    case "Moneris":
      return Provider.Moneris;
    case 70:
    case "MoneyMovers":
      return Provider.MoneyMovers;
    case 71:
    case "NABTransact":
      return Provider.NABTransact;
    case 72:
    case "NELiXTransaX":
      return Provider.NELiXTransaX;
    case 73:
    case "NetRegistry":
      return Provider.NetRegistry;
    case 74:
    case "BBSNetaxept":
      return Provider.BBSNetaxept;
    case 75:
    case "NETbilling":
      return Provider.NETbilling;
    case 76:
    case "NETPAYGateway":
      return Provider.NETPAYGateway;
    case 77:
    case "NMI":
      return Provider.NMI;
    case 78:
    case "Ogone":
      return Provider.Ogone;
    case 79:
    case "Omise":
      return Provider.Omise;
    case 80:
    case "Openpay":
      return Provider.Openpay;
    case 81:
    case "OptimalPayments":
      return Provider.OptimalPayments;
    case 82:
    case "OrbitalPaymentech":
      return Provider.OrbitalPaymentech;
    case 83:
    case "Pagarme":
      return Provider.Pagarme;
    case 84:
    case "PagoFacil":
      return Provider.PagoFacil;
    case 85:
    case "PayConex":
      return Provider.PayConex;
    case 86:
    case "PayGatePayXML":
      return Provider.PayGatePayXML;
    case 87:
    case "PayHub":
      return Provider.PayHub;
    case 89:
    case "PayJunction":
      return Provider.PayJunction;
    case 90:
    case "PaySecure":
      return Provider.PaySecure;
    case 91:
    case "PayboxDirect":
      return Provider.PayboxDirect;
    case 92:
    case "Payeezy":
      return Provider.Payeezy;
    case 93:
    case "Payex":
      return Provider.Payex;
    case 94:
    case "PaymentExpress":
      return Provider.PaymentExpress;
    case 95:
    case "PAYMILL":
      return Provider.PAYMILL;
    case 96:
    case "PayPalExpressCheckout":
      return Provider.PayPalExpressCheckout;
    case 97:
    case "PayPalExpressCheckoutUK":
      return Provider.PayPalExpressCheckoutUK;
    case 98:
    case "PayPalPayflowPro":
      return Provider.PayPalPayflowPro;
    case 99:
    case "PayPalPaymentsProUS":
      return Provider.PayPalPaymentsProUS;
    case 100:
    case "PayPalPaymentsProUK":
      return Provider.PayPalPaymentsProUK;
    case 101:
    case "PayPalWebsitePaymentsProCA":
      return Provider.PayPalWebsitePaymentsProCA;
    case 102:
    case "PayPalExpressCheckoutforDigitalGoods":
      return Provider.PayPalExpressCheckoutforDigitalGoods;
    case 103:
    case "Payscout":
      return Provider.Payscout;
    case 104:
    case "Paystation":
      return Provider.Paystation;
    case 105:
    case "PayWay":
      return Provider.PayWay;
    case 106:
    case "PayUIndia":
      return Provider.PayUIndia;
    case 107:
    case "PinPayments":
      return Provider.PinPayments;
    case 108:
    case "PlugnPay":
      return Provider.PlugnPay;
    case 109:
    case "Psigate":
      return Provider.Psigate;
    case 110:
    case "PSLPaymentSolutions":
      return Provider.PSLPaymentSolutions;
    case 111:
    case "QuickBooksMerchantServices":
      return Provider.QuickBooksMerchantServices;
    case 112:
    case "QuickBooksPayments":
      return Provider.QuickBooksPayments;
    case 113:
    case "QuantumGateway":
      return Provider.QuantumGateway;
    case 114:
    case "QuickPay":
      return Provider.QuickPay;
    case 115:
    case "Qvalent":
      return Provider.Qvalent;
    case 116:
    case "Raven":
      return Provider.Raven;
    case 117:
    case "Realex":
      return Provider.Realex;
    case 118:
    case "Redsys":
      return Provider.Redsys;
    case 119:
    case "S5":
      return Provider.S5;
    case 120:
    case "SagePay":
      return Provider.SagePay;
    case 121:
    case "SagePaymentSolutions":
      return Provider.SagePaymentSolutions;
    case 122:
    case "SallieMae":
      return Provider.SallieMae;
    case 123:
    case "SecureNet":
      return Provider.SecureNet;
    case 124:
    case "SecurePay":
      return Provider.SecurePay;
    case 125:
    case "SecurePayTech":
      return Provider.SecurePayTech;
    case 126:
    case "SecurionPay":
      return Provider.SecurionPay;
    case 127:
    case "SkipJack":
      return Provider.SkipJack;
    case 128:
    case "SoEasyPay":
      return Provider.SoEasyPay;
    case 129:
    case "Spreedly":
      return Provider.Spreedly;
    case 130:
    case "Stripe":
      return Provider.Stripe;
    case 131:
    case "Swipe":
      return Provider.Swipe;
    case 132:
    case "TNS":
      return Provider.TNS;
    case 133:
    case "TransactPro":
      return Provider.TransactPro;
    case 134:
    case "TransFirst":
      return Provider.TransFirst;
    case 135:
    case "Transnational":
      return Provider.Transnational;
    case 136:
    case "Trexle":
      return Provider.Trexle;
    case 137:
    case "TrustCommerce":
      return Provider.TrustCommerce;
    case 138:
    case "USAePay":
      return Provider.USAePay;
    case 139:
    case "VancoPaymentSolutions":
      return Provider.VancoPaymentSolutions;
    case 140:
    case "Verifi":
      return Provider.Verifi;
    case 141:
    case "ViaKLIX":
      return Provider.ViaKLIX;
    case 142:
    case "WebPay":
      return Provider.WebPay;
    case 143:
    case "WePay":
      return Provider.WePay;
    case 144:
    case "Wirecard":
      return Provider.Wirecard;
    case 145:
    case "WorldpayGlobal":
      return Provider.WorldpayGlobal;
    case 146:
    case "WorldpayOnline":
      return Provider.WorldpayOnline;
    case 147:
    case "WorldpayUS":
      return Provider.WorldpayUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Provider.UNRECOGNIZED;
  }
}

export function providerToJSON(object: Provider): string {
  switch (object) {
    case Provider.NO_PROVIDER:
      return "NO_PROVIDER";
    case Provider.Adyen:
      return "Adyen";
    case Provider.AuthorizeNetCIM:
      return "AuthorizeNetCIM";
    case Provider.AuthorizeNet:
      return "AuthorizeNet";
    case Provider.AxcessMS:
      return "AxcessMS";
    case Provider.Balanced:
      return "Balanced";
    case Provider.BamboraAsiaPacific:
      return "BamboraAsiaPacific";
    case Provider.BankFrick:
      return "BankFrick";
    case Provider.Banwire:
      return "Banwire";
    case Provider.BarclaysePDQExtraPlus:
      return "BarclaysePDQExtraPlus";
    case Provider.Be2Bill:
      return "Be2Bill";
    case Provider.Beanstreamcom:
      return "Beanstreamcom";
    case Provider.BluePay:
      return "BluePay";
    case Provider.Borgun:
      return "Borgun";
    case Provider.Braintree:
      return "Braintree";
    case Provider.BridgePay:
      return "BridgePay";
    case Provider.Cardknox:
      return "Cardknox";
    case Provider.CardSave:
      return "CardSave";
    case Provider.CardStream:
      return "CardStream";
    case Provider.Cashnet:
      return "Cashnet";
    case Provider.Cecabank:
      return "Cecabank";
    case Provider.Cenpos:
      return "Cenpos";
    case Provider.CAMSCentralAccountManagementSystem:
      return "CAMSCentralAccountManagementSystem";
    case Provider.Checkoutcom:
      return "Checkoutcom";
    case Provider.Clearhaus:
      return "Clearhaus";
    case Provider.Commercegate:
      return "Commercegate";
    case Provider.Conekta:
      return "Conekta";
    case Provider.CyberSource:
      return "CyberSource";
    case Provider.DIBS:
      return "DIBS";
    case Provider.DataCash:
      return "DataCash";
    case Provider.Efsnet:
      return "Efsnet";
    case Provider.ElavonMyVirtualMerchant:
      return "ElavonMyVirtualMerchant";
    case Provider.ePay:
      return "ePay";
    case Provider.EVOCanada:
      return "EVOCanada";
    case Provider.eWAY:
      return "eWAY";
    case Provider.eWAYRapid:
      return "eWAYRapid";
    case Provider.Exact:
      return "Exact";
    case Provider.Ezic:
      return "Ezic";
    case Provider.FatZebra:
      return "FatZebra";
    case Provider.FederatedCanada:
      return "FederatedCanada";
    case Provider.FinansbankWebPOS:
      return "FinansbankWebPOS";
    case Provider.Flo2Cash:
      return "Flo2Cash";
    case Provider.stPayGatewayNet:
      return "stPayGatewayNet";
    case Provider.FirstDataGlobalGatewaye4:
      return "FirstDataGlobalGatewaye4";
    case Provider.FirstGiving:
      return "FirstGiving";
    case Provider.GarantiSanalPOS:
      return "GarantiSanalPOS";
    case Provider.GlobalTransport:
      return "GlobalTransport";
    case Provider.HDFC:
      return "HDFC";
    case Provider.HeartlandPaymentSystems:
      return "HeartlandPaymentSystems";
    case Provider.iATSPayments:
      return "iATSPayments";
    case Provider.InspireCommerce:
      return "InspireCommerce";
    case Provider.InstaPay:
      return "InstaPay";
    case Provider.IPP:
      return "IPP";
    case Provider.Iridium:
      return "Iridium";
    case Provider.iTransact:
      return "iTransact";
    case Provider.JetPay:
      return "JetPay";
    case Provider.Komoju:
      return "Komoju";
    case Provider.LinkPoint:
      return "LinkPoint";
    case Provider.LitleCo:
      return "LitleCo";
    case Provider.maxiPago:
      return "maxiPago";
    case Provider.MerchanteSolutions:
      return "MerchanteSolutions";
    case Provider.MerchantOneGateway:
      return "MerchantOneGateway";
    case Provider.MerchantWARE:
      return "MerchantWARE";
    case Provider.MerchantWarrior:
      return "MerchantWarrior";
    case Provider.Mercury:
      return "Mercury";
    case Provider.MetricsGlobal:
      return "MetricsGlobal";
    case Provider.MasterCardInternetGatewayServiceMiGS:
      return "MasterCardInternetGatewayServiceMiGS";
    case Provider.ModernPayments:
      return "ModernPayments";
    case Provider.MONEI:
      return "MONEI";
    case Provider.Moneris:
      return "Moneris";
    case Provider.MoneyMovers:
      return "MoneyMovers";
    case Provider.NABTransact:
      return "NABTransact";
    case Provider.NELiXTransaX:
      return "NELiXTransaX";
    case Provider.NetRegistry:
      return "NetRegistry";
    case Provider.BBSNetaxept:
      return "BBSNetaxept";
    case Provider.NETbilling:
      return "NETbilling";
    case Provider.NETPAYGateway:
      return "NETPAYGateway";
    case Provider.NMI:
      return "NMI";
    case Provider.Ogone:
      return "Ogone";
    case Provider.Omise:
      return "Omise";
    case Provider.Openpay:
      return "Openpay";
    case Provider.OptimalPayments:
      return "OptimalPayments";
    case Provider.OrbitalPaymentech:
      return "OrbitalPaymentech";
    case Provider.Pagarme:
      return "Pagarme";
    case Provider.PagoFacil:
      return "PagoFacil";
    case Provider.PayConex:
      return "PayConex";
    case Provider.PayGatePayXML:
      return "PayGatePayXML";
    case Provider.PayHub:
      return "PayHub";
    case Provider.PayJunction:
      return "PayJunction";
    case Provider.PaySecure:
      return "PaySecure";
    case Provider.PayboxDirect:
      return "PayboxDirect";
    case Provider.Payeezy:
      return "Payeezy";
    case Provider.Payex:
      return "Payex";
    case Provider.PaymentExpress:
      return "PaymentExpress";
    case Provider.PAYMILL:
      return "PAYMILL";
    case Provider.PayPalExpressCheckout:
      return "PayPalExpressCheckout";
    case Provider.PayPalExpressCheckoutUK:
      return "PayPalExpressCheckoutUK";
    case Provider.PayPalPayflowPro:
      return "PayPalPayflowPro";
    case Provider.PayPalPaymentsProUS:
      return "PayPalPaymentsProUS";
    case Provider.PayPalPaymentsProUK:
      return "PayPalPaymentsProUK";
    case Provider.PayPalWebsitePaymentsProCA:
      return "PayPalWebsitePaymentsProCA";
    case Provider.PayPalExpressCheckoutforDigitalGoods:
      return "PayPalExpressCheckoutforDigitalGoods";
    case Provider.Payscout:
      return "Payscout";
    case Provider.Paystation:
      return "Paystation";
    case Provider.PayWay:
      return "PayWay";
    case Provider.PayUIndia:
      return "PayUIndia";
    case Provider.PinPayments:
      return "PinPayments";
    case Provider.PlugnPay:
      return "PlugnPay";
    case Provider.Psigate:
      return "Psigate";
    case Provider.PSLPaymentSolutions:
      return "PSLPaymentSolutions";
    case Provider.QuickBooksMerchantServices:
      return "QuickBooksMerchantServices";
    case Provider.QuickBooksPayments:
      return "QuickBooksPayments";
    case Provider.QuantumGateway:
      return "QuantumGateway";
    case Provider.QuickPay:
      return "QuickPay";
    case Provider.Qvalent:
      return "Qvalent";
    case Provider.Raven:
      return "Raven";
    case Provider.Realex:
      return "Realex";
    case Provider.Redsys:
      return "Redsys";
    case Provider.S5:
      return "S5";
    case Provider.SagePay:
      return "SagePay";
    case Provider.SagePaymentSolutions:
      return "SagePaymentSolutions";
    case Provider.SallieMae:
      return "SallieMae";
    case Provider.SecureNet:
      return "SecureNet";
    case Provider.SecurePay:
      return "SecurePay";
    case Provider.SecurePayTech:
      return "SecurePayTech";
    case Provider.SecurionPay:
      return "SecurionPay";
    case Provider.SkipJack:
      return "SkipJack";
    case Provider.SoEasyPay:
      return "SoEasyPay";
    case Provider.Spreedly:
      return "Spreedly";
    case Provider.Stripe:
      return "Stripe";
    case Provider.Swipe:
      return "Swipe";
    case Provider.TNS:
      return "TNS";
    case Provider.TransactPro:
      return "TransactPro";
    case Provider.TransFirst:
      return "TransFirst";
    case Provider.Transnational:
      return "Transnational";
    case Provider.Trexle:
      return "Trexle";
    case Provider.TrustCommerce:
      return "TrustCommerce";
    case Provider.USAePay:
      return "USAePay";
    case Provider.VancoPaymentSolutions:
      return "VancoPaymentSolutions";
    case Provider.Verifi:
      return "Verifi";
    case Provider.ViaKLIX:
      return "ViaKLIX";
    case Provider.WebPay:
      return "WebPay";
    case Provider.WePay:
      return "WePay";
    case Provider.Wirecard:
      return "Wirecard";
    case Provider.WorldpayGlobal:
      return "WorldpayGlobal";
    case Provider.WorldpayOnline:
      return "WorldpayOnline";
    case Provider.WorldpayUS:
      return "WorldpayUS";
    default:
      return "UNKNOWN";
  }
}

/** Possible payment identifiers. */
export enum PaymentIdType {
  NO_IDENTIFIER_TYPE = 0,
  TOKEN = 1,
  TRANSACTION_ID = 2,
  UNRECOGNIZED = -1,
}

export function paymentIdTypeFromJSON(object: any): PaymentIdType {
  switch (object) {
    case 0:
    case "NO_IDENTIFIER_TYPE":
      return PaymentIdType.NO_IDENTIFIER_TYPE;
    case 1:
    case "TOKEN":
      return PaymentIdType.TOKEN;
    case 2:
    case "TRANSACTION_ID":
      return PaymentIdType.TRANSACTION_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentIdType.UNRECOGNIZED;
  }
}

export function paymentIdTypeToJSON(object: PaymentIdType): string {
  switch (object) {
    case PaymentIdType.NO_IDENTIFIER_TYPE:
      return "NO_IDENTIFIER_TYPE";
    case PaymentIdType.TOKEN:
      return "TOKEN";
    case PaymentIdType.TRANSACTION_ID:
      return "TRANSACTION_ID";
    default:
      return "UNKNOWN";
  }
}

/** Request object for setup calls */
export interface SetupRequest {
  ip: string;
  items: Item[];
  subtotal: number;
  shipping: number;
  handling: number;
  tax: number;
  currency: string;
  returnUrl: string;
  cancelReturnUrl: string;
  allowGuestCheckout: boolean;
  provider: Provider;
  subject?: Subject;
}

export interface SetupPayload {
  token: string;
  confirmInitiationUrl: string;
  initiatedOn: string;
}

export interface SetupPayloadStatus {
  payload?: SetupPayload;
  status?: Status;
}

/** Response object for setup calls. */
export interface SetupResponse {
  item?: SetupPayloadStatus;
  operationStatus?: OperationStatus;
}

/** Request object for authorization or purchase call for cardless payment. */
export interface PaymentRequest {
  provider: Provider;
  paymentSum: number;
  currency: string;
  paymentId: string;
  payerId: string;
  token: string;
  subject?: Subject;
}

/** Request object for capture call for both standard and cardless payments. */
export interface CaptureRequest {
  provider: Provider;
  paymentSum: number;
  currency: string;
  paymentId: string;
  subject?: Subject;
}

export interface PaymentPayload {
  paymentId: string;
  executedOn: string;
}

export interface PaymentPayloadStatus {
  payload?: PaymentPayload;
  status?: Status;
}

/**
 * Unified response object for authorization, purchase and capture calls
 * for both standard and cardless payments.
 */
export interface PaymentResponse {
  item?: PaymentPayloadStatus;
  operationStatus?: OperationStatus;
}

/** Used for building ActiveMerchant::Billing::CreditCard instance. */
export interface PaymentCard {
  primaryNumber: string;
  firstName: string;
  lastName: string;
  month: string;
  year: number;
  verificationValue: string;
}

/** Represents purchased item. Not all providers support this. */
export interface Item {
  name: string;
  description: string;
  quantity: number;
  amount: number;
}

const baseSetupRequest: object = {
  ip: "",
  subtotal: 0,
  shipping: 0,
  handling: 0,
  tax: 0,
  currency: "",
  returnUrl: "",
  cancelReturnUrl: "",
  allowGuestCheckout: false,
  provider: 0,
};

export const SetupRequest = {
  encode(message: SetupRequest, writer: Writer = Writer.create()): Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.subtotal !== 0) {
      writer.uint32(24).int32(message.subtotal);
    }
    if (message.shipping !== 0) {
      writer.uint32(32).int32(message.shipping);
    }
    if (message.handling !== 0) {
      writer.uint32(40).int32(message.handling);
    }
    if (message.tax !== 0) {
      writer.uint32(48).int32(message.tax);
    }
    if (message.currency !== "") {
      writer.uint32(58).string(message.currency);
    }
    if (message.returnUrl !== "") {
      writer.uint32(66).string(message.returnUrl);
    }
    if (message.cancelReturnUrl !== "") {
      writer.uint32(74).string(message.cancelReturnUrl);
    }
    if (message.allowGuestCheckout === true) {
      writer.uint32(80).bool(message.allowGuestCheckout);
    }
    if (message.provider !== 0) {
      writer.uint32(88).int32(message.provider);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetupRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSetupRequest) as SetupRequest;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        case 3:
          message.subtotal = reader.int32();
          break;
        case 4:
          message.shipping = reader.int32();
          break;
        case 5:
          message.handling = reader.int32();
          break;
        case 6:
          message.tax = reader.int32();
          break;
        case 7:
          message.currency = reader.string();
          break;
        case 8:
          message.returnUrl = reader.string();
          break;
        case 9:
          message.cancelReturnUrl = reader.string();
          break;
        case 10:
          message.allowGuestCheckout = reader.bool();
          break;
        case 11:
          message.provider = reader.int32() as any;
          break;
        case 12:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetupRequest {
    const message = globalThis.Object.create(baseSetupRequest) as SetupRequest;
    message.items = [];
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = String(object.ip);
    } else {
      message.ip = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Item.fromJSON(e));
      }
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = Number(object.subtotal);
    } else {
      message.subtotal = 0;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = Number(object.shipping);
    } else {
      message.shipping = 0;
    }
    if (object.handling !== undefined && object.handling !== null) {
      message.handling = Number(object.handling);
    } else {
      message.handling = 0;
    }
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = Number(object.tax);
    } else {
      message.tax = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.returnUrl !== undefined && object.returnUrl !== null) {
      message.returnUrl = String(object.returnUrl);
    } else {
      message.returnUrl = "";
    }
    if (
      object.cancelReturnUrl !== undefined &&
      object.cancelReturnUrl !== null
    ) {
      message.cancelReturnUrl = String(object.cancelReturnUrl);
    } else {
      message.cancelReturnUrl = "";
    }
    if (
      object.allowGuestCheckout !== undefined &&
      object.allowGuestCheckout !== null
    ) {
      message.allowGuestCheckout = Boolean(object.allowGuestCheckout);
    } else {
      message.allowGuestCheckout = false;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<SetupRequest>): SetupRequest {
    const message = { ...baseSetupRequest } as SetupRequest;
    message.items = [];
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = "";
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Item.fromPartial(e));
      }
    }
    if (object.subtotal !== undefined && object.subtotal !== null) {
      message.subtotal = object.subtotal;
    } else {
      message.subtotal = 0;
    }
    if (object.shipping !== undefined && object.shipping !== null) {
      message.shipping = object.shipping;
    } else {
      message.shipping = 0;
    }
    if (object.handling !== undefined && object.handling !== null) {
      message.handling = object.handling;
    } else {
      message.handling = 0;
    }
    if (object.tax !== undefined && object.tax !== null) {
      message.tax = object.tax;
    } else {
      message.tax = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.returnUrl !== undefined && object.returnUrl !== null) {
      message.returnUrl = object.returnUrl;
    } else {
      message.returnUrl = "";
    }
    if (
      object.cancelReturnUrl !== undefined &&
      object.cancelReturnUrl !== null
    ) {
      message.cancelReturnUrl = object.cancelReturnUrl;
    } else {
      message.cancelReturnUrl = "";
    }
    if (
      object.allowGuestCheckout !== undefined &&
      object.allowGuestCheckout !== null
    ) {
      message.allowGuestCheckout = object.allowGuestCheckout;
    } else {
      message.allowGuestCheckout = false;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: SetupRequest): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    message.subtotal !== undefined && (obj.subtotal = message.subtotal);
    message.shipping !== undefined && (obj.shipping = message.shipping);
    message.handling !== undefined && (obj.handling = message.handling);
    message.tax !== undefined && (obj.tax = message.tax);
    message.currency !== undefined && (obj.currency = message.currency);
    message.returnUrl !== undefined && (obj.returnUrl = message.returnUrl);
    message.cancelReturnUrl !== undefined &&
      (obj.cancelReturnUrl = message.cancelReturnUrl);
    message.allowGuestCheckout !== undefined &&
      (obj.allowGuestCheckout = message.allowGuestCheckout);
    message.provider !== undefined &&
      (obj.provider = providerToJSON(message.provider));
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseSetupPayload: object = {
  token: "",
  confirmInitiationUrl: "",
  initiatedOn: "",
};

export const SetupPayload = {
  encode(message: SetupPayload, writer: Writer = Writer.create()): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.confirmInitiationUrl !== "") {
      writer.uint32(18).string(message.confirmInitiationUrl);
    }
    if (message.initiatedOn !== "") {
      writer.uint32(26).string(message.initiatedOn);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetupPayload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSetupPayload) as SetupPayload;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.confirmInitiationUrl = reader.string();
          break;
        case 3:
          message.initiatedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetupPayload {
    const message = globalThis.Object.create(baseSetupPayload) as SetupPayload;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (
      object.confirmInitiationUrl !== undefined &&
      object.confirmInitiationUrl !== null
    ) {
      message.confirmInitiationUrl = String(object.confirmInitiationUrl);
    } else {
      message.confirmInitiationUrl = "";
    }
    if (object.initiatedOn !== undefined && object.initiatedOn !== null) {
      message.initiatedOn = String(object.initiatedOn);
    } else {
      message.initiatedOn = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<SetupPayload>): SetupPayload {
    const message = { ...baseSetupPayload } as SetupPayload;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (
      object.confirmInitiationUrl !== undefined &&
      object.confirmInitiationUrl !== null
    ) {
      message.confirmInitiationUrl = object.confirmInitiationUrl;
    } else {
      message.confirmInitiationUrl = "";
    }
    if (object.initiatedOn !== undefined && object.initiatedOn !== null) {
      message.initiatedOn = object.initiatedOn;
    } else {
      message.initiatedOn = "";
    }
    return message;
  },

  toJSON(message: SetupPayload): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.confirmInitiationUrl !== undefined &&
      (obj.confirmInitiationUrl = message.confirmInitiationUrl);
    message.initiatedOn !== undefined &&
      (obj.initiatedOn = message.initiatedOn);
    return obj;
  },
};

const baseSetupPayloadStatus: object = {};

export const SetupPayloadStatus = {
  encode(
    message: SetupPayloadStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      SetupPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetupPayloadStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSetupPayloadStatus
    ) as SetupPayloadStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = SetupPayload.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetupPayloadStatus {
    const message = globalThis.Object.create(
      baseSetupPayloadStatus
    ) as SetupPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = SetupPayload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<SetupPayloadStatus>): SetupPayloadStatus {
    const message = { ...baseSetupPayloadStatus } as SetupPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = SetupPayload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: SetupPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? SetupPayload.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const baseSetupResponse: object = {};

export const SetupResponse = {
  encode(message: SetupResponse, writer: Writer = Writer.create()): Writer {
    if (message.item !== undefined) {
      SetupPayloadStatus.encode(
        message.item,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetupResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSetupResponse
    ) as SetupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = SetupPayloadStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetupResponse {
    const message = globalThis.Object.create(
      baseSetupResponse
    ) as SetupResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = SetupPayloadStatus.fromJSON(object.item);
    } else {
      message.item = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<SetupResponse>): SetupResponse {
    const message = { ...baseSetupResponse } as SetupResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = SetupPayloadStatus.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: SetupResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item
        ? SetupPayloadStatus.toJSON(message.item)
        : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const basePaymentRequest: object = {
  provider: 0,
  paymentSum: 0,
  currency: "",
  paymentId: "",
  payerId: "",
  token: "",
};

export const PaymentRequest = {
  encode(message: PaymentRequest, writer: Writer = Writer.create()): Writer {
    if (message.provider !== 0) {
      writer.uint32(8).int32(message.provider);
    }
    if (message.paymentSum !== 0) {
      writer.uint32(16).int32(message.paymentSum);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    if (message.paymentId !== "") {
      writer.uint32(34).string(message.paymentId);
    }
    if (message.payerId !== "") {
      writer.uint32(42).string(message.payerId);
    }
    if (message.token !== "") {
      writer.uint32(50).string(message.token);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentRequest
    ) as PaymentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.int32() as any;
          break;
        case 2:
          message.paymentSum = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.paymentId = reader.string();
          break;
        case 5:
          message.payerId = reader.string();
          break;
        case 6:
          message.token = reader.string();
          break;
        case 7:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentRequest {
    const message = globalThis.Object.create(
      basePaymentRequest
    ) as PaymentRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = Number(object.paymentSum);
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.payerId !== undefined && object.payerId !== null) {
      message.payerId = String(object.payerId);
    } else {
      message.payerId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentRequest>): PaymentRequest {
    const message = { ...basePaymentRequest } as PaymentRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = object.paymentSum;
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.payerId !== undefined && object.payerId !== null) {
      message.payerId = object.payerId;
    } else {
      message.payerId = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: PaymentRequest): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = providerToJSON(message.provider));
    message.paymentSum !== undefined && (obj.paymentSum = message.paymentSum);
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.payerId !== undefined && (obj.payerId = message.payerId);
    message.token !== undefined && (obj.token = message.token);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const baseCaptureRequest: object = {
  provider: 0,
  paymentSum: 0,
  currency: "",
  paymentId: "",
};

export const CaptureRequest = {
  encode(message: CaptureRequest, writer: Writer = Writer.create()): Writer {
    if (message.provider !== 0) {
      writer.uint32(8).int32(message.provider);
    }
    if (message.paymentSum !== 0) {
      writer.uint32(16).int32(message.paymentSum);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    if (message.paymentId !== "") {
      writer.uint32(34).string(message.paymentId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CaptureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseCaptureRequest
    ) as CaptureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.int32() as any;
          break;
        case 2:
          message.paymentSum = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.paymentId = reader.string();
          break;
        case 5:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CaptureRequest {
    const message = globalThis.Object.create(
      baseCaptureRequest
    ) as CaptureRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = providerFromJSON(object.provider);
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = Number(object.paymentSum);
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = String(object.currency);
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromJSON(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<CaptureRequest>): CaptureRequest {
    const message = { ...baseCaptureRequest } as CaptureRequest;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    if (object.paymentSum !== undefined && object.paymentSum !== null) {
      message.paymentSum = object.paymentSum;
    } else {
      message.paymentSum = 0;
    }
    if (object.currency !== undefined && object.currency !== null) {
      message.currency = object.currency;
    } else {
      message.currency = "";
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Subject.fromPartial(object.subject);
    } else {
      message.subject = undefined;
    }
    return message;
  },

  toJSON(message: CaptureRequest): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = providerToJSON(message.provider));
    message.paymentSum !== undefined && (obj.paymentSum = message.paymentSum);
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.subject !== undefined &&
      (obj.subject = message.subject
        ? Subject.toJSON(message.subject)
        : undefined);
    return obj;
  },
};

const basePaymentPayload: object = { paymentId: "", executedOn: "" };

export const PaymentPayload = {
  encode(message: PaymentPayload, writer: Writer = Writer.create()): Writer {
    if (message.paymentId !== "") {
      writer.uint32(10).string(message.paymentId);
    }
    if (message.executedOn !== "") {
      writer.uint32(18).string(message.executedOn);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentPayload {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentPayload
    ) as PaymentPayload;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentId = reader.string();
          break;
        case 2:
          message.executedOn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentPayload {
    const message = globalThis.Object.create(
      basePaymentPayload
    ) as PaymentPayload;
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.executedOn !== undefined && object.executedOn !== null) {
      message.executedOn = String(object.executedOn);
    } else {
      message.executedOn = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentPayload>): PaymentPayload {
    const message = { ...basePaymentPayload } as PaymentPayload;
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.executedOn !== undefined && object.executedOn !== null) {
      message.executedOn = object.executedOn;
    } else {
      message.executedOn = "";
    }
    return message;
  },

  toJSON(message: PaymentPayload): unknown {
    const obj: any = {};
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.executedOn !== undefined && (obj.executedOn = message.executedOn);
    return obj;
  },
};

const basePaymentPayloadStatus: object = {};

export const PaymentPayloadStatus = {
  encode(
    message: PaymentPayloadStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.payload !== undefined) {
      PaymentPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentPayloadStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentPayloadStatus
    ) as PaymentPayloadStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = PaymentPayload.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentPayloadStatus {
    const message = globalThis.Object.create(
      basePaymentPayloadStatus
    ) as PaymentPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PaymentPayload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromJSON(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentPayloadStatus>): PaymentPayloadStatus {
    const message = { ...basePaymentPayloadStatus } as PaymentPayloadStatus;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PaymentPayload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },

  toJSON(message: PaymentPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? PaymentPayload.toJSON(message.payload)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },
};

const basePaymentResponse: object = {};

export const PaymentResponse = {
  encode(message: PaymentResponse, writer: Writer = Writer.create()): Writer {
    if (message.item !== undefined) {
      PaymentPayloadStatus.encode(
        message.item,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(
        message.operationStatus,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePaymentResponse
    ) as PaymentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = PaymentPayloadStatus.decode(reader, reader.uint32());
          break;
        case 2:
          message.operationStatus = OperationStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentResponse {
    const message = globalThis.Object.create(
      basePaymentResponse
    ) as PaymentResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = PaymentPayloadStatus.fromJSON(object.item);
    } else {
      message.item = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromJSON(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentResponse>): PaymentResponse {
    const message = { ...basePaymentResponse } as PaymentResponse;
    if (object.item !== undefined && object.item !== null) {
      message.item = PaymentPayloadStatus.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    if (
      object.operationStatus !== undefined &&
      object.operationStatus !== null
    ) {
      message.operationStatus = OperationStatus.fromPartial(
        object.operationStatus
      );
    } else {
      message.operationStatus = undefined;
    }
    return message;
  },

  toJSON(message: PaymentResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item
        ? PaymentPayloadStatus.toJSON(message.item)
        : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus
        ? OperationStatus.toJSON(message.operationStatus)
        : undefined);
    return obj;
  },
};

const basePaymentCard: object = {
  primaryNumber: "",
  firstName: "",
  lastName: "",
  month: "",
  year: 0,
  verificationValue: "",
};

export const PaymentCard = {
  encode(message: PaymentCard, writer: Writer = Writer.create()): Writer {
    if (message.primaryNumber !== "") {
      writer.uint32(10).string(message.primaryNumber);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.month !== "") {
      writer.uint32(34).string(message.month);
    }
    if (message.year !== 0) {
      writer.uint32(40).int32(message.year);
    }
    if (message.verificationValue !== "") {
      writer.uint32(50).string(message.verificationValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PaymentCard {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(basePaymentCard) as PaymentCard;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryNumber = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.month = reader.string();
          break;
        case 5:
          message.year = reader.int32();
          break;
        case 6:
          message.verificationValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentCard {
    const message = globalThis.Object.create(basePaymentCard) as PaymentCard;
    if (object.primaryNumber !== undefined && object.primaryNumber !== null) {
      message.primaryNumber = String(object.primaryNumber);
    } else {
      message.primaryNumber = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = String(object.month);
    } else {
      message.month = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    if (
      object.verificationValue !== undefined &&
      object.verificationValue !== null
    ) {
      message.verificationValue = String(object.verificationValue);
    } else {
      message.verificationValue = "";
    }
    return message;
  },

  fromPartial(object: DeepPartial<PaymentCard>): PaymentCard {
    const message = { ...basePaymentCard } as PaymentCard;
    if (object.primaryNumber !== undefined && object.primaryNumber !== null) {
      message.primaryNumber = object.primaryNumber;
    } else {
      message.primaryNumber = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = object.month;
    } else {
      message.month = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    if (
      object.verificationValue !== undefined &&
      object.verificationValue !== null
    ) {
      message.verificationValue = object.verificationValue;
    } else {
      message.verificationValue = "";
    }
    return message;
  },

  toJSON(message: PaymentCard): unknown {
    const obj: any = {};
    message.primaryNumber !== undefined &&
      (obj.primaryNumber = message.primaryNumber);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.month !== undefined && (obj.month = message.month);
    message.year !== undefined && (obj.year = message.year);
    message.verificationValue !== undefined &&
      (obj.verificationValue = message.verificationValue);
    return obj;
  },
};

const baseItem: object = { name: "", description: "", quantity: 0, amount: 0 };

export const Item = {
  encode(message: Item, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseItem) as Item;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.quantity = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    const message = globalThis.Object.create(baseItem) as Item;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity);
    } else {
      message.quantity = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = { ...baseItem } as Item;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

export interface Service {
  /** Wrapper for setup_authorization in ActiveMerchant */
  SetupAuthorization(request: SetupRequest): Promise<SetupResponse>;
  /** Wrapper for setup_purchase in ActiveMerchant */
  SetupPurchase(request: SetupRequest): Promise<SetupResponse>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  Authorize(request: PaymentRequest): Promise<PaymentResponse>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  Purchase(request: PaymentRequest): Promise<PaymentResponse>;
  /** Can capture both cardless and standard authorization. */
  Capture(request: CaptureRequest): Promise<PaymentResponse>;
}

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    dependency: [
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
    ],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        field: [
          { name: "ip", number: 1, label: 1, type: 9, jsonName: "ip" },
          {
            name: "items",
            number: 2,
            label: 3,
            type: 11,
            typeName: ".io.restorecommerce.payment.Item",
            jsonName: "items",
          },
          {
            name: "subtotal",
            number: 3,
            label: 1,
            type: 5,
            jsonName: "subtotal",
          },
          {
            name: "shipping",
            number: 4,
            label: 1,
            type: 5,
            jsonName: "shipping",
          },
          {
            name: "handling",
            number: 5,
            label: 1,
            type: 5,
            jsonName: "handling",
          },
          { name: "tax", number: 6, label: 1, type: 5, jsonName: "tax" },
          {
            name: "currency",
            number: 7,
            label: 1,
            type: 9,
            jsonName: "currency",
          },
          {
            name: "return_url",
            number: 8,
            label: 1,
            type: 9,
            jsonName: "returnUrl",
          },
          {
            name: "cancel_return_url",
            number: 9,
            label: 1,
            type: 9,
            jsonName: "cancelReturnUrl",
          },
          {
            name: "allow_guest_checkout",
            number: 10,
            label: 1,
            type: 8,
            jsonName: "allowGuestCheckout",
          },
          {
            name: "provider",
            number: 11,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.payment.Provider",
            jsonName: "provider",
          },
          {
            name: "subject",
            number: 12,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "SetupRequest",
      },
      {
        field: [
          { name: "token", number: 1, label: 1, type: 9, jsonName: "token" },
          {
            name: "confirm_initiation_url",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "confirmInitiationUrl",
          },
          {
            name: "initiated_on",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "initiatedOn",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "SetupPayload",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.payment.SetupPayload",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "SetupPayloadStatus",
      },
      {
        field: [
          {
            name: "item",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.payment.SetupPayloadStatus",
            jsonName: "item",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "SetupResponse",
      },
      {
        field: [
          {
            name: "provider",
            number: 1,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.payment.Provider",
            jsonName: "provider",
          },
          {
            name: "payment_sum",
            number: 2,
            label: 1,
            type: 5,
            jsonName: "paymentSum",
          },
          {
            name: "currency",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "currency",
          },
          {
            name: "payment_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "paymentId",
          },
          {
            name: "payer_id",
            number: 5,
            label: 1,
            type: 9,
            jsonName: "payerId",
          },
          { name: "token", number: 6, label: 1, type: 9, jsonName: "token" },
          {
            name: "subject",
            number: 7,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PaymentRequest",
      },
      {
        field: [
          {
            name: "provider",
            number: 1,
            label: 1,
            type: 14,
            typeName: ".io.restorecommerce.payment.Provider",
            jsonName: "provider",
          },
          {
            name: "payment_sum",
            number: 2,
            label: 1,
            type: 5,
            jsonName: "paymentSum",
          },
          {
            name: "currency",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "currency",
          },
          {
            name: "payment_id",
            number: 4,
            label: 1,
            type: 9,
            jsonName: "paymentId",
          },
          {
            name: "subject",
            number: 5,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.auth.Subject",
            jsonName: "subject",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "CaptureRequest",
      },
      {
        field: [
          {
            name: "payment_id",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "paymentId",
          },
          {
            name: "executed_on",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "executedOn",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PaymentPayload",
      },
      {
        field: [
          {
            name: "payload",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.payment.PaymentPayload",
            jsonName: "payload",
          },
          {
            name: "status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.Status",
            jsonName: "status",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PaymentPayloadStatus",
      },
      {
        field: [
          {
            name: "item",
            number: 1,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.payment.PaymentPayloadStatus",
            jsonName: "item",
          },
          {
            name: "operation_status",
            number: 2,
            label: 1,
            type: 11,
            typeName: ".io.restorecommerce.status.OperationStatus",
            jsonName: "operationStatus",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PaymentResponse",
      },
      {
        field: [
          {
            name: "primary_number",
            number: 1,
            label: 1,
            type: 9,
            jsonName: "primaryNumber",
          },
          {
            name: "first_name",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "firstName",
          },
          {
            name: "last_name",
            number: 3,
            label: 1,
            type: 9,
            jsonName: "lastName",
          },
          { name: "month", number: 4, label: 1, type: 9, jsonName: "month" },
          { name: "year", number: 5, label: 1, type: 5, jsonName: "year" },
          {
            name: "verification_value",
            number: 6,
            label: 1,
            type: 9,
            jsonName: "verificationValue",
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "PaymentCard",
      },
      {
        field: [
          { name: "name", number: 1, label: 1, type: 9, jsonName: "name" },
          {
            name: "description",
            number: 2,
            label: 1,
            type: 9,
            jsonName: "description",
          },
          {
            name: "quantity",
            number: 3,
            label: 1,
            type: 5,
            jsonName: "quantity",
          },
          { name: "amount", number: 4, label: 1, type: 5, jsonName: "amount" },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        reservedRange: [],
        reservedName: [],
        name: "Item",
      },
    ],
    enumType: [
      {
        value: [
          { name: "NO_PROVIDER", number: 0 },
          { name: "Adyen", number: 1 },
          { name: "AuthorizeNetCIM", number: 2 },
          { name: "AuthorizeNet", number: 3 },
          { name: "AxcessMS", number: 4 },
          { name: "Balanced", number: 5 },
          { name: "BamboraAsiaPacific", number: 6 },
          { name: "BankFrick", number: 7 },
          { name: "Banwire", number: 8 },
          { name: "BarclaysePDQExtraPlus", number: 9 },
          { name: "Be2Bill", number: 10 },
          { name: "Beanstreamcom", number: 11 },
          { name: "BluePay", number: 12 },
          { name: "Borgun", number: 13 },
          { name: "Braintree", number: 14 },
          { name: "BridgePay", number: 15 },
          { name: "Cardknox", number: 16 },
          { name: "CardSave", number: 17 },
          { name: "CardStream", number: 18 },
          { name: "Cashnet", number: 19 },
          { name: "Cecabank", number: 20 },
          { name: "Cenpos", number: 21 },
          { name: "CAMSCentralAccountManagementSystem", number: 22 },
          { name: "Checkoutcom", number: 23 },
          { name: "Clearhaus", number: 24 },
          { name: "Commercegate", number: 25 },
          { name: "Conekta", number: 26 },
          { name: "CyberSource", number: 27 },
          { name: "DIBS", number: 28 },
          { name: "DataCash", number: 29 },
          { name: "Efsnet", number: 30 },
          { name: "ElavonMyVirtualMerchant", number: 31 },
          { name: "ePay", number: 32 },
          { name: "EVOCanada", number: 33 },
          { name: "eWAY", number: 34 },
          { name: "eWAYRapid", number: 35 },
          { name: "Exact", number: 36 },
          { name: "Ezic", number: 37 },
          { name: "FatZebra", number: 38 },
          { name: "FederatedCanada", number: 39 },
          { name: "FinansbankWebPOS", number: 40 },
          { name: "Flo2Cash", number: 41 },
          { name: "stPayGatewayNet", number: 42 },
          { name: "FirstDataGlobalGatewaye4", number: 43 },
          { name: "FirstGiving", number: 44 },
          { name: "GarantiSanalPOS", number: 45 },
          { name: "GlobalTransport", number: 46 },
          { name: "HDFC", number: 47 },
          { name: "HeartlandPaymentSystems", number: 48 },
          { name: "iATSPayments", number: 49 },
          { name: "InspireCommerce", number: 50 },
          { name: "InstaPay", number: 51 },
          { name: "IPP", number: 52 },
          { name: "Iridium", number: 53 },
          { name: "iTransact", number: 54 },
          { name: "JetPay", number: 55 },
          { name: "Komoju", number: 56 },
          { name: "LinkPoint", number: 57 },
          { name: "LitleCo", number: 58 },
          { name: "maxiPago", number: 59 },
          { name: "MerchanteSolutions", number: 60 },
          { name: "MerchantOneGateway", number: 61 },
          { name: "MerchantWARE", number: 62 },
          { name: "MerchantWarrior", number: 63 },
          { name: "Mercury", number: 64 },
          { name: "MetricsGlobal", number: 65 },
          { name: "MasterCardInternetGatewayServiceMiGS", number: 66 },
          { name: "ModernPayments", number: 67 },
          { name: "MONEI", number: 68 },
          { name: "Moneris", number: 69 },
          { name: "MoneyMovers", number: 70 },
          { name: "NABTransact", number: 71 },
          { name: "NELiXTransaX", number: 72 },
          { name: "NetRegistry", number: 73 },
          { name: "BBSNetaxept", number: 74 },
          { name: "NETbilling", number: 75 },
          { name: "NETPAYGateway", number: 76 },
          { name: "NMI", number: 77 },
          { name: "Ogone", number: 78 },
          { name: "Omise", number: 79 },
          { name: "Openpay", number: 80 },
          { name: "OptimalPayments", number: 81 },
          { name: "OrbitalPaymentech", number: 82 },
          { name: "Pagarme", number: 83 },
          { name: "PagoFacil", number: 84 },
          { name: "PayConex", number: 85 },
          { name: "PayGatePayXML", number: 86 },
          { name: "PayHub", number: 87 },
          { name: "PayJunction", number: 89 },
          { name: "PaySecure", number: 90 },
          { name: "PayboxDirect", number: 91 },
          { name: "Payeezy", number: 92 },
          { name: "Payex", number: 93 },
          { name: "PaymentExpress", number: 94 },
          { name: "PAYMILL", number: 95 },
          { name: "PayPalExpressCheckout", number: 96 },
          { name: "PayPalExpressCheckoutUK", number: 97 },
          { name: "PayPalPayflowPro", number: 98 },
          { name: "PayPalPaymentsProUS", number: 99 },
          { name: "PayPalPaymentsProUK", number: 100 },
          { name: "PayPalWebsitePaymentsProCA", number: 101 },
          { name: "PayPalExpressCheckoutforDigitalGoods", number: 102 },
          { name: "Payscout", number: 103 },
          { name: "Paystation", number: 104 },
          { name: "PayWay", number: 105 },
          { name: "PayUIndia", number: 106 },
          { name: "PinPayments", number: 107 },
          { name: "PlugnPay", number: 108 },
          { name: "Psigate", number: 109 },
          { name: "PSLPaymentSolutions", number: 110 },
          { name: "QuickBooksMerchantServices", number: 111 },
          { name: "QuickBooksPayments", number: 112 },
          { name: "QuantumGateway", number: 113 },
          { name: "QuickPay", number: 114 },
          { name: "Qvalent", number: 115 },
          { name: "Raven", number: 116 },
          { name: "Realex", number: 117 },
          { name: "Redsys", number: 118 },
          { name: "S5", number: 119 },
          { name: "SagePay", number: 120 },
          { name: "SagePaymentSolutions", number: 121 },
          { name: "SallieMae", number: 122 },
          { name: "SecureNet", number: 123 },
          { name: "SecurePay", number: 124 },
          { name: "SecurePayTech", number: 125 },
          { name: "SecurionPay", number: 126 },
          { name: "SkipJack", number: 127 },
          { name: "SoEasyPay", number: 128 },
          { name: "Spreedly", number: 129 },
          { name: "Stripe", number: 130 },
          { name: "Swipe", number: 131 },
          { name: "TNS", number: 132 },
          { name: "TransactPro", number: 133 },
          { name: "TransFirst", number: 134 },
          { name: "Transnational", number: 135 },
          { name: "Trexle", number: 136 },
          { name: "TrustCommerce", number: 137 },
          { name: "USAePay", number: 138 },
          { name: "VancoPaymentSolutions", number: 139 },
          { name: "Verifi", number: 140 },
          { name: "ViaKLIX", number: 141 },
          { name: "WebPay", number: 142 },
          { name: "WePay", number: 143 },
          { name: "Wirecard", number: 144 },
          { name: "WorldpayGlobal", number: 145 },
          { name: "WorldpayOnline", number: 146 },
          { name: "WorldpayUS", number: 147 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "Provider",
      },
      {
        value: [
          { name: "NO_IDENTIFIER_TYPE", number: 0 },
          { name: "TOKEN", number: 1 },
          { name: "TRANSACTION_ID", number: 2 },
        ],
        reservedRange: [],
        reservedName: [],
        name: "PaymentIdType",
      },
    ],
    service: [
      {
        method: [
          {
            name: "SetupAuthorization",
            inputType: ".io.restorecommerce.payment.SetupRequest",
            outputType: ".io.restorecommerce.payment.SetupResponse",
          },
          {
            name: "SetupPurchase",
            inputType: ".io.restorecommerce.payment.SetupRequest",
            outputType: ".io.restorecommerce.payment.SetupResponse",
          },
          {
            name: "Authorize",
            inputType: ".io.restorecommerce.payment.PaymentRequest",
            outputType: ".io.restorecommerce.payment.PaymentResponse",
          },
          {
            name: "Purchase",
            inputType: ".io.restorecommerce.payment.PaymentRequest",
            outputType: ".io.restorecommerce.payment.PaymentResponse",
          },
          {
            name: "Capture",
            inputType: ".io.restorecommerce.payment.CaptureRequest",
            outputType: ".io.restorecommerce.payment.PaymentResponse",
          },
        ],
        name: "Service",
      },
    ],
    extension: [],
    name: "io/restorecommerce/payment.proto",
    package: "io.restorecommerce.payment",
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0, 2, 0],
          span: [7, 2, 64],
          leadingDetachedComments: [],
          leadingComments:
            " Wrapper for setup_authorization in ActiveMerchant\n",
        },
        {
          path: [6, 0, 2, 1],
          span: [10, 2, 59],
          leadingDetachedComments: [],
          leadingComments: " Wrapper for setup_purchase in ActiveMerchant\n",
        },
        {
          path: [6, 0, 2, 2],
          span: [13, 2, 59],
          leadingDetachedComments: [],
          leadingComments:
            " Gets payment details by token or transaction. Only supported by PayPal Express Checkout.\n",
        },
        {
          path: [6, 0, 2, 3],
          span: [16, 2, 58],
          leadingDetachedComments: [],
          leadingComments:
            " Gets payment details by token or transaction. Only supported by PayPal Express Checkout.\n",
        },
        {
          path: [6, 0, 2, 4],
          span: [19, 2, 57],
          leadingDetachedComments: [],
          leadingComments:
            " Can capture both cardless and standard authorization.\n",
        },
        {
          path: [4, 0],
          span: [23, 0, 36, 1],
          leadingDetachedComments: [],
          leadingComments: " Request object for setup calls\n",
        },
        {
          path: [4, 3],
          span: [50, 0, 53, 1],
          leadingDetachedComments: [],
          leadingComments: " Response object for setup calls.\n",
        },
        {
          path: [4, 4],
          span: [56, 0, 64, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Request object for authorization or purchase call for cardless payment.\n",
        },
        {
          path: [4, 5],
          span: [67, 0, 73, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Request object for capture call for both standard and cardless payments.\n",
        },
        {
          path: [4, 8],
          span: [87, 0, 90, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Unified response object for authorization, purchase and capture calls\n for both standard and cardless payments.\n",
        },
        {
          path: [4, 9],
          span: [93, 0, 100, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Used for building ActiveMerchant::Billing::CreditCard instance.\n",
        },
        {
          path: [4, 10],
          span: [103, 0, 108, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Represents purchased item. Not all providers support this.\n",
        },
        {
          path: [5, 0],
          span: [111, 0, 259, 1],
          leadingDetachedComments: [],
          leadingComments:
            " Possible service providers. Provider names must be exactly as in config.yml.\n",
        },
        {
          path: [5, 1],
          span: [262, 0, 266, 1],
          leadingDetachedComments: [],
          leadingComments: " Possible payment identifiers.\n",
        },
      ],
    },
    syntax: "proto3",
  }),
  references: {
    ".io.restorecommerce.payment.Provider": Provider,
    ".io.restorecommerce.payment.PaymentIdType": PaymentIdType,
    ".io.restorecommerce.payment.SetupRequest": SetupRequest,
    ".io.restorecommerce.payment.SetupPayload": SetupPayload,
    ".io.restorecommerce.payment.SetupPayloadStatus": SetupPayloadStatus,
    ".io.restorecommerce.payment.SetupResponse": SetupResponse,
    ".io.restorecommerce.payment.PaymentRequest": PaymentRequest,
    ".io.restorecommerce.payment.CaptureRequest": CaptureRequest,
    ".io.restorecommerce.payment.PaymentPayload": PaymentPayload,
    ".io.restorecommerce.payment.PaymentPayloadStatus": PaymentPayloadStatus,
    ".io.restorecommerce.payment.PaymentResponse": PaymentResponse,
    ".io.restorecommerce.payment.PaymentCard": PaymentCard,
    ".io.restorecommerce.payment.Item": Item,
  },
  dependencies: [protoMetadata1, protoMetadata2],
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
