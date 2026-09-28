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

export default function Tela3({ navigation }) {
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
          <View style={[styles.progressDot, styles.progressDotActivePurple]} />
          <View style={styles.progressDot} />
          <Text style={styles.progressText}>03 / 04</Text>
        </View>

        <ImageBackground
          source={require('../assets/wakanda.jpg')}
          style={styles.heroImage}
          imageStyle={styles.heroImageInner}
        >
          <View style={styles.imageShade} />
          <View style={styles.heroImageContent}>
            <View style={[styles.heroNumber, styles.heroNumberPurple]}>
              <Text style={styles.heroNumberText}>003</Text>
            </View>
            <View>
              <Text style={styles.heroOverline}>WAKANDA // LEGADO</Text>
              <Text style={styles.heroTitle}>BLACK PANTHER</Text>
              <Text style={styles.heroSubtitle}>T'CHALLA</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="paw-outline" size={21} color="#B38CFF" />
            <Text style={styles.sectionTitle}>PERFIL DO HERÓI</Text>
          </View>
          <Text style={styles.bodyText}>
            T'Challa é ligado à tradição e à tecnologia de Wakanda.
            Como Pantera Negra, ele utiliza inteligência, treinamento e recursos
            avançados para proteger seu povo e colaborar com outros heróis diante
            de ameaças de escala global.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValuePurple}>WAKANDA</Text>
            <Text style={styles.statLabel}>ORIGEM</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>VIBRANIUM</Text>
            <Text style={styles.statLabel}>TECNOLOGIA</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>TÁTICA</Text>
            <Text style={styles.statLabel}>PERFIL</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.miniLabel}>DESTAQUES</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}><Text style={styles.tagText}>WAKANDA</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>INOVAÇÃO</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>LEGADO</Text></View>
          </View>
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
            style={[styles.primaryButton, styles.primaryButtonPurple, styles.flexButton]}
            onPress={() => navigation.navigate('Tela4')}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>PRÓXIMO</Text>
            <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>MARVEL HERO ARCHIVES • AP6</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
