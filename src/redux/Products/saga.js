import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { products } from "./constant";
import {
  addDraftProductApi,
  addPriceZoneApi,
  editMasterAndAssignExportApi,
  getAddPriceZoneFilterValuesApi,
  getExportListLinkApi,
  getFieldsFromSubGroupsApi,
  getFiltersDropdownValuesApi,
  getMasterPriceZoneFilterApi,
  getPriceZoneListApi,
  getPriceZoneMasterProductApi,
  getProductGroupsFromActivitiesApi,
  getProductsApi,
  getSubGroupsApi,
  getSubGroupsFromGroupsApi,
} from "./api";

function* getProductsSagaFunction({ payload }) {
  try {
    yield put({
      type: products.GET_PRODUCTS_LOADING,
      payload: {},
    });
    const response = yield call(getProductsApi, payload || {});
    if (response.status == 200) {
      yield put({
        type: products.GET_PRODUCTS_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_PRODUCTS_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    console.log(error, "payload");
    yield put({
      type: products.GET_PRODUCTS_FAILURE,
      payload: error?.data,
    });
  }
}

function* getSubGroupsSagaFunction(data) {
  try {
    yield put({
      type: products.GET_SUB_GROUPS_LOADING,
      payload: {},
    });
    const response = yield call(getSubGroupsApi);
    if (response.status == 200) {
      yield put({
        type: products.GET_SUB_GROUPS_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_SUB_GROUPS_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_SUB_GROUPS_FAILURE,
      payload: error?.data,
    });
  }
}

function* getFiltersDropdownValuesSagaFunction(data) {
  try {
    yield put({
      type: products.FILTERS_DROPDOWN_VALUES_LOADING,
      payload: {},
    });
    const response = yield call(getFiltersDropdownValuesApi);
    if (response.status == 200) {
      yield put({
        type: products.FILTERS_DROPDOWN_VALUES_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.FILTERS_DROPDOWN_VALUES_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.FILTERS_DROPDOWN_VALUES_FAILURE,
      payload: error?.data,
    });
  }
}

function* addDraftProductSagaFunction(data) {
  try {
    yield put({
      type: products.ADD_DRAFT_PRODUCT_LOADING,
      payload: {},
    });
    const response = yield call(addDraftProductApi, data);
    if (response.status == 200) {
      yield put({
        type: products.ADD_DRAFT_PRODUCT_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.ADD_DRAFT_PRODUCT_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.ADD_DRAFT_PRODUCT_FAILURE,
      payload: error,
    });
  }
}

function* addPriceZoneSagaFunction(data) {
  try {
    yield put({
      type: products.ADD_DRAFT_PRICE_ZONE_LOADING,
      payload: {},
    });
    const response = yield call(addPriceZoneApi, data);
    if (response.status == 200) {
      yield put({
        type: products.ADD_DRAFT_PRICE_ZONE_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.ADD_DRAFT_PRICE_ZONE_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.ADD_DRAFT_PRICE_ZONE_FAILURE,
      payload: error?.data,
    });
  }
}

function* getSubGroupsFromGroupsSagaFunction(data) {
  try {
    yield put({
      type: products.GET_SUB_GROUPS_FROM_GROUPS_LOADING,
      payload: {},
    });
    const response = yield call(getSubGroupsFromGroupsApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_SUB_GROUPS_FROM_GROUPS_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_SUB_GROUPS_FROM_GROUPS_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_SUB_GROUPS_FROM_GROUPS_FAILURE,
      payload: error?.data,
    });
  }
}

function* getProductGroupsFromActivitiesFunction(data) {
  try {
    yield put({
      type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_LOADING,
      payload: {},
    });
    const response = yield call(getProductGroupsFromActivitiesApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES_FAILURE,
      payload: error?.data,
    });
  }
}

function* getFieldsFromSubGroupsFunction(data) {
  try {
    yield put({
      type: products.GET_FIELDS_FROM_SUB_GROUPS_LOADING,
      payload: {},
    });
    const response = yield call(getFieldsFromSubGroupsApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_FIELDS_FROM_SUB_GROUPS_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_FIELDS_FROM_SUB_GROUPS_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_FIELDS_FROM_SUB_GROUPS_FAILURE,
      payload: error?.data,
    });
  }
}

function* getPriceZoneListFunction(data) {
  try {
    yield put({
      type: products.GET_PRICE_ZONE_LIST_LOADING,
      payload: {},
    });
    const response = yield call(getPriceZoneListApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_PRICE_ZONE_LIST_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_PRICE_ZONE_LIST_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_PRICE_ZONE_LIST_FAILURE,
      payload: error?.data,
    });
  }
}

function* getAddPriceZoneFilterValuesFunction(data) {
  try {
    yield put({
      type: products.GET_ADD_PRICE_ZONE_VALUES_LOADING,
      payload: {},
    });
    const response = yield call(getAddPriceZoneFilterValuesApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_ADD_PRICE_ZONE_VALUES_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_ADD_PRICE_ZONE_VALUES_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_ADD_PRICE_ZONE_VALUES_FAILURE,
      payload: error?.data,
    });
  }
}

function* getMasterPriceZoneFunction(data) {
  try {
    yield put({
      type: products.GET_MASTER_PRICE_ZONE_LOADING,
      payload: {},
    });
    const response = yield call(getPriceZoneMasterProductApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_MASTER_PRICE_ZONE_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_MASTER_PRICE_ZONE_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_MASTER_PRICE_ZONE_FAILURE,
      payload: error?.data,
    });
  }
}

function* getMasterPriceZoneFilterFunction(data) {
  try {
    yield put({
      type: products.GET_MASTER_PRICE_ZONE_FILTER_LOADING,
      payload: {},
    });
    const response = yield call(getMasterPriceZoneFilterApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_MASTER_PRICE_ZONE_FILTER_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_MASTER_PRICE_ZONE_FILTER_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_MASTER_PRICE_ZONE_FILTER_FAILURE,
      payload: error?.data,
    });
  }
}

