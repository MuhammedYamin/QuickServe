export type HomeStackParamList = {
    Home: undefined;
    ServiceList: { category: string};
    ServiceDetails: { serviceId: string };
    Bookings: undefined;
}

export type MapStackParamList = {
    Map: undefined;
}

export type BookingsStackParamList = {
    Bookings: undefined;
}

export type ProfileStackParamList = {
    Profile: undefined;
    Settings: undefined;
}

export type MainTabParamList = {
    HomeStack: undefined;
    MapStack: undefined;
    BookingsStack: undefined;
    ProfileStack: undefined;
}