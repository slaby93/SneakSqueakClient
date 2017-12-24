import 'jest-styled-components';
import { createSerializer } from 'enzyme-to-json';

export default expect => expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
