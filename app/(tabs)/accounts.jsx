import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native'
import React, { useMemo, useCallback, useRef, useState } from 'react'
import { Colors } from '../../constants/Colors'
import AccountItem from '../../components/accounts/AccountItem';
import PriceRow from '../../components/accounts/PriceRow';
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountDetail from '../../components/accounts/AccountDetail';
import { useAccountStore } from '../../context/store';

export default function Accounts() {
  const [accountDetail, setAccountDetail] = useState();
  const accountList = useAccountStore((state) => state.accountList);
  
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['35%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    //console.log('handleSheetChanges', index);
  }, []);
  return (
    <GestureHandlerRootView style={{
      padding: 20,
      paddingTop: 50,
      height: '100%'
    }}>
      <BottomSheetModalProvider>
        <Text style={{
          fontFamily: 'dm-sans-semi-bold',
          fontSize: 30,
          color: Colors.TEXT_COLOR
        }}>Accounts</Text>
        {/* Bottom Sheet */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle= {styles.handleIndicator}
          handleStyle= {styles.handle}
        >
          <BottomSheetView style={styles.contentContainer}>
            {accountDetail}
          </BottomSheetView>
        </BottomSheetModal>
        {/* Bottom Sheet */}

        {/* Price Overview */}
        <View style={styles.container}>
          <PriceRow label={'Total Income'} price={2000} type={'income'}/>
          <PriceRow label={'Total Expenditure'} price={600} type={'expense'}/>
          <View
            style={{
              marginVertical: 8,
              borderBottomColor: Colors.TEXT_COLOR,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <PriceRow label={'Balance Left'} price={1400} type={'income'}/>
        </View>
        {/* Price Overview */}

        {/* Account List */}
        <View style={styles.container}>
          <FlatList 
          data={accountList}
          renderItem={({item, index})=>{
            return(
              <TouchableOpacity 
              onPress={() => {
                const detail = <AccountDetail price={item.price} type={item.type} bottomSheetModalRef={bottomSheetModalRef}/>;
                setAccountDetail(detail)
                handlePresentModalPress();
              }}
              style={{
                marginTop: index == 0 ? null : 5
              }}>
                <AccountItem price={item.price} type={item.type}/>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id}/>
        </View>
        {/* Account List */}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  container: {
      marginTop: 25,
      backgroundColor: Colors.BACKGROUND,
      borderColor: Colors.DIVIDER,
      borderWidth: 1,
      borderRadius: 15,
      padding: 16,
      elevation: 1
  },
  header: {
      fontFamily: 'dm-sans-medium',
      color: Colors.TEXT_COLOR,
      fontSize: 20
  },
  text1 : {
    fontFamily: 'dm-sans-semi-bold',
    fontSize: 18,
    margin: 4,
    color: Colors.TEXT_COLOR
  },
  touchableOpacityStyle: {
    marginTop: 12
  },
  handle: {
    backgroundColor: Colors.BACKGROUND_ALT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  handleIndicator: {
    width: 40,
    height: 6
  }
})