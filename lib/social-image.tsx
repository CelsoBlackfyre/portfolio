import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const socialImageSize = { width: 1200, height: 630 };

export function socialImage({
  title,
  description,
  category,
  footer,
}: {
  title: string;
  description: string;
  category: string;
  footer: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "58px 64px",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101014",
          color: "#f6f3f1",
          fontFamily: "sans-serif",
          borderLeft: "12px solid #e0446a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                width: 48,
                border: "1px solid #68636f",
                borderRadius: 12,
                fontSize: 20,
              }}
            >
              {profile.initials}
            </div>
            <span style={{ fontSize: 24 }}>{profile.name}</span>
          </div>
          <span style={{ color: "#b5afbd", fontSize: 21 }}>{category}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1040,
              fontSize: title.length > 30 ? 72 : 88,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-4px",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", maxWidth: 960, color: "#b5afbd", fontSize: 27, lineHeight: 1.4 }}>
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #39353e",
            paddingTop: 24,
            fontSize: 21,
          }}
        >
          <span style={{ color: "#f47b98" }}>{footer}</span>
          <span style={{ color: "#b5afbd" }}>@{profile.handle}</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
