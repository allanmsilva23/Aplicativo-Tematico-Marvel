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

export default function Tela2({ navigation }) {
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
          <View style={[styles.progressDot, styles.progressDotActiveBlue]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <Text style={styles.progressText}>02 / 04</Text>
        </View>

        <ImageBackground
          source={require('../assets/captain.jpg')}
          style={styles.heroImage}
          imageStyle={styles.heroImageInner}
        >
          <View style={styles.imageShade} />
          <View style={styles.heroImageContent}>
            <View style={[styles.heroNumber, styles.heroNumberBlue]}>
              <Text style={styles.heroNumberText}>002</Text>
            </View>
            <View>
              <Text style={styles.heroOverline}>AVENGER // LIDERANÇA</Text>
              <Text style={styles.heroTitle}>CAPTAIN AMERICA</Text>
              <Text style={styles.heroSubtitle}>STEVE ROGERS</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="shield-outline" size={21} color="#6BA8FF" />
            <Text style={styles.sectionTitle}>PERFIL DO HERÓI</Text>
          </View>
          <Text style={styles.bodyText}>
            Steve Rogers representa disciplina, liderança e determinação.
            O Capitão América luta ao lado dos Vingadores usando seu escudo
            e sua experiência de combate, sempre colocando a equipe e a missão
            acima de si mesmo.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValueBlue}>LÍDER</Text>
            <Text style={styles.statLabel}>FUNÇÃO</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>ESCUDO</Text>
            <Text style={styles.statLabel}>RECURSO</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>TÁTICA</Text>
            <Text style={styles.statLabel}>FORÇA</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.miniLabel}>DESTAQUES</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}><Text style={styles.tagText}>CORAGEM</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>ESTRATÉGIA</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>TRABALHO EM EQUIPE</Text></View>
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
            style={[styles.primaryButton, styles.primaryButtonBlue, styles.flexButton]}
            onPress={() => navigation.navigate('Tela3')}
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
