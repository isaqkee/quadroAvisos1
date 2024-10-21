import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Se estiver usando o Expo
import image1 from './assets/adicionar2.png'; // Imagem local
import image2 from './assets/vassoura1.png'; // Outra imagem local

const ScreenWithHeader = ({ navigation }) => {
  const [inputText, setInputText] = useState(''); // Estado para o texto do input
  const [addedText, setAddedText] = useState(''); // Estado para o texto adicionado
  const [showAddedContainer, setShowAddedContainer] = useState(false); // Estado para exibir o novo container

  const handleAdd = () => {
    setAddedText(inputText); // Define o texto adicionado como o texto digitado
    setShowAddedContainer(true); // Mostra o novo container com o texto adicionado
  };

  const handleClear = () => {
    setInputText(''); // Limpa o input
    setShowAddedContainer(false); // Esconde o container de texto adicionado
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>AVISOS</Text>
      </View>

      <Text style={styles.subHeaderText}>
        Quadro de avisos foi criado para mensagens de emergência, que aparecerá para todos os responsáveis.
      </Text>

      <View style={styles.contentContainer}>
        <TextInput
          style={styles.contentInput}
          placeholder="Adicione um aviso..."
          placeholderTextColor="gray"
          value={inputText}
          onChangeText={setInputText}
        />
      </View>

      {/* Container para as imagens */}
      <View style={styles.imageRow}>
        <TouchableOpacity style={styles.imageWrapper} onPress={handleAdd}>
          <Image source={image1} style={styles.image1} />
          <Text style={styles.textoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageWrapper} onPress={handleClear}>
          <Image source={image2} style={styles.image} />
          <Text style={styles.textoLimpar}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* Novo container que será exibido após o clique em "Adicionar" */}
      {showAddedContainer && (
        <View style={styles.addedContainer}>
          <Text style={styles.addedText}>{addedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingVertical: 10,
    backgroundColor: 'black',
    marginTop: 50,
    marginLeft: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20, 
  },
  subHeaderText: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
    marginLeft: 26,
    marginRight: 20, 
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: '#DDDDDD',
    marginTop: 10, 
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 25,
    height: 60, // Ajustado para o input
    position: 'relative', 
  },
  contentInput: {
    color: 'black',
    fontSize: 14,
  },
  imageRow: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 40,
    marginHorizontal: 40, 
  },
  imageWrapper: {
    alignItems: 'center', 
  },
  image: {
    width: 55, 
    height: 55, 
    resizeMode: 'contain', 
  },
  image1: {
    width: 65, 
    height: 65, 
    resizeMode: 'contain', 
  },
  textoAdicionar: {
    color: 'white',
    fontSize: 14,
  },
  textoLimpar: {
    color: 'white',
    fontSize: 14,
    marginTop: 8, 
  },
  addedContainer: {
    backgroundColor: '#DDDDDD',
    marginTop: 20, 
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  addedText: {
    color: 'black',
    fontSize: 14,
  },
});

export default ScreenWithHeader;
