import * as _ from 'lodash';
import {
  GraphQLString, GraphQLInputObjectType, GraphQLEnumType, GraphQLList, GraphQLNonNull, GraphQLObjectType,
  GraphQLInt, GraphQLFloat
} from 'graphql';
// import { fields } from './LabelType';



export const Name = new GraphQLInputObjectType({
  name: 'Name',
  description: 'Name of Shipper',
  fields: () => ({
    name1: {
      type: GraphQLString,
      description: 'name'
    }
  })
});

export const Origin = new GraphQLInputObjectType({
  name: 'Origin',
  description: 'Origin',
  fields: () => ({
    country: {
      type: GraphQLString,
    },
    countryISOCode: {
      type: GraphQLString
    }
  })
});
export const Communication = new GraphQLInputObjectType({
  name: 'Communication',
  description: 'Communication of Shipper/receiver',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'email'
    },
    phone: {
      type: GraphQLString,
      description: 'Phone number of Receiver'
    }
  })
});

export const ExportDocPosition = new GraphQLInputObjectType({
  name: 'ExportDocPosition',
  description: 'ExportDocPosition',
  fields: () => ({
    description: {
      type: GraphQLString,
      description: ' Mandatory description'
    },
    countryCodeOrigin: {
      type: GraphQLString,
      description: 'countryCodeOrigin'
    },
    customsTariffNumber: {
      type: GraphQLString,
      description: 'customsTariffNumber'
    },
    amount: {
      type: GraphQLInt,
      description: 'no of packages, CDR formula ( amount * netweight = weight in KG)'
    },
    netWeightInKG: {
      type: GraphQLInt,
      description: 'netWeightInKG'
    },
    customsValue: {
      type: GraphQLInt,
      description: 'customsValue'
    },
  })
});


export const ExportType = new GraphQLEnumType({
  name: 'ExportType',
  description: 'ExportType',
  values: {
    OTHER: {
      value: 'OTHER'
    },
    PRESENT: {
      value: 'PRESENT'
    },
    DOCUMENT: {
      value: 'DOCUMENT'
    },
    COMMERCIAL_SAMPLE: {
      value: 'COMMERCIAL_SAMPLE'
    },
    RETURN_OF_GOODS: {
      value: 'RETURN_OF_GOODS'
    },
  }
});

export const TermsOfTrade = new GraphQLEnumType({
  name: 'TermsOfTrade',
  description: 'Terms of trade',
  values: {
    DDP: {
      value: 'DDP'
    },
    DXV: {
      value: 'DXV'
    },
    DDU: {
      value: 'DDU'
    },
    DDX: {
      value: 'DDX'
    },
  }
});

export const ExportDocument = new GraphQLInputObjectType({
  name: 'ExportDocument',
  description: 'intl shipment export info',
  fields: () => ({
    invoiceNumber: {
      type: GraphQLString,
      description: 'Invoice number'
    },
    exportType: {
      type: ExportType,
      description: 'only mandatory for international, non EU shipments'
    },
    exportTypeDescription: {
      type: GraphQLString,
      description: 'Only mandatory in case of OTHER export tpye'
    },
    termsOfTrade: {
      type: TermsOfTrade,
      description: 'Enum Type of Trade'
    },
    placeOfCommital: {
      type: GraphQLString,
      description: 'Place of Commital'
    },
    additionalFee: {
      type: GraphQLFloat,
      description: 'Additional fee'
    },
    ExportDocPosition: {
      type: ExportDocPosition,
      description: 'ExportDocPosition details'
    }
  })
});

export const ShipmentItem = new GraphQLInputObjectType({
  name: 'ShipmentItem',
  description: 'ShipmentItem',
  fields: () => ({
    weightInKG: {    // for internationa shipments weight must be below 30.1 kg
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'Weight in KG'
    },
    lengthInCM: {
      type: GraphQLFloat,
      description: 'Length in CM'
    },
    widthInCM: {
      type: GraphQLFloat,
      description: 'Width in CM'
    },
    heightInCM: {
      type: GraphQLFloat,
      description: 'Height  in CM'
    },
    ExportDocument: {
      type: ExportDocument,
      description: 'ExportDocument details for international shipments'
    }
  }
  )
});

