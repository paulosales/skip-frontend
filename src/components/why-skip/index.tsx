import React, { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import {
  VideoButton,
  WhySkipContainer,
  WhySkipDetails,
  WhySkipImage,
  WhySkipInfo,
  WhySkipInfoBox,
  WhySkipRow,
  WhySkipTitle,
  WhySkipVideo,
} from "./styles";

function WhySkip(): ReactElement {
  return (
    <WhySkipContainer>
      <WhySkipRow>
        <WhySkipInfo>
          <WhySkipInfoBox>
            <WhySkipTitle>
              <FormattedMessage id="whySkipTheDishes" />
            </WhySkipTitle>
            <WhySkipDetails>
              <FormattedMessage id="whySkipTheDishesDetail" />
            </WhySkipDetails>
          </WhySkipInfoBox>
        </WhySkipInfo>
        <WhySkipVideo>
          <WhySkipImage src="assets/application_video_background.jpg" />
          <VideoButton type="button" id="skip-button">
            <FormattedMessage id="watchTheVideo" />
          </VideoButton>
        </WhySkipVideo>
      </WhySkipRow>
    </WhySkipContainer>
  );
}

export default WhySkip;
