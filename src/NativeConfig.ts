import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getConstants(): {};
} 
export default TurboModuleRegistry.get<Spec>('ConfigNativeModule') as Spec