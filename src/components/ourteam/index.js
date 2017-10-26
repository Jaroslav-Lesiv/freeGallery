import React, { Component } from 'react'
import { connect } from 'react-redux'
import { user } from '../../actions/user'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { OurTeamWrapper, DevCategoryName, DevInformBlock, DevInformImg, DevInformDescript } from '../../ui/components/ourteam'

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
                        Jaroslav Lesiv
                    </DevInformDescript>
                </DevInformBlock>
                <DevCategoryName>Backend Developer</DevCategoryName>
                <DevInformBlock>
                    <DevInformImg src="sod.jpg" />
                    <DevInformDescript>
                        Sodotov Sergei
                    </DevInformDescript>
                </DevInformBlock>
                <DevInformBlock>
                    <DevInformImg src="and.jpg"/>
                    <DevInformDescript>
                        Andrei Lyashchevski
                    </DevInformDescript>
                </DevInformBlock>
            </OurTeamWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(OurTeam)
