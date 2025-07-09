import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider defaultColorScheme="light">
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}