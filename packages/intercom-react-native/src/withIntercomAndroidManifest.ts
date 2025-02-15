import { ConfigPlugin, withAndroidManifest, AndroidConfig } from "@expo/config-plugins";

export const withIntercomAndroidManifest: ConfigPlugin = (config) => {
    config = AndroidConfig.Permissions.withPermissions(config, [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.VIBRATE"
    ])

    // config = AndroidConfig.Manifest.get
    return withAndroidManifest(config, async (config) => {
        return config;
    });
};