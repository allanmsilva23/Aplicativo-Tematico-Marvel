import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Tela4({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <View style={styles.brandBox}>
            <Text style={styles.brandText}>MARVEL</Text>
          </View>
          <View>
            <Text style={styles.archiveLabel}>HERO ARCHIVES</Text>
            <Text style={styles.archiveSub}>ARQUIVO DOS VINGADORES</Text>
          </View>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={[styles.progressDot, styles.progressDotActiveGold]} />
          <Text style={styles.progressText}>04 / 04</Text>
        </View>

        <ImageBackground
          source={require('../assets/avengers.jpg')}
          style={styles.heroImage}
          imageStyle={styles.heroImageInner}
        >
          <View style={styles.imageShade} />
          <View style={styles.heroImageContent}>
            <View style={[styles.heroNumber, styles.heroNumberGold]}>
              <Text style={styles.heroNumberText}>004</Text>
            </View>
            <View>
              <Text style={styles.heroOverline}>EARTH'S MIGHTIEST HEROES</Text>
              <Text style={styles.heroTitle}>AVENGERS</Text>
              <Text style={styles.heroSubtitle}>UNIDOS CONTRA GRANDES AMEAÇAS</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="people-outline" size={21} color="#FFD36B" />
            <Text style={styles.sectionTitle}>A EQUIPE</Text>
          </View>
          <Text style={styles.bodyText}>
            Os Vingadores reúnem heróis com habilidades, histórias e estilos
            muito diferentes. A força do grupo está justamente na união:
            tecnologia, estratégia, coragem e poderes extraordinários trabalhando
            juntos para enfrentar desafios que nenhum integrante resolveria sozinho.
          </Text>
        </View>

        <View style={styles.finalCard}>
          <Ionicons name="checkmark-circle" size={34} color="#FFD36B" />
          <Text style={styles.finalTitle}>ARQUIVO CONCLUÍDO</Text>
          <Text style={styles.finalText}>
            Você explorou quatro núcleos do universo Marvel. Use o botão abaixo
            para voltar ao início e rever os arquivos.
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
          >
            <Ionicons name="arrow-back" size={19} color="#FFFFFF" />
            <Text style={styles.secondaryButtonText}>VOLTAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.primaryButton, styles.primaryButtonGold, styles.flexButton]}
            onPress={() => navigation.popToTop()}
            activeOpacity={0.85}
          >
            <Ionicons name="refresh" size={19} color="#111318" />
            <Text style={styles.primaryButtonTextDark}>REINICIAR</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>MARVEL HERO ARCHIVES • AP6</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
