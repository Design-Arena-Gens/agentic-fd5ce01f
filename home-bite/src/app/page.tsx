"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { TopNav } from "@/components/navigation/TopNav";
import { SearchBar } from "@/components/forms/SearchBar";
import { PhoneNumberInput } from "@/components/forms/PhoneNumberInput";
import { OtpInput } from "@/components/forms/OtpInput";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TagButton } from "@/components/forms/TagButton";
import { FilterBar } from "@/components/forms/FilterBar";
import { MealCard } from "@/components/cards/MealCard";
import { ChefCard } from "@/components/cards/ChefCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { PromoBanner } from "@/components/marketing/PromoBanner";
import { OrderSummary } from "@/components/orders/OrderSummary";
import { DeliveryTracker } from "@/components/orders/DeliveryTracker";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { EmptyState } from "@/components/ui/empty-state";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { ProgressTracker } from "@/components/ui/progress-tracker";

const colorTokens = [
  { name: "Primary Orange", value: "var(--hb-color-primary-orange)" },
  { name: "Primary Green", value: "var(--hb-color-primary-green)" },
  { name: "Warm White", value: "var(--hb-color-warm-white)" },
  { name: "Light Grey", value: "var(--hb-color-light-grey)" },
  { name: "Text Dark", value: "var(--hb-color-text-dark)" },
  { name: "Error Red", value: "var(--hb-color-error-red)" },
  { name: "Success Green", value: "var(--hb-color-success-green)" },
];

const typographySamples = [
  { label: "H1 / 24px Semi-Bold", className: "text-2xl font-semibold" },
  { label: "H2 / 20px Medium", className: "text-xl font-medium" },
  { label: "Body / 16px Regular", className: "text-base" },
  { label: "Small / 13px Regular", className: "text-xs" },
];

const spacingSystem = [
  { label: "8px - Base", size: 8 },
  { label: "16px - Section", size: 16 },
  { label: "24px - Major", size: 24 },
  { label: "32px - Header", size: 32 },
];

const bottomNavItems = [
  { label: "Home", icon: "🏠", active: true },
  { label: "Orders", icon: "🧾", badge: 2 },
  { label: "Wallet", icon: "💳" },
  { label: "Profile", icon: "👤" },
];

