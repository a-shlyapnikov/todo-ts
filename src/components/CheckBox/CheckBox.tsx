import styles  from './CheckBox.module.css';
import { Check } from 'lucide-react';
type CheckProps = {
	completed: boolean;
};
function CheckBox({ completed }: CheckProps) {
	return <div className={styles.check}>{completed && <Check size={24} />}</div>;
}

export default CheckBox;
