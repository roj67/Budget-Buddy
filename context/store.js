import { create } from "zustand";
import { AccountList } from "../constants/Options";

export const useSettingStore = create((set) => ({
    email : '',
    updateEmail: (newEmail) => set({ email : newEmail}),

    currency : '',
    updateCurrency: (newCurrency) => set({ currency: newCurrency}),

    settingDetailsList : [],
    updateSettingDetailList: (newSettingDetailsList) => set({ settingDetailsList : newSettingDetailsList })
}))


export const useAccountStore = create((set) => ({
    accountList: AccountList,
    UpdateDetailList: (newAccountList) => set({ accountList: newAccountList })
}))