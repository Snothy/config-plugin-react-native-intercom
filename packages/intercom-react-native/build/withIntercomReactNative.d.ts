import { ConfigPlugin } from "@expo/config-plugins";
interface PluginProps {
    /**
     * Intercom api key
     */
    iosApiKey?: string;
    /**
     * Intercom app id
     */
    androidApiKey?: string;
    /**
     * The app id
     */
    appId: string;
    /**
     * Optional string to set for the photo usage description in intercom
     * relative to project root
     */
    iosPhotoUsageDescription?: string;
    /** Bumps the min platform version in iOS to 13 */
    experimentalBumpMinIosPlatformVersion?: boolean;
}
declare const _default: ConfigPlugin<PluginProps>;
export default _default;
