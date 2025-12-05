# 🎨 Professional Animations Guide

This document outlines all the professional animations added to the Voyager Education project.

## ✨ Animation Components Created

### 1. **AnimatedBackground** (`src/component/AnimatedBackground.jsx`)

Professional animated background with network nodes and connecting lines representing strategic planning connections.

**Features:**

- Animated particle network (strategic planning nodes)
- Connecting lines between nodes
- Floating gradient orbs
- Grid pattern overlay
- Configurable intensity (low, medium, high)

**Usage:**

```jsx
import AnimatedBackground from "@/component/AnimatedBackground";

<AnimatedBackground intensity="medium" />;
```

### 2. **ScrollReveal** (`src/component/ScrollReveal.jsx`)

Smooth scroll-triggered animations that reveal elements as they enter the viewport.

**Features:**

- Multiple directions: up, down, left, right, fade
- Customizable delay and distance
- Smooth easing transitions
- Intersection Observer optimized

**Usage:**

```jsx
import ScrollReveal from "@/component/ScrollReveal";

<ScrollReveal direction="up" delay={200} distance={50}>
  <div>Your content here</div>
</ScrollReveal>;
```

### 3. **AnimatedText** (`src/component/AnimatedText.jsx`)

Text animations with multiple variants for engaging reveals.

**Features:**

- Fade-up, fade-down, fade-left, fade-right, fade, scale
- Scroll-triggered
- Smooth transitions

**Usage:**

```jsx
import AnimatedText from "@/component/AnimatedText";

<AnimatedText variant="fade-up" delay={300}>
  <h1>Your heading</h1>
</AnimatedText>;
```

**Typewriter Effect:**

```jsx
import { TypewriterText } from "@/component/AnimatedText";

<TypewriterText text="Your text here" speed={50} />;
```

### 4. **CounterAnimation** (`src/component/CounterAnimation.jsx`)

Animated number counter that counts up when it enters the viewport.

**Features:**

- Smooth counting animation
- Customizable duration
- Prefix and suffix support
- Easing function for natural motion

**Usage:**

```jsx
import CounterAnimation from "@/component/CounterAnimation";

<CounterAnimation end={500} suffix="+" prefix="$" duration={2000} />;
```

### 5. **MagneticButton** (`src/component/MagneticButton.jsx`)

Interactive button that follows mouse movement with magnetic effect.

**Features:**

- Smooth magnetic attraction
- Customizable strength
- Professional hover interactions

**Usage:**

```jsx
import MagneticButton from "@/component/MagneticButton";

<MagneticButton
  strength={0.3}
  className="your-button-classes"
  onClick={handleClick}
>
  Click Me
</MagneticButton>;
```

### 6. **ProgressBar** (`src/component/ProgressBar.jsx`)

Animated progress bar that fills when it enters the viewport.

**Features:**

- Smooth fill animation
- Customizable colors
- Optional label display
- Easing transitions

**Usage:**

```jsx
import ProgressBar from "@/component/ProgressBar";

<ProgressBar
  percentage={75}
  color="from-cyan-500 to-blue-600"
  showLabel={true}
  duration={1500}
/>;
```

### 7. **ParallaxScroll** (`src/component/ParallaxScroll.jsx`)

Parallax scrolling effect for depth and immersion.

**Features:**

- Customizable scroll speed
- Performance optimized
- Smooth parallax movement

**Usage:**

```jsx
import ParallaxScroll from "@/component/ParallaxScroll";

<ParallaxScroll speed={0.5}>
  <div>Your parallax content</div>
</ParallaxScroll>;
```

### 8. **LoadingSpinner** (`src/component/LoadingSpinner.jsx`)

Professional loading spinner with smooth rotation.

**Features:**

- Multiple sizes (sm, md, lg, xl)
- Smooth rotation animation
- Professional design

**Usage:**

```jsx
import LoadingSpinner from "@/component/LoadingSpinner";

<LoadingSpinner size="md" />;
```

## 🎭 CSS Animations Added

All animations are in `src/app/globals.css`:

### Float Animations

- `animate-float-slow` - Slow floating motion (20s)
- `animate-float-medium` - Medium floating motion (15s)
- `animate-float-fast` - Fast floating motion (10s)

### Pulse & Glow

- `animate-pulse-glow` - Pulsing glow effect (4s)

### Slide Animations

- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right

### Scale & Rotate

- `animate-scale-in` - Scale in animation
- `animate-rotate-in` - Rotate in animation

### Special Effects

- `animate-shimmer` - Shimmer effect
- `animate-gradient-shift` - Animated gradient background
- `animate-bounce-gentle` - Gentle bouncing
- `animate-spin-slow` - Slow rotation

### Stagger Delays

- `stagger-1` through `stagger-6` - Sequential animation delays

## 📍 Where Animations Are Used

### HeroSection

- ✅ AnimatedBackground (medium intensity)
- ✅ ScrollReveal for text elements
- ✅ AnimatedText for headings
- ✅ CounterAnimation for stats (500+ Schools)
- ✅ MagneticButton for CTAs
- ✅ Floating badge animation

### OurVision

- ✅ AnimatedBackground (low intensity)
- ✅ Existing carousel animations
- ✅ Hover effects on cards

### CustomerApproach

- ✅ AnimatedBackground (low intensity)
- ✅ Card hover animations
- ✅ Gradient effects

### OurValues

- ✅ AnimatedBackground (low intensity)
- ✅ ScrollReveal for headings
- ✅ Card stagger animations
- ✅ Icon hover effects

## 🎯 Animation Best Practices

1. **Performance**: All animations use `requestAnimationFrame` and Intersection Observer for optimal performance
2. **Accessibility**: Animations respect `prefers-reduced-motion` settings
3. **Professional**: Subtle and elegant, never distracting
4. **Theme-Aligned**: All animations support the strategic planning theme
5. **Responsive**: Animations work across all device sizes

## 🚀 Future Enhancements

Potential additions:

- Page transition animations
- Scroll progress indicators
- Interactive 3D elements
- Advanced particle systems
- Micro-interactions

## 📝 Notes

- All animations are optimized for performance
- CSS animations use GPU acceleration where possible
- Canvas animations are throttled for smooth performance
- All components are fully typed and documented
