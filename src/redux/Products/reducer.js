import { products } from "./constant";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_PRODUCTS_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSubGroupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_SUB_GROUPS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_SUB_GROUPS_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_SUB_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const tabChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.TAB_CHANGE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.TAB_CHANGE_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.TAB_CHANGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getFiltersDropdownValuesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case products.FILTERS_DROPDOWN_VALUES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.FILTERS_DROPDOWN_VALUES_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.FILTERS_DROPDOWN_VALUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPriceZoneListReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_PRICE_ZONE_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_PRICE_ZONE_LIST_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_PRICE_ZONE_LIST_RESET:
      return initialState;
    case products.GET_PRICE_ZONE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAddPriceZoneFilterValuesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case products.GET_ADD_PRICE_ZONE_VALUES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_ADD_PRICE_ZONE_VALUES_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_ADD_PRICE_ZONE_VALUES_RESET:
      return initialState;
    case products.GET_ADD_PRICE_ZONE_VALUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addDraftProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.ADD_DRAFT_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.ADD_DRAFT_PRODUCT_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.ADD_DRAFT_PRODUCT_RESET:
      return initialState;
    case products.ADD_DRAFT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const filterSetReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.FILTER_SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.FILTER_SET_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.FILTER_SET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductGroupsFromActivitiesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_RESET:
      return initialState;
    case products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSubGroupsFromGroupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_SUB_GROUPS_FROM_GROUPS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_SUB_GROUPS_FROM_GROUPS_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_SUB_GROUPS_FROM_GROUPS_RESET:
      return initialState;
    case products.GET_SUB_GROUPS_FROM_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getFieldsFromSubGroupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_FIELDS_FROM_SUB_GROUPS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_FIELDS_FROM_SUB_GROUPS_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_FIELDS_FROM_SUB_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addPriceZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.ADD_DRAFT_PRICE_ZONE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.ADD_DRAFT_PRICE_ZONE_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.ADD_DRAFT_PRICE_ZONE_RESET:
      return initialState;
    case products.ADD_DRAFT_PRICE_ZONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMasterPriceZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_MASTER_PRICE_ZONE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_MASTER_PRICE_ZONE_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_MASTER_PRICE_ZONE_RESET:
      return initialState;
    case products.GET_MASTER_PRICE_ZONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMasterPriceZoneFilterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case products.GET_MASTER_PRICE_ZONE_FILTER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_MASTER_PRICE_ZONE_FILTER_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_MASTER_PRICE_ZONE_FILTER_RESET:
      return initialState;
    case products.GET_MASTER_PRICE_ZONE_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getExportListLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case products.GET_EXPORT_LIST_LINK_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.GET_EXPORT_LIST_LINK_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.GET_EXPORT_LIST_LINK_RESET:
      return initialState;
    case products.GET_EXPORT_LIST_LINK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editMasterAndAssignExportReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case products.EDIT_MASTER_AND_ASSIGN_EXPORT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case products.EDIT_MASTER_AND_ASSIGN_EXPORT_SUCCESS:
      return {
        data: action?.payload,
        loading: false,
        error: null,
      };
    case products.EDIT_MASTER_AND_ASSIGN_EXPORT_RESET:
      return initialState;
    case products.EDIT_MASTER_AND_ASSIGN_EXPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
