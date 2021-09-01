import React, {useContext, createContext, useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {useUserContext} from 'auth/userContext';

const PermissionsContext = createContext();

export function PermissionsContextProvider({children}) {
  const [grantedLocation, setGrantedLocation] = useState(null);

  const {updateLocation} = useUserContext();

  const requestLocationPermission = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(refresh);
  };

  const refresh = async () => {
    const res = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    setGrantedLocation(res);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (grantedLocation) {
      updateLocation();
    }
  }, [grantedLocation]);

  return (
    <PermissionsContext.Provider
      value={{grantedLocation, requestLocationPermission}}>
      {children}
    </PermissionsContext.Provider>
  );
}

export function usePermissions() {
  return useContext(PermissionsContext);
}
