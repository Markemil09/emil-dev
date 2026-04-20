import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ImageStyle,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  ScrollView as ScrollViewType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInUp,
  LinearTransition,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export const portfolioColors = {
  background: '#111316',
  backgroundAlt: '#0c0e11',
  surfaceLow: '#1a1c1f',
  surface: '#1e2023',
  surfaceHigh: '#282a2d',
  surfaceHighest: '#333538',
  text: '#f3f5f7',
  textMuted: '#bbc9cf',
  textDim: '#7f8e95',
  outline: 'rgba(133, 147, 153, 0.18)',
  primary: '#a5e7ff',
  primaryStrong: '#00d2ff',
  secondaryContainer: '#374c56',
  secondaryText: '#a6bcc7',
  badgeDark: '#0f1720',
} as const;

export const portfolioImages = {
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCkD_3mQwIoB2vdG0_4JU1R5_WI5ueK2l--BTv7JGChZui1t5WUyZDXnE3ZefeDXrPdIJ1YlMBt4owfwjkvCVMXC2jDNvZ-lj3UWmq77rdqrXU8Y8DCuuzSxQeUdn8cGziKrALEe-7vXhv5l0nYv2w2Yvh3kP5PyQ0M8G-0H1I8xcQKJWpyaNLytThntmn4nG8C5ArlqWBRaWDgR99A_PA6XlM3vf_uaB8a--CKsHAWYh0SQOR99vHuTUaZGKaPGn2CtTOl9o5svgBm',
  featured:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDM-4p2dtHLHFMq7myH_-tQftOET1aBvlUqjMvk1ul7M958ES5wKI98cxBTf7NnEY5vu7d7OwBEXFTg65Xsl14iA-pxy6Fbnw2fEh306NCWQ8BY502Y8s6J-KN-_WqDzmHQKwSJN5Wq1hIVbmiYvjsaRxMhhVWpQ4TG9EW4VLhPQ3nzcHzU00vhGbqDpdip9XEB-p38x6BR5hVWsjJj2m2omCdLVD-la5baWC4FLyk6IGsfDN2eiJRSohtWAEy75nwXWu4FTQTnCuu1',
  projectA:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDgUdbMgQ-ekpqrvi2epWz5lnqK44Vmah7tx_aiwso5D0lgDarwQ5nZZDbwCGpDqAP4rde3XIBqG6GU1e9b678okFuS_cDS2QjbMWPgn4vCs-WczCgsUdyDyGQSEHzGYx1KARSYLkjkhkeH749WsLDBhoJQjW4oKer4CmW8_PLY1PK2Livp1WiyRkwvJE-_Ut3GyOIspqTSp_EWNTOtU0phcndC0GSZ0nKsF7ZbsXDrX5bEZCikhMsteqC5HSa_mKzO7SpVjvvPX6fj',
  projectB:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDbSwv2dIR-37dR5FiaLsDLNkso9hzF_EMCIDOQhNKsjFf4zBUBefrqkZCQbdl0CDMN_OCEvbqSQtyE3GkzXJSx50CK8DstRFvqTB5EDAeAnmulCLHytk703XfDy3y4-kg6aHyiFrifuMtiknzicWXIBtFKSSo4IYDo19ejm41TrlJQak2yf7eGkAANXlxrxbzki-l5qzYaVrw8U9ma9n7ZU8j2AmOEJw2VFib16CQAIonVz2XU4J76TIEhcqZwGkXgRDiHx8vGEDfT',
  projectC:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCH3abj8a2jGLNp-urr64UThObPQx38VbIo8lwXhZgjSKrvbRGIS4Yv7XuZRw9JR9-oGtPHGYwEcnBptR24WpKYWGTzGeaOwZkFDEoErRJjXcL6bfo5sEaCmOaujcrr1RbsP9OXqandystrshJ7c61mM5CF_TNmARG4F71QwgBl1MoDqmG_HI8iK6cN9IaAyJY0sR1osMBdbyK9EzC3FOBMz0z_vqNL0VbcEPL3boYcupv_OQomjj4zZL-rY2BOYTgUKYrPI75TUyHr',
  projectD:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC9OhjghDqv82cBvgOGLA72U_i9HWDuO7j-hrU_UMM7EAhDEbs2z0o3gjsE-QufMHV6390-nt_RNUYyFOsg4xdQd14T-vOdapeqezHad1jIOdkFnmUClFQ1wUoVjZ0LpPrUw-sEI4OL679D89zWJNWCvdB6SfiNzxDKIV-IBxjmoPXJ75HhgEkv_Njo2dQrl92jBdDKqo0UDSdRWA8bCaNHw6ywjGpb8l7BRCHQMFPpupnO0r0rjf07rx1M0Jh6zxxUq6pLxWUP1peg',
  emCapital: require('../assets/images/em-capital.png'),
  propertyManagement: require('../assets/images/property-management.png'),
};

