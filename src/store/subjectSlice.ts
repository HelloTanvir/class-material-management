/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const subjectSlice = createSlice({
    name: 'subject',

    initialState: [
        {
            name: 'TP',
            teachers: ['Jalal Sir', 'Shuvo Sir'],
        },
        {
            name: 'CTCA',
            teachers: ['Tomal Sir', 'Solaiman Sir'],
        },
        {
            name: 'WPP',
            teachers: ["Jenny Ma'am", 'Emran Sir'],
        },
        {
            name: 'FM',
            teachers: ['Sayekh Munir Sir', "Asma Ma'am"],
        },
        {
            name: 'AM-1',
            teachers: ["Farzana Ma'am", 'Sazid Sir'],
        },
        {
            name: 'FEEE',
            teachers: ['Mofizul Sir', 'Asaduzzaman Sir'],
        },
    ],

    reducers: {},

    // reducers: {
    //     setOrgInfo: (
    //         state,
    //         action: {
    //             payload: {
    //                 orgName: string;
    //                 website: string;
    //                 country: string;
    //                 orgAddress: string;
    //                 description: string;
    //             };
    //             type: string;
    //         }
    //     ) => {
    //         state.org.name = action.payload.orgName;
    //         state.org.website = action.payload.website;
    //         state.org.country = action.payload.country;
    //         state.org.address = action.payload.orgAddress;
    //         state.org.description = action.payload.description;
    //     },

    //     setPersonalInfo: (
    //         state,
    //         action: {
    //             payload: {
    //                 name: string;
    //                 email: string;
    //                 phone: string;
    //                 address: string;
    //                 role: string;
    //                 password: string;
    //             };
    //             type: string;
    //         }
    //     ) => {
    //         state.name = action.payload.name;
    //         state.email = action.payload.email;
    //         state.phone = action.payload.phone;
    //         state.address = action.payload.address;
    //         state.org.role = action.payload.role;
    //         state.password = action.payload.password;
    //     },
    // },
});

// export const { setOrgInfo, setPersonalInfo } = subjectSlice.actions;

const subjectReducer = subjectSlice.reducer;

export default subjectReducer;
