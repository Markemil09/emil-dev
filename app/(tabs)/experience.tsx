import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import {
  AnimatedPanel,
  AnimatedReveal,
  BrandHeader,
  Chip,
  FooterSignature,
  Metric,
  Panel,
  PortfolioScreen,
  portfolioColors,
  portfolioText,
  usePortfolioLayout,
} from '@/components/portfolio';

const timeline = [
  {
    years: '05/2025 — CURRENT',
    role: 'Senior Software Engineer',
    company: 'SVEN',
    chips: ['REACT.JS', 'REACT_NATIVE'],
    bullets: [
      'Built dynamic and responsive web applications with React.js for production delivery.',
      'Developed cross-platform mobile apps with Flutter and React Native for iOS and Android.',
      'Deployed iOS applications to the Apple App Store while meeting Apple compliance requirements.',
    ],
  },
  {
    years: '03/2022 — 05/2025',
    role: 'Senior Software Engineer',
    company: 'TopApps Inc.',
    chips: ['FLUTTER', 'JAVA', 'REDUX'],
    bullets: [
      'Developed reusable UI components and managed state with Redux across React.js projects.',
      'Optimized app performance and reduced load times through efficient coding practices.',
      'Contributed Java Spring Boot backend work and mentored junior team members in an agile setup.',
    ],
  },
  {
    years: '10/2021 — 03/2022',
    role: 'Software Engineer',
    company: 'Hooli Software',
    chips: ['UI', 'WIREFRAMES'],
    bullets: [
      'Transformed design mockups and wireframes into interactive, user-friendly interfaces.',
    ],
  },
  {
    years: '02/2020 — 09/2021',
    role: 'Software Developer',
    company: 'The Nerds Solutions',
    chips: ['REACT.JS', 'SPRING_BOOT'],
    bullets: [
      'Created websites with React JS in a fast-paced tech garage environment.',
      'Collaborated with designers, UI/UX specialists, and backend developers on product delivery.',
      'Contributed backend work using Java Spring Boot and reusable UI components with Redux.',
    ],
  },
];

export default function ExperienceScreen() {
  const { isDesktop, isTablet, isMobile } = usePortfolioLayout();

  return (
    <PortfolioScreen>
      <AnimatedReveal>
        <BrandHeader
          eyebrow="Work History"
          title="Professional"
          accent=" Experience."
          description="Full stack developer with 5+ years delivering web and mobile products using React.js, React Native, Flutter, and Java Spring Boot across agile teams."
        />
      </AnimatedReveal>

      <View
        style={[
          styles.layoutRow,
          isDesktop ? styles.layoutRowDesktop : null,
          isMobile ? styles.layoutRowMobile : null,
        ]}>
        <AnimatedPanel delay={100} style={[styles.sidePanel, isDesktop ? styles.sidePanelDesktop : null]}>
          <Text style={styles.sideLabel}>CURRENT STATUS</Text>
          <Text style={styles.sideValue}>AVAILABLE FOR SOFTWARE ENGINEERING ROLES</Text>
          <Text style={[styles.sideLabel, styles.sideLabelGap]}>CORE COMPETENCIES</Text>
          <Text style={portfolioText.bodySmall}>
            Full stack delivery across React.js, React Native, Flutter, Java Spring Boot, App Store releases, Redux, and agile team workflows.
          </Text>
        </AnimatedPanel>

        <View style={[styles.timelineWrap, isDesktop ? styles.timelineWrapDesktop : null]}>
          <View style={styles.timelineRail} />
          {timeline.map((item, index) => (
            <AnimatedReveal delay={180 + index * 90} key={item.company} style={styles.timelineItem}>
              <View style={[styles.timelineNode, index === 0 ? styles.timelineNodeActive : null]} />
              <Panel style={styles.timelineCard}>
                <View style={styles.timelineHeader}>
                  <View style={styles.timelineCopy}>
                    <Text style={styles.timelineYears}>{item.years}</Text>
                    <Text style={styles.timelineRole}>{item.role}</Text>
                    <Text style={styles.timelineCompany}>{item.company}</Text>
                  </View>
                  <View style={styles.timelineChips}>
                    {item.chips.map((chip) => (
                      <Chip key={chip} label={chip} />
                    ))}
                  </View>
                </View>

                <View style={styles.bulletList}>
                  {item.bullets.map((bullet) => (
                    <View key={bullet} style={styles.bulletRow}>
                      <MaterialIcons name="bolt" size={14} color={portfolioColors.primary} />
                      <Text style={[portfolioText.bodySmall, styles.bulletText]}>{bullet}</Text>
                    </View>
                  ))}
                </View>
              </Panel>
            </AnimatedReveal>
          ))}
        </View>
      </View>

      <View
        style={[
          styles.metricRow,
          isTablet ? styles.metricRowWide : null,
          isMobile ? styles.metricRowMobile : null,
        ]}>
        <AnimatedReveal delay={260} style={styles.metricItem}>
          <Metric label="Years Professional Exp" value="5+" />
        </AnimatedReveal>
        <AnimatedReveal delay={320} style={styles.metricItem}>
          <Metric label="Major Roles" value="4" />
        </AnimatedReveal>
        <AnimatedReveal delay={380} style={styles.metricItem}>
          <Metric label="Platforms Shipped" value="WEB + MOBILE" />
        </AnimatedReveal>
      </View>

      <FooterSignature label="MARK EMIL SARMIENTO / EXPERIENCE" />
    </PortfolioScreen>
  );
}

const styles = StyleSheet.create({
  layoutRow: {
    gap: 16,
  },
  layoutRowDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  layoutRowMobile: {
    gap: 20,
  },
  sidePanel: {
    gap: 8,
  },
  sidePanelDesktop: {
    width: 240,
  },
  sideLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  sideValue: {
    color: portfolioColors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  sideLabelGap: {
    marginTop: 10,
  },
  timelineWrap: {
    position: 'relative',
    gap: 18,
    paddingLeft: 22,
    flex: 1,
  },
  timelineWrapDesktop: {
    minWidth: 0,
  },
  timelineRail: {
    position: 'absolute',
    left: 7,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(60, 73, 78, 0.2)',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineNode: {
    position: 'absolute',
    left: -22,
    top: 22,
    width: 14,
    height: 14,
    borderRadius: 999,
    backgroundColor: portfolioColors.surfaceHighest,
  },
  timelineNodeActive: {
    backgroundColor: portfolioColors.primary,
    shadowColor: portfolioColors.primaryStrong,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
  },
  timelineCard: {
    gap: 14,
  },
  timelineHeader: {
    gap: 12,
  },
  timelineCopy: {
    gap: 4,
  },
  timelineYears: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  timelineRole: {
    color: portfolioColors.text,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '900',
  },
  timelineCompany: {
    color: portfolioColors.primary,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  timelineChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  bulletList: {
    gap: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bulletText: {
    flex: 1,
  },
  metricRow: {
    gap: 12,
    marginTop: 4,
  },
  metricRowWide: {
    flexDirection: 'row',
  },
  metricRowMobile: {
    marginTop: 0,
  },
  metricItem: {
    flex: 1,
  },
});
