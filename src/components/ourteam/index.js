import React, { Component } from 'react'
import { connect } from 'react-redux'
import { user } from '../../actions/user'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import {
    OurTeamWrapper,
    DevCategoryName,
    DevInformBlock,
    DevInformImg,
    DevInformDescript,
    DevName
} from '../../ui/components/ourteam'

const mapStateToProps = ({  }) => ({
})

const mapDispachToProps = dispatch => bindActionCreators({
}, dispatch)

class OurTeam extends Component {

    render() {
        return (
            <OurTeamWrapper>
                <DevCategoryName>Frontend Developer</DevCategoryName>
                <DevInformBlock>
                    <DevInformImg src='les.jpg' />
                    <DevInformDescript>
                        <DevName href={'mailto:jaroslav_lesiv@outlook.com'}>Jaroslav Lesiv</DevName>
                    </DevInformDescript>
                </DevInformBlock>
                <DevCategoryName>Backend Developer</DevCategoryName>
                <DevInformBlock>
                    <DevInformImg src="sod.jpg" />
                    <DevInformDescript>
                        <DevName>Sodotov Sergei</DevName>
                    </DevInformDescript>
                </DevInformBlock>
                <DevInformBlock>
                    <DevInformImg src="and.jpg"/>
                    <DevInformDescript>
                    <DevName>Andrei Lyashchevski</DevName>
                    </DevInformDescript>
                </DevInformBlock>
            </OurTeamWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(OurTeam)
