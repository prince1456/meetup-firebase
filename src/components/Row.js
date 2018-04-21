import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { Container, Header, Content, SwipeRow, ListView, View, Text, Icon, Button, List, ListItem } from 'native-base';


const Row = props => props.currency.map((data, index) => {
    return (
        <SwipeRow
        key={Object.keys(data)}
        leftOpenValue={75}
        rightOpenValue={-75}
        left={
          <Button success onPress={() => alert('Add')}>
            <Icon active name="add" />
          </Button>
        }
        body={
          <View style={styles.rowBody}>
            <Text>{Object.keys(data)}</Text>
            <Text>{Object.values(data)}</Text>
          </View>
        }
        right={
            <Button danger onPress={() => props.removeData(index)}>
              <Icon active name="trash" />
            </Button>
          }
      />
    )
})

const styles = StyleSheet.create({
    rowBody: {flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 40, paddingVertical: 10}
})
export default Row;