export default function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-[color:var(--color-light-grey)] pb-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10">
        <TopNav unreadCount={3} />

        <section className="hb-section">
          <div>
            <h2 className="hb-section-title">Foundation</h2>
            <p className="hb-section-subtitle">
              Color tokens, typography, and spacing primitives for Home Bite.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="hb-card space-y-5">
              <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
                Color Palette
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {colorTokens.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_20px_rgba(17,24,39,0.06)]"
                  >
                    <span
                      className="h-12 w-12 rounded-2xl"
                      style={{ background: color.value }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--color-text-dark)]">
                        {color.name}
                      </p>
                      <p className="text-xs text-[#777]">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hb-card space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--color-text-dark)]">
                  Typography System
                </h3>
                <p className="text-sm text-[#777]">
                  Scales tuned for a warm, approachable food marketplace experience.
                </p>
              </div>
              <div className="space-y-4">
                {typographySamples.map((sample) => (
                  <div key={sample.label} className="space-y-1">
                    <p className={sample.className}>
                      {sample.label.includes("H1") && "Discover Homemade Goodness"}
                      {sample.label.includes("H2") && "Curated by local chefs"}
                      {sample.label.includes("Body") && "Fresh tiffins crafted daily with seasonal produce and traditional recipes."}
                      {sample.label.includes("Small") && "Delivery between 6:30PM - 7:15PM"}
                    </p>
                    <p className="text-xs text-[#999]">{sample.label}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[color:var(--color-text-dark)]">
                  Spacing Scale
                </h4>
                <div className="flex flex-wrap gap-4">
                  {spacingSystem.map((space) => (
                    <div key={space.size} className="flex flex-col items-center gap-2">
                      <div
                        className="rounded-full bg-[color:var(--color-primary-orange)]/15"
                        style={{ width: space.size, height: space.size }}
                      />
                      <span className="text-xs text-[#777]">{space.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hb-section">
          <div>
            <h2 className="hb-section-title">Forms &amp; Inputs</h2>
            <p className="hb-section-subtitle">
              Mobile-first input patterns with OTP support and contextual actions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="hb-card space-y-6">
              <SearchBar enableMicrophone />
              <PhoneNumberInput />
            </div>
            <div className="hb-card space-y-6">
              <OtpInput length={6} autoFocus />
              <FilterBar
                title="Cuisine Matrix"
                tags={[
                  { label: "North Indian", active: true },
                  { label: "South Indian" },
                  { label: "Vegan" },
                  { label: "Diabetic friendly" },
                  { label: "High protein" },
                ]}
              />
              <div className="flex flex-wrap gap-3">
                <TagButton label="Breakfast" />
                <TagButton label="Meal Prep" />
                <TagButton label="Desserts" />
                <TagButton label="Snacks" />
              </div>
            </div>
          </div>
          <div className="hb-card space-y-4">
            <h3 className="text-base font-semibold text-[color:var(--color-text-dark)]">
              Actions &amp; Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="ghost">Ghost Action</Button>
              <Button variant="soft">Soft CTA</Button>
              <Button variant="danger">Danger</Button>
              <QuantityStepper />
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge>New</Badge>
              <Badge tone="success">Ready</Badge>
              <Badge tone="error">Delayed</Badge>
              <Badge tone="outline">Preorder</Badge>
              <Badge tone="muted">Sold Out</Badge>
            </div>
          </div>
        </section>

        <section className="hb-section">
          <div>
            <h2 className="hb-section-title">Discovery Cards</h2>
            <p className="hb-section-subtitle">
              Meal, chef, and category cards with hover states and badges.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MealCard
              title="Smoked Paneer Tikka Bowl"
              chef="Chef Radhika"
              price={349}
              rating={4.7}
              ratingCount={268}
              preparationTime="Ready in 25 mins"
              tags={["Protein Rich", "Low Carb", "Spicy"]}
              imageUrl="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
            />
            <div className="hb-grid">
              <ChefCard
                name="Chef Nandita Rao"
                cuisine="Coastal Karnataka"
                yearsOfExperience={12}
                rating={4.9}
                completedOrders={1250}
                avatarUrl="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
                specialties={["Millet Meals", "Vegan Curries", "Seasonal Pickles"]}
              />
              <div className="grid gap-4 md:grid-cols-2">
                <CategoryCard
                  title="Tiffin Plans"
                  description="Daily rotating menus crafted with balanced nutrition in mind."
                  mealCount={24}
                  icon="🍱"
                  active
                />
                <CategoryCard
                  title="Regional Favourites"
                  description="Handpicked dishes from micro-regional Indian cuisines."
                  mealCount={18}
                  icon="🧆"
                />
              </div>
            </div>
          </div>
          <PromoBanner
            title="Festive Feast Week – Flat 25% OFF"
            description="Order curated festive thalis crafted by verified home chefs. Available for the next 5 days only."
            ctaLabel="Explore Menus"
            secondaryText="Use code FESTIVE25"
          />
        </section>

        <section className="hb-section">
          <div>
            <h2 className="hb-section-title">Orders &amp; Tracking</h2>
            <p className="hb-section-subtitle">
              Checkout, order summary, and live delivery components.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <OrderSummary
              items={[
                { title: "Mangalorean Ghee Roast", quantity: 2, price: 249, note: "Medium spice" },
                { title: "Ragi Neer Dosa", quantity: 4, price: 149 },
              ]}
              deliveryFee={29}
              savings={60}
            />
            <div className="hb-grid">
              <ProgressTracker
                currentIndex={2}
                steps={[
                  { label: "Cart" },
                  { label: "Address" },
                  { label: "Payment" },
                  { label: "Track" },
                ]}
              />
              <DeliveryTracker
                stages={[
                  {
                    title: "Order Confirmed",
                    subtitle: "Chef accepted your order at 5:12 PM",
                    completed: true,
                  },
                  {
                    title: "Cooking in Progress",
                    subtitle: "Preparation underway, finishes by 5:40 PM",
                    current: true,
                  },
                  {
                    title: "Out for Delivery",
                    subtitle: "Delivery partner assigned • ETA 6:10 PM",
                  },
                  {
                    title: "Delivered",
                    subtitle: "Enjoy your meal!",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="hb-section">
          <div>
            <h2 className="hb-section-title">Social Proof &amp; Empty States</h2>
            <p className="hb-section-subtitle">
              Reviews, testimonials, and fallback UI components.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="hb-grid">
              <ReviewCard
                name="Ananya Sharma"
                avatarUrl="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80"
                rating={4.8}
                orderedItem="Millet Khichdi"
                timeAgo="2 hours ago"
                review="Loved the homely flavours and mindful portioning. Packaging was eco-friendly and still piping hot!"
              />
              <ReviewCard
                name="Rohan Gupta"
                avatarUrl="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                rating={5.0}
                orderedItem="Amritsari Kulcha"
                timeAgo="1 day ago"
                review="Crisp on the outside, soft within. Authentic flavours that took me straight back to Punjab."
              />
            </div>
            <EmptyState
              title="No Saved Meals Yet"
              description="Tap on the heart icons across meals to build your favourites list and reorder in seconds."
              ctaLabel="Browse trending meals"
            />
          </div>
        </section>

        <BottomNav items={bottomNavItems} />
      </div>
    </div>
  );
}