export function usePortfolioLayout() {
  const { width } = useWindowDimensions();

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768,
    isDesktop: width >= 1100,
  };
}

export function PortfolioScreen({ children }: { children: ReactNode }) {
  const { isDesktop } = usePortfolioLayout();
  const scrollViewRef = useRef<ScrollViewType | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState<Record<string, number>>({});
  const [viewportHeight, setViewportHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const mouseX = useSharedValue(0);
  const mouseY = useSharedValue(0);

  const handlePointerMove = useCallback((e: any) => {
    if (Platform.OS !== 'web') return;
    mouseX.value = withSpring(e.nativeEvent.pageX - (e.nativeEvent.target?.ownerDocument?.documentElement?.clientWidth ?? 0) / 2, { damping: 18, stiffness: 60 });
    mouseY.value = withSpring(e.nativeEvent.pageY - (e.nativeEvent.target?.ownerDocument?.documentElement?.clientHeight ?? 0) / 2, { damping: 18, stiffness: 60 });
  }, [mouseX, mouseY]);

  const registerSection = useCallback((id: string, y: number) => {
    setSectionOffsets((current) => {
      if (current[id] === y) {
        return current;
      }

      return {
        ...current,
        [id]: y,
      };
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      scrollY,
      sectionOffsets,
      registerSection,
      viewportHeight,
      contentHeight,
    }),
    [contentHeight, registerSection, scrollY, sectionOffsets, viewportHeight]
  );

  const scrollToTop = useCallback(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const showBackToTop = scrollY > 280;

  return (
    <PortfolioScrollContext.Provider value={contextValue}>
      <SafeAreaView
        style={styles.safeArea}
        edges={['top', 'left', 'right']}
        onPointerMove={handlePointerMove as any}>
        <PortfolioNav />
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContent}
          onContentSizeChange={(_, height) => setContentHeight(height)}
          onLayout={(event) => setViewportHeight(event.nativeEvent.layout.height)}
          onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
          scrollEventThrottle={16}
          style={styles.scrollView}>
          <AmbientGlow style={styles.glowOne} duration={6200} travelX={18} travelY={24} mouseX={mouseX} mouseY={mouseY} factorX={0.18} factorY={0.14} />
          <AmbientGlow style={styles.glowTwo} delay={300} duration={7400} travelX={-14} travelY={18} mouseX={mouseX} mouseY={mouseY} factorX={-0.14} factorY={-0.18} />
          <AmbientGlow style={styles.glowThree} delay={600} duration={8800} travelX={10} travelY={-20} mouseX={mouseX} mouseY={mouseY} factorX={0.22} factorY={0.10} />
          <AmbientGlow style={styles.glowFour} delay={900} duration={5600} travelX={-20} travelY={14} mouseX={mouseX} mouseY={mouseY} factorX={-0.16} factorY={0.20} />
          <Animated.View
            entering={FadeIn.duration(500)}
            layout={LinearTransition.duration(250)}
            style={[styles.pageShell, isDesktop ? styles.pageShellDesktop : null]}>
            {children}
          </Animated.View>
        </ScrollView>
        {showBackToTop ? (
          <Animated.View entering={FadeInUp.duration(220)} style={styles.backToTopWrap}>
            <Pressable
              style={({ hovered, pressed }: any) => [
                styles.backToTopButton,
                hovered ? styles.backToTopButtonHover : null,
                pressed ? styles.buttonPressed : null,
              ]}
              onPress={scrollToTop}>
              <MaterialIcons name="keyboard-arrow-up" size={22} color="#022633" />
            </Pressable>
          </Animated.View>
        ) : null}
      </SafeAreaView>
    </PortfolioScrollContext.Provider>
  );
}

export function scrollToPortfolioSection(sectionId: string) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') {
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (typeof window !== 'undefined') {
    window.history.replaceState(null, '', `/#${sectionId}`);
  }
}

export function PortfolioSection({
  id,
  children,
  style,
}: {
  id: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { registerSection } = usePortfolioScroll();
  const { isDesktop, isTablet } = usePortfolioLayout();
  const { containerStyle, handleLayout } = useViewportReveal({
    delay: 0,
    duration: 520,
    direction: 'down',
  });

  return (
    <Animated.View
      layout={LinearTransition.duration(250)}
      nativeID={id}
      onLayout={(event) => {
        registerSection(id, event.nativeEvent.layout.y);
        handleLayout(event.nativeEvent.layout.y, event.nativeEvent.layout.height);
      }}
      style={[
        styles.sectionBlock,
        id !== 'home'
          ? isDesktop
            ? styles.sectionBlockDesktopSpacing
            : isTablet
              ? styles.sectionBlockTabletSpacing
              : styles.sectionBlockMobileSpacing
          : null,
        style,
        containerStyle,
      ]}>
      {children}
    </Animated.View>
  );
}

export function AnimatedReveal({
  children,
  style,
  delay = 0,
  duration = 520,
  direction = 'down',
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  delay?: number;
  duration?: number;
  direction?: 'down' | 'up';
}) {
  const { containerStyle, handleLayout } = useViewportReveal({
    delay,
    duration,
    direction,
  });

  return (
    <Animated.View
      layout={LinearTransition.duration(250)}
      onLayout={(event) => handleLayout(event.nativeEvent.layout.y, event.nativeEvent.layout.height)}
      style={[style, containerStyle]}>
      {children}
    </Animated.View>
  );
}

export function AnimatedPanel({
  children,
  style,
  delay = 0,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  delay?: number;
}) {
  return (
    <AnimatedReveal delay={delay} style={[styles.panel, style]}>
      {children}
    </AnimatedReveal>
  );
}

export function AnimatedProgress({
  progress,
  delay = 0,
}: {
  progress: number;
  delay?: number;
}) {
  const width = useSharedValue(0);
  const { isVisible, handleLayout } = useViewportReveal({
    delay,
    duration: 850,
    direction: 'down',
  });

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    width.value = withDelay(
      delay,
      withTiming(progress, {
        duration: 850,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [delay, isVisible, progress, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${Math.max(0, Math.min(1, width.value)) * 100}%`,
  }));

  return (
    <View
      onLayout={(event) => handleLayout(event.nativeEvent.layout.y, event.nativeEvent.layout.height)}
      style={styles.progressTrack}>
      <Animated.View style={[styles.progressFill, animatedStyle]} />
    </View>
  );
}

function useViewportReveal({
  delay,
  duration,
  direction,
}: {
  delay: number;
  duration: number;
  direction: 'down' | 'up';
}) {
  const { scrollY, viewportHeight } = usePortfolioScroll();
  const [layout, setLayout] = useState<{ y: number; height: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const progress = useSharedValue(0);

  const handleLayout = useCallback((y: number, height: number) => {
    setLayout((current) => {
      if (current?.y === y && current?.height === height) {
        return current;
      }

      return { y, height };
    });
  }, []);

  useEffect(() => {
    if (isVisible || !layout || viewportHeight <= 0) {
      return;
    }

    const revealLine = scrollY + viewportHeight - 96;
    const stillInRange = scrollY <= layout.y + layout.height;

    if (revealLine >= layout.y && stillInRange) {
      setIsVisible(true);
    }
  }, [isVisible, layout, scrollY, viewportHeight]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    progress.value = withDelay(
      delay,
      withTiming(1, {
        duration,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [delay, duration, isVisible, progress]);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      {
        translateY:
          direction === 'up' ? (1 - progress.value) * 20 : (1 - progress.value) * 28,
      },
    ],
  }));

  return { containerStyle, handleLayout, isVisible };
}

function AmbientGlow({
  style,
  duration,
  delay = 0,
  travelX,
  travelY,
  mouseX,
  mouseY,
  factorX = 0,
  factorY = 0,
}: {
  style: StyleProp<ViewStyle>;
  duration: number;
  delay?: number;
  travelX: number;
  travelY: number;
  mouseX?: SharedValue<number>;
  mouseY?: SharedValue<number>;
  factorX?: number;
  factorY?: number;
}) {
  const offset = useSharedValue(0);

  useEffect(() => {
    offset.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration, easing: Easing.inOut(Easing.sin) }),
          withTiming(0, { duration, easing: Easing.inOut(Easing.sin) })
        ),
        -1,
        false
      )
    );
  }, [delay, duration, offset]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: 0.5 + offset.value * 0.45,
    transform: [
      { translateX: offset.value * travelX + (mouseX ? mouseX.value * factorX : 0) },
      { translateY: offset.value * travelY + (mouseY ? mouseY.value * factorY : 0) },
      { scale: 1 + offset.value * 0.08 },
    ],
  }));

  return <Animated.View pointerEvents="none" style={[style, animatedStyle]} />;
}

function PortfolioNav() {
  const { width, isMobile } = usePortfolioLayout();
  const isDesktopNav = width >= 900;
  const isStackedNav = width < 560;
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];
  const activeSection = useActivePortfolioSection(items.map((item) => item.id));

  if (isMobile) {
    return (
      <View style={styles.navBar}>
        <View style={[styles.navContentCompact, styles.navContentMobile]}>
          <View style={styles.navTopRow}>
            <Pressable onPress={() => scrollToPortfolioSection('home')}>
              {({ hovered }: any) => (
                <Text style={[styles.navBrand, hovered ? styles.navBrandHover : null]}>
                  MARK_EMIL
                </Text>
              )}
            </Pressable>
            <Pressable
              style={({ hovered, pressed }: any) => [
                styles.navButton,
                styles.navButtonMobile,
                hovered ? styles.navButtonHover : null,
                pressed ? styles.buttonPressed : null,
              ]}
              onPress={() => scrollToPortfolioSection('contact')}>
              <Text style={styles.navButtonText}>Resume.pdf</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.navBar}>
      {isDesktopNav ? (
        <View style={styles.navContent}>
          <Pressable onPress={() => scrollToPortfolioSection('home')}>
            {({ hovered }: any) => (
              <Text style={[styles.navBrand, hovered ? styles.navBrandHover : null]}>
                  MARK_EMIL
              </Text>
            )}
          </Pressable>
          <View style={styles.navLinksVisible}>
            {items.map((item, index) => (
              <Pressable key={`${item.id}-${index}`} onPress={() => scrollToPortfolioSection(item.id)}>
                {({ hovered }: any) => (
                  <Text
                    style={[
                      styles.navLink,
                      item.id === activeSection || hovered ? styles.navLinkActive : null,
                    ]}>
                    {item.label}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
          <Pressable
            style={({ hovered, pressed }: any) => [
              styles.navButton,
              hovered ? styles.navButtonHover : null,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={() => scrollToPortfolioSection('contact')}>
            <Text style={styles.navButtonText}>Resume.pdf</Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={[
            styles.navContentCompact,
            isMobile ? styles.navContentMobile : null,
          ]}>
          <View style={styles.navTopRow}>
            <Pressable onPress={() => scrollToPortfolioSection('home')}>
              {({ hovered }: any) => (
                <Text style={[styles.navBrand, hovered ? styles.navBrandHover : null]}>
                  THE_ARCHITECT
                </Text>
              )}
            </Pressable>
            <Pressable
              style={({ hovered, pressed }: any) => [
                styles.navButton,
                styles.navButtonMobile,
                hovered ? styles.navButtonHover : null,
                pressed ? styles.buttonPressed : null,
              ]}
              onPress={() => scrollToPortfolioSection('contact')}>
              <Text style={styles.navButtonText}>Resume.pdf</Text>
            </Pressable>
          </View>
          <View
            style={[
              isStackedNav ? styles.navLinksCompact : styles.navLinksWrapped,
              isMobile ? styles.navLinksMobile : null,
            ]}>
            {items.map((item, index) => (
              <Pressable key={`${item.id}-${index}`} onPress={() => scrollToPortfolioSection(item.id)}>
                {({ hovered }: any) => (
                  <Text
                    style={[
                      styles.navLink,
                      item.id === activeSection || hovered ? styles.navLinkActive : null,
                    ]}>
                    {item.label}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

function useActivePortfolioSection(sectionIds: string[]) {
  const { scrollY, sectionOffsets, viewportHeight, contentHeight } = usePortfolioScroll();
  const stableSectionIds = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);

  return useMemo(() => {
    const anchorLine = scrollY + 180;
    const isNearBottom =
      contentHeight > 0 && viewportHeight > 0 && scrollY + viewportHeight >= contentHeight - 24;
    let nextActive = stableSectionIds[0] ?? 'home';

    if (isNearBottom && stableSectionIds.length > 0) {
      return stableSectionIds[stableSectionIds.length - 1]!;
    }

    for (const id of stableSectionIds) {
      const offset = sectionOffsets[id];
      if (typeof offset !== 'number') {
        continue;
      }

      if (anchorLine >= offset) {
        nextActive = id;
      }
    }

    return nextActive;
  }, [contentHeight, scrollY, sectionOffsets, stableSectionIds, viewportHeight]);
}

type PortfolioScrollContextValue = {
  scrollY: number;
  sectionOffsets: Record<string, number>;
  registerSection: (id: string, y: number) => void;
  viewportHeight: number;
  contentHeight: number;
};

const PortfolioScrollContext = createContext<PortfolioScrollContextValue | null>(null);

function usePortfolioScroll() {
  const context = useContext(PortfolioScrollContext);

  if (!context) {
    throw new Error('usePortfolioScroll must be used within PortfolioScreen');
  }

  return context;
}

export function BrandHeader({
  eyebrow,
  title,
  accent,
  description,
  meta,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  meta?: string;
}) {
  const { isDesktop, isTablet } = usePortfolioLayout();

  return (
    <View style={[styles.heroBlock, isDesktop ? styles.heroBlockDesktop : null]}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text
        style={[
          styles.heroTitle,
          isTablet ? styles.heroTitleTablet : null,
          isDesktop ? styles.heroTitleDesktop : null,
        ]}>
        {title}
        {accent ? <Text style={styles.heroAccent}>{accent}</Text> : null}
      </Text>
      <Text style={styles.heroDescription}>{description}</Text>
      {meta ? <Text style={styles.heroMeta}>{meta}</Text> : null}
    </View>
  );
}

export function Panel({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.panel, style]}>{children}</View>;
}

export function SectionTitle({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderCopy}>
        <Text style={styles.sectionEyebrow}>{eyebrow}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

export function PrimaryButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={({ hovered, pressed }: any) => [
        styles.button,
        styles.primaryButton,
        hovered ? styles.primaryButtonHover : null,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}

export function SecondaryButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={({ hovered, pressed }: any) => [
        styles.button,
        styles.secondaryButton,
        hovered ? styles.secondaryButtonHover : null,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{label}</Text>
    </Pressable>
  );
}

export function Chip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <View style={[styles.chip, active ? styles.chipActive : null]}>
      <Text style={[styles.chipText, active ? styles.chipTextActive : null]}>{label}</Text>
    </View>
  );
}

export function Metric({
  label,
  value,
  style,
}: {
  label: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.metricCard, style]}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

export function RemoteImage({
  source,
  style,
  contentFit = 'cover',
}: {
  source: string | number | object;
  style: StyleProp<ImageStyle>;
  contentFit?: 'cover' | 'contain';
}) {
  return <Image source={source as string} contentFit={contentFit} style={style} />;
}

export function FooterSignature({ label = 'MARK EMIL SARMIENTO / SOFTWARE ENGINEER' }: { label?: string }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerBrand}>{label}</Text>
      <Text style={styles.footerMeta}>
        mark.emil.sarmiento@gmail.com{'   '}
        <Text
          style={styles.footerLink}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/mark-emil-0235b51a7/')}>
          LinkedIn
        </Text>
        {'   '}+63 998 564 0423
      </Text>
    </View>
  );
}

export const portfolioText = StyleSheet.create({
  body: {
    color: portfolioColors.textMuted,
    fontSize: 15,
    lineHeight: 24,
  } satisfies TextStyle,
  bodySmall: {
    color: portfolioColors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  } satisfies TextStyle,
  label: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  } satisfies TextStyle,
  strong: {
    color: portfolioColors.text,
    fontWeight: '700',
  } satisfies TextStyle,
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: portfolioColors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: portfolioColors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 24,
  },
  pageShell: {
    width: '100%',
    alignSelf: 'center',
    gap: 24,
  },
  pageShellDesktop: {
    maxWidth: 1180,
    paddingTop: 28,
  },
  sectionBlock: {
    gap: 24,
    ...(Platform.OS === 'web' ? ({ scrollMarginTop: 90 } as any) : null),
  } as any,
  sectionBlockMobileSpacing: {
    marginTop: 28,
    paddingTop: 8,
  },
  sectionBlockTabletSpacing: {
    marginTop: 36,
    paddingTop: 12,
  },
  sectionBlockDesktopSpacing: {
    marginTop: 52,
    paddingTop: 16,
  },
  glowOne: {
    position: 'absolute',
    top: -60,
    right: -80,
    width: 480,
    height: 480,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 210, 255, 0.22)',
  },
  glowTwo: {
    position: 'absolute',
    top: 500,
    left: -160,
    width: 420,
    height: 420,
    borderRadius: 999,
    backgroundColor: 'rgba(165, 231, 255, 0.18)',
  },
  glowThree: {
    position: 'absolute',
    top: 1100,
    right: -120,
    width: 380,
    height: 380,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 180, 220, 0.18)',
  },
  glowFour: {
    position: 'absolute',
    top: 1800,
    left: -100,
    width: 320,
    height: 320,
    borderRadius: 999,
    backgroundColor: 'rgba(120, 220, 255, 0.16)',
  },
  navBar: {
    backgroundColor: '#0b1018',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 73, 78, 0.18)',
  },
  navContent: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  navContentCompact: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 16,
    alignItems: 'stretch',
  },
  navContentMobile: {
    alignItems: 'stretch',
  },
  navTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  navBrand: {
    color: portfolioColors.text,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  navBrandHover: {
    color: portfolioColors.primary,
  },
  navLinksVisible: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  navLinksWrapped: {
    display: Platform.OS === 'web' ? 'flex' : 'none',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 4,
  },
  navLinksCompact: {
    display: Platform.OS === 'web' ? 'flex' : 'none',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    paddingTop: 4,
  },
  navLinksMobile: {
    width: '100%',
    gap: 14,
  },
  navLink: {
    color: portfolioColors.textDim,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  navLinkActive: {
    color: portfolioColors.primaryStrong,
  },
  navButton: {
    backgroundColor: portfolioColors.primary,
    borderRadius: 999,
    minHeight: 38,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonMobile: {
    marginLeft: 'auto',
  },
  navButtonHover: {
    backgroundColor: '#b9edff',
    transform: [{ translateY: -1 }],
  },
  navButtonText: {
    color: '#032a34',
    fontSize: 12,
    fontWeight: '800',
  },
  heroBlock: {
    paddingTop: 12,
    paddingBottom: 12,
    gap: 14,
  },
  heroBlockDesktop: {
    paddingTop: 36,
    paddingBottom: 24,
    maxWidth: 760,
  },
  eyebrow: {
    color: portfolioColors.primary,
    fontSize: 11,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: portfolioColors.text,
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '900',
    letterSpacing: -1.2,
  },
  heroTitleTablet: {
    fontSize: 56,
    lineHeight: 56,
    letterSpacing: -2.2,
  },
  heroTitleDesktop: {
    fontSize: 78,
    lineHeight: 74,
    letterSpacing: -3.2,
  },
  heroAccent: {
    color: portfolioColors.primaryStrong,
  },
  heroDescription: {
    color: portfolioColors.textMuted,
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 620,
  },
  heroMeta: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  panel: {
    backgroundColor: portfolioColors.surfaceLow,
    borderRadius: 22,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(60, 73, 78, 0.2)',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 8,
  },
  sectionHeaderCopy: {
    gap: 6,
    flex: 1,
  },
  sectionEyebrow: {
    color: portfolioColors.primary,
    fontSize: 11,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: portfolioColors.text,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '900',
    letterSpacing: -1.1,
  },
  sectionAction: {
    color: portfolioColors.textDim,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  button: {
    minHeight: 48,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: portfolioColors.primaryStrong,
  },
  primaryButtonHover: {
    backgroundColor: '#34daff',
    transform: [{ translateY: -1 }],
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: portfolioColors.outline,
  },
  secondaryButtonHover: {
    backgroundColor: 'rgba(51, 53, 56, 0.72)',
    borderColor: 'rgba(165, 231, 255, 0.22)',
  },
  buttonPressed: {
    opacity: 0.88,
  },
  primaryButtonText: {
    color: '#022633',
    fontSize: 14,
    fontWeight: '800',
  },
  secondaryButtonText: {
    color: portfolioColors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  chip: {
    backgroundColor: portfolioColors.secondaryContainer,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipActive: {
    backgroundColor: portfolioColors.surfaceHigh,
  },
  chipText: {
    color: portfolioColors.secondaryText,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  chipTextActive: {
    color: portfolioColors.text,
  },
  progressTrack: {
    height: 4,
    borderRadius: 999,
    backgroundColor: portfolioColors.surfaceHighest,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: portfolioColors.primary,
  },
  metricCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: portfolioColors.surfaceLow,
    borderRadius: 20,
    padding: 16,
    borderLeftWidth: 2,
    borderLeftColor: portfolioColors.primaryStrong,
  },
  metricValue: {
    color: portfolioColors.text,
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 8,
  },
  metricLabel: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  footer: {
    paddingTop: 28,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(60, 73, 78, 0.18)',
    gap: 10,
  },
  footerBrand: {
    color: portfolioColors.text,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
  footerMeta: {
    color: portfolioColors.textDim,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  footerLink: {
    color: portfolioColors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  backToTopWrap: {
    position: 'absolute',
    right: 16,
    bottom: 24,
  },
  backToTopButton: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: portfolioColors.primaryStrong,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.24,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  backToTopButtonHover: {
    backgroundColor: '#34daff',
    transform: [{ translateY: -1 }],
  },
});
