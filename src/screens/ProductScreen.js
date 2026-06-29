import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard'; // Import the new component
import plantsData from '../data/plants.json';

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={plantsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard 
            item={item} 
            onPress={() => navigation.navigate('Details', { product: item })} 
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContent: { padding: 15 },
});