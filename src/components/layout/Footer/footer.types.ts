import React from "react";

/** Type for representing a social network's icon and URL. */
export type SocialNetwork = {
  id: number; // Unique identifier for the social network
  icon: React.ReactNode; // Icon component for the social network
  url: string; // URL of the social network
};

/** Type for representing an individual footer link. */
export type FooterLink = {
  id: number; // Unique identifier for the link
  label: string; // Display text for the link
  url: string; // URL the link navigates to
};

/** Type for representing a group of footer links. */
export type FooterLinkGroup = {
  id: number; // Unique identifier for the group
  title: string; // Title of the group (e.g., "Company", "Support")
  children: FooterLink[]; // List of links under this group
};

/** Type for representing a payment badge image. */
export type PaymentBadge = {
  id: number; // Unique identifier for the badge
  srcUrl: string; // Image source URL for the payment badge
};
