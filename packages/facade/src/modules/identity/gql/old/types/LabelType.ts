import {
  GraphQLObjectType, GraphQLString, GraphQLList
} from 'graphql';
import * as _ from 'lodash';
import { ErrorType } from './ErrorType';

export const fields = new GraphQLObjectType({
  name: 'fields',
  description: 'labels details',
  fields: () => ({
    labelUrl: {
      type: GraphQLString
    },
    shipmentNumber: {
      type: GraphQLString
    },
    exportLabelUrl: {
      type: GraphQLString
    },
  })
});

export const Labels = {
  labels: {
    type: new GraphQLList(fields)
  }
};

export const labelType = new GraphQLObjectType({
  name: 'labelType',
  description: 'Label output description',
  fields: () => (_.merge({}, Labels, {
    error: {
      type: ErrorType,
    }
  }))
});




export const EventData = new GraphQLObjectType({
  name: 'EventDetails',
  description: 'Each event details',
  fields: () => ({
    Status: {
      type: GraphQLString,
    },
    Location: {
      type: GraphQLString
    },
    Time: {
      type: GraphQLString
    },
    Coutnry: {
      type: GraphQLString
    }
  })
});

export const ShipmentDetailStatus = new GraphQLObjectType({
  name: 'ShipmentDetailStatus',
  description: 'shipment details',
  fields: () => ({
    ShipmentNumber: {
      type: GraphQLString
    },
    Status: {
      type: GraphQLString
    },
    ShortStatus: {
      type: GraphQLString,
    },
    TimeStamp: {
      type: GraphQLString
    },
    Receiver: {
      type: GraphQLString
    },
    ReceipientName: {
      type: GraphQLString,
    },
    Recepientemail: {
      type: GraphQLString
    },
    EventDetails: {
      type: new GraphQLList(EventData)
    }
  })
}
);

const ShipmentArray = new GraphQLObjectType({
  name: 'ShipmentData',
  description: 'shipment data',
  fields: () => ({
    ShipmentData: {
      type: new GraphQLList(ShipmentDetailStatus)
    }
  })
});

export const trackFields = {
  Status: {
    type: GraphQLString
  },
  OrderId: {
    type: GraphQLString
  },
  shipmentStatus: {
    type: new GraphQLList(ShipmentArray)
  }
};

export const TracklabelType = new GraphQLObjectType({
  name: 'TracklabelType',
  description: 'Label output description',
  fields: () => (_.merge({}, trackFields, {
    error: {
      type: ErrorType,
    }
  }))
});

