import { products } from "./constant";

export const getProductsAction = (data) => {
  return {
    type: products.GET_PRODUCTS,
    payload: data,
  };
};

export const getProductGroupsFromActivitiesAction = (data) => {
  return {
    type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES,
    payload: data,
  };
};

export const getProductGroupsFromActivitiesActionReset = (data) => {
  return {
    type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_RESET,
  };
};

export const getFiltersDropdownValuesAction = (data) => {
  return {
    type: products.FILTERS_DROPDOWN_VALUES,
    payload: data,
  };
};

export const getSubGroupsAction = (data) => ({
  type: products.GET_SUB_GROUPS,
  payload: data,
});

export const showTabAction = (data) => ({
  type: products.TAB_CHANGE,
  payload: data,
});

export const addDraftProductAction = (data) => ({
  type: products.ADD_DRAFT_PRODUCT,
  payload: data,
});

export const addDraftProductActionReset = (data) => ({
  type: products.ADD_DRAFT_PRODUCT_RESET,
  payload: data,
});

export const filterSetAction = (data) => ({
  type: products.FILTER_SET,
  payload: data,
});

export const getSubGroupsFromGroupsAction = (data) => ({
  type: products.GET_SUB_GROUPS_FROM_GROUPS,
  payload: data,
});

export const getSubGroupsFromGroupsActionReset = (data) => ({
  type: products.GET_SUB_GROUPS_FROM_GROUPS_RESET,
});

export const getFieldsFromSubGroupsAction = (data) => ({
  type: products.GET_FIELDS_FROM_SUB_GROUPS,
  payload: data,
});

export const addPriceZoneAction = (data) => ({
  type: products.ADD_DRAFT_PRICE_ZONE,
  payload: data,
});

export const addPriceZoneActionReset = (data) => ({
  type: products.ADD_DRAFT_PRICE_ZONE_RESET,
  payload: data,
});

export const getPriceZoneListAction = (data) => ({
  type: products.GET_PRICE_ZONE_LIST,
  payload: data,
});

export const getAddPriceZoneFilterValuesAction = (data) => ({
  type: products.GET_ADD_PRICE_ZONE_VALUES,
  payload: data,
});

export const getAddPriceZoneFilterValuesActionReset = (data) => ({
  type: products.GET_ADD_PRICE_ZONE_VALUES_RESET,
  payload: data,
});

export const getMasterPriceZone = (data) => ({
  type: products.GET_MASTER_PRICE_ZONE,
  payload: data,
});

export const getMasterPriceZoneFilter = (data) => ({
  type: products.GET_MASTER_PRICE_ZONE_FILTER,
  payload: data,
});

export const getExportListLinkFilter = (data) => ({
  type: products.GET_EXPORT_LIST_LINK,
  payload: data,
});

export const editMasterAndAssignExportFilter = (data) => ({
  type: products.EDIT_MASTER_AND_ASSIGN_EXPORT,
  payload: data,
});

export const editMasterAndAssignExportFilterReset = (data) => ({
  type: products.EDIT_MASTER_AND_ASSIGN_EXPORT_RESET,
  payload: data,
});
