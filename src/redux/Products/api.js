import { APICore } from "../../helpers/api/apiCore";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../../constants/endpoint";

const apiService = new APICore();

const getToken = () => localStorage.getItem("token");

const authHeader = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const getProductsApi = async (data) => {
  const { pageNo = 1, pageSize = 10, ...filters } = data || {};
  return apiService.create(`${GET_PRODUCTS}`, { pageNo, pageSize, ...filters });
};

export const getSubGroupsApi = async () => {
  return apiService.get(`${GET_PRODUCTS}/categories`);
};

export const getPriceZoneListApi = async () => {
  return apiService.get(`${GET_PRODUCTS}/price-zones`);
};

export const getAddPriceZoneFilterValuesApi = async (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/price-zone-filters`, { ...payload });
};

export const getFiltersDropdownValuesApi = async () => {
  return apiService.get(`${GET_PRODUCTS}/filter-values`);
};

export const getProductGroupsFromActivitiesApi = async (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/groups`, { activity: payload?.activity || "" });
};

export const addDraftProductApi = async (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/draft`, { ...payload });
};

export const getSubGroupsFromGroupsApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/sub-groups`, {
    groupNo: payload?.groupNo || "",
    subGroupNo: payload?.subGroupNo || "",
  });
};

export const getFieldsFromSubGroupsApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/fields`, {
    subGroupNo: payload?.subGroupNo || "",
  });
};

export const addPriceZoneApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/price-zone`, { ...payload });
};

export const getPriceZoneMasterProductApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/master-price-zone`, {
    posSrl: payload?.Possrl,
    siteGroupId: payload?.SiteGroupID,
  });
};

export const getMasterPriceZoneFilterApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/master-price-zone-filter`, {
    posSrl: payload?.posSrl?.PosSrl,
  });
};

export const getExportListLinkApi = (data) => {
  return apiService.get(`${GET_PRODUCTS}/export-list`);
};

export const editMasterAndAssignExportApi = (data) => {
  const { payload } = data;
  return apiService.create(`${GET_PRODUCTS}/assign-export`, {
    pbExportId: payload?.PBExportID,
    products: payload?.Products,
  });
};
