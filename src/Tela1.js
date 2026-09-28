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

export default function Tela1({ navigation }) {
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
          <View style={[styles.progressDot, styles.progressDotActiveRed]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <Text style={styles.progressText}>01 / 04</Text>
        </View>

        <ImageBackground
          source={require('../assets/ironman.jpg')}
          style={styles.heroImage}
          imageStyle={styles.heroImageInner}
        >
          <View style={styles.imageShade} />
          <View style={styles.heroImageContent}>
            <View style={[styles.heroNumber, styles.heroNumberRed]}>
              <Text style={styles.heroNumberText}>001</Text>
            </View>
            <View>
              <Text style={styles.heroOverline}>AVENGER // TECNOLOGIA</Text>
              <Text style={styles.heroTitle}>IRON MAN</Text>
              <Text style={styles.heroSubtitle}>TONY STARK</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="hardware-chip-outline" size={21} color="#FFB42A" />
            <Text style={styles.sectionTitle}>PERFIL DO HERÓI</Text>
          </View>
          <Text style={styles.bodyText}>
            Tony Stark transforma inteligência, engenharia e tecnologia em uma
            armadura de alta potência. Como Iron Man, ele combina estratégia,
            inovação e coragem para enfrentar ameaças que colocam o planeta em risco.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValueRed}>TEC</Text>
            <Text style={styles.statLabel}>ESPECIALIDADE</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>ARMADURA</Text>
            <Text style={styles.statLabel}>RECURSO</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>VINGADORES</Text>
            <Text style={styles.statLabel}>EQUIPE</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.miniLabel}>DESTAQUES</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}><Text style={styles.tagText}>ENGENHARIA</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>REPULSORES</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>INTELIGÊNCIA</Text></View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, styles.primaryButtonRed]}
          onPress={() => navigation.navigate('Tela2')}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>PRÓXIMO ARQUIVO</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.footerText}>MARVEL HERO ARCHIVES • AP6</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