export const Address = new GraphQLInputObjectType({
  name: 'Address',
  description: 'Adress of shipper/Receiver',
  fields: () => ({
    streetName: {
      type: GraphQLString,
      description: 'name'
    },
    streetNumber: {
      type: GraphQLString,
      description: 'name'
    },
    addressAddition: {
      type: GraphQLString,
      description: 'Addtional Address'
    },
    zip: {
      type: GraphQLString,
      description: 'Zip Code '
    },
    city: {
      type: GraphQLString,
      description: 'City'
    },
    Origin: {
      type: Origin
    }

  })
});
export const Receiver = new GraphQLInputObjectType({
  name: 'Receiver',
  description: 'Receiver details',
  fields: () => ({
    name1: {
      type: GraphQLString
    },
    Address: {
      type: Address
    },
    Communication: {
      type: Communication
    }

  })
});


export const Shipper = new GraphQLInputObjectType({
  name: 'Shipper',
  description: 'Shipper details',
  fields: () => ({
    Name: {
      type: Name
    },
    Address: {
      type: Address
    },
    Communication: {
      type: Communication
    }

  })
});


export const Notification = new GraphQLInputObjectType({
  name: 'Notification',
  description: 'notification email',
  fields: () => ({
    recipientEmailAddress: {
      type: GraphQLString,
      description: 'email address'
    }
  })
});

export const ShipmentDetails = new GraphQLInputObjectType({
  name: 'ShipmentDetails',
  description: 'shipment details data',
  fields: () => ({
    ShipmentItem: {
      type: ShipmentItem,
      description: 'ShipmentItem'
    }
  })
});





export const Shipment = new GraphQLInputObjectType({
  name: 'shipment',
  description: 'shipment,shiper,receiver and exportDoc details',
  fields: () => ({
    ShipmentDetails: {
      type: new GraphQLList(ShipmentDetails),
      description: 'shipment Data '
    },
    Receiver: {
      type: Receiver,
      description: 'Receiver details'
    },
    Shipper: {
      type: Shipper,
      description: 'Shipper Details'
    },
    Notification: {
      type: Notification,
      description: 'email address for notification'
    },
    customerReference: {
      type: GraphQLString,
      description: 'customerReference'
    },
    returnShipmentAccountNumber: {
      type: GraphQLString,
      description: 'returnShipmentAccountNumber'
    },
    returnShipmentReference: {
      type: GraphQLString,
      description: 'returnShipmentReference'
    },

  })
});

export const ServiceTypeEnum = new GraphQLEnumType({
  name: 'fullFillmentType',
  description: 'Fullfillment service enum type',
  values: {
    DHL: {
      value: 'DHL'
    },
    UPS: {
      value: 'UPS'
    },
  }
});

export const FulfillmentList = new GraphQLInputObjectType({
  name: 'fulfillmentLists',
  description: 'List of fulfillments',
  fields: () => (
    {
      Shipment: {
        type: Shipment,
        description: 'Shipment Data ',
      },
      OrderId: {
        type: GraphQLString,
        description: 'OrderId number ',
      },
      fulFillmentService: {
        type: ServiceTypeEnum,
        description: 'Service which is used for shipment e.g DHL ',
      }
    }
  )
});


export const FulfillmentInputType = new GraphQLInputObjectType({
  name: 'FulfillmentList',
  description: 'List of fulfillments',
  fields: () => ({
    fulfillmentList: {
      type: new GraphQLList(FulfillmentList)
    }
  })
});

export const item = new GraphQLObjectType({
  name: 'item',
  fields: () => ({
    fulfillment_status: {
      type: GraphQLString,
      description: 'stat of fulfillment'
    },
    order_id: {
      type: GraphQLString,
      description: 'order id'
    },
    serviceType: {
      type: GraphQLString,
      description: 'service used for fulfillment'
    },
    shipment_number: {
      type: new GraphQLList(GraphQLString),
      description: 'List of shipment numbers'
    }
  })
});

export const FulfillmentData = new GraphQLObjectType({
  name: 'FulfillmentData',
  description: 'list of all fulfillments in db',
  fields: () => ({
    items: {
      type: new GraphQLList(item)
    }

  })
});

export const FulfillmentStatus = new GraphQLObjectType({
  name: 'FulfillmentStatus',
  description: 'list of all FulfillmentStatus',
  fields: () => ({
    OrderStatus: {
      type: GraphQLString
    },
    OrderId: {
      type: GraphQLString
    }
  })
});