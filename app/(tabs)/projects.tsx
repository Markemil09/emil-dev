import { MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  AnimatedPanel,
  AnimatedReveal,
  Chip,
  FooterSignature,
  PortfolioScreen,
  BrandHeader,
  RemoteImage,
  portfolioColors,
  portfolioImages,
  portfolioText,
  usePortfolioLayout,
} from '@/components/portfolio';

const projects = [
  {
    title: 'EM CAPITAL',
    label: 'CRYPTO_CRM',
    description:
      'A crypto CRM platform with real-time portfolio tracking, lead management, and global market monitoring — integrated with the CoinGecko API and deployed on Vercel.',
    image: portfolioImages.emCapital,
    stack: ['REACT.JS', 'TYPESCRIPT', 'COINGECKO_API', 'VERCEL'],
    url: 'https://crypto-management-nine.vercel.app/',
  },
  {
    title: 'PROPERTY MANAGEMENT',
    label: 'PROPERTY_MGMT',
    description:
      'A mobile app for homeowners to manage their property — pay mortgages and bills, request maintenance services like lawn mowing or repairs, and keep all property documents organized in one place.',
    image: portfolioImages.propertyManagement,
    stack: ['REACT_NATIVE', 'IOS', 'ANDROID', 'MOBILE'],
    url: 'https://drive.google.com/file/d/140GuTU_nntoxvkyE5UpTehJMbN_sjVO8/view?usp=drive_link',
  },
];

export default function ProjectsScreen() {
  const { isDesktop, isMobile } = usePortfolioLayout();

  return (
    <PortfolioScreen>
      <View style={[styles.headerRow, isDesktop ? styles.headerRowDesktop : null]}>
        <AnimatedReveal style={styles.headerMain}>
          <BrandHeader
            eyebrow="Work"
            title="PROJECTS"
            accent="."
            description="Selected projects I've designed and built — spanning web apps, crypto tools, and production-ready interfaces."
          />
        </AnimatedReveal>
        <AnimatedPanel delay={120} style={[styles.filterPanel, isDesktop ? styles.filterPanelDesktop : null]}>
          <Text style={styles.filterLabel}>CATEGORIES</Text>
          <View style={styles.filterRow}>
            <Chip label="WEB" active />
            <Chip label="CRYPTO" />
            <Chip label="TOOLS" />
          </View>
        </AnimatedPanel>
      </View>

      <View style={[styles.projectGrid, isDesktop ? styles.projectGridDesktop : null]}>
        {projects.map((project, index) => (
          <AnimatedPanel
            delay={120 + index * 80}
            key={project.title}
            style={[
              styles.projectCard,
              isDesktop ? styles.projectCardDesktop : null,
              isDesktop && index % 2 === 1 ? styles.projectCardOffset : null,
            ]}>
            <Pressable
              onPress={() => WebBrowser.openBrowserAsync(project.url)}
              style={({ pressed }) => [styles.cardPressable, pressed && styles.cardPressed]}>
              <RemoteImage source={project.image} style={styles.projectImage} />
              <View style={styles.projectBody}>
                <View style={styles.projectTitleRow}>
                  <View style={styles.projectTitleWrap}>
                    <Text style={styles.projectLabel}>{project.label}</Text>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                  </View>
                  <MaterialIcons name="north-east" size={18} color={portfolioColors.primaryStrong} />
                </View>
                <Text style={portfolioText.bodySmall}>{project.description}</Text>
                <View style={styles.chipRow}>
                  {project.stack.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </View>
              </View>
            </Pressable>
          </AnimatedPanel>
        ))}
      </View>

      <View
        style={[
          styles.annotationRow,
          isDesktop ? styles.annotationRowDesktop : null,
          isMobile ? styles.annotationRowMobile : null,
        ]}>
        <View style={styles.exposureCard}>
          <Text style={styles.annotationLabel}>TECH_STACK_EXPOSURE</Text>
          {[
            ['REACT_JS', 'EXPERT'],
            ['REACT_NATIVE', 'EXPERT'],
            ['FLUTTER', 'ADVANCED'],
            ['JAVA_SPRING_BOOT', 'WORKING_EXP'],
          ].map(([label, value]) => (
            <View key={label} style={styles.exposureRow}>
              <Text style={styles.exposureKey}>{label}</Text>
              <Text style={styles.exposureValue}>{value}</Text>
            </View>
          ))}
        </View>

        <AnimatedPanel delay={360} style={styles.quoteCard}>
          <MaterialIcons name="terminal" size={20} color={portfolioColors.primary} />
          <Text style={styles.quoteText}>
            "I'm committed to enhancing team effectiveness through strategic focus and quality
            performance, with empathy and a genuine desire to empower others."
          </Text>
          <Text style={styles.quoteMeta}>MARK EMIL SARMIENTO</Text>
        </AnimatedPanel>
      </View>

      <FooterSignature label="MARK EMIL SARMIENTO / FULL STACK DEVELOPER" />
    </PortfolioScreen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    gap: 16,
  },
  headerRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  headerMain: {
    flex: 1,
  },
  filterPanel: {
    gap: 12,
    minWidth: 0,
  },
  filterPanelDesktop: {
    width: 280,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingBottom: 10,
  },
  filterLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.8,
    fontWeight: '700',
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectGrid: {
    gap: 16,
  },
  projectGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    columnGap: 24,
    rowGap: 28,
  },
  projectCard: {
    padding: 0,
    overflow: 'hidden',
  },
  projectCardDesktop: {
    width: '48.9%',
  },
  projectCardOffset: {
    marginTop: 60,
  },
  cardPressable: {
    flex: 1,
  },
  cardPressed: {
    opacity: 0.85,
  },
  projectImage: {
    width: '100%',
    height: 200,
    backgroundColor: portfolioColors.backgroundAlt,
  },
  projectBody: {
    padding: 18,
    gap: 14,
  },
  projectTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  projectTitleWrap: {
    flex: 1,
    gap: 4,
  },
  projectLabel: {
    color: portfolioColors.primary,
    fontSize: 10,
    letterSpacing: 1.6,
    fontWeight: '700',
  },
  projectTitle: {
    color: portfolioColors.text,
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '900',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  annotationRow: {
    gap: 16,
    marginTop: 12,
  },
  annotationRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  annotationRowMobile: {
    marginTop: 0,
  },
  exposureCard: {
    paddingTop: 16,
    gap: 16,
    flex: 0.48,
  },
  annotationLabel: {
    color: portfolioColors.text,
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '800',
  },
  exposureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 73, 78, 0.18)',
  },
  exposureKey: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.2,
  },
  exposureValue: {
    color: portfolioColors.primary,
    fontSize: 11,
    fontWeight: '800',
  },
  quoteCard: {
    gap: 16,
    flex: 1,
  },
  quoteText: {
    color: portfolioColors.text,
    fontSize: 16,
    lineHeight: 26,
    fontStyle: 'italic',
  },
  quoteMeta: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
