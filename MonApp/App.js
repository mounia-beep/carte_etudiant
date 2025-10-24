import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      
      {/* Logo et titre sur la même ligne */}
      <View style={styles.header}>
        <Image
          source={require('./assets/emsigit remote add origin https://github.com/mounia-beep/carte_etudiant.git.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>

      {/* Informations de l’étudiant */}
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>TENSAOUI</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>ALI</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 10,
    letterSpacing: 1,
  },
  info: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 5, // remplace gap
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});