function* getExportListLinkFunction(data) {
  try {
    yield put({
      type: products.GET_EXPORT_LIST_LINK_LOADING,
      payload: {},
    });
    const response = yield call(getExportListLinkApi, data);
    if (response.status == 200) {
      yield put({
        type: products.GET_EXPORT_LIST_LINK_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.GET_EXPORT_LIST_LINK_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.GET_EXPORT_LIST_LINK_FAILURE,
      payload: error?.data,
    });
  }
}

function* editMasterAndAssignExportSagaFunction(data) {
  try {
    yield put({
      type: products.EDIT_MASTER_AND_ASSIGN_EXPORT_LOADING,
      payload: {},
    });
    const response = yield call(editMasterAndAssignExportApi, data);
    if (response.status == 200) {
      yield put({
        type: products.EDIT_MASTER_AND_ASSIGN_EXPORT_SUCCESS,
        payload: { ...response.data },
      });
    } else {
      yield put({
        type: products.EDIT_MASTER_AND_ASSIGN_EXPORT_FAILURE,
        payload: { ...response.data },
      });
    }
  } catch (error) {
    yield put({
      type: products.EDIT_MASTER_AND_ASSIGN_EXPORT_FAILURE,
      payload: error?.data,
    });
  }
}

function* tabChangeSagaFunction(data) {
  try {
    yield put({
      type: products.TAB_CHANGE_LOADING,
      payload: {},
    });
    // if (response.status == 200) {
    //   yield put({
    //     type: products.TAB_CHANGE_SUCCESS,
    //     payload: { ...response.data },
    //   });
    // } else {
    //   yield put({
    //     type: products.TAB_CHANGE_FAILURE,
    //     payload: { ...response.data },
    //   });
    // }
    yield put({
      type: products.TAB_CHANGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: products.TAB_CHANGE_FAILURE,
      payload: error?.data,
    });
  }
}

function* filterSetSagaFunction(data) {
  try {
    yield put({
      type: products.FILTER_SET_LOADING,
      payload: {},
    });
    yield put({
      type: products.FILTER_SET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: products.FILTER_SET_FAILURE,
      payload: error?.data,
    });
  }
}

export function* getProductsWatcher() {
  yield takeEvery(products.GET_PRODUCTS, getProductsSagaFunction);
}

export function* getAddPriceZoneFilterValuesWatcher() {
  yield takeEvery(
    products.GET_ADD_PRICE_ZONE_VALUES,
    getAddPriceZoneFilterValuesFunction
  );
}

export function* getPriceZoneListWatcher() {
  yield takeEvery(products.GET_PRICE_ZONE_LIST, getPriceZoneListFunction);
}

export function* getMasterPriceZoneWatcher() {
  yield takeEvery(products.GET_MASTER_PRICE_ZONE, getMasterPriceZoneFunction);
}

export function* addPriceZoneWatcher() {
  yield takeEvery(products.ADD_DRAFT_PRICE_ZONE, addPriceZoneSagaFunction);
}

export function* getProductGroupsFromActivitiesWatcher() {
  yield takeEvery(
    products.GET_PRODUCT_GROUPS_FROM_ACTIVITIES,
    getProductGroupsFromActivitiesFunction
  );
}

export function* getFiltersDropdownValuesWatcher() {
  yield takeEvery(
    products.FILTERS_DROPDOWN_VALUES,
    getFiltersDropdownValuesSagaFunction
  );
}

export function* getSubGroupsWatcher() {
  yield takeEvery(products.GET_SUB_GROUPS, getSubGroupsSagaFunction);
}

export function* getFieldsFromSubGroupWatcher() {
  yield takeEvery(
    products.GET_FIELDS_FROM_SUB_GROUPS,
    getFieldsFromSubGroupsFunction
  );
}

export function* filterSetWatcher() {
  yield takeEvery(products.FILTER_SET, filterSetSagaFunction);
}

export function* addDraftProductWatcher() {
  yield takeEvery(products.ADD_DRAFT_PRODUCT, addDraftProductSagaFunction);
}

export function* tabChangeWatcher() {
  yield takeEvery(products.TAB_CHANGE, tabChangeSagaFunction);
}

export function* subGroupsFromGroupsWatcher() {
  yield takeEvery(
    products.GET_SUB_GROUPS_FROM_GROUPS,
    getSubGroupsFromGroupsSagaFunction
  );
}

export function* masterPriceZoneFilterWatcher() {
  yield takeEvery(
    products.GET_MASTER_PRICE_ZONE_FILTER,
    getMasterPriceZoneFilterFunction
  );
}

export function* getExportListLinkWatcher() {
  yield takeEvery(products.GET_EXPORT_LIST_LINK, getExportListLinkFunction);
}

export function* editMasterAndAssignExportWatcher() {
  yield takeEvery(
    products.EDIT_MASTER_AND_ASSIGN_EXPORT,
    editMasterAndAssignExportSagaFunction
  );
}

function* productsSaga() {
  yield all([
    fork(getProductsWatcher),
    fork(getSubGroupsWatcher),
    fork(tabChangeWatcher),
    fork(addDraftProductWatcher),
    fork(getFiltersDropdownValuesWatcher),
    fork(filterSetWatcher),
    fork(getProductGroupsFromActivitiesWatcher),
    fork(subGroupsFromGroupsWatcher),
    fork(getFieldsFromSubGroupWatcher),
    fork(addPriceZoneWatcher),
    fork(getPriceZoneListWatcher),
    fork(getAddPriceZoneFilterValuesWatcher),
    fork(getMasterPriceZoneWatcher),
    fork(masterPriceZoneFilterWatcher),
    fork(getExportListLinkWatcher),
    fork(editMasterAndAssignExportWatcher),
  ]);
}

export default productsSaga;
