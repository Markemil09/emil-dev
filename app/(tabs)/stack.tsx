import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import {
  AnimatedPanel,
  AnimatedProgress,
  AnimatedReveal,
  Chip,
  FooterSignature,
  PortfolioScreen,
  BrandHeader,
  portfolioColors,
  portfolioText,
  usePortfolioLayout,
} from '@/components/portfolio';

const frontendSkills = [
  ['React.js', 'EXPERT', 0.95, 'data-object'],
  ['React Native', 'EXPERT', 0.92, 'smartphone'],
  ['Flutter', 'ADVANCED', 0.9, 'rocket-launch'],
];

const toolCards = [
  ['Xcode', 'IOS_RELEASES', 'APP_STORE', 'SUBMISSIONS', 'phone-iphone'],
  ['Git', 'VERSION_CONTROL', 'AGILE', 'TEAM_WORKFLOWS', 'account-tree'],
  ['Jest', 'TESTING', 'UI_LOGIC', 'QUALITY_CHECKS', 'verified'],
];

export default function StackScreen() {
  const { isDesktop, isMobile } = usePortfolioLayout();

  return (
    <PortfolioScreen>
      <View style={[styles.headerRow, isDesktop ? styles.headerRowDesktop : null]}>
        <AnimatedReveal style={styles.headerMain}>
          <BrandHeader
            eyebrow="Technical Skills"
            title="Engineering"
            accent=" Stack."
            description="Frontend, mobile, and delivery tools used across React.js, React Native, Flutter, and Java Spring Boot projects."
          />
        </AnimatedReveal>
        <AnimatedReveal delay={120} style={styles.versionBlock}>
          <Text style={styles.versionLabel}>LOCATION</Text>
          <Text style={styles.versionValue}>CALUMPIT, BULACAN, PH</Text>
        </AnimatedReveal>
      </View>

      <View style={[styles.topGrid, isDesktop ? styles.topGridDesktop : null]}>
        <AnimatedPanel delay={140} style={[styles.frontendPanel, isDesktop ? styles.frontendPanelDesktop : null]}>
          <Text style={styles.panelTitle}>CORE DEVELOPMENT</Text>
          {frontendSkills.map(([name, level, amount, icon], index) => (
            <AnimatedReveal key={name} delay={220 + index * 90} style={styles.skillItem}>
              <View style={styles.skillHeader}>
                <View style={styles.skillNameWrap}>
                  <MaterialIcons
                    name={icon as React.ComponentProps<typeof MaterialIcons>['name']}
                    size={18}
                    color={portfolioColors.primary}
                  />
                  <Text style={styles.skillName}>{name}</Text>
                </View>
                <Text style={styles.skillLevel}>LVL: {level}</Text>
              </View>
              <AnimatedProgress delay={300 + index * 90} progress={Number(amount)} />
            </AnimatedReveal>
          ))}
          <AnimatedReveal delay={520} style={styles.quoteInset}>
            <Text style={styles.quoteInsetText}>
              “I’m committed to enhancing team effectiveness through strategic focus, quality performance, and a genuine desire to empower the people I work with.”
            </Text>
          </AnimatedReveal>
        </AnimatedPanel>

        <AnimatedPanel delay={220} style={[styles.mobilePanel, isDesktop ? styles.mobilePanelDesktop : null]}>
          <Text style={styles.panelTitle}>SPECIALIZATIONS</Text>
          <View style={styles.mobileItem}>
            <View style={styles.mobileIconWrap}>
              <MaterialIcons name="smartphone" size={22} color={portfolioColors.primary} />
            </View>
            <View>
              <Text style={styles.mobileTitle}>Mobile Apps</Text>
              <Text style={styles.mobileSubtitle}>IOS AND ANDROID DELIVERY</Text>
            </View>
          </View>
          <View style={styles.mobileItem}>
            <View style={styles.mobileIconWrap}>
              <MaterialIcons name="dns" size={22} color={portfolioColors.primary} />
            </View>
            <View>
              <Text style={styles.mobileTitle}>Backend Support</Text>
              <Text style={styles.mobileSubtitle}>JAVA SPRING BOOT EXPERIENCE</Text>
            </View>
          </View>
          <View style={styles.chipRow}>
            <Chip label="REACT.JS" />
            <Chip label="FLUTTER" />
            <Chip label="JAVA" />
          </View>
        </AnimatedPanel>
      </View>

      <View
        style={[
          styles.toolsRow,
          isDesktop ? styles.toolsRowDesktop : null,
          isMobile ? styles.toolsRowMobile : null,
        ]}>
        {toolCards.map(([title, subtitle, value, detail, icon], index) => (
          <AnimatedPanel
            delay={280 + index * 80}
            key={title}
            style={[styles.toolPanel, isDesktop ? styles.toolPanelDesktop : null]}>
            <View style={styles.toolIconWrap}>
              <MaterialIcons
                name={icon as React.ComponentProps<typeof MaterialIcons>['name']}
                size={28}
                color={portfolioColors.primary}
              />
            </View>
            <View style={styles.toolCopy}>
              <Text style={styles.toolTitle}>{title}</Text>
              <Text style={styles.toolSubtitle}>{subtitle}</Text>
            </View>
            <View style={styles.toolMeta}>
              <Text style={styles.toolValue}>{value}</Text>
              <Text style={styles.toolDetail}>{detail}</Text>
            </View>
          </AnimatedPanel>
        ))}
      </View>

      <AnimatedPanel delay={520} style={styles.signatureBlock}>
        <Text style={styles.signatureTitle}>SKILLS BUILT FOR PRODUCT DELIVERY.</Text>
        <Text style={[portfolioText.body, styles.signatureCopy]}>
          My toolkit centers on shipping responsive web apps, cross-platform mobile apps, and maintainable product features in collaborative engineering teams.
        </Text>
        <View style={styles.signatureGrid}>
          {[
            ['FRONTEND', 'React.js / HTML / CSS / JavaScript'],
            ['MOBILE', 'Flutter / React Native'],
            ['BACKEND', 'Java Spring Boot'],
            ['TOOLS', 'Xcode / Git / Jest / Redux'],
          ].map(([label, value]) => (
            <View key={label} style={styles.signatureItem}>
              <Text style={styles.signatureLabel}>{label}</Text>
              <Text style={styles.signatureValue}>{value}</Text>
            </View>
          ))}
        </View>
      </AnimatedPanel>

      <FooterSignature label="MARK EMIL SARMIENTO / SKILLS" />
    </PortfolioScreen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    gap: 16,
  },
  headerRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  headerMain: {
    flex: 1,
  },
  versionBlock: {
    gap: 8,
    alignItems: 'flex-start',
    paddingTop: 32,
  },
  versionLabel: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.4,
  },
  versionValue: {
    color: portfolioColors.primary,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  topGrid: {
    gap: 16,
  },
  topGridDesktop: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  frontendPanel: {
    gap: 18,
  },
  frontendPanelDesktop: {
    flex: 1.8,
  },
  mobilePanel: {
    gap: 16,
  },
  mobilePanelDesktop: {
    flex: 0.9,
  },
  panelTitle: {
    color: portfolioColors.primary,
    fontSize: 11,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },
  skillItem: {
    gap: 10,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    flexWrap: 'wrap',
  },
  skillNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  skillName: {
    color: portfolioColors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  skillLevel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.2,
  },
  quoteInset: {
    marginTop: 4,
    backgroundColor: portfolioColors.backgroundAlt,
    borderRadius: 18,
    padding: 16,
  },
  quoteInsetText: {
    color: portfolioColors.textMuted,
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  mobileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  mobileIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: portfolioColors.surfaceHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileTitle: {
    color: portfolioColors.text,
    fontSize: 22,
    fontWeight: '800',
  },
  mobileSubtitle: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.1,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  toolsRow: {
    gap: 16,
  },
  toolsRowDesktop: {
    flexDirection: 'row',
  },
  toolsRowMobile: {
    gap: 12,
  },
  toolPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flexWrap: 'wrap',
  },
  toolPanelDesktop: {
    flex: 1,
  },
  toolIconWrap: {
    width: 58,
    height: 58,
    borderRadius: 999,
    backgroundColor: portfolioColors.backgroundAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolCopy: {
    flex: 1,
    gap: 4,
  },
  toolTitle: {
    color: portfolioColors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  toolSubtitle: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.2,
  },
  toolMeta: {
    alignItems: 'flex-end',
    gap: 2,
    marginLeft: 'auto',
  },
  toolValue: {
    color: portfolioColors.primary,
    fontSize: 12,
    fontWeight: '800',
  },
  toolDetail: {
    color: portfolioColors.textDim,
    fontSize: 9,
    letterSpacing: 1,
  },
  signatureBlock: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 28,
    gap: 16,
  },
  signatureTitle: {
    color: portfolioColors.text,
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '900',
  },
  signatureCopy: {
    textAlign: 'center',
  },
  signatureGrid: {
    width: '100%',
    gap: 12,
    marginTop: 4,
  },
  signatureItem: {
    alignItems: 'center',
    gap: 4,
  },
  signatureLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  signatureValue: {
    color: portfolioColors.primary,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
});
