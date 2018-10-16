/**
 * External dependencies
 */
import React from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { FEATURE_PRIVATE_JETPACK } from 'lib/plans/constants';
import { ModuleSettingsForm as moduleSettingsForm } from 'components/module-settings/module-settings-form';
import { ModuleToggle } from 'components/module-toggle';
import SettingsCard from 'components/settings-card';
import SettingsGroup from 'components/settings-group';
import { FormFieldset } from 'components/forms';

class Private extends React.Component {
	render() {
		const module_enabled = this.props.getOptionValue( 'private' );
		return (
			<SettingsCard
				{ ...this.props }
				module="private"
				feature={ FEATURE_PRIVATE_JETPACK }
				hideButton
			>
				<SettingsGroup
					hasChild
					module={ { module: 'private' } }
					support={ {
						text: __( 'Jetpack private sites' ),
						link: 'https://jetpack.com/support/private',
					} }
				>
					<p>{ __( 'Private sites can only be seen by you and users your approve.' ) } </p>

					<ModuleToggle
						slug="private"
						compact
						activated={ module_enabled }
						toggling={ this.props.isSavingAnyOption( 'private' ) }
						toggleModule={ this.props.toggleModuleNow }
					>
						{ __( 'Make your site private' ) }
					</ModuleToggle>

					{ module_enabled && (
						<FormFieldset>
							<p className="jp-form-setting-explanation">
								{ __( 'Your site is only visible to you and users you approve.' ) }
							</p>
						</FormFieldset>
					) }
				</SettingsGroup>
			</SettingsCard>
		);
	}
}

export default moduleSettingsForm( Private );
