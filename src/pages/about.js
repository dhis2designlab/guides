import React from 'react'
import { Article } from '../components'

const dhis2DesignLab =
    'https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/'
const dhis2 = 'https://www.dhis2.org/'
const repository = 'https://github.com/dhis2designlab/guides'

export default () => (
    <Article>
        <h1>About</h1>
        <h2>DHIS2 design lab</h2>
        <p>
            The <a href={dhis2DesignLab}>DHIS2 design lab</a> aims to extend our
            understanding of how generic software can be made usable to
            end-users when implemented in different contexts. We do this through
            practical interventions where we work to strengthen the usability of
            the global generic health software <a href={dhis2}>DHIS2</a> for
            end-users in local implementations.
        </p>
        <h2>Content</h2>
        <p>
            This website consists of guides focusing on development of web
            applications for DHIS2. Other categories may be added at a later
            point. The source code can be found <a href={repository}>here</a>.
        </p>
    </Article>
)
