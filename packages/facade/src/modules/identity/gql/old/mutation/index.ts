import {
  GraphQLObjectType,
} from 'graphql';


import activateUsers from './identity/ActivateUsers';
import registerUser from './identity/RegisterUser';
import changeUserPass from './identity/ChangePassword';
import requestEmailChange from './identity/RequestEmailChange';
import confirmEmailChange from './identity/ConfirmEmailChange';
import activateUser from './identity/ActivateUser';
import unregisterUser from './identity/Unregister';
import updateUsers from './identity/UpdateUsers';
import signInApiKey from './identity/SignInApiKey';
import signInUser from './identity/SignInUser';
import logoutUser from './identity/LogoutUser';
import deleteUsers from './identity/DeleteUsers';
import requestPasswordChange from './identity/RequestPasswordChange';
import confirmPasswordChange from './identity/ConfirmPasswordChange';

import createFulfillment from './resources/create/CreateFulfillment';
import createFulfillmentCourierType from './resources/create/CreateFulfillmentCourier';
import createContactPointTypes from './resources/create/CreateContactPointTypes';
import createRules from './resources/create/CreateRules';
import createPolicies from './resources/create/CreatePolicies';
import createPolicySets from './resources/create/CreatePolicySets';
import createOrders from './resources/create/CreateOrders';
import createManufactures from './resources/create/CreateManufactures';
import createPriceGroups from './resources/create/CreatePriceGroup';
import createProductCategory from './resources/create/CreateProductCategory';
import createProductPrototype from './resources/create/CreateProductPrototype';
import createProducts from './resources/create/CreateProducts';
import createUsers from './identity/CreateUsers';
import createRoles from './resources/create/CreateRoles';
import createOrganizations from './resources/create/CreateOrganizations';
import createAddresses from './resources/create/CreateAddresses';
import createCountries from './resources/create/CreateCountries';
import createContactPoints from './resources/create/CreateContactPoints';
import createTaxes from './resources/create/CreateTaxes';
import createTaxTypes from './resources/create/CreateTaxTypes';
import deleteFiles from './resources/delete/DeleteFiles';
import deleteResources from './resources/delete/DeleteResources';
import createLocations from './resources/create/CreateLocations';
import createLocales from './resources/create/CreateLocales';
import createTimezones from './resources/create/CreateTimezones';
import scheduleJobs from './resources/create/ScheduleJobs';
import createCommands from './resources/create/CreateCommands';
import createCustomer from './resources/create/CreateCustomers';
import executeCommand from './commands/ExecuteCommand';
// import triggerFulfillment from './resources/create/TriggerFulfillments';

import updateAddresses from './resources/update/UpdateAddresses';
import updateContactPointTypes from './resources/update/UpdateContactPointTypes';
import updateCountries from './resources/update/UpdateCountries';
import updateContactPoints from './resources/update/UpdateContactPoints';
import updateLocales from './resources/update/UpdateLocales';
import updateLocations from './resources/update/UpdateLocations';
import updateOrganizations from './resources/update/UpdateOrganizations';
import updatePolicies from './resources/update/UpdatePolicies';
import updatePolicySets from './resources/update/UpdatePolicySets';
import updateRoles from './resources/update/UpdateRoles';
import updateRules from './resources/update/UpdateRules';
import updateTaxes from './resources/update/UpdateTaxes';
import updateTaxTypes from './resources/update/UpdateTaxTypes';
import updateTimezones from './resources/update/UpdateTimezones';
import updateCustomers from './resources/update/UpdateCustomers';
import updateManufactures from './resources/update/UpdateManufactures';
import updateOrders from './resources/update/UpdateOrders';
import updateProductCategory from './resources/update/UpdateProductCategory';
import updateProductPrototype from './resources/update/UpdateProductPrototype';
import updatePriceGroups from './resources/update/UpdatePriceGroups';
import updateProducts from './resources/update/UpdateProducts';
import uploadFile from './resources/create/UploadFile';

import bindOrganizations from './resources/update/BindOrganizations';
import bindLocations from './resources/update/BindLocations';
import deleteOrgData from './resources/delete/DeleteOrgData';

import setSessionScope from './identity/SetSessionScope';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createAddresses,
    createContactPointTypes,
    createContactPoints,
    createCountries,
    createPolicies,
    createPolicySets,
    createRoles,
    createRules,
    createTaxes,
    createTaxTypes,
    createLocales,
    createLocations,
    createTimezones,
    createUsers,
    createOrders,
    createManufactures,
    createPriceGroups,
    createProductCategory,
    createProductPrototype,
    createProducts,
    createCustomer,
    createFulfillment,
    createFulfillmentCourierType,
    deleteUsers,
    createOrganizations,
    createCommands,
    deleteFiles,
    deleteResources,
    registerUser,
    changeUserPass,
    requestEmailChange,
    confirmEmailChange,
    activateUser,
    unregisterUser,
    signInUser,
    signInApiKey,
    logoutUser,
    activateUsers,
    updateUsers,
    scheduleJobs,
    executeCommand,
    //    triggerFulfillment,
    updateAddresses,
    updateContactPointTypes,
    updateCountries,
    updateContactPoints,
    updateLocales,
    updateLocations,
    updateOrganizations,
    updatePolicies,
    updatePolicySets,
    updateRoles,
    updateRules,
    updateTaxes,
    updateTaxTypes,
    updateTimezones,
    updateCustomers,
    updateManufactures,
    updateOrders,
    updateProductCategory,
    updateProductPrototype,
    updateProducts,
    updatePriceGroups,
    uploadFile,
    bindOrganizations,
    bindLocations,
    deleteOrgData,
    requestPasswordChange,
    confirmPasswordChange,
    setSessionScope
  }),
});
