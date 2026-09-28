import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#080A0F',
  },
  screen: {
    flex: 1,
    backgroundColor: '#080A0F',
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 30,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  brandBox: {
    backgroundColor: '#E62429',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  archiveLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  archiveSub: {
    color: '#737987',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginTop: 2,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  progressDot: {
    width: 28,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#242833',
    marginRight: 6,
  },
  progressDotActiveRed: {
    backgroundColor: '#E62429',
  },
  progressDotActiveBlue: {
    backgroundColor: '#2F77FF',
  },
  progressDotActivePurple: {
    backgroundColor: '#8D5CFF',
  },
  progressDotActiveGold: {
    backgroundColor: '#F6C453',
  },
  progressText: {
    marginLeft: 'auto',
    color: '#8E95A3',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  heroImage: {
    height: 360,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  heroImageInner: {
    borderRadius: 22,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 5, 9, 0.38)',
    borderRadius: 22,
  },
  heroImageContent: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 13,
  },
  heroNumber: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  heroNumberRed: {
    backgroundColor: 'rgba(230, 36, 41, 0.90)',
    borderColor: '#FF7B7F',
  },
  heroNumberBlue: {
    backgroundColor: 'rgba(47, 119, 255, 0.90)',
    borderColor: '#7BAAFF',
  },
  heroNumberPurple: {
    backgroundColor: 'rgba(141, 92, 255, 0.90)',
    borderColor: '#B99BFF',
  },
  heroNumberGold: {
    backgroundColor: 'rgba(201, 151, 38, 0.94)',
    borderColor: '#FFE19A',
  },
  heroNumberText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroOverline: {
    color: '#D9DDE6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 31,
    fontWeight: '900',
    letterSpacing: -0.8,
    maxWidth: 275,
  },
  heroSubtitle: {
    color: '#C9CED9',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginTop: 4,
    maxWidth: 260,
  },

  card: {
    backgroundColor: '#11141C',
    borderWidth: 1,
    borderColor: '#20242E',
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 11,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  bodyText: {
    color: '#B8BFCC',
    fontSize: 14,
    lineHeight: 22,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 14,
  },
  statCard: {
    flex: 1,
    minHeight: 86,
    backgroundColor: '#0E1118',
    borderWidth: 1,
    borderColor: '#20242E',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 13,
    justifyContent: 'space-between',
  },
  statValue: {
    color: '#F1F3F7',
    fontSize: 10,
    fontWeight: '900',
  },
  statValueRed: {
    color: '#FF666A',
    fontSize: 12,
    fontWeight: '900',
  },
  statValueBlue: {
    color: '#6BA8FF',
    fontSize: 12,
    fontWeight: '900',
  },
  statValuePurple: {
    color: '#B38CFF',
    fontSize: 10,
    fontWeight: '900',
  },
  statLabel: {
    color: '#666E7E',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.9,
  },

  miniLabel: {
    color: '#7E8696',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 11,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#333846',
    backgroundColor: '#171B24',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  tagText: {
    color: '#D9DDE5',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  primaryButton: {
    minHeight: 54,
    borderRadius: 15,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 2,
  },
  primaryButtonRed: {
    backgroundColor: '#E62429',
  },
  primaryButtonBlue: {
    backgroundColor: '#2F77FF',
  },
  primaryButtonPurple: {
    backgroundColor: '#8150F4',
  },
  primaryButtonGold: {
    backgroundColor: '#F6C453',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  primaryButtonTextDark: {
    color: '#111318',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  secondaryButton: {
    minHeight: 54,
    minWidth: 115,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#303542',
    backgroundColor: '#12151D',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
  },
  flexButton: {
    flex: 1,
    marginTop: 0,
  },

  finalCard: {
    backgroundColor: '#15130D',
    borderWidth: 1,
    borderColor: '#4B3C19',
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
    alignItems: 'center',
  },
  finalTitle: {
    color: '#FFE19A',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginTop: 10,
  },
  finalText: {
    color: '#BFC2C8',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },

  footerText: {
    color: '#494F5C',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: 22,
  },
});
