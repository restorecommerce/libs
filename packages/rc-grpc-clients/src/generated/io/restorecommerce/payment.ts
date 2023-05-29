/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata1, Subject } from "./auth";
import { protoMetadata as protoMetadata3 } from "./options";
import { OperationStatus, protoMetadata as protoMetadata2, Status } from "./status";

export const protobufPackage = "io.restorecommerce.payment";

/** Possible service providers. Provider names must be exactly as in config.yml. */
export enum Provider {
  NO_PROVIDER = "NO_PROVIDER",
  Adyen = "Adyen",
  AuthorizeNetCIM = "AuthorizeNetCIM",
  AuthorizeNet = "AuthorizeNet",
  AxcessMS = "AxcessMS",
  Balanced = "Balanced",
  BamboraAsiaPacific = "BamboraAsiaPacific",
  BankFrick = "BankFrick",
  Banwire = "Banwire",
  BarclaysePDQExtraPlus = "BarclaysePDQExtraPlus",
  Be2Bill = "Be2Bill",
  Beanstreamcom = "Beanstreamcom",
  BluePay = "BluePay",
  Borgun = "Borgun",
  Braintree = "Braintree",
  BridgePay = "BridgePay",
  Cardknox = "Cardknox",
  CardSave = "CardSave",
  CardStream = "CardStream",
  Cashnet = "Cashnet",
  Cecabank = "Cecabank",
  Cenpos = "Cenpos",
  CAMSCentralAccountManagementSystem = "CAMSCentralAccountManagementSystem",
  Checkoutcom = "Checkoutcom",
  Clearhaus = "Clearhaus",
  Commercegate = "Commercegate",
  Conekta = "Conekta",
  CyberSource = "CyberSource",
  DIBS = "DIBS",
  DataCash = "DataCash",
  Efsnet = "Efsnet",
  ElavonMyVirtualMerchant = "ElavonMyVirtualMerchant",
  ePay = "ePay",
  EVOCanada = "EVOCanada",
  eWAY = "eWAY",
  eWAYRapid = "eWAYRapid",
  Exact = "Exact",
  Ezic = "Ezic",
  FatZebra = "FatZebra",
  FederatedCanada = "FederatedCanada",
  FinansbankWebPOS = "FinansbankWebPOS",
  Flo2Cash = "Flo2Cash",
  stPayGatewayNet = "stPayGatewayNet",
  FirstDataGlobalGatewaye4 = "FirstDataGlobalGatewaye4",
  FirstGiving = "FirstGiving",
  GarantiSanalPOS = "GarantiSanalPOS",
  GlobalTransport = "GlobalTransport",
  HDFC = "HDFC",
  HeartlandPaymentSystems = "HeartlandPaymentSystems",
  iATSPayments = "iATSPayments",
  InspireCommerce = "InspireCommerce",
  InstaPay = "InstaPay",
  IPP = "IPP",
  Iridium = "Iridium",
  iTransact = "iTransact",
  JetPay = "JetPay",
  Komoju = "Komoju",
  LinkPoint = "LinkPoint",
  LitleCo = "LitleCo",
  maxiPago = "maxiPago",
  MerchanteSolutions = "MerchanteSolutions",
  MerchantOneGateway = "MerchantOneGateway",
  MerchantWARE = "MerchantWARE",
  MerchantWarrior = "MerchantWarrior",
  Mercury = "Mercury",
  MetricsGlobal = "MetricsGlobal",
  MasterCardInternetGatewayServiceMiGS = "MasterCardInternetGatewayServiceMiGS",
  ModernPayments = "ModernPayments",
  MONEI = "MONEI",
  Moneris = "Moneris",
  MoneyMovers = "MoneyMovers",
  NABTransact = "NABTransact",
  NELiXTransaX = "NELiXTransaX",
  NetRegistry = "NetRegistry",
  BBSNetaxept = "BBSNetaxept",
  NETbilling = "NETbilling",
  NETPAYGateway = "NETPAYGateway",
  NMI = "NMI",
  Ogone = "Ogone",
  Omise = "Omise",
  Openpay = "Openpay",
  OptimalPayments = "OptimalPayments",
  OrbitalPaymentech = "OrbitalPaymentech",
  Pagarme = "Pagarme",
  PagoFacil = "PagoFacil",
  PayConex = "PayConex",
  PayGatePayXML = "PayGatePayXML",
  PayHub = "PayHub",
  PayJunction = "PayJunction",
  PaySecure = "PaySecure",
  PayboxDirect = "PayboxDirect",
  Payeezy = "Payeezy",
  Payex = "Payex",
  PaymentExpress = "PaymentExpress",
  PAYMILL = "PAYMILL",
  PayPalExpressCheckout = "PayPalExpressCheckout",
  PayPalExpressCheckoutUK = "PayPalExpressCheckoutUK",
  PayPalPayflowPro = "PayPalPayflowPro",
  PayPalPaymentsProUS = "PayPalPaymentsProUS",
  PayPalPaymentsProUK = "PayPalPaymentsProUK",
  PayPalWebsitePaymentsProCA = "PayPalWebsitePaymentsProCA",
  PayPalExpressCheckoutforDigitalGoods = "PayPalExpressCheckoutforDigitalGoods",
  Payscout = "Payscout",
  Paystation = "Paystation",
  PayWay = "PayWay",
  PayUIndia = "PayUIndia",
  PinPayments = "PinPayments",
  PlugnPay = "PlugnPay",
  Psigate = "Psigate",
  PSLPaymentSolutions = "PSLPaymentSolutions",
  QuickBooksMerchantServices = "QuickBooksMerchantServices",
  QuickBooksPayments = "QuickBooksPayments",
  QuantumGateway = "QuantumGateway",
  QuickPay = "QuickPay",
  Qvalent = "Qvalent",
  Raven = "Raven",
  Realex = "Realex",
  Redsys = "Redsys",
  S5 = "S5",
  SagePay = "SagePay",
  SagePaymentSolutions = "SagePaymentSolutions",
  SallieMae = "SallieMae",
  SecureNet = "SecureNet",
  SecurePay = "SecurePay",
  SecurePayTech = "SecurePayTech",
  SecurionPay = "SecurionPay",
  SkipJack = "SkipJack",
  SoEasyPay = "SoEasyPay",
  Spreedly = "Spreedly",
  Stripe = "Stripe",
  Swipe = "Swipe",
  TNS = "TNS",
  TransactPro = "TransactPro",
  TransFirst = "TransFirst",
  Transnational = "Transnational",
  Trexle = "Trexle",
  TrustCommerce = "TrustCommerce",
  USAePay = "USAePay",
  VancoPaymentSolutions = "VancoPaymentSolutions",
  Verifi = "Verifi",
  ViaKLIX = "ViaKLIX",
  WebPay = "WebPay",
  WePay = "WePay",
  Wirecard = "Wirecard",
  WorldpayGlobal = "WorldpayGlobal",
  WorldpayOnline = "WorldpayOnline",
  WorldpayUS = "WorldpayUS",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case Provider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function providerToNumber(object: Provider): number {
  switch (object) {
    case Provider.NO_PROVIDER:
      return 0;
    case Provider.Adyen:
      return 1;
    case Provider.AuthorizeNetCIM:
      return 2;
    case Provider.AuthorizeNet:
      return 3;
    case Provider.AxcessMS:
      return 4;
    case Provider.Balanced:
      return 5;
    case Provider.BamboraAsiaPacific:
      return 6;
    case Provider.BankFrick:
      return 7;
    case Provider.Banwire:
      return 8;
    case Provider.BarclaysePDQExtraPlus:
      return 9;
    case Provider.Be2Bill:
      return 10;
    case Provider.Beanstreamcom:
      return 11;
    case Provider.BluePay:
      return 12;
    case Provider.Borgun:
      return 13;
    case Provider.Braintree:
      return 14;
    case Provider.BridgePay:
      return 15;
    case Provider.Cardknox:
      return 16;
    case Provider.CardSave:
      return 17;
    case Provider.CardStream:
      return 18;
    case Provider.Cashnet:
      return 19;
    case Provider.Cecabank:
      return 20;
    case Provider.Cenpos:
      return 21;
    case Provider.CAMSCentralAccountManagementSystem:
      return 22;
    case Provider.Checkoutcom:
      return 23;
    case Provider.Clearhaus:
      return 24;
    case Provider.Commercegate:
      return 25;
    case Provider.Conekta:
      return 26;
    case Provider.CyberSource:
      return 27;
    case Provider.DIBS:
      return 28;
    case Provider.DataCash:
      return 29;
    case Provider.Efsnet:
      return 30;
    case Provider.ElavonMyVirtualMerchant:
      return 31;
    case Provider.ePay:
      return 32;
    case Provider.EVOCanada:
      return 33;
    case Provider.eWAY:
      return 34;
    case Provider.eWAYRapid:
      return 35;
    case Provider.Exact:
      return 36;
    case Provider.Ezic:
      return 37;
    case Provider.FatZebra:
      return 38;
    case Provider.FederatedCanada:
      return 39;
    case Provider.FinansbankWebPOS:
      return 40;
    case Provider.Flo2Cash:
      return 41;
    case Provider.stPayGatewayNet:
      return 42;
    case Provider.FirstDataGlobalGatewaye4:
      return 43;
    case Provider.FirstGiving:
      return 44;
    case Provider.GarantiSanalPOS:
      return 45;
    case Provider.GlobalTransport:
      return 46;
    case Provider.HDFC:
      return 47;
    case Provider.HeartlandPaymentSystems:
      return 48;
    case Provider.iATSPayments:
      return 49;
    case Provider.InspireCommerce:
      return 50;
    case Provider.InstaPay:
      return 51;
    case Provider.IPP:
      return 52;
    case Provider.Iridium:
      return 53;
    case Provider.iTransact:
      return 54;
    case Provider.JetPay:
      return 55;
    case Provider.Komoju:
      return 56;
    case Provider.LinkPoint:
      return 57;
    case Provider.LitleCo:
      return 58;
    case Provider.maxiPago:
      return 59;
    case Provider.MerchanteSolutions:
      return 60;
    case Provider.MerchantOneGateway:
      return 61;
    case Provider.MerchantWARE:
      return 62;
    case Provider.MerchantWarrior:
      return 63;
    case Provider.Mercury:
      return 64;
    case Provider.MetricsGlobal:
      return 65;
    case Provider.MasterCardInternetGatewayServiceMiGS:
      return 66;
    case Provider.ModernPayments:
      return 67;
    case Provider.MONEI:
      return 68;
    case Provider.Moneris:
      return 69;
    case Provider.MoneyMovers:
      return 70;
    case Provider.NABTransact:
      return 71;
    case Provider.NELiXTransaX:
      return 72;
    case Provider.NetRegistry:
      return 73;
    case Provider.BBSNetaxept:
      return 74;
    case Provider.NETbilling:
      return 75;
    case Provider.NETPAYGateway:
      return 76;
    case Provider.NMI:
      return 77;
    case Provider.Ogone:
      return 78;
    case Provider.Omise:
      return 79;
    case Provider.Openpay:
      return 80;
    case Provider.OptimalPayments:
      return 81;
    case Provider.OrbitalPaymentech:
      return 82;
    case Provider.Pagarme:
      return 83;
    case Provider.PagoFacil:
      return 84;
    case Provider.PayConex:
      return 85;
    case Provider.PayGatePayXML:
      return 86;
    case Provider.PayHub:
      return 87;
    case Provider.PayJunction:
      return 89;
    case Provider.PaySecure:
      return 90;
    case Provider.PayboxDirect:
      return 91;
    case Provider.Payeezy:
      return 92;
    case Provider.Payex:
      return 93;
    case Provider.PaymentExpress:
      return 94;
    case Provider.PAYMILL:
      return 95;
    case Provider.PayPalExpressCheckout:
      return 96;
    case Provider.PayPalExpressCheckoutUK:
      return 97;
    case Provider.PayPalPayflowPro:
      return 98;
    case Provider.PayPalPaymentsProUS:
      return 99;
    case Provider.PayPalPaymentsProUK:
      return 100;
    case Provider.PayPalWebsitePaymentsProCA:
      return 101;
    case Provider.PayPalExpressCheckoutforDigitalGoods:
      return 102;
    case Provider.Payscout:
      return 103;
    case Provider.Paystation:
      return 104;
    case Provider.PayWay:
      return 105;
    case Provider.PayUIndia:
      return 106;
    case Provider.PinPayments:
      return 107;
    case Provider.PlugnPay:
      return 108;
    case Provider.Psigate:
      return 109;
    case Provider.PSLPaymentSolutions:
      return 110;
    case Provider.QuickBooksMerchantServices:
      return 111;
    case Provider.QuickBooksPayments:
      return 112;
    case Provider.QuantumGateway:
      return 113;
    case Provider.QuickPay:
      return 114;
    case Provider.Qvalent:
      return 115;
    case Provider.Raven:
      return 116;
    case Provider.Realex:
      return 117;
    case Provider.Redsys:
      return 118;
    case Provider.S5:
      return 119;
    case Provider.SagePay:
      return 120;
    case Provider.SagePaymentSolutions:
      return 121;
    case Provider.SallieMae:
      return 122;
    case Provider.SecureNet:
      return 123;
    case Provider.SecurePay:
      return 124;
    case Provider.SecurePayTech:
      return 125;
    case Provider.SecurionPay:
      return 126;
    case Provider.SkipJack:
      return 127;
    case Provider.SoEasyPay:
      return 128;
    case Provider.Spreedly:
      return 129;
    case Provider.Stripe:
      return 130;
    case Provider.Swipe:
      return 131;
    case Provider.TNS:
      return 132;
    case Provider.TransactPro:
      return 133;
    case Provider.TransFirst:
      return 134;
    case Provider.Transnational:
      return 135;
    case Provider.Trexle:
      return 136;
    case Provider.TrustCommerce:
      return 137;
    case Provider.USAePay:
      return 138;
    case Provider.VancoPaymentSolutions:
      return 139;
    case Provider.Verifi:
      return 140;
    case Provider.ViaKLIX:
      return 141;
    case Provider.WebPay:
      return 142;
    case Provider.WePay:
      return 143;
    case Provider.Wirecard:
      return 144;
    case Provider.WorldpayGlobal:
      return 145;
    case Provider.WorldpayOnline:
      return 146;
    case Provider.WorldpayUS:
      return 147;
    case Provider.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Possible payment identifiers. */
export enum PaymentIdType {
  NO_IDENTIFIER_TYPE = "NO_IDENTIFIER_TYPE",
  TOKEN = "TOKEN",
  TRANSACTION_ID = "TRANSACTION_ID",
  UNRECOGNIZED = "UNRECOGNIZED",
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
    case PaymentIdType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function paymentIdTypeToNumber(object: PaymentIdType): number {
  switch (object) {
    case PaymentIdType.NO_IDENTIFIER_TYPE:
      return 0;
    case PaymentIdType.TOKEN:
      return 1;
    case PaymentIdType.TRANSACTION_ID:
      return 2;
    case PaymentIdType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Request object for setup calls */
export interface SetupRequest {
  ip?: string | undefined;
  items: Item[];
  subtotal?: number | undefined;
  shipping?: number | undefined;
  handling?: number | undefined;
  tax?: number | undefined;
  currency?: string | undefined;
  returnUrl?: string | undefined;
  cancelReturnUrl?: string | undefined;
  allowGuestCheckout?: boolean | undefined;
  provider?: Provider | undefined;
  subject?: Subject | undefined;
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
  provider?: Provider | undefined;
  paymentSum?: number | undefined;
  currency?: string | undefined;
  paymentId?: string | undefined;
  payerId?: string | undefined;
  token?: string | undefined;
  subject?: Subject;
}

/** Request object for capture call for both standard and cardless payments. */
export interface CaptureRequest {
  provider?: Provider | undefined;
  paymentSum?: number | undefined;
  currency?: string | undefined;
  paymentId?: string | undefined;
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
  primaryNumber?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  month?: string | undefined;
  year?: number | undefined;
  verificationValue?: string | undefined;
}

/** Represents purchased item. Not all providers support this. */
export interface Item {
  name?: string | undefined;
  description?: string | undefined;
  quantity?: number | undefined;
  amount?: number | undefined;
}

function createBaseSetupRequest(): SetupRequest {
  return {
    ip: undefined,
    items: [],
    subtotal: undefined,
    shipping: undefined,
    handling: undefined,
    tax: undefined,
    currency: undefined,
    returnUrl: undefined,
    cancelReturnUrl: undefined,
    allowGuestCheckout: undefined,
    provider: undefined,
    subject: undefined,
  };
}

export const SetupRequest = {
  encode(message: SetupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== undefined) {
      writer.uint32(10).string(message.ip);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.subtotal !== undefined) {
      writer.uint32(24).int32(message.subtotal);
    }
    if (message.shipping !== undefined) {
      writer.uint32(32).int32(message.shipping);
    }
    if (message.handling !== undefined) {
      writer.uint32(40).int32(message.handling);
    }
    if (message.tax !== undefined) {
      writer.uint32(48).int32(message.tax);
    }
    if (message.currency !== undefined) {
      writer.uint32(58).string(message.currency);
    }
    if (message.returnUrl !== undefined) {
      writer.uint32(66).string(message.returnUrl);
    }
    if (message.cancelReturnUrl !== undefined) {
      writer.uint32(74).string(message.cancelReturnUrl);
    }
    if (message.allowGuestCheckout !== undefined) {
      writer.uint32(80).bool(message.allowGuestCheckout);
    }
    if (message.provider !== undefined) {
      writer.uint32(88).int32(providerToNumber(message.provider));
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subtotal = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.shipping = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.handling = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.tax = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.returnUrl = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cancelReturnUrl = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.allowGuestCheckout = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.provider = providerFromJSON(reader.int32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetupRequest {
    return {
      ip: isSet(object.ip) ? String(object.ip) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      subtotal: isSet(object.subtotal) ? Number(object.subtotal) : undefined,
      shipping: isSet(object.shipping) ? Number(object.shipping) : undefined,
      handling: isSet(object.handling) ? Number(object.handling) : undefined,
      tax: isSet(object.tax) ? Number(object.tax) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
      returnUrl: isSet(object.returnUrl) ? String(object.returnUrl) : undefined,
      cancelReturnUrl: isSet(object.cancelReturnUrl) ? String(object.cancelReturnUrl) : undefined,
      allowGuestCheckout: isSet(object.allowGuestCheckout) ? Boolean(object.allowGuestCheckout) : undefined,
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: SetupRequest): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.subtotal !== undefined && (obj.subtotal = Math.round(message.subtotal));
    message.shipping !== undefined && (obj.shipping = Math.round(message.shipping));
    message.handling !== undefined && (obj.handling = Math.round(message.handling));
    message.tax !== undefined && (obj.tax = Math.round(message.tax));
    message.currency !== undefined && (obj.currency = message.currency);
    message.returnUrl !== undefined && (obj.returnUrl = message.returnUrl);
    message.cancelReturnUrl !== undefined && (obj.cancelReturnUrl = message.cancelReturnUrl);
    message.allowGuestCheckout !== undefined && (obj.allowGuestCheckout = message.allowGuestCheckout);
    message.provider !== undefined &&
      (obj.provider = message.provider !== undefined ? providerToJSON(message.provider) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetupRequest>): SetupRequest {
    return SetupRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetupRequest>): SetupRequest {
    const message = createBaseSetupRequest();
    message.ip = object.ip ?? undefined;
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.subtotal = object.subtotal ?? undefined;
    message.shipping = object.shipping ?? undefined;
    message.handling = object.handling ?? undefined;
    message.tax = object.tax ?? undefined;
    message.currency = object.currency ?? undefined;
    message.returnUrl = object.returnUrl ?? undefined;
    message.cancelReturnUrl = object.cancelReturnUrl ?? undefined;
    message.allowGuestCheckout = object.allowGuestCheckout ?? undefined;
    message.provider = object.provider ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseSetupPayload(): SetupPayload {
  return { token: "", confirmInitiationUrl: "", initiatedOn: "" };
}

export const SetupPayload = {
  encode(message: SetupPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confirmInitiationUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initiatedOn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetupPayload {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      confirmInitiationUrl: isSet(object.confirmInitiationUrl) ? String(object.confirmInitiationUrl) : "",
      initiatedOn: isSet(object.initiatedOn) ? String(object.initiatedOn) : "",
    };
  },

  toJSON(message: SetupPayload): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.confirmInitiationUrl !== undefined && (obj.confirmInitiationUrl = message.confirmInitiationUrl);
    message.initiatedOn !== undefined && (obj.initiatedOn = message.initiatedOn);
    return obj;
  },

  create(base?: DeepPartial<SetupPayload>): SetupPayload {
    return SetupPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetupPayload>): SetupPayload {
    const message = createBaseSetupPayload();
    message.token = object.token ?? "";
    message.confirmInitiationUrl = object.confirmInitiationUrl ?? "";
    message.initiatedOn = object.initiatedOn ?? "";
    return message;
  },
};

function createBaseSetupPayloadStatus(): SetupPayloadStatus {
  return { payload: undefined, status: undefined };
}

export const SetupPayloadStatus = {
  encode(message: SetupPayloadStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      SetupPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupPayloadStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupPayloadStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = SetupPayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetupPayloadStatus {
    return {
      payload: isSet(object.payload) ? SetupPayload.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: SetupPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = message.payload ? SetupPayload.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetupPayloadStatus>): SetupPayloadStatus {
    return SetupPayloadStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetupPayloadStatus>): SetupPayloadStatus {
    const message = createBaseSetupPayloadStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? SetupPayload.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseSetupResponse(): SetupResponse {
  return { item: undefined, operationStatus: undefined };
}

export const SetupResponse = {
  encode(message: SetupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item !== undefined) {
      SetupPayloadStatus.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.item = SetupPayloadStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetupResponse {
    return {
      item: isSet(object.item) ? SetupPayloadStatus.fromJSON(object.item) : undefined,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: SetupResponse): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = message.item ? SetupPayloadStatus.toJSON(message.item) : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetupResponse>): SetupResponse {
    return SetupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetupResponse>): SetupResponse {
    const message = createBaseSetupResponse();
    message.item = (object.item !== undefined && object.item !== null)
      ? SetupPayloadStatus.fromPartial(object.item)
      : undefined;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBasePaymentRequest(): PaymentRequest {
  return {
    provider: undefined,
    paymentSum: undefined,
    currency: undefined,
    paymentId: undefined,
    payerId: undefined,
    token: undefined,
    subject: undefined,
  };
}

export const PaymentRequest = {
  encode(message: PaymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== undefined) {
      writer.uint32(8).int32(providerToNumber(message.provider));
    }
    if (message.paymentSum !== undefined) {
      writer.uint32(16).int32(message.paymentSum);
    }
    if (message.currency !== undefined) {
      writer.uint32(26).string(message.currency);
    }
    if (message.paymentId !== undefined) {
      writer.uint32(34).string(message.paymentId);
    }
    if (message.payerId !== undefined) {
      writer.uint32(42).string(message.payerId);
    }
    if (message.token !== undefined) {
      writer.uint32(50).string(message.token);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.provider = providerFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.paymentSum = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.paymentId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payerId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.token = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentRequest {
    return {
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : undefined,
      paymentSum: isSet(object.paymentSum) ? Number(object.paymentSum) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
      paymentId: isSet(object.paymentId) ? String(object.paymentId) : undefined,
      payerId: isSet(object.payerId) ? String(object.payerId) : undefined,
      token: isSet(object.token) ? String(object.token) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PaymentRequest): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = message.provider !== undefined ? providerToJSON(message.provider) : undefined);
    message.paymentSum !== undefined && (obj.paymentSum = Math.round(message.paymentSum));
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.payerId !== undefined && (obj.payerId = message.payerId);
    message.token !== undefined && (obj.token = message.token);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentRequest>): PaymentRequest {
    return PaymentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentRequest>): PaymentRequest {
    const message = createBasePaymentRequest();
    message.provider = object.provider ?? undefined;
    message.paymentSum = object.paymentSum ?? undefined;
    message.currency = object.currency ?? undefined;
    message.paymentId = object.paymentId ?? undefined;
    message.payerId = object.payerId ?? undefined;
    message.token = object.token ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseCaptureRequest(): CaptureRequest {
  return { provider: undefined, paymentSum: undefined, currency: undefined, paymentId: undefined, subject: undefined };
}

export const CaptureRequest = {
  encode(message: CaptureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== undefined) {
      writer.uint32(8).int32(providerToNumber(message.provider));
    }
    if (message.paymentSum !== undefined) {
      writer.uint32(16).int32(message.paymentSum);
    }
    if (message.currency !== undefined) {
      writer.uint32(26).string(message.currency);
    }
    if (message.paymentId !== undefined) {
      writer.uint32(34).string(message.paymentId);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CaptureRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.provider = providerFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.paymentSum = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.paymentId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CaptureRequest {
    return {
      provider: isSet(object.provider) ? providerFromJSON(object.provider) : undefined,
      paymentSum: isSet(object.paymentSum) ? Number(object.paymentSum) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
      paymentId: isSet(object.paymentId) ? String(object.paymentId) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: CaptureRequest): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = message.provider !== undefined ? providerToJSON(message.provider) : undefined);
    message.paymentSum !== undefined && (obj.paymentSum = Math.round(message.paymentSum));
    message.currency !== undefined && (obj.currency = message.currency);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CaptureRequest>): CaptureRequest {
    return CaptureRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CaptureRequest>): CaptureRequest {
    const message = createBaseCaptureRequest();
    message.provider = object.provider ?? undefined;
    message.paymentSum = object.paymentSum ?? undefined;
    message.currency = object.currency ?? undefined;
    message.paymentId = object.paymentId ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePaymentPayload(): PaymentPayload {
  return { paymentId: "", executedOn: "" };
}

export const PaymentPayload = {
  encode(message: PaymentPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentId !== "") {
      writer.uint32(10).string(message.paymentId);
    }
    if (message.executedOn !== "") {
      writer.uint32(18).string(message.executedOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paymentId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.executedOn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentPayload {
    return {
      paymentId: isSet(object.paymentId) ? String(object.paymentId) : "",
      executedOn: isSet(object.executedOn) ? String(object.executedOn) : "",
    };
  },

  toJSON(message: PaymentPayload): unknown {
    const obj: any = {};
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.executedOn !== undefined && (obj.executedOn = message.executedOn);
    return obj;
  },

  create(base?: DeepPartial<PaymentPayload>): PaymentPayload {
    return PaymentPayload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentPayload>): PaymentPayload {
    const message = createBasePaymentPayload();
    message.paymentId = object.paymentId ?? "";
    message.executedOn = object.executedOn ?? "";
    return message;
  },
};

function createBasePaymentPayloadStatus(): PaymentPayloadStatus {
  return { payload: undefined, status: undefined };
}

export const PaymentPayloadStatus = {
  encode(message: PaymentPayloadStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      PaymentPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentPayloadStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentPayloadStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = PaymentPayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentPayloadStatus {
    return {
      payload: isSet(object.payload) ? PaymentPayload.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PaymentPayloadStatus): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? PaymentPayload.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentPayloadStatus>): PaymentPayloadStatus {
    return PaymentPayloadStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentPayloadStatus>): PaymentPayloadStatus {
    const message = createBasePaymentPayloadStatus();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? PaymentPayload.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePaymentResponse(): PaymentResponse {
  return { item: undefined, operationStatus: undefined };
}

export const PaymentResponse = {
  encode(message: PaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item !== undefined) {
      PaymentPayloadStatus.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    if (message.operationStatus !== undefined) {
      OperationStatus.encode(message.operationStatus, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.item = PaymentPayloadStatus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationStatus = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentResponse {
    return {
      item: isSet(object.item) ? PaymentPayloadStatus.fromJSON(object.item) : undefined,
      operationStatus: isSet(object.operationStatus) ? OperationStatus.fromJSON(object.operationStatus) : undefined,
    };
  },

  toJSON(message: PaymentResponse): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = message.item ? PaymentPayloadStatus.toJSON(message.item) : undefined);
    message.operationStatus !== undefined &&
      (obj.operationStatus = message.operationStatus ? OperationStatus.toJSON(message.operationStatus) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PaymentResponse>): PaymentResponse {
    return PaymentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentResponse>): PaymentResponse {
    const message = createBasePaymentResponse();
    message.item = (object.item !== undefined && object.item !== null)
      ? PaymentPayloadStatus.fromPartial(object.item)
      : undefined;
    message.operationStatus = (object.operationStatus !== undefined && object.operationStatus !== null)
      ? OperationStatus.fromPartial(object.operationStatus)
      : undefined;
    return message;
  },
};

function createBasePaymentCard(): PaymentCard {
  return {
    primaryNumber: undefined,
    firstName: undefined,
    lastName: undefined,
    month: undefined,
    year: undefined,
    verificationValue: undefined,
  };
}

export const PaymentCard = {
  encode(message: PaymentCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryNumber !== undefined) {
      writer.uint32(10).string(message.primaryNumber);
    }
    if (message.firstName !== undefined) {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(26).string(message.lastName);
    }
    if (message.month !== undefined) {
      writer.uint32(34).string(message.month);
    }
    if (message.year !== undefined) {
      writer.uint32(40).int32(message.year);
    }
    if (message.verificationValue !== undefined) {
      writer.uint32(50).string(message.verificationValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primaryNumber = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.month = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.year = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.verificationValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentCard {
    return {
      primaryNumber: isSet(object.primaryNumber) ? String(object.primaryNumber) : undefined,
      firstName: isSet(object.firstName) ? String(object.firstName) : undefined,
      lastName: isSet(object.lastName) ? String(object.lastName) : undefined,
      month: isSet(object.month) ? String(object.month) : undefined,
      year: isSet(object.year) ? Number(object.year) : undefined,
      verificationValue: isSet(object.verificationValue) ? String(object.verificationValue) : undefined,
    };
  },

  toJSON(message: PaymentCard): unknown {
    const obj: any = {};
    message.primaryNumber !== undefined && (obj.primaryNumber = message.primaryNumber);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.month !== undefined && (obj.month = message.month);
    message.year !== undefined && (obj.year = Math.round(message.year));
    message.verificationValue !== undefined && (obj.verificationValue = message.verificationValue);
    return obj;
  },

  create(base?: DeepPartial<PaymentCard>): PaymentCard {
    return PaymentCard.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PaymentCard>): PaymentCard {
    const message = createBasePaymentCard();
    message.primaryNumber = object.primaryNumber ?? undefined;
    message.firstName = object.firstName ?? undefined;
    message.lastName = object.lastName ?? undefined;
    message.month = object.month ?? undefined;
    message.year = object.year ?? undefined;
    message.verificationValue = object.verificationValue ?? undefined;
    return message;
  },
};

function createBaseItem(): Item {
  return { name: undefined, description: undefined, quantity: undefined, amount: undefined };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.quantity !== undefined) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.amount !== undefined) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.quantity = object.quantity ?? undefined;
    message.amount = object.amount ?? undefined;
    return message;
  },
};

export type PaymentServiceDefinition = typeof PaymentServiceDefinition;
export const PaymentServiceDefinition = {
  name: "PaymentService",
  fullName: "io.restorecommerce.payment.PaymentService",
  methods: {
    /** Wrapper for setup_authorization in ActiveMerchant */
    setupAuthorization: {
      name: "SetupAuthorization",
      requestType: SetupRequest,
      requestStream: false,
      responseType: SetupResponse,
      responseStream: false,
      options: {},
    },
    /** Wrapper for setup_purchase in ActiveMerchant */
    setupPurchase: {
      name: "SetupPurchase",
      requestType: SetupRequest,
      requestStream: false,
      responseType: SetupResponse,
      responseStream: false,
      options: {},
    },
    /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
    authorize: {
      name: "Authorize",
      requestType: PaymentRequest,
      requestStream: false,
      responseType: PaymentResponse,
      responseStream: false,
      options: {},
    },
    /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
    purchase: {
      name: "Purchase",
      requestType: PaymentRequest,
      requestStream: false,
      responseType: PaymentResponse,
      responseStream: false,
      options: {},
    },
    /** Can capture both cardless and standard authorization. */
    capture: {
      name: "Capture",
      requestType: CaptureRequest,
      requestStream: false,
      responseType: PaymentResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface PaymentServiceImplementation<CallContextExt = {}> {
  /** Wrapper for setup_authorization in ActiveMerchant */
  setupAuthorization(request: SetupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetupResponse>>;
  /** Wrapper for setup_purchase in ActiveMerchant */
  setupPurchase(request: SetupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetupResponse>>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  authorize(request: PaymentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PaymentResponse>>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  purchase(request: PaymentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PaymentResponse>>;
  /** Can capture both cardless and standard authorization. */
  capture(request: CaptureRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PaymentResponse>>;
}

export interface PaymentServiceClient<CallOptionsExt = {}> {
  /** Wrapper for setup_authorization in ActiveMerchant */
  setupAuthorization(
    request: DeepPartial<SetupRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetupResponse>;
  /** Wrapper for setup_purchase in ActiveMerchant */
  setupPurchase(request: DeepPartial<SetupRequest>, options?: CallOptions & CallOptionsExt): Promise<SetupResponse>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  authorize(request: DeepPartial<PaymentRequest>, options?: CallOptions & CallOptionsExt): Promise<PaymentResponse>;
  /** Gets payment details by token or transaction. Only supported by PayPal Express Checkout. */
  purchase(request: DeepPartial<PaymentRequest>, options?: CallOptions & CallOptionsExt): Promise<PaymentResponse>;
  /** Can capture both cardless and standard authorization. */
  capture(request: DeepPartial<CaptureRequest>, options?: CallOptions & CallOptionsExt): Promise<PaymentResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/payment.proto",
    "package": "io.restorecommerce.payment",
    "dependency": [
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "SetupRequest",
      "field": [{
        "name": "ip",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ip",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "items",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.payment.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "subtotal",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "subtotal",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "shipping",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "shipping",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "handling",
        "number": 5,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "handling",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "tax",
        "number": 6,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "tax",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "currency",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "currency",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "return_url",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 6,
        "jsonName": "returnUrl",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "cancel_return_url",
        "number": 9,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 7,
        "jsonName": "cancelReturnUrl",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "allow_guest_checkout",
        "number": 10,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 8,
        "jsonName": "allowGuestCheckout",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "provider",
        "number": 11,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.payment.Provider",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 9,
        "jsonName": "provider",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 10,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_ip", "options": undefined },
        { "name": "_subtotal", "options": undefined },
        { "name": "_shipping", "options": undefined },
        { "name": "_handling", "options": undefined },
        { "name": "_tax", "options": undefined },
        { "name": "_currency", "options": undefined },
        { "name": "_return_url", "options": undefined },
        { "name": "_cancel_return_url", "options": undefined },
        { "name": "_allow_guest_checkout", "options": undefined },
        { "name": "_provider", "options": undefined },
        { "name": "_subject", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetupPayload",
      "field": [{
        "name": "token",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "confirm_initiation_url",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "confirmInitiationUrl",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "initiated_on",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "initiatedOn",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetupPayloadStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.payment.SetupPayload",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetupResponse",
      "field": [{
        "name": "item",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.payment.SetupPayloadStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "item",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentRequest",
      "field": [{
        "name": "provider",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.payment.Provider",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "provider",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_sum",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "paymentSum",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "currency",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "currency",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "paymentId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payer_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "payerId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "token",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "token",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_provider", "options": undefined },
        { "name": "_payment_sum", "options": undefined },
        { "name": "_currency", "options": undefined },
        { "name": "_payment_id", "options": undefined },
        { "name": "_payer_id", "options": undefined },
        { "name": "_token", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CaptureRequest",
      "field": [{
        "name": "provider",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".io.restorecommerce.payment.Provider",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "provider",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_sum",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "paymentSum",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "currency",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "currency",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "payment_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "paymentId",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 5,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_provider", "options": undefined }, { "name": "_payment_sum", "options": undefined }, {
        "name": "_currency",
        "options": undefined,
      }, { "name": "_payment_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentPayload",
      "field": [{
        "name": "payment_id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "paymentId",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "executed_on",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "executedOn",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentPayloadStatus",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.payment.PaymentPayload",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentResponse",
      "field": [{
        "name": "item",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.payment.PaymentPayloadStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "item",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentCard",
      "field": [{
        "name": "primary_number",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "primaryNumber",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "first_name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "firstName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "last_name",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "lastName",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "month",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "month",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "year",
        "number": 5,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "year",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "verification_value",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "verificationValue",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_primary_number", "options": undefined },
        { "name": "_first_name", "options": undefined },
        { "name": "_last_name", "options": undefined },
        { "name": "_month", "options": undefined },
        { "name": "_year", "options": undefined },
        { "name": "_verification_value", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Item",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "quantity",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "quantity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "amount",
        "number": 4,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_name", "options": undefined }, { "name": "_description", "options": undefined }, {
        "name": "_quantity",
        "options": undefined,
      }, { "name": "_amount", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [{
      "name": "Provider",
      "value": [
        { "name": "NO_PROVIDER", "number": 0, "options": undefined },
        { "name": "Adyen", "number": 1, "options": undefined },
        { "name": "AuthorizeNetCIM", "number": 2, "options": undefined },
        { "name": "AuthorizeNet", "number": 3, "options": undefined },
        { "name": "AxcessMS", "number": 4, "options": undefined },
        { "name": "Balanced", "number": 5, "options": undefined },
        { "name": "BamboraAsiaPacific", "number": 6, "options": undefined },
        { "name": "BankFrick", "number": 7, "options": undefined },
        { "name": "Banwire", "number": 8, "options": undefined },
        { "name": "BarclaysePDQExtraPlus", "number": 9, "options": undefined },
        { "name": "Be2Bill", "number": 10, "options": undefined },
        { "name": "Beanstreamcom", "number": 11, "options": undefined },
        { "name": "BluePay", "number": 12, "options": undefined },
        { "name": "Borgun", "number": 13, "options": undefined },
        { "name": "Braintree", "number": 14, "options": undefined },
        { "name": "BridgePay", "number": 15, "options": undefined },
        { "name": "Cardknox", "number": 16, "options": undefined },
        { "name": "CardSave", "number": 17, "options": undefined },
        { "name": "CardStream", "number": 18, "options": undefined },
        { "name": "Cashnet", "number": 19, "options": undefined },
        { "name": "Cecabank", "number": 20, "options": undefined },
        { "name": "Cenpos", "number": 21, "options": undefined },
        { "name": "CAMSCentralAccountManagementSystem", "number": 22, "options": undefined },
        { "name": "Checkoutcom", "number": 23, "options": undefined },
        { "name": "Clearhaus", "number": 24, "options": undefined },
        { "name": "Commercegate", "number": 25, "options": undefined },
        { "name": "Conekta", "number": 26, "options": undefined },
        { "name": "CyberSource", "number": 27, "options": undefined },
        { "name": "DIBS", "number": 28, "options": undefined },
        { "name": "DataCash", "number": 29, "options": undefined },
        { "name": "Efsnet", "number": 30, "options": undefined },
        { "name": "ElavonMyVirtualMerchant", "number": 31, "options": undefined },
        { "name": "ePay", "number": 32, "options": undefined },
        { "name": "EVOCanada", "number": 33, "options": undefined },
        { "name": "eWAY", "number": 34, "options": undefined },
        { "name": "eWAYRapid", "number": 35, "options": undefined },
        { "name": "Exact", "number": 36, "options": undefined },
        { "name": "Ezic", "number": 37, "options": undefined },
        { "name": "FatZebra", "number": 38, "options": undefined },
        { "name": "FederatedCanada", "number": 39, "options": undefined },
        { "name": "FinansbankWebPOS", "number": 40, "options": undefined },
        { "name": "Flo2Cash", "number": 41, "options": undefined },
        { "name": "stPayGatewayNet", "number": 42, "options": undefined },
        { "name": "FirstDataGlobalGatewaye4", "number": 43, "options": undefined },
        { "name": "FirstGiving", "number": 44, "options": undefined },
        { "name": "GarantiSanalPOS", "number": 45, "options": undefined },
        { "name": "GlobalTransport", "number": 46, "options": undefined },
        { "name": "HDFC", "number": 47, "options": undefined },
        { "name": "HeartlandPaymentSystems", "number": 48, "options": undefined },
        { "name": "iATSPayments", "number": 49, "options": undefined },
        { "name": "InspireCommerce", "number": 50, "options": undefined },
        { "name": "InstaPay", "number": 51, "options": undefined },
        { "name": "IPP", "number": 52, "options": undefined },
        { "name": "Iridium", "number": 53, "options": undefined },
        { "name": "iTransact", "number": 54, "options": undefined },
        { "name": "JetPay", "number": 55, "options": undefined },
        { "name": "Komoju", "number": 56, "options": undefined },
        { "name": "LinkPoint", "number": 57, "options": undefined },
        { "name": "LitleCo", "number": 58, "options": undefined },
        { "name": "maxiPago", "number": 59, "options": undefined },
        { "name": "MerchanteSolutions", "number": 60, "options": undefined },
        { "name": "MerchantOneGateway", "number": 61, "options": undefined },
        { "name": "MerchantWARE", "number": 62, "options": undefined },
        { "name": "MerchantWarrior", "number": 63, "options": undefined },
        { "name": "Mercury", "number": 64, "options": undefined },
        { "name": "MetricsGlobal", "number": 65, "options": undefined },
        { "name": "MasterCardInternetGatewayServiceMiGS", "number": 66, "options": undefined },
        { "name": "ModernPayments", "number": 67, "options": undefined },
        { "name": "MONEI", "number": 68, "options": undefined },
        { "name": "Moneris", "number": 69, "options": undefined },
        { "name": "MoneyMovers", "number": 70, "options": undefined },
        { "name": "NABTransact", "number": 71, "options": undefined },
        { "name": "NELiXTransaX", "number": 72, "options": undefined },
        { "name": "NetRegistry", "number": 73, "options": undefined },
        { "name": "BBSNetaxept", "number": 74, "options": undefined },
        { "name": "NETbilling", "number": 75, "options": undefined },
        { "name": "NETPAYGateway", "number": 76, "options": undefined },
        { "name": "NMI", "number": 77, "options": undefined },
        { "name": "Ogone", "number": 78, "options": undefined },
        { "name": "Omise", "number": 79, "options": undefined },
        { "name": "Openpay", "number": 80, "options": undefined },
        { "name": "OptimalPayments", "number": 81, "options": undefined },
        { "name": "OrbitalPaymentech", "number": 82, "options": undefined },
        { "name": "Pagarme", "number": 83, "options": undefined },
        { "name": "PagoFacil", "number": 84, "options": undefined },
        { "name": "PayConex", "number": 85, "options": undefined },
        { "name": "PayGatePayXML", "number": 86, "options": undefined },
        { "name": "PayHub", "number": 87, "options": undefined },
        { "name": "PayJunction", "number": 89, "options": undefined },
        { "name": "PaySecure", "number": 90, "options": undefined },
        { "name": "PayboxDirect", "number": 91, "options": undefined },
        { "name": "Payeezy", "number": 92, "options": undefined },
        { "name": "Payex", "number": 93, "options": undefined },
        { "name": "PaymentExpress", "number": 94, "options": undefined },
        { "name": "PAYMILL", "number": 95, "options": undefined },
        { "name": "PayPalExpressCheckout", "number": 96, "options": undefined },
        { "name": "PayPalExpressCheckoutUK", "number": 97, "options": undefined },
        { "name": "PayPalPayflowPro", "number": 98, "options": undefined },
        { "name": "PayPalPaymentsProUS", "number": 99, "options": undefined },
        { "name": "PayPalPaymentsProUK", "number": 100, "options": undefined },
        { "name": "PayPalWebsitePaymentsProCA", "number": 101, "options": undefined },
        { "name": "PayPalExpressCheckoutforDigitalGoods", "number": 102, "options": undefined },
        { "name": "Payscout", "number": 103, "options": undefined },
        { "name": "Paystation", "number": 104, "options": undefined },
        { "name": "PayWay", "number": 105, "options": undefined },
        { "name": "PayUIndia", "number": 106, "options": undefined },
        { "name": "PinPayments", "number": 107, "options": undefined },
        { "name": "PlugnPay", "number": 108, "options": undefined },
        { "name": "Psigate", "number": 109, "options": undefined },
        { "name": "PSLPaymentSolutions", "number": 110, "options": undefined },
        { "name": "QuickBooksMerchantServices", "number": 111, "options": undefined },
        { "name": "QuickBooksPayments", "number": 112, "options": undefined },
        { "name": "QuantumGateway", "number": 113, "options": undefined },
        { "name": "QuickPay", "number": 114, "options": undefined },
        { "name": "Qvalent", "number": 115, "options": undefined },
        { "name": "Raven", "number": 116, "options": undefined },
        { "name": "Realex", "number": 117, "options": undefined },
        { "name": "Redsys", "number": 118, "options": undefined },
        { "name": "S5", "number": 119, "options": undefined },
        { "name": "SagePay", "number": 120, "options": undefined },
        { "name": "SagePaymentSolutions", "number": 121, "options": undefined },
        { "name": "SallieMae", "number": 122, "options": undefined },
        { "name": "SecureNet", "number": 123, "options": undefined },
        { "name": "SecurePay", "number": 124, "options": undefined },
        { "name": "SecurePayTech", "number": 125, "options": undefined },
        { "name": "SecurionPay", "number": 126, "options": undefined },
        { "name": "SkipJack", "number": 127, "options": undefined },
        { "name": "SoEasyPay", "number": 128, "options": undefined },
        { "name": "Spreedly", "number": 129, "options": undefined },
        { "name": "Stripe", "number": 130, "options": undefined },
        { "name": "Swipe", "number": 131, "options": undefined },
        { "name": "TNS", "number": 132, "options": undefined },
        { "name": "TransactPro", "number": 133, "options": undefined },
        { "name": "TransFirst", "number": 134, "options": undefined },
        { "name": "Transnational", "number": 135, "options": undefined },
        { "name": "Trexle", "number": 136, "options": undefined },
        { "name": "TrustCommerce", "number": 137, "options": undefined },
        { "name": "USAePay", "number": 138, "options": undefined },
        { "name": "VancoPaymentSolutions", "number": 139, "options": undefined },
        { "name": "Verifi", "number": 140, "options": undefined },
        { "name": "ViaKLIX", "number": 141, "options": undefined },
        { "name": "WebPay", "number": 142, "options": undefined },
        { "name": "WePay", "number": 143, "options": undefined },
        { "name": "Wirecard", "number": 144, "options": undefined },
        { "name": "WorldpayGlobal", "number": 145, "options": undefined },
        { "name": "WorldpayOnline", "number": 146, "options": undefined },
        { "name": "WorldpayUS", "number": 147, "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PaymentIdType",
      "value": [{ "name": "NO_IDENTIFIER_TYPE", "number": 0, "options": undefined }, {
        "name": "TOKEN",
        "number": 1,
        "options": undefined,
      }, { "name": "TRANSACTION_ID", "number": 2, "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "service": [{
      "name": "PaymentService",
      "method": [{
        "name": "SetupAuthorization",
        "inputType": ".io.restorecommerce.payment.SetupRequest",
        "outputType": ".io.restorecommerce.payment.SetupResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "SetupPurchase",
        "inputType": ".io.restorecommerce.payment.SetupRequest",
        "outputType": ".io.restorecommerce.payment.SetupResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Authorize",
        "inputType": ".io.restorecommerce.payment.PaymentRequest",
        "outputType": ".io.restorecommerce.payment.PaymentResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Purchase",
        "inputType": ".io.restorecommerce.payment.PaymentRequest",
        "outputType": ".io.restorecommerce.payment.PaymentResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Capture",
        "inputType": ".io.restorecommerce.payment.CaptureRequest",
        "outputType": ".io.restorecommerce.payment.PaymentResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [6, 0, 2, 0],
        "span": [8, 2, 64],
        "leadingComments": " Wrapper for setup_authorization in ActiveMerchant\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 1],
        "span": [11, 2, 59],
        "leadingComments": " Wrapper for setup_purchase in ActiveMerchant\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 2],
        "span": [14, 2, 59],
        "leadingComments":
          " Gets payment details by token or transaction. Only supported by PayPal Express Checkout.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 3],
        "span": [17, 2, 58],
        "leadingComments":
          " Gets payment details by token or transaction. Only supported by PayPal Express Checkout.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [6, 0, 2, 4],
        "span": [20, 2, 57],
        "leadingComments": " Can capture both cardless and standard authorization.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [24, 0, 37, 1],
        "leadingComments": " Request object for setup calls\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [51, 0, 54, 1],
        "leadingComments": " Response object for setup calls.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [57, 0, 65, 1],
        "leadingComments": " Request object for authorization or purchase call for cardless payment.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [68, 0, 74, 1],
        "leadingComments": " Request object for capture call for both standard and cardless payments.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [88, 0, 91, 1],
        "leadingComments":
          " Unified response object for authorization, purchase and capture calls\n for both standard and cardless payments.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9],
        "span": [94, 0, 101, 1],
        "leadingComments": " Used for building ActiveMerchant::Billing::CreditCard instance.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10],
        "span": [104, 0, 109, 1],
        "leadingComments": " Represents purchased item. Not all providers support this.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 0],
        "span": [112, 0, 260, 1],
        "leadingComments": " Possible service providers. Provider names must be exactly as in config.yml.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [5, 1],
        "span": [263, 0, 267, 1],
        "leadingComments": " Possible payment identifiers.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
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
  dependencies: [protoMetadata1, protoMetadata2, protoMetadata3],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
