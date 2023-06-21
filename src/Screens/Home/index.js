import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Endereco from '../../Components/Home/Endereco';
import Input from '../../Components/Input';
import CupomDesconto from '../../Components/Home/CupomDesconto';
import Sugestoes from '../../Components/Home/Sugestoes';
import Promocoes from '../../Components/Home/Promocoes';
import Ofertas from '../../Components/Home/Ofertas';
import Categorias from '../../Components/Home/Categorias';
import Restaurantes from '../../Components/Home/Restaurantes';

export default function Home() {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Endereco />
      <Input placeholder="Busque por item ou loja" />
      <CupomDesconto />
      <Sugestoes />
      <Promocoes />
      <Ofertas />
      <Categorias />
      <Restaurantes />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
