import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView, TextInput, FlatList } from 'react-native';
import styles from './Page3.Style';
const Page3 = ({ navigation }) => {
  const listData = [
    {
      id: '1',
      followerCount: '550 k',
      isTop: "1",
      bigImage: require('../../assets/images/big_image1.png'),
      title: "Anna_ix",
      listImage1: require('../../assets/images/image1.png'),
      listImage2: require('../../assets/images/image2.png'),
      listImage3: require('../../assets/images/image3.png'),
    },
    {
      id: '2',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image2.png'),
      title: "Gigi_ix",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '3',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image3.png'),
      title: "Sven_ix",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '4',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image4.png'),
      title: "Vivi_ix",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '5',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image5.png'),
      title: "Betty",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '6',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image6.png'),
      title: "Anton",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '7',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image7.png'),
      title: "Elisa",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    },
    {
      id: '8',
      followerCount: '550 k',
      isTop: "0",
      bigImage: require('../../assets/images/big_image8.png'),
      title: "Jiji",
      listImage1: require('../../assets/images/image4.png'),
      listImage2: require('../../assets/images/image5.png'),
      listImage3: require('../../assets/images/image6.png'),
    }
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.topViewStyle}>
        <View style={styles.topLineViewStyle}>
          <Image source={require('../../assets/images/menu_icon.png')} style={styles.iconStyle} resizeMode='contain' />
          <View style={styles.logoViewStyle}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoStyle} resizeMode='contain' />
          </View>
          <View style={{ position: 'absolute', flexDirection: 'row', right: 20 }}>
            <Image source={require('../../assets/images/user_icon.png')} style={[styles.iconStyle, { marginRight: 20 }]} resizeMode='contain' />
            <Image source={require('../../assets/images/shopping_card_icon.png')} style={styles.iconStyle} resizeMode='contain' />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.searchViewStyle}>
            <Image source={require('../../assets/images/search_icon.png')} style={{ width: 20, height: 20 }} resizeMode="contain" />
            <TextInput
              style={styles.searchTextStyle}
              underlineColorAndroid="transparent"
              placeholder='Suchen Products...'
              placeholderTextColor="#D7DBDD"
              numberOfLines={1} />
            <TouchableOpacity style={styles.filterview} >
              <Image source={require('../../assets/images/filter_icon.png')} style={styles.iconStyle} resizeMode="contain" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginTop: -20 }}>
        <View style={styles.centerViewStyle}>
          <View style={styles.boxViewStyle}>
            <Text style={styles.boxheadertext}>Aufmerksamkeit</Text>
            <Text style={styles.boxsubheadertext}>Beruhmte Menschen die sich {'\n'}fur Recycling einsetzen!</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/line_icon.png')} style={styles.iconLineStyle} resizeMode="contain" />
              <Image source={require('../../assets/images/line_icon.png')} style={styles.iconLineStyle} resizeMode="contain" />
              <Image source={require('../../assets/images/line_icon.png')} style={styles.iconLineStyle} resizeMode="contain" />
              <Image source={require('../../assets/images/line_icon.png')} style={styles.iconLineStyle} resizeMode="contain" />
            </View>
          </View>
          <View style={styles.productListView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={styles.headerText}>Kategorien</Text>
              <Text style={styles.headerRightText}>Alle</Text>
            </View>
          </View>
          <FlatList showsVerticalScrollIndicator={false}
            data={listData}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
            windowSize={10}
            horizontal={false}
            numColumns={2}
            initialNumToRender={8}
            keyExtractor={({ id }) => `key-${id}`}
            renderItem={({ item, index }) => (
              <View style={styles.productView}>
                <View style={styles.productBoxView}>
                  <View style={styles.productTopLine}>
                    <Image source={require('../../assets/images/people_icon.png')} style={styles.boxImageStyle} resizeMode="contain" />
                    <Text style={styles.regularText}>{item.followerCount}</Text>
                    {item.isTop == "1" &&
                      <View style={styles.topBoxView}>
                        <Text style={styles.smallText}>Top</Text>
                      </View>}
                    {item.isTop == "1" ?
                      <View style={{ position: 'absolute', right: 5 }}>
                        <Image source={require('../../assets/images/heart_icon.png')} style={styles.boxImageStyle} resizeMode="contain" />
                      </View> :
                      <View style={{ position: 'absolute', right: 5 }}>
                        <Image source={require('../../assets/images/white_heart_icon.png')} style={styles.boxImageStyle} resizeMode="contain" />
                      </View>}
                  </View>
                  <View>
                    <Image source={item.bigImage} style={styles.boxBigImageStyle} resizeMode='contain' />
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                    <Text style={styles.productHeaderText}>{item.title}</Text>
                    <View style={styles.productRoundView}>
                      <Image source={require('../../assets/images/logo.png')} style={styles.boxProductImageStyle} resizeMode="contain" />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                    <Image source={item.listImage1} style={styles.boxSmallImageStyle} resizeMode='contain' />
                    <Image source={item.listImage2} style={[styles.boxSmallImageStyle, { marginLeft: 10 }]} resizeMode='contain' />
                    <Image source={item.listImage3} style={[styles.boxSmallImageStyle, { marginLeft: 10 }]} resizeMode='contain' />
                  </View>
                </View>
              </View>
            )}
          />
          <Text style={styles.moreTextStyle}>Mehr...</Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default Page3;