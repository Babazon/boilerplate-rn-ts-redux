import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {loadItems, RootState, selectItem} from '../state/Redux';
import {Item} from '../state/Item.model';

const mapState = (state: RootState) => ({
  items: state.items ?? [],
});

const mapDispatch = {
  loadItems,
  selectItem,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ItemList = (props: PropsFromRedux) => {
  if (!props.items?.length) {
    props.loadItems([{}, {}] as Item[]);
  }
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: {id: string}) => item.id}
        renderItem={({item}: {item: Item}) => (
          <TouchableOpacity
            onPress={() => {
              props.selectItem(item);
              navigation.navigate('ItemList');
            }}
            style={styles.listItem}>
            <Text numberOfLines={1} style={styles.text}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
        data={props.items}
      />
    </View>
  );
};

export default connector(ItemList);

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  listItem: {
    alignItems: 'center',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 100,
    justifyContent: 'center',
    margin: 2,
    padding: 4,
  },
  myPineappleIsBiggerThanYours: {
    fontSize: 80,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontSize: 50,
    marginHorizontal: 8,
  },
  wrapper: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
  },
});
