import { html } from 'lit';
import '../components/UI/PlaceHolderStory/PlaceHolderStory';

const renderSkeletonUICard = (count) =>
  [...Array(count)].map(
    (_) => html`<place-holder-story class="col-lg-4 col-md-6"></place-holder-story>`,
  );

export default renderSkeletonUICard